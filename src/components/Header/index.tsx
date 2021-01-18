import React from 'react';
import styled from '@emotion/styled';

import Text from '../../shared/Text';
import ThemeConf from '../../theme/config';

const Header = (): JSX.Element => {
    return (
        <HeaderStyled>
            <BrandStyled>
                <Text
                    text="Seminarin"
                    fontWeight={ThemeConf.default.fontWeight.bold}
                    fontSize={ThemeConf.default.fontSize.medium}
                />
            </BrandStyled>
            <NavStyled>
                {['Home', 'Events', 'Features', 'Demo', 'Contact us'].map((link, i) => (
                    <LinkStyled href="#" key={'header_nav_link_' + i} title={'link to ' + link}>
                        {link}
                    </LinkStyled>
                ))}
            </NavStyled>
        </HeaderStyled>
    );
};

const LinkStyled = styled('a')`
    color: ${ThemeConf.default.links.color};
    font-family: ${ThemeConf.default.fontFamily};
    font-weight: ${ThemeConf.default.links.fontWeight};
    text-decoration: none;
    margin-top: 0.4em;
    padding-bottom: 0.4em;
    border-bottom: 0.2em solid transparent;
    &:hover,
    &:focus {
        border-bottom: 0.2em solid ${ThemeConf.default.links.focusColor};
    }
    cursor: pointer;
`;

const NavStyled = styled('nav')`
    min-width: 600px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const BrandStyled = styled('div')`
    max-width: 200px;
    width: 100%;
    display: flex;
    align-items: center;
`;

const HeaderStyled = styled('header')`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export default Header;
