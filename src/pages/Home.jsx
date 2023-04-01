import React from 'react';

import styled from 'styled-components';

import HomeBanner from '../components/HomeBanner';

const Home = () => {
    return (
        <>
            <Container>
                <HomeBanner />
            </Container>
        </>
    );
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    overflow-y: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    margin-bottom: 11vh;

    &:after {
        background: url("https://prod-static.disney-plus.net/us-east-1/builds/0dbbdb5797cc274df6952863958f9afdbaa6cf27/node_modules/dss-junglebook/components/themes/images/background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home;
