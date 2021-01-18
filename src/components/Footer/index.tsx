import React from 'react';
import styled from '@emotion/styled';

import ThemeConf from '../../theme/config';

const Footer = (): JSX.Element => {
    return (
        <FooterStyled>
            <NavStyled>
                {[
                    { title: 'Certificate', text: 'lorem lorem lorem lorem lorem lorem' },
                    { title: 'Material book', text: 'lorem lorem lorem lorem lorem lorem' },
                    { title: 'Our Mission', text: 'lorem lorem lorem lorem lorem lorem' },
                ].map((item, i) => (
                    <FooterBlockStyled key={'footer_item_' + i}>
                        <FooterHeadingStyled>{item.title}</FooterHeadingStyled>
                        <DescriptionStyled>{item.text}</DescriptionStyled>
                    </FooterBlockStyled>
                ))}
            </NavStyled>
        </FooterStyled>
    );
};

const DescriptionStyled = styled('p')`
    max-width: 40%;
    color: ${ThemeConf.default.links.color};
    font-family: ${ThemeConf.default.fontFamily};
    font-weight: ${ThemeConf.default.links.fontWeight};
`;

const FooterHeadingStyled = styled('p')`
    font-family: ${ThemeConf.default.fontFamily};
    font-weight: ${ThemeConf.default.fontWeight.bold};
    font-size: ${ThemeConf.default.fontSize.small};
    margin-bottom: -0.2em;
    position: relative;
    &::before {
        display: block;
        content: '';
        position: absolute;
        top: 0.2em;
        left: -1.6em;
        background: ${ThemeConf.default.extraColor};
        height: 0.9em;
        width: 0.125em;
        border-radius: 0.2em;
    }
`;

const FooterBlockStyled = styled('div')`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

const NavStyled = styled('nav')`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;

const FooterStyled = styled('footer')`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
`;

export default Footer;
