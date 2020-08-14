import React from 'react'
import { Nav, Navbar, NavItem, NavLink, DropdownItem } from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom'

const Menu = (): React.ReactElement => {
    return (
        <React.Fragment>
            <Navbar light expand="md" className="mt-3">
                <Nav navbar className="mx-auto">
                    <NavItem>
                        <NavLink
                            exact
                            to="/bt-test-home"
                            tag={RRNavLink}
                            activeClassName="active"
                        >
                            <h3>Home</h3>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <h2> - </h2>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            exact
                            to="/addProfile"
                            tag={RRNavLink}
                            activeClassName="active"
                        >
                            <h3>Sample Form</h3>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

            <DropdownItem divider />
        </React.Fragment>
    )
}

export default Menu
