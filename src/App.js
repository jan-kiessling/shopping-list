import "./App.css";
import { ItemData } from "./data";
import List from "./List";
import { useState } from "react";

function App() {
  const [articles, setarticles] = useState(ItemData);

  function handleOnDelete(articleId) {
    setarticles(articles.filter((article) => article._id !== articleId));
  }
  return (
    <div className="App">
      <h1>Shopping-List</h1>
      <List delete = {handleOnDelete}initialItems={articles} />
    </div>
  );
}

export default App;
