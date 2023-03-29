import React from 'react';

import styled from 'styled-components';

import Banner from '../components/Banner';
import Stream from '../components/Stream';

const Login = () => {
    return (
        <>
            <Main>
                <Banner />
                <Stream />
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
