import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import { useAuth0 } from "@auth0/auth0-react";

const NavMenu = () => {
  let { isAuthenticated, logout } = useAuth0();

  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        container
        light
      >
        <NavbarBrand tag={Link} to="/">
          go_links
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse
          className="d-sm-inline-flex flex-sm-row-reverse"
          isOpen={!collapsed}
          navbar
        >
          <ul className="navbar-nav flex-grow">
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/fetch-urls">
                Urls
              </NavLink>
            </NavItem>
            {isAuthenticated && (
              <>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/profile">
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-dark navLink">
                    <div
                      onClick={() =>
                        logout({
                          returnTo: window.location.origin,
                        })
                      }
                    >
                      Logout
                    </div>
                  </NavLink>
                </NavItem>
              </>
            )}
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default NavMenu;
