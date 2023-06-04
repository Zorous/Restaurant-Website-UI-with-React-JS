import React from "react";
import MenuItem from "./Menu/MenuItem";

const menuItemsData = [
  {
    category: "Burgers & Sandwiches",
    image: "https://foodsguy.com/wp-content/uploads/2021/04/burger-vs-sandwhich.jpg",
    link: "/menu/burgers",
  },
  {
    category: "Assietes & Salades",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/18/ca/e7/84/notre-assiette-kebab.jpg",
    link: "/menu/assietes",
  },
  {
    category: "Pizza",
    image: "https://imgs.search.brave.com/NOt9Xc6ovqZUjiFCt-t585UbfLEyxgkpCBU8M_695gs/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/QVBqQWRnbHluMG1l/LXRJa2szWGpRSGFF/OCZwaWQ9QXBp",
    link: "/menu/pizza",
  },
];

function MenuItems() {
  return (
    <div className="container" id="menu">
      <div className="row">
        {menuItemsData.map((item, index) => (
            <MenuItem
              category={item.category}
              image={item.image}
              link={item.link}
            />
        ))}
      </div>
    </div>
  );
}

export default MenuItems;
