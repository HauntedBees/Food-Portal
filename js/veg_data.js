const categories = {
    "Milk": {
        desc: "When it comes to baking and cooking, pretty much any milk substitute's gonna be good enough. Soy milk, coconut milk, whatever. It's gonna work. And when it comes to milking up a beverage like a latte, it's gonna be the same thing. But I'm a milk drinker. I drink whole milk on its own as a beverage. Accompanying meals. On its own. With snacks. Milk. These milk substitutes are evaluated on how close they are to whole fat cow milk in texture and taste. Bonus points will be added if a milk tastes really good, even if it doesn't taste like cow milk. I will not be evaluating any almond milks because I am from California and almonds are water-hogging bastards.",
        emoji: "1F95B", unit: "qt"
    },
    "Cheese": {
        desc: "When it comes to cheese, how it reacts when cooked is important. Some cheeses melt. Some get super gooey. Some make great fondue, others make great grilled cheese sandwiches. Vegan cheeses will be graded based on how accurately they mimic real cheese in these ways and in terms of flavor.",
        emoji: "1F9C0", unit: "oz"
    },
    "Misc. Dairy": {
        desc: "Anything that normally has milk in it, but isn't actually milk. Or cheese. Graded based on accuracy in taste and texture.", 
        emoji: "1F404", unit: "oz"
    },
    "Beef": {
        desc: "The meat of the cow. Both vegan and vegetarian substitutes will be graded based on their flavor and texture accuracy.",
        emoji: "1F354", unit: "oz"
    },
    "Poultry": {
        desc: "This is probably just going to be chicken and turkey. Foods will be graded based on their flavor and texture accuracy.",
        emoji: "1F357", unit: "oz"
    },
    "Misc. Meat": {
        desc: "Imitation meats that either don't fit into the other categories, or vegetarian and vegan foods that are trying to be meat substitutes for no specific kind of meat.",
        emoji: "1F356", unit: "oz"
    }
};
const food = {
    "Misc. Meat": [
        { brand: "West Soy", item: "Cubed Seitan", date: "2018-03-04", url: "http://www.westsoytofu.com/products/detail.html/seitan/cubed-seitan", 
            desc: "It's chewy. That's really all there is to say about it. You can marinate it and it'll take on the flavor pretty well, but that won't make it any easier on the teeth.", 
            pros: "A clean slate for whatever flavors you want to marinate it in.", 
            cons: "Very tough and chewy.",
            unitPrice: "0.50", rating: 4, restrictions: ["soy", "gluten"]
        }
    ],
    "Poultry": [
        { brand: "Gardein", item: "Chick'n Sliders", date: "2018-01-07", url: "https://www.gardein.com/products/chicken-sliders/", 
            desc: "Tastes like real breaded chicken sliders. Contains beetroot, so you know it's good.", 
            pros: "Accurate taste and texture.", 
            cons: "Cooking them in the microwave takes more steps than one would expect from a frozen microwavable dish.",
            unitPrice: "0.40", rating: 7.5, restrictions: ["soy", "gluten"]
        },
        { brand: "Gardein", item: "Seven Grain Crispy Tenders", date: "2018-01-21", url: "https://www.gardein.com/products/seven-grain-crispy-tenders-2/", 
            desc: "Tastes like chicken tenders, as far as I'm concerned. The coating falls off very easily, though.", 
            pros: "Flavor is accurate. The seven grain coating are a nice twist on the classic breading.", 
            cons: "Coating comes off easily.",
            unitPrice: "0.5", rating: 9, restrictions: ["soy", "gluten"]
        },
        { brand: "Gardein", item: "Chick'n Scallopini", date: "2018-01-21", url: "https://www.gardein.com/products/chickn-scallopini/", 
            desc: "Not bad, but I still have like half of the bag in my freezer over half a year after buying them, so I can't exactly call them great.", 
            pros: "Tastes like chicken.", 
            cons: "Doesn't taste like good chicken.",
            unitPrice: "0.40", rating: 5, restrictions: ["soy"]
        },
        { brand: "Gardein", item: "Mandarin Crispy Chick'n", date: "2018-02-04", url: "https://www.gardein.com/products/mandarin-orange-crispy-chickn/", 
            desc: "Pretty good chicken. Add some Panda Express Orange Sauce and it almost feels like you're eating real Orange Chicken.", 
            pros: "Good flavor. Good texture.", 
            cons: "Breading comes off easily. I have like ten of the Mandarin sauce packets in my freezer.",
            unitPrice: "0.38", rating: 8, restrictions: ["soy", "gluten"]
        },
        { brand: "Boca", item: "Chik'n Veggie Nuggets", date: "2018-02-11", url: "http://www.kraftrecipes.com/products/boca-chikn-vegan-nuggets-10-oz--185.aspx", 
            desc: "Relatively adequate chicken nuggets. They aren't great, but not because they're fake chicken.", 
            pros: "Tastes like real chicken.", 
            cons: "Average all around.",
            unitPrice: "0.40", rating: 6.5, restrictions: ["soy", "gluten"]
        },
        { brand: "Gardein", item: "Teriyaki Chick'n", date: "2018-03-25", url: "https://www.gardein.com/products/teriyaki-chickn-strips/", 
            desc: "Tastes like real teriyaki chicken. Real frozen teriyaki chicken.", 
            pros: "Accurate flavor and texture.", 
            cons: "Adequate flavor and texture.",
            unitPrice: "0.48", rating: 6, restrictions: ["soy", "gluten"]
        },
        { brand: "Quorn", item: "Meatless Chicken Nuggets", date: "2018-04-08", url: "https://www.quorn.us/products/chicken-nuggets", 
            desc: "As far as my mouth and stomach can tell, these are chicken nuggets.", 
            pros: "Delicious. They satisfy the urge for the almighty chicky nugg.", 
            cons: "None.",
            unitPrice: "0.47", rating: 10, restrictions: ["gluten", "egg", "milk"]
        },
        { brand: "Gardein", item: "Turk'y Cutlet", date: "2017-11-20", url: "https://www.gardein.com/products/turky-cutlet/", 
            desc: "Absolutely disgusting. A rare failure from Gardein, a company that - other than this - has always made decent-at-worst fake meats.", 
            pros: "It's cheap so you don't feel too bad about throwing it away.", 
            cons: "Everything about it.",
            unitPrice: "0.49", rating: 1, restrictions: ["soy", "gluten"]
        }
    ],
    "Beef": [
        { brand: "Gardein", item: "Beefless Sliders", date: "2018-01-03", url: "https://www.gardein.com/products/beefless-slider/", 
            desc: "Compared to White Castle brand frozen sliders, they're pretty accurate. Downside is they don't come with any cheese or anything and heating them takes multiple steps.", 
            pros: "Tastes just as good as any other frozen beef sliders.", 
            cons: "You need to supply the accoutrements yourself. Cooking them in the microwave is A Process.",
            unitPrice: "0.35", rating: 8.5, restrictions: ["soy", "gluten"]
        },
        { brand: "Gardein", item: "Beefless Burgers", date: "2018-01-07", url: "https://www.gardein.com/products/beefless-burger/", 
            desc: "Pretty good frozen burger patties. Put 'em in a burger with cheese and such, and you can barely notice the difference.", 
            pros: "Tasty. Texture is pretty accurate.", 
            cons: "None.",
            unitPrice: "0.42", rating: 8, restrictions: ["soy", "gluten"]
        },
        { brand: "Gardein", item: "Beefless Ground", date: "2018-01-09", url: "https://www.gardein.com/products/gluten-free-beefless-ground/", 
            desc: "Flavor is pretty beefy. Texture is a bit dry and a bit too crumbly. If cooked just right, though, it gets pretty close to the real thing.", 
            pros: "Flavor is accurate. Texture comes close.", 
            cons: "The \"ground\" in \"ground beef\" is the adjective, not the noun! \"Beefless ground\" is just dirt!",
            unitPrice: "0.36", rating: 7, restrictions: ["soy"]
        },
        { brand: "Trader Joe's", item: "Beef-less Ground Beef", date: "2018-04-08", url: "https://www.fooducate.com/app#!page=product&id=573F1CE2-0EBF-11E1-8977-1231380C180E", 
            desc: "I have not purchased any other brand of ground beef - vegan or real - since I first tried this, and I haven't even wanted to.", 
            pros: "Accurate flavor, accurate texture, delicious.", 
            cons: "Smells a bit like dog food before being cooked. Recipes need to be adjusted to account for the fact it's already cooked.",
            unitPrice: "0.25", rating: 10, restrictions: ["soy", "gluten"]
        },
        { brand: "Field Roast", item: "FieldBurger", date: "2018-06-13", url: "https://fieldroast.com/product/fieldburger/", 
            desc: "Tastes pretty close to a real hamburger. You can tell that it's made of vegetables, but barely.", 
            pros: "Cooks and tastes like a real burger.", 
            cons: "I don't want carrots in my hamburger.",
            unitPrice: "0.56", rating: 8, restrictions: ["gluten"]
        },
        { brand: "Amy's Kitchen", item: "All American Veggie Burger", date: "2018-08-05", url: "https://www.amys.com/our-foods/all-american-veggie-burger", 
            desc: "It's a pretty good hamburger. Can't really notice that it's veggies.", 
            pros: "Cooks and tastes like a real burger.", 
            cons: "None.",
            unitPrice: "0.40", rating: 8, restrictions: ["soy", "gluten", "nut"]
        },
        { brand: "Beyond", item: "The Beyond Burger", date: "2017-12-20", url: "http://beyondmeat.com/products/view/beyond-burger", 
            desc: "One of the best burgers I have ever eaten - including real beef hamburgers. However they also gave me, well, let's just say my stomach and butt weren't as happy as my mouth was.", 
            pros: "Absolutely delicious. Texture? Perfect. Flavor? Perfect. Everything about them? Perfect.", 
            cons: "My lower half disagrees with the above claims. If you can handle pea protein, then you should absolutely buy this burger - it's a 10/10.",
            unitPrice: "0.75", rating: 0, restrictions: []
        }
    ],
    "Misc. Dairy": [
        { brand: "Miyoko's", item: "Cultured Vegan Butter", date: "2018-04-08", url: "https://miyokos.com/collections/vegan-butter/products/vegan-butter", 
            desc: "Melts and cooks like real butter. Flavor is a bit off though, but it usually isn't noticable unless it's a very buttery dish.", 
            pros: "Behaves like real butter when cooking and baking.", 
            cons: "Slight hint of a non-butter flavor.",
            unitPrice: "0.62", rating: 8, restrictions: ["nut"]
        },
        { brand: "Daiya", item: "Homestyle Ranch Dressing", date: "2018-03-04", url: "https://daiyafoods.com/our-foods/dressings/homestyle-ranch/", 
            desc: "I can't notice much of a difference between this and the real thing.", 
            pros: "Tasty with chicken nuggets.", 
            cons: "None I can notice.",
            unitPrice: "0.60", rating: 10, restrictions: []
        }
    ],
    "Cheese": [
        { brand: "Follow Your Heart", item: "Mozzarella-style Slices", date: "2018-01-03", url: "http://followyourheart.com/products/mozzarella-style/", 
            desc: "Pretty accurate slices. Doesn't melt as great as the real thing, but the flavor is relatively accurate. Good in sandwiches.", 
            pros: "Flavor and texture are great.", 
            cons: "Slow to melt.",
            unitPrice: "0.71", rating: 8, restrictions: []
        },
        { brand: "Follow Your Heart", item: "American Slices", date: "2018-01-07", url: "http://followyourheart.com/products/american-style/", 
            desc: "The flavor is as accurate as my taste-buds can detect, but part of the appeal of American cheese is its super meltability, which this is lacking.", 
            pros: "Tastes like the real thing, and is probably a lot healthier and less artificial.", 
            cons: "Slow to melt.",
            unitPrice: "0.71", rating: 8, restrictions: []
        },
        { brand: "Follow Your Heart", item: "Parmesan-style Shreds", date: "2018-01-07", url: "http://followyourheart.com/products/parmesan/", 
            desc: "Softer than real Parmesan. Probably not the best for cooking with, but perfect for sprinkling on top of a finished dish.", 
            pros: "Tastes like the real thing.", 
            cons: "Doesn't cook as well as the real thing.",
            unitPrice: "1.37", rating: 9, restrictions: []
        },
        { brand: "Tofutti", item: "Better than Cream Cheese", date: "2018-01-09", url: "https://tofutti.com/frozen-desserts/better-than-cream-cheese/non-hydrongenated-plain/", 
            desc: "It lives up to its name. Way better than the standard cream cheese you'd find in a generic grocery store.", 
            pros: "Flavor is great and it melts and feels like the real thing.", 
            cons: "Possibly less healthy than the real thing, which already isn't very healthy.",
            unitPrice: "0.66", rating: 10, restrictions: ["soy"]
        },
        { brand: "Field Roast", item: "Creamy Original Chao Slices", date: "2018-01-17", url: "https://fieldroast.com/product/creamy-original-chao-slices/", 
            desc: "It tastes like cheese. Not any specific type of cheese, but like a new kind of cheese. It is definitely creamy.", 
            pros: "Good flavor, very cheese-like.", 
            cons: "A bit too slow to melt.",
            unitPrice: "0.83", rating: 8.5, restrictions: ["soy"]
        },
        { brand: "So Delicious", item: "Mozzarella-flavored Shreds", date: "2018-04-18", url: "http://sodeliciousdairyfree.com/products/dairy-free-shreds/mozzarella", 
            desc: "Pretty mozzarella-y in flavor. Definitely not good for cooking with, though. They get kind of foamy when heated.", 
            pros: "Great flavor on its own.", 
            cons: "Cheese shouldn't resemble styrofoam no matter what you do to it.",
            unitPrice: "0.75", rating: 6, restrictions: []
        },
        { brand: "Daiya", item: "Cream Cheeze Style Spread", date: "2018-04-15", url: "https://daiyafoods.com/our-foods/cream-cheese-style-spreads/plain/", 
            desc: "Taste is vaguely cheese-like. Texture is nothing like any cheese I've ever seen or wanted to see.", 
            pros: "Is technically spreadable like real cream cheese.", 
            cons: "Uncomfortable texture, not too good flavor.",
            unitPrice: "0.62", rating: 4, restrictions: []
        },
        { brand: "Daiya", item: "American Style Slices", date: "2018-05-20", url: "https://daiyafoods.com/our-foods/slices/american/", 
            desc: "Bad.", 
            pros: "They melt okay.", 
            cons: "They don't taste okay.",
            unitPrice: "0.78", rating: 2, restrictions: []
        },
        { brand: "Daiya", item: "Cheddar Style Deluxe Cheeze Sauce", date: "2018-01-07", url: "https://daiyafoods.com/our-foods/sauce/cheddar-sauce/", 
            desc: "Doesn't really taste like cheese, but a big bowl of macaroni and Deluxe Cheeze Sauce makes me feel just as satisfied as the real thing.", 
            pros: "Delicious. Savory. Captures the feeling of satisfaction acquired after eating lots of cheese.", 
            cons: "Doesn't really taste like cheese.",
            unitPrice: "0.46", rating: 10, restrictions: []
        },
        { brand: "Annie's", item: "Organic Vegan Mac", date: "2018-01-07", url: "https://www.annies.com/products/pastas/organic-vegan-shells-creamy-sauce", 
            desc: "Not that good.", 
            pros: "It is indeed creamy.", 
            cons: "Doesn't taste very good, or cheesy.",
            unitPrice: "0.50", rating: 4, restrictions: ["gluten"]
        },
        { brand: "Annie's", item: "Organic Cheddar Flavor Vegan Mac", date: "2018-03-18", url: "https://www.annies.com/products/pastas/organic-cheddar-flavor-vegan-mac", 
            desc: "Better than Annie's other vegan mac, but still not that good.", 
            pros: "It isn't BAD.", 
            cons: "It isn't GOOD, either.",
            unitPrice: "0.5", rating: 5, restrictions: ["gluten"]
        }
    ],
    "Milk": [
        { brand: "Milkadamia", item: "Original Macadamia Milk", date: "2018-02-25", url: "http://www.milkadamia.com/original-macadamia-milk/",
            desc: "Tastes and feels like real milk, but is very very sweet. Almost too sweet to drink. Also ridiculously expensive - it even costs more than the fanciest most organic and grass-fed of dairy milks.",
            pros: "Smooth texture. Great for when you want something very sweet.",
            cons: "Absurdly expensive. Too sweet to drink normally.",
            unitPrice: "4.99", rating: 6.5, restrictions: ["nut"]
        },
        { brand: "Dream", item: "Original Rice Milk", date: "2018-03-18", url: "http://www.dreamplantbased.com/product/rice-dream-classic-original-organic-rice-drink/",
            desc: "Tastes and feels like real milk, but is a bit too thin (if you're a fan of skim milk, you're in luck!) and slightly too sweet. Nowhere near as sweet as macadamia milk, though.",
            pros: "Very similar to skim milk.", 
            cons: "Slightly too sweet.", 
            unitPrice: "2.99", rating: 7.5, restrictions: []
        },
        { brand: "Dream", item: "Unsweetened Rice Milk", date: "2018-03-25", url: "http://www.dreamplantbased.com/product/rice-dream-enriched-unsweetened-organic-rice-drink/",
            desc: "It solved the problem of \"their original flavor is just a bit too sweet\" but created the new problem of \"this tastes fucking disgusting.\"",
            pros: "None.", 
            cons: "It's bad.", 
            unitPrice: "3.49", rating: 2, restrictions: []
        },
        { brand: "Dream", item: "Original Soy Milk", date: "2018-03-25", url: "http://www.dreamplantbased.com/product/soy-dream-enriched-original-organic-soymilk/", 
            desc: "Nails the texture of whole milk, but has a very strong flavor that is not at all milk-like",
            pros: "Smooth texture.", 
            cons: "Strong soy flavor.", 
            unitPrice: "3.99", rating: 5, restrictions: ["soy"]
        },
        { brand: "Silk", item: "Original Soy Milk", date: "2018-04-08", url: "https://silk.com/products/original-soymilk",
            desc: "Nails the texture of whole milk, but has a bit of a different flavor. Works great in mixed drinks like lattes and hot chocolate, but not something I'd drink on its own.",
            pros: "Smooth texture. Great as a milk substitute in cooking and mixed beverages.", 
            cons: "Strong soy flavor.", 
            unitPrice: "2.24", rating: 7, restrictions: ["soy"]
        },
        { brand: "Pacific", item: "Organic Cashew Milk", date: "2018-02-25", url: "https://www.pacificfoods.com/cashew-original",
            desc: "Incredibly strong cashew flavor goes well with fuck-all. Highly recommended if you've ever eaten cashews and thought \"damn, I wish I could drink this.\" Otherwise, don't do it.",
            pros: "None.", 
            cons: "Strong cashew flavor overpowers everything.", 
            unitPrice: "3.79", rating: 2, restrictions: ["nut"]
        },
        { brand: "Pacific", item: "Original Hazelnut Milk", date: "2018-03-18", url: "https://www.pacificfoods.com/hazelnut-original",
            desc: "Pretty strong hazelnut flavor isn't too bad in drink form, but is still too overpowering for any situation other than when you really wish you could drink hazelnuts.",
            pros: "If you like hazelnuts, you're in luck!", 
            cons: "Flavor is too strong to use in any non-hazelnut situation.", 
            unitPrice: "3.29", rating: 4, restrictions: ["nut"]
        },
        { brand: "So Delicious", item: "Original Coconut Milk", date: "2018-01-07", url: "http://sodeliciousdairyfree.com/products/coconut-milk-beverages/original",
            desc: "Perfect whole milk texture, less-than-perfect coconut aftertaste. Works great in mixed drinks like hot chocolate or lattes, though. Coconut milk is also, of course, great for cooking with.",
            pros: "Great texture. Great for cooking and mixed beverages.", 
            cons: "Strong coconut flavor.", 
            unitPrice: "2.79", rating: 7.5, restrictions: []
        },
        { brand: "Pacific", item: "Original Oat Milk", date: "2018-05-27", url: "https://www.pacificfoods.com/organic-oat-original",
            desc: "Pretty close - not a strong taste, but you can still definitely tell it's made of oats. Texture is perfect.",
            pros: "Great texture. No strong aftertaste.", 
            cons: "None.", 
            unitPrice: "2.13", rating: 8, restrictions: []
        },
        { brand: "Elmhurst", item: "Milked Walnuts", date: "2018-06-25", url: "https://elmhurst1925.com/milked-walnuts.html",
            desc: "The only nut milk thus far that has made me think \"oh yeah this is the good shit right here.\" Feels exactly like regular whole milk with a walnut flavor. The strong flavor makes it not work too well as drink with meals, but makes it perfect in sweet cereals or as a drink with dessert.",
            pros: "Tastes exactly like whole milk if it had some walnuts mixed into it.", 
            cons: "Absurdly expensive.", 
            unitPrice: "4.99", rating: 8.5, restrictions: ["nut"]
        },
        { brand: "Good Karma", item: "Original Flax Milk", date: "2018-07-21", url: "https://goodkarmafoods.com/buy-flaxmilk/original-flaxmilk/",
            desc: "Free of all of the most common allergies, flax milk has a nice creamy texture that feels like real milk. A bit too thin, and its flavor is a bit too strong and sweet, but still works well as a drink with savory dishes.",
            pros: "Good texture. No aftertaste.", 
            cons: "A bit too sweet.", 
            unitPrice: "1.90", rating: 8, restrictions: []
        },
        { brand: "Mariani", item: "Original Walnutmilk", date: "2018-08-05", url: "https://marianiwalnutmilk.com/nutritionals/", 
            desc: "Tastes like water that had some walnuts in it at some point.", 
            pros: "Cheap.", 
            cons: "Watery. Strong walnut flavor.", 
            unitPrice: "1.00", rating: 3, restrictions: ["nut"]
        }
    ],
    "Template": [
        { brand: "", item: "", date: "2018-", url: "", 
            desc: "", 
            pros: "", 
            cons: "",
            unitPrice: "", rating: 0, restrictions: []
        },
        { brand: "", item: "", date: "2018-", url: "", 
            desc: "", 
            pros: "", 
            cons: "",
            unitPrice: "", rating: 0, restrictions: []
        },
        { brand: "", item: "", date: "2018-", url: "", 
            desc: "", 
            pros: "", 
            cons: "",
            unitPrice: "", rating: 0, restrictions: []
        }
    ]
};