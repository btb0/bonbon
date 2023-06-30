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
      "name": "Aero",
      "description": "chocolate bar",
      "picture": "https://i.ibb.co/5LHvWnJ/Aero.webp",
      "category": "chocolate",
      "location": "Canada",
      "price": 0.98
    },
    {
      "name": "Almond Joy",
      "description": "chocolate ",
      "picture": "https://i.ibb.co/ScGJDmy/almondjoy.webp",
      "category": "chocolate",
      "location": "United States",
      "price": 1.98
    },
    {
      "name": "Binggrae Banana Flavored Milk (6 Pack)",
      "description": "banana milk",
      "picture": "https://i.ibb.co/fv755mG/Binggrae-Banana-Flavored-Milk.jpg",
      "category": "drink",
      "location": "South Korea",
      "price": 12.95
    },
    {
      "name": "Bits & Bites",
      "description": "chips",
      "picture": "https://i.ibb.co/z2cD8L8/Bitsand-Bites.jpg",
      "category": "chips",
      "location": "Canada",
      "price": 5.49
    },
    {
      "name": "Bits & Bites (Barbecue)",
      "description": "chips",
      "picture": "https://i.ibb.co/QPG32yM/Bitsand-Bites-BBQ.jpg",
      "category": "chips",
      "location": "Canada",
      "price": 5.49
    },
    {
      "name": "Bits & Bites (Cheddar)",
      "description": "chips",
      "picture": "https://i.ibb.co/2tqvvzC/Bitsand-Bites-Cheddar.webp",
      "category": "chips",
      "location": "Canada",
      "price": 5.49
    },
    {
      "name": "Buffalo Rock Grapico",
      "description": "drink",
      "picture": "https://i.ibb.co/ZS1VPKw/grapico.png",
      "category": "drink",
      "location": "United States",
      "price": 2.49
    },
    {
      "name": "Cadbury Caramilk (4 Pack)",
      "description": "chocolate with caramel inside",
      "picture": "https://i.ibb.co/p3QMyLy/Cadbury-Caramilk.webp",
      "category": "chocolate",
      "location": "Canada",
      "price": 4.68
    },
    {
      "name": "Calbee Kata-age Potato Chips (Garlic Butter)",
      "description": "chips",
      "picture": "https://i.ibb.co/vz9SbnW/Calbee-Kata-age-Garlic-Butter.jpg",
      "category": "chips",
      "location": "Japan",
      "price": 4.5
    },
    {
      "name": "Calbee Kata-age Potato Chips (Grilled Seaweed)",
      "description": "chips",
      "picture": "https://i.ibb.co/1JhpDYx/Calbee-Kata-Age-Grilled-Seaweed.jpg",
      "category": "chips",
      "location": "Japan",
      "price": 4.5
    },
    {
      "name": "Calbee Kata-age Potato Chips (Shio-Sesame Oil)",
      "description": "chips",
      "picture": "https://i.ibb.co/RPP690H/Calbee-Kata-age-Sesame-Oil.jpg",
      "category": "chips",
      "location": "Japan",
      "price": 4.5
    },
    {
      "name": "Coffee Crisp",
      "description": "Chocolate bar",
      "picture": "https://i.ibb.co/1nFtsFh/Coffee-Crisp.png",
      "category": "chocolate",
      "location": "Canada",
      "price": 0.98
    },
    {
      "name": "Crispy Crunch",
      "description": "crunchy crisp",
      "picture": "https://i.ibb.co/GnsHcPN/crispycrunch.jpg",
      "category": "chocolate",
      "location": "Canada",
      "price": 0.98
    },
    {
      "name": "Crunchie",
      "description": "chocolate bar curnciheiahdia",
      "picture": "https://i.ibb.co/WcsPbmH/crunchie.jpg",
      "category": "chocolate",
      "location": "Canada",
      "price": 0.98
    },
    {
      "name": "Crush Cream Soda (12 Pack)",
      "description": "Pop",
      "picture": "https://i.ibb.co/ZLFcCJ6/Crush-Cream-Soda.png",
      "category": "drink",
      "location": "Canada",
      "price": 6.97
    },
    {
      "name": "Hichew (Berry Mix)",
      "description": "hichews",
      "picture": "https://i.ibb.co/mT7wJ2P/Hichew-Berry.webp",
      "category": "candy",
      "location": "Japan",
      "price": 10.99
    },
    {
      "name": "Hichew (Original)",
      "description": "hichew",
      "picture": "https://i.ibb.co/LxgKrRH/Hichew-Original.webp",
      "category": "candy",
      "location": "Japan",
      "price": 10.99
    },
    {
      "name": "Hichew (Superfruit Mix)",
      "description": "best candy",
      "picture": "https://i.ibb.co/Vgprsmn/Hichew-Superfruit.webp",
      "category": "candy",
      "location": "Japan",
      "price": 10.99
    },
    {
      "name": "Hichew (Tropical Mix)",
      "description": "i love hichews",
      "picture": "https://i.ibb.co/BP3Cvy9/Hichew-Tropical.jpg",
      "category": "candy",
      "location": "Japan",
      "price": 10.99
    },
    {
      "name": "Kanro Marosh Marshmallows - Melon Soda",
      "description": "candy",
      "picture": "https://i.ibb.co/5FMT8r6/Kanro-Marosh-Marshmallows-Melon-Soda.jpg",
      "category": "candy",
      "location": "Japan",
      "price": 4.5
    },
    {
      "name": "Kanro Marosh Marshmallows - Plum Soda",
      "description": "Candy",
      "picture": "https://i.ibb.co/34mHXd4/Kanro-Marosh-Plum-Soda.jpg",
      "category": "candy",
      "location": "Japan",
      "price": 4.5
    },
    {
      "name": "Kit Kat Matcha Green Tea",
      "description": "Chocolate bar",
      "picture": "https://i.ibb.co/QHnsZM3/Kit-Kat-Match-Green-Tea.webp",
      "category": "chocolate",
      "location": "Japan",
      "price": 0.98
    },
    {
      "name": "Korean Red Ginseng Candy",
      "description": "candy ginseng",
      "picture": "https://i.ibb.co/n1V1Rxt/Korean-Red-Ginseng-Candy.jpg",
      "category": "candy",
      "location": "South Korea",
      "price": 4.49
    },
    {
      "name": "Lays Ketchup Chips",
      "description": "ketchup flavored chips (not as bad as they sound)",
      "picture": "https://i.ibb.co/dJ4m6VZ/Lays-Ketchup-Chips.webp",
      "category": "chips",
      "location": "Canada",
      "price": 3.67
    },
    {
      "name": "Lotte Binch",
      "description": "chocolate snacks",
      "picture": "https://i.ibb.co/FnHZcB2/Lotte-Binch.webp",
      "category": "chocolate",
      "location": "South Korea",
      "price": 7.99
    },
    {
      "name": "Lotte Dream Cacao",
      "description": "chocolate cubes",
      "picture": "https://i.ibb.co/3spN4jP/Lotte-Dream-Cacao.jpg",
      "category": "chocolate",
      "location": "South Korea",
      "price": 6.99
    },
    {
      "name": "Lotte Green Grape Hard Candy",
      "description": "hard candy",
      "picture": "https://i.ibb.co/G3bBZYS/Lotte-Green-Grape-Hard-Candy.webp",
      "category": "candy",
      "location": "South Korea",
      "price": 8.99
    },
    {
      "name": "Lotte Malang Cow Milk Candy",
      "description": "candy",
      "picture": "https://i.ibb.co/3mHnw1s/Lotte-Malang-Cow-Milk-Candy.webp",
      "category": "candy",
      "location": "South Korea",
      "price": 3
    },
    {
      "name": "Lotte Malang Cow Milk Candy (Strawberry)",
      "description": "candy",
      "picture": "https://i.ibb.co/kBmPHjW/Lotte-Malang-Cow-Milk-Strawberry.jpg",
      "category": "candy",
      "location": "South Korea",
      "price": 3
    },
    {
      "name": "Maynards Swedish Berries",
      "description": "berries that are swedish made in canada",
      "picture": "https://i.ibb.co/VQ9qJKD/Marnards-Swedish-Berries.webp",
      "category": "candy",
      "location": "Canada",
      "price": 4.28
    },
    {
      "name": "Maynards Wine Gums",
      "description": "gummies",
      "picture": "https://i.ibb.co/fSXJJ2b/Maynards-Wine-Gums.webp",
      "category": "candy",
      "location": "Canada",
      "price": 4.28
    },
    {
      "name": "Milkis (Melon)",
      "description": "carbonated drink",
      "picture": "https://i.ibb.co/f0dMNvS/Milkis-Melon.webp",
      "category": "drink",
      "location": "South Korea",
      "price": 3.25
    },
    {
      "name": "Milkis (Original)",
      "description": "carbonated drink",
      "picture": "https://i.ibb.co/hXZ6ZLr/Milkis-Original.webp",
      "category": "drink",
      "location": "South Korea",
      "price": 3.25
    },
    {
      "name": "Milkis (Strawberry)",
      "description": "carbonated drink",
      "picture": "https://i.ibb.co/ysyRb10/Milkis-Strawberry.webp",
      "category": "drink",
      "location": "South Korea",
      "price": 3.25
    },
    {
      "name": "Milky Way",
      "description": "chocolate bar not space",
      "picture": "https://i.ibb.co/ZmyNV8K/milkyway.png",
      "category": "chocolate",
      "location": "United States",
      "price": 1.98
    },
    {
      "name": "Mr. Big",
      "description": "chocolate bar mr big",
      "picture": "https://i.ibb.co/kD0c7L0/mrBig.png",
      "category": "chocolate",
      "location": "Canada",
      "price": 0.98
    },
    {
      "name": "Nestlé Smarties",
      "description": "smarties canada version",
      "picture": "https://i.ibb.co/8zZtSgt/Nestle-Smarties.jpg",
      "category": "chocolate",
      "location": "Canada",
      "price": 11.98
    },
    {
      "name": "Oh Henry!",
      "description": "chocolate bar henry",
      "picture": "https://i.ibb.co/bvZfH36/ohhenry.webp",
      "category": "chocolate",
      "location": "Canada",
      "price": 3.97
    },
    {
      "name": "Orion Kkobuk Turtle Corn Chips",
      "description": "Chips that taste like corn",
      "picture": "https://i.ibb.co/xCwzcTv/Orion-Kkobuk-Turtle-Corn-Chips.png",
      "category": "chips",
      "location": "South Korea",
      "price": 6.95
    },
    {
      "name": "Pepero (Chocofilled)",
      "description": "chocolate stick",
      "picture": "https://i.ibb.co/V0ykgFW/Pepero-Choco-Filled.png",
      "category": "chocolate",
      "location": "South Korea",
      "price": 2.99
    },
    {
      "name": "Pepero (Crunchy)",
      "description": "chocolate stick snack thing",
      "picture": "https://i.ibb.co/3WH2R1W/Pepero-Crunchy.jpg",
      "category": "chocolate",
      "location": "South Korea",
      "price": 2.99
    },
    {
      "name": "Pepero (White Cookie)",
      "description": "chocolate snack",
      "picture": "https://i.ibb.co/NTV7f5q/Pepero-White-Cookie.webp",
      "category": "chocolate",
      "location": "South Korea",
      "price": 2.99
    },
    {
      "name": "Ruffles All Dressed",
      "description": "chips that are dressed",
      "picture": "https://i.ibb.co/rvhw5kh/Ruffles-All-Dressed.webp",
      "category": "chips",
      "location": "Canada",
      "price": 3.97
    },
    {
      "name": "Senjaku Peach Candy",
      "description": "candy peach",
      "picture": "https://i.ibb.co/25CdJDV/Senjaku-Peach-Candy.webp",
      "category": "candy",
      "location": "Japan",
      "price": 5.99
    },
    {
      "name": "Shindangdong Tteokbokki Chips",
      "description": "i like tteokbokki",
      "picture": "https://i.ibb.co/ZLtFLBK/Shindangdong-Tteokbokki-Chips.webp",
      "category": "chips",
      "location": "South Korea",
      "price": 9.25
    },
    {
      "name": "Skor",
      "description": "chocolate bar skor",
      "picture": "https://i.ibb.co/5jqRPpy/Skor.jpg",
      "category": "chocolate",
      "location": "Canada",
      "price": 0.98
    },
    {
      "name": "UHA Mikakuto Water Gummies",
      "description": "candy",
      "picture": "https://i.ibb.co/1Ld1FRC/UHAMikakuto-Water-Gummies.png",
      "category": "candy",
      "location": "Japan",
      "price": 2.55
    }
  ]);

  console.log(items);

  process.exit();

})();