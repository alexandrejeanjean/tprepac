import React from 'react';
import styled from '@emotion/styled';

import ThemeConf from '../../theme/config';

import Text from '../../shared/Text';
import Button from '../../shared/Button';

const Main = (): JSX.Element => {
    return (
        <MainStyled>
            <JoinNowStyled>
                <Text
                    text="Your luck if you join us now !"
                    fontFamily={ThemeConf.default.fontFamily}
                    fontWeight={ThemeConf.default.fontWeight.bold}
                    fontSize={ThemeConf.default.fontSize.bigBig}
                    maxWidth="20%"
                ></Text>
                <JoinNowCTABlockStyled>
                    <Text
                        text="Lorem lorem lorem lorem lorem lorem lorem lorem lorem."
                        fontFamily={ThemeConf.default.fontFamily}
                        fontWeight={ThemeConf.default.fontWeight.bold}
                        maxWidth="60%"
                    ></Text>
                    <Button />
                </JoinNowCTABlockStyled>
            </JoinNowStyled>
        </MainStyled>
    );
};

const JoinNowCTABlockStyled = styled('div')`
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const JoinNowStyled = styled('section')`
    height: 50vh;
    display: flex;
    justify-content: space-evenly;
`;

const MainStyled = styled('main')`
    min-height: 70vh;
    height: 100%;
`;

export default Main;
