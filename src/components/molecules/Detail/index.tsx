import React, { useEffect, useState } from "react";
import Card from "../../atoms/Card";

const Detail = ({ userData, setUserData, isEdit = false }: any) => {
  const [itemData, setItemData] = useState<any>();

  useEffect(() => {
    if (itemData) {
      setUserData((prev: any) => {
        return prev.map((item: any) => {
          if (item.key === itemData.key) {
            return { ...item, value: itemData.value };
          }
          return item;
        });
      });
    }
  }, [itemData]);

  return (
    <div className={"mt-7 flex flex-col w-100 gap-10 flex-wrap"}>
      {userData.map((item: any) => (
        <Card item={item} isEdit={isEdit} setItemData={setItemData} />
      ))}
    </div>
  );
};

export default Detail;
