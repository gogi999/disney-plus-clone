import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';

import Slider from 'react-slick';
import styled from 'styled-components';

import { HomeBannerAPI } from '../API/localAPI';

const HomeBanner = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (
        <>
            <CarouselImgs { ...settings }>
                {HomeBannerAPI?.map((val, i) => (
                    <Wrap key={i}>
                        <div>
                            <img src={val.slideSrc} alt="slide/imgs" />
                        </div>
                    </Wrap>
                ))}
            </CarouselImgs>
        </>
    );
}

const CarouselImgs = styled(Slider)`
    margin-top: 20px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;
        &:hover {
        opacity: 1;
        transition: opacity 0.2s ease 0s;
        }
    }

    ul li button {

        &:before {
        font-size: 10px;
        color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: initial;
    }
    .slick-prev {
        left: -75px;
    }
    .slick-next {
        right: -75px;
    }
`;

const Wrap = styled.div`
    position: relative;

    > .slide-img {
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
            object-fit: cover;

            @media screen and (min-width: 375px) and (max-width: 550px){
                width: 100%;
                height: 15vh;
                object-fit: fill;
            }

            @media screen and (min-width: 280px) and (max-width: 375px){
                width: 100%;
                height: 17vh;
                object-fit: fill;
            }
        }

        &:hover {
            padding: 0;
            border: 4px solid rgba(249, 249, 249, 0.8);
            transition-duration: 300ms;
        }
    }
`;

export default HomeBanner;
