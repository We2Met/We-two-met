import React from "react";
import Detail from "../Detail";

const Received = ({ data }: any) => {
  console.log(data,"receive")
  return (
    <div>
      {data?.data?.length > 0 &&
        data?.data?.map((item: any) => (
          <>
          <Detail imgData={item?.imgData} userData={item.attributes} />
          </>

        ))}
      {data?.data?.length <= 0 && <p>You have no Likes</p>}
    </div>
  );
};

export default Received;
