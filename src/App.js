import React from "react";

import Image from "./Image";

function App() {
  const products = [
    {
      name: "Airpods Wireless Bluetooth Headphones",
      description: "Bluetooth technology lets you ",
      brand: "Apple",
      category: "Electronics",
      price: 89.99,
      img: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG3.png",
    },
    {
      name: "iPhone 11 Pro 256GB Memory",
      description: "Introducing the iPhone 11 Pro.",
      brand: "Apple",
      category: "Electronics",
      price: 599.99,
      img: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG3.png",
    },
    {
      name: "Cannon EOS 80D DSLR Camera",
      description: " the Canon EOS 80D further ",
      brand: "Cannon",
      category: "Electronics",
      price: 929.99,
      img:
        "https://i1.adis.ws/i/canon/canon-frt-002-b42921d2-3375-11ea-8bef-50eb71a1?w=200&maxH=250",
    },
    {
      name: "Sony Playstation 4 Pro White Version",
      description: "The ultimate home  PlayStation.ng",
      brand: "Sony",
      category: "Electronics",
      price: 399.99,
      img:
        "https://www.iparts-4u.co.uk/image/cache/catalog/-categories/playstation4-200x200.png.webp",
    },
    {
      name: "Logitech G-Series Gaming Mouse",
      description: " Logitech LIGHTSYNC gaming .",
      brand: "Logitech",
      category: "Electronics",
      price: 49.99,
      img:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Airpods Wireless Bluetooth Headphones",
      description: "Bluetooth technology lets you coning  working",
      brand: "Apple",
      category: "Electronics",
      price: 89.99,
      img: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG3.png",
    },
    {
      name: "iPhone 11 Pro 256GB Memory",
      description: "Introducing the iPhone 11 Pro Phone.",
      brand: "Apple",
      category: "Electronics",
      price: 599.99,
      img: "https://pngimg.com/uploads/iphone_12/iphone_12_PNG3.png",
    },
    {
      name: "Cannon EOS 80D DSLR Camera",
      description: " the Canon EOS 80D further camera ",
      brand: "Cannon",
      category: "Electronics",
      price: 929.99,
      img:
        "https://i1.adis.ws/i/canon/canon-frt-002-b42921d2-3375-11ea-8bef-50eb71a1?w=200&maxH=250",
    },
    {
      name: "Sony Playstation 4 Pro White Version",
      description: "The ultimate home  PlayStation.ng",
      brand: "Sony",
      category: "Electronics",
      price: 399.99,
      img:
        "https://www.iparts-4u.co.uk/image/cache/catalog/-categories/playstation4-200x200.png.webp",
    },
  ];
  return products.map((item, index) => {
    return (
      <Image
        key={index}
        name={item.name}
        descript={item.description}
        brand={item.brand}
        value={item.price}
        category={item.category}
        image={item.img}
      />
    );
  });
}

export default App;
