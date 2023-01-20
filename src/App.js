import Home from '../src/components/home'

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
