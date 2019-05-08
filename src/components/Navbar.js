import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../logo1.png'
import styled from 'styled-components'
import {ButtonContainer} from './Button'
export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* https://www.iconfinder.com/search/?q=telephone%20icon&price=free&style=glyph
             */}
                <Link to='/'>
                    <img src={logo1} alt="store" height="70px" width="70px" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className="nav-link">
                            products
                </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                         <span className="mr-2">
                            <i className="fas fa-cart-plus" /> 
                              my cart
                        </span>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform: capitalize;
} 

`;