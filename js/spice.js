let templateHTML = "";
let spiceObj = {}, spiceArray = [], flavorsArray = [], typeArray = [], originArray = [];
const genericAnchor = `<a class="spiceattr" href="#{key}%3A{f}" data-column="{key}" data-value="{f}">{d}</a>`;
const flavorAnchor = genericAnchor.replace(/\{key\}/g, "flavors");
const DisplayName = s => s.split("_").map(e => `${e[0].toUpperCase()}${e.substring(1)}`).join(" ");
const licenses = {
    "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/deed.en",
    "CC BY-SA 3.0": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
    "CC BY-SA 2.5": "https://creativecommons.org/licenses/by-sa/2.5/deed.en",
    "CC BY-SA 2.0": "https://creativecommons.org/licenses/by-sa/2.0/",
    "CC BY-SA 1.0": "https://creativecommons.org/licenses/by-sa/1.0/deed.en",
    "CC BY 3.0": "https://creativecommons.org/licenses/by/3.0/deed.en",
    "CC BY 2.0": "https://creativecommons.org/licenses/by/2.0/deed.en",
    "CC0 1.0": "https://creativecommons.org/publicdomain/zero/1.0/",
    "Public Domain": "https://en.wikipedia.org/wiki/Public_domain"
};
const ArrayToSpiceString = array => {
    array.sort((a, b) => (a.id > b.id) - (a.id < b.id));
    return array.map(e => spiceObj[e.id] ? `<a class="spice" href="#${e.id}" data-spice="${e.id}">${spiceObj[e.id].name}</a>` : DisplayName(e.id) ).join(", ");
};
const ArrayToLinkString = (spice, objKey, propId) => {
    const array = spice[objKey]; array.sort();
    return array.map(e => genericAnchor.replace(/\{key\}/g, objKey).replace(/\{f\}/g, e[propId]).replace(/\{d\}/g, DisplayName(e[propId]))).join(", ");
};
const GetQueryObj = searchCond => {
    if(searchCond.indexOf(":") < 0) { return { column: "search", value: searchCond }; }
    else {
        const split = searchCond.split(":");
        return { column: split[0], value: split[1] };
    }
}
function ScrollTop() { document.body.scrollTop = document.documentElement.scrollTop = 0; }

function RenderEmojis() {
    $(".emoji").each(function() {
        const unicode = twemoji.convert.fromCodePoint($(this).attr("class").replace("emoji e", ""));
        $(this).html(twemoji.parse(unicode));
    });
}
function GetSpiceHTML(spiceID) {
    const spice = spiceArray.filter(e => e.id === spiceID)[0];
    const imgLicense = spice.license[0];
    let license = "";
    if(imgLicense !== undefined) {
        license = `"<a href="${imgLicense.imgURL}">${imgLicense.imgName}</a>" by <a href="${imgLicense.authorURL}">${imgLicense.authorName}</a> is licensed under <a href="${licenses[imgLicense.licenseName]}">${imgLicense.licenseName}</a>.`;
    } 
    if(spice === undefined) { return ""; }
    spice.flavors.sort();
    const flavors = spice.flavors.map(e => flavorAnchor.replace(/\{f\}/g, flavorsArray[e.flavor]).replace(/\{d\}/g, DisplayName(flavorsArray[e.flavor]))).join(", ");
    const recipes = spice.recipes.map(e => `<a href="${e.url}" target="_blank">${e.name}</a>`).join(", ");
    const cinnamons = spice.cinnamons.length === 0 ? "" : `<p><strong>AKA: </strong>${spice.cinnamons.map(e => e.name.replace(/_/g, " ")).join(", ")}</p>`;
    const relatedArr = ArrayToSpiceString(spice.relatedSpices);
    const related = spice.relatedSpices.length === 0 ? "" : `<li class="list-group-item spice-col"><strong>Related:</strong> ${relatedArr}</li>`;
    const baseTemplate = templateHTML.replace(/\{name\}/g, spice.name)
                                     .replace(/\{emoji\}/g, `emoji e${spice.emoji}`)
                                     .replace(/\{img\}/g, spice.id)
                                     .replace(/\{type\}/g, typeArray[spice.type]) // TODO: replace?
                                     .replace(/\{imgtext\}/g, spice.imgDesc)
                                     .replace(/\{synonyms\}/g, cinnamons)
                                     .replace(/\{license\}/g, license)
                                     .replace(/\{desc\}/g, spice.description || "No Description Yet")
                                     .replace(/\{origin\}/g, spice.origin || "No Data Yet")
                                     .replace(/\{flavor\}/g, flavors)
                                     .replace(/\{serves\}/g, ArrayToLinkString(spice, "foods", "food"))
                                     .replace(/\{related\}/g, related)
                                     .replace(/\{use\}/g, ArrayToLinkString(spice, "dishes", "dish"));
    if(typeArray[spice.type] === "blend") {
        return baseTemplate.replace(/\{blendOrSpice\}/g, "blendCard")
                           .replace(/\{species\}/g, "Spice Blend")
                           .replace(/\{components\}/g, relatedArr);
    } else {
        return baseTemplate.replace(/\{blendOrSpice\}/g, "spiceCard")
                           .replace(/\{species\}/g, spice.species)
                           .replace(/\{pairs\}/g, ArrayToSpiceString(spice.pairsWith))
                           .replace(/\{recipes\}/g, recipes);
    }
}
function GetSpices(conditions, dontHash) {
    $("main").empty();
    if(conditions === undefined || conditions.length === 1 && conditions[0].value === "") { conditions = []; }
    if(conditions.length === 0) { return GetHomePage(); }
    if(conditions[0].column === "all") { return GetAllSpices(); }
    if(!dontHash) {
        if(conditions.length == 1 && conditions[0].column === "id") {
            location.hash = conditions[0].value;
        } else {
            location.hash = encodeURIComponent(conditions.map(e => `${e.column}:${e.value}`).join(","));
        }
    }
    conditions = conditions.map(e => ({ column: e.column, value: (
        e.column === "flavors" ? flavorsArray.indexOf(e.value.replace(/ /g, "_"))
        : (e.column === "type" ? typeArray.indexOf(e.value.replace(/ /g, "_")) : e.value.toLowerCase().replace(/ /g, "_"))
    )}));
    const availableSpices = spiceArray.filter(spice => spice.name !== "" && conditions.every(c => {
        let col = spice[c.column];
        if(typeof col === "string") { col = col.toLowerCase().replace(/ /g, "_"); }
        if(c.column === "search") {
            return spice.name.toLowerCase().indexOf(c.value) >= 0 
                    || spice.description.toLowerCase().indexOf(c.value) >= 0
                    || spice.species.toLowerCase().indexOf(c.value) >= 0
                    || spice.cinnamons.map(e => e.name).join(" ").toLowerCase().indexOf(c.value) >= 0; // TODO: optimize
        } else if(typeof col === "object") {
            return col.some(e => Object.keys(e).some(p => ((typeof e[p] === "string") ? e[p].toLowerCase() : e[p]) == c.value));
        } else {
            return col === c.value;
        }
    }));
    $("main").append(availableSpices.map(spice => GetSpiceHTML(spice.id)).join(""));
    if(availableSpices.length === 1 && conditions.length === 1 && conditions[0].column === "id") { // show related spices for single entries
        const relatedSpices = availableSpices[0].relatedSpices;
        if(relatedSpices.length > 0) {
            if(availableSpices[0].type === 2) { // blend
                $("main").append("<hr><h4 class='px-3 mt-4 mb-3'>Common Components</h4>");
            } else {
                $("main").append("<hr><h4 class='px-3 mt-4 mb-3'>Related Herbs & Spices</h4>");
            }
            $("main").append(relatedSpices.map(spice => GetSpiceHTML(spice.id)).join(""));
        }
    } else if(availableSpices.length === 0) {
        $("main").append($("#noResults").html());
    }
    RenderEmojis();
    ScrollTop();
}
function GetAllSpices() {
    $("main").append(spiceArray.map(spice => GetSpiceHTML(spice.id)).join(""));
    RenderEmojis();
    ScrollTop();
}
function GetHomePage() {
    const spiceIndexes = "a".repeat(spiceArray.length).split("").map((e, i) => i);
    const randomSpices = [];
    for(let i = 0; i < 3; i++) {
        const spiceIdx = spiceIndexes.splice(Math.floor(Math.random() * spiceIndexes.length), 1);
        if(spiceArray[spiceIdx].name === "") { i--; continue; }
        randomSpices.push(spiceArray[spiceIdx]);
    }
    $("main").append($("#welcomeMessage").html());
    $("main").append("<hr><h4 class='px-3 mt-4 mb-3'>Random Herbs & Spices</h4>");
    $("main").append(randomSpices.map(spice => GetSpiceHTML(spice.id)).join(""));
    RenderEmojis();
}

function PopulateFilterPane() {    
    const filterOptions = [
        { id: "name", display: "Name" },
        { id: "foods", display: "Serve On" },
        { id: "flavors", display: "Flavor" },
        { id: "dishes", display: "Use In" },
        { id: "origin", display: "Origin" },
        { id: "type", display: "Type" } 
    ];
    const $l = $("#filterL"), $r = $("#filterR");
    for(let i = 0; i < filterOptions.length; i++) {
        const $use = (i % 2 === 0 ? $l : $r);
        const elem = filterOptions[i];
        $use.append(`<button class='filterBtn btn btn-secondary' data-filter='${elem.id}'>${elem.display}</button>`);
    }
    $(".filterBtn").on("click", function() { DrillDeeper($(this).attr("data-filter")); });
    $("#filterBack").on("click", function() { $("#filterPane, #filterPane2").slideToggle(); });
    $(document).on("click", ".filterBtn2", function() {
        $("#filterPane, #filterPane2").slideToggle();
        $("#moreInfo").slideToggle();
        const col = $(this).attr("data-filter"), val = $(this).attr("data-value");
        GetSpices([{ column: (col === "name" ? "id" : col), value: val }]);
    });
}
function DrillDeeper(filterId) {
    const filterOptions = {
        "name": { display: "Name", array: spiceArray, displayCol: "name", idCol: "id", oneCol: true },
        "flavors": { display: "Flavor", array: flavorsArray, formatName: true },
        "foods": { display: "Serve On", array: data.sheets[2].lines, formatName: true, displayCol: "id", idCol: "id" },
        "dishes": { display: "Use In", array: data.sheets[4].lines, formatName: true, displayCol: "id", idCol: "id" },
        "origin": { display: "Origin", array: originArray },
        "type": { display: "Type", array: typeArray, formatName: true }
    }
    const elem = filterOptions[filterId];
    if(elem === undefined) { return; }
    $("#filterInner").html(`${elem.display}...`);
    const $l = $("#filter2L"), $r = $("#filter2R"), $m = $("#filter2");
    $l.empty(); $r.empty(); $m.empty();
    for(let i = 0; i < elem.array.length; i++) {
        const $use = elem.oneCol ? $m : (i % 2 === 0 ? $l : $r);
        const e = elem.array[i];
        const id = elem.idCol === undefined ? e : e[elem.idCol];
        let name = elem.displayCol === undefined ? e : e[elem.displayCol];
        if(elem.formatName !== undefined) { name = DisplayName(name); }
        if(name === "") { continue; }
        $use.append(`<button class='filterBtn2 btn btn-secondary' data-filter='${filterId}' data-value='${id}'>${name}</button>`);
    }
    if(filterId === "type") {
        $r.append(`<button id='filterViewAll' class='btn btn-secondary'>View All</button>`);
    }
    $("#filterPane, #filterPane2").slideToggle();
}

function CrossLinkSpices() {
    const innerSpice = {};
    spiceArray.forEach((e, i) => { innerSpice[e.id] = i });
    spiceArray.forEach(s1 => {
        const pairs = s1.pairsWith;
        pairs.forEach(s2 => {
            const innardRef = spiceArray[innerSpice[s2.id]];
            if(!innardRef.pairsWith.some(e => e.id === s1.id)) {
                innardRef.pairsWith.push({ id: s1.id });
            }
        });
        const related = s1.relatedSpices;
        related.forEach(s2 => {
            const innardRef = spiceArray[innerSpice[s2.id]];
            if(!innardRef.relatedSpices.some(e => e.id === s1.id)) {
                innardRef.relatedSpices.push({ id: s1.id });
            }
        });
    });
    data.sheets[0].lines = spiceArray;
}

$(function() {
    templateHTML = $("#template").html();
    spiceArray =  data.sheets[0].lines;
    $("#spiceCount").text(spiceArray.length);
    spiceArray.sort((a, b) => a.name.localeCompare(b.name));
    originArray = [...new Set(spiceArray.map(e => e.origin).filter(e => e !== ""))];
    originArray.sort();
    flavorsArray = data.sheets[1].columns[0].typeStr.substring(2).split(",");
    typeArray = data.sheets[0].columns[5].typeStr.substring(2).split(",");
    const $herbs = $("#herbs"), $spices = $("#spices"), $blends = $("#blends");
    const template = `<li class="nav-item"><a class="nav-link text-white spice" href="#1" data-spice="1">0</a></li>`;
    spiceArray.forEach(e => {
        if(e.name === "") { return; }
        spiceObj[e.id] = e;
        const val = template.replace("0", e.name).replace(/1/g, e.id);
        switch(typeArray[e.type]) {
            case "herb": $herbs.append(val); break;
            case "spice": $spices.append(val); break;
            case "blend": $blends.append(val); break;
        }
    });
    $("#hammeOfBurge").on("click", function() { $("#moreInfo").slideToggle(); });
    $(document).on("click", ".spiceHeader", function() { GetSpices([{column: "id", value: $(this).attr("data-id")}]); } );
    $(document).on("click", ".spice", function() { GetSpices([{column: "id", value: $(this).attr("data-spice")}]); });
    $(document).on("click", ".spiceattr", function() { GetSpices([{column: $(this).attr("data-column"), value: $(this).attr("data-value")}]); });
    $(document).on("mouseup", function(e) {
        const $top = $("#moreInfo"), $burg = $("#hammeOfBurge");
        if(!$top.is(":visible")) { return true; }
        if(!$top.is(e.target) && $top.has(e.target).length === 0 && !$burg.is(e.target) && $burg.has(e.target).length === 0) {
            $("#moreInfo").slideToggle();
        }
    });
    $(".copyrightLink").on("click", function() { $("main").empty().append($("#copyrightInfo").html()); ScrollTop(); return true; });
    $("#viewAll").on("click", function() { GetSpices([{column: "all"}]); return true; });
    $(document).on("click", "#filterViewAll", function() {
        $("#filterPane, #filterPane2").slideToggle();
        $("#moreInfo").slideToggle();
        location.hash = "all";
        GetSpices([{column: "all"}]);
    });
    $("#searchbox, #searchboxmobile").on("keyup", function(e) {
        if(e.which === 13) {
            if($("#moreInfo").is(":visible")) { $("#moreInfo").slideToggle(); }
            GetSpices($(this).val().split(",").map(s => GetQueryObj(s)));
            ScrollTop();
        } else {
            GetSpices($(this).val().split(",").map(s => GetQueryObj(s)), true);
        }
    });
    if(location.hash !== "") {
        const hash = decodeURIComponent(location.hash.substring(1));
        if(hash === "copyright") {
            $("main").empty().append($("#copyrightInfo").html());
            RenderEmojis();
        } else if(hash === "all") {
            GetSpices([{column: "all"}]);
        } else if(hash.indexOf(":") < 0) {
            GetSpices([{column: "id", value: hash}]);
        } else {
            const splits = hash.split(",");
            const filters = splits.map(s => { const ss = s.split(":"); return { column: ss[0], value: ss[1] }; });
            GetSpices(filters);
        }
    } else { GetSpices(); }
    $(window).on("hashchange", function() {
        const hash = decodeURIComponent(location.hash.substring(1)).replace(/_/g, " ");
        $("#searchbox").val(hash);
        $("#searchbox2").val(hash);
    });
    PopulateFilterPane();
});