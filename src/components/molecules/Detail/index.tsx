import React, { useEffect, useState } from "react";
import Card from "../../atoms/Card";
import Images from "../Images";

const Detail = ({imgData, userData, setUserData, isEdit = false }: any) => {
  const [itemData, setItemData] = useState<any>();

  const keys = Object.keys(userData);

  useEffect(() => {
    if (itemData) {
      setUserData({ ...userData, [itemData.key]: itemData.value });
    }
  }, [itemData]);

  return (<>
    {imgData &&  <Images data={imgData} />}

    <div className={"mt-7 flex flex-col w-100 gap-10 flex-wrap"}>
      {keys.map((item: any) => (
        <Card
          item={{ key: item, value: userData[item] }}
          isEdit={isEdit}
          setItemData={setItemData}
        />
      ))}
    </div>
    </>
  );
};

export default Detail;
