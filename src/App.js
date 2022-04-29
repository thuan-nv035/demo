import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddPosts from "./pages/Posts/AddPosts";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route to = "/addposts" element = {<AddPosts/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
