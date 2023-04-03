import React from 'react';

import styled from 'styled-components';

import { BrandAPI } from '../API/localAPI';

const Brand = () => {
    return (
        <>
            <Container>
                {BrandAPI?.map((val, i) => (
                    <Wrap key={i}>
                        <img src={val.imgSrc} alt="img/brand" />
                        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                            <source src={val.videoSrc} type="video/mp4"></source>
                        </video>
                    </Wrap>
                ))}
            </Container>
        </>
    );
}

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(6, minmax(0, 1fr));

    @media screen and (min-width: 768px) and (max-width: 1200px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-gap: 15px;
        gap: 15px;
    }

    @media screen and (max-width: 767px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-gap: 11px;
        gap: 11px;
    }
`;

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    border: 3px solid rgba(249, 249, 249, 0.1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    
    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
        border-radius: 10px;
    }

    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
        border-radius: 10px;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

        video {
            opacity: 1;
        }
    }
`;

export default Brand;
