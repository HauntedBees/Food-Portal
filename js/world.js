/* Helper Whatsits */
let viewState = 0, currentCountry = "", map; // 0 = home, 1 = country, 2 = search
let dietPlusFilters = [], dietMinusFilters = [], dishPlusFilters = [], dishMinusFilters = [];
const dateOptions = { year: "numeric", month: "long", day: "numeric" };
const foodEmojiMap = {
    // Dietary Restrictions
    "Meat": "1F356", 
    "Dairy": "1F95B", 
    "Egg": "1F95A", 
    "Spicy": "1F336",
    "Vegan": "1F33F",
    "Gluten": "1F35E", 
    "Nuts": "1F330",
    "Peanuts": "1F95C",
    // Food Types
    "Dumpling": "1F95F",
    "Pastry": "1F950",
    "Wrap": "1F959",
    "Bread": "1F35E",
    "Dessert": "1F967",
    "Sauce": "1F963",
    "Soup": "1F372"
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
    const emojiHTML = food.diet.map(diet => `<li class='nav-item'><i class='emoji e${foodEmojiMap[diet.type]}'></i> ${diet.desc}</li>`).join("");
    let weirdDate = "TBD";
    if(food.date !== "") {
        weirdDate = new Date(food.date);
        weirdDate = new Date(weirdDate.getTime() - weirdDate.getTimezoneOffset() * -60000);
        weirdDate = weirdDate.toLocaleDateString("en-GB", dateOptions);
    }
    const region = specRegion || food.region;
    let html = template.replace("{flag}", GetFlagHTML(region, true))
                    .replace("{region}", region)
                    .replace("{type}", food.type.toLowerCase())
                    .replace("{typeIcon}", `<i class='emoji e${foodEmojiMap[food.type]}' title='${food.type}'></i>`)
                    .replace("{regionName}", data[region].name)
                    .replace("{title}", food.name)
                    .replace("{date}", weirdDate)
                    .replace(/\{img\}/g, food.img)
                    .replace("{text}", food.desc)
                    .replace(/\{emoji\}/g, emojiHTML)
                    .replace("{link}", food.url);
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
        resultView.append(`<div><span title='${data[song.region].name}'>${GetFlagHTML(song.region, true)}</span> <a href = '${song.url}' target='_blank'>"${song.encoded ? decodeURIComponent(song.name) : song.name}</a></div>`);
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
    $("main .country-name").text(jeff.name);
    $("main .country-desc").text(jeff.desc);

    const hasFilters = HasFilters();
    const food = jeff.food.map(e => GetFoodHTML(e, code, hasFilters)).join("");
    
    $("main .foodNote").attr("href", jeff.foodURL);
    $("main .musicNote").attr("href", jeff.musicURL);
    $("main .left > div").html(food);
    const music = "<ul>" + jeff.music.map(m => {
        const name = m.encoded ? decodeURIComponent(m.name) : m.name;
        if(m.desc === undefined) { // todo: maybe deprecate - I don't think descs are being used
            return "<li><a href='{0}' target='_blank'>{1}</a></li>".replace("{0}", m.url).replace("{1}", name);
        } else {
            return "<li><a href='{0}' target='_blank'>{1}</a>: {2}</li>".replace("{0}", m.url).replace("{1}", name).replace("{2}", m.desc);
        }
    }).join("") + "</ul>";
    $("main .right > div").html(music);
    RenderEmojis();
    ScrollTop();
}
function DoSearch(query) {
    viewState = 2;
    $("main").empty().append($("#specificView").html());
    query = query || "";
    if(query.length === 0) {
        $("main .searchLabel").text(HasFilters() ? "Filter Results" : "All Foods");
    } else {
        $("main .searchLabel").text("Search Results for '" + query + "'" + (HasFilters() ? " plus filters" : ""));
    }
    const resultView = $("main .searchFoods");
    const foodList = GetAllData(function(a, b) { return a.name.localeCompare(b.name); }).food;
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
    <i class='emoji e{0}'></i> {1}</li>`;
    const $dietList = $(".filterFoodTypes"), dietCategories = ["Dairy", "Egg", "Gluten", "Meat", "Nuts", "Peanuts", "Spicy", "Vegan"]; 
    for(let i = 0; i < dietCategories.length; i++) {
        const food = dietCategories[i];
        const emoji = foodEmojiMap[food];
        $dietList.append(sidebarFilterTemplate.replace("{0}", emoji).replace(/\{1\}/g, food).replace("{2}", "diet"));
    }
    const $dishList = $(".filterDishTypes"), dishCategories = ["Bread", "Dessert", "Dumpling", "Pastry", "Sauce", "Soup", "Wrap"];
    for(let i = 0; i < dishCategories.length; i++) {
        const food = dishCategories[i];
        const emoji = foodEmojiMap[food];
        $dishList.append(sidebarFilterTemplate.replace("{0}", emoji).replace(/\{1\}/g, food).replace("{2}", "dish"));
    }
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

    const keys = Object.keys(data), keydata = {}, colorData = {};
    const $countryList = $(".filterCountries");
    for(let i = 0; i < keys.length; i++) {
        $countryList.append(GetFlagHTML(keys[i]));
        keydata[keys[i]] = 1;
        colorData[keys[i]] = "#FF0000";
    }
    const count = Math.round(100 * (keys.length / 206));
    if(count < 5) { // still in the A's
        const aCount = Math.round(100 * (keys.length / 13));
        $("#progressBar").css("width", aCount + "%").attr("aria-valuenow", aCount).text(keys.length + "/13 regions starting with 'A'");
    } else {
        $("#progressBar").css("width", count + "%").attr("aria-valuenow", count).text(keys.length + "/206");
    }

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