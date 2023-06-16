import { createContext, FC, ReactNode, useContext, useState } from 'react'

const UserLayoutContext = createContext<IUserLayoutContext | undefined>(undefined)

interface IUserLayoutContext {
  condensed: string | undefined
  darkMode: string
  toggleCondensed: () => void
  toggleDarkMode: () => void
}

interface IProps {
  children?: ReactNode
}

export const UserLayoutProvider: FC<IProps> = ({ children }) => {
  const [condensed, setCondensed] = useState<string | undefined>(undefined)
  const [darkMode, setDarkMode] = useState<string>(localStorage.getItem('darkMode') || 'Off')

  const toggleCondensed = () => {
    setCondensed(condensed !== 'true' ? 'true' : undefined)
  }

  const toggleDarkMode = () => {
    const value = darkMode === 'Off' ? 'On' : 'Off'
    setDarkMode(value)
    localStorage.setItem('darkMode', value)
  }

  return (
    <UserLayoutContext.Provider
      value={{
        condensed,
        darkMode,
        toggleCondensed,
        toggleDarkMode,
      }}
    >
      {children}
    </UserLayoutContext.Provider>
  )
}

export const useUserLayoutContext = () => {
  const context = useContext(UserLayoutContext)
  if (context === undefined) {
    throw new Error('useUserLayoutContext must be used within a UserLayoutProvider')
  }
  return context
}
