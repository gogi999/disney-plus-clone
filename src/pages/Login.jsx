import React from 'react';

import styled from 'styled-components';

import Advertise from '../components/Advertise';
import Banner from '../components/Banner';
import Devices from '../components/Devices';
import DownloadNow from '../components/DownloadNow';
import GridTheme from '../components/GridTheme';
import Groupwatch from '../components/Groupwatch';
import MarvelStudio from '../components/MarvelStudio';
import Stream from '../components/Stream';

const Login = () => {
    return (
        <>
            <Main>
                <Banner />
                <Stream />
                <Groupwatch />
                <MarvelStudio />
                <GridTheme />
                <DownloadNow />
                <Advertise />
                <Devices />
            </Main>
        </>
    );
}

const Main = styled.main`
    width: auto;
    height: auto;
    overflow: auto;
`;

export default Login;
