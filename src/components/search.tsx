import { useState } from "react";
export default function Search({ search, setSearch }) {
  const [resultSearch, setResultSearch] = useState([]);
  const addtoStorage = (value: string) => {
    localStorage.setItem("searchTxt", value);
    setResultSearch([value, ...resultSearch]);
  };
  const getResults = () => {
    setResultSearch(localStorage.getItem("searchTxt"));
  };
  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        onChange={(e) => {
          setSearch(e.target.value);
          addtoStorage(e.target.value);
        }}
      />
      <div>
        {resultSearch && resultSearch.length > 0 && search.length > 0
          ? resultSearch.map((item) => {
              return <div>{item}</div>;
            })
          : null}
      </div>
      <button type="button" name="button" id="searchbutton">
        Search
      </button>
    </div>
  );
}
