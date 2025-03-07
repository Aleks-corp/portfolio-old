// import { NavBarcontainer } from "./NavBar.styled";

import { Item, List, NavLink } from "./NavBar.styled";
import { NAV_LIST } from "../../constants/navList";

const NavBar = () => {
  return (
    <nav>
      <List>
        {NAV_LIST.length !== 0 &&
          NAV_LIST.map((item, index) => (
            <Item key={index}>
              <NavLink href={item.path}>{item.title}</NavLink>
            </Item>
          ))}
      </List>
    </nav>
  );
};

export default NavBar;
