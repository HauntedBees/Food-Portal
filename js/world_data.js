const data = {
    "AB": { // 0.2m
        customFlag: "GE-AB", focusArea: "GE",
        name: "Abkhazia", desc: "Abkhazia is, according to Abkhazia, Russia, Venezuela, and a few other countries, its own country, and according to everyone else, it's just the westmost part of Georgia. Russian tourists can visit without even needing a passport!",
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
            { name: "G%C3%B6khan%20%C5%9Een%20-%20%D0%97%D1%8D%D1%85%D1%83%D1%8D%D0%BAl%D1%83%D1%8D%20%D0%9C%D1%8D%D0%BA%D1%8A%D0%B0%D0%BC%D1%8D%D1%85%D1%8D%D1%80", url: "https://www.youtube.com/watch?v=PV_j5EUHnng", encoded: true, favorite: true }
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
                  { type: "Egg", desc: "Hard-boiled eggs are a recommended filling for this recipe, but I did not add any to mine." },
                  { type: "Gluten", desc: "This dish contains flatbread." }
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
            { name: "Ferges&euml; Tiran&euml;s me piperka", type: "Sauce", url: "https://www.myalbanianfood.com/recipe/albanian-fergese-e-tiranes-me-piperka/", date: "2018-06-18",
              img: "tirgese1.jpg",
              desc: "I'm still not entirely sure what this is. My best guess is it's some sort of creamy dip of some sort, for like bread I guess? As a dip, it is very rich and delicious. If it's not a dip, then I accidentally made something delicious.",
              diet: [
                  { type: "Dairy", desc: "Cheese and yogurt are an integral part of this recipe." },
                  { type: "Gluten", desc: "Flour is used to make a roux." }
              ],
              ingredients: ["bell pepper", "onion", "feta cheese", "tomato", "chili flakes", "flour", "butter", "greek yogurt", "basil", "oil", "yoghurt"]
            },
            { name: "Flija", type: "Bread", url: "https://www.myalbanianfood.com/recipe/albanian-flija-pancake/", date: "2018-06-24", 
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
            { name: "Shakshouka", type: "Sauce", url: "https://cooking.nytimes.com/recipes/1014721-shakshuka-with-feta", date: "2018-06-26",
              img: "shakshouka.jpg",
              desc: "It's very tomatoey and eggy. Dipping bread into it is a good choice. I think you can eat it without a bread to dip in it, but I can't handle that much tomato without something else to balance it out.",
              diet: [
                    { type: "Egg", desc: "You can make this dish without eggs, but then you're eating an egg dish without eggs." },
                    { type: "Dairy", desc: "This dish optionally uses feta cheese." }
              ],
              ingredients: ["egg", "feta cheese", "tomato", "cilantro", "garlic", "onion", "bell pepper", "cumin", "oil"]
            },
            { name: "Kanafeh", type: "Dessert", url: "https://www.closetcooking.com/2013/11/kanafeh-sweet-cheese-pastry.html", date: "2018-07-09",
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
        languages: "Portuguese", motto: `"Virtue is stronger when united."`, neighbors: "Congo, Democratic Republic of the Congo, Namibia, Zambia", 
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
            { name: "Moamba de Galinha", type: "Sauce", url: "https://foodsfromafrica.com/angola-muamba-di-galinha-chicken-moamba-recipe/", date: "2018-07-30",
              img: "moamba.jpg",
              desc: "Chicken cooked in a red palm oil sauce. I cannot accurately describe the taste of red palm oil, but it was definitely a very new taste and I'm pretty sure I enjoyed it. Chicken is tasty.",
              diet: [
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
            { name: "Tabanka Djaz - Foi Assim", url: "https://www.youtube.com/watch?v=5wHXvtWPdxU" },
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
                { type: "Egg", desc: "This soup contains egg yolk, but it is an optional ingredient that is not included if serving the soup cold." }
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
                { type: "Nuts", desc: "This recipe uses pine nuts, but they're definitely 100% optional." },
                { type: "Egg", desc: "The linked recipe calls for an egg to keep things together, but most recipes I've found don't, so you can probably omit it." }
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
                { type: "Fish", desc: "The filling contains Worcestershire Sauce, which can have anchovies in it. I was able to easily find an anchovy-free bottle in a regular grocery store." },
                { type: "Gluten", desc: "The pie crust uses a lot of flour." },
                { type: "Dairy", desc: "The pie crust uses a LOT of butter." },
                { type: "Soy", desc: "The filling contains Worcestershire Sauce, which often has soy sauce in it." },
                { type: "Egg", desc: "An egg wash is applied to the top of the pie before baking." }
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
            { name: "Shekerbura", type: "Dessert", url: "https://www.196flavors.com/azerbaijan-shekerbura/", date: "2018-10-06", 
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
            { name: "Bahamian Macaroni and Cheese", type: "Noodle", url: "https://www.trubahamianfoodtours.com/bites-of-nassau-food-tour/bahamian-macaroni-cheese/", date: "2018-10-16", 
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
    }/*,
    "BH": { // 1.4m 
        name: "Bahrain", desc: "The Kingdom of Bahrain is an Asian island country in the Persian Gulf.", focusArea: "QA",
        population: 1425171, popEstimate: 2016, area: 765.3, independence: "1971-08-15", indFrom: "Britain", demonym: "Bahrani", currency: "Bahraini Dinar (BD)", 
        languages: "Arabic", motto: `None`, neighbors: "None", 
        foodURL: "https://en.wikipedia.org/wiki/Bahraini_cuisine",
        food: [
            { name: "Machboos", type: "Rice", url: "https://www.geniuskitchen.com/recipe/traditional-bahraini-chicken-machboos-machbous-304034", date: "1990-01-01", 
              img: "", desc: "",
              diet: [
                  { type: "", desc: "" }
              ],
              ingredients: []
            },
            { name: "Balaleet", type: "Noodle", url: "https://www.youtube.com/watch?v=JTwOBFvfXP0", date: "1990-01-01", 
              img: "", desc: "",
              diet: [
                  { type: "", desc: "" }
              ],
              ingredients: []
            }
        ],
        musicURL: "https://en.wikipedia.org/wiki/Music_of_Bahrain",
        music: [
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" },
            { name: "", url: "" }
        ]
    },

    //,{ name: "", url: "" }
    Euro (&#8364;)
    
                  { type: "Meat", desc: "The primary ingredient of the filling is beef, and meat broth is used. I used a vegan beef alternative and vegetable broth without any issue." },
                  { type: "Gluten", desc: "Flour is used in the dough." },
                  { type: "Egg", desc: "Egg is used in the dough." },
                  { type: "Dairy", desc: "Butter is used in the dough." },
                  { type: "Nuts", desc: "This recipe uses nuts. Almonds, walnuts, or hazelnuts." }
                  { type: "Spicy", desc: "It's spicy. I only used one habanero in my recipe, so you can make it as mild as you like." },
                  { type: "Vegan", desc: "This dish is vegan-friendly without any substitutions." }

    "CV": { // 0.5m
        name: "Cape Verde", desc: "",
        music: [
            "Neuza - Volta Pa Mim"
            "Nelson Freitas - Nubian Queen"
        ]
    },
    // colombia: Karol G - Mi Cama
    "GW": { // 1.8m
        name: "Guinea-Bissau", desc: "",
        music: [
            "Tabanka Djaz - Silencio"
        ]
    },
    // romania: https://www.youtube.com/watch?v=Clx4BUnzhO4
    // mexico: https://www.youtube.com/watch?v=17LDYwiPe3s
    "template":{ 
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