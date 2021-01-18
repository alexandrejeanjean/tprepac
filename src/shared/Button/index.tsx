import React from 'react';
import styled from '@emotion/styled';

import ThemeConf from '../../theme/config';

import Text from '../../shared/Text';

const Button = (): JSX.Element => {
    const _handleClick = () => {
        alert('Back to the past !');
    };
    return (
        <ButtonStyled onClick={_handleClick}>
            <Text
                text="Join now !"
                fontFamily={ThemeConf.default.fontFamily}
                fontWeight={ThemeConf.default.fontWeight.bold}
                color="#fff"
            />
        </ButtonStyled>
    );
};

const ButtonStyled = styled('button')`
    width: 140px;
    height: 60px;
    background: ${ThemeConf.default.links.focusColor};
    color: #fff;
    border: none;
    margin-top: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export default Button;
