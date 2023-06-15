import { createContext, FC, ReactNode, useContext, useState } from 'react'

const UserLayoutContext = createContext<IUserLayoutContext | undefined>(undefined)

interface IUserLayoutContext {
  condensed: string | undefined
  toggleCondensed: () => void
}

interface IProps {
  children?: ReactNode
}

export const UserLayoutProvider: FC<IProps> = ({ children }) => {
  const [condensed, setCondensed] = useState<string | undefined>(undefined)

  const toggleCondensed = () => {
    setCondensed(condensed !== 'true' ? 'true' : undefined)
  }

  return (
    <UserLayoutContext.Provider
      value={{
        toggleCondensed,
        condensed,
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
