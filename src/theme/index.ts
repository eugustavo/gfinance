import { extendTheme } from 'native-base'

export const THEME = extendTheme({
  colors: {
    background: '#120041',
    primary: {
      500: '#FEFCFD',
      700: '#897DAA',
      900: '#281B54'
    },
    secondary: '#CDD9F8',
    withdraw: '#FC76E6',
    deposit: '#94ff9b',
    text: '#FFFFFF'
  },
  fonts: {
    subtitle: 'Poppins_400Regular',
    body: 'Poppins_500Medium',
    heading: 'Poppins_600SemiBold',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148
  }
})