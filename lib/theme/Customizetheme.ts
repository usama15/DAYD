import { extendTheme } from 'native-base';

const theme = extendTheme({

    colors: {

        // Add new color
        primary: {
            100: '#ec4899',
            200: '#FFC0CB',

        },

        secondary: {
            100: '#FFC0CB',
        },
        green: {
            100: '#FFC0CB',
        },
        
        
        border: {
            100: '#FFC0CB',
            
        },
        amber: {
            100: '#FFC0CB',
            // 400: '#d97706',
        },
    },

    components: {
        Button: {
            // Can simply pass default props to change default behaviour of components.
            baseStyle: {
                rounded: 'md',
            },
            defaultProps: {
                colorScheme: 'secondary',
                borderRadius: '30px',
                _text: {
                    // color: '#ffffff'
                },
                bg: 'primary.200'
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
                    color: colorMode === 'dark' ? 'red.200' : 'primary.100',
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
                    borderColor: 'primary.200',
                    borderRadius: '30px',
                    colorScheme: 'secondary',
                    _focus:{
                        borderColor: 'primary.100',
                        
                    }
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