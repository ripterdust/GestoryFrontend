import { BrowserRouter } from "react-router-dom"
import { MainRouter } from "./router/MainRouter"

export const App : React.FC = () => {
  return <BrowserRouter>
    <MainRouter />
  </BrowserRouter>
}
