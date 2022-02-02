import React, { useState, useEffect } from "react";
import Image from "./Image";

function Grid() {
  const [images, setImages] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const validCategory = "dog";

  useEffect(() => {
    setRefresh(false);
    let imagesArr = [];
    for (let i = 0; i < 9; i++) {
      let category = i % 2 === 0 ? "dog" : "kitten";
      imagesArr.push({
        category,
        id: i + 1,
      });
    }
    setImages(imagesArr);
  }, [refresh]);

  const changeImage = (id) => {
    const newImages = images.map((image) => {
      if (image.id === id) {
        return {
          ...image,
          category: image.category === "dog" ? "kitten" : "dog",
        };
      } else {
        return image;
      }
    });

    setImages(newImages);
  };

  const checkIsValid = () => {
    console.log("here");
    const newArr = images.filter((image) => image.category === validCategory);
    if (newArr.length === 0) {
      alert("sucess");
      setRefresh(true);
    } else {
      alert("Fail");
      setRefresh(true);
    }
  };
  return (
    <div className="grid">
      {images.map(({ category, id }) => (
        <Image
          changeImage={changeImage}
          key={id}
          id={id}
          validCategory={validCategory}
          url={`https://loremflickr.com/${200}/${200}/${category}`}
          category={category}
        />
      ))}
      <button className="submit" onClick={() => checkIsValid()}>
        Submit
      </button>
    </div>
  );
}

export default Grid;
