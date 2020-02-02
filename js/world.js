/* Helper Whatsits */
let viewState = 0, currentCountry = "", map; // 0 = home, 1 = country, 2 = search
let dietPlusFilters = [], dietMinusFilters = [], dishPlusFilters = [], dishMinusFilters = [];
const dateOptions = { year: "numeric", month: "long", day: "numeric" };
const foodEmojiMap = {
    // Dietary Restrictions
    "Meat": "1F356", 
    "Dairy": "1F95B", 
    "Egg": "1F95A", 
    "Honey": "1F36F", 
    "Spicy": "1F336",
    "Vegan": "1F33F",
    "Gluten": "1F35E", 
    "Fish": "1F41F", 
    "Soy": "1F331",
    "Nuts": "1F330",
    "Peanuts": "1F95C",
    "Alcohol": "1F377",
    "Warning": "26A0",
    // Food Types
    "Dumpling": "1F95F",
    "Pastry": "1F950",
    "Wrap": "1F959",
    "Bread": "1F35E",
    "Dessert": "1F967",
    "Salad": "1F957",
    "Sauce": "1F963",
    "Soup": "1F372",
    "Vegetable": "1F955",
    "Beverage": "1F379",
    "Noodle": "1F35D",
    "Rice": "1F35A",
    "Casserole": "1F372",
    "Other": "1F962",
    "Curry": "1F35B"
    // Missing Types:
    // Sandwich? <-- Wraps for now
    // Fried?
    // Side dish?
};
const GetRegionalChar = chr => String.fromCodePoint(0x1F1E6 - 65 + chr.toUpperCase().charCodeAt(0));
function RenderEmojis() {
    $(".emoji").each(function() {
        const unicode = twemoji.convert.fromCodePoint($(this).attr("class").replace("emoji e", ""));
        $(this).html(twemoji.parse(unicode));
    });
}
function GetFlagHTML(cc, justFlag) { // Country Code
    const cinfo = data[cc];
    let flag = "";
    if(cinfo.customFlag !== undefined) {
        const regional = GetRegionalChar(cinfo.customFlag[0]) + GetRegionalChar(cinfo.customFlag[1]) + "-" + GetRegionalChar(cinfo.customFlag[2]) + GetRegionalChar(cinfo.customFlag[3]);
        flag = "<img class='emoji' draggable='false' alt='" + regional + "' src='img_world/" + cinfo.customFlag + ".png'>";
    } else {
        flag = twemoji.parse(GetRegionalChar(cc[0]) + GetRegionalChar(cc[1]));
    }
    if(justFlag === true) { return flag; }
    return "<li id='" + cc + "' class='nav-item'><a class='nav-link country-link text-white' href='#" + cc + "'>" + flag + " " + cinfo.name + "</a></li>";
}
function GetAllData(foodSortFunc, excludePlaylists) {
    const keys = Object.keys(data);
    const foodList = [], musicList = [];
    for(let i = 0; i < keys.length; i++) {
        const region = data[keys[i]];
        for(let j = 0; j < region.food.length; j++) {
            const clonedFood = Object.assign({}, region.food[j]);
            clonedFood.region = keys[i];
            foodList.push(clonedFood);
        }
        for(let j = 0; j < region.music.length; j++) {
            if(excludePlaylists && region.music[j].name === "Spotify Playlist") { continue; }
            const clonedSong = Object.assign({}, region.music[j]);
            clonedSong.region = keys[i];
            musicList.push(clonedSong);
        }
    }
    if(foodSortFunc !== undefined) { foodList.sort(foodSortFunc); }
    return { food: foodList, music: musicList };
}
function RemoveValFromArray(val, arr) {
    const idx = arr.indexOf(val);
    if(idx < 0) { return; }
    arr.splice(idx, 1);
}
function Shuffle(arr) {
    let curr = arr.length, temp, rIdx;
    while(curr !== 0) {
    rIdx = Math.floor(Math.random() * curr--);
    temp = arr[curr];
    arr[curr] = arr[rIdx];
    arr[rIdx] = temp;
    }
    return arr;
}
function ScrollTop() { document.body.scrollTop = document.documentElement.scrollTop = 0; }
function GetFormattedDate(date) {
    const d = new Date(date);
    if(isNaN(d)) { return date; }
    const dShifted = new Date(d.getTime() - d.getTimezoneOffset() * -60000);
    return dShifted.toLocaleDateString("en-GB", dateOptions);
}

/* Filters and Searching */
const HasFilters = () => (dietPlusFilters.length + dietMinusFilters.length + dishPlusFilters.length + dishMinusFilters.length) > 0;
function UpdateFilters() {
    $(".foodInf.badge-primary").removeClass("badge-primary").addClass("badge-secondary");
    const adds = dietPlusFilters.concat(dishPlusFilters);
    for(let i = 0; i < adds.length; i++) {
        $("li[data-type='" + adds[i] + "'] .foodAdd").removeClass("badge-secondary").addClass("badge-primary");
    }
    const mins = dietMinusFilters.concat(dishMinusFilters);
    for(let i = 0; i < mins.length; i++) {
        $("li[data-type='" + mins[i] + "'] .foodMin").removeClass("badge-secondary").addClass("badge-primary");
    }
    if((dietPlusFilters.length + dietMinusFilters.length) > 0) {
        $(".clearIngredients").show();
    } else {
        $(".clearIngredients").hide();
    }
    if((dishMinusFilters.length + dishPlusFilters.length) > 0) {
        $(".clearDishes").show();
    } else {
        $(".clearDishes").hide();
    }
    switch(viewState) {
        case 0: LoadHome(); break;
        case 1: LoadCountry(currentCountry); break;
        case 2: DoSearch(); break;
    }
}
function IsFilterMatch(food) {
    if(dishPlusFilters.length > 0 && dishPlusFilters.indexOf(food.type) < 0) { return false; }
    if(dishMinusFilters.indexOf(food.type) >= 0) { return false; }
    const dietMatches = [];
    for(let j = 0; j < food.diet.length; j++) {
        const diet = food.diet[j].type;
        if(dietPlusFilters.indexOf(diet) >= 0 && dietMatches.indexOf(diet) < 0) { dietMatches.push(diet); }
        if(dietMinusFilters.indexOf(diet) >= 0) { return false; }
    }
    return (dietMatches.length === dietPlusFilters.length);
}
function IsSearchMatch(food, query) {
    if(query === "" || query.length === 0) { return true; }
    query = query.toLowerCase();
    let cleanName = food.name.toLowerCase().normalize();
    if(cleanName.indexOf(query) >= 0) { return true; }
    cleanName = cleanName.replace(/&euml;/g, "e").replace(/&ccedil;/g, "c"); // TODO: remember to keep me updated!
    if(cleanName.indexOf(query) >= 0) { return true; }
    for(let i = 0; i < food.ingredients.length; i++) {
        if(food.ingredients[i].indexOf(query) >= 0) { return true; }
    }
    return false;
}

/* Template Population */
function GetFoodHTML(food, specRegion, colorCode) {
    const template = $("#template").html();
    const emojiHTML = food.diet.map(diet => `<li class='nav-item'><i title='Contains ${diet.type}' class='emoji e${foodEmojiMap[diet.type]} ${diet.optional ? "optional" : ""}'></i> ${diet.desc}</li>`).join("");
    const formattedDate = food.date === "" ? "TBD" : GetFormattedDate(food.date);
    const region = specRegion || food.region;
    let html = template.replace("{flag}", GetFlagHTML(region, true))
                    .replace("{region}", region)
                    .replace("{type}", food.type.toLowerCase())
                    .replace("{typeIcon}", `<i class='emoji e${foodEmojiMap[food.type]}' title='${food.type}'></i>`)
                    .replace("{favorite}", food.favorite ? `<i class='emoji e1F31F' title='Personal Favorite'></i>` : "")
                    .replace("{regionName}", data[region].name)
                    .replace(/\{title\}/g, (food.encoded ? decodeURIComponent(food.name) : food.name))
                    .replace("{date}", formattedDate)
                    .replace(/\{img\}/g, food.img)
                    .replace("{text}", food.desc)
                    .replace(/\{emoji\}/g, emojiHTML)
                    .replace("{link}", food.url);
    if(food.databee) {
        html = html.replace("{databee}", `<a class="databee" href="https://www.hauntedbees.com/food/getRecipe/${region.toLowerCase()}/${food.databee}" target="_blank" title="Click here to get the recipe in Databee Format!" alt="Click here to get the recipe in Databee Format!" download><i class="emoji e1F41D"></i></a>`);
    } else {
        html = html.replace("{databee}", "");
    }
    if(colorCode) { html = html.replace(/bg-[a-z]+/, (IsFilterMatch(food) ? "bg-match" : "bg-nomatch")); }
    return html;
}

/* Switching Views */
function LoadHome() {
    viewState = 0;
    $("main").empty().append($("#welcomeMessage").html());
    $(".filterCountries .active").removeClass("active");
    const allData = GetAllData(function(a, b) { return new Date(b.date || "1990-01-01") - new Date(a.date || "1990-01-01"); }, true);
    const foodList = allData.food;
    let resultView = $("main .recentView");
    resultView.empty();
    for(let i = 0; i < 3; i++) {
        resultView.append(GetFoodHTML(foodList[i], undefined, HasFilters()));
    }
    resultView = $("main .randomSongs");
    resultView.empty();
    const musicList = Shuffle(allData.music);
    for(let i = 0; i < 10; i++) {
        const song = musicList[i];
        resultView.append(`<div><span title='${data[song.region].name}'>${GetFlagHTML(song.region, true)}</span> <a href = '${song.url}' target='_blank'>${song.encoded ? decodeURIComponent(song.name) : song.name}${song.favorite ? " <i class='emoji e1F31F' title='Personal Favorite'></i>" : ""}</a></div>`);
    }
    location.hash = "";
    RenderEmojis();
    ScrollTop();
}
function LoadCountry(code) {
    if(data[code] === undefined) { return; }

    viewState = 1; currentCountry = code;
    $("main").empty().append($("#countryView").html());

    $(".filterCountries .active").removeClass("active");
    $("#" + code + "> a.nav-link").addClass("active");
    
    const jeff = data[code];
    if($("#world-map").is(":visible")) {
        map.setFocus({region: (jeff.focusArea || code)});
    }
    $("main .country-name").html(GetFlagHTML(currentCountry, true) + " " + jeff.name);
    $("main .country-desc").html(jeff.desc);

    $("main .population").text(jeff.population.toLocaleString()).attr("title", "est. " + jeff.popEstimate);
    $("main .area").text(jeff.area.toLocaleString());
    if(jeff.indFrom === "X") {
        $("main .independence").text(jeff.independence);
        $("main .indFrom").text("the Void");
    } else {
        $("main .independence").text(GetFormattedDate(jeff.independence));
        $("main .indFrom").text(jeff.indFrom);
    }
    $("main .demonym").html(jeff.demonym);
    $("main .currency").html(decodeURIComponent(jeff.currency));
    $("main .neighbors").text(jeff.neighbors);
    $("main .languages").text(decodeURIComponent(jeff.languages));
    $("main .motto").text(jeff.motto);

    const hasFilters = HasFilters();
    const food = jeff.food.map(e => GetFoodHTML(e, code, hasFilters)).join("");
    
    $("main .foodNote").attr("href", jeff.foodURL);
    $("main .musicNote").attr("href", jeff.musicURL);
    $("main .left > div").html(food);
    const music = "<ul>" + jeff.music.map(m => {
        const name = m.encoded ? decodeURIComponent(m.name) : m.name;
        return "<li><a href='{0}' target='_blank'>{1} {2}</a></li>".replace("{0}", m.url).replace("{1}", name).replace("{2}", m.favorite ? "<i class='emoji e1F31F' title='Personal Favorite'></i>" : "");
    }).join("") + "</ul>";
    $("main .right > div").html(music);
    RenderEmojis();
    ScrollTop();
}
function DoSearch(query, forcedName) {
    viewState = 2;
    $("main").empty().append($("#specificView").html());
    query = query || "";
    if(forcedName !== undefined) {
        $("main .searchLabel").text(forcedName);
    }else if(query.length === 0) {
        $("main .searchLabel").text(HasFilters() ? "Filter Results" : "All Foods");
    } else {
        $("main .searchLabel").text("Search Results for '" + query + "'" + (HasFilters() ? " plus filters" : ""));
    }
    const resultView = $("main .searchFoods");
    const foodList = GetAllData(function(a, b) { return decodeURIComponent(a.name).localeCompare(decodeURIComponent(b.name), "en", {sensitivity: "base"}); }).food;
    resultView.empty();
    let count = 0;
    for(let i = 0; i < foodList.length; i++) {
        const food = foodList[i];
        if(!IsSearchMatch(food, query)) { continue; }
        if(!IsFilterMatch(food)) { continue; }
        resultView.append(GetFoodHTML(food));
        count++;
    }
    if(count === 0) { resultView.append($("#noResults").html()); }
    RenderEmojis();
    ScrollTop();
}
function LoadHits() {
    viewState = 3;
    $("main").empty().append($("#theHits").html());
    $(".filterCountries .active").removeClass("active");
    const allData = GetAllData(function(a, b) { return decodeURIComponent(a.name).localeCompare(decodeURIComponent(b.name), "en", {sensitivity: "base"}); }, true);
    const foodList = allData.food;
    let resultView = $("main .favView");
    resultView.empty();
    for(let i = 0; i < foodList.length; i++) {
        if(foodList[i].favorite === true) {
            resultView.append(GetFoodHTML(foodList[i], undefined, HasFilters()));
        }
    }
    resultView = $("main .favSongs");
    resultView.empty();
    const musicList = allData.music;
    for(let i = 0; i < musicList.length; i++) {
        const song = musicList[i];
        if(song.favorite === true) {
           resultView.append(`<div><span title='${data[song.region].name}'>${GetFlagHTML(song.region, true)}</span> <a href = '${song.url}' target='_blank'>${song.encoded ? decodeURIComponent(song.name) : song.name}${song.favorite ? " <i class='emoji e1F31F' title='Personal Favorite'></i>" : ""}</a></div>`);
        }
    }
    location.hash = "";
    RenderEmojis();
    ScrollTop();
}

$(function() {
    //Populate Sidebar
    const sidebarFilterTemplate = `
    <li class='nav-item nav-link text-white {2}' data-type='{1}'>
    <div class='foodInfContainer'>
        <a class='foodInf foodAdd badge badge-secondary'>
            <i class='emoji e2795'></i>
        </a>
        <a class='foodInf foodMin badge badge-secondary'>
            <i class='emoji e2796'></i>
        </a>
    </div> 
    <span class='justMeThanks'><i class='emoji e{0}'></i> {1} <span class='typeCount'>({3})</span></span></li>`;
    const allFoods = GetAllData().food;
    const $dietList = $(".filterFoodTypes"), dietCategories = ["Alcohol", "Dairy", "Egg", "Fish", "Gluten", "Honey", "Meat", "Nuts", "Peanuts", "Soy", "Spicy", "Vegan"];
    for(let i = 0; i < dietCategories.length; i++) {
        const food = dietCategories[i];
        const emoji = foodEmojiMap[food];
        const num = allFoods.filter(f => f.diet.some(d => d.type === food)).length;
        $dietList.append(sidebarFilterTemplate.replace("{0}", emoji).replace(/\{1\}/g, food).replace("{2}", "diet").replace("{3}", num));
    }
    const $dishList = $(".filterDishTypes"), dishCategories = ["Beverage", "Bread", "Casserole", "Curry", "Dessert", "Dumpling", "Meat", "Noodle", "Pastry", "Rice", "Salad", "Sauce", "Soup", "Vegetable", "Wrap", "Other"];
    for(let i = 0; i < dishCategories.length; i++) {
        const food = dishCategories[i];
        const emoji = foodEmojiMap[food];
        const num = allFoods.filter(f => f.type === food).length;
        $dishList.append(sidebarFilterTemplate.replace("{0}", emoji).replace(/\{1\}/g, food).replace("{2}", "dish").replace("{3}", num));
    }
    $(".justMeThanks").on("click", function() {
        const $parent = $(this).closest("li");
        const val = $parent.attr("data-type");
        let msg = "";
        dietPlusFilters = []; dietMinusFilters = [];
        dishPlusFilters = []; dishMinusFilters = [];
        if($parent.hasClass("diet")) {
            msg = `All Dishes with ${val}`;
            dietPlusFilters.push(val);
        } else {
            msg = `All ${val} Dishes`;
            dishPlusFilters.push(val);
        }
        UpdateFilters();
        DoSearch("", msg);
        if($(this).closest("ul").hasClass("inner")) { $("#moreInfo").slideToggle(); }
    });
    $(".foodAdd").on("click", function() {
        const $parent = $(this).closest("li");
        const val = $parent.attr("data-type");
        if($parent.hasClass("diet")) {
            if(dietPlusFilters.indexOf(val) >= 0) {
                RemoveValFromArray(val, dietPlusFilters);
            } else {
                RemoveValFromArray(val, dietMinusFilters);
                dietPlusFilters.push(val);
            }
        } else {
            if(dishPlusFilters.indexOf(val) >= 0) {
                RemoveValFromArray(val, dishPlusFilters);
            } else {
                RemoveValFromArray(val, dishMinusFilters);
                dishPlusFilters.push(val);
            }
        }
        UpdateFilters();
    });
    $(".foodMin").on("click", function() {
        const $parent = $(this).closest("li");
        const val = $parent.attr("data-type");
        if($parent.hasClass("diet")) {
            if(dietMinusFilters.indexOf(val) >= 0) {
                RemoveValFromArray(val, dietMinusFilters);
            } else {
                RemoveValFromArray(val, dietPlusFilters);
                dietMinusFilters.push(val);
            }
        } else {
            if(dishMinusFilters.indexOf(val) >= 0) {
                RemoveValFromArray(val, dishMinusFilters);
            } else {
                RemoveValFromArray(val, dishPlusFilters);
                dishMinusFilters.push(val);
            }
        }
        UpdateFilters();
    });
    $(".mobileSearchExpand").on("click", function() {
        const isOpen = $(this).attr("data-open") === "1";
        if(isOpen) {
            $("i", $(this)).removeClass("e2796").addClass("e2795");
            $(this).attr("data-open", "0");
            $(`.${$(this).attr("data-for")}.inner`).slideToggle();
        } else {
            $("i", $(this)).removeClass("e2795").addClass("e2796");
            $(this).attr("data-open", "1");
            $(`.${$(this).attr("data-for")}.inner`).slideToggle();
        }
        RenderEmojis();
    });
    $(document).on("click", ".justTheHits", function() {
        LoadHits();
        return false;
    });

    const keys = Object.keys(data), keydata = {}, colorData = {};
    const $countryList = $(".filterCountries");
    const sectionHTML = "<li><ul class='letter' style='display:none' data-letter='0'></ul></li>";
    const letterHeaderHTML = `<li>
        <h6 class='letterHeader sidebar-heading d-flex justify-content-between align-items-center px-3 mt-2 mb-1 text-white-50'>
        XXX
        <a class="badge badge-secondary letterExpand" data-open="0" data-letter="XXX"><i class="emoji e2795"></i></a>
        </h6>
    </li>`;
    let currentLetter = "A", $section = $(sectionHTML.replace("0", "A")), $secList = $section.find("ul");
    for(let i = 0; i < keys.length; i++) {
        const cc = keys[i];
        const startLetter = data[cc].realFirstLetter || data[cc].name[0];
        if(startLetter !== currentLetter) {
            $countryList.append(letterHeaderHTML.replace(/XXX/g, currentLetter));
            $countryList.append($section);
            currentLetter = startLetter;
            $section = $(sectionHTML.replace("0", currentLetter));
            $secList = $section.find("ul");
        }
        $secList.append(GetFlagHTML(cc));
        keydata[cc] = 1;
        colorData[cc] = "#FF0000";
    }
    $countryList.append(letterHeaderHTML.replace(/XXX/g, currentLetter));
    $countryList.append($section);
    $(".letterExpand:last").attr("data-open", "1").find("i").removeClass("e2795").addClass("e2796");
    $("ul.letter:last").show();
    $(".letterExpand").on("click", function() {
        if($(this).attr("data-open") === "1") {
            $(this).attr("data-open", "0").find("i").removeClass("e2796").addClass("e2795");
            $(this).closest("ul").find(`ul.letter[data-letter='${$(this).attr("data-letter")}']`).slideUp();
        } else {
            $("ul.letter").slideUp();
            $("a.letterExpand").attr("data-open", "0").find("i").removeClass("e2796").addClass("e2795");
            $(this).attr("data-open", "1").find("i").removeClass("e2795").addClass("e2796");
            $(this).closest("ul").find(`ul.letter[data-letter='${$(this).attr("data-letter")}']`).slideDown();
        }
        RenderEmojis();
    });

    const count = Math.round(100 * (keys.length / 206));
    $("#progressBar").css("width", count + "%").attr("aria-valuenow", count).text(keys.length + "/206 regions");
    //const aCount = Math.round(100 * (keys.length / 13));
    //$("#progressBar2").css("width", aCount + "%").attr("aria-valuenow", aCount).text("13/13 regions starting with 'A'");
    //const bCount = Math.round(100 * ((keys.length - 13) / 17));
    //$("#progressBar2").css("width", bCount + "%").attr("aria-valuenow", bCount).text((keys.length - 13) + "/17 regions starting with 'B'");
    //const cCount = Math.round(100 * ((keys.length - 30) / 19));
    //$("#progressBar2").css("width", cCount + "%").attr("aria-valuenow", cCount).text((keys.length - 30) + "/19 regions starting with 'C'");
    //const dCount = Math.round(100 * ((keys.length - 49) / 4));
    //$("#progressBar2").css("width", dCount + "%").attr("aria-valuenow", dCount).text((keys.length - 49) + "/4 regions starting with 'D'");
    const eCount = Math.round(100 * ((keys.length - 53) / 8));
    $("#progressBar2").css("width", eCount + "%").attr("aria-valuenow", eCount).text((keys.length - 53) + "/8 regions starting with 'E'");

    // Mobile Setup
    $(document).on("mouseup", function(e) {
        const $top = $("#moreInfo"), $burg = $("#hammeOfBurge");
        if(!$top.is(":visible")) { return true; }
        if(!$top.is(e.target) && $top.has(e.target).length === 0 && !$burg.is(e.target) && $burg.has(e.target).length === 0) {
            $("#moreInfo").slideToggle();
        }
    });
    $("#hammeOfBurge").on("click", function() { $("#moreInfo").slideToggle(); });
    $(document).on("click", "#moreInfo .country-link", function() {
        $("#moreInfo").slideToggle();
        return true;
    });
    $(document).on("click", ".mobileTabs a", function() {
        if($(this).hasClass("viewLeft")) {
            $(".viewRight").removeClass("active");
            $(".viewLeft").addClass("active");
            $(".right").hide();
            $(".left").show();
        } else {
            $(".viewRight").addClass("active");
            $(".viewLeft").removeClass("active");
            $(".right").show();
            $(".left").hide();
        }
        return false;
    });

    // Map Setup
    if($("#world-map").is(":visible")) {
        map = new jvm.Map({
            container: $("#world-map"),
            map: "world_mill",
            zoomButtons: false, 
            series: { regions: [{ attribute: "fill", values: keydata }] },
            onRegionClick: (e, code) => LoadCountry(code)
        });
        map.series.regions[0].setValues(colorData);
    }

    // Navbar Controls
    $(".country-link").on("click", function() {
        LoadCountry($(this).attr("href").replace("#", ""));
        location.hash = $(this).attr("href");
        $(".sidebar-sticky")[0].scrollTop = 0;
        return true;
    });
    $(".clearDishes").on("click", function() {
        dishPlusFilters = [];
        dishMinusFilters = [];
        UpdateFilters();
    });
    $(".clearIngredients").on("click", function() {
        dietPlusFilters = [];
        dietMinusFilters = [];
        UpdateFilters();
    });
    $("#searchbox").on("click", function() { DoSearch(); });
    $("#searchbox").on("keyup", function() { DoSearch(); });

    $("#searchbox, #searchboxmobile").on("keyup", function(e) {
        if(e.which === 13) {
            if($("#moreInfo").is(":visible")) { $("#moreInfo").slideToggle(); }
            DoSearch($(this).val());
        } else {
            DoSearch($(this).val());
        }
    });

    $(".copyrightLink").on("click", function() { $("main").empty().append($("#copyrightInfo").html()); return true; });

    const hash = location.hash;
    UpdateFilters();
    if(hash !== "") {
        location.hash = hash;
        $(".sidebar-sticky")[0].scrollTop = 0;
        if(hash === "#copyright") {
            $("main").empty().append($("#copyrightInfo").html());
        } else {
            LoadCountry(hash.substring(1));
        }
    }
});