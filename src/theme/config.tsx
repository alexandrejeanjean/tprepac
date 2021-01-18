import * as Colors from '../constant/colors';

const Theme = {
    default: {
        rightBg: Colors.bg,
        fontFamily: 'Nunito',
        fontSize: {
            default: '1.2em',
            small: '1em',
            medium: '1.6em',
            big: '2em',
            bigBig: '3em',
            heading: {
                h1: '3em',
            },
        },
        fontWeight: {
            light: '300',
            default: '400',
            medium: '600',
            bold: '800',
        },
        color: Colors.primary,
        extraColor: Colors.extra,
        links: {
            color: Colors.secondary,
            fontWeight: '800',
            focusColor: Colors.tertiary,
        },
        buttons: {
            submitButton: `${Colors.secondary} 0% 0% no-repeat padding-box`,
            socialButton: `${Colors.tertiary} 0% 0% no-repeat padding-box;`,
        },
        inputs: {
            background: `${Colors.tertiary} 0% 0% no-repeat padding-box`,
        },
    },
};

export default Theme;
