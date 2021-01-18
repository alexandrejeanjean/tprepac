import React from 'react';
import styled from '@emotion/styled';

import ThemeConf from '../theme/config';

type TTheme = {
    children: React.ReactNode;
};

const Theme = ({ children }: TTheme): JSX.Element => {
    return (
        <ThemeStyled>
            <GrayBGStyled></GrayBGStyled>
            {children}
        </ThemeStyled>
    );
};

const GrayBGStyled = styled('div')`
    width: 60%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: ${ThemeConf.default.rightBg};
`;

const ThemeStyled = styled('div')`
    width: 80vw;
    margin: auto;
`;

export default Theme;
