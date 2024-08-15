import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Dragon Ball",
    "Dragon Ball Z",
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifAPP</h1>

      <AddCategory
        onNewCategory={onAddCategory} // vincula el evento onNewCategory con la función onAddCategory
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifApp;
