import { ThemeContextProvider } from "./contexts/ThemeContext"

import { Router } from "./Routes"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Router />
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
