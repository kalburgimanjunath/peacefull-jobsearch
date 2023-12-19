import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Search, Jobs } from "./components/index";
function App() {
  const [searchTxt, setSearch] = useState("");

  return (
    <div className="App">
      <div>{searchTxt}</div>
      <Search search={searchTxt} setSearch={setSearch} />
      <Jobs />
    </div>
  );
}

export default App;
