import React, { useState } from "react";

const Edit = ({ data }: any) => {
  const [images, setImages] = useState(data);

  const closeHandler = (id: any) => {
    const tempImages = images.filter((item: any) => item.id !== id);
    setImages(tempImages);
  };

  return (
    <div className=" flex justify-evenly flex-wrap gap-4">
      {images.map((item: any) => (
        <div className=" relative w-28">
          <span
            className=" absolute right-0 border-2 rounded-3xl p-1 bg-white "
            onClick={() => closeHandler(item.id)}
          >
            x
          </span>
          <img src={item?.src} />
        </div>
      ))}
    </div>
  );
};

export default Edit;
