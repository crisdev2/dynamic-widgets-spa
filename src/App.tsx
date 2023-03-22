import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@mui/material'
import styled from '@emotion/styled'
import { useParams, useNavigate } from 'react-router-dom';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App = () => {
  const [count, setCount] = useState(0)
  const params = useParams();
  const navigate = useNavigate();
  console.log('params',params['*'])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title>Vite + React + MUI + Styled components</Title>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <Button variant="contained" onClick={() => navigate(`/random/${(Math.random()*1000).toFixed()}`)}>MUI Random</Button>
        <Button color="secondary" variant="contained" onClick={() => navigate(`/contra/contractual/edit/1`)}>MUI Contra</Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
