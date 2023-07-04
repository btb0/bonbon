require('dotenv').config();
require('./config/database');

const Item = require('./models/item');

// TEMPORARY DATA SEEDING
// TODO: seed actual information --> fix descriptions, titles, images, etc

// IIFE - Immediately Invoked Function Expression
(async function() {
  await Item.deleteMany({});
  const items = await Item.create([
    {
      "name": "Aero (4 Pack)",
      "description": "Feel the bubbles melt with AERO Milk Chocolate Bar (4 x 42g). The smooth and creamy taste of pure milk chocolate for a melt-in-your-mouth experience. Made with sustainably sourced cocoa from the NESTLÉ COCOA PLAN. Great for baking and s’mores.",
      "picture": "https://i.ibb.co/5LHvWnJ/Aero.webp",
      "category": "chocolate",
      "location": "Canada",
      "price": 0.98
    },
    {
      "name": "Almond Joy",
      "description": "Almond Joy consists of chewy, toothsome coconut that is topped off with whole crunchy almonds that are encased in a thick coating of luscious tasting milk chocolate! Joy to the world! The Almond Joy Bar has been loved since 1946! It remains a favourite candy bar to this day!",
      "picture": "https://i.ibb.co/ScGJDmy/almondjoy.webp",
      "category": "chocolate",
      "location": "United States",
      "price": 1.98
    },
    {
      "name": "Binggrae Banana Flavored Milk (6 Pack)",
      "description": "These Banana Flavored Milk drinks from Binggrae are like little, portable banana smoothies. Sweet and refreshing, they've been a bestseller in Korea for nearly half a century. Supremely milky, with just the right amount of banana flavor, they're perfect for enjoying on their own, or alongside your favorite spicy dish.",
      "picture": "https://i.ibb.co/fv755mG/Binggrae-Banana-Flavored-Milk.jpg",
      "category": "drink",
      "location": "South Korea",
      "price": 12.95
    },
    {
      "name": "Bits & Bites",
      "description": "Bits & Bites Snack Mix is a better-for-you snack with zero trans fat. Dig in - there is a party in every handful! 175 gram bag of Bits & Bites original.",
      "picture": "https://i.ibb.co/z2cD8L8/Bitsand-Bites.jpg",
      "category": "chips",
      "location": "Canada",
      "price": 5.49
    },
    {
      "name": "Bits & Bites (Barbecue)",
      "description": "Bits & Bites Snack Mix is a better-for-you snack with zero trans fat. Dig in - there is a party in every handful! 175 gram bag of Bits & Bites barbecue flavor.",
      "picture": "https://i.ibb.co/QPG32yM/Bitsand-Bites-BBQ.jpg",
      "category": "chips",
      "location": "Canada",
      "price": 5.49
    },
    {
      "name": "Bits & Bites (Cheddar)",
      "description": "Bits & Bites Snack Mix is a better-for-you snack with zero trans fat. Dig in - there is a party in every handful! 175 gram bag of Bits & Bites cheddar flavor.",
      "picture": "https://i.ibb.co/2tqvvzC/Bitsand-Bites-Cheddar.webp",
      "category": "chips",
      "location": "Canada",
      "price": 5.49
    },
    {
      "name": "Buffalo Rock Grapico",
      "description": "Grapico is a grape-flavored soft drink which is produced under license to Birmingham’s Buffalo Rock and distributed to the Southern United States.",
      "picture": "https://i.ibb.co/ZS1VPKw/grapico.png",
      "category": "drink",
      "location": "United States",
      "price": 2.49
    },
    {
      "name": "Cadbury Caramilk (4 Pack)",
      "description": "We've been indulging in these delectable bars since 1968! The Caramilk Bar is decadently filled with golden, nectarous caramel that is encased in rich and smooth milk chocolate.",
      "picture": "https://i.ibb.co/p3QMyLy/Cadbury-Caramilk.webp",
      "category": "chocolate",
      "location": "Canada",
      "price": 4.68
    },
    {
      "name": "Calbee Kata-age Potato Chips (Garlic Butter)",
      "description": "Enjoy snacking on these thick, hard, and super crunchy potato chips! Each piece is generously flavored with garlic butter. Made in Japan by Calbee.",
      "picture": "https://i.ibb.co/vz9SbnW/Calbee-Kata-age-Garlic-Butter.jpg",
      "category": "chips",
      "location": "Japan",
      "price": 4.5
    },
    {
      "name": "Calbee Kata-age Potato Chips (Grilled Seaweed)",
      "description": "Enjoy snacking on these thick, hard, and super crunchy potato chips! Each piece is generously flavored with grilled seaweed. Made in Japan by Calbee.",
      "picture": "https://i.ibb.co/1JhpDYx/Calbee-Kata-Age-Grilled-Seaweed.jpg",
      "category": "chips",
      "location": "Japan",
      "price": 4.5
    },
    {
      "name": "Calbee Kata-age Potato Chips (Shio-Sesame Oil)",
      "description": "Enjoy snacking on these thick, hard, and super crunchy potato chips! Each piece is generously flavored with shio-sesame oil. Made in Japan by Calbee.",
      "picture": "https://i.ibb.co/RPP690H/Calbee-Kata-age-Sesame-Oil.jpg",
      "category": "chips",
      "location": "Japan",
      "price": 4.5
    },
    {
      "name": "Coffee Crisp",
      "description": "Refresh your taste buds with a NESTLÉ COFFEE CRISP. The harmonious blend of crispy wafer, thin chocolatey coating, and subtle coffee aroma, makes for a nice, light snack™. Not too heavy, not too sweet – perfectly balanced.",
      "picture": "https://i.ibb.co/1nFtsFh/Coffee-Crisp.png",
      "category": "chocolate",
      "location": "Canada",
      "price": 0.98
    },
    {
      "name": "Crispy Crunch",
      "description": "Crispy Crunch is a peanut butter chocolate bar made by Cadbury Canada. It was first introduced to Canada in 1912 and consists of a crispy peanut flake inside a milk chocolate-coated candy bar. It was originally made by Neilson, but they sold the brand to Cadbury Canada in 1996.",
      "picture": "https://i.ibb.co/GnsHcPN/crispycrunch.jpg",
      "category": "chocolate",
      "location": "Canada",
      "price": 0.98
    },
    {
      "name": "Crunchie",
      "description": "Have some Canadian gold with the Crunchie Bar! This Canadian Chocolate Bar is among the gold standard of bars.\nFilled with golden, airy sponge toffee, encased in a layer of delicious Cadbury chocolate. Each and every bite is filled with that famous, mouthwatering\ncrunch and pairs perfectly with that velvety-rich chocolate.",
      "picture": "https://i.ibb.co/WcsPbmH/crunchie.jpg",
      "category": "chocolate",
      "location": "Canada",
      "price": 0.98
    },
    {
      "name": "Crush Cream Soda (12 Pack)",
      "description": "Crush Cream Soda, Released in Canada and loved by every Canadian since 1916. Crush Cream Soda delivers a sweet, creamy goodness to your taste buds each time! The perfect size to bring to your next party or get together. You'll want to get a hold of this one…",
      "picture": "https://i.ibb.co/ZLFcCJ6/Crush-Cream-Soda.png",
      "category": "drink",
      "location": "Canada",
      "price": 6.97
    },
    {
      "name": "Hichew (Berry Mix)",
      "description": "HI-CHEW unique double layer structure is designed to recreate real fruits taste. When you eat real fruits, you feel strong freshness at the first bite. Then,you'll sense spreading sweetness or sourness of the fruit's flesh in your mouth. This is the taste experience that only HI-CHEW can offer thanks to its double layer. (Berry Mix)",
      "picture": "https://i.ibb.co/mT7wJ2P/Hichew-Berry.webp",
      "category": "candy",
      "location": "Japan",
      "price": 10.99
    },
    {
      "name": "Hichew (Original)",
      "description": "HI-CHEW unique double layer structure is designed to recreate real fruits taste. When you eat real fruits, you feel strong freshness at the first bite. Then,you'll sense spreading sweetness or sourness of the fruit's flesh in your mouth. This is the taste experience that only HI-CHEW can offer thanks to its double layer. (Original Mix)",
      "picture": "https://i.ibb.co/LxgKrRH/Hichew-Original.webp",
      "category": "candy",
      "location": "Japan",
      "price": 10.99
    },
    {
      "name": "Hichew (Superfruit Mix)",
      "description": "HI-CHEW unique double layer structure is designed to recreate real fruits taste. When you eat real fruits, you feel strong freshness at the first bite. Then,you'll sense spreading sweetness or sourness of the fruit's flesh in your mouth. This is the taste experience that only HI-CHEW can offer thanks to its double layer. (Superfruit Mix)",
      "picture": "https://i.ibb.co/Vgprsmn/Hichew-Superfruit.webp",
      "category": "candy",
      "location": "Japan",
      "price": 10.99
    },
    {
      "name": "Hichew (Tropical Mix)",
      "description": "HI-CHEW unique double layer structure is designed to recreate real fruits taste. When you eat real fruits, you feel strong freshness at the first bite. Then,you'll sense spreading sweetness or sourness of the fruit's flesh in your mouth. This is the taste experience that only HI-CHEW can offer thanks to its double layer. (Tropical Mix)",
      "picture": "https://i.ibb.co/BP3Cvy9/Hichew-Tropical.jpg",
      "category": "candy",
      "location": "Japan",
      "price": 10.99
    },
    {
      "name": "Kanro Marosh Marshmallows - Melon Soda",
      "description": "The latest gummy offering by Kanro is called Marosh. It has a firm marshmallow texture with tiny flavor crystals on the outside. They have a teardrop shape and come if a few different flavors. Resealable pouch so you can easily carry it with you. (Melon Soda Flavor)",
      "picture": "https://i.ibb.co/5FMT8r6/Kanro-Marosh-Marshmallows-Melon-Soda.jpg",
      "category": "candy",
      "location": "Japan",
      "price": 4.5
    },
    {
      "name": "Kanro Marosh Marshmallows - Plum Soda",
      "description": "The latest gummy offering by Kanro is called Marosh. It has a firm marshmallow texture with tiny flavor crystals on the outside. They have a teardrop shape and come if a few different flavors. Resealable pouch so you can easily carry it with you. (Plum Soda Flavor)",
      "picture": "https://i.ibb.co/34mHXd4/Kanro-Marosh-Plum-Soda.jpg",
      "category": "candy",
      "location": "Japan",
      "price": 4.5
    },
    {
      "name": "Kit Kat Matcha Green Tea",
      "description": "These mini wafer bars are generously covered with matcha with a more robust flavor than regular green tea-flavored chocolate! Enjoy these bittersweet treats that come individually wrapped. A bag of mini chocolate bars with strong matcha flavor. Contains 10 individually wrapped mini packs. Made in Japan by Nestlé",
      "picture": "https://i.ibb.co/QHnsZM3/Kit-Kat-Match-Green-Tea.webp",
      "category": "chocolate",
      "location": "Japan",
      "price": 0.98
    },
    {
      "name": "Korean Red Ginseng Candy",
      "description": "It is of course sweet - but not overly sweet! It has a gentle aroma of red ginseng that you can savor as you suck or chew on it. Each candy is individually wrapped to make it easy to store and eat. Place a few on your coffee table and enjoy when you're craving something sweet.",
      "picture": "https://i.ibb.co/n1V1Rxt/Korean-Red-Ginseng-Candy.jpg",
      "category": "candy",
      "location": "South Korea",
      "price": 4.49
    },
    {
      "name": "Kracie European Sugar Cone Chocolate - Black Tea Latte",
      "description": "Satisfy your sweet tooth cravings with these yummy chocolate squares! Each piece tastes like latte flavored ice cream and has a milk chocolate top layer. These sweet treats also contain crushed sugar cones! Chocolates come individually wrapped. (Black Tea Latte Flavor)",
      "picture": "https://i.ibb.co/HqnmXsg/Kracie-European-Sugar-Cone-Black-Tea-Latte.jpg",
      "category": "chocolate",
      "location": "Japan",
      "price": 3.9
    },
    {
      "name": "Kracie European Sugar Cone Chocolate - Strawberry",
      "description": "Satisfy your sweet tooth cravings with these yummy chocolate squares! Each piece tastes like strawberry ice cream and has a milk chocolate top layer. These sweet treats also contain crushed sugar cones! Chocolates come individually wrapped. (Strawberry Flavor)",
      "picture": "https://i.ibb.co/fxzDM0f/Kracie-European-Sugar-Cone-Strawberry.jpg",
      "category": "chocolate",
      "location": "Japan",
      "price": 3.9
    },
    {
      "name": "Kracie European Sugar Cone Chocolate - Vanilla",
      "description": "Satisfy your sweet tooth cravings with these yummy chocolate squares! Each piece tastes like vanilla ice cream and has a milk chocolate top layer. These sweet treats also contain crushed sugar cones! Chocolates come individually wrapped. (Vanilla Flavor)",
      "picture": "https://i.ibb.co/bm7Lzcw/Kracie-European-Sugar-Cone-Chocolate-Vanilla.jpg",
      "category": "chocolate",
      "location": "Japan",
      "price": 3.9
    },
    {
      "name": "Lays Ketchup Chips",
      "description": "Canadians know a thing or two about great taste and we love our Ketchup! Thats why the combination of Lay's fresh taste and tangy tomato seasoning has become a Canadian taste tradition. This crunchy, savoury flavour is loved by everyone!",
      "picture": "https://i.ibb.co/dJ4m6VZ/Lays-Ketchup-Chips.webp",
      "category": "chips",
      "location": "Canada",
      "price": 3.67
    },
    {
      "name": "Lotte Binch",
      "description": "Binch cookies are individually wrapped, round and thin cookies with chocolate on one side and cracker on the other. The milk chocolate on the cracker depicts detailed illustrations such as a schooner, a man on a horse, and a harp. Crunchy in texture, and well-balanced between chocolate and biscuit, these biscuits are one of the most popular in Korea.",
      "picture": "https://i.ibb.co/FnHZcB2/Lotte-Binch.webp",
      "category": "chocolate",
      "location": "South Korea",
      "price": 7.99
    },
    {
      "name": "Lotte Dream Cacao",
      "description": "Made from premium quality cocoa beans, Dream Cacao offers a full body chocolate taste and the health benefits of antioxidants. Besides increasing energy, promoting healthy skin and reducing the risk of heart disease, dark chocolate also stimulates the production of Endorphins which elevates our mood! Now you can enjoy the irresistible taste of chocolate without the guilt!",
      "picture": "https://i.ibb.co/3spN4jP/Lotte-Dream-Cacao.jpg",
      "category": "chocolate",
      "location": "South Korea",
      "price": 6.99
    },
    {
      "name": "Lotte Green Grape Hard Candy",
      "description": "LOTTE Green Grape Hard Candy are individually wrapped, so they're very convenient to carry around and shareable to friends and family. The green grape flavor of this hard candy is round, refreshing, sweet, and gives off a fragrant. This candy contains 12% of green grape juice.",
      "picture": "https://i.ibb.co/G3bBZYS/Lotte-Green-Grape-Hard-Candy.webp",
      "category": "candy",
      "location": "South Korea",
      "price": 8.99
    },
    {
      "name": "Lotte Malang Cow Milk Candy",
      "description": "Korea’s Favorite Soft and Chewy Candy made of fresh high-grade milk. A soft and fluffy Lotte Malang Cow candy with a milk flavor. The soft texture gives a delicious marshmellow like chewiness!",
      "picture": "https://i.ibb.co/pj0vTGH/Lotte-Malang-Cow-Milk-Candy.png",
      "category": "candy",
      "location": "South Korea",
      "price": 3
    },
    {
      "name": "Lotte Malang Cow Milk Candy (Strawberry)",
      "description": "Korea’s Favorite Soft and Chewy Candy made of fresh high-grade milk. A soft and fluffy Lotte Malang Cow candy with a milk flavor. The soft texture gives a delicious marshmellow like chewiness! (Strawberry flavor)",
      "picture": "https://i.ibb.co/K02Vvds/Lotte-Malang-Cow-Candy-Strawberry.jpg",
      "category": "candy",
      "location": "South Korea",
      "price": 3
    },
    {
      "name": "Maynards Swedish Berries",
      "description": "Have a taste of the good old days with Maynards Candy Swedish Berries! An old fashioned Canadain Candy that is sure to get your tastebuds in a \"berry\" delicious tizzy! This red chewy candy looks just like a real berry and as an added bonus, it's also made with real fruit juice! These sweet and succulent old fashioned candies are fat-free and are made right here in Canada!",
      "picture": "https://i.ibb.co/VQ9qJKD/Marnards-Swedish-Berries.webp",
      "category": "candy",
      "location": "Canada",
      "price": 4.28
    },
    {
      "name": "Maynards Wine Gums",
      "description": "More Fine Than Wine. It’s nearly impossible to resist the taste of Maynards Wine Gums. These classic confections are labeled with names like “port,” “sherry,” and “Champagne,” but they actually come in flavours like blackcurrant, orange, and lime.",
      "picture": "https://i.ibb.co/fSXJJ2b/Maynards-Wine-Gums.webp",
      "category": "candy",
      "location": "Canada",
      "price": 4.28
    },
    {
      "name": "Milkis (Melon)",
      "description": "Milkis is a South Korean soft drink produced by Lotte Chilsung, a company which released the beverage in 1989, labeling it as a milk and yogurt soda. Some like to describe it as a melting mousse made with frozen yogurt. It is made with carbonated water, corn syrup, sugar, and milk. (Melon Flavor)",
      "picture": "https://i.ibb.co/f0dMNvS/Milkis-Melon.webp",
      "category": "drink",
      "location": "South Korea",
      "price": 3.25
    },
    {
      "name": "Milkis (Original)",
      "description": "Milkis is a South Korean soft drink produced by Lotte Chilsung, a company which released the beverage in 1989, labeling it as a milk and yogurt soda. Some like to describe it as a melting mousse made with frozen yogurt. It is made with carbonated water, corn syrup, sugar, and milk.",
      "picture": "https://i.ibb.co/hXZ6ZLr/Milkis-Original.webp",
      "category": "drink",
      "location": "South Korea",
      "price": 3.25
    },
    {
      "name": "Milkis (Strawberry)",
      "description": "Milkis is a South Korean soft drink produced by Lotte Chilsung, a company which released the beverage in 1989, labeling it as a milk and yogurt soda. Some like to describe it as a melting mousse made with frozen yogurt. It is made with carbonated water, corn syrup, sugar, and milk. (Strawberry Flavor)",
      "picture": "https://i.ibb.co/ysyRb10/Milkis-Strawberry.webp",
      "category": "drink",
      "location": "South Korea",
      "price": 3.25
    },
    {
      "name": "Milky Way",
      "description": "Treat yourself to a distractingly delicious, delightful chocolate experience of MILKY WAY. Made with creamy caramel and smooth nougat, enrobed in rich milk chocolate.",
      "picture": "https://i.ibb.co/ZmyNV8K/milkyway.png",
      "category": "chocolate",
      "location": "United States",
      "price": 1.98
    },
    {
      "name": "Mr. Big",
      "description": "Mr. Big Chocolate Bar is the largest candy bar made by Cadbury Canada. Yes, Mr. Big Chocolate is 8 inches long but is that enough to be called Mr. Big? This chocolate bar is filled with a vanilla wafer, rice crisps, peanuts and caramel then covered in a delicious Cadbury chocolate. Ok. This bar deserves to be called Mr.Big! A Canadian Chocolate Bar Favourite.",
      "picture": "https://i.ibb.co/kD0c7L0/mrBig.png",
      "category": "chocolate",
      "location": "Canada",
      "price": 0.98
    },
    {
      "name": "Nestlé Smarties",
      "description": "Make your day more colourful with NESTLÉ SMARTIES (45 g), the Canadian favourite candy for over 80 years. Each box contains the classic, delicious combination of milk chocolate covered in vibrant candy shells. Made with sustainably sourced cocoa, these colourful delights are made with natural colours and flavours.",
      "picture": "https://i.ibb.co/8zZtSgt/Nestle-Smarties.jpg",
      "category": "chocolate",
      "location": "Canada",
      "price": 11.98
    },
    {
      "name": "Oh Henry! (4 Pack)",
      "description": "OH HENRY! candy bar is made with big crunchy peanuts, creamy caramel, chewy fudge, covered with a chocolaty coating. Its delicious combination of ingredients feeds all your senses and satisfies your appetite to help re-energize you and keep you going. Keep this pack close for snacking, sharing or gifting.",
      "picture": "https://i.ibb.co/bvZfH36/ohhenry.webp",
      "category": "chocolate",
      "location": "Canada",
      "price": 3.97
    },
    {
      "name": "Orion Kkobuk Turtle Corn Chips",
      "description": "Corn soup with turtle chips flavoring. 916 kcal. No gluten. extremely crunchy structure with 4 layers. This snack's four crispy layers harmoniously and thoroughly incorporate the sweet corn flavour.",
      "picture": "https://i.ibb.co/xCwzcTv/Orion-Kkobuk-Turtle-Corn-Chips.png",
      "category": "chips",
      "location": "South Korea",
      "price": 6.95
    },
    {
      "name": "Pepero (Chocofilled)",
      "description": "Nude Flavour Biscuit Sticks. Harmony of crunchy cookies and chocolate frosting.\nImmensely beloved as long stick chocolate snacks that are fun to munch. Enjoy chocolate on the go? These cookie sticks will definitely leave you wanting more! Crispy biscuit sticks covered with chocolate frosting and cookie crumbs – one stick is never enough!",
      "picture": "https://i.ibb.co/V0ykgFW/Pepero-Choco-Filled.png",
      "category": "chocolate",
      "location": "South Korea",
      "price": 2.99
    },
    {
      "name": "Pepero (Crunchy)",
      "description": "Crunchy biscuit sticks, lightly coated in indulgent chocolate and crunchy pieces. A favourite snack, straight from Korea. Serve on their own, or with ice cream.",
      "picture": "https://i.ibb.co/3WH2R1W/Pepero-Crunchy.jpg",
      "category": "chocolate",
      "location": "South Korea",
      "price": 2.99
    },
    {
      "name": "Pepero (White Cookie)",
      "description": "These deliciously crunchy biscuit sticks are a fun and rarer alternative to the popular Glico Pocky. Pepero is Korea's answer to Pocky, produced by Korean confectionery company Lotte. To stand out from the crowd, they have made Pepero sticks with special features! Pepero Cookie & Cream, also known as \"White Cookie\", is a biscuit stick covered in gorgeous thick creamy frosting, generously sprinkled with chunky bits of crushed chocolate cookie.",
      "picture": "https://i.ibb.co/NTV7f5q/Pepero-White-Cookie.webp",
      "category": "chocolate",
      "location": "South Korea",
      "price": 2.99
    },
    {
      "name": "Ruffles All Dressed",
      "description": "All Dressed Chips by Ruffles are exactly what they sound like, potato chips flavored with ALL the dressings (ketchup, salt, vinegar, barbecue, sour cream, onion and other mystery seasonings.) Beloved by Canadians, many are befuddled that this great flavor is not available in the United States.",
      "picture": "https://i.ibb.co/rvhw5kh/Ruffles-All-Dressed.webp",
      "category": "chips",
      "location": "Canada",
      "price": 3.97
    },
    {
      "name": "Senjaku Peach Candy",
      "description": "Although they look senjaku (small and delicate), these cute peach candies pack a big, sweet, flavorful punch! There are five flavors in each bag including: \"Peach Soft Serve Ice Cream\" with a creamy vanilla center, “Peach Squash” with fizzy rock candy, “Peach Smoothie” with a fruity refreshing mix, and “Peach Tart”, which tastes like the delicious pastry! Each candy is individually wrapped so it’s great for sharing or taking on the go!",
      "picture": "https://i.ibb.co/25CdJDV/Senjaku-Peach-Candy.webp",
      "category": "candy",
      "location": "Japan",
      "price": 5.99
    },
    {
      "name": "Shindangdong Tteokbokki Chips",
      "description": "A delicious proposal for a tteokbokki bachelor who popped out of a Sindangdong jar. A tteokbokki snack with a rich, deep flavor made with Sunchang gochujang. Time to give sweet pleasure, time to fill your mouth softly! Always enjoy the taste of Haitai Confectionery.",
      "picture": "https://i.ibb.co/ZLtFLBK/Shindangdong-Tteokbokki-Chips.webp",
      "category": "chips",
      "location": "South Korea",
      "price": 9.25
    },
    {
      "name": "Skor",
      "description": "SKOR bars feature rich butter toffee enrobed with delicious milk chocolate to create a distinctively rich treat. Decadent by themselves, SKOR bars are also great in recipes or crushed over ice cream and desserts.",
      "picture": "https://i.ibb.co/5jqRPpy/Skor.jpg",
      "category": "chocolate",
      "location": "Canada",
      "price": 0.98
    },
    {
      "name": "UHA Mikakuto Water Gummies",
      "description": "The Mizu Gummy candy, created based on the concept of water, is shaped like a dewdrop. It has a water-like clarity and fruitiness, and its aftertaste is refreshing like water. You can hardly imagine from the appearance, as in clear coffee, but these gummies have a Kyoho (巨峰) grape flavor.",
      "picture": "https://i.ibb.co/1Ld1FRC/UHAMikakuto-Water-Gummies.png",
      "category": "candy",
      "location": "Japan",
      "price": 2.55
    }
  ]);

  console.log(items);
  console.log('Qty', items.length);

  process.exit();

})();