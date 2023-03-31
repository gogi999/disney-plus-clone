import React from 'react';

import styled from 'styled-components';

import logo from '../images/logo.svg';

const Footer = () => {
    return (
        <>
            <Section>
                <Container>
                    <FooterBrand>
                        <img src={logo} alt="disney/logo" />
                    </FooterBrand>
                    <Nav>
                        <li><p className="nav-link">English</p></li>
                        <li><p className="nav-link">Subscriber Agreement</p></li>
                        <li><p className="nav-link">Privacy Policy</p></li>
                        <li><p className="nav-link">Your California Privacy</p></li>
                        <li><p className="nav-link">Do Not Sell My Info</p></li>
                        <li><p className="nav-link">Children's Online Privacy Policy</p></li>
                        <li><p className="nav-link">Closed Captioning</p></li>
                        <li><p className="nav-link">Interest-Based-Ads</p></li>
                        <li><p className="nav-link">Supported Devices</p></li>
                        <li><p className="nav-link">Help</p></li>
                        <li><p className="nav-link m-t">Gift Disney+</p></li>
                        <li><p className="nav-link m-t">About US</p></li>
                        <li><p className="nav-link m-t">Disney+ Partner Program</p></li>
                        <li><p className="nav-link m-t">Premier Access</p></li>
                        <li><p className="nav-link m-t">The Disney Bundle</p></li>
                    </Nav>
                    <CopyRight>
                        <p>&copy; DisneyPlus-JSStack. All Rights Reserved 2023</p>
                    </CopyRight>
                </Container>
            </Section>
        </>
    );
}

const Section = styled.section`
    padding: 2rem 0;
    margin-bottom: 0;

    @media screen and (min-width: 280px) and (max-width: 550px){
        padding: 1rem 0;
    }
`;

const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`;

const FooterBrand = styled.div`
    text-align: center;

    img {
        width: 10rem;
        height: auto;
        object-fit: fill;

        @media screen and (min-width: 550px) and (max-width: 767px){
            width: 8rem;
        }

        @media screen and (min-width: 280px) and (max-width: 550px){
            width: 7rem;
        }
    }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    li {
        list-style: none;
    }

    > li .nav-link {
        padding: 0.5rem;
        font-size: 0.9rem;
        margin: 0 0.3rem 0vh 0;
        display: inline-block;

        @media screen and (min-width: 550px) and (max-width: 767px){
            font-size: 0.85rem;
            padding: 0.1rem;
        }
        @media screen and (min-width: 280px) and (max-width: 550px){
            font-size: 0.75rem;
            padding: 0.1rem;
        }
    }
`;

const CopyRight = styled.div`
    text-align: center;

    p {
        font-size: 1.2rem;

        @media screen and (min-width: 280px) and (max-width: 767px){
            font-size: 1rem;
        }
    }
`;

export default Footer;
