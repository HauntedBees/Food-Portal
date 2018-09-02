const dateOptions = { year: "numeric", month: "long", day: "numeric" };
const foodEmojiMap = { // Dietary Restrictions
    "nut": { name: "nuts", img: "1F330" },
    "soy": { name: "soy", img: "1F331" },
    "gluten": { name: "gluten", img: "1F35E" },
    "egg": { name: "eggs", img: "1F95A" },
    "milk": { name: "dairy", img: "1F95B" }
};
function RenderEmojis() {
    $(".emoji").each(function() {
        const unicode = twemoji.convert.fromCodePoint($(this).attr("class").replace("emoji e", ""));
        $(this).html(twemoji.parse(unicode));
    });
}
function ScrollTop() { document.body.scrollTop = document.documentElement.scrollTop = 0; }

function GetFoodHTML(template, food, cat, emoji, unit) {
    let weirdDate = "TBD";
    if(food.date !== "") {
        weirdDate = new Date(food.date);
        weirdDate = new Date(weirdDate.getTime() - weirdDate.getTimezoneOffset() * -60000);
        weirdDate = weirdDate.toLocaleDateString("en-GB", dateOptions);
    }
    const dietaryRestrictions = food.restrictions.map(e => {
        const itemInfo = foodEmojiMap[e];
        return `<i class="emoji e${itemInfo.img}" title="contains ${itemInfo.name}"></i>`;
    }).join("") || "<i class='emoji e1F44C' title='no common dietary restrictions'></i>";
    return template.replace("{link}", food.url)
                   .replace("{title}", `<strong>${food.brand}</strong> ${food.item}`)
                   .replace("{typeIcon}", emoji)
                   .replace("{type}", cat.replace(/[. ]/g, ""))
                   .replace("{date}", weirdDate)
                   .replace("{rating}", `<strong>${food.rating}</strong><span class="smaller">/10</span>`)
                   .replace("{price}", `$${food.unitPrice}/${unit}`)
                   .replace("{diet}", dietaryRestrictions)
                   .replace("{text}", `${food.desc}<div><strong>Pros:</strong> ${food.pros}</div><div><strong>Cons:</strong> ${food.cons}</div>`);
}
function LoadCategory(cat) {
    const template = $("#template").html();
    if(cat === undefined) {
        $("main").empty().append($("#welcomeMessage").html());
        location.hash = "";
        const allFoods = [];
        for(const cat in food) {
            food[cat].forEach(e => { e.category = cat; allFoods.push(e); });
        }
        allFoods.sort((a, b) => new Date(b.date || "1990-01-01") - new Date(a.date || "1990-01-01"));
        for(let i = 0; i < 3; i++) {
            const food = allFoods[i];
            const cat = food.category;
            const emoji = categories[cat].emoji, unit = categories[cat].unit;
            $("main .latestReviews").append(GetFoodHTML(template, food, cat, emoji, unit));
        }
        RenderEmojis();
        return;
    }
    const results = food[cat];
    results.sort((a, b) => {
        if(a.rating < b.rating) { return 1; }
        if(a.rating > b.rating) { return -1; }
        return 0;
    });
    const emoji = categories[cat].emoji, unit = categories[cat].unit;
    $("#main").empty().append(`<h4 class="px-3 mt-4 mb-1">${cat} Alternatives</h4><hr>`);
    $("#main").append(results.map(food => GetFoodHTML(template, food, cat, emoji, unit)).join(""));
    RenderEmojis();
    ScrollTop();
}

$(function() {
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
    $(".copyrightLink").on("click", function() { $("main").empty().append($("#copyrightInfo").html()); return true; });
    
    const $cats = $(".categories");
    for(const catName in categories) {
        const catInfo = categories[catName];
        $cats.append(`<li class="nav-item"><a class="nav-link text-white" href="#${catName}" data-category="${catName}"><i class="emoji e${catInfo.emoji}"></i> ${catName}</a></li>`);
    }
    $(".nav-link").on("click", function() { LoadCategory($(this).attr("data-category")); });

    $("#moreInfo .nav-link").on("click", function() {
        $("#moreInfo").slideToggle();
        return true;
    });

    const hash = location.hash;
    if(hash !== "") {
        location.hash = hash;
        $(".sidebar-sticky")[0].scrollTop = 0;
        if(hash === "#copyright") {
            $("main").empty().append($("#copyrightInfo").html());
        } else {
            LoadCategory(decodeURIComponent(hash.replace("#", "")));
        }
    } else { LoadCategory(); }
    RenderEmojis();
});