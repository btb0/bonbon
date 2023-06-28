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
      name: 'Coffee Crisp', 
      description: 'chocolate bar', 
      picture: 'https://assets.shop.loblaws.ca/products/20019964/b2/en/front/20019964_front_a06_@2.png',
      category: 'chocolate',
      location: 'Canada',
      price: 0.98
    }, 
    {
      name: 'Kit Kat Matcha Green Tea',
      description: 'chocolate bar',
      picture: 'https://mi.alpremium.ca/cdn/shop/products/490220118077.jpg?v=1681960694',
      category: 'chocolate',
      location: 'Japan',
      price: 0.98
    },
    {
      name: 'Orion Kkobuk Turtle Corn Chips',
      description: 'chips that taste like corn',
      picture: 'https://superwafer.ca/storage/products/October2022/1666463368_scaled_image_picker1542598381010952906.png',
      category: 'chips',
      location: 'South Korea',
      price: 6.95
    },
    {
      name: 'Aero',
      description: 'chocolate bar',
      picture: 'https://i5.walmartimages.com/asr/14c46e32-a5c0-43ce-bd36-3561fe393494.202549f964e4cb550d05dec58365a47f.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
      category: 'chocolate',
      location: 'Canada',
      price: 0.98
    },
    {
      name: 'Ruffles All Dressed',
      description: 'chips that are dressed',
      picture: 'https://i5.walmartimages.com/asr/0832be34-b781-4f69-ba81-205aaa6a5137.0b1ad85930ee0f808a78e4bde96af057.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
      category: 'chips',
      location: 'Canada',
      price: 3.97
    },
    {
      name: 'Maynards Wine Gums',
      description: 'candy gummies',
      picture: 'https://i5.walmartimages.com/asr/0aad5024-2392-4bfc-ab14-c720a0868e36.f21cd3f19c7bb5b7c567c3e551072a45.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
      category: 'candy',
      location: 'Canada',
      price: 4.28
    }, 
    {
      name: 'Shindangdong Tteokbokki Chips',
      description: 'tteokbokki chips',
      picture: 'https://cdn.shopify.com/s/files/1/0485/3497/8716/products/7f813fe955927f6e65a94eb4a4b5a7c3.jpg?v=1622769292',
      category: 'chips',
      location: 'South Korea',
      price: 9.25

    },
    {
      name: 'Binggrae Banana Flavored Milk (6 Pack)',
      description: 'banana milk',
      picture: 'https://www.korea.net/upload/content/editImage/banana-141107-1.jpg',
      category: 'drink',
      location: 'South Korea',
      price: 12.95
    },
    {
      name: 'Lays Ketchup Chips',
      description: 'ketchup flavored chips (not as bad as it sounds)',
      picture: 'https://i5.walmartimages.com/asr/91a588b5-cd9f-4b3e-9dcd-f8ef6e82d1f9.e0e295016760c0d8a90335fa34bf2b9c.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
      category: 'chips',
      location: 'Canada',
      price: 3.67
    },
    {
      name: 'Milkis (Strawberry)',
      description: 'Carbonated milk drink thing (apparently its really good idk) - strawberry flavour',
      picture: 'https://cdn.shopify.com/s/files/1/0294/6229/8717/products/Lotte-milkis-fraise-1_2048x.jpg?v=1636254839',
      category: 'drink',
      location: 'South Korea',
      price: 3.25
    },
    {
      name: 'Milkis (Melon)',
      description: 'Carbonated milk drink thing (apparently its really good idk - melon )',
      picture: 'https://cdn.shopify.com/s/files/1/0294/6229/8717/products/Lotte-milkis-melon-miel-1_2048x.jpg?v=1636254870',
      category: 'drink',
      location: 'South Korea',
      price: 3.25
    },
    {
      name: 'Milkis (Original)',
      description: 'Carbonated milk drink thing (apparently its really good idk) - original',
      picture: 'https://cdn.shopify.com/s/files/1/0338/0694/2253/products/LotteMilkisDrinkCanOriginalFlavor8.45oz_front_2048x.jpg?v=1650574585',
      category: 'drink',
      location: 'South Korea',
      price: 3.25
    },
    {
      name: 'Crush Cream Soda (12 Pack)',
      description: 'cream soda flavoured pop',
      picture: 'https://assets.shop.loblaws.ca/products/20307938003/b1/en/angle/20307938003_angle_a01_@2.png',
      category: 'drink',
      location: 'Canada',
      price: 6.97
    },
    {
      name: 'Hichew (Superfruit Mix)',
      description: 'best candy ever',
      picture: 'https://cdn.shopify.com/s/files/1/0515/3692/0757/files/image_8d9b7b5d-d950-498a-9f57-914920326d31.jpg?v=1684376994&width=1080',
      category: 'candy',
      location: 'Japan',
      price: 10.99
    },
    {
      name: 'Hichew (Tropical Mix)',
      description: 'best candy ever',
      picture: 'https://m.media-amazon.com/images/I/71uKr+v0sdL.jpg',
      category: 'candy',
      location: 'Japan',
      price: 10.99
    },
    {
      name: 'Hichew (Berry Mix)',
      description: 'best candy ever',
      picture: 'https://res.cloudinary.com/nassau-candy/image/upload/c_fit,w_1000,h_1000,f_auto/v1616450721/46925.jpg',
      category: 'candy',
      location: 'Japan',
      price: 10.99
    },
    {
      name: 'Hichew (Original)',
      description: 'best candy ever',
      picture: 'https://cdn.shopify.com/s/files/1/0294/6229/8717/products/MORINAGA-Hi-Chew-Original-3_2048x.jpg?v=1652319891',
      category: 'candy',
      location: 'Japan',
      price: 10.99
    },
    {
      name: 'Maynards Swedish Berries',
      description: 'swedish berries candy',
      picture: 'https://i5.walmartimages.com/asr/b122dcfc-c79b-413b-a926-251679ac20f5.405a0e3d38129e48f1e98be634122940.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
      category: 'candy',
      location: 'Canada',
      price: 4.28
    },
    {
      name: 'Cadbury Caramilk (4 Pack)',
      description: 'chocolate with caramel inside',
      picture: 'https://i5.walmartimages.com/asr/ea472986-bcce-4edf-bf2b-ae68ed5d04d7.877e159e49e91fa5b9a2056c7a058d07.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
      category: 'chocolate',
      location: 'Canada',
      price: 4.68
    },
    {
      name: 'Nestlé Smarties',
      description: 'smarties canada version',
      picture: 'https://m.media-amazon.com/images/I/61YYPGfRHSL.jpg',
      category: 'chocolate',
      location: 'Canada',
      price: 11.98
    },
    {
      name: 'Oh Henry! (4 Pack)',
      description: 'chocolate bar named oh henry',
      picture: 'https://i5.walmartimages.com/asr/26835748-7360-4cff-9959-907082386536.654fe8adc797a07199f8897e00909a8f.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
      category: 'chocolate',
      location: 'Canada',
      price: 3.97
    },
    {
      name: 'Skor',
      description: 'chocolate bar in canada',
      picture: 'https://i5.walmartimages.ca/images/Enlarge/238/306/6000203238306.jpg',
      category: 'chocolate',
      location: 'Canada',
      price: 0.98
    },
    {
      name: 'Mr. Big',
      description: 'chocolate bar in cadadaandawdada',
      picture: 'https://assets.shop.loblaws.ca/products/20688799001/b2/en/front/20688799001_front_a06_@2.png',
      category: 'chocolate',
      location: 'Canada',
      price: 0.98
    },
    {
      name: 'Crunchie',
      description: 'crunchie chocolate bar',
      picture: 'https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dw97604ffa/products/L6208409/large/L6208409.JPG',
      category: 'chocolate',
      location: 'Canada',
      price: 0.98
    },
    {
      name: 'Crispy Crunch',
      description: 'crunchy crispy crunchy crisp',
      picture: 'https://cdn11.bigcommerce.com/s-szcye2zgx6/images/stencil/1280x1280/products/124/1216466/bad1ef4e19513aa37776a68ce8a629ba10ddd9f97167eb3d7a82ccbfb725b40f__17251.1631884754.jpg?c=2?imbypass=on',
      category: 'chocolate',
      location: 'Canada',
      price: 0.98
    },
    {
      name: 'Milky Way',
      description: 'chocolate bar. not space',
      picture: 'https://sweetfusion.net/wp-content/uploads/2020/04/Milky-Way.png',
      category: 'chocolate',
      location: 'United States',
      price: 1.98
    },
    {
      name: 'Almond Joy',
      description: 'chocolate bar',
      picture: 'https://cdn.shopify.com/s/files/1/1933/8915/products/1359.png?v=1513583686',
      category: 'chocolate',
      location: 'United States',
      price: 1.98
    },
    {
      name: 'UHA Mikakuto Water Gummies',
      description: 'candy description here',
      picture: 'https://cdn.yamibuy.net//item/fb398b78dbaf29625780ed13c8aeb0c6_750x750.webp',
      category: 'candy',
      location: 'Japan',
      price: 2.55
    },
    {
      name: 'Kanro Marosh Marshmallows - Melon Soda',
      description: 'candy description here',
      picture: 'https://s.yimg.com/zp/MerchandiseImages/2569BF0310-SP-11107795.jpg',
      category: 'candy',
      location: 'Japan',
      price: 4.50
    },
    {
      name: 'Kanro Marosh Marshmallows - Plum Soda',
      description: 'candy description here',
      picture: 'https://i.ebayimg.com/images/g/yHMAAOSwNcdkN648/s-l1200.jpg',
      category: 'candy',
      location: 'Japan',
      price: 4.50
    },
    {
      name: 'Senjaku Peach Candy',
      description: 'candy description here',
      picture: 'https://cdn.shopify.com/s/files/1/0557/4269/3571/products/BG10466-Senjuraku-Peach-Candy_2048x.jpg?v=1640205374',
      category: 'candy',
      location: 'Japan',
      price: 5.99
    },
    {
      name: 'Calbee Kata-age Potato Chips (Grilled Seaweed)',
      description: 'candy description here',
      picture: 'https://sg-live.slatic.net/p/d201bc69978aac6598fb8ce1072986d0.jpg',
      category: 'chips',
      location: 'Japan',
      price: 4.50
    },
    {
      name: 'Calbee Kata-age Potato Chips (Shio-Sesame Oil)',
      description: 'candy description here',
      picture: 'https://image.entabe.jp/upload/20220615/images/0011_1.jpg',
      category: 'chips',
      location: 'Japan',
      price: 4.50
    },
    {
      name: 'Calbee Kata-age Potato Chips (Garlic Butter)',
      description: 'candy description here',
      picture: 'https://www.imomoko.com/media/catalog/product/cache/5ae712eb5269b549b8905459cc92bb2e/o/k/okashinomarch_4901330563257.jpeg',
      category: 'chips',
      location: 'Japan',
      price: 4.50
    },
    {
      name: 'Bits & Bites',
      description: 'candy description here',
      picture: 'https://m.media-amazon.com/images/I/71TN-WkaHDL.jpg',
      category: 'chips',
      location: 'Canada',
      price: 5.49
    },
    {
      name: 'Bits & Bites (Barbecue)',
      description: 'candy description here',
      picture: 'https://i.imgur.com/akn6yWH.jpg',
      category: 'chips',
      location: 'Canada',
      price: 5.49
    },
    {
      name: 'Bits & Bites (Cheddar)',
      description: 'candy description here',
      picture: 'https://cdn.shopify.com/s/files/1/0538/8897/5032/products/ChristiesBits_Bites-Cheddar12x175gr_e73c3fb2-a6e5-485a-b810-46c0e991486d.jpg?v=1629245427',
      category: 'chips',
      location: 'Canada',
      price: 5.49
    },
    {
      name: 'Lotte Malang Cow Milk Candy',
      description: 'candy milk cow candy wow',
      picture: 'https://cdn.shopify.com/s/files/1/0251/2945/1597/products/096ed1d60ecce988cf2da3a1eb4578bc_952x.png?v=1674795219',
      category: 'candy',
      location: 'South Korea',
      price: 3.00
    },
    {
      name: 'Lotte Malang Cow Milk Candy (Strawberry)',
      description: 'candy milk cow strawberry',
      picture: 'https://m.media-amazon.com/images/I/51WLdD17c5L._SL1000_.jpg',
      category: 'candy',
      location: 'South Korea',
      price: 3.00
    },
    {
      name: 'Lotte Green Grape Hard Candy',
      description: 'hard candy',
      picture: 'https://cdn.shopify.com/s/files/1/0261/7642/1963/files/Untitled-1_10803847-3bc8-419f-854e-3c38473a66a2.jpg?v=1682964393',
      category: 'candy',
      location: 'South Korea',
      price: 8.99
    },
    {
      name: 'Lotte Binch',
      description: 'chocolate snacks',
      picture: 'https://images.deliveryhero.io/image/darkstores-tw/food/0122/14010815.jpg?height=480',
      category: 'chocolate',
      location: 'South Korea',
      price: 7.99
    },
    {
      name: 'Lotte Dream Cocao',
      description: 'chocolate cube things',
      picture: 'https://m.media-amazon.com/images/I/611V9tFTo5L.jpg',
      category: 'chocolate',
      location: 'South Korea',
      price: 6.99
    },
    {
      name: 'Pepero (White Cookie)',
      description: 'chocolate stick snack',
      picture: 'https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13049105_XL1_20220629.jpg',
      category: 'chocolate',
      location: 'South Korea',
      price: 2.99
    },
    {
      name: 'Pepero (Crunchy)',
      description: 'chocolate snack thing',
      picture: 'https://haisue.ca/wp-content/uploads/2022/09/Lotte-Pepero-Crunchy-Stick-Biscuit-39g.jpg',
      category: 'chocolate',
      location: 'South Korea',
      price: 2.99
    },
    {
      name: 'Pepero (Chocofilled)',
      description: 'chocolate stick snacks',
      picture: 'https://1212928256.rsc.cdn77.org/content/images/thumbs/000/0005836_kr-pepero-nude-chocolate-filled-sticks.png',
      category: 'chocolate',
      location: 'South Korea',
      price: 2.99
    },
    {
      name: 'Korean Red Ginseng Candy',
      description: 'ginseng candy ',
      picture: 'https://m.media-amazon.com/images/I/71kPHLs6dYL.jpg',
      category: 'candy',
      location: 'South Korea',
      price: 4.49
    },
    {
      name: 'Buffalo Rock Grapico',
      description: 'drink grape',
      picture: 'https://grapico.com/wp-content/themes/grapico/images/intro_s2_photo.png',
      category: 'drink',
      location: 'United States',
      price: 2.49
    },
  ]);

  console.log(items);

  process.exit();

})();