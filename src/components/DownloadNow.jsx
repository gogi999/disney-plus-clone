import React from 'react';

import styled from 'styled-components';

import Devices from '../images/Devices.png';

const DownloadNow = () => {
    return (
        <>
            <Section>
                <Container>
                    <TextContent>
                        <h1 className="disney-titles">Stream with Premier Access the</h1>
                        <h1 className="disney-titles">same day it's in theaters</h1>
                        <p>
                            Comming May 28. Get Premier Access to Cruella for $29.99 with a Disney+ subsciption, and watch as many times as you like before it's available to all Disney+ subscribers at a later date.
                        </p>
                        <button
                            type="button"
                            className="btn-theme-disney"
                        >
                            Download Now
                        </button>
                    </TextContent>
                    <ImgContent>
                        <img src={Devices} alt="img/stream" />
                    </ImgContent>
                </Container>
            </Section>
        </>
    );
}

const Section = styled.section`
    padding: 50px 5%;
    position: relative;
    background: transparent;

    @media screen and (max-width: 991px){
        padding: 35px 50px;
    }

    @media screen and (max-width: 767px){
        padding: 25px;
    } 
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 991px){
        flex-direction: column;
        justify-content: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-flow: column;
        text-align: center;
    }
`;

const TextContent = styled.div`
    width: 48%;
    flex: 0 auto;
    opacity: 1;
    z-index: 1500;
    position: relative;

    @media screen and (max-width: 991px){
        width: 100%;
        padding: 0;
        text-align: center;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 500 !important;
        line-height: 2.5rem;
        @media screen and (min-width: 991px) and (max-width: 1200px){
            font-size: 2rem;
            line-height: 2rem;
        }
        @media screen and (min-width: 550px) and (max-width: 991px){
            font-size: 1.7rem;
            line-height: 1.8rem;
        }
        @media screen and (min-width: 375px) and (max-width: 550px){
            font-size: 1.5rem;
            line-height: 1.7rem;
        }
        @media screen and (min-width: 280px) and (max-width: 375px){
            font-size: 1.2rem;
            line-height: 1.3rem;
        }
    }

    p {
        font-size: 1rem;
        font-weight: 100;

        @media screen and (min-width: 375px) and (max-width: 550px){
            font-size: 0.85rem;
            line-height: 1rem;
        }

        @media screen and (min-width: 280px) and (max-width: 375px){
            font-size: 0.7rem;
            line-height: 1rem;
            margin-top: 1vh;
        }
    }
`;

const ImgContent = styled.div`
    width: 48%;
    flex: 0 auto;
    opacity: 1;
    z-index: 1500;
    position: relative;

    @media screen and (max-width: 991px){
        width: 100%;
        padding: 0;
        text-align: center;
    }

    img {
        width: 100%;
        max-width: 600px;
        height: auto;

        @media screen and (min-width: 500px) and (max-width: 1200px){
            height: auto;
            width: 100%;
            object-fit: contain;
            margin-top: 3vh;
        }

        @media screen and (min-width: 280px) and (max-width: 500px){
            height: 25vh;
            width: 100%;
            object-fit: contain;
            margin-top: 3vh;
        }
    }
`;

export default DownloadNow;
