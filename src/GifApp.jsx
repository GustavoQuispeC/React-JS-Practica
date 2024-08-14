import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Dragon Ball",
    "Dragon Ball Z",
  ]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifAPP</h1>

      <AddCategory
        //setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      <ol>
        {categories.map((x) => {
          return <li key={x}>{x}</li>;
        })}
      </ol>
    </>
  );
};

export default GifApp;
