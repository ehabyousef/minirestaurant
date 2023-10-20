import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import { item } from "./Component/Data";
import { useState } from "react";
function App() {
  const [itemData, setItemData] = useState(item);
  const allcateg = ["الكل", ...new Set(item.map((i) => i.category))];
  const filterbyCategory = (cat) => {
    if (cat === "الكل") {
      setItemData(item);
    } else {
      const newarr = item.filter((item) => item.category === cat);
      setItemData(newarr);
    }
  };

  const bySearch = (word) => {
    if (word !== "") {
      const newarr = item.filter((item) => item.title === word);
      setItemData(newarr);
    }
  };
  return (
    <>
      <Navbar bySearch={bySearch} />
      <Header allcateg={allcateg} filterbyCategory={filterbyCategory} />
      <Home itemData={itemData} />
    </>
  );
}

export default App;
