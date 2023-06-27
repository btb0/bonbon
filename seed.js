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
      location: 'United Kingdom',
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
    }
  ]);

  console.log(items);

  process.exit();

})();