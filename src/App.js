import Home from '../src/components/home'
import '../src/styles/bootstrap.min.css'
import "./styles/styles.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
