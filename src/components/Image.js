import React, { useState } from "react";

function Image({ url, changeImage, id }) {
  const change = () => {
    changeImage(id);
  };
  return (
    <div>
      <img onClick={() => change()} src={url} alt="" />
    </div>
  );
}

export default Image;
