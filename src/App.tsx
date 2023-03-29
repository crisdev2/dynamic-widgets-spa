import { ThemeProvider } from '@mui/material'
import UserLayout from './components/layout'
import { customTheme } from './utilities/theme'
import { MainProvider } from './context/mainContext'
import 'normalize.css'

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <MainProvider>
        <UserLayout />
      </MainProvider>
    </ThemeProvider>
  )
}

export default App