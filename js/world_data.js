const data = {
    "AB": { // 0.2m
        customFlag: "GE-AB", focusArea: "GE",
        name: "Abkhazia", desc: "The Government Republic of Abkhazia is, according to Abkhazia, Russia, Venezuela, and a few other countries, its own country, and according to everyone else, it's just the westmost part of Georgia. Russian tourists can visit without even needing a passport!",
        population: 243206, popEstimate: 2015, area: 8660, independence: "Uhhh...", indFrom: "Georgia", demonym: "Abkhazian", currency: "Russian Rubles (&#8381;)",
        languages: "Abkhaz, Russian", motto: "Unknown", neighbors: "Georgia, Russia", 
        foodURL: "http://abkhazworld.com/aw/abkhazians/culture/654-abkhazian-cuisine",
        food: [
            { name: "Kystybyi", type: "Bread", url: "http://www.spicingyourlife.in/2016/09/qistibi-flatbread-stuffed-with-potatoes.html", date: "2018-06-01",
              img: "kystybyi1.jpg",
              desc: "A milk and flour-based flatbread fried with a mashed potato filling. I generally do not like the texture of mashed potatoes, but they were good in this. I learned the hard way that you cannot easily grate onions in a garlic press without breaking it.",
              diet: [
                  { type: "Dairy", desc: "Milk is an integral part of this recipe. You can probably use a vegan milk alternative." },
                  { type: "Gluten", desc: "Flour is used to make the dough." }
              ],
              ingredients: ["flour", "milk", "baking soda", "potato", "butter", "onion"]
            },
            { name: "Ajika", type: "Sauce", url: "https://www.saveur.com/red-ajika-recipe", date: "2018-06-01",
              img: "kystybyi1.jpg",
              desc: "A spicy salsa made with lots of aromatic ingredients. It went well with the kystybyi and has also proven delicious on other foods like cream cheese rangoons and chicken nuggets.",
              diet: [
                  { type: "Spicy", desc: "It's spicy. I only used one habanero in my recipe, so you can make it as mild as you like." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["toamto", "bell pepper", "chili", "garlic", "marigold", "blue fenugreek", "coriander"]
            }
        ],
        musicURL: "http://abkhazworld.com/aw/multimedia/music",
        music: [
            { name: "Spotify Playlist", url: "https://open.spotify.com/user/busenurtan38/playlist/0zGMZE3OFZkAXu6UaitHpr?si=aazST0FPRg621sdmHXf93g" },
            { name: "G%C3%B6khan %C5%9Een - Zahueklue Makamehar", url: "https://www.youtube.com/watch?v=PV_j5EUHnng", encoded: true, favorite: true }
        ]
    },
    "AF": { // 35m
        name: "Afghanistan", desc: "The Islamic Republic of Afghanistan is a South Asian country. If you're from the United States like me, you may know it as the country we invaded almost two decades ago and never left.",
        population: 34656032, popEstimate: 2016, area: 652864, independence: "1919-08-19", indFrom: "Britain", demonym: "Afghan", currency: "Afghan Afghani (Af)", 
        languages: "Dari, Pashto", motto: `"There is no God but Allah; Muhammad is the messenger of Allah."`, neighbors: "China, Iran, Pakistan, Tajikistan, Turkmenistan, Uzbekistan", 
        foodURL: "https://en.wikipedia.org/wiki/Afghan_cuisine",
        food: [
            { name: "Mantu", type: "Dumpling", url: "http://www.afghankitchenrecipes.com/recipe/mantu-beef-dumplings/", date: "2018-05-22",
              img: "mantu2.jpg",
              desc: "Steamed dumplings. The yogurt, mint, tomato, onion and coriander together were a very new flavor combination for me. Took a while to make, but was very delicious.",
              diet: [
                  { type: "Meat", desc: "Lamb or ground beef is an integral part of the recipe. I used a vegan ground beef substitute without issue." },
                  { type: "Dairy", desc: "The yogurt dip unsurprisingly contains yogurt. The dumplings themselves have no dairy in them." },
                  { type: "Gluten", desc: "Flour is used to make the dough." }
              ],
              ingredients: ["onion", "beef", "lamb", "garlic", "coriander", "lentil", "tomato paste", "oil", "mint", "yogurt", "yoghurt"]
            }, 
            { name: "Afghani Burger", type: "Wrap", url: "https://www.youtube.com/watch?v=DbFMpXrT_TA", date: "2018-05-23",
              img: "afghaniburg1.jpg",
              desc: "Mostly french fries wrapped in Afghan bread. Can't go wrong with a recipe that's largely french fries. Aside from the fries, I mostly just used leftover mantu filling to fill these with. Dipped in mango chutney, they were very satisfying chomps.",
              diet: [
                  { type: "Meat", desc: "Meat is a recommended filling for this recipe. I used a vegan ground beef substitute without issue." },
                  { type: "Gluten", desc: "This dish contains flatbread." },
                  { type: "Egg", desc: "Hard-boiled eggs are a recommended filling for this recipe, but I did not add any to mine.", optional: true }
              ],
              ingredients: ["flatbread", "french fry", "potato", "cilantro", "beef", "egg", "onion", "cabbage"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Afghanistan",
        music: [
            { name: "Aria Band - Dokhtar-e Feshani", url: "https://www.youtube.com/watch?v=4AdHbaVK6Fw" },
            { name: "Aryana Sayeed - Yaar-e Bamyani", url: "https://www.youtube.com/watch?v=-czdyVBMDa4" },
            { name: "Black Cats - Jooneh Khodet", url: "https://www.youtube.com/watch?v=D0MLoMFZE9o" },
            { name: "Habib Qaderi - Aftaw Baraanak", url: "https://www.youtube.com/watch?v=5DCVLFT_Anc" },
            { name: "Kabul Dreams - Chill Morghak", url: "https://www.youtube.com/watch?v=TcWxvxnK5hU" },
            { name: "Valy - Pashtou Attani", url: "https://www.youtube.com/watch?v=mROQT1dEM6w", favorite: true }
        ]
    },
    "AL": { // 2.8m
        name: "Albania", desc: "The Republic of Albania is a Mediterranean European country. Wikipedia calls them a 'developing country' but they have universal health care, so, like, they're developing better than us Americans are.",
        population: 2876591, popEstimate: 2017, area: 28748, independence: "1912-11-28", indFrom: "Ottoman Empire", demonym: "Albanian", currency: "Lek (L)", 
        languages: "Albanian", neighbors: "Greece, Kosovo, Macedonia, Montenegro", motto: `"You Albania, give me honour, give me the name Albanian."`,
        foodURL: "https://en.wikipedia.org/wiki/Albanian_cuisine",
        food: [
            { name: "Ferges&euml; Tiran&euml;s me piperka", type: "Casserole", url: "https://www.myalbanianfood.com/recipe/albanian-fergese-e-tiranes-me-piperka/", date: "2018-06-18",
              img: "tirgese1.jpg",
              desc: "I'm still not entirely sure what this is. My best guess is it's some sort of casserole or creamy dip of some sort, for like bread I guess? As a dip, it is very rich and delicious. If it's not a dip, then I accidentally made something delicious.",
              diet: [
                  { type: "Dairy", desc: "Cheese and yogurt are an integral part of this recipe." },
                  { type: "Gluten", desc: "Flour is used to make a roux." }
              ],
              ingredients: ["bell pepper", "onion", "feta cheese", "tomato", "chili flakes", "flour", "butter", "greek yogurt", "basil", "oil", "yoghurt"]
            },
            { name: "Flija", type: "Casserole", url: "https://www.myalbanianfood.com/recipe/albanian-flija-pancake/", date: "2018-06-24", 
              img: "flija2.jpg",
              desc: "Layered pancakes. Very time consuming to make, and timing is key - if you don't cook each layer just right, you'll fuck up and have some layers be way too soft and others be way too crispy like I did. Getting each layer to be similar in thickness is also an important thing I failed to do correctly. Tasted like a pancake, but with layers. Not bad, but I'm not convinced that it can beat a good old fashioned waffle, even if I made it right.",
              diet: [
                  { type: "Dairy", desc: "Butter is an integral part of this recipe, and yogurt, clotted cream, and sour cream are all recommended." },
                  { type: "Gluten", desc: "Flour is used to make the dough." }
              ],
              ingredients: ["flour", "water", "butter", "oil", "greek yogurt", "yoghurt"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Albania",
        music: [
            { name: "The Bloody Foreigners - N'deti", url: "https://www.youtube.com/watch?v=4VGsyzJkFWQ" },
            { name: "Ermal Fejzullahu ft. Gena - Ajo", url: "https://www.youtube.com/watch?v=QAqyDTbWBSI" },
            { name: "Eugent Bushpepa - Fjalet E Qiririt", url: "https://www.youtube.com/watch?v=FXDX8QurUsk" },
            { name: "Ingrit Gjoni ft. Gjeto Luca - Fustani Pika Pika", url: "https://www.youtube.com/watch?v=g8pP7U8_UsA", favorite: true }
        ]
    },
    "DZ": { // 40.6m
        name: "Algeria", desc: "The People's Democratic Republic of Algeria is a Northern African country on the Mediterranean coast. It is the largest country in Africa, but most Americans still probably can't find it on a map.", 
        population: 42200000, popEstimate: 2018, area: 2381741, independence: "1962-07-05", indFrom: "France", demonym: "Algerian", currency: "Dinar (DA)", 
        languages: "Arabic, Berber", motto: `"By the people and for the people."`, neighbors: "Libya, Mali, Mauritania, Morocco, Niger, Tunisia, West Saharan Territory", 
        foodURL: "https://en.wikipedia.org/wiki/Cuisine_of_Algeria", 
        foodNotes: "<a href='{0}'>Algerian food</a> uses a lot of tasty spices. Harissa and Ras el hanout were both tasty, both in Algerian dishes and in other recipes (ras el hanout makes Top Ramen much tastier).", 
        food: [
            { name: "Shakshouka", type: "Other", url: "https://cooking.nytimes.com/recipes/1014721-shakshuka-with-feta", date: "2018-06-26",
              img: "shakshouka.jpg",
              desc: "It's very tomatoey and eggy. Dipping bread into it is a good choice. I think you can eat it without a bread to dip in it, but I can't handle that much tomato without something else to balance it out.",
              diet: [
                    { type: "Egg", desc: "You can make this dish without eggs, but then you're eating an egg dish without eggs." },
                    { type: "Dairy", desc: "This dish optionally uses feta cheese.", optional: true }
              ],
              ingredients: ["egg", "feta cheese", "tomato", "cilantro", "garlic", "onion", "bell pepper", "cumin", "oil"]
            },
            { name: "Kanafeh", type: "Pastry", url: "https://www.closetcooking.com/2013/11/kanafeh-sweet-cheese-pastry.html", date: "2018-07-09",
              img: "kanafeh2.jpg",
              desc: "This is a dish made of phyllo dough stuffed with cheese, baked, and topped with a sugar syrup. It tastes exactly like you'd expect it to taste, which is a good thing. Highly recommended for people who don't want to worry about their roommates coming home to see them sitting down naked in the middle of the kitchen dipping a cheese wheel in maple syrup.", 
              diet: [
                { type: "Dairy", desc: "Various cheeses and butter are integral to this recipe." },
                { type: "Gluten", desc: "This recipe uses phyllo dough." }
              ],
              ingredients: ["shredded phyllo", "butter", "mozzarella", "goat cheese", "sugar", "water"]
            }
        ], 
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Algeria",
        musicNotes: "About half of the time I heard an <a href='{0}'>Algerian song</a> that made me go \"oh hell yeah\" it was by Khaled (not to be confused with DJ Khaled). Ra&#239; is the big genre in Algeria, and it is great.",
        music: [
            { name: "Cheb Nadir - Rani raya", url: "https://www.youtube.com/watch?v=yDUd_0Fm8xE" },
            { name: "Dahmane El Harrachi - Hassebni Khoud Krak", url: "https://www.youtube.com/watch?v=SWA9sBXmmtI" },
            { name: "Hamdi Benani - Habit el youm", url: "https://www.youtube.com/watch?v=_g2EHyYFhQ4" },
            { name: "Khaled - Aicha", url: "https://www.youtube.com/watch?v=wIsJbDZDNpo" },
            { name: "Khaled - C'est la vie", url: "https://www.youtube.com/watch?v=H7rhMqTQ4WI", favorite: true },
            { name: "Lim ft. Samira Talianie - Ra&#239;-ka&#239;", url: "https://www.youtube.com/watch?v=q-MCv3TRtZ4" },
            { name: "Rachid Taha - Barra Barra", url: "https://www.youtube.com/watch?v=Q-nF8ACz4k0" },
            { name: "Souda Massi - Samira Meskina", url: "https://www.youtube.com/watch?v=7kNSXFrxzj8" }
        ]
    },
    "AD": { // 77.3k
        focusArea: "ES",
        name: "Andorra", desc: "The Principality of Andorra is a microstate ruled by the French President and also the Spanish Bishop of Urgell. For some reason. One of the few countries to never be invaded by the British.",
        population: 77281, popEstimate: 2016, area: 467.63, independence: "~1218", indFrom: "Aragon", demonym: "Andorran", currency: "Euro (&#8364;)", 
        languages: "Catalan", motto: `"United virtue is stronger."`, neighbors: "France, Spain", 
        foodURL: "https://en.wikipedia.org/wiki/Catalan_cuisine",
        foodNotes: "<a href='{0}'>Andorran cuisine</a> is largely just Catalan cuisine, apparently. I won't question this, as I don't know enough about Spain, Andorra, Catalonia, France, or any of the other things that would make me qualified to do so.",
        food: [
            { name: "Torrija", type: "Bread", url: "http://honestcooking.com/easter-torrijas-decadent-spanish-toasts/", date: "2018-07-22", 
              img: "torrija.jpg",
              desc: "Definitely not French Toast. Crispy outside, creamy inside. Less of an eggy taste than regular French Toast, which is a plus in my book. A rich tasty treat.", 
              diet: [
                { type: "Gluten", desc: "This recipe is made with bread." },
                { type: "Dairy", desc: "The bread must be soaked in milk." },
                { type: "Egg", desc: "You better believe you're dipping it in eggs, too." }
             ],
             ingredients: ["bread", "milk", "sugar", "cinnamon", "egg", "oil"]
            },
            { name: "Cal&ccedil;ot", type: "Vegetable", url: "https://food52.com/recipes/17161-the-evasive-calcot-and-the-promiscuous-romesco", date: "2018-07-15", 
              img: "calcot1.jpg",
              desc: "Incredibly hard and messy to eat. But also delicious. I used Mexican grilling onions, since the internet told me those were close enough to actual cal&ccedil;ots.",
              diet: [
               { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["green onion", "oil"]
            },
            { name: "Romesco", type: "Sauce", url: "https://food52.com/recipes/17161-the-evasive-calcot-and-the-promiscuous-romesco", date: "2018-07-15", 
              img: "romesco.jpg",
              desc: "I definitely messed up on this because my version was very chunky and not very saucy. Despite this, it was still very tasty. Ramen mixed with Romesco and topped with onions is also very delicious.",
              diet: [
               { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." },
               { type: "Nuts", desc: "This recipe uses almonds." },
               { type: "Gluten", desc: "This recipe contains bread for texture." }
              ],
              ingredients: ["oil", "bell pepper", "bread", "almond", "sherry vinegar", "garlic"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Andorra",
        musicNotes: "Music from <a href='{0}'>Andorra</a> is similar to Spanish and French music - especially Catalan music.",
        music: [
            { name: "Anonymous - Salvem el m&oacute;n", url: "https://www.youtube.com/watch?v=VmiV8bbNjQo", favorite: true },
            { name: "Marta Roure - Jugarem a Estimar-nos", url: "https://www.youtube.com/watch?v=9JDvhww0vjw" },
            { name: "Persefone - One Of Many...", url: "https://www.youtube.com/watch?v=zX-gDPox-yk" }
        ]
    },
    "AO": { // 25.7m
        name: "Angola", desc: "The Republic of Angola is a West African country bordering the Atlantic Ocean. Its economy is one of the fastest growing in the world.",
        population: 25789024, popEstimate: 2014, area: 1246700, independence: "1975-11-11", indFrom: "Portugal", demonym: "Angolan", currency: "Angolan Kwanza (Kz)", 
        languages: "Portuguese", motto: `"Virtue is stronger when united."`, neighbors: "Republic of the Congo, Democratic Republic of the Congo, Namibia, Zambia", 
        foodURL: "https://en.wikipedia.org/wiki/Angolan_cuisine",
        foodNotes: "<a href='{0}'>Angolan food</a> is food from Angola.",
        food: [
            { name: "Cocada Amarela", type: "Dessert", url: "https://www.196flavors.com/angola-cocada-amarela/", date: "2018-08-05",
              img: "cocada.jpg",
              desc: "Coconutty pudding. The coconut flakes made its texture unlike most puddings. Tasty stuff.",
              diet: [
                { type: "Egg", desc: "Egg yolk is a central part of this recipe." }
              ],
              ingredients: ["coconut", "egg", "sugar", "cloves", "cinnamon"]
            },
            { name: "Moamba de Galinha", type: "Meat", url: "https://foodsfromafrica.com/angola-muamba-di-galinha-chicken-moamba-recipe/", date: "2018-07-30",
              img: "moamba.jpg",
              desc: "Chicken cooked in a red palm oil sauce. I cannot accurately describe the taste of red palm oil, but it was definitely a very new taste and I'm pretty sure I enjoyed it. Chicken is tasty.",
              diet: [
                { type: "Warning", desc: "This recipe calls for red palm oil. Please make sure you are buying sustainable palm oil if you make this recipe." },
                { type: "Spicy", desc: "It can be a bit spicy due to all the red peppers. You can use less of them or replace with bell peppies and it'll still be good." },
                { type: "Meat", desc: "Chicken meat is a central ingredient in this recipe, however, the sauce itself is vegan (if you use a vegan boullion) and can be used on non-meat things." }
              ],
              ingredients: ["chicken", "lemon", "paprika", "garlic", "cayenne", "red pepper", "palm oil", "olive oil", "tomato", "onion", "tomato paste", "bay leaf"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Angola",
        musicNotes: "Music from <a href='{0}'>Angola</a> is Angolan.",
        music: [
            { name: "Ary - Voc&ecirc; me Encangalha", url: "https://www.youtube.com/watch?v=bFP3QnEtdro" },
            { name: "Dog Murras ft. Noitre & Dia - Chacule Bum Dance (Magia)", url: "https://www.youtube.com/watch?v=LAL8zDokJVk", favorite: true },
            { name: "Kueno Aionda - Isabel", url: "https://www.youtube.com/watch?v=FIgMPLLDoCA" },
            { name: "Don Kikas - Estou Aqui", url: "https://www.youtube.com/watch?v=OWg2ySr6L7c" },
            { name: "Yola Ara&uacute;jo - Sja Paixona", url: "https://www.youtube.com/watch?v=Fljq8miMrFY" }
        ]
    },
    "AG": { // 0.1m
        name: "Antigua and Barbuda", focusArea: "PR", desc: "Antigua and Barbuda consists of two major islands and a bunch of smaller islands. It gained sovereignty from Britain in 1981, but still remains a member of the Commonwealth.",
        population: 100963, popEstimate: 2016, area: 440, independence: "1981-11-01", indFrom: "Britain", demonym: "Antiguan, Barbudan", currency: "East Caribbean Dollar ($)", 
        languages: "English", motto: `"Each Endeavouring, All Achieving."`, neighbors: "None", 
        foodURL: "https://en.wikipedia.org/wiki/Antigua_and_Barbuda_cuisine", 
        food: [
            { name: "Ducana", type: "Dumpling", url: "http://kitchen-tested.com/2011/04/10/antiguan-ducana-and-salt-fish/", date: "2018-08-07",
              img: "ducana.jpg",
              desc: "These were very filling. They felt like some sort of protein or energy bar. Tasty warm and tasty cold. Definitely a good way to fill up on something somewhat healthy. I did not prepare the salt fish referenced in this recipe due to fish allergies and I did not add raisins to the ducana because I love myself.",
              diet: [
                { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." },
                { type: "Gluten", desc: "This recipe uses flour to keep the dumplings together." }
              ],
              ingredients: ["coconut", "sweet potatoes", "sugar", "cinnamon", "nutmeg", "vanilla", "flour", "raisins"]
            },
            { name: "Antiguan Butter Bread", type: "Bread", url: "https://jesseatsandtravels.com/2018/04/11/butter-bread-from-antigua-and-barbuda/", date: "2018-08-11", 
              img: "butterbread.jpg", 
              desc: "Very tasty and buttery. The linked recipe omits a few important details - namely the amount of flour to use. I used 360g (3 cups) and altered steps 1 and 2 as follows: mix JUST the buttermilk, yeast, and sugar, then mix the butter into the flour, THEN mix the yeast mix into the flour. After that the recipe worked great.",
              diet: [
                { type: "Gluten", desc: "This is literally bread. Sorry." },
                { type: "Dairy", desc: "If you're avoiding dairy for any reason, maybe butter bread isn't the right recipe for you." }
              ],
              ingredients: ["butter", "buttermilk", "flour", "yeast", "olive oil"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Antigua_and_Barbuda", 
        music: [
            { name: "Claudette Peters - Out Deh", url: "https://www.youtube.com/watch?v=JUHTUWyyJcc" },
            { name: "King Short Short - One Day You'll Pay", url: "https://www.youtube.com/watch?v=LvTjj0qBWDk" },
            { name: "Ricardo Drue - Walking Dead", url: "https://www.youtube.com/watch?v=0ozzOfiG6GM" },
            { name: "Ricardo Drue - Wi-Fi", url: "https://www.youtube.com/watch?v=M9mspC9wiDQ", favorite: true }
        ]
    },
    "AR": { // 43m
        name: "Argentina", desc: "The Argentine Republic is the second largest country in South America and the largest Spanish-speaking nation in the world.",
        population: 43847430, popEstimate: 2016, area: 2780400, independence: "1816-07-09", indFrom: "Spain", demonym: "Argentine", currency: "Argentine Peso ($)", 
        languages: "Spanish", motto: `"In Unity and Freedom."`, neighbors: "Bolivia, Brazil, Chile, Paraguay, Uruguay", 
        foodURL: "https://en.wikipedia.org/wiki/Argentine_cuisine",
        food: [
            { name: "Empanadas Mendocinas", type: "Pastry", url: "https://www.laylita.com/recipes/empanadas-mendocinas/", date: "2018-08-18", favorite: true,  
              img: "empanadas.jpg", desc: "Delicious. Absolutely delicious. The spice mix for the meat was great. The onions were great. The crunch was great. All great. Five stars.",
              diet: [
                { type: "Gluten", desc: "Flour is the main ingredient in the dough." },
                { type: "Dairy", desc: "This recipe uses butter and milk. You can replace the milk with water and can probably replace the butter with some other fat." },
                { type: "Meat", desc: "Ground beef is an integral part of the recipe. I used a vegan ground beef substitute without issue." },
                { type: "Egg", desc: "Egg yolk is an ingredient in the dough, and egg is used for an egg wash and optionally for sealing the empanadas." }
              ],
              ingredients: ["flour", "egg", "milk", "butter", "beef", "onion", "green onion", "paprika", "chili powder", "oregano"]
            },
            { name: "Chimichurri", type: "Sauce", url: "https://www.chowhound.com/recipes/argentine-chimichurri-sauce-28393", date: "2018-08-18", 
              img: "chimichurri.jpg", desc: "This sauce has a very strong herb flavor. Probably due to the fact that it's mostly parsley and oregano. Very tasty. Good with empanadas and meat.",
              diet: [
                { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["italian parsley", "oregano", "garlic", "red wine vinegar", "red pepper flakes", "olive oil"]
            },
            { name: "Locro", type: "Soup", url: "https://therealargentina.com/en/recipe-for-argentine-locro/", date: "2018-08-25", 
              img: "locro.jpg", desc: "It's mostly potatoes, sweet potatoes, corn, and onions. That's like the four food groups right there, so I give this stew a 4/4.",
              diet: [
                { type: "Meat", desc: "This recipe can call for a lot of meat, but I skipped pretty much all of it and used a vegan ground beef substitute without issue." }
              ],
              ingredients: ["corn", "onion", "garlic", "leek", "bacon", "sausage", "beef", "tripe", "lima beans", "cumin", "paprika", "sweet potato", "butternut squash", "potato", "green onion"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Argentina",
        music: [
            { name: "Bandana - Como Puede Ser", url: "https://www.youtube.com/watch?v=M0hvsENxKtQ" },
            { name: "La Fanfarria del Capit&aacute;n - Bella Ciao", url: "https://www.youtube.com/watch?v=GribZtF-pBo" },
            { name: "Gilda - No me Arrepiento de este Amor", url: "https://www.youtube.com/watch?v=8iUkmnLc1ec" },
            { name: "Illya Kuryaki and the Valderramas - Aguila Amarilla", url: "https://www.youtube.com/watch?v=UT5rA0T08Uk" },
            { name: "Kapanga - La Crudita", url: "https://www.youtube.com/watch?v=qSUUfTDfXiM" },
            { name: "Machito Ponce - Samantha", url: "https://www.youtube.com/watch?v=lSoViXKoiC0" },
            { name: "Mercedes Sosa - Todo Cambia", url: "https://www.youtube.com/watch?v=0khKL3tTOTs" },
            { name: "Miranda! - Ahora Que Soy Cantante", url: "https://www.youtube.com/watch?v=gY4aXuBkNG4", favorite: true },
            { name: "Tanghetto - Planet Earth", url: "https://www.youtube.com/watch?v=TdJbzE3k-r0" },
            { name: "Virus - Luna de Miel", url: "https://www.youtube.com/watch?v=XLSR7rqjilU" },
            { name: "Yerba Brava - Bastara", url: "https://www.youtube.com/watch?v=mIunvgWMzHk" }
        ]
    },
    "AM": { // 2.9m
        name: "Armenia", desc: "The Republic of Armenia is a country in Western Asia. It was the first country to adopt Christianity as its official religion.",
        population: 2924816, popEstimate: 2016, area: 29743, independence: "1991-09-21", indFrom: "Soviet Union", demonym: "Armenian", currency: "Armenian Dram (&#1423;)", 
        languages: "Armenian", motto: `"One Nation, One Culture."`, neighbors: "Artsakh, Azerbaijan, Georgia, Iran, Turkey", 
        foodURL: "https://en.wikipedia.org/wiki/Armenian_cuisine",
        food: [
            { name: "Spas" , type: "Soup", url: "http://www.thearmeniankitchen.com/2015/05/spas-madzoon-yogurt-soup-with-grains.html", date: "2018-09-02",
              img: "spas.jpg", desc: "Unsurprisingly, this minty yogurt soup tastes a lot like minty yogurt. I have a cold so hopefully eating this will cure me.", 
              diet: [
                { type: "Gluten", desc: "This soup contains both flour and wheat." },
                { type: "Dairy", desc: "The primary ingredient in this soup is Greek yogurt." },
                { type: "Egg", desc: "This soup contains egg yolk, but it is an optional ingredient that is not included if serving the soup cold.", optional: true }
              ],
              ingredients: ["shelled wheat", "dzedzadz", "farro", "Greek yogurt", "yoghurt", "egg yolk", "flour", "butter", "onion", "mint", "parsley"]
            },
            { name: "Eetch" , type: "Salad", url: "https://www.youtube.com/watch?v=cOTVZZ31HpU", date: "2018-09-07",
              img: "eetch.jpg", desc: "A salad made mostly of bulgur wheat. Can be served hot or cold, and it's tasty either way.", 
              diet: [
                { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["bulgur", "onions", "tomato paste", "allspice", "green onions", "parsley", "lemon"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Armenia",
        music: [
            { name: "Arame - Ur E", url: "https://www.youtube.com/watch?v=WGxDpaFuZRU" },
            { name: "Hay TgheQ - Jaki Juki", url: "https://www.youtube.com/watch?v=-S-MAiFIpT0", favorite: true },
            { name: "Maria Nalbandian - Won't Forgive", url: "https://www.youtube.com/watch?v=M2haDgxS2P4" },
            { name: "Nemra - Shorts", url: "https://www.youtube.com/watch?v=vnwZH5jBLew" },
            { name: "Reincarnation - Mi Gdal Ser", url: "https://www.youtube.com/watch?v=w0BTtlZMXm8" },
            { name: "Sirusho - I Still Breathe", url: "https://www.youtube.com/watch?v=p8DwcwKIWMY" }
        ]
    },
    "AM-AR": { // 0.2m
        customFlag: "AM-AR", focusArea: "AZ",
        name: "Artsakh", desc: "The Republic of Artsakh, according to most countries, is part of Azerbaijan. Three other unrecognized countries, as well as various states in the USA recognize it as its own country. Despite technically being part of Azerbaijan, it is predominantly populated by Armenians, and Armenian is the region's official language.",
        population: 150932, popEstimate: 2015, area: 11458, independence: "Not Yet...", indFrom: "Azerbaijan", demonym: "Unknown", currency: "Armenian Dram (&#1423;)", 
        languages: "Armenian", motto: `Unknown`, neighbors: "Armenia, Azerbaijan, Iran", 
        foodURL: "https://armeniadiscovery.com/en/articles/what-to-eat-in-artsakh",
        food: [
            { name: "Zhingyalov hats", type: "Wrap", url: "https://heghineh.com/jingalov-hats/", date: "2018-09-09", favorite: true, 
                img: "hatsOffToYa.jpg", desc: "What happens when you make some dough and fill it with every green food you can find in your kitchen? This. A very tasty herby bread with every flavor in every bite!",
                diet: [
                    { type: "Gluten", desc: "Flour is used to make the dough." },                    
                    { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
                ],
                ingredients: ["flour", "spinach", "cilantro", "coriander", "parsley", "basil", "mint", "savory", "green onions"]
            }, 
            { name: "Dolma", type: "Vegetable", url: "https://foodwishes.blogspot.com/2015/05/lamb-rice-stuffed-grape-leaves-hours-to.html", date: "2018-09-15", 
              img: "dolma.jpg", desc: "Although the usual image of a dolma involves grape leaves, they can also be made with fresh vegetables like bell peppers, so I made both varieties. The grape leaf ones were a bit bitter and briney, but otherwise it was all pretty tasty.",
              diet: [
                { type: "Meat", desc: "This recipe calls for ground meat. You can use a vegan substitute or just go all-in on the rice and it'll be fine. It also calls for chicken broth, but you can use vegetable broth." },
                { type: "Nuts", desc: "This recipe uses pine nuts, but they're definitely 100% optional.", optional: true },
                { type: "Egg", desc: "The linked recipe calls for an egg to keep things together, but most recipes I've found don't, so you can probably omit it.", optional: true }
              ],
              ingredients: ["lamb", "long grain rice", "olive oil", "currants", "pine nuts", "cumin", "cinnamon", "oregano", "mint", "egg", "grape leaves", "bell pepper"]
            }
        ], 
        music: [
            { name: "Hi Bala - Summer Day", url: "https://www.youtube.com/watch?v=PWySDaci2qo", favorite: true },
            { name: "Voices of Artsakh - Pahpanner", url: "https://www.youtube.com/watch?v=MtQHtqnhWmA" }
        ]
    },
    "AU": { // 25m
        name: "Australia", desc: "The Commonwealth of Australia is best known for the fact that every wild animal on the mainland will kill you. It was doing great until the British showed up.",
        population: 25097700, popEstimate: 2018, area: 7692024, independence: "1901-01-01", indFrom: "Britain", demonym: "Australian", currency: "Australian Dollar ($)", 
        languages: "English", motto: `None`, neighbors: "None", 
        foodURL: "https://en.wikipedia.org/wiki/Australian_cuisine",
        food: [
            { name: "Meat Pie", type: "Pastry", url: "https://www.thespruceeats.com/aussie-meat-pie-256149", date: "2018-09-16", favorite: true, 
              img: "meatpie.jpg", desc: "Juicy flaky meaty goodness. A perfect pastry. If you want to make the pie crust from scratch, I used <a href='https://www.youtube.com/watch?v=1siW_wm9TnA'>this recipe</a> for the bottom dough and <a href='https://www.youtube.com/watch?v=Dcqk74DP-sw'>this recipe</a> for the top.",
              diet: [
                { type: "Meat", desc: "This recipe is mostly beef and beef stock. I used a vegan ground beef substitute and vegan beef-flavored stock without issue." },
                { type: "Gluten", desc: "The pie crust uses a lot of flour." },
                { type: "Dairy", desc: "The pie crust uses a LOT of butter." },
                { type: "Soy", desc: "The filling contains Worcestershire Sauce, which often has soy sauce in it." },
                { type: "Egg", desc: "An egg wash is applied to the top of the pie before baking." },
                { type: "Fish", desc: "The filling contains Worcestershire Sauce, which can have anchovies in it. I was able to easily find an anchovy-free bottle in a regular grocery store.", optional: true }
              ],
              ingredients: ["olive oil", "onion", "ground beef", "corn starch", "beef stock", "tomato paste", "worcestershire sauce", "vegetable bouillon", "flour", "butter", "egg"]
            },
            { name: "Burger with the Lot", type: "Wrap", url: "https://www.allrecipes.com/recipe/70869/aussie-works-burger/", date: "2018-09-24", 
              img: "aussieburg.jpg", desc: "If you don't like pineapples, fried eggs, or beetroot, this dish might not be for you. If you dislike all three of those things, then you might be me, and maybe you should go back in time and tell yourself not to make this dish.",
              diet: [
                { type: "Meat", desc: "It's a hamburger. I used a vegan patty without any issue. Canadian bacon is also a topping on this burger." },
                { type: "Gluten", desc: "The buns contain gluten." },
                { type: "Dairy", desc: "Cheese is one of the toppings on this burger." },
                { type: "Egg", desc: "A fried egg is one of the toppings on this burger. Mayonnaise is one of the optional sauces, but I used a vegan mayo without any issue." }
              ],
              ingredients: ["ground beef", "onion", "olive oil", "tomato", "lettuce", "beetroot", "cheddar cheese", "pineapple", "mustard", "mayonnaise", "ketchup", "relish", "buns"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Australia",
        music: [
            { name: "A.B. Original - January 26", url: "https://www.youtube.com/watch?v=tZ9qeX4gUeo", favorite: true },
            { name: "The Avalanches - Frontier Psychiatrist", url: "https://www.youtube.com/watch?v=qLrnkK2YEcE" },
            { name: "David Hudson - Echoes", url: "https://www.youtube.com/watch?v=frFRIJjwwus" },
            { name: "NoKTuRNL - Woomera", url: "https://www.youtube.com/watch?v=x2VsUcyrloM" },
            { name: "Shane Howard ft. Archie Roach - Back to Culture", url: "https://www.youtube.com/watch?v=QtfsgXuArtI" },
            { name: "The Wiggles - Hot Potato/Fruit Salad", url: "https://www.youtube.com/watch?v=OZ72_mLcNdM" },
            { name: "Yothu Tindi - Treaty", url: "https://www.youtube.com/watch?v=Jf-jHCdafZY" }
        ]
    },
    "AT": { // 8.8m
        name: "Austria", desc: "The Republic of Austria is a landlocked country in Central Europe. One time their archduke got assassinated and it sort of sparked a mild war. It wasn't that big of a deal, and after it ended, everyone agreed to never have a war like that again. Everybody kept this promise. Especially the Germans.",
        population: 8823054, popEstimate: 2018, area: 83879, independence: "1955-10-26", indFrom: "Allied Forces", demonym: "Austrian", currency: "Euro (&#8364;)", 
        languages: "German", motto: `None`, neighbors: "Czech Republic, Germany, Hungary, Italy, Liechtenstein, Slovakia, Slovenia, Switzerland", 
        foodURL: "https://en.wikipedia.org/wiki/Austrian_cuisine",
        food: [
            { name: "Beef Goulash", type: "Soup", url: "https://foodwishes.blogspot.com/2013/01/beef-goulash-thick-hungarian-soup-thin.html", date: "2018-09-29", favorite: true, 
              img: "goulash.jpg", desc: "A very strongly spiced stew. Warm, delicious, and very filling. If I lived somewhere that actually had noticable weather changes between seasons, I would definitely eat this during the winter.",
              diet: [
                { type: "Meat", desc: "It's a beef stew. I used a vegan beef alternative and vegetable broth without any issue." }
              ],
              ingredients: ["beef", "olive oil", "onion", "caraway", "paprika", "cayenne", "marjoram", "thyme", "chicken broth", "tomato paste", "garlic", "bay leaf", "sugar", "balsamic vinegar"]
            },
            { name: "Vienna Bread", type: "Bread", url: "https://www.youtube.com/watch?v=5LUBrnoILFM", date: "2018-09-28", 
              img: "viennabread.jpg", desc: "Because I am bad with yeast, the recipe I made can more accurately be described as Vienna bread<em>sticks</em>. Fortunately, size didn't matter and these bread babies were soft and delicious.",
              diet: [
                  { type: "Gluten", desc: "It's bread." },
                  { type: "Dairy", desc: "Milk powder and butter are important ingredients in this bread." }
              ],
              ingredients: []
            },
            { name: "Liptauer", type: "Sauce", url: "https://www.masalaherb.com/austrian-liptauer-recipe/", date: "2018-09-28", 
              img: "liptauer.jpg", desc: "A tasty and somewhat spicy cheese spread. The spiciness was countered by the cheesiness, so it added a nice creamy kick to the bread I spread it on.",
              diet: [
                  { type: "Dairy", desc: "Cheese and butter are the main ingredients of this spread." }
              ],
              ingredients: ["cheese", "cottage cheese", "butter", "onion", "garlic", "dijon mustard", "paprika", "caraway", "capers", "pickles"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Austria",
        music: [
            { name: "Dornenreich - Wer hat Angst von Einsamkeit?", url: "https://www.youtube.com/watch?v=ewkHBPa6Lrc" },
            { name: "Sch&ouml;nheitsfehler - Fuck You", url: "https://www.youtube.com/watch?v=W5REaarQJ8w" },
            { name: "Christina St&uuml;rmer - Vorbei", url: "https://www.youtube.com/watch?v=m4-PvRag6DY" },
            { name: "Visions of Atlantis - The Deep & The Dark", url: "https://www.youtube.com/watch?v=9s-UeGOuYy4", favorite: true },
            { name: "Lemo - So wie du bist", url: "https://www.youtube.com/watch?v=-6QYdxYsMVg" },
            { name: "Andreas Gabalier - Hulapalu", url: "https://www.youtube.com/watch?v=5krScgyxzBI" },
            { name: "Opus - Live is Life", url: "https://www.youtube.com/watch?v=pATX-lV0VFk" }
        ]
    },
    "AZ": { // 9.9m
        name: "Azerbaijan", desc: "The Republic of Azerbaijan toes the border between Europe and Asia. They declared their independence in 1918, then got incorporated into the Soviet Union a couple years later. Now they're their own country again.",
        population: 9898100, popEstimate: 2018, area: 86600, independence: "1991-10-18", indFrom: "Soviet Union", demonym: "Azerbaijani", currency: "Azerbaijani manat (%E2%82%BC)", 
        languages: "Azerbaijani", motto: `"The Land of Fire."`, neighbors: "Armenia, Artsakh, Georgia, Iran, Russia, Turkey", 
        foodURL: "https://en.wikipedia.org/wiki/Azerbaijani_cuisine",
        food: [
            { name: "Dushbara", type: "Soup", url: "http://flavorsofbaku.com/portfolio-view/dushbara/", date: "2018-10-06", 
              img: "dushbara.jpg", desc: "A very tasty tortellini-esque soup. Another prime example of how mint and meat are a good combination.",
              diet: [
                  { type: "Meat", desc: "The primary ingredient of the filling is beef, and meat broth is used. I used a vegan beef alternative and vegetable broth without any issue." },
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Egg", desc: "Egg is used in the dough." }
              ],
              ingredients: ["flour", "egg", "beef", "lamb", "onion", "turmeric", "mint", "vinegar"]
            },
            { name: "Shekerbura", type: "Pastry", url: "https://www.196flavors.com/azerbaijan-shekerbura/", date: "2018-10-06", 
              img: "shekerbura.jpg", desc: "The cardamom is a very nice touch, but otherwise these are basically just almondy biscuits.",
              diet: [
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Dairy", desc: "Butter is used in the dough." },
                  { type: "Nuts", desc: "This recipe uses nuts. Almonds, walnuts, or hazelnuts." }
              ],
              ingredients: ["flour", "butter", "egg", "sour cream", "salt", "vanilla", "yeast", "sugar", "milk", "hazelnut", "almond", "walnut", "cardamom"]
            }, 
            { name: "Ayran", type: "Beverage", url: "https://www.youtube.com/watch?v=QCJ8IlfiXz0", date: "2018-10-06", 
              img: "ayran.jpg", desc: "A very refreshing beverage. I preferred it without mint on top, though.",
              diet: [
                  { type: "Dairy", desc: "It's basically watered down yoghurt." }
              ],
              ingredients: ["yogurt", "mint", "milk"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Azerbaijan",
        music: [
            { name: "Elvina Mustafazadeh - Bak%C4%B1", url: "https://www.youtube.com/watch?v=G6aetkhXYGw", encoded: true },
            { name: "Natavan H%C9%99bibi - Ulduzlar", url: "https://www.youtube.com/watch?v=44mc97Xes5Q", encoded: true },
            { name: "Eldar Gasimov - 1&Only", url: "https://www.youtube.com/watch?v=cWcsYZNe_uU" },
            { name: "Ayg&uuml; Kaz%C4%B1mova ft. Snoop Dogg - Coffee From Colombia", url: "https://www.youtube.com/watch?v=dseGdBmMGXE", encoded: true, favorite: true },
            { name: "Aziza Mustafa Zadeh - Sunny Rain", url: "https://www.youtube.com/watch?v=uGAOyX6IPwc" },
            { name: "Orxan Zeynall%C4%B1 ft. Ayka - M", url: "https://www.youtube.com/watch?v=DmfDOzFPPOI", encoded: true },
            { name: "Miri Yusif ft. DJ Matuya - Bomba Kimi", url: "https://www.youtube.com/watch?v=sGT_NG2UK_A" }
        ]
    },
    "BS": { // 0.4m
        realFirstLetter: "B",
        name: "The Bahamas", desc: "The Commonwealth of The Bahamas are an island nation in the Caribbean. They are the reason the Baha Men and, thus, the song 'Who Let the Dogs Out?' exist.",
        population: 391232, popEstimate: 2016, area: 13878, independence: "1973-07-10", indFrom: "Britain", demonym: "Bahamian", currency: "Bahamian Dollar ($)", 
        languages: "English", motto: `"Forward, Upward, Onward, Together."`, neighbors: "None", 
        foodURL: "https://en.wikipedia.org/wiki/Bahamian_cuisine",
        food: [
            { name: "Bahamian Macaroni and Cheese", type: "Casserole", url: "https://www.trubahamianfoodtours.com/bites-of-nassau-food-tour/bahamian-macaroni-cheese/", date: "2018-10-16", 
              img: "macaroni.jpg", desc: "A very rich and filling baked macaroni and cheese dish. This ain't your mamma's macaroni and cheese, unless your mother is from the Bahamas, then it probably is.",
              diet: [
                { type: "Dairy", desc: "Butter, cheese, and evaporated milk are used in this recipe." },
                { type: "Egg", desc: "Egg is used for keeping things together." },
                { type: "Gluten", desc: "Macaroni usually has flour with gluten in it. If you can find/make gluten-free macaroni, then all is well." },
                { type: "Spicy", desc: "It can be spicy, but you can adjust how much pepper you want to use." }
              ],
              ingredients: ["macaroni", "butter", "cheddar cheese", "bell pepper", "onion", "eggs", "paprika", "habanero pepper", "evaporated milk"]
            },
            { name: "Switcha", type: "Beverage", url: "https://www.trubahamianfoodtours.com/tru-bahamian-must-eats/switcha/", date: "2018-10-18", 
              img: "switcha.jpg", desc: "Unsurprisingly it tastes like sweet, citrussy, and sour water. It is a bit refreshing but probably not the best thing to drink at night like I just did. Who needs sleep anyway?",
              diet: [
                { type: "Vegan", desc: "This bevvy is vegan-friendly without any substitutions." }
              ],
              ingredients: ["sugar", "lemon", "key lime", "grapefruit"]
            },
            { name: "Guava Duff", type: "Dessert", url: "https://www.trubahamianfoodtours.com/tru-bahamian-must-eats/guava-duff/", date: "2018-10-19", 
              img: "duff.jpg", desc: "The combination of boiled dough with mashed up guavas is very interesting. The combination of creamed butter and sugar to make the sauce is very delicious. I will definitely be using it on many non-duff foods.",
              diet: [
                  { type: "Dairy", desc: "Milk and butter are used in the dough and the sauce." },
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Alcohol", desc: "Rum or brandy are used in the sauce, but I substituted with vanilla and it was still tasty." }
              ],
              ingredients: ["guava", "sugar", "cinnamon", "allspice", "flour", "baking powder", "salt", "shortening", "milk", "egg", "butter", "rum", "brandy"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_the_Bahamas",
        music: [
            { name: "Baha Men - Night & Day", url: "https://www.youtube.com/watch?v=mXlzHjubkXg" },
            { name: "Julien Believe ft. Bunji Garlin - Live and Wine", url: "https://www.youtube.com/watch?v=e_mO4BKvrRs" },
            { name: "K.B. - Boy U Don't Know Me Eh?", url: "https://www.youtube.com/watch?v=leRJqvOlDGE" },
            { name: "Stileet - Shibby Bam Bam", url: "https://www.youtube.com/watch?v=c8oE3aoIPuo" },
            { name: "Baha Men - Off the Leash", url: "https://www.youtube.com/watch?v=fGUZgzq9Ocw", favorite: true },
            { name: "Angelique Sabrina - Right Now", url: "https://www.youtube.com/watch?v=bqcOHlzYFyo" }
        ]
    },
    "BH": { // 1.4m 
        name: "Bahrain", desc: "The Kingdom of Bahrain is an Asian island country and the first post-oil economy in the Persian Gulf. Its capital is Manama, not to be confused with Mah N&agrave; Mah N&agrave;.", focusArea: "QA",
        population: 1425171, popEstimate: 2016, area: 765.3, independence: "1971-08-15", indFrom: "Britain", demonym: "Bahrani", currency: "Bahraini Dinar (BD)", 
        languages: "Arabic", motto: `None`, neighbors: "None", 
        foodURL: "https://en.wikipedia.org/wiki/Bahraini_cuisine",
        food: [
            { name: "Chicken Machboos", type: "Rice", url: "https://www.geniuskitchen.com/recipe/traditional-bahraini-chicken-machboos-machbous-304034", date: "2018-10-23", favorite: true,  
              img: "machboos.jpg", desc: "There were a lot of flavors in this, and I think this may have been some of the best chicken I've ever eaten. I never would have thought to put cinnamon on chicken, but now I know the truth: it's tasty.",
              diet: [
                  { type: "Meat", desc: "This recipe uses chicken. You can probably also just not put chicken in it, and use vegetable broth to cook the rice in." },
                  { type: "Dairy", desc: "Butter is added to the rice. You can probably skip this or add a vegan substitute with no issue." }
              ],
              ingredients: ["basmati rice", "tomatoes", "chicken", "onion", "coriander", "cilantro", "pepper", "dried lime", "baharat", "turmeric", "cumin", "cinnamon", "cardamom", "garlic", "ginger", "butter", "lemon juice", "rose water"]
            },
            { name: "Balaleet", type: "Noodle", url: "https://www.youtube.com/watch?v=JTwOBFvfXP0", date: "2018-10-27", 
              img: "balaleet.jpg", desc: "If you want to have pasta for breakfast, but also want to have tons of sugar in your breakfast, balaleet has got you covered. Also, a tablespoon of cardamom is a lot, so if you're like me and think you're too cool to buy pre-ground cardamom, reconsider before making this recipe.",
              diet: [
                { type: "Gluten", desc: "Vermicelli is usually made with wheat flour." },
                { type: "Egg", desc: "Half of this dish is made with scrambled eggs or an omelette. You can omit this if you just want some sweet noodles." }
              ],
              ingredients: ["vermicelli", "egg", "saffron", "cardamom", "sugar", "oil"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Bahrain",
        music: [
            { name: "Hala Al Turk - Happy Happy", url: "https://www.youtube.com/watch?v=X_DeGCloQWg" },
            { name: "Hala ft. Julian - Ok Habibi", url: "https://www.youtube.com/watch?v=5cYMsaJGxls", favorite: true },
            { name: "Osiris - Myths & Legends", url: "https://www.youtube.com/watch?v=N2tcW6nFhr4" },
            { name: "Hot Laser - Crazy Angel", url: "https://www.youtube.com/watch?v=5oD9p8B1MNk" },
            { name: "Flamingods - Taboo Groves", url: "https://www.youtube.com/watch?v=KyxG2sIxDA0" }
        ]
    },
    "BD": {  // 162m
        name: "Bangladesh", desc: "The People's Republic of Bangladesh is a country in South Asia. It was part of British India when that was a thing, but fortunately the British eventually fucked off.",
        population: 162951560, popEstimate: 2016, area: 147570, independence: "1971-03-26", indFrom: "Pakistan", demonym: "Bangladeshi", currency: "Taka (%E0%A7%B3)", 
        languages: "Bengali", motto: `"Victory to Bengal."`, neighbors: "India, Myanmar", 
        foodURL: "https://en.wikipedia.org/wiki/Bangladeshi_cuisine",
        food: [
            { name: "Mughlai paratha", type: "Wrap", url: "https://hebbarskitchen.com/mughlai-paratha-recipe-moglai-porota/", date: "2018-11-03", favorite: true,
              img: "paratha.jpg", desc: "Unsurprisingly, a recipe that involves lots of spiced cheese in a fried dough wrapper is absolutely delicious.",
              diet: [
                { type: "Dairy", desc: "This dish contains paneer cheese. You can use other fillings, though." },
                { type: "Gluten", desc: "Wheat flour is used to make the dough." }
              ],
              ingredients: ["maida flour", "onion", "chili pepper", "ginger garlic paste", "bell pepper", "carrot", "turmeric", "chili powder", "coriander ground ", "cumin", "aamchur", "garam masala", "paneer cheese"]
            },
            { name: "Chomchom", type: "Dessert", url: "https://hebbarskitchen.com/chum-chum-recipe-cham-cham-sweet-recipe/", date: "2018-11-04", 
              img: "chom.jpg", desc: "Fresh cheese curds boiled in sugar syrup, stuffed with a sugary milk goo. I love milk but I was still not sold on this. The texture is uncomfortable.",
              diet: [
                { type: "Dairy", desc: "These things are almost entirely made of milk. If you don't eat dairy, this recipe is definitely not for you." },
                { type: "Gluten", desc: "Flour is an optional ingredient.", optional: true }
              ],
              ingredients: ["milk", "ghee", "cardamom", "saffron", "milk powder", "cream", "flour", "coconut"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Bangladesh",
        music: [
            { name: "Samina Chowdhury - Rup Dekhilam", url: "https://www.youtube.com/watch?v=BOf-0g4Pkc8" },
            { name: "Oyshee - Nalish", url: "https://www.youtube.com/watch?v=YwSabAEcrQ4" },
            { name: "Miles - Premer Agun", url: "https://www.youtube.com/watch?v=SGNcN4w8e5I" },
            { name: "Ferdous Wahid - Je Jon Premer Vaab", url: "https://www.youtube.com/watch?v=YqWeEN73PDw", favorite: true },
            { name: "Love Runs Blind - Nirobe", url: "https://www.youtube.com/watch?v=QGomNwVXT3I" },
            { name: "Anima Roy - Sey Valo Sey Valo", url: "https://www.youtube.com/watch?v=geGFT1Cm8WQ" },
            { name: "Ayub Bachchu - Jete Path", url: "https://www.youtube.com/watch?v=1Qbrw7Wo6OM" }
        ] //https://www.youtube.com/watch?v=hvK-XLbWUhg
    },
    "BB": { // 0.3m
        focusArea: "PR", name: "Barbados", desc: "Barbados is an island country in the West Indies. They're still part of the Commonwealth, and are perhaps best known for inventing the international pop star and diplomat Her Excellency Dr. Rihanna.",
        population: 277821, popEstimate: 2010, area: 439, independence: "1966-11-30", indFrom: "Britain", demonym: "Barbadian", currency: "Barbadian Dollar ($)", 
        languages: "English, Bajan Creole", motto: `"Pride and Industry"`, neighbors: "None", 
        foodURL: "https://en.wikipedia.org/wiki/Barbadian_cuisine",
        food: [
            { name: "Bajan Chicken and Potato Roti", type: "Wrap", url: "https://www.totallybarbados.com/articles/barbados-recipes/chicken-potato-roti-recipe/", date: "2018-11-10", 
              img: "roti.jpg", desc: "A winning combination of chicken, potato, jerk seasoning, and flatbread. I burnt my hand a bit when I was cooking the roti. Worth it.",
              diet: [
                  { type: "Meat", desc: "Chicken." },
                  { type: "Dairy", desc: "Butter can be used in the dough, but other types of shortening work, too." },
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Spicy", desc: "Peppies are used. You can use less spicy peppers, or no peppers at all, if that's how you want to roll." }
              ],
              ingredients: ["flour", "shortening", "butter", "chicken", "parsley", "thyme", "jerk seasoning", "onion", "garlic", "scotch bonnet pepper", "potatoes"]
              // https://www.myrecipes.com/recipe/jamaican-jerk-seasoning-blend
            }, // https://tarasmulticulturaltable.com/bajan-chicken-and-potato-roti/
            { name: "Cheese Cutter", type: "Wrap", url: "https://www.barbadospocketguide.com/eat-and-drink-in-barbados/bajan-food-and-drinks/cheese-cutter.html", date: "2018-11-18", 
              img: "cutter.jpg", desc: "Composed of Bajan Salt Bread, Bajan Pepper Sauce, and cheddar cheese. A solid cheese sandwich. You can't go wrong with a cheese sandwich. Who doesn't like a cheese sandwich? Everybody wants a cheese sandwich.",
              diet: [
                  { type: "Gluten", desc: "Flour is used in the bread dough." },
                  { type: "Dairy", desc: "It's a cheese sandwich. You can use other fillings, though." },
                  { type: "Spicy", desc: "The sauce is spicy. You can just not add the pepper sauce, or tone down the pepper like I did, if you don't want that." }
              ],
              ingredients: ["flour", "sugar", "salt", "vegetable oil", "yeast", "scotch bonnet pepper", "onion", "turmeric", "mustard", "vinegar", "brown sugar", "cheddar cheese"]
            },
            { name: "Bajan Salt Bread", type: "Bread", url: "https://www.totallybarbados.com/articles/barbados-recipes/bajan-salt-recipe/", date: "2018-11-18", 
              img: "saltbread.jpg", desc: "It's a pretty solid bread. Good for sandwiches, which is what I used it for. Because I am a fool, mine was a bit more dense than it's supposed to be, but you can avoid this problem by not being bad at baking.",
              diet: [
                  { type: "Gluten", desc: "This is literally bread. Sorry." }
              ],
              ingredients: ["flour", "sugar", "salt", "vegetable oil", "yeast"]
            },
            { name: "Bajan Pepper Sauce", type: "Sauce", url: "http://eatlikeagirl.com/recipe-bajan-pepper-sauce", date: "2018-11-18", 
              img: "bajansaus.jpg", desc: "A nice spicy sauce. It's heavily turmeric'd, which gave it a great flavor that many hot sauces lack, so even if you aren't huge on spicy-for-the-sake-of-spicy, it's a nice flavorful sauce.",
              diet: [
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." },
                  { type: "Spicy", desc: "It's called Pepper Sauce for a reason, buddy." }
              ],
              ingredients: ["scotch bonnet pepper", "onion", "turmeric", "mustard", "vinegar", "brown sugar"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Barbados",
        music: [
            { name: "2 Mile Hill - Get Over", url: "https://www.youtube.com/watch?v=e2UhDErL2V0" },
            { name: "Krosfyah ft. Khiomal - Start De Madness", url: "https://www.youtube.com/watch?v=RjX4BZFZxnM" },
            { name: "Charles D. Lewis - Another Friday Night", url: "https://www.youtube.com/watch?v=F8wcku0zE2Y", favorite: true },
            { name: "Shontelle - Perfect Nightmare", url: "https://www.youtube.com/watch?v=3ZYRgehIIVg" },
            { name: "Krosfyah - Work It", url: "https://www.youtube.com/watch?v=DmOBwuhhQSc" }
        ]
    },
    "BY": { // 9.4m
        name: "Belarus", desc: "The Republic of Belarus is a country in Eastern Europe. They like potatoes as all good boys should. Their president has been the president since 1994, which means maybe it's time for him to let someone else have a turn.",
        population: 9491800, popEstimate: 2018, area: 207595, independence: "1990-07-27", indFrom: "Soviet Union", demonym: "Belarusian", currency: "Belarusian ruble (Br)", 
        languages: "Belarusian, Russian", motto: `None`, neighbors: "Russia, Latvia, Lithuania, Poland, Ukraine", 
        foodURL: "https://en.wikipedia.org/wiki/Belarusian_cuisine",
        food: [
            { name: "Draniki", type: "Vegetable", url: "https://www.belarus.by/en/about-belarus/cuisine/draniki", date: "2018-11-19", 
              img: "draniki.jpg", desc: "Potato pancakes. I don't know what I did wrong but I somehow managed to completely ruin a frying pan making these. Pro-tip: don't do that.",
              diet: [
                { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["potato", "onion"]
            },
            { name: "Kalduny", type: "Dumpling", url: "https://windowstorussia.com/kalduny-recipe-a-pancake-and-or-a-dumpling.html", date: "2018-12-05", 
              img: "kalduny.jpg", desc: "Dumplings and/or stuffed pancakes, full of meat and onion. They're like <span style='text-decoration: line-through'>Uncrustables&reg;</span> sealed crustless sandwiches, but with more potato.",
              diet: [
                  { type: "Meat", desc: "They're stuffed with meat. You can put something else in them, though." },
                  { type: "Egg", desc: "Egg is used in the dough. Honestly you probably don't need it.", optional: true },
                  { type: "Gluten", desc: "Flour is used in the dough, but probably isn't actually necessary.", optional: true }
              ],
              ingredients: ["potato", "onion", "flour", "chicken", "beef", "egg"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Belarus",
        music: [
            { name: "Krambambulya - Heta Nia Vietra%C5%BA", url: "https://www.youtube.com/watch?v=W7w7MvqxdT4", encoded: true },
            { name: "Angelica Agurbash - Ptichka", url: "https://www.youtube.com/watch?v=PAyecepprKE" },
            { name: "Nadezhda Misyakova - Sokal", url: "https://www.youtube.com/watch?v=StP4W-7gDcQ" },
            { name: "Open Space - Get Away", url: "https://www.youtube.com/watch?v=IVO4puEvJI0" },
            { name: "Brutto - %D0%A0%D0%BE%D0%BAi", url: "https://www.youtube.com/watch?v=YoHBzEJ81yA", encoded: true, favorite: true },
            { name: "Alyona Lanskaya - Solayoh", url: "https://www.youtube.com/watch?v=N4S4m9R-ffA" },
            { name: "Fantastiques - Beautiful Terminator", url: "https://www.youtube.com/watch?v=tKsi5G1lUIM" },
            { name: "NAVIBAND - Abdymi Mianie", url: "https://www.youtube.com/watch?v=q9yHL_tcTik" },
            { name: "STARY OLSA - Vitaut", url: "https://www.youtube.com/watch?v=wJ64E9hWxcA" }
        ]
    },
    "BE": {  // 11.4m
        name: "Belgium", desc: "The Kingdom of Belgium is a country in Western Europe. The Global Peace Index considers it one of the most peaceful countries in the world, and it has very high standards of living, which means they're probably all a bunch of no-good commies.",
        population: 11420163, popEstimate: 2018, area: 30528, independence: "1839-04-19", indFrom: "the Netherlands", demonym: "Belgian", currency: "Euro (&#8364;)", 
        languages: "Dutch, French, German", motto: `"Unity makes Strength."`, neighbors: "France, Germany, Luxembourg, Netherlands", 
        foodURL: "https://en.wikipedia.org/wiki/Belgian_cuisine",
        food: [
            { name: "Li&egrave;ge Waffles", type: "Bread", url: "http://www.waffle-recipes.com/liege-waffle-recipe-gaufres-de-liege/", date: "2018-12-19", favorite: true,
              img: "liege.jpg", desc: "These were without a doubt the best waffles I have ever eaten, and perhaps one of the best sweet dough-based foods I've ever eaten, too. They were rich, crisp, caramelly, and delicious all around. If you have a free weekend and can get your hands on three different kinds of flour and a few other very specific ingredients, making these beautiful babies would be an excellent use of that time. The man behind <a href='http://www.waffle-recipes.com/'>waffle-recipes.com</a> is a waffle genius. Usually when I make a complicated or time-consuming dish I think \"that was good, but too much effort to make again.\" With these, they were a lot of effort, but it was all worth it.",
              diet: [
                  { type: "Gluten", desc: "This recipe calls for three different kinds of flour. It's safe to say there is gluten." },
                  { type: "Dairy", desc: "Cultured/European-style Butter is used in the dough." },
                  { type: "Egg", desc: "Eggs are used in the dough." },
                  { type: "Honey", desc: "Orange Blossom Honey is used in the dough." }
              ],
              ingredients: ["white pastry flour", "yeast", "egg", "mineral water", "whole wheat pastry flour", "dark rye flour", "cassonade", "sea salt", "orange blossom honey", "vanilla pods", "butter", "pearl sugar"]
            },
            { name: "Rijstevlaai", type: "Pastry", url: "https://www.thedutchtable.com/2010/01/rijstevlaai-rice-pie.html", date: "2018-12-15", 
              img: "rijstevlaai.jpg", desc: "If you've ever looked at rice pudding and wished it was baked in a pie crust, then your prayers have been answered by rijstevlaai, which is literally just that. I've never had rice pudding at all before, so the texture was an interesting new experience. The creaminess was appreciated. Pie crust is always good, so that was an added bonus.",
              diet: [
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Dairy", desc: "Butter is used in the dough, and the filling is mostly just milk." },
                  { type: "Egg", desc: "Egg is used in the dough and filling." }
              ],
              ingredients: ["milk", "rice", "sugar", "egg", "vanilla", "flour", "yeast", "butter"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Belgium",
        music: [
            { name: "AnnaGrace - Let The Feelings Go", url: "https://www.youtube.com/watch?v=eEmOSjGONuA" },
            { name: "Diablo Blvd - The Future Will Do What It's Told", url: "https://www.youtube.com/watch?v=QzG12wXR_6s" },
            { name: "Lio - Sage Comme Une Image", url: "https://www.youtube.com/watch?v=0Bywahz2zCo" },
            { name: "Stromae - Papaoutai", url: "https://www.youtube.com/watch?v=oiKj0Z_Xnjc", favorite: true },
            { name: "Gwyllions - I Can Hear Music", url: "https://www.youtube.com/watch?v=w4HZnOxIWD8" },
            { name: "Zap Mama - Miss Q'n", url: "https://www.youtube.com/watch?v=2rB6-GWmPOo" }
        ]
    },
    "BZ": { // 0.4m
        name: "Belize", desc: "Belize is a country in Central America. It's nice to have a country with just a one word name, y'know? It ain't the Kingdom of Belize. It's not the People's Democratic Republic of Belize and Friends. It's not the Adventures of Belize. Just Belize. Barbados and Antigua and Barbuda are like that, too, so maybe it's a Caribbean thing? Anyway, Belize is a cool place, and the only country to be in the Caribbean Community, Community of Latin American and Caribbean States, Central American Integration System, AND the Commonwealth, because Great Britain.",
        population: 387879, popEstimate: 2017, area: 22966, independence: "1981-09-21", indFrom: "Britain", demonym: "Belizean", currency: "Belize Dollar ($)", 
        languages: "English", motto: `"Under the shade I flourish."`, neighbors: "Guatemala, Mexico", 
        foodURL: "https://en.wikipedia.org/wiki/Belizean_cuisine",
        food: [
            { name: "Fry Jacks", type: "Bread", url: "https://www.geniuskitchen.com/recipe/fry-jacks-belize-499428", date: "2018-12-18", 
              img: "fryjack.jpg", desc: "You make some dough and then you fry the dough and then you eat the dough and it is a good tasty thing you can eat with honey or cheese or jam or any other good thing. That's what this is. I got two delicious breakfasts out of it, served with honey the first time and with, uh, cheese puffs, the second time.",
              diet: [
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["flour", "baking powder", "shortening", "oil"]
            },
            { name: "Chicken Legs Recado Rojo", type: "Meat", url: "https://www.splendidtable.org/recipes/chicken-legs-recado-rojo", date: "2018-12-15", 
              img: "chickenrecado.jpg", desc: "I accidentally spilled a bunch of the recado rojo braising liquid onto the door of my oven when I tried putting it in there. I should clean that soon. The end result was tasty, though, so it was probably worth it. Also I didn't have chicken legs so I used chicken breasts, so hopefully I don't go to chicken jail for my crimes.",
              diet: [
                  { type: "Meat", desc: "Surprise! This chicken dish has meat in it! You can use the recado rojo in empanada or tamale dough for a vegetarian meal, though." }
              ],
              ingredients: ["annato", "peppercorn", "cloves", "allspice", "oregano", "cumin", "cinnamon", "salt", "garlic", "orange juice", "vinegar", "fennel", "avocado leaves", "chicken legs", "apple cider vinegar"]
            },
            { name: "Recado Rojo", type: "Sauce", url: "https://www.whats4eats.com/sauces/recado-rojo-recipe", date: "2018-12-15", 
              img: "recadorojo.jpg", desc: "A sauce that, given its name, is probably supposed to be much more red than what I made. It was still very tasty though. I used it on chicken and mixed some of it with some Ranch dressing to make a much better Ranch dressing.",
              diet: [
                  { type: "Vegan", desc: "This sauce is vegan-friendly without any substitutions." }
              ],
              ingredients: ["annato", "peppercorn", "cloves", "allspice", "oregano", "cumin", "cinnamon", "salt", "garlic", "orange juice", "vinegar"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Belize",
        music: [
            { name: "Andy Palacio - Gi mi Punta Rock", url: "https://www.youtube.com/watch?v=lztsD-fBL8c" },
            { name: "Mr. Peters - Waves (Piano Version)", url: "https://www.youtube.com/watch?v=1IkZ1CodIgs", favorite: true },
            { name: "Shyne - Frank Matthews", url: "https://www.youtube.com/watch?v=dkaSmplaM7Y" },
            { name: "Umalali & The Garifuna Collective - Fuleisei", url: "https://www.youtube.com/watch?v=tVs6azqdqi4" },
            { name: "Bella Carib - I AM HURRICANE BELLA", url: "https://www.youtube.com/watch?v=0EUWFLM-geI" }
        ]
    },
    "BJ": { // 10.8m
        name: "Benin", desc: "The Republic of Benin is a country in West Africa. Before the French came in and ruined everything, there was a region in Benin known as the Kingdom of Dahomey, a kingdom with the best flag ever: <a href='https://en.wikipedia.org/wiki/File:Dahomey_kingdom_flag.png'>an elephant with a crown</a>. The unrelated Kingdom of Benin, which is/was in present day Nigeria, <a href='https://en.wikipedia.org/wiki/File:Flag_of_the_Benin_Empire.svg'>also has a great flag</a>.",
        population: 10872298, popEstimate: 2016, area: 144763, independence: "1960-08-01", indFrom: "France", demonym: "Beninese", currency: "West African CFA franc (CFA)", 
        languages: "French", motto: `"Fraternity, Justice, Labour."`, neighbors: "Burkina Faso, Niger, Nigeria, Togo", 
        foodURL: "https://en.wikipedia.org/wiki/Benin_cuisine",
        food: [
            { name: "Wagasi in Sauce", type: "Other", url: "https://web.archive.org/web/20150424200135/www.celtnet.org.uk/recipes/miscellaneous/fetch-recipe.php?rid=misc-wagasi-sauce", date: "2018-12-18", 
              img: "wagasi.jpg", desc: "It's probably a cop-out to substitute wagasi cheese in a recipe literally called 'wagasi in sauce' but if you can find me a place to buy actual wagasi cheese in North America, you let me know and I will remake this recipe with the real thing. It was still tasty, though, as fried things and cheeses tend to be.",
              diet: [
                  { type: "Dairy", desc: "It's literally cheese." }
              ],
              ingredients: ["wagasi cheese", "port salut cheese", "tomatoes", "scotch bonnet peppers", "garlic", "onion"]
            },
            { name: "Peanut Soup", type: "Soup", url: "https://www.thefooddictator.com/hirshon-beninese-peanut-soup/", date: "2019-01-04", 
              img: "peanutsoup.jpg", desc: "It's got sweet potatoes, it's got coconut milk, it's got peanut butter, it's got spices, it's got soup. A very creamy soup that combines sweet and savory perfectly.",
              diet: [
                  { type: "Peanuts", desc: "You can't make an omelet without breaking a few eggs, and you can't make a peanut soup without breaking a few peanuts." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["peanut butter", "vegetable stock", "ginger", "onion", "green onions", "scallions", "celery", "jalapeno", "garlic", "turmeric", "sweet potato", "tomatoes", "smoked paprika", "maggi seasoning", "berbere", "cilantro"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Benin",
        music: [
            { name: "Ang&eacute;lique Kidjo - Once In A Lifetime", url: "https://www.youtube.com/watch?v=Z84rtbVbIEQ", favorite: true },
            { name: "Dibi Dobo - Kp&ecirc;d&eacute;", url: "https://www.youtube.com/watch?v=ukfiIwK2GTk" },
            { name: "Blaaz - Petite soeur", url: "https://www.youtube.com/watch?v=CJQ49-2w2-U" },
            { name: "Ang&eacute;lique Kidjo - Bomba", url: "https://www.youtube.com/watch?v=R_OsCfXPFWg" },
            { name: "Zeynab - Si J'&eacute;tais Riche", url: "https://www.youtube.com/watch?v=0F4iyMLESPo" }
        ]
    },
    "BT": {  // 0.8m
        name: "Bhutan", desc: "The Kingdom of Bhutan is a country in South Asia ruled by the Dragon King. As of January 2019, the current Dragon King - Jigme Khesar Namgyel Wangchuck - is the second youngest monarch in the world at 38 years old, after Rukidi IV of Toro, who is 26.",
        population: 797765, popEstimate: 2016, area: 38394, independence: "1949-08-08", indFrom: "Britain", demonym: "Bhutanese", currency: "Ngultrum (BTN)", 
        languages: "Dzongkha", motto: `None`, neighbors: "China, India, Tibet", 
        foodURL: "https://en.wikipedia.org/wiki/Bhutanese_cuisine",
        food: [
            { name: "Ema Datshi", type: "Rice", url: "https://www.196flavors.com/bhutan-ema-datshi/", date: "2019-01-06", favorite: true,
              img: "emadatshi.jpg", desc: "Cheese. Pepper. Rice. These were the ingredients chosen to create the perfect rice dish. Spiciness and cheesiness are a great combination.",
              diet: [
                  { type: "Spicy", desc: "One of the main ingredients is chili peppers. You can use whatever peppers you want (even bell peppers) to get a spiciness amount you are comfortable with." },
                  { type: "Dairy", desc: "Butter and cheese are used in this dish." }
              ],
              ingredients: ["chili peppers", "onion", "tomato", "garlic", "butter", "cheese", "rice"]
            },
            { name: "Momo", type: "Dumpling", url: "https://www.youtube.com/watch?v=RtLLiCaQeY8", date: "2019-01-09", 
              img: "momo.jpg", desc: "Hard to go wrong with steamed dumplings full of cheese. As soon as I master the art of folding and wrapping dumplings into various shapes you can bet your ass I'm gonna make a million YouTube videos abeut it.",
              diet: [
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Dairy", desc: "Cheese is used in these cheese dumplings. You can use other types of fillings." }
              ],
              ingredients: ["flour", "cheese", "cabbage", "onion", "garlic", "chili peppers", "coriander", "cilantro"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Bhutan",
        music: [
            { name: "Lama Gyurme & S&eacute;bastien Lucas - Mantra of Purification", url: "https://www.youtube.com/watch?v=Wpm4_RkhN14" },
            { name: "Yeshi Bidha ft. Kezang Dorji - Gokab", url: "https://www.youtube.com/watch?v=_VKqpZosho8" },
            { name: "Pema Dechen - 21 Tara Lullaby", url: "https://www.youtube.com/watch?v=dDkS4NVBeaM", favorite: true },
            { name: "Sonam Wangchen - Ya Taru Ma Taru", url: "https://www.youtube.com/watch?v=aJ9i2O-GvdA" },
            { name: "Kruxibles, Kinley Wangchuk, Karma Euden, JD, Kezang Dorji - Jabshu Machab", url: "https://www.youtube.com/watch?v=O-VKGexsHEk" }
        ]
    },
    "BO": { // 11.2m
        name: "Bolivia", desc: "The Plurinational State of Bolivia is a country in South America. Twenty percent of the world's glaciers are located within the country, so as you can guess, the Bolivians aren't particularly happy about climate change. Make a Bolivian happy, kill an oil company CEO.",
        population: 11248864, popEstimate: 2018, area: 1098581, independence: "1825-08-06", indFrom: "Spain", demonym: "Bolivian", currency: "Boliviano (BOB)", 
        languages: "Spanish", motto: `"Unity is Strength."`, neighbors: "Argentina, Brazil, Chile, Paraguay, Peru", 
        foodURL: "https://en.wikipedia.org/wiki/Bolivian_cuisine",
        food: [
            { name: "Salteñas", type: "Pastry", url: "https://www.196flavors.com/bolivia-saltenas/", date: "2019-01-23", 
              img: "saltenas.jpg", desc: "The love child of soup dumplings and empanadas. The juiciness was a nice touch, and the annatto flavoring in the dough gave it a distinct taste.",
              diet: [
                  { type: "Meat", desc: "Beef, beef stock, and gelatin are ingredients in the filling. I used a vegan beef substitute and vegetable broth without any issue - but I have not tried using vegan gelatin substitutes." },
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Dairy", desc: "Butter is used in the filling and dough." }
              ],
              ingredients: ["beef", "gelatin", "broth", "butter", "turmeric", "annatto", "onion", "potato", "peas", "parsley", "sugar", "cumin", "oregano", "flour", "eggs", "food coloring"]
            },
            { name: "Sonso de Yuca", type: "Casserole", url: "http://chipabythedozen.com/en/zonzo-al-horno-baked-zonzo/", date: "2019-01-27",
              img: "sonso.jpg", desc: "Goopy and cheesy, just the way I like my food. REMEMBER TO PROPERLY COOK YOUR CASSAVA BEFORE EATING IT OR ELSE YOU WILL DIE FROM CYANIDE POISONING.",
              diet: [
                  { type: "Dairy", desc: "Cheese, butter and milk are used in this recipe." }
              ],
              ingredients: ["cassava", "mozzarella", "cheese", "butter", "milk"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Bolivia",
        music: [
            { name: "Mayra Gonzales - M&aacute;s Que Eso", url: "https://www.youtube.com/watch?v=fGSGzGWU0Ow" },
            { name: "Tierra Alta - Estar Sin Ti", url: "https://www.youtube.com/watch?v=-hcbnL8bwPI" },
            { name: "Los Ronisch - Te Amo Te Extra&ntilde;o", url: "https://www.youtube.com/watch?v=Caqlj9Qxmc4", favorite: true },
            { name: "Chila Jatun - Boquita de Miel", url: "https://www.youtube.com/watch?v=Dqqgg22ljM8" },
            { name: "Octavia - Redenci&oacute;n", url: "https://www.youtube.com/watch?v=EKYxAwVE-GA" },
            { name: "Avionica ft. Francisca Valenzuela - Distante   ", url: "https://www.youtube.com/watch?v=B2esmLQPzPU" }
        ]
    },
    "BA": {  // 3.5m
        name: "Bosnia and Herzegovina", desc: "Bosnia and Herzegovina is a country in Southeastern Europe. Some people call it \"the Heart-shaped Land\" because I guess the bar for what tourists find exciting is very low and triangles are kind of like hearts.",
        population: 3511372, popEstimate: 2013, area: 51129, independence: "1992-03-01", indFrom: "Yugoslavia", demonym: "Bosnian", currency: "Convertible Mark (BAM)", 
        languages: "Bosnian, Croation, Serbian", motto: `None`, neighbors: "Croatia, Montenegro, Serbia", 
        foodURL: "https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina_cuisine",
        food: [
            { name: "Krofne", type: "Pastry", url: "https://mehtapozer.blogspot.com/2014/07/bosnian-doughnuts-aka-krofne.html", date: "2019-02-12", 
              img: "krofne.jpg", desc: "You get some donuts and you fry 'em up and you put some vanilla cream inside them and some powdered sugar outside them and it's good and that's what this is.",
              diet: [
                { type: "Gluten", desc: "Flour is used in the dough." },
                { type: "Egg", desc: "Egg is used in the dough." },
                { type: "Dairy", desc: "Milk is used in the dough." }
              ],
              ingredients: ["milk", "active yeast", "eggs", "sugar", "salt", "flour", "vanilla", "plum jam"]
            },
            { name: "Burek", type: "Pastry", url: "https://www.manusmenu.com/bosnian-burek", date: "2019-02-05", 
              img: "burek.jpg", desc: "The trend of \"getting some meat, spicing it up, stuffing it in some sort of dough, and cooking it\" will never get old, because it's always delicious.",
              diet: [
                  { type: "Meat", desc: "The primary ingredient of the filling is beef. I used a vegan beef alternative without any issue." },
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Dairy", desc: "Butter is used in the dough." }
              ],
              ingredients: ["onion", "garlic", "beef", "parsley", "paprika", "phyllo dough", "butter", "sesame seeds", "egg"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Bosnia_and_Herzegovina",
        music: [
            { name: "Maya Berovi%C4%87 - Opasne vode", url: "https://www.youtube.com/watch?v=vQYK4OXfHH0", encoded: true },
            { name: "Maya Sar - Na%C5%A1a ljubav, na%C5%A1a ku%C4%87a   ", url: "https://www.youtube.com/watch?v=NPwwQ-gQvr4", encoded: true },
            { name: "Bijelo Dugme - Za Esmu", url: "https://www.youtube.com/watch?v=3lkJ8HRXTMw" },
            { name: "Dubioza kolektiv - No Escape (from Balkan)", url: "https://www.youtube.com/watch?v=jtgA0jvhp2A", favorite: true },
            { name: "Elvir Lakovic Laka - Piskila", url: "https://www.youtube.com/watch?v=yt3cRfsK3Rw" }
        ]
    },
    "BW": { // 2.2m
        name: "Botswana", desc: "The Republic of Botswana is a country in Southern Africa. Most of its land is part of the Kalahari Desert, which probably explains why it's one of the most sparsely populated countries in the world. Deserts ain't fun, y'all.",
        population: 2250260, popEstimate: 2016, area: 581730, independence: "1966-09-30", indFrom: "Britain", demonym: "Motswana (sing.), Batswana (pl.)", currency: "Pula (BWP)", 
        languages: "English, Setswana", motto: `"Rain!"`, neighbors: "Namibia, South Africa, Zimbabwe, maybe Zambia", 
        foodURL: "https://en.wikipedia.org/wiki/Botswana_cuisine",
        food: [
            { name: "Vetkoek with Mince", type: "Bread", url: "https://sortedfood.com/recipe/4263", date: "2019-02-24", favorite: true,  
              img: "vetkoek.jpg", desc: "Gotta admit, the combination of curry powder, mango chutney, and cilantro makes for a very fine seasoning for beefs. The fried bread was also very delicious and complimented the mince well. A hearty dish all around.",
              diet: [
                  { type: "Meat", desc: "The primary ingredient of the filling is beef, and meat broth is used. I used a vegan beef alternative and vegetable broth without any issue." },
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Spicy", desc: "A little bit of peppies is in this recipe. You can omit this." }
              ],
              ingredients: ["flour", "yeast", "sugar", "onion", "chili peppers", "garlic", "beef", "curry powder", "tomatoes", "beef stock", "potatoes", "mango chutney", "coriander", "cilantro", "peas"]
            },
            { name: "Bogobe", type: "Other", url: "https://ethnicfoodsrus.com/around-the-world-recipes/african-cuisine/zimbabwean-cuisine/traditional-plain-zimbabwean-sadza/", date: "2019-02-24", 
              img: "bogobe.jpg", desc: "You get some cornmeal and you mix it with water and then you boil it and you get something like corn porridge or polenta. It tastes like corn.",
              diet: [
                { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["corn flour", "cornmeal"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Botswana",
        music: [
            { name: "Zeus - Im Out My Mind", url: "https://www.youtube.com/watch?v=AmVO8qblMlA" },
            { name: "MMP Family - Gao Tagilwe", url: "https://www.youtube.com/watch?v=f7PKUVuO6Y8" },
            { name: "Skinflint - Birds and Milk Bloody Milk", url: "https://www.youtube.com/watch?v=JUJxlT426No" },
            { name: "Charma Gal - Mokolodi", url: "https://www.youtube.com/watch?v=K1Fz1hTauFY", favorite: true }
        ]
    },
    "BR": { // 210m
        name: "Brazil", desc: "The Federative Republic of Brazil is the largest country in South America. It is divided into five regions, and is home to most of the Amazon rainforest, which accounts for over half of the remaining rainforests on Earth. Hopefully their new president gets kicked out of office before he destroys too much of it.",
        population: 210147125, popEstimate: 2019, area: 8515767, independence: "1822-09-07", indFrom: "Portugual", demonym: "Brazilian", currency: "Real (R$)", 
        languages: "Brazilian Portuguese", motto: `"Order and Progress."`, neighbors: "Argentina, Bolivia, Colombia, France (French Guiana), Guyana, Paraguay, Peru, Suriname, Uruguay, Venezuela", 
        foodURL: "https://en.wikipedia.org/wiki/Brazilian_cuisine",
        food: [ // Southeast Brazil
            { name: "Pastel de Quiejo", type: "Pastry", url: "http://manisnacks.com/index.php/pastel-de-queijo/", date: "2019-03-10", 
              img: "pastel.jpg", desc: "As someone who goes to Panda Express almost exclusively for their cream cheese rangoons, it goes without saying that I am always down for fried dough full of creamy cheese, and that's exactly what these are. And I only burned myself with hot oil ONCE while making them! Progress!",
              diet: [
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Alcohol", desc: "Cachaça is used in the dough. You can omit this and maybe just add a bit of baking powder or something to make the dough extra crunchy." },
                  { type: "Dairy", desc: "They're full of cheese. But you can put whatever you want in them to create Pastel de Whatever's-In-Your-Fridge." }
              ],
              ingredients: ["flour", "vegetable oil", "egg", "cachaça", "cheese"]
            }, // Center-West Brazil
            { name: "Galinhada", type: "Rice", url: "https://www.196flavors.com/brazil-galinhada/", date: "2019-03-11", 
              img: "galinhada.jpg", desc: "Chicken and rice with some nice herbage. Also saffron. A winning combination of people who like rice with meat in it.",
              diet: [
                  { type: "Meat", desc: "Chicken and chicken broth are used. Just don't put chicken in your chicken rice if you don't want to eat chicken." }
              ],
              ingredients: ["chicken", "chicken broth", "lemon", "oil", "scallion", "green onion", "garlic", "rice", "basmanti rice", "tomato", "bell pepper", "peas", "saffron", "parsley", "cilantro"]
            }, // North Brazil
            { name: "Escabeche", type: "Meat", url: "https://www.kroger.com/r/brazilian-fried-fish-with-onions-tomatoes-vinegar-recipe/201041", date: "2019-03-16", 
              img: "escabeche.jpg", desc: "You get some fish (or whatever you want to fry) and you marinate it in some acid and then you cook some onions in some acid and then you eat all of it and it tastes like delicious acid.",
              diet: [
                  { type: "Fish", desc: "Fish is the main part of this dish. I used chicken instead because I'd rather not trigger my allergies." },
                  { type: "Gluten", desc: "Flour is used in the breading." },
                  { type: "Egg", desc: "Egg is used in the breading." }
              ],
              ingredients: ["lime", "fish fillet", "olive oil", "onion", "tomato", "garlic", "bay leaf", "red wine vinegar", "flour", "cornmeal", "egg", "scallions", "green onions", "parsley"]
            }, // Southern Brazil
            { name: "Arroz Carreteiro", type: "Rice", url: "http://gourmetcentric.com/2016/02/arroz-carreteiro/", date: "2019-03-17", 
              img: "carreteiro.jpg", desc: "Nice beefy rice. Very filling, very hearty, very tasty. Also, fun fact: roasting your own bell peppers is a fun and easy way to make them taste better.",
              diet: [
                { type: "Meat", desc: "This is a meaty rice dish, but you can probably use fake meat or some vegetables or something." }
              ],
              ingredients: ["beef", "rice", "onion", "sausage", "red bell pepper", "parsley", "garlic", "oil"]
            }, // Northeast Brazil
            { name: "Tapioca Crepe", type: "Bread", url: "https://www.thespruceeats.com/tapioca-brazilian-crepes-3029703", date: "2019-03-20", 
              img: "tapioca.jpg", desc: "If you like crepes, then you'll like these! Because they're crepes. You can put crepe things in them. I used cheese. You can use chocolate. Or spinach. Or banangles. It's gonna be good. And gluten-free, if that's a thing your body cares about!",
              diet: [
                { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["tapioca"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Brazil",
        music: [
            { name: "Pabllo Vittar - Corpo Sensual", url: "https://www.youtube.com/watch?v=q6Lw6k7k9Rk" }, 
            { name: "Dream Team do Passinho - Oi Sumido", url: "https://www.youtube.com/watch?v=olQXbUe2fd8" }, 
            { name: "Anitta ft. Maluma - Sim Ou N&atilde;o", url: "https://www.youtube.com/watch?v=7Yrghfw1eNo" },
            { name: "Supla - Garota de Berlim", url: "https://www.youtube.com/watch?v=2qk3IbODzIs" }, 
            { name: "Heavy Baile ft. Tati Quebra Barraco, Lia Clark - Berro", url: "https://www.youtube.com/watch?v=NzILPU8PG2s" },
            { name: "Skank - &Eacute; Uma Partida De Futebol", url: "https://www.youtube.com/watch?v=7Ie4oL17Nwc" },
            { name: "Ludmilla - Sou Eu", url: "https://www.youtube.com/watch?v=8aQTjEotXVw" },
            { name: "Tim Maia - Descobridor Dos Sete Mares", url: "https://www.youtube.com/watch?v=W5ZCxHBh28k", favorite: true },
            { name: "Pitty - Teto de Vidro", url: "https://www.youtube.com/watch?v=hWhl6ijsAXw" },
            { name: "Os Paralamas do Sucesso - Cinema Mudo", url: "https://www.youtube.com/watch?v=qM0i7D8AOF8" }, 
            { name: "Legi&atilde;o Urbana - H&aacute; Tempos", url: "https://www.youtube.com/watch?v=8z-fxcdHmDE" }
        ]
    },
    "BN": {  // 0.4m
        name: "Brunei", desc: "The Nation of Brunei, the Abode of Peace, is an island-ish country in Southeast Asia, surrounded almost entirely by the Malaysian state of Sarawak. They recently legalized stoning gay people to death, so, y'know, now's a good time to donate to an organization like <a href='https://www.rainbowrailroad.com/'>Rainbow Railroad</a>.",
        population: 417200, popEstimate: 2015, area: 5765, independence: "1984-01-01", indFrom: "Britain", demonym: "Bruneian", currency: "Brunei dollar (B$)", 
        languages: "Malay, English", motto: `"Always in service with God's guidance."`, neighbors: "Malaysia", 
        foodURL: "https://en.wikipedia.org/wiki/Bruneian_cuisine",
        food: [
            { name: "Ambuyat", type: "Other", url: "https://mfchzhiwei.blogspot.com/2014/11/ambuyat-recipe.html", date: "2019-03-29", 
              img: "ambuyat.jpg", desc: "I consumed more milk than I did ambuyat thanks to the bird's eye peppers in the dipping sauce. The texture made me uncomfortable. I used tapioca starch instead of sago palm starch because I do not know how to acquire sago starch in California.",
              diet: [
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." },
                  { type: "Spicy", desc: "The dipping sauce is made with a lot of peppers." }
              ],
              ingredients: ["sago starch", "tapioca starch", "potato starch", "chili peppers", "garlic", "ginger", "vinegar"]
            },
            { name: "Nasi Katok", type: "Rice", url: "http://edexcelwafiy-blog.tumblr.com/post/107644473057/brunei-nasi-katok-recipe-sambal-nasi-katok", date: "2019-04-01",
              img: "nasikatok.jpg", desc: "Having never tasted tamarind before, I was not sure what to expect with the sauce on this dish. Fortunately, its flavor is a wonderful mix of extremely salty and extremely sweet. Also fortunately, I used half the recommended amount of shrimp paste, so my mouth did not get consumed by The Shrimp.",
              diet: [
                  { type: "Fish", desc: "The sambal paste uses shrimp paste as an ingredient." },
                  { type: "Meat", desc: "This dish is served with fried chicken, which can be omitted if you just want some rice with sauce." },
                  { type: "Spicy", desc: "This recipe uses chili peppers." }
              ],
              ingredients: ["onion", "garlic", "ginger", "chili peppers", "tomato paste", "shrimp paste", "tamarind", "sugar", "salt", "chicken", "white rice"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Brunei",
        music: [
            { name: "D'hask - Kamu, Adalah Mimpi Buruk Ku", url: "https://www.youtube.com/watch?v=kgpdgR2d9mY" },
            { name: "Eqah - If It Isn't With You", url: "https://www.youtube.com/watch?v=BotnvsUvWiE" },
            { name: "D'hask - Tempat Ku", url: "https://www.youtube.com/watch?v=bzK_t1q8dL4" },
            { name: "Ezah Hashim - Tertulis", url: "https://www.youtube.com/watch?v=IZP97l72kng" },
            { name: "Maria Aires - Kamu Menganggu", url: "https://www.youtube.com/watch?v=iO_zxJTHy5s", favorite: true }
        ]
    },
    "BG": { // 7m
        name: "Bulgaria", desc: "The Republic of Bulgaria is a country in Southeast Europe. As of 2018, it was the most corrupt country in the European Union, which is pretty impressive given the rest of the European Union.",
        population: 7050034, popEstimate: 2017, area: 110994, independence: "1908-10-05", indFrom: "Ottoman Empire", demonym: "Bulgarian", currency: "Lev (%D0%BB%D0%B2)", 
        languages: "Bulgarian", motto: `"Unity makes strength."`, neighbors: "Greece, North Macedonia, Romania, Serbia, Turkey", 
        foodURL: "https://en.wikipedia.org/wiki/Bulgarian_cuisine",
        food: [
            { name: "Garash Cake", type: "Pastry", url: "https://cookinglsl.com/garash-cake/", date: "2019-04-06", 
              img: "garash.jpg", desc: "A delicious *gluten-free* cake made almost entirely of walnuts, sugar, and eggs. It is very sweet, which is always a good thing when eating sweets. That's why they're called sweets, after all.",
              diet: [
                { type: "Dairy", desc: "Butter and heavy whipping cream are used in the ganache frosting." },
                { type: "Egg", desc: "Egg is used in the cake batter and the ganache filling." },
                { type: "Nuts", desc: "Walnuts are the main ingredient in this cake's batter." }
              ],
              ingredients: ["egg", "butter", "cocoa powder", "walnuts", "brown sugar", "heavy whipping cream"]
            },
            { name: "Moussaka", type: "Casserole", url: "https://www.findbgfood.com/recipe-moussaka", date: "2019-04-05", 
              img: "moussaka.jpg", desc: "You cook up some spiced meats and potatoes, then you pour some milky eggs on top and cook it all a bit more, and you get a custard-topped dream come true. I posted this with the hashtag \"custard\" on social media (alongside several other joke hashtags like #grungo and #spaghettiHyperloop) and then some frozen custard company store in Milwaukee followed me and commented \"what's up?\" Buddy, this is not the kind of custard you're looking for.",
              diet: [
                { type: "Meat", desc: "This recipe calls for ground meat, but I used a vegan ground beef without any issue." },
                { type: "Dairy", desc: "Milk is used in the topping." },
                { type: "Egg", desc: "Egg is is used in the topping." },
              ],
              ingredients: ["potato", "ground beef", "onion", "egg", "milk", "paprika"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Bulgaria",
        music: [
            { name: "Nasekomix - Amore Mio", url: "https://www.youtube.com/watch?v=IHhHGF7nvuQ" },
            { name: "Review - Poslanie", url: "https://www.youtube.com/watch?v=RvMY2UGJz3c", favorite: true },
            { name: "Mariana Popova ft. Miro - Kadosh", url: "https://www.youtube.com/watch?v=pGtueslCWiU" },
            { name: "Slav de Hren - Gnomus", url: "https://www.youtube.com/watch?v=CmdpJPxcVWU" },
            { name: "Petia - It's Not Heaven", url: "https://www.youtube.com/watch?v=2dQ4OOm-PYs" },
            { name: "Ostava - Leka Nosht", url: "https://www.youtube.com/watch?v=IhwrKsA9AmQ" },
            { name: "Ani Hoang - Stoy Dalech Ot Men", url: "https://www.youtube.com/watch?v=WinjLonSPns" }
        ]
    },
    "BF": { // 20m
        name: "Burkina Faso", desc: "Burkina Faso is a country in West Africa. They were French, then there were a handful of coup d'&eacute;tats, then Thomas Sankana came in and did a lot of revolutionary and Marxist things, then he got assassinated, a few more coup d'&eacute;tats happened, and now things are going better probably!",
        population: 20107509, popEstimate: 2017, area: 274200, independence: "1960-08-05", indFrom: "France", demonym: "Burkinab&eacute;", currency: "West African CFA franc (CFA)", 
        languages: "French, Mossi, Fula, Dioula", motto: `"Unity - Progress - Justice"`, neighbors: "Benin, Ghana, Ivory Coast, Mali, Niger, Togo", 
        foodURL: "https://en.wikipedia.org/wiki/Burkinabe_cuisine",
        food: [
            { name: "Thiakry", type: "Dessert", url: "https://cookingrelax.wordpress.com/2013/07/31/degue-or-thiakry/", date: "2019-04-13", 
              img: "degue.jpg", desc: "It's a sweet and tart pudding-esque dish. Pretty tasty. It is gluten-free but if you use couscous instead of millet then it stops being gluten-free. However, this is true of all recipes when you substitute an ingredient for one that contains gluten.",
              diet: [
                  { type: "Dairy", desc: "This dish is mostly dairy. You could maybe make a vegan version with plant milk and yoghurt." }
              ],
              ingredients: ["couscous", "millet", "degue", "marscapone", "cream cheese", "yoghurt", "powdered milk", "sugar", "vanilla extract", "nutmeg", "pineapple extract", "lemon juice"]
            },
            { name: "Rago&ucirc;t d'igname", type: "Soup", url: "https://www.peacecorps.gov/educators/resources/recipe-ragout-digname/", date: "2019-04-12", 
              img: "yamstew.jpg", desc: "You get a lot of yams and you cook 'em in some beef broth and what do you get? A delicious stew!",
              diet: [
                { type: "Meat", desc: "This recipe calls for lots of beef, but I used a vegan ground beef and boullion without any issue." }
              ],
              ingredients: ["yam", "beef", "onion", "tomatoes", "garlic", "boullion", "beef broth"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Burkina_Faso",
        music: [
            { name: "Bebeto Bongo - Zongou Zongou", url: "https://www.youtube.com/watch?v=P3XJwnc2v3o" },
            { name: "Greg Burkimbila - F'pada Porin", url: "https://www.youtube.com/watch?v=tk5LFS2TB1g" },
            { name: "Farafina - Miribali", url: "https://www.youtube.com/watch?v=OcMMIiIV3pM" },
            { name: "Tiness La Deesse - Dans la joie", url: "https://www.youtube.com/watch?v=49FVDISk-ag", favorite: true },
            { name: "Imilo Lechanceux - Warb Nooma", url: "https://www.youtube.com/watch?v=cRiSCj_Ewcc" }
        ]
    },
    "BI": { // 10m
        name: "Burundi", desc: "The Republic of Burundi is a small country between East and Central Africa. Less than a fifth of the population lives in urban areas, and the majority of the citizens belong to one of three tribes: the Hutu, Tutsi, and Twa.",
        population: 10524117, popEstimate: 2016, area: 27834, independence: "1962-07-01", indFrom: "Belgium", demonym: "Burundian", currency: "Burundian franc (BIF)", 
        languages: "Kirundi, French, English", motto: `"Union, Work, Progress."`, neighbors: "Democratic Republic of the Congo, Rwanda, Tanzania", 
        foodURL: "https://en.wikipedia.org/wiki/Burundian_cuisine",
        food: [
            { name: "Anise Bread", type: "Bread", url: "https://humoroutcasts.com/2017/anise-bread-and-the-lost-pyramid-of-burundi/", date: "2019-04-20", 
              img: "anusbread.jpg", desc: "Fun fact: anise just tastes exactly like (black) licorice. Which means this bread just tastes like licorice. If you're a fan of licorice, you'll like this bread. If you're not, you still might like it anyway! I hate licorice and I still thought this bread was pretty good.",
              diet: [
                  { type: "Gluten", desc: "It's bread." },
                  { type: "Egg", desc: "An egg wash is used on the dough, but this is optional.", optional: true }
              ],
              ingredients: ["flour", "yeast", "sugar", "anise seeds", "vegetable oil", "egg"]
            },
            { name: "Boko Boko Harees", type: "Meat", url: "https://www.geniuskitchen.com/recipe/boko-boko-harees-burundi-484415", date: "2019-04-21", 
              img: "boko.jpg", desc: "Butter makes everything better, and this is true of grains as well. Buttery (or ghee-ey?) grains with chicken, onions, and lots of turmeric makes for a very filling meal.",
              diet: [
                  { type: "Meat", desc: "Chicken is a key component to this dish." },
                  { type: "Gluten", desc: "Bulgur wheat is used in this recipe." },
                  { type: "Dairy", desc: "Ghee is used to fry everything." }
              ],
              ingredients: ["bulgur wheat", "chicken", "onion", "turmeric", "sugar", "ghee"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Burundi",
        music: [
            { name: "Ashley Diva - Siku Mbili", url: "https://youtu.be/MCSVxZgbj0o" },
            { name: "Khadja Nin - Wale Watu", url: "https://www.youtube.com/watch?v=wGJBdZHaEqA" },
            { name: "Happy Famba - My Time", url: "https://www.youtube.com/watch?v=UASi3JGdLhE" },
            { name: "Sat-B - Satura Amabafle", url: "https://www.youtube.com/watch?v=-VPOVBQdbUc", favorite: true },
            { name: "Happy Famba ft. Krazy Bright & Channy Queen - Collabo", url: "https://www.youtube.com/watch?v=BYnQfd9JaRs" }
        ]
    },
    "CV": { // 0.5m
        focusArea: "SN", name: "Cabo Verde", desc: "The Republic of Cabo Verde is an island country west of continental Africa. They have declared that their official English name is \"Cabo Verde\" but that doesn't stop people from calling it \"Cape Verde\" still because calling things by their proper names is hard apparently. It consists of ten islands whose geography contributes to powerful hurricanes that travel west to hit the Americas. <s>Maybe they'll stop once Americans start getting their name right.</s>",
        population: 539560, popEstimate: 2016, area: 4033, independence: "1975-07-05", indFrom: "Portugal", demonym: "Cape Verdean, Cabo Verdean", currency: "Cape Verdean escudo (CVE)", 
        languages: "Portuguese, Cape Verdean Creole", motto: `"Unity, Work, Progress."`, neighbors: "None", 
        foodURL: "https://en.wikipedia.org/wiki/Cape_Verdean_cuisine",
        food: [
            { name: "Chamu&ccedil;as", type: "Pastry", url: "https://www.youtube.com/watch?v=2mjGUaV_d_A", date: "2019-05-26", 
              img: "chamucas.jpg", desc: "Samosas, but Portuguese. Beefy, spicy, buttery, tasty.",
              diet: [
                  { type: "Meat", desc: "The primary ingredient of the filling is ground beef. You can use a vegan beef substitute without any issue" },
                  { type: "Alcohol", desc: "White wine is used in the filling, but the alcohol is cooked off." },
                  { type: "Dairy", desc: "Butter is used in the dough and filling." }
              ],
              ingredients: ["ground beef", "cardamom", "cumin", "turmeric", "butter", "onion", "garlic", "coconut flakes", "white wine", "phyllo dough"]
            },
            { name: "Bolinhos de mandioca com mel", type: "Dessert", url: "https://expressodasilhas.cv/lifestyle/2019/03/06/para-variar-bolinhos-de-mandioca-com-mel/62664", date: "2019-06-02", 
              img: "bolinhos.jpg", desc: "So this recipe is in Portuguese and omits several important things like the amount of flour to use and the baking time and temperature, so I had to improvise. And use wheat flour since I ran out of cassava flour. So I probably didn't ACTUALLY make this dish, but I made something probably similar perhaps, and it was still tasty! So, hoorah. If you want to make whatever the hell I made, follow this recipe but then keep adding flour until it forms a batter, then cook at 185 degrees Celcius for 15 minutes.",
              diet: [
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Alcohol", desc: "Brandy is used in the dough." }
              ],
              ingredients: ["cassava flour", "manioc flour", "egg", "baking soda", "olive oil", "molasses", "brandy"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Cape_Verde",
        music: [
            { name: "Fina&ccedil;on - Si manera", url: "https://www.youtube.com/watch?v=Lalc1AE9Vv4" },
            { name: "Jenifer Solidade - Largam da mon", url: "https://www.youtube.com/watch?v=hJ-0F_KHLf8" },
            { name: "Jennifer Dias ft. Elji Beatzkilla - Loco", url: "https://www.youtube.com/watch?v=Ma_2SJTwcQU" },
            { name: "Elida Almeida ft. Djodje - &Eacute; Zonban", url: "https://www.youtube.com/watch?v=JcjZPBN2MXE", favorite: true },
            { name: "Suzanna Lubrano - Tudo Pa Bo", url: "https://www.youtube.com/watch?v=gAgnhSt-e5Q" },
            { name: "Tcheka - Djan Bedja", url: "https://www.youtube.com/watch?v=INNclmmsSe4" },
            { name: "Gil Semedo - Disusperu", url: "https://www.youtube.com/watch?v=iORJUlas9Y0" },
            { name: "Neuza - Volta Pa Mim", url: "https://www.youtube.com/watch?v=XfZgTPnKE_M" },
            { name: "Nelson Freitas - Nubian Queen", url: "https://www.youtube.com/watch?v=rpuwnSxy-40" }
        ]
    },
    "KH": { // 16m
        name: "Cambodia", desc: "The Kingdom of Cambodia is a country in Southeast Asia. They had some bad times, as many countries that got colonized did, including four years of extremely bad times (genocide) and now they're slowly getting better! Unfortunately, there are still a lot of landmines scattered throughout the country which sometimes makes that difficult.",
        population: 16245729, popEstimate: 2018, area: 181035, independence: "1953-11-09", indFrom: "France", demonym: "Cambodian", currency: "Riel (%E1%9F%9B)", 
        languages: "Khmer", motto: `"Nation, Religion, King."`, neighbors: "Laos, Thailand, Vietnam", 
        foodURL: "https://en.wikipedia.org/wiki/Cambodian_cuisine",
        food: [
            { name: "Lok Lak", type: "Meat", url: "https://www.196flavors.com/cambodia-lok-lak/", date: "2019-05-01", favorite: true, 
              img: "loklak.jpg", desc: "A very tasty marinade and fancy dipping sauce brings this meat into true Yum In My Tum territory. I only burned the meat a little bit! Well, a little bit, total. No burning on one side and a lotta burning on the other. Still tasty! Shout out to Marcin for finding this recipe while I was busy panicking about how every Cambodian dish I could find was seafood-based. Surprise, now you know why none of the recipes on this site are fish dishes!",
              diet: [
                { type: "Meat", desc: "This is a steak dish. Chicken broth powder is used in the marinade as well. You can probably soak some tofu or seitan in the marinade and have it work, too." },
                { type: "Fish", desc: "The beef marinade and the sauce use fish sauce, which can be substituted with an anchovy-free Worcestershire sauce if you don't do the fish thing." },
                { type: "Soy", desc: "The beef marinade uses soy sauce, which can be substituted with coconut aminos and everything will be A-OK." }
              ],
              ingredients: ["beef", "scallions", "tomato sauce", "soy sauce", "garlic", "fish sauce", "kampot pepper", "sugar", "vegetable oil", "chicken broth powder", "potato starch", "paprika", "lime juice", "lettuce", "tomato", "rice"]
            },
            { name: "Chicken Amok", type: "Curry", url: "https://ethnicspoon.com/how-to-make-cambodian-chicken-amok/", date: "2019-04-28", favorite: true, 
              img: "amok.jpg", desc: "You know what's always good and never bad? Curry. You know what this is? Curry. It's good. The lemongrass and mint give it a very fresh cool flavor that complements the spiciness very well. A crowd-pleaser.",
              diet: [
                { type: "Meat", desc: "This is a chicken curry, but you can use fish or pretty much whatever you want that is good in a curry." },
                { type: "Fish", desc: "Fish sauce is used in this dish, but it can be substituted with an anchovy-free Worcestershire sauce to de-fish the dish." },
                { type: "Spicy", desc: "It IS a curry. One red chilli pepper is used, but you can tone down the spice as desired by using less or picking a not-so-spicy peppie." }
              ],
              ingredients: ["lemongrass", "mint", "ginger", "shallot", "garlic", "chili", "turmeric", "coconut milk", "palm sugar", "chicken", "fish sauce", "lime zest", "rice"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Cambodia",
        music: [
            { name: "Sokun Nisa - Di Da Da", url: "https://www.youtube.com/watch?v=hCNjgMFwUyw" },
            { name: "Laura Mam - Tear Me Down", url: "https://www.youtube.com/watch?v=PvBIVywaH8M" },
            { name: "Adda Angel - Like Like", url: "https://www.youtube.com/watch?v=6GSc_E7cIrM", favorite: true },
            { name: "Meas Soksophea - Single", url: "https://www.youtube.com/watch?v=Oi638vRiB2c" },
            { name: "Laura Mam ft. Andrew Mam - Since You've Been Gone", url: "https://www.youtube.com/watch?v=l_QXc16yNnE" },
            { name: "Khemarak Sereymun - Sad Man", url: "https://www.youtube.com/watch?v=FdiTw78KuMI" }
        ]
    },
    "CM": { // 23m
        name: "Cameroon", desc: "The Republic of Cameroon is a country in Central Africa. Its diverse climates range from beaches to deserts to rainforests to mountains. ",
        population: 23439189, popEstimate: 2016, area: 475442, independence: "1960-01-01", indFrom: "France", demonym: "Cameroonian", currency: "Central African CFA Franc (XAF)", 
        languages: "English, French", motto: `"Peace - Work - Fatherland."`, neighbors: "Central African Republic, Chad, Republic of the Congo, Equatorial Guinea, Gabon, Nigeria", 
        foodURL: "https://en.wikipedia.org/wiki/Cameroonian_cuisine",
        food: [
            { name: "Koki Corn", type: "Dumpling", url: "https://www.africanbites.com/koki-corn-african-fresh-corn-tamales/", date: "2019-05-08", 
              img: "koki.jpg", desc: "I've literally never seen a tamale before in my life. Which is strange because I live in California, but somehow I have lived 29 years never seeing an actual tamale. But I guess this is an actual tamale. And it was good. Therefore, tamales are good.",
              diet: [
                { type: "Warning", desc: "This recipe calls for red palm oil. Please make sure you are buying sustainable palm oil if you make this recipe." },
                { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["corn", "corn meal", "spinach", "palm oil"]
            },
            { name: "Vitumbua", type: "Bread", url: "https://www.africanbites.com/vitumbarice-pancakes/", date: "2019-05-19", 
              img: "vitumbua.jpg", desc: "Tasty coconutty pancake babies with an equally tasty coconut milk caramel sauce. I have a lot of that caramel sauce left over so I'm just going to put it on everything I eat for the next day or two. The healthy choice.",
              diet: [
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." },
                  { type: "Nuts", desc: "This recipe uses almond extract, but you can also just not put that in. You do you, babe." }
              ],
              ingredients: ["rice", "yeast", "coconut milk", "coconut flakes", "sugar", "cardamom", "nutmeg", "almond extract", "brown sugar", "vanilla extract"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Cameroon",
        music: [
            { name: "Charlotte Mbango - Nguina mulema", url: "https://www.youtube.com/watch?v=BQF52c0JYuw" },
            { name: "Gasha ft. Zegeman - The Date", url: "https://www.youtube.com/watch?v=0sVNk4AyJ_Y", favorite: true }, 
            { name: "Lapiro de Mbanga - Over Done", url: "https://www.youtube.com/watch?v=pzBbHqhLQi0" }, 
            { name: "Eddy Bee - Shake", url: "https://www.youtube.com/watch?v=U8_uj01ifZg" },
            { name: "Naomi Achu - Alhadji", url: "https://www.youtube.com/watch?v=Le9u29UtvaM" },
            { name: "Wax Dey - Will You Be My Wifey", url: "https://www.youtube.com/watch?v=byl-F7aFJ9I" }
        ]
    },
    "CA": { // 37m
        name: "Canada", desc: "Canada is a country in North America. A lot of people think it's a really good country and everyone is nice, but when your neighbor is basically just a slightly more racist and violent version of you it's not hard to see why. Despite being the second largest country in the world, it isn't even in the top 30 most populated, because a lot of that land is just way too cold.",
        population: 37314442, popEstimate: 2019, area: 9984670, independence: "1867-07-01", indFrom: "Britain", demonym: "Canadian", currency: "Canadian Dollar ($CAD)", 
        languages: "English, French", motto: `"From Sea to Sea."`, neighbors: "United States of America", 
        foodURL: "https://en.wikipedia.org/wiki/Canadian_cuisine",
        food: [
            { name: "Poutine", type: "Other", url: "https://www.seasonsandsuppers.ca/authentic-canadian-poutine-recipe/", date: "2019-05-18", 
              img: "pooteen.jpg", desc: "Gravy and squeaky cheese and french fries. What more could you ask for in life? Well, lots of things. But what more could you ask for in a meal? Not much.",
              diet: [
                  { type: "Meat", desc: "Gravy is one of three ingredients in this recipe, but I used use vegan boullions to make the gravy without any issue." },
                  { type: "Dairy", desc: "Cheddar cheese curds are one of the three ingredients in this recipe, but dairy-free cheese curd substitutes exist. Butter is also used in the gravy, but you can find butter-free gravy recipes." },
                  { type: "Gluten", desc: "Flour is used in the gravy. You can use a flour-free gravy recipe though." }
              ],
              ingredients: ["corn starch", "butter", "flour", "beef broth", "chicken broth", "potatoes", "cheese curds"]
            },
            { name: "Butter Tart", type: "Pastry", url: "https://www.rockrecipes.com/best-classic-canadian-butter-tarts/", date: "2019-05-24",
              img: "butttart.jpg", desc: "This should probably be obvious from the name but these bad boys were very buttery. I was only able to eat one after dindin, because the rich buttery goodness consumed me. And I, in turn, consumed it. A very tasty pastry.",
              diet: [
                  { type: "Dairy", desc: "Butter is used in the dough and filling." },
                  { type: "Egg", desc: "Egg is used in the filling." },
                  { type: "Gluten", desc: "Flour is used in the dough." }
              ],
              ingredients: ["flour", "brown sugar", "salt", "shortening", "butter", "water", "corn syrup", "egg", "vanilla extract", "raisins"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Canada",
        music: [
            { name: "Gazoline - Parfaite", url: "https://www.youtube.com/watch?v=RudcpdkRWtE" },
            { name: "Snotty Nose Rez Kids - Clash of the Clans", url: "https://www.youtube.com/watch?v=W4UersvGsIs" },
            { name: "Eekwol - Too Sick", url: "https://www.youtube.com/watch?v=0XuYikRUl7g" },
            { name: "Inez Jasper - Dancin' on the Run", url: "https://www.youtube.com/watch?v=QgOluBcedw0", favorite: true },
            { name: "Trans-X - Through the Eyes of the 90's", url: "https://www.youtube.com/watch?v=fOOOu_DqWuc" },
            { name: "Dionysos - Vancouver", url: "https://www.youtube.com/watch?v=FHc-Tnb2-5Y" },
            { name: "Yelo Molo - Malaise", url: "https://www.youtube.com/watch?v=bAiGvbWh5mk" },
            { name: "The Jerry Cans - Qanurli Isumavit", url: "https://www.youtube.com/watch?v=LKYsAI6WYaU" }, 
            { name: "Northern Haze - Nutaraq", url: "https://www.youtube.com/watch?v=mrg4LYl72vc" },
            { name: "JB The First Lady - Planting Seeds", url: "https://www.youtube.com/watch?v=T1a1MsVu6X8" }
        ]
    },
    "CF": { // 4.5m
        name: "Central African Republic", desc: "The Central African Republic is a landlocked country in South Asia. Haha, just kidding, it's in Central Africa. That joke was to lighten the mood, because as of this writing, there is an ongoing civil war in the country, and it is one of the poorest nations in the world. The joke was necessary because if you read more about this country elsewhere, you're not going to find much in the way of good news. Colonialism is bad and does lasting damage to former colonies, everybody.",
        population: 4594621, popEstimate: 2016, area: 622984, independence: "1960-08-13", indFrom: "France", demonym: "Central African", currency: "Central African CFA Franc (XAF)", 
        languages: "French, Sango", motto: `"Unity, Dignity, Work."`, neighbors: "Cameroon, Chad, Democratic Republic of the Congo, Republic of the Congo, South Sudan, Sudan", 
        foodURL: "https://en.wikipedia.org/wiki/Cuisine_of_the_Central_African_Republic",
        food: [
            { name: "Kanda", type: "Meat", url: "https://www.196flavors.com/central-african-republic-kanda/", date: "2019-06-11", favorite: true, 
              img: "kanda.jpg", desc: "The pumpkin seed powder mixed into the meatballs gave them a pretty wild flavor that was guaranteed goodtimes for my mouth. I usually just buy frozen meatballs on the rare occassion I need meatballs, but next time I may just make these instead.",
              diet: [
                  { type: "Meat", desc: "They're meatballs. You can probably use vegan meat substitutes but getting them to stick into balls may require some additional ingredients then." },
                  { type: "Spicy", desc: "Chili peppers are used; you can adjust the amount or omit them entirely to your preference." }
              ],
              ingredients: ["ground beef", "pumpkin seeds", "onions", "garlic", "tomatoes", "chilli peppers", "parsley"]
            },
            { name: "Fulani Boullie", type: "Rice", url: "https://web.archive.org/web/20180301223703/http://www.congocookbook.com/rare_recipes/peace_corps_car.html", date: "2019-06-15", 
              img: "fulani.jpg", desc: "This is what happens when you get peanut butter and rice, like that one Reese's Peanut Butter Cup commercial but one guy just has a huge vat of rice or something. Burnt peanut butter may be permanently stuck on one of my pots.",
              diet: [
                  { type: "Nuts", desc: "This is a peanut butter rice dish." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions. Milk is an optional ingredient." }
              ],
              ingredients: ["peanut butter", "rice", "rice flour", "lemon juice"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_the_Central_African_Republic",
        music: [
            { name: "Laetitia Zonzamb&eacute; - Dodo", url: "https://www.youtube.com/watch?v=aFneqqCgt_o" },
            { name: "HK ft. Idylle Mamba, P Wayne - A k&eacute; ti", url: "https://www.youtube.com/watch?v=yUFJnDeABF0" },
            { name: "Idylle Mamba - Sango et Vous", url: "https://www.youtube.com/watch?v=F_oaHMAU9v4" },
            { name: "Umoya - Kalisia (Lord of the Forest)", url: "https://www.youtube.com/watch?v=bbuoByt3rHw" },
            { name: "Laetitia Zonzamb&eacute; - Messia (Mademoiselle)", url: "https://www.youtube.com/watch?v=ShhjHerJ8-Y", favorite: true }
        ]
    } ,
    "TD": { // 13m
        name: "Chad", desc: "The Republic of Chad is a country in north-central Africa. They're going through some bad times, and one of the websites I grabbed a recipe from had this, so <a href='http://www.tchad.org/aid/solutions.html' target='_blank'>here's a listing of several Chad-related NGOs you can donate to</a>.",
        population: 13670084, popEstimate: 2015, area: 1284000, independence: "1960-08-11", indFrom: "France", demonym: "Chadian", currency: "Central African CFA Franc (XAF)", 
        languages: "Arabic, French", motto: `"Unity, Work, Progress"`, neighbors: "Cameroon, Central African Republic, Libya, Niger, Nigera, Sudan", 
        foodURL: "https://en.wikipedia.org/wiki/Chadian_cuisine",
        food: [
            { name: "Jarret de Boeuf", type: "Soup", url: "https://books.google.com/books?id=FJxlWwrVcKcC&pg=PA162", date: "2019-06-22", 
              img: "jarret.jpg", desc: "It's a good old-fashioned beef stew. The presence of sweet potatoes is always appreciated, both in stews and just in general..",
              diet: [
                  { type: "Meat", desc: "It's beef stew." }
              ],
              ingredients: ["beef", "onion", "garlic", "cayenne pepper", "cloves", "carrots", "eggplant", "aubergine", "leek", "sweet potato"]
            },
            { name: "Karkanji", type: "Beverage", url: "http://www.tchad.org/research/cook.html#karkanji", date: "2019-06-22", 
              img: "karkanji.jpg", desc: "It's sweet and made with hibiscus. Hello-biscus.",
              diet: [
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["hibiscus flowers", "sugar", "ginger root", "cinnamon", "cloves"]
            },
            { name: "Bouillie", type: "Rice", url: "https://aussietaste.com.au/african-cuisine/bouillie-chadian-porridge/", date: "2019-06-23", 
              img: "bouillie.jpg", desc: "I realized moments after making this that the dish was very similar to the fulani boullie I made for the Central African Republic. But it's definitely a completely different peanut butter rice porridge dish, so it's okay. Don't worry about it. This one didn't ruin my saucepan, so I like it more.",
              diet: [
                  { type: "Nuts", desc: "This is a peanut butter rice dish." },
                  { type: "Dairy", desc: "There's milk. You can skip it..", optional: true }
              ],
              ingredients: ["rice", "milk", "peanut butter", "millet", "sugar", "lemon"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Chad",
        music: [
            { name: "Cl&eacute;ment Masdongar - Yondaka", url: "https://www.youtube.com/watch?v=nxjnyGFUWJY" },
            { name: "Mounira Mitchala - Tourabi", url: "https://www.youtube.com/watch?v=7L5t0xJDkIc" },
            { name: "IZra & &Eacute;l&eacute;t&eacute; - Yang'ha Yangha Girls", url: "https://www.youtube.com/watch?v=qillpm0u72k" },
            { name: "Mounira Mitchala - Zarlie", url: "https://www.youtube.com/watch?v=eeLg11IE2v0" },
            { name: "Mawndo&eacute; ft. Djamila - Djobo", url: "https://www.youtube.com/watch?v=0QurOBwccNs", favorite: true }
        ]
    },
    "CL": { // 17.6m
        name: "Chile", desc: "The Repubic of Chile is a country on the west coast of South America. For a while they were ruled by the Pinochet dictatorship, which is a bad thing unless you're one of those fascist dipshits who idolize him in which case please leave this website and learn how to be a decent human. Fortunately, he's dead now and Chile is one of the most prosperous countries in South America, and has the second lowest homicide rate in America after Canada.",
        population: 17574003, popEstimate: 2017, area: 756096, independence: "1810-09-18", indFrom: "Spain", demonym: "Chilean", currency: "Peso (CLP)", 
        languages: "Spanish", motto: `"By Right or Might."`, neighbors: "Argentina, Bolivia, Peru", 
        foodURL: "https://en.wikipedia.org/wiki/Chilean_cuisine",
        food: [
            { name: "Mote con huesillo", type: "Beverage", url: "https://www.cookingchanneltv.com/recipes/mote-con-huesillos-2119869", date: "2019-06-30", 
              img: "mote.jpg", desc: "It's uhhh like if you had a boba/bubble tea but instead of sweat tapioca balls it's a bunch of grains and also there is a peach in there. For some reason.",
              diet: [
                    { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." },
                    { type: "Gluten", desc: "Wheat or barley are used in this recipe, but can be substituted with corn mote or omitted entirely if you don't want grains in your bevvie.", optional: true }
              ],
              ingredients: ["dried peaches", "sugar", "cinnamon", "orange peel", "water", "wheat berries", "pearled barley"]
            },
            { name: "Ensalada chilena", type: "Salad", url: "https://www.thespruceeats.com/chilean-tomato-and-onion-salad-3029588", date: "2019-06-26", 
              img: "ensalada.jpg", desc: "Fun fact: if you soak onions in water for a while they don't hurt as much when you eat them! That fun fact is what makes this a good salad.",
              diet: [
                    { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["tomato", "onion", "lime", "cilantro", "coriander", "olive oil"]
            },
            { name: "Conejos", type: "Pastry", url: "https://www.chileanfoodandgarden.com/rabbits-chilean-conejos/", date: "2019-06-30", favorite: true, // https://www.foodnetwork.com/recipes/alton-brown/dulce-de-leche-recipe-1948282
              img: "conejos.jpg", desc: "Dulce de leche is the perfect food, and sweet pastry buns are the perfect container for food. Thus, a combination of the two is a beautiful thing.",
              diet: [
                    { type: "Dairy", desc: "Butter and milk are used in the dough and filling." },
                    { type: "Egg", desc: "Egg is used in the dough." },
                    { type: "Gluten", desc: "Flour is used in the dough." }
              ],
              ingredients: ["milk", "flour", "yeast", "sugar", "butter", "eggs", "baking soda", "vanilla"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Chile",
        music: [
            { name: "Electrodom&eacute;sticos - El calor", url: "https://www.youtube.com/watch?v=86aVN9YzxPM" }, 
            { name: "Los Prisioneros - Corazones Rojos", url: "https://www.youtube.com/watch?v=zNEqNxwQGDo" }, 
            { name: "Javiera Mena - Espada", url: "https://www.youtube.com/watch?v=GqNTdNCU2y8" }, 
            { name: "La Mano Ajena - Favella", url: "https://www.youtube.com/watch?v=xnkXO6J-djc" }, 
            { name: "Camila Silva - Estrella Con Travesia", url: "https://www.youtube.com/watch?v=IxcMyMJJa4o" }, 
            { name: "Pscuala Ilabaca y Fauna - Ya no Esperes M&aacute;s", url: "https://www.youtube.com/watch?v=W1Grj3_qdZI" }, 
            { name: "Movimiento Original - Natural", url: "https://www.youtube.com/watch?v=L7Jx-VHxMEU" }, 
            { name: "Denise Rosenthal - Bye Bye", url: "https://www.youtube.com/watch?v=pbw-aCNjTE4" },
            { name: "Alex Anwandter - Cordillera", url: "https://www.youtube.com/watch?v=oSXWXeFa-cs" }, 
            { name: "MediaBanda - El Sof&aacute;", url: "https://www.youtube.com/watch?v=FgBoGceWDxg" },
            { name: "Denise Rosenthal - D&eacute;jate llevar", url: "https://www.youtube.com/watch?v=phaMeTBoJiM", favorite: true },
            { name: "Guachup&eacute; - Josefina", url: "https://www.youtube.com/watch?v=Iti2cFTp5IY" }, 
            { name: "Amanitas - Me Desvelo", url: "https://www.youtube.com/watch?v=Tp6A89ROBCM" },
            { name: "Ana Tijoux - Shock", url: "https://www.youtube.com/watch?v=177-s44MSVQ" } 
        ]
    },
    "CN": {  // 1.4b
        name: "China", desc: "The People's Republic of China is a country in East Asia. By pretty much every metric, it is what one might call \"very big.\" I think it's safe to say you probably know a thing or two about China, and it is possible that you are waiting for me to give an opinion about China's government so you can argue with me. Well, guess what? I agree with you on every issue about China, so take that! Well, except all the ones you're wrong about. But all the other opinions I agree with 100%.",
        population: 1403500365, popEstimate: 2016, area: 9596961, independence: "1949-10-01", indFrom: "Kuomintang", demonym: "Chinese", currency: "Yuan (%C2%A5)", 
        languages: "Mandarin, Mongolian, Uyghur, Tibetan, Zhuang, Cantonese, many others", motto: `None`, neighbors: "Afghanistan, Bhutan, India, Kazakhstan, Kyrgyzstan, Laos, Mongolia, Myanmar, Nepal, North Korea, Pakistan, Russia, Tajikistan, Vietnam", 
        foodURL: "https://en.wikipedia.org/wiki/Chinese_cuisine",
        food: [
            { name: "Egg Dumplings", type: "Dumpling", url: "https://www.youtube.com/watch?v=jdOua-VHPPU", date: "2019-07-10", 
              img: "eggdump.jpg", desc: "These are basically just tiny omelets. Which is not a bad thing, if you like omelets. Omelets covered in soy sauce.",
              diet: [
                  { type: "Egg", desc: "Come on." },
                  { type: "Soy", desc: "Soy sauce is used to flavor everything" },
                  { type: "Spicy", desc: "Chilli peppers are an ingredient that you can omit if you don't want to spice yourself up." },
                  { type: "Meat", desc: "Pork is the traditional primary filling. You can just not use pork. Rice works, too.", optional: true }
              ],
              ingredients: ["egg", "ginger", "garlic", "green onion", "soy sauce", "chilli pepper", "sugar", "pork"]
            }, // https://en.wikipedia.org/wiki/Anhui_cuisine
            { name: "Coconut Bar", type: "Dessert", url: "https://bigflavorstinykitchen.com/coconut-jelly/", date: "2019-07-08", 
              img: "coconutgun.jpg", desc: "Nice little jelly cubes. They're creamy, they're coconutty, they're good. Would recommend.",
              diet: [
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["coconut milk", "agar agar powder", "sugar", "coconut cream", "rose water"]
            }, // https://en.wikipedia.org/wiki/Cantonese_cuisine
            { name: "Ngo hiang", type: "Meat", url: "https://www.misstamchiak.com/recipe/ngoh-hiang/", date: "2019-07-09", 
              img: "ngo.jpg", desc: "I had never heard of bean curd skins/wrappers before this, but I gotta say that they make good eggroll-esque vehicles for transferring fried food into your mouth. Good stuff, but I have also learned that I am not a fan of water chestnuts.",
              diet: [
                  { type: "Soy", desc: "The filling contains soy sauce and the wrappers are made of soybean." },
                  { type: "Meat", desc: "A primary ingredient of the filling is pork. You can use something else, like I did." },
                  { type: "Egg", desc: "Egg is used in the filling." },
                  { type: "Fish", desc: "A primary ingredient of the filling is shrimp. You can use something else, like I did." },
                  { type: "Gluten", desc: "Flour is used in the filling." }
              ],
              ingredients: ["bean curd skin", "pork", "shrimp", "water chestnut", "egg", "garlic", "shallot", "soy sauce", "flour", "white pepper", "five spice powder"]
            }, // https://en.wikipedia.org/wiki/Fujian_cuisine
            { name: "Dong'an Chicken", type: "Meat", url: "https://whattocooktoday.com/dongan-chicken.html", date: "2019-07-07", 
              img: "dongan.jpg", desc: "I can't tell if my spice tolerance is increasing or if I'm just underspicing things subconsciously because I am a baby. Probably the second one. Either way, very tasty chicken.",
              diet: [
                  { type: "Alcohol", desc: "Shaoxing wine is used to cook the chicken." },
                  { type: "Meat", desc: "It's chicken." },
                  { type: "Spicy", desc: "Hunan cuisine is known for being very hot." },
                  { type: "Nuts", desc: "Peanut oil is a recommended oil to cook this in. You can use lard or some other oil instead, though.", optional: true }
              ],
              ingredients: ["chicken stock", "chicken", "ginger", "green onions", "chilli", "dried chillis", "shaoxing wine", "rice vinegar", "sichuan peppercorns", "corn starch", "sesame oil", "peanut oil"]
            }, // https://en.wikipedia.org/wiki/Hunan_cuisine
            { name: "Dazhu gansi", type: "Soup", url: "https://www.youtube.com/watch?v=jVzdfGC1xxs", date: "2019-07-15", 
              img: "chickentofusoup.jpg", desc: "What if chicken noodle soup was still chicken noodle soup, but instead of nice wheat strings, the noodles were instead thinly-sliced tofu strips? Then you'd have this. If you like chicken noodle soup and aren't morally opposed to tofu, you'll like this.",
              diet: [
                  { type: "Soy", desc: "The ingredients in this dish vary, but one of the ingredients that's pretty much 100% necessary is tofu." },
                  { type: "Meat", desc: "And the other 100% necessary ingredient is chicken stock. Fortunately, vegan alternatives to chicken stock exist, which can be used instead. Ham is a common, but optional, ingredient." },
                  { type: "Fish", desc: "Shrimp is another common ingredient. But, again, you can just put whatever you want in this soup." }
              ],
              ingredients: ["tofu", "chicken", "mushrooms", "ham", "shrimp", "bamboo shoots", "ginger"]
            }, // https://en.wikipedia.org/wiki/Jiangsu_cuisine
            { name: "B%C3%A1s%C4%AB d%C3%ACgu%C4%81", type: "Dessert", url: "https://homeeconomics.pixnet.net/blog/post/83245387-269.%E6%8B%94%E7%B5%B2%E5%9C%B0%E7%93%9C", date: "2019-07-15", 
              img: "sugarpotato.jpg", desc: "If you wanty eat some sweet potatos but are disappointed with how they aren't as sweet as their name might suggest, you can try frying them and then stirring them into a very hot sugar syrup. Then you can VERY CAREFULLY pull a sticky stringy chunk of sweet potato out of the pile, dip it into some ice water to cool and solidify the hot sugar, and then crunch into yum!", encoded: true, 
              diet: [
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["sweet potato", "sugar", "oil", "water"]
            }, // https://en.wikipedia.org/wiki/Shandong_cuisine
            { name: "Hot and Sour Noodles", type: "Noodle", url: "https://www.chinasichuanfood.com/hot-and-sour-sweet-potato-noodles/", date: "2019-07-02", 
              img: "hotsournoodz.jpg", desc: "They were less hot and less sour than I expected, which was nice. The fried peanuts were very delicious. The zha cai was interesting. The noodles were sweet potatoey. Wild times all around.",
              diet: [
                  { type: "Soy", desc: "Soy sauce is used in the seasoning. Deep fried soy beans are a potential ingredient." },
                  { type: "Spicy", desc: "It's in the name." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." },
                  { type: "Nuts", desc: "Roasted peanuts are a potential ingredient, and peanut oil can be used to cook the dish. You can use a different kind of oil without any issues.", optional: true }
              ],
              ingredients: ["sweet potato noodles", "peanuts", "green onions", "coriander", "cilantro", "Sichuan vegetable", "garlic", "Sichuan peppercorn", "five spice powder", "chili oil", "vinegar", "soy sauce", "sesame oil"]
            }, // https://en.wikipedia.org/wiki/Sichuan_cuisine
            { name: "Dongpo Pork", type: "Meat", url: "https://rasamalaysia.com/braised-pork-belly-dong-po-rou/", date: "2019-07-13", 
              img: "donpo.jpg", desc: "As a disclaimer, I don't actually like pork. This dish did not change my mind. I also probably cooked this dish wrong because I've never cooked pork before and it was harder than expected to find pork belly. Having said all that... s'fine. 'Sa fine dish. Probably better if you can find pork belly that isn't pre-sliced and you actually like pork, but even without that, s'fine.",
              diet: [
                  { type: "Meat", desc: "It's pork. I don't know enough about braising to say if substituting something for it would be viable." },
                  { type: "Soy", desc: "The pork is braised in soy sauce." },
                  { type: "Alcohol", desc: "The pork is ALSO braised in wine." }
              ],
              ingredients: ["pork belly", "scallions", "green onions", "ginger", "soy sauce", "dark soy sauce", "shaoxing wine", "rock sugar", "brown sugar"]
            } // https://en.wikipedia.org/wiki/Zhejiang_cuisine
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_China",
        music: [
            { name: "Jane Zhang - R%C3%BAgu%C7%92 Zh%C3%A8 Ji%C3%B9sh%C3%AC %C3%80iq%C3%ADng", url: "https://www.youtube.com/watch?v=iA0Uxzs_Qow", encoded: true }, // *** 
            { name: "Birdstriking - Ka Ka Ka Ka", url: "https://www.youtube.com/watch?v=ak_3lJTXQKk" }, // ****
            { name: "Hang On the Box - Ass Hole, I'm Not Your Baby", url: "https://www.youtube.com/watch?v=FmhTV8srQWU", favorite: true }, // *****
            { name: "Ada Zhuang - Li%C7%8Eng G%C3%A8 R%C3%A9n De Hu%C3%ADy%C3%AC Y%C4%ABg%C3%A8r%C3%A9ngu%C3%B2", url: "https://www.youtube.com/watch?v=cJ9MVn2_yLw", encoded: true }, // *****
            { name: "Tang Dynasty - Yu%C3%A8 M%C3%A8ng", url: "https://www.youtube.com/watch?v=-wJVoDcPVWk", encoded: true }, // ****
            { name: "Demerit - Fuck the Schemers", url: "https://www.youtube.com/watch?v=_60AFrD4ZrU" }, // ***
            { name: "Black Panther - Don't Break My Heart", url: "https://www.youtube.com/watch?v=WLUbs0rCQlI", encoded: true }, // ***
            { name: "G.E.M. - D%C3%A0osh%C7%94", url: "https://www.youtube.com/watch?v=ma7r2HGqwXs", encoded: true }, // *****
            { name: "Chinese Football - Electric Girl", url: "https://www.youtube.com/watch?v=fYIRRGZdrTo" }, // *****
            { name: "Barque of Dante - Ocean of Dreams", url: "https://www.youtube.com/watch?v=kHRbvmGcCB8" }, // ****
            { name: "S.I.N.G - Moonlight Thoughts", url: "https://www.youtube.com/watch?v=rbUzPzlcboU" },
            { name: "SMZB - Scream for Life", url: "https://www.youtube.com/watch?v=yEMLJly5l74" }, // *****
            { name: "Feng Timo - Z%C3%A0iji%C3%A0n Qi%C3%A1nr%C3%A8n", url: "https://www.youtube.com/watch?v=k2U24baTUb8", encoded: true }, // ***
            { name: "GriffO - TAMAGOTCHI", url: "https://www.youtube.com/watch?v=CBZy6_sf80E" }, // ***** BEST VIDEO
            { name: "VOOID - Into the Void", url: "https://www.youtube.com/watch?v=K5-WVW73ji4" }, // ****
            { name: "Ekin Cheng - Y%C7%92uq%C3%ADng Su%C3%ACyu%C3%A8", url: "https://www.youtube.com/watch?v=4X32WZ7EuO8", encoded: true }, // ***
            { name: "Dou Wei - %C5%8C! Gu%C4%81i", url: "https://www.youtube.com/watch?v=NBhyRzoNJpw", encoded: true }, // *****
            { name: "Jacky Cheung ft. Francesca Kao - N%C7%90 Zu%C3%AC Zh%C4%93ngu%C3%AC", url: "https://www.youtube.com/watch?v=1DBXr3VgJnQ", encoded: true },  // ****
            { name: "Hedgehog - Tree", url: "https://www.youtube.com/watch?v=kto8oONBQHo" }, // ***
            { name: "Jackie Chan & KUN - Y%C4%ABq%C7%90 Xi%C3%A0o Ch%C5%ABl%C3%A1i", url: "https://www.youtube.com/watch?v=OaPnQS6SLjI", encoded: true },  // *****
            { name: "FAMA - J%C7%94 G%C4%81o Zh%C4%AB Sh%C7%92u", url: "https://www.youtube.com/watch?v=b7-o2JqLzVk", encoded: true },  // ****
            { name: "SMZB - The Chinese Are Coming", url: "https://www.youtube.com/watch?v=AQ_DccQKj0Q" }, // ***
            { name: "The Marshmallow Kisses - Everyone Else Is Ahead Far Ahead", url: "https://www.youtube.com/watch?v=pJLX5C4mpxE" }, // *****
            { name: "8 Eye Spy - Conditioning", url: "https://www.youtube.com/watch?v=0A5Y2wSKpfs" }, // *****
            { name: "Doc Talk Shock - Futurist", url: "https://www.youtube.com/watch?v=WvxafxBZmHY" }, // ****
            { name: "Feng TiMo - Sh%C3%AC Sh%C3%ADw%C3%B9 Zh%C4%9B W%C3%A9i J%C3%B9nji%C3%A9", url: "https://www.youtube.com/watch?v=PIYva_5d6gg", encoded: true },  // ***
            { name: "Silence Wang - Y%C4%ABxi%C3%A0o Q%C4%ABngch%C3%A9ng", url: "https://www.youtube.com/watch?v=dCqqqyeZGjM", encoded: true }, // *****
            { name: "Xie Tianxiao - R%C3%A9n W%C3%BA X%C3%ACngm%C3%ADng", url: "https://www.youtube.com/watch?v=nau23Nv0Vts", encoded: true }, // *****
            { name: "Rainbow Danger Club - Once Upon a Time", url: "https://www.youtube.com/watch?v=FvQl0G9LDtE" } // ****
        ]
    },
    "CO": { // 48.2m
        name: "Colombia", desc: "The Republic of Colombia is a country in northwest South America. It is one of the most ethnically, linguistically, and biologically diverse countries in the world, combining native South American, European, and African cultures with rainforests, grasslands, deserts, and islands ensuring that all of those people can take their pick of what kind of climate they want to live in.",
        population: 48258494, popEstimate: 2019, area: 1141748, independence: "1810-07-20", indFrom: "Spain", demonym: "Colombian", currency: "Peso (COL$)", 
        languages: "Spanish", motto: `"Freedom and Order."`, neighbors: "Brazil, Ecuador, Panama, Peru, Venezuela", 
        foodURL: "https://en.wikipedia.org/wiki/Colombian_cuisine",
        food: [
            { name: "Pandebonos", type: "Bread", url: "https://www.sweetysalado.com/en/2013/06/pandebonos-colombian-cheese-bread.html", date: "2019-07-17", favorite: true,
              img: "pandebonos.jpg", desc: "Tastyesgoodelicousperfectgoodtasty. I'm really tired right now because it's 1am so I should probably wait until later to write this but in my sleep-deprived state I feel like I'm qualified to speak my emotions and my emotions for these cheesy bread babies are nothing but positive ones. Even though mine got a bit flat and burnt on the bottom they were still extremely - and I emphasize EXTREMELY - delicious. If you eat cheese, eat these.",
              diet: [
                  { type: "Dairy", desc: "Lots of cheese is used in the dough, as well as butter and milk." },
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Gluten", desc: "Flour CAN BE used in the dough, but you can also use corn meal.", optional: true }
              ],
              ingredients: ["cassava flour", "cassava starch", "tapioca flour", "tapioca starch", "corn meal", "flour", "baking powder", "sugar", "queso fresco", "feta", "butter", "egg", "milk"]
            },
            { name: "Hot Chocolate", type: "Beverage", url: "https://blosh.nz/colombian-hot-chocolate-cheese-recipe/", date: "2019-07-19", // http://www.kikucorner.com/2015/09/30/colombian-hot-chocolate-with-cheese/ 
              img: "hotchocky.jpg", desc: "Hot chocolate. With cheese. I'm not a man who likes the whole \"salty and sweet\" trend with all the salted caramel and salted chocolate chip garbage that's all the rage these days, but this is primarily creamy and bitter, with a bit of sweetness and a bit of saltiness in the background. It's pretty good.",
              diet: [
                  { type: "Dairy", desc: "I'm one of those guys who has opinions on hot chocolate. My opinion is \"you gotta use milk, not water.\" The country of Colombia agrees with me. They also add cheese to theirs, so, like, it's still gonna have dairy in it either way." }
              ],
              ingredients: ["milk", "dark chocolate", "turbinado sugar", "cinnamon", "white cheese"]
            },
            { name: "Carima&ntilde;olas", type: "Pastry", url: "https://www.mycolombianrecipes.com/meat-and-cheese-stuffed-yuca-carimanolas-de-carne-y-de-queso", date: "2019-07-21", favorite: true, 
              img: "carimanolas.jpg", desc: "A delicious thing that is perfect and good and yes. They're basically croquettes but better in every possible way, and made with yuca instead of mashed potatoes. Which is a plus in my book. Cumin once again proves it is a spice to be reckoned with.",
              diet: [
                  { type: "Meat", desc: "A potential filling for these includes meat. You can also not use meat, or use a meat substitute like I did.", optional: true },
                  { type: "Dairy", desc: "A potential filling for these is cheese. You can also not use cheese, or use a cheese substitute.", optional: true }
              ],
              ingredients: ["yuca", "mozzarella", "garlic", "red bell pepper", "onion", "scallion", "green onion", "cumin", "tomato paste", "ground beef"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Colombia",
        music: [
            { name: "Karol G - Mi Cama", url: "https://www.youtube.com/watch?v=8-mloCL49vs" },
            { name: "I.R.A. - Nueva Esclavitud", url: "https://www.youtube.com/watch?v=vW-ZTPsUbMU" },
            { name: "Bonka ft. Cali Y El Dandee - La Botella", url: "https://www.youtube.com/watch?v=Lfyl9Y-YWWU", favorite: true },
            { name: "Odio a Botero - Salchipapas y Rock N' Roll", url: "https://www.youtube.com/watch?v=MnDa0_jzI24" },
            { name: "Bomba Est&eacute;reo - Bailar Conmigo", url: "https://www.youtube.com/watch?v=jR3WTRDV1bA" },
            { name: "Marce - Jenny", url: "https://www.youtube.com/watch?v=JFyTsySBAR4" }, 
            { name: "Emily Has Fallen - Amor En Las Rocas", url: "https://www.youtube.com/watch?v=skDOxhlcHow" },
            { name: "ChocQuibTown - Hasta Que Amanezca", url: "https://www.youtube.com/watch?v=BzWxiOaDLKc" },
            { name: "Chite - La Punkera de Mi Barrio", url: "https://www.youtube.com/watch?v=X9KJHc_LseM" },
            { name: "La Severa Matacera - Noche de Perdici&oacute;n", url: "https://www.youtube.com/watch?v=JrTAHKq1JBA" },
            { name: "Nadie - Emilio Dice", url: "https://www.youtube.com/watch?v=jRN1E_75ZpU" },
            { name: "Mauricio & Palo de Agua - Dame Tu Amor", url: "https://www.youtube.com/watch?v=2iYZEKlsrzU" },
            { name: "Sidestepper - Mas Papaya", url: "https://www.youtube.com/watch?v=QAF5Dbah3rw" },
            { name: "Sin Pudor - Hijos del cemento", url: "https://www.youtube.com/watch?v=qYdOLonNcrc" }
        ]
    },
    "KM": { // 0.85m
        name: "Comoros", focusArea: "MG", desc: "The Union of the Comoros is a country in the Indian Ocean. It consists of several small islands, 3 main islands, and maybe one other main island, but that island is still under French rule so, y'know, there's that whole thing going on.",
        population: 850688, popEstimate: 2018, area: 1659, independence: "1975-07-06", indFrom: "France", demonym: "Comorian", currency: "Comorian franc (KMF)", 
        languages: "Comorian, Arabic, French", motto: `"Unity - Solidarity - Development."`, neighbors: "None", 
        foodURL: "https://www.worldtravelguide.net/guides/africa/comoros/food-and-drink/",
        food: [
            { name: "Ladu", type: "Dessert", url: "http://deborahotoole.com/FoodFare/ladu.htm", date: "2019-07-28", // https://recipes.fandom.com/wiki/Comorian_Ladu
              img: "ladu.jpg", desc: "Balls of cooked rice, sugar, cardamom, black pepper, and ghee. I will go on the record and say that I burnt the rice a bit, or a lot. It tasted like sweet burnt rice. Bone App the Teeth.",
              diet: [
                  { type: "Dairy", desc: "Ghee is used to help things stick together." }
              ],
              ingredients: ["rice", "powdered sugar", "ghee", "cardamom", "black pepper"]
            },
            { name: "Pilaou au Poulet", type: "Rice", url: "http://sameera.over-blog.com/2015/01/pilaou-au-poulet.html", date: "2019-07-28", // http://travelbystove.palfreymedia.com/comoros-recipes-pilaou.asp
              img: "pilaou.jpg", desc: "Rice + Spice = Nice. This is the formula for a good number of dishes I've cooked so far and this dish is just more proof of its correctness. It makes a yumyum in my tumtum, with special note given to the nice carmelized onions in every bite.",
              diet: [
                  { type: "Meat", desc: "You can beef or chicken this dish. You could also just not do that." },
                  { type: "Dairy", desc: "Fermented butter is used in this dish." }
              ],
              ingredients: ["chicken", "beef", "smen butter", "onion", "tomato paste", "turmeric", "cumin", "cloves", "cardamom", "basmati rice"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_the_Comoros",
        music: [
            { name: "Goulam - Mama", url: "https://www.youtube.com/watch?v=9d82v7luoas", favorite: true },
            { name: "Sourette - M'&eacute;pouser", url: "https://www.youtube.com/watch?v=WPGjMbZb2hQ" },
            { name: "Says'z - Id&eacute;al", url: "https://www.youtube.com/watch?v=GgfYibhvmvc" },
            { name: "Chamsia Sagaf ft. Na&iuml;ma - Moina", url: "https://www.youtube.com/watch?v=yPBhQmmA0Qc" }
        ]
    },
    "CG": { // 5.1m
        name: "Congo-Brazzaville", desc: "The Republic of the Congo is a country on the coast of Central Africa. It is the tinier of the two Congos. Why are there two Congos, you ask? Well, the one word answer is politics. The three word answer is colonialism and politics. Any more words and you're better off consulting literally any resource that isn't some dude's cooking and music site.",
        population: 5125821, popEstimate: 2016, area: 342000, independence: "1960-08-15", indFrom: "France", demonym: "Congolese", currency: "Central African CFA Franc (XAF)", 
        languages: "French, Kitumba, Kikongo, Lingala", motto: `"Unity, Work, Progress."`, neighbors: "Angola, Cameroon, Central African Republic, Democratic Republic of the Congo, Gabon", 
        foodURL: "https://www.worldtravelguide.net/guides/africa/republic-of-congo/food-and-drink/",
        food: [
            { name: "Yassa Chicken", type: "Meat", url: "https://www.africanbites.com/yassa-chickenpoulet-au-yassa/", date: "2019-08-03", 
              img: "yassa.jpg", desc: "In my adventures in foreign foods, I am also discovering not-very-foreign-at-all things that I have somehow never tried before. Like mustard. Yeah, I've never had mustard before. Yes I am a 29 year old U.S. American. Unfortuantely, I have now reached the conclusion that I do not like mustard. This is unforunate because this is chicken in a mustard sauce.",
              diet: [
                  { type: "Meat", desc: "Just make Yassa Tofu if you don't eat chicken." },
                  { type: "Spicy", desc: "Scotch Bonnet Peppers or cayenne powder are used. Adjust to your taste." }
              ],
              ingredients: ["chicken", "lemon", "onion", "garlic", "bay leaf", "maggie", "bouillon", "dijon mustard", "scotch bonnet pepper", "cayenne", "chicken stock"]
            },
            { name: "Moamb&eacute; Chicken", type: "Meat", url: "https://www.marga.org/food/int/congo/mwamba.html", date: "2019-08-03", // serves 4; https://www.internationalcuisine.com/congo-moambe-chicken/
              img: "moambe.jpg", desc: "Guess who, just now, as he started writing this, realized that this dish is probably identical to the Moamba de Galinha he made for Angola? This guy! Fortunately, the two recipes are pretty different as this one called for peanut butter as the prize ingredient as opposed to the Angolan version's palm oil. When trying to find recipes for this, I found an article that, in the comments, had a Congolese person angrily stating that the peanut butter recipe was bullshit and that the aunthetic Congolese version was very different. Sadly, I can no longer find her version because that website up and fucking vanished in the like three days between me finding it and me trying to make this. The site itself exists in the Wayback Machine but the recipe page was not saved, so, whoopsie! Either way, I don't think I like peanut butter chicken. I think that Congolese woman's recipe was probably better.",
              diet: [
                  { type: "Meat", desc: "Just make Moab&eacute; Tofu if you don't eat chicken." },
                  { type: "Spicy", desc: "A wee bit spicy. Not too bad though. Just don't add the red peppie flakes if you don't wanty spice up your life." },
                  { type: "Nuts", desc: "Peanut butter is used in the sauce." }
              ],
              ingredients: ["chicken", "palm oil", "onion", "garlic", "tomato paste", "ginger", "tomato", "red pepper flakes", "peanut butter"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_the_Republic_of_the_Congo",
        music: [
            { name: "Pierrette Adams - Mama Africa", url: "https://www.youtube.com/watch?v=d_ecIYEQNII" }, 
            { name: "Niasony - Koluka - Your Voice", url: "https://www.youtube.com/watch?v=q9npnAMQRLM", favorite: true },
            { name: "Bisso na Bisso - Show ce soir", url: "https://www.youtube.com/watch?v=F10ZOAVuclQ" },
            { name: "Youlou Mabiala - Maka", url: "https://www.youtube.com/watch?v=IlVJqkJ8w18" },
            { name: "Dany Engobo - Akouli", url: "https://www.youtube.com/watch?v=UWkZxCFsixg" }
        ]
    },
    "CD": { // 91.9m
        name: "Congo-Kinshasa", desc: "The Democratic Republic of the Congo is a country in Central Africa and the second largest country in all of Africa. Formerly known as Zaire, they became the Congo in 1997 after the First Congo War ended and the new president declared the name change. It's clear that then-president Laurent Kabila knew that people like me would be doing shit like this in alphabetical order in the future, hence the move from Z up to C.",
        population: 91931000, popEstimate: 2019, area: 2345409, independence: "1960-06-30", indFrom: "Belgium", demonym: "Congolese", currency: "Congolese Franc (CDF)", 
        languages: "French, Lingala, Kikingo, Swahili, Tshiluba", motto: `"Justice - Peace - Work."`, neighbors: "Angola, Burundi, Central African Republic, Republic of the Congo, Rwanda, South Sudan, Tanzania, Uganda, Zambia", 
        foodURL: "https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo_cuisine",
        food: [
            { name: "Mikate", type: "Dumpling", url: "https://www.youtube.com/watch?v=7Q7I10hAtmE", date: "2019-09-01", favorite: true, 
              img: "mikate.jpg", desc: "A crispy slightly coconutty outside with a soft fluffy vanilla-ey inside. Such a simple dough creates such a beautiful treat.",
              diet: [
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["flour", "yeast", "sugar", "vanilla extract", "vegetable oil", "coconut oil"]
            },
            { name: "Fumbwa", type: "Soup", url: "https://www.thespruceeats.com/fumbwa-recipe-congolese-wild-spinach-stew-39465", date: "2019-09-01", 
              img: "fumbwa.jpg", desc: "It smells better than it tastes and it tastes better than it looks, but it tastes less-than-great. Smells like peanut butter, though, which is always a plus.",
              diet: [
                  { type: "Warning", desc: "This recipe calls for red palm oil. Please make sure you are buying sustainable palm oil if you make this recipe." },
                  { type: "Meat", desc: "This recipe calls for a chicken stock cube, but you can use a vegetarian stock like I did without issue." },
                  { type: "Nuts", desc: "Peanuts are used in this dish." },
                  { type: "Fish", desc: "This recipe calls for smoked catfish. If you're like me and don't eat that sort of thing, you can omit it." }
              ],
              ingredients: ["spinach", "onions", "garlic", "green onions", "tomatoes", "chicken stock", "catfish", "red palm oil", "peanuts"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_the_Democratic_Republic_of_the_Congo",
        music: [
            { name: "Cindy le Coeur ft. Koffi Olomide - Koup&eacute;", url: "https://www.youtube.com/watch?v=9VYnBT3Wtnw" },
            { name: "Icha Kavons ft. Kambua - Miracle Baba", url: "https://www.youtube.com/watch?v=QeduHERnLR4" },
            { name: "Awilo Longomba ft. Tiwa Savage - Esopi Yo", url: "https://www.youtube.com/watch?v=cUmPcT26Hjo" },
            { name: "Barbara Kanam ft. Fally Ipupa - Noir et Blanc", url: "https://www.youtube.com/watch?v=oGYvRrqqLhA" },
            { name: "Nathalie Makoma - Jump For Life", url: "https://www.youtube.com/watch?v=k7dDUolVMeo" },
            { name: "Diblo Dabala - Stoya", url: "https://www.youtube.com/watch?v=EkDzITA_Cw0" },
            { name: "Kalash Criminel - Piano Sombre", url: "https://www.youtube.com/watch?v=UVb2AE78uS0" },
            { name: "Icha Kavons - Testimony", url: "https://www.youtube.com/watch?v=NCwpHamvoHA" },
            { name: "Kaysha - Diamonds", url: "https://www.youtube.com/watch?v=eJ0_qMhKurM" },
            { name: "Innoss'B ft. Koffi Olomide - Elengi", url: "https://www.youtube.com/watch?v=ckONJNODHW8" },
            { name: "Ma&icirc;tre Gims - Est-ce que tu m'aimes?", url: "https://www.youtube.com/watch?v=6TpyRE_juyA", favorite: true }
        ]
    },
    "CK": { // 0.02m
        name: "Cook Islands", focusArea: "FJ", desc: "The Cook Islands are an island country in the Pacific Ocean. They are in Free Association with New Zealand, which, summarized (to the best of my abilities) means New Zealand is in charge of some things like defense, and all Cook Islands citizens are New Zealand citizens - but not the other way around! According to Wikipedia they're sovereign states, which is good enough for me. They're currently planning on changing the name of the country, since being named after James Cook - the British cartographer who first mapped the islands and then got killed by Hawai'ians after trying to kidnap their king - is not something a lot of Cook Islanders like.",
        population: 17459, popEstimate: 2016, area: 237, independence: "1965-08-04", indFrom: "New Zealand", demonym: "Cook Islanders", currency: "Cook Islands Dollar ($CKD)", 
        languages: "English, Cook Islands M%C4%81ori", motto: `None.`, neighbors: "None", 
        foodURL: "https://en.wikipedia.org/wiki/Culture_of_the_Cook_Islands#Cuisine",
        food: [
            { name: "Poke", type: "Dessert", url: "https://www.food.com/recipe/poke-cook-islands-part-deux-461407", date: "2019-09-03", 
              img: "poke.jpg", desc: "This is basically just a creamy papaya pudding. If you like papayas and pudding, this is the thing for you. If you don't like either of those things, maybe don't make this. That's the lesson I learned here.",
              diet: [
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["arrowroot", "papaya", "coconut cream"]
            },
            { name: "Curried PawPaw Salad + Dressing", type: "Salad", url: "http://www.destination-cook-islands.com/Curried-Pawpaw.html", date: "2019-09-03", 
              img: "currypapaya.jpg", desc: "Tasted like papayas, mayonnaise, and curry powder. Which is not three things I'd usually want to taste at the same time. This is no exception.",
              diet: [
                  { type: "Honey", desc: "Honey can be used in the dressing." },
                  { type: "Egg", desc: "Mayonnaise is used in the salad. You can use a vegan substitute like I did because I will never buy mayo." }
              ],
              ingredients: ["papaya", "mayonnaise", "curry powder", "vinegar", "onion", "honey", "mustard", "chilli"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_the_Cook_Islands",
        music: [
            { name: "Family In Trust - Yummy", url: "https://www.youtube.com/watch?v=Cjscm6naN44" },
            { name: "T'Angelo - Tamaka-Spike", url: "https://www.youtube.com/watch?v=2GYHvJ_-OrU" },
            { name: "Zerynah Hugs - Shifty", url: "https://www.youtube.com/watch?v=N-_4Th3hiqU", favorite: true },
            { name: "2 Pouz Fynist - Osana / Te Pati Akatengu Atu Nei", url: "https://www.youtube.com/watch?v=NcrySDB0Msc" },
            { name: "Melissa Gosselin - Rarotonga Ipukarea / Just One Look", url: "https://www.youtube.com/watch?v=XGprooBJaWw" },
            { name: "Mehara - Haruru Te Patiri", url: "https://www.youtube.com/watch?v=9cjIVBzploA" }
        ]
    },
    "CR": { // 4.9m
        name: "Costa Rica", desc: "The Republic of Costa Rica is a country in Central America. They are the largest country in the world to not have a military, which they abolished after their last war in 1948, and then allocated their military budget to healthcare and education. Weirdly, Costa Rica has some of the highest literacy rates and life expectancies in Latin America. Hmm... replacing their military budget with funding for education and healthcare, and then their people are very well educated and healthy... WONDER IF THERE'S ANY CORRELATION THERE. I SAID, <strong>I WONDER IF THERE'S ANY CORRELATION THERE. <em>I WONDER IF THERE'S ANY--</em></strong>",
        population: 4857274, popEstimate: 2016, area: 51100, independence: "1821-09-15", indFrom: "Spain", demonym: "Costa Rican", currency: "Costa Rican col&oacute;n (&#8353;)", 
        languages: "Spanish, Mekatelyu, Bribri, Patois", motto: `None.`, neighbors: "Panama, Nicaragua", 
        foodURL: "https://en.wikipedia.org/wiki/Costa_Rican_cuisine",
        food: [
            { name: "Picadillo de Papa", type: "Meat", url: "https://www.centralamerica.com/experiencing/eating/costa-rica-picadillo-de-papa-recipe/", date: "2019-09-08", 
              img: "picadillo.jpg", desc: "A hash of potatoes and meat, but mostly potatoes, which are the real winner of any recipe including potatoes. The seasonings were good times. The potatoes were good times. It was all good times.",
              diet: [
                  { type: "Meat", desc: "It's a mince dish. You can substitute with fake beef and/or also skip the bacon. Or just go full potato." },
                  { type: "Spicy", desc: "Some red peppers are in the recipe, but no one's judging you if you just use bell peppers like I did." }
              ],
              ingredients: ["potatoes", "beef", "bacon", "onions", "red pepper", "cilantro", "garlic", "oregano", "achiote paste"]
            },
            { name: "Proprietary Ice Cream Sandwich", type: "Dessert", url: "https://neverendingeverywhere.wordpress.com/2016/11/28/a-thing-called-trits/", date: "2019-09-14", 
              img: "trit.jpg", desc: "",
              diet: [
                  { type: "Egg", desc: "Both the cookies and ice cream call for eggies. You can use/make a vegan ice cream and use a vegan baking-egg-alternative." },
                  { type: "Dairy", desc: "Ice cream. You can use a vegan ice cream instead. Margarine can be used instead of butter." },
                  { type: "Gluten", desc: "Graham crackers usually have gluten in them. If you can find/make gluten free ones, go for it!" }
              ],
              ingredients: ["margarine", "butter", "egg", "graham crackers", "sugar", "ice cream", "heavy cream", "milk", "vanilla extract"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Costa_Rica",
        music: [
            { name: "Malas Palabras - Despreoc&uacute;pese Ante el Merengue", url: "https://www.youtube.com/watch?v=b7mhRSH6pSQ" },
            { name: "&Eacute;ditus - D&iacute;a y Noche", url: "https://www.youtube.com/watch?v=0FHgoHVMcrY" },
            { name: "Moonlight Dub Xperiment - Global Warning", url: "https://www.youtube.com/watch?v=D9MBBM04bf0", favorite: true },
            { name: "Gandhi - Lo Que M&aacute;s Doli&oacute;", url: "https://www.youtube.com/watch?v=up4n9ARdKG8" },
            { name: "Guadalupe Urbina - Antonio", url: "https://www.youtube.com/watch?v=2fNQNFGayt4" },
            { name: "Cocofunka - Ch&uacute;caro", url: "https://www.youtube.com/watch?v=gqqY2A9VDoo" },
            { name: "Las Robertas - Ghost Lover", url: "https://www.youtube.com/watch?v=U7rAshiRFUE" },
            { name: "Cocofunka - Siente", url: "https://www.youtube.com/watch?v=nvLXjOdluL4" },
            { name: "Marfil - Nah Going Home", url: "https://www.youtube.com/watch?v=DqQaDLlfD6Q" },
            { name: "MishCatt - Another Dimension", url: "https://www.youtube.com/watch?v=ItfKw9kqEIE" },
            { name: "Maribel Guardia - Hay Que Venir al Sur", url: "https://www.youtube.com/watch?v=fcDtJ6jiCLs" },
            { name: "Los Cuchillos - Isla Macabro", url: "https://www.youtube.com/watch?v=JVazvNWa6gs" },
            { name: "Patterns - Dangerous Intentions", url: "https://www.youtube.com/watch?v=o73cFKx4lIU" },
            { name: "Los Waldners - Papalotes", url: "https://www.youtube.com/watch?v=rauhinT9cQI" },
            { name: "Tango India - Paz", url: "https://www.youtube.com/watch?v=ZznrtWdBIKw" }
        ]
    },
    "CI": { // 23m
        name: "C&ocirc;te d'Ivoire", desc: "The C&ocirc;te d'Ivoire is a country in West Africa. Lots of English-speaking people call it \"Ivory Coast\" because speaking French is too hawd for their widdle baby moufs. The official English name is \"C&ocirc;te d'Ivoire.\" They produce a lot of cocoa and coffee, and used to export a lot of that one thing that comes from elephant tusks. You know, the hard white material. I can't remember the name right now.",
        population: 23740424, popEstimate: 2018, area: 322463, independence: "1960-08-07", indFrom: "France", demonym: "Ivorian", currency: "West African CFA franc (CFA)", 
        languages: "French", motto: `"Unity - Discipline - Work."`, neighbors: "Burkina Faso, Ghana, Guinea, Liberia, Mali", 
        foodURL: "https://en.wikipedia.org/wiki/Ivorian_cuisine",
        food: [
            { name: "Kedjenou Chicken", type: "Meat", url: "https://www.africanbites.com/kedjenou-chicken/", date: "2019-10-01", 
              img: "kedjenou.jpg", desc: "The combination of spices here makes for some smooth chicken dish. Nothing amazing, but definitely tasty.",
              diet: [
                  { type: "Meat", desc: "Kedjenou CHICKEN. You can use tofu maybe I dunno. I'm no tofuologist." },
                  { type: "Spicy", desc: "Habanero is optional don't worry." }
              ],
              ingredients: ["chicken", "onion", "garlic", "pepper", "tomato", "ginger paste", "garlic puree", "thyme", "bay leaf", "smoked paprika", "chicken bouillon", "habanero"]
            },
            { name: "Riz au Gras", type: "Rice", url: "https://www.tropicalfoodies.com/2012/01/22/riz-au-gras-or-the-biggest-misnomer-in-culinary-history/", date: "2019-09-23", 
              img: "rizaugras.jpg", desc: "It's tomatoey rice. With some beef and shrampies in it. Or no shrampies if you were lazy like me. Still tasty.",
              diet: [
                  { type: "Meat", desc: "It's got stew beef. You can probably omit or replace this." },
                  { type: "Fish", desc: "Shrimp is used. You can also not use shrimp, like I did!" },
                  { type: "Spicy", desc: "The Scotch Bonnett pepper is optional don't worry.", optional: true }
              ],
              ingredients: ["stew beef", "shrimp", "rice", "tomato sauce", "carrot", "onion", "garlic", "cabbage", "squash", "scotch bonnet chilli"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Ivory_Coast",
        music: [
            { name: "M&eacute;tisse - Therapy", url: "https://www.youtube.com/watch?v=xYmnW_-is0Q" },
            { name: "Paco Sery - Donne moi une chance", url: "https://www.youtube.com/watch?v=atxQENGHC6s", favorite: true },
            { name: "Sur-Choc - On est l&agrave; pour danser", url: "https://www.youtube.com/watch?v=VelIndwHa4E" },
            { name: "Monique Seka - 900 kg d'amour", url: "https://www.youtube.com/watch?v=yByzzYyIcc0" },
            { name: "Nayanka Bell - Chogologo", url: "https://www.youtube.com/watch?v=lKC6D5bzWc0" },
            { name: "Kiff No Beat ft. DJ Arafat - Approchez Regardez", url: "https://www.youtube.com/watch?v=-LdbZLSUj6k" },
            { name: "Dobet Gnahor&eacute; - Afrika", url: "https://www.youtube.com/watch?v=BSIhQipnzWQ" },
            { name: "Tiken Jah Fakoly - Pourquoi nous fuyons", url: "https://www.youtube.com/watch?v=tDIIVTuxvuA" },
            { name: "Nayanka Bell ft. Koffi Olomide - Je t'aime moi non plus", url: "https://www.youtube.com/watch?v=MGPaaaNSlBU" },
            { name: "Magic System - Un gaou &agrave; Oran", url: "https://www.youtube.com/watch?v=vL7BvJ3Qd_0" },
            { name: "Meiway - Golgotha", url: "https://www.youtube.com/watch?v=XCpFLxIn9Lc" },
            { name: "Serge Beynaud - Kota na Koto", url: "https://www.youtube.com/watch?v=hv7zREjc9f0" }
        ]
    },
    "HR": { // 4m
        name: "Croatia", desc: "The Republic of Croatia is a country in Central-Southeast Europe. They got a lot of shoreline and over a thousand islands but a lot of them are very tiny and unpopulated but that doesn't mean you can't jokingly claim one as your own country and then get arrested for it. Yes that is a thing that has happened before and will happen again as soon as I renew my passport.",
        population: 4076246, popEstimate: 2019, area: 56594, independence: "1991-06-25", indFrom: "Yugoslavia", demonym: "Croatian", currency: "Kuna (HRK)", 
        languages: "Croatian", motto: `None.`, neighbors: "Bosnia and Herzegovina, Hungary, Montenegro, Serbia, Slovenia", 
        foodURL: "https://en.wikipedia.org/wiki/Croatian_cuisine",
        food: [
            { name: "Povitica", type: "Bread", url: "https://www.allrecipes.com/recipe/235811/grandmas-povitisa-po-vuh-teet-zuh-povitica-croatian-nut-bread/", date: "2019-10-06", 
              img: "povitica.jpg", desc: "A tasty spiraly bread with a very pretty cross-section and a very tasty eat-section. Flavors of walnuts, lemons, and vanillis mix well with the soft fluffy bread.",
              diet: [
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Nuts", desc: "This is a walnut bread. You can replace it with another nut like pecans maybe, but at the end of the day, this dish is nuts." },
                  { type: "Egg", desc: "Egg is used in the dough and filling." },
                  { type: "Dairy", desc: "Butter and milk are used in the filling and dough." }
              ],
              ingredients: ["yeast", "milk", "sugar", "shortening", "egg", "flour", "brown sugar", "butter", "vanilla", "lemon", "walnuts"]
            },
            { name: "Krem%C5%A1nita", type: "Pastry", url: "https://www.196flavors.com/croatia-kremsnita/", date: "2019-10-09", encoded: true,
              img: "kremspita.jpg", desc: "A fluffy creamy combination of custardy whippedcreamy puffpastry-y goodness.",
              diet: [
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Egg", desc: "Egg is used in the filling." },
                  { type: "Dairy", desc: "Milk is used in the filling." },
                  { type: "Alcohol", desc: "Rum is used in the filling. This can be omitted.", optional: true }
              ],
              ingredients: ["flour", "egg", "sugar", "whipped cream", "whipping cream", "vanilla", "milk", "rum", "icing sugar"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Croatia",
        music: [
            { name: "Postolar Tripper - Kruva Bez Motike", url: "https://www.youtube.com/watch?v=YRIXNtrA2Uo" },
            { name: "Novi Fosili - E Moj Sa%C5%A1a", url: "https://www.youtube.com/watch?v=IbJMA5uRwPc", encoded: true },
            { name: "Cacadou Look - Gledam Ga Dok Spava", url: "https://www.youtube.com/watch?v=jL6MgWCrW7M" },
            { name: "Ljupka Dimitrovska - Robot", url: "https://www.youtube.com/watch?v=g9xUyz4owfs" },
            { name: "Crooks & Straights - Red Robin", url: "https://www.youtube.com/watch?v=ajNr8YB5aPA" },
            { name: "Vanna - U Tebi", url: "https://www.youtube.com/watch?v=i0lRqYHiTBA" },
            { name: "Osmi Putnik - Tajna", url: "https://www.youtube.com/watch?v=-E-gWKI2Oes" },
            { name: "Dino Jelusic - You Are My One And Only", url: "https://www.dailymotion.com/video/x2qyve" },
            { name: "Riva - Kiss Me", url: "https://www.youtube.com/watch?v=pUJ1GR3CF8w" },
            { name: "Omega Lithium - Dance With Me", url: "https://www.youtube.com/watch?v=OPC4oirxVbc", favorite: true },
            { name: "Denis & Denis - Program Tvog Kompjutera", url: "https://www.youtube.com/watch?v=pldDuqnPP1s" },
            { name: "Jelena Rozga - Dobitna Kombinacija", url: "https://www.youtube.com/watch?v=WRdAf9fKQpI" },
            { name: "KUD Idijoti - Blago", url: "https://www.youtube.com/watch?v=RRrpvoU588A" },
            { name: "Magazin - %C5%BDena, A Ne Broj", url: "https://www.youtube.com/watch?v=vdxRGUp8cko", encoded: true },
            { name: "Flyer - Nismo Rekli Ne", url: "https://www.youtube.com/watch?v=69WChyANLI4" }
        ]
    },
    "CU": { // 11.2m
        name: "Cuba", desc: "The Republic of Cuba is an island country in North America. They have excellent healthcare and education, but this is bad actually because Communisms, I guess.",
        population: 11209628, popEstimate: 2018, area: 109884, independence: "1902-05-20", indFrom: "United States of America", demonym: "Cuban", currency: "Peso (CUC)", 
        languages: "Spanish", motto: `"Homeland or Death, we shall overcome!"`, neighbors: "None", 
        foodURL: "https://en.wikipedia.org/wiki/Cuban_cuisine",
        food: [
            { name: "Yuca con Ajo", type: "Salad", url: "https://icuban.com/food/yuca_con_ajo.html", date: "2019-10-19", 
              img: "yucajo.jpg", desc: "Tastes like potatoes and garlic, with some acidity from the citrus juices. A tasty treat made slightly less delicious by my anxieties about getting cyanide poisoning from eating undercooked cassava.",
              diet: [
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["yuca", "garlic", "lime juice", "lemon juice", "olive oil", "onion"]
            },
            { name: "Pastelitos de Guayaba", type: "Pastry", url: "https://www.mybigfatcubanfamily.com/2016/07/pastelitos-de-guayaba-recipe/", date: "2019-10-19", 
              img: "cubanpastry.jpg", desc: "It's pastry full of guava paste and cream cheese. That's what I call a good food to eat in your mouth. Sweet and a bit savory.",
              diet: [
                  { type: "Dairy", desc: "Butter is used in puff pastry dough. Cream cheese is used in the filling." },
                  { type: "Gluten", desc: "Flour is used in puff pastry dough." },
                  { type: "Egg", desc: "You can put an egg wash on top, but you don't have to.", optional: true }
              ],
              ingredients: ["puff pastry", "flour", "butter", "guava", "cream cheese"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Cuba",
        music: [
            { name: "Anima Mundi - The Hunter", url: "https://www.youtube.com/watch?v=6ONAEQ_CbB4" },
            { name: "Burbles - Canci&oacute;n por los Perros", url: "https://www.youtube.com/watch?v=Jp5151WkKpc" },
            { name: "Addy Mercedes - Too Hot for Revolution", url: "https://www.youtube.com/watch?v=t0sktm2i4sc" },
            { name: "Lissette - Eclipse Total Del Amor", url: "https://www.youtube.com/watch?v=340MHMHaVmY" },
            { name: "Krudas Cubensi - En el Solar", url: "https://www.youtube.com/watch?v=D0LCwU6gQXY", favorite: true },
            { name: "Obsesi&oacute;n - Los Pelos", url: "https://www.youtube.com/watch?v=vgOX_6wZzSM" },
            { name: "Danay Su&aacute;rez - Yo Aprend&iacute;", url: "https://www.youtube.com/watch?v=GqLhLDbm0d8" },
            { name: "Buena Fe - Nalgas", url: "https://www.youtube.com/watch?v=Fee7jrn9oH8" },
            { name: "Guy Cuevas - Ebony Game", url: "https://www.youtube.com/watch?v=gxJD2mwwDlQ" },
            { name: "Irakere - Bacalao Con Pan", url: "https://www.youtube.com/watch?v=kBeXIfwRpog" }
        ]
    },
    "CY": { // 1.1m
        name: "Cyprus", desc: "The Republic of Cyprus is an island country in the eastern Mediterranean Sea in Europe. There's a Greek half and a Turkish half and according to my half-assed internet searches, the consensus among many of them seems to be that reunification seems like it'd be cool. Turkey, however, may disagree. What, you want my opinion? I've never even been to Europe, why the fuck should my opinion on this matter at all? I think they should unify and change their name to Ultra Cyprus and donate 10% of their GDP to me. How's that sound to you? Is that what you wanted?",
        population: 1170125, popEstimate: 2016, area: 9251, independence: "1960-10-01", indFrom: "Britain", demonym: "Cypriot", currency: "Euro (&#8364;)", 
        languages: "Greek, Turkish", motto: `None`, neighbors: "None", 
        foodURL: "https://en.wikipedia.org/wiki/Cypriot_cuisine",
        food: [
            { name: "Hellimli", type: "Bread", url: "https://www.therecipehunters.com/hellimli", date: "2019-10-27", 
              img: "hellimli.jpg", desc: "This is a very intense bread full of lots of flavors and textures in every bite. If you can handle its power, you will find a very delicious, cheesy, and filling bread.",
              diet: [
                  { type: "Gluten", desc: "Bread. It uses flour. Sorry." },
                  { type: "Dairy", desc: "Melk is used in the dough. Oh, yeah, also cheese. It's a cheese bread. Full of cheese." }
              ],
              ingredients: ["flour", "milk", "active dry yeast", "sugar", "halloumi cheese", "mint", "onion", "nigella seeds", "sesame seeds"]
            },
            { name: "Shiamishi", type: "Pastry", url: "https://www.kopiaste.org/2007/11/shiamishi/", date: "2019-11-01", 
              img: "shiamishi.jpg", desc: "Happy Feast Day of Kosmas and Damianos! To celebrate like the Orthodox Cypriots might, whip up some wet flour that has been wrapped around some wetter, different flour, and then fried! The result? Pretty tasty!",
              diet: [
                  { type: "Gluten", desc: "It's made of flour and it's filled with flour." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["flour", "semolina", "sugar", "mastic resin", "orange blossom water", "powdered sugar"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Cyprus",
        music: [
            { name: "Michalis Hatzigiannis - To Kalokairi Mou", url: "https://www.youtube.com/watch?v=gozxtZUkZhQ" },
            { name: "Eleftheria Eleftheriou - Nychtes Kaftes", url: "https://www.youtube.com/watch?v=jicB3KEfP2U" },
            { name: "I%C5%9F%C4%B1n Karaca - Dert Bende Derman Sende", url: "https://www.youtube.com/watch?v=oFXvo-f3h0s", encoded: true },
            { name: "Ziynet Sali - A%C4%9Flar m%C4%B1y%C4%B1m? A%C4%9Flamam", url: "https://www.youtube.com/watch?v=WyGnyJZN3bI", encoded: true, favorite: true },
            { name: "One - Gimme", url: "https://www.youtube.com/watch?v=Q1AWVb4oYFA" },
            { name: "Minus-One - Alter Ego", url: "https://www.youtube.com/watch?v=k8LcNrqiIFE" },
            { name: "Babutsa - Yanay%C4%B1m Yanay%C4%B1m", url: "https://www.youtube.com/watch?v=TUJLnlNzDzE", encoded: true },
            { name: "Evridiki - Comme Ci Comme Ca", url: "https://www.youtube.com/watch?v=ge3Rfoxs1N0" },
            { name: "Evdokia Kadi - Taxidepse Me", url: "https://www.youtube.com/watch?v=UMS4by2NGg4" },
            { name: "Genco Ecer - Kand%C4%B1ramazs%C4%B1n", url: "https://www.youtube.com/watch?v=W57RBUQchlE", encoded: true },
            { name: "Nil Burak - Bir Garip Olur %C4%B0%C3%A7im", url: "https://www.youtube.com/watch?v=kf8jhrQXueU", encoded: true },
            { name: "Yuri Melikov - You Got Me (Aha Aha)", url: "https://www.youtube.com/watch?v=vJLs6o0svVY" },
            { name: "Sophia Patsalides - Made of Gold", url: "https://www.youtube.com/watch?v=Vt0Kbm0Pexs" },
            { name: "Methysos - Andvaranaut", url: "https://www.youtube.com/watch?v=XpfiHIKzVvQ" },
            { name: "Monsieur Doumani - Where Shall I Bang It?", url: "https://www.youtube.com/watch?v=m2oA6tLGZAk" }
        ]
    },
    "CZ": { // 10.6m
        name: "Czechia", desc: "The Czech Republic is a country in Central Europe. They have the lowest unemployment rate in the European Union and they drink the most beer per capita in the world. Coincidence? Yes. Obviously. Why the hell would you still think that correlation implies causation in this day and age??",
        population: 10649800, popEstimate: 2019, area: 78866, independence: "1993-01-01", indFrom: "Czechoslovakia", demonym: "Czech", currency: "Koruna (K%C4%8D)", 
        languages: "Czech", motto: `"Truth prevails."`, neighbors: "Austria, Germany, Poland, Slovakia", 
        foodURL: "https://en.wikipedia.org/wiki/Czech_cuisine",
        food: [
            { name: "Knedl%C3%ADky", type: "Dumpling", url: "https://www.196flavors.com/czech-republic-knedliky/", date: "2019-11-03", encoded: true,
              img: "knedliky.jpg", desc: "It's like bread... but boiled. So it kind tastes and feels like wet bread. Since it's not baked, it lacks that distinct Maillard reaction flavor that bread usually has. Very good for soaking up soup, though!",
              diet: [
                  { type: "Dairy", desc: "Milk is used in the dough." },
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Gluten", desc: "Flour is used in the dough." }
              ],
              ingredients: ["flour", "milk", "egg", "yeast", "sugar", "salt"]
            },
            { name: "%C4%8Cesne%C4%8Dka", type: "Soup", url: "http://www.tresbohemes.com/2019/07/cesnecka-traditional-czech-garlic-soup/", date: "2019-11-03", encoded: true, favorite: true,
              img: "garlicsoup.jpg", desc: "A very hearty, very garlicky soup. Especially if you more than double the recommended amount of garlic in it like I did. What? It's literally a garlic soup. I ain't gonty skimp out on the GARLIC. But it was delicious. Cured all my ailments and status effects.",
              diet: [
                  { type: "Dairy", desc: "Butter can be used to fry the onions, but you can also use oil. Grated cheese is an optional topping.", optional: true },
                  { type: "Meat", desc: "This uses chicken or beef broth, but you can use a vegetarian broth like I did. Lard can be used to fry the onions.", optional: true }
              ],
              ingredients: ["butter", "lard", "onion", "garlic", "stock", "broth", "potatoes", "marjoram", "caraway seeds", "croutons", "parsley", "grated cheese"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_the_Czech_Republic",
        music: [
            { name: "Pra%C5%BEsk%C3%BD V%C3%BDb%C4%9Br - Na V%C3%A1clavsk%C3%A9m V%C3%A1clav%C3%A1ku", url: "https://www.youtube.com/watch?v=CEl2_XEF_-0", encoded: true },
            { name: "Sto Zv%C3%AD%C5%99at - Nikdy Nic Nebylo", url: "https://www.youtube.com/watch?v=Ugj2a0EFIHc", encoded: true },
            { name: "Marpo & Wohnout - Zved%C3%A1m", url: "https://www.youtube.com/watch?v=kTEwwV6Lfpg", encoded: true },
            { name: "Gipsy.cz - Romano Hip Hop", url: "https://www.youtube.com/watch?v=he06HwALx3M" },
            { name: "Klara ft. Edna Green - Home", url: "https://www.youtube.com/watch?v=P9ZyJnzxro8" },
            { name: "Kab&aacute;t - Burlaci", url: "https://www.youtube.com/watch?v=H0zC_juYGLs", encoded: true },
            { name: "Lake Malawi - Chinese Trees", url: "https://www.youtube.com/watch?v=p8WbcPsMkEw" },
            { name: "Toxique - Field Lines", url: "https://www.youtube.com/watch?v=b-AWvpmigWE" },
            { name: "%C4%8Cechomor - Gorale", url: "https://www.youtube.com/watch?v=lUhf3VaaHH4", encoded: true, favorite: true },
            { name: "Krucip%C3%BCsk - M%C3%A1me Se", url: "https://www.youtube.com/watch?v=YAjFHd6ru70", encoded: true },
            { name: "MIDI Lidi - %C5%BDi%C5%BEla", url: "https://www.youtube.com/watch?v=EUkykH4jl10", encoded: true },
            { name: "Gabriela Gun%C4%8D%C3%ADkov%C3%A1 - %C4%8Casy Jsou Zl%C3%A9", url: "https://www.youtube.com/watch?v=Wyp0CdX6wlc", encoded: true },
            { name: "Yellow Sisters - Trpasl%C3%ADci Hledaj Zlato", url: "https://www.youtube.com/watch?v=3jyZ-NF9vJQ", encoded: true },
            { name: "Zuby Nehty - Dneska", url: "https://www.youtube.com/watch?v=UDXiRTlNhs4" },
            { name: "The Plastic People of the Universe - Samson", url: "https://www.youtube.com/watch?v=3Xijf-Os9ZY" }
        ]
    },
    "DK": { // 5.8m
        name: "Denmark", desc: "The Kingdom of Denmark is a Nordic country in Northern Europe. They have been to war with Sweden very many times \"for little or no political reason,\" to quote <a href='https://en.wikipedia.org/wiki/Denmark%E2%80%93Sweden_relations' target='_blank'>Wikipedia</a>. The kingdom spans the country of Denmark itself, as well as the Faroe Islands and Greenland. Two more completely unrelated fun facts about Denmark: they are one of the most heavily taxed countries in the world and one of the happiest countries in the world.",
        population: 5814461, popEstimate: 2019, area: 43933, independence: "Unified since the 8th Century", indFrom: "X", demonym: "Danish", currency: "Krone (kr.)", 
        languages: "Danish, Faroese, Greenlandic, German", motto: `"God, King and Fatherland."`, neighbors: "Germany", 
        foodURL: "https://en.wikipedia.org/wiki/Danish_cuisine",
        food: [
            { name: "Vaniljekranse", type: "Dessert", url: "https://mydanishkitchen.com/tag/vaniljekranse/", date: "2019-11-16", favorite: true, 
              img: "dansk.jpg", desc: "What us Americans know as the delicious butter cookies from the blue tins that are often full of sewing supplies, are actually just delicious butter cookies... from Denmark! Trying to get the ring shape failed after my piping bag burst, so I settled for making several in regular disk shapes. Still delicious!",
              diet: [
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Dairy", desc: "Butter is used in the dough." },
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Nuts", desc: "Almond flour is used in the dough." }
              ],
              ingredients: ["vanilla bean", "sugar", "butter", "egg", "flour", "almond flour"]
            },
            { name: "Boller i Karry", type: "Curry", url: "https://nordicfoodliving.com/danish-meatballs-in-curry-sauce-boller-i-karry/", date: "2019-11-10", 
              img: "boller.jpg", desc: "If anyone was expecting a Scandinavian curry to be mind-blowing, it wasn't me, and for good reason. I mean, it's curry, so it's still delicious, but apple isn't a thing I'd have thought to put into curry, and going forward I will never do so again.",
              diet: [
                  { type: "Meat", desc: "It's got meatballs. You can use fake meat. Or things that aren't even trying to be meat, as long as they're in ball form." },
                  { type: "Egg", desc: "Egg is used to bind the meatballs." },
                  { type: "Dairy", desc: "Milk is used to bind the meatballs." },
                  { type: "Gluten", desc: "Flour is used to bind the meatballs and thicken the curry sauce." },
                  { type: "Spicy", desc: "Could be spicy, depending on the curry powder you use.", optional: true }
              ],
              ingredients: ["pork", "onion", "egg", "milk", "flour", "curry powder", "apple"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Denmark",
        music: [
            { name: "Oh Land - Renaissance Girls", url: "https://www.youtube.com/watch?v=zFCYo3XocIM" },
            { name: "Kira Skov - Hollywood", url: "https://www.youtube.com/watch?v=sEOEmVABhIE" },
            { name: "PuKuut - Tummeqqat Ammukartut", url: "https://www.youtube.com/watch?v=GSX4EIFXC0g" },
            { name: "HorrorPops - Ghouls", url: "https://www.youtube.com/watch?v=O7z170H0jUc" },
            { name: "Cut 'N' Move - Spread Love", url: "https://www.youtube.com/watch?v=dZX2UOGnpJ0" },
            { name: "Me & My - Dub-I-Dub", url: "https://www.youtube.com/watch?v=XTjJ2_P5P4U" },
            { name: "Lis S%C3%B8rensen - Forvandling", url: "https://www.youtube.com/watch?v=am8OrLh8o9o", encoded: true },
            { name: "Laban - Love In Siberia", url: "https://www.youtube.com/watch?v=2CWRDZGehWI" },
            { name: "Alphabeat - 10.000 Nights of Thunder", url: "https://www.youtube.com/watch?v=ySHHdO-YTK4", favorite: true },
            { name: "Le%C3%A6ther Strip - Evil Speaks", url: "https://www.youtube.com/watch?v=LwFAzmqwrT0", encoded: true },
            { name: "Cryoshell - Bye Bye Babylon", url: "https://www.youtube.com/watch?v=RBJ2l4vospQ" },
            { name: "Gu%C3%B0ri%C3%B0 Hansd%C3%B3ttir - Stj%C3%B8rnur", url: "https://www.youtube.com/watch?v=maZsU-jKA1M", encoded: true },
            { name: "Rasmus Lyberth - Inuunerup oqarfigaanga", url: "https://www.youtube.com/watch?v=NTCAm6_1ZP0" }
        ]
    },
    "DJ": { // 0.9m
        name: "Djibouti", desc: "The Republic of Djibouti is a country in Northeast Africa, in the Horn of Africa. If you wanna get to the Red Sea, you gotta go by Djibouti, so it's a hoppin' place to be for shipping ships. And also military bases because nothing is ever good.",
        population: 884017, popEstimate: 2018, area: 23200, independence: "1977-06-27", indFrom: "France", demonym: "Djiboutian", currency: "Djiboutian Franc (DJF)", 
        languages: "French, Arabic, Somali, Afar", motto: `"Unity, Equality, Peace."`, neighbors: "Eritrea, Ethiopia, Somalia", 
        foodURL: "https://en.wikipedia.org/wiki/Djiboutian_cuisine",
        food: [
            { name: "Skoudehkaris", type: "Rice", url: "https://www.196flavors.com/djibouti-skoudehkaris/", date: "2017-12-17", 
              img: "skoudehkaris.jpg", desc: "A soupy rice bowl that's fun for the whole family. This recipe calls for cardamom pods and doesn't specify to grind them up first, so I got a few bites of cardamom that were P U R E F L A V O R.",
              diet: [
                  { type: "Meat", desc: "It's meaty rice. You can use fake meat or tofu or something." }
              ],
              ingredients: ["lamb", "beef", "chicken", "fish", "rice", "tomatoes", "tomato paste", "red onion", "onion", "garlic", "chili powder", "cumin", "cardamom", "cinnamon", "cilantro"]
            },
            { name: "Lahooh", type: "Bread", url: "https://www.internationalcuisine.com/djibouti-canjeero/", date: "2017-12-17", 
              img: "lahooh.jpg", desc: "Spongy bread. Soaks up broth and such very well, but extremely bland on its own.",
              diet: [
                  { type: "Gluten", desc: "It's bread." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["sorghum millet", "teff flour", "white corn meal", "instant dry yeast", "self-rising flour", "sugar"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Djibouti",
        music: [
            { name: "Awale Adan - OH Yeah", url: "https://www.youtube.com/watch?v=L4Iov5_Xz0Q", favorite: true },
            { name: "Shay Lia - Good Together", url: "https://www.youtube.com/watch?v=939u4KE78tU" },
            { name: "Iskilaaji & Deeqa Ahmed - Bidhaan Qurux", url: "https://www.youtube.com/watch?v=vBZkXJRkN60" },
            { name: "Hani Uk - Korkayga Bal Taabo a Naaji", url: "https://www.youtube.com/watch?v=NWBGbaDPAZo" }
        ]
    },
    "DM": { // 0.1m
        name: "Dominica", focusArea: "PR", desc: "The Commonwealth of Dominica is an island country in the West Indies. It's one of two countries to use the color purple on its flag, as their national bird - the sisserou parrot - is in the center of it.",
        population: 71625, popEstimate: 2018, area: 750, independence: "1978-11-03", indFrom: "Britain", demonym: "Dominican", currency: "East Caribbean Dollar (XCD)", 
        languages: "English", motto: `"After God is the earth."`, neighbors: "None", 
        foodURL: "https://en.wikipedia.org/wiki/Dominica_cuisine",
        food: [
            { name: "Cush Cush Biscuits", type: "Bread", url: "http://www.caribbeanchoice.com/recipes/recipe.asp?recipe=871", date: "2019-12-18", // https://www.realcajunrecipes.com/recipe/cosh-cosh-or-cush-cush-or-couche-couche/ 
              img: "cush.jpg", desc: "Some nice slightly sweet slightly savory biscuits. Good in my book.",
              diet: [
                  { type: "Dairy", desc: "Butter and milk are used in the dough." },
                  { type: "Gluten", desc: "Flour is used in the dough." }
              ],
              ingredients: ["cornmeal", "baking powder", "milk", "flour", "butter", "brown sugar"]
            },
            { name: "Callaloo Soup", type: "Soup", url: "https://thatgirlcookshealthy.com/caribbean-callaloo-soup/", date: "2019-12-18", 
              img: "callaloo.jpg", desc: "A creamy green soup. I used spinach because I could not find callaloo, which seems like a sin given the name of the dish, but the recipe itself says spinach is a valid substitute, so I'm innocent of all crimes!",
              diet: [
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." },
                  { type: "Spicy", desc: "It's got scotch bonnet or habanero peppie in it, but you can also just not do that.", optional: true }
              ],
              ingredients: ["callaloo", "spinach", "sweet potato", "butternut squash", "onion", "garlic", "thyme", "scotch bonnet pepper", "scallion", "okras", "vegetable stock", "coconut milk"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Dominica",
        music: [
            { name: "Asa Bantan - We Making a Mess", url: "https://www.youtube.com/watch?v=w9zVrluaRRE" },
            { name: "Carlyn XP - Liquor Family", url: "https://www.youtube.com/watch?v=M-RndIExl_o" },
            { name: "Mr. Benji & MarzVille - Stush", url: "https://www.youtube.com/watch?v=603HehEevmY", favorite: true },
            { name: "Gramacks - Paka Largez", url: "https://www.youtube.com/watch?v=Ztlwos-N-y0" },
            { name: "Ras Jumbo - Still in Love", url: "https://www.youtube.com/watch?v=IwLTpPJjiXo" },
            { name: "Exile One - La Dominique", url: "https://www.youtube.com/watch?v=KQTw4HQvIVY" }
        ]
    },
    "DO": { // 10m
        name: "Dominican Republic", desc: "The Dominican Republic is country in the Caribbean. Christopher Columbus - the bastard man who didn't discover shit - did a lot of genocide here. Now they're a big hotspot in the Caribbean, sharing their island with Haiti - a country they don't hate now but wowie do not look up Rafael Trujillo if the thought of Dominicans and Haitians being friends is very important to you.",
        population: 10735896, popEstimate: 2018, area: 48671, independence: "1844-02-27", indFrom: "Haiti", demonym: "Dominican", currency: "Peso (RD$)", 
        languages: "Spanish", motto: `"God, Homeland, Freedom."`, neighbors: "Haiti", 
        foodURL: "https://en.wikipedia.org/wiki/Dominican_Republic_cuisine",
        food: [
            { name: "Morir So&ntilde;ando", type: "Beverage", url: "https://www.dominicancooking.com/976-morir-sonando-milk-and-orange-juice.html", date: "2019-12-19", 
              img: "morirsonando.jpg", desc: "Milky, orangey, tasty. But if you're going to follow this recipe, don't add any sugar until after you've tasted it without any first because wowie was that too much sugar.",
              diet: [
                  { type: "Dairy", desc: "Half of the beberage is evaporated milk. You can swap it for a plant milk, though." }
              ],
              ingredients: ["orange juice", "evaporated milk", "sugar", "vanilla extract", "ice"]
            },
            { name: "Kipes", type: "Dumpling", url: "https://www.dominicancooking.com/55-quipes-deep-fried-bulgur-roll.html", date: "2019-12-20", 
              img: "kipe.jpg", desc: "Delicious dumples. The fried bulghur shells provided a unique texture that was definitely appreciated.",
              diet: [
                  { type: "Gluten", desc: "Bulghur wheat is used in the dough." },
                  { type: "Meat", desc: "Ground beef is the main filling, but you can replace it with like chickpeas or something. There's a link to a vegan baked version in the linked recipe." }
              ],
              ingredients: ["bulgur", "bulghur", "ground beef", "bell pepper", "basil", "onion", "tomato sauce", "raisins"]
            },
            { name: "Domplines", type: "Dumpling", url: "https://www.dominicancooking.com/16924-domplines-recipe-dominican-style-dumplings.html", date: "2019-12-20", 
              img: "domplines.jpg", desc: "Basically pasta but the dough has butter in it so it's not technically a pasta dough. The bell pepper and cheddar sauce was very tasty, too. I got a bunch left over to use on macaroni later!",
              diet: [
                  { type: "Dairy", desc: "They got cheese, milk, and butter in the sauce. You can make a different sauce. Butter is also used in the dough." },
                  { type: "Gluten", desc: "Flour is used in the dough." }
              ],
              ingredients: ["cheddar", "bell pepper", "butter", "milk", "flour", "parsley"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_the_Dominican_Republic",
        music: [
            { name: "MULA - Nunca paran", url: "https://www.youtube.com/watch?v=efdV69FLxfg" },
            { name: "Alih Jey ft. Cu&ntilde;ao - Mi Debilidad", url: "https://www.youtube.com/watch?v=7qUytGoNHMY" },
            { name: "Miriam Cruz - La Mala Soy Yo", url: "https://www.youtube.com/watch?v=ltlZHRcDm74" },
            { name: "Rita Indiana y los Misterios - El Juidero", url: "https://www.youtube.com/watch?v=LBVLvIjBFko", favorite: true },
            { name: "Toque Profundo - Mi Pa&iacute;s", url: "https://www.youtube.com/watch?v=54KP_NEZHks" },
            { name: "Monchy y Alexandra - No Es una Novela", url: "https://www.youtube.com/watch?v=PeMBlLEmVqE" },
            { name: "Giselle Tavera - Time After Time", url: "https://www.youtube.com/watch?v=E5Oh7IkAGWQ" },
            { name: "Las Acevedo - Reloj De Arena", url: "https://www.youtube.com/watch?v=g5ey2_ur1vo" },
            { name: "42-01 - Viper Bites", url: "https://www.youtube.com/watch?v=R7ClrCS7fMo" },
            { name: "Ingco Crew - Ganzta", url: "https://www.youtube.com/watch?v=lga5RFHRSLk" },
            { name: "JLS - La Onda Fatal", url: "https://www.youtube.com/watch?v=kfYppGS2aFk" }
        ]
    },
    "EC": { // 17.1m
        name: "Ecuador", desc: "The Republic of Ecuador is a country in northwest South America. It was the first country to give constitutional rights to nature, which, given how badly some countries are fucking up the environment, is probably a pretty good idea.",
        population: 17084358, popEstimate: 2018, area: 283561, independence: "1822-05-24", indFrom: "Spain", demonym: "Ecuadorian", currency: "US Dollar ($)", 
        languages: "Spanish, Kichua, Shuar", motto: `"God, Homeland, and Freedom."`, neighbors: "Colombia, Peru", 
        foodURL: "https://en.wikipedia.org/wiki/Ecuadorian_cuisine",
        food: [
            { name: "Llapingachos", type: "Vegetable", url: "https://www.thespruceeats.com/ecuadorian-potato-pancakes-llapingachos-3029638", date: "2020-01-06", // https://www.laylita.com/recipes/llapingachos-or-stuffed-potato-patties/ 
              img: "llapingachos.jpg", desc: "It's hard to go wrong with a recipe that's mostly fried potatoes, sauteed onions, and melted cheese. Empires were built on that combination of ingredients.",
              diet: [
                  { type: "Dairy", desc: "These are stuffed with cheese." },
                  { type: "Gluten", desc: "Flour can be added to keep things stuck together, but you can also use a gluten-free starch for binding, or none at all!", optional: true }
              ],
              ingredients: ["potato", "onion", "achiote", "cumin", "mozzarella", "queso fresco"]
            },
            { name: "Salsa de Mani", type: "Sauce", url: "https://www.laylita.com/recipes/salsa-de-mani-or-peanut-sauce/", date: "2020-01-06", 
              img: "salsademani.jpg", desc: "A savory and slightly sweet peanut sauce that goes very well with the cheesy fried llapingachos.",
              diet: [
                  { type: "Peanuts", desc: "Peanut sauce. Come on. Don't make this if you have a peanut allergy. You can't sue me, it won't work." },
                  { type: "Dairy", desc: "Milk is used in the sauce, and butter can be used to cook the onions. You can use coconut milk or something, it'll be fine." },
                  { type: "Egg", desc: "You can put a hard-boiled egg in it if you want to.", optional: true },
                  { type: "Spicy", desc: "You can add a hot pepper if you want to.", optional: true }
              ],
              ingredients: ["peanut butter", "milk", "onion", "cumin", "achiote", "peanut oil", "butter", "cilantro", "pepper", "egg"]
            },
            { name: "Humitas", type: "Dumpling", url: "https://www.laylita.com/recipes/humitas/", date: "2020-01-10", 
              img: "humitas.jpg", desc: "Tastes like corn and cheese, because that's largely what it is. Pretty good vehicle to deliver corn and cheese to your mouth.",
              diet: [
                  { type: "Dairy", desc: "Heavy cream is used in the dough." },
                  { type: "Egg", desc: "Egg is used in the dough." }
              ],
              ingredients: ["corn", "mozzarella", "farmer's cheese", "onion", "coriander", "garlic", "corn meal", "heavy cream", "egg"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Ecuador",
        music: [
            { name: "Las Chicas Dulces - Llueve", url: "https://www.youtube.com/watch?v=85WU4WacSBQ" },
            { name: "Mirella Cesa - Eclipse", url: "https://www.youtube.com/watch?v=zUwz1YJIqas" },
            { name: "Swing Original Monks - Hora Pico", url: "https://www.youtube.com/watch?v=t7fb6Y-NQ_A" },
            { name: "Kiruba - Quisiera", url: "https://www.youtube.com/watch?v=pl0gHKKcKNU" },
            { name: "Norka + Peter Romo - El Juego", url: "https://www.youtube.com/watch?v=JZA1IVYgZ-M" },
            { name: "Leo Rojas - Nature Spirits", url: "https://www.youtube.com/watch?v=I0rFs8IbK2I" },
            { name: "Gaby de K - Psycho", url: "https://www.youtube.com/watch?v=bR3KtVMlitY" },
            { name: "Delf&iacute;n Quishpe - Todo Hombre es un Minero", url: "https://www.youtube.com/watch?v=sxM4bCxQLsA" },
            { name: "Las Lolas - Vete", url: "https://www.youtube.com/watch?v=9Q1LCR7mygg" },
            { name: "La M&aacute;quina Camale&oacute;n - El Amuleto", url: "https://www.youtube.com/watch?v=1Aa_CBYKOGM" },
            { name: "RoCola Bacalao - Cita en el Averno", url: "https://www.youtube.com/watch?v=MrFmc0d3SNQ", favorite: true },
            { name: "Tierra Canela - El Amor No Es Asi", url: "https://www.youtube.com/watch?v=Jo-pKG3I3LA" },
            { name: "Guerreros de Cart&oacute;n - El Otro Lado de las Cosas", url: "https://www.youtube.com/watch?v=YFlcVxsQNik" }
        ]
    },
    "EG": { // 99.5m
        name: "Egypt", desc: "The Arab Republic of Egypt is a country in Northeast Africa. It's obviously well-known for, like, all of the pyramids and heiroglyphs and mythology, and just generally being one of the oldest - if not the oldest - civilizations. If you want to know more, I recommend doing some actual research, or, if you're too lazy for that, check out <a target='_blank' href='https://hauntedbees.itch.io/beegypt'>the educational beekeeping video game, Beegypt, that I made in August 2019</a>. It's free, probably at least <em>mostly</em> historically accurate, and has bees!",
        population: 99581200, popEstimate: 2019, area: 1010408, independence: "1922-02-28", indFrom: "Britain", demonym: "Egyptian", currency: "Egyptian Pound (E&pound;)", 
        languages: "Egyptian Arabic", motto: `None`, neighbors: "Israel, Libya, Palestine, Sudan", 
        foodURL: "https://en.wikipedia.org/wiki/Egyptian_cuisine",
        food: [
            { name: "Hawawshi", type: "Wrap", url: "https://burmaspice.com/recipes/hawawshi-egyptian-stuffed-pita/", date: "2020-01-18", favorite: true,
              img: "hawawshi.jpg", desc: "A hearty and flavorful meal, made more challenging to make and eat due to the fact that that, apparently, Arabic pita has pockets to stuff with meat and Greek pita does not. I wish I had known that before I had bought Greek pita. Even with the challenge of halving pitas manually (and not accidentally cutting myself in the process, hooray!), these were still delicious.",
              diet: [
                  { type: "Meat", desc: "It's full of meat, you can put fake-meat or something else inside." },
                  { type: "Spicy", desc: "It's spicy. Just don't put the spice in if you don't want to." },
                  { type: "Gluten", desc: "Pita bread is usually glutinous." },
                  { type: "Dairy", desc: "Ghee or melted butter can be brushed inside the pita. Or you can just use olive oil.", optional: true }
              ],
              ingredients: ["flour", "oil", "tomato", "bell pepper", "onion", "ground beef", "ground lamb", "allspice", "coriander ground", "aleppo pepper", "thai chili", "paprika"]
            },
            { name: "Om Ali", type: "Dessert", url: "https://cleobuttera.com/middle-eastern/best-ever-om-ali-egyptian-bread-pudding/", date: "2020-01-22", 
              img: "omali.jpg", desc: "This dish marks the first time I've set off a smoke alarm in my life, and if you can see the picture it should be very obvious as to why. Burnt parts aside, it was pretty tasty.",
              diet: [
                  { type: "Dairy", desc: "There's a lot of milk and cream in this." },
                  { type: "Gluten", desc: "It's a bread pudding." },
                  { type: "Nuts", desc: "Hazelnuts and pistachios are optional toppings.", optional: true }
              ],
              ingredients: ["palmiers", "milk", "sugar", "clotted cream", "hazelnuts", "pistachios", "raisins", "coconut flakes"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Egypt",
        music: [
            { name: "Carmen Soliman - Habibi Mosh Habibi", url: "https://www.youtube.com/watch?v=Iw3XFYF7VNI" },
            { name: "Mai Kassab - Shel Da Men Da", url: "https://www.youtube.com/watch?v=pxjZ3iiREe4" },
            { name: "Bushra - Kobra", url: "https://www.youtube.com/watch?v=K8KdyYWzKFc" },
            { name: "Ramy Essam - El Horreya lel Geda'an", url: "https://www.youtube.com/watch?v=RKWmkSUGpk8" },
            { name: "Somaya El Khashab - Wana Wayak", url: "https://www.youtube.com/watch?v=St71HirXIO8" },
            { name: "Black Theama - Enta Fakerny Hendy", url: "https://www.youtube.com/watch?v=0YdPeAAqTxc" },
            { name: "Hesham Abbas - Fenoh", url: "https://www.youtube.com/watch?v=x-4Gwh8ujdg" },
            { name: "Haidy Moussa - So2al <i>(Sual)</i>", url: "https://www.youtube.com/watch?v=COHPjkmSM_M" },
            { name: "Massive Scar Era - Pray", url: "https://www.youtube.com/watch?v=qu9VAG9ffAQ", favorite: true },
            { name: "Nesma Mahgoub - Albi W Horra Fih", url: "https://www.youtube.com/watch?v=TlF5yQ6Gf48" },
            { name: "Ehab Tawfik - Sahrany", url: "https://www.youtube.com/watch?v=8yzcPiZ2Z2M" },
            { name: "Dina El Wedidi - The Moon", url: "https://www.youtube.com/watch?v=cuqe0bBZRyk" },
            { name: "Ruby - Mesheet Wara Ehsasy", url: "https://www.youtube.com/watch?v=HS6Xv9o2LiY" },
            { name: "Shaza ft. Oka Wi Ortega - Strong Independent Woman", url: "https://www.youtube.com/watch?v=yxdLnZyHBaY" },
            { name: "Cairokee ft. Umm Kulthum - Kan Lak Ma'aya", url: "https://www.youtube.com/watch?v=ixeWiRGspM0" },
            { name: "Gehan Rateb - Ma Tigy Ahebak", url: "https://www.youtube.com/watch?v=9BXDIJUI_ME" },
            { name: "Hamaki - Ya Sattar", url: "https://www.youtube.com/watch?v=FBo8LCQqODQ" },
            { name: "Ramy Sabry - Ta'ali", url: "https://www.youtube.com/watch?v=AGNG7eg-BdI" },
            { name: "Mostafa Hagag - Khatwa", url: "https://www.youtube.com/watch?v=Dn4kubLjiBg" }
        ]
    },
    "SV": { // 6.4m
        name: "El Salvador", desc: "The Republic of El Salvador is the smallest country in Central America. They currently have the highest murder rate in the world, and most murders are related to gang activity. The country also has a lot of volcanos. So basically, it's a country with a lot going on in terms of hazards.",
        population: 6420746, popEstimate: 2018, area: 21041, independence: "1821-09-15", indFrom: "Spain", demonym: "Salvadoran", currency: "US Dollar ($)", 
        languages: "Spanish", motto: `"God, Unity, Freedom"`, neighbors: "Guatemala, Honduras", 
        foodURL: "https://en.wikipedia.org/wiki/Salvadoran_cuisine",
        food: [
            { name: "Pupusas", type: "Wrap", url: "https://www.allrecipes.com/recipe/257631/basic-cheese-pupusas/", date: "1990-01-01", databee: "pupusa",
              img: "", desc: "", // https://www.thekitchn.com/recipe-salvadoran-pupusas-con-curtidorecipes-from-the-kitchn-176284
              diet: [
                  { type: "Dairy", desc: "Extremely full of cheese. You can put beans and stuff inside instead. There's no wrong way to fill a pupusa." }
              ],
              ingredients: ["cabbage", "apple cider vinegar", "onion", "carrot", "oregano", "red pepper flakes", "masa harina", "ricotta", "mozzarella", "heavy cream", "scallion"]
            },
            { name: "Atol de Elote", type: "Beverage", url: "http://globaltableadventure.com/recipe/creamy-sweet-corn-drink-atol-de-elote/", date: "2020-01-28", databee: "atol",
              img: "atol.jpg", desc: "When I first finished making this, it smelled so much like sweet corn that it worried me. But alas, it tastes very soothing when warm.",
              diet: [
                  { type: "Dairy", desc: "Milk and corn. Milk substitutes probably work fine, too. The main ingredient is the corn, after all." }
              ],
              ingredients: ["corn", "milk", "cinnamon", "sugar"]
            },
            { name: "Nu&eacute;gados de Yuca", type: "Pastry", url: "https://www.196flavors.com/salvador-nuegados-de-yuca/", date: "2020-01-28", databee: "nuegados", 
              img: "nuegados.jpg", desc: "The panela honey I dipped these in was delicious, but perhaps a bit sweet for these very salty fritters.",
              diet: [
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Dairy", desc: "Cheese is used in the dough." }
              ],
              ingredients: ["cassava", "eggs", "baking powder", "cheese", "panela sugar", "cinnamon", "cloves"]
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_El_Salvador",
        music: [
            { name: "Salsa Clave - El Sombrero Azul", url: "https://www.youtube.com/watch?v=Vz-uxAAglPA" }, // *****
            { name: "Nadine Masri - Ra&iacute;ces", url: "https://www.youtube.com/watch?v=6MLr-j8OlgA" },
            { name: "Mago Bar&uacute; - El Show de la Enfermedad", url: "https://www.youtube.com/watch?v=QoWilQwz7No" }, // probable winner
            { name: "Vibrass Ska Ensamble - Delorean Back to Ska", url: "https://www.youtube.com/watch?v=TEXpEjUwGjM" },
            { name: "Polly Class - Neptuno", url: "https://www.youtube.com/watch?v=NEy4xHRkonw" },
            { name: "King Flyp - Abandonado", url: "https://www.youtube.com/watch?v=L_EqPFfZUlU" },
            { name: "Arquimedes Reyes - Hazme Olvidarla", url: "https://www.youtube.com/watch?v=Pau5lpU4V9M" },
            { name: "", url: "" }
        ]
    },
    "GQ": { // 1.3m
        name: "Equatorial Guinea", desc: "The Republic of Equatiorial Guinea is a country in western Central Africa.",
        population: 1308975, popEstimate: 2018, area: 28050, independence: "1968-10-12", indFrom: "Spain", demonym: "Equatoguinean", currency: "Central African CFA Franc (XAF)", 
        languages: "Spanish, French, Portuguese, Fang, Bube, Combe, Pidgin English, Annobonese, Igbo", motto: `"Unity, Peace, Justice."`, neighbors: "Cameroon, Gabon", 
        foodURL: "https://en.wikipedia.org/wiki/Cuisine_of_Equatorial_Guinea",
        food: [
            { name: "Nkate Cake", type: "Dessert", url: "https://www.196flavors.com/equatorial-guinea-nkate-cake-kongodo/", date: "1990-01-01", databee: "kongodo",
              img: "", desc: "",
              diet: [
                  { type: "Peanuts", desc: "This thing is pretty much entirely peanuts." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }
              ],
              ingredients: ["peanut", "lemon", "water", "sugar"]
            },
            { name: "Ginger Millet Porridge", type: "Other", url: "http://globaltableadventure.com/recipe/ginger-millet-porridge/", date: "1990-01-01", databee: "porridge",
              img: "", desc: "",
              diet: [
                  { type: "Dairy", desc: "Milk is used to cream things up." }
              ],
              ingredients: ["millet flour", "ginger root", "sugar", "water", "milk"]
            },
            { name: "Ginja Beer", type: "beverage", url: "https://www.196flavors.com/equatorial-guinea-ginger-beer-ginja-beer/", date: "1990-01-01", databee: "ginja",
              img: "", desc: "",
              diet: [
                { type: "", desc: "" }
              ],
              ingredients: []
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Equatorial_Guinea",
        music: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" }
        ]
    }/*,



    //,{ name: "", url: "" }
    Euro (&#8364;)
                  { type: "Soy", desc: "The filling contains Worcestershire Sauce, which often has soy sauce in it." },
                  { type: "Meat", desc: "The primary ingredient o." },
                  { type: "Dairy", desc: "Butter is used in the dough." },
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Warning", desc: "" },
                  { type: "Nuts", desc: "This recipe uses nuts. Almonds, walnuts, or hazelnuts." },
                  { type: "Fish", desc: "The filling contains Worcestershire Sau." },
                  { type: "Peanuts", desc: "Peanut sauce. Come on. Don't make this if you have a peanut allergy. You can't sue me, it won't work." },
                  { type: "Alcohol", desc: "Rum or brandy are used in the sauce, but I substituted with vanilla and it was still tasty." },
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Honey", desc: "Honey is used in the dough." },
                  { type: "Spicy", desc: "It's spicy. I only used one habanero in my recipe, so you can make it as mild as you like." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." },

    // Estonia: Angus - Tihti Tahti (Tihti Tähti?)
    "GW": { // 1.8m
        name: "Guinea-Bissau", desc: "",
        music: [
            "Tabanka Djaz - Silencio"
        ]
    },
    // india: 
            { name: "Anupam Roy - Ekhon Anek Raat", url: "https://www.youtube.com/watch?v=8-7GUHoD6Qs" },
    // Jamaica: https://www.youtube.com/watch?v=eUPYFt52FBE
    // mexico: https://www.youtube.com/watch?v=17LDYwiPe3s
    // portugual: https://www.youtube.com/watch?v=099qXDYutyg
    // romania: https://www.youtube.com/watch?v=Clx4BUnzhO4
    ,
    "template": { 
        name: "", desc: "",
        population: 0, popEstimate: 2015, area: 0, independence: "", indFrom: "", demonym: "", currency: "", 
        languages: "", motto: `""`, neighbors: "", 
        foodURL: "",
        food: [
            { name: "", type: "", url: "", date: "1990-01-01", 
              img: "", desc: "",
              diet: [
                  { type: "", desc: "" }
              ],
              ingredients: []
            },
            { name: "", type: "", url: "", date: "1990-01-01", 
              img: "", desc: "",
              diet: [
                { type: "", desc: "" }
              ],
              ingredients: []
            }
        ],
        musicURL: "",
        music: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" }
        ]
    }
    */
};