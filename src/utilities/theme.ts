import { createTheme } from '@mui/material'

const theme = (darkMode?: boolean) => ({
  color: {
    primary: '#727cf5',
    secondary: '#0acf97',
    success: '#0acf97',
    error: '#fa5c7c',
    warning: '#ffbc00',
    info: '#3095b2',
    light: '#eef2f7',
    dark: '#313a46',
    pageTitle: darkMode ? '#ffffff' : '#6c757d',
  },
  navbar: {
    menu: darkMode ? '#ffffff' : '#313a46',
  },
  breadcrumb: {
    icon: '#ced4da',
    item: '#adb5bd',
  },
  menu: {
    item: '#8391a2',
    hover: '#bccee4',
    active: '#ffffff',
  },
  bg: {
    sidebar: darkMode ? '#3a444e' : '#313a46',
    sidebar2: '#29313b',
    header: '#ffffff',
    body: darkMode ? '#343a41' : '#f8f9fc',
    content: darkMode ? '#37404a' : '#ffffff',
  },
})

export const customTheme = (darkMode: boolean) => createTheme({
  spacing: 4,
  typography: {
    fontSize: 13,
    fontFamily: ['"Nunito"', 'sans-serif'].join(','),
    h1: {
      fontSize: 36,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    h4: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    h5: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    h6: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    body2: {
      fontSize: 14,
    },
  },
  palette: {
    mode: darkMode ? 'dark' : 'light',
    primary: {
      main: theme(darkMode).color.primary,
      contrastText: '#ffffff',
    },
    secondary: {
      main: theme(darkMode).color.secondary,
      contrastText: '#ffffff',
    },
    success: {
      main: theme(darkMode).color.success,
      contrastText: '#ffffff',
    },
    error: {
      main: theme(darkMode).color.error,
      contrastText: '#ffffff',
    },
    warning: {
      main: theme(darkMode).color.warning,
      contrastText: '#ffffff',
    },
    info: {
      main: theme(darkMode).color.info,
      contrastText: '#ffffff',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          cursor: 'default',
          paddingLeft: 30,
          paddingRight: 30,
          backgroundColor: 'transparent',
          color: theme(darkMode).menu.item,
          textTransform: 'uppercase',
          fontSize: 11,
          letterSpacing: '.05em',
          fontWeight: 700,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          paddingLeft: 30,
          paddingRight: 30,
          transition: 'all .4s',
          '&:hover': {
            backgroundColor: theme(darkMode).bg.sidebar,
            color: theme(darkMode).menu.hover,
          },
          '&.active': {
            color: theme(darkMode).menu.active,
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 30,
          color: 'inherit',
        },
      },
    },
  },
})

export default theme
