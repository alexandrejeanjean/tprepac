import React from 'react';
import styled from '@emotion/styled';

import Theme from '../../theme/config';

type TProps = {
    display?: string;
    text: string;
    fontFamily?: string;
    fontSize?: string;
    color?: string;
    fontWeight?: string;
    underlined?: string;
    maxWidth?: string;
};
const Text = (props: TProps): JSX.Element => {
    const { text } = props;
    return <TextStyled {...props}>{text}</TextStyled>;
};

const TextStyled = styled('p')`
    max-width: ${(props: TProps) => (props.maxWidth ? props.maxWidth : '100%')};
    display: ${(props: TProps) => (props.display ? props.display : 'inline')};
    font-family: ${(props: TProps) => (props.fontFamily ? props.fontFamily : Theme.default.fontFamily)};
    font-size: ${(props: TProps) => (props.fontSize ? props.fontSize : Theme.default.fontSize.default)};
    font-weight: ${(props: TProps) => (props.fontWeight ? props.fontWeight : Theme.default.fontWeight.default)};
    color: ${(props: TProps) => (props.color ? props.color : Theme.default.color)};
    text-decoration: ${(props: TProps) => (props.underlined ? props.underlined : 'none')};
    margin: 0;
`;

export default Text;
