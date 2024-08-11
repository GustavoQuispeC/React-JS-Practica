import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

    const onAddCategory = () => {
      const NewCategories = [...categories, "Valorant"];
      setCategories(NewCategories);
    };

  return (
    <>
      <h1>GifAPP</h1>

      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((x) => {
          return <li key={x}>{x}</li>;
        })}
      </ol>
    </>
  );
};

export default GifApp;
