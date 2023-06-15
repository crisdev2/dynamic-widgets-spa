import { ThemeProvider } from '@mui/material'
import { customTheme } from './utilities/theme'
import { MainProvider } from './context/mainContext'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import UserLayout from './components/layout/user/UserLayout'
import 'normalize.css'

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <MainProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <UserLayout />
        </LocalizationProvider>
      </MainProvider>
    </ThemeProvider>
  )
}

export default App