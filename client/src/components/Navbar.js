import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const NavBar = (props) => {
  const [activeItem, setActiveItem] = useState("");
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu>
      <Link to="/">
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        >
          Home
        </Menu.Item>
      </Link>
      <Link to="facts">
        <Menu.Item
          name="facts"
          active={activeItem === "facts"}
          onClick={handleItemClick}
        >
          Facts
        </Menu.Item>
      </Link>
    </Menu>
  );
};

export default NavBar;