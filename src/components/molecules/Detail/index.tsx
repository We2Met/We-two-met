import React from "react";
import Card from "../../atoms/Card";

const Detail = ({ data, isEdit = false }: any) => {
  return (
    <div
      className={"mt-7 flex flex-col w-100 gap-10 flex-wrap"}
    >
      {data.map((item: any) => (
        <Card item={item} isEdit={isEdit} />
      ))}
    </div>
  );
};

export default Detail;
