import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


const GifApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

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
