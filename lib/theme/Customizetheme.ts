import { extendTheme } from 'native-base';

const theme = extendTheme({

    colors: {

        // Add new color
        primary: {
            100: '#C5E4F3',
            200: '#A2D4EC',
            300: '#7AC1E4',
            400: '#47A9DA',
            500: '#25A9B6',
            600: '#007AB8',
            700: '#006BA1',
            800: '#005885',
            900: '#2E3131',
        },

        green: {
            100: '#6CC5FF',
            200: '#6CC5FF',
            300: '#25A9B6',
            400: '#25A9B6',
            500: '#25A9B6',
            600: '#25A9B6',
            700: '#25A9B6',
            800: '#25A9B6',
            900: '#25A9B6',
        },


        border: {
            100: '#828282',
            200: '#A2D4EC',
            300: '#7AC1E4',
            400: '#47A9DA',
            500: '#25A9B6',
            600: '#007AB8',
            700: '#006BA1',
            800: '#005885',
            900: '#2E3131',
        },
        // amber: {
        //     400: '#d97706',
        // },
    },

    components: {
        Button: {
            // Can simply pass default props to change default behaviour of components.
            baseStyle: {
                rounded: 'md',
            },
            defaultProps: {
                colorScheme: 'primary',
                borderRadius: '30px',
                _text:{
                    color: '#ffffff'
                },
                bg: '#6CC5FF'
            },
        },
        Box: {
            defaultProps: {
                // backgroundColor:"white"
            },
        },
        Link: {
            baseStyle: ({ colorMode }) => {
                return {
                    _text: {
                        color: 'black',
                        fontWeight: 'medium',
                        fontSize: 'sm',
                    },
                };
            },
        },
        Heading: {
            // Can pass also function, giving you access theming tools
            baseStyle: ({ colorMode }) => {
                return {
                    color: colorMode === 'dark' ? 'red.300' : 'primary.900',
                    fontWeight: 'bold',
                    fontSize: '24px',
                    textAlign: 'center',
                    fontFamily: 'Poppins',
                };
            },
        },
        Input: {
            // Can pass also function, giving you access theming tools
            baseStyle: ({ colorMode }) => {
                return {
                    borderColor: 'border.100',
                    borderRadius: '30px',
                };
            },
        },
    },

    config: {
        // Changing initialColorMode to 'dark'
        initialColorMode: 'light',
    },
})

export default theme;