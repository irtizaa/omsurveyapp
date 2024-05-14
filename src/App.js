import logo from "./logo.svg";
import "./App.css";
import GetData from "./components/GetData";
import EditData from "./components/EditData";
import EditDataNew from "./components/EditFormNew";
import CreateComponentSideWork from "./components/CreateComponentSideWork";
import Create from "./components/Create";
import CreateNew from "./components/CreateNew";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetData />} />
        <Route path="/edit/:id" element={<EditDataNew />} />
        {/* <Route path="/edit/:id" element={<EditData />} /> */}
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
