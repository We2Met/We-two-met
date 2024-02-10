import React, { useState } from "react";

const ProfileHeader = ({ data, setView }: any) => {
  const [active, setActive] = useState<number>(0);

  const onClickHandler = (title: any, ind: number) => {
    setActive(ind);
    if (title === "View") {
      setView(true);
    } else {
      setView(false);
    }
  };

  return (
    <div>
      <div className=" mt-2 border-b-2 mx-auto">
        <h2 className="text-2xl py-2 text-center">{data.name}</h2>
      </div>
      <div className="flex justify-between my-2 m-10">
        {data.items.map((item: any, ind: number) => (
          <a onClick={() => onClickHandler(item.title, ind)}>
            <span
              className={`${
                ind === active && "border-b-2 border-red text-red-500"
              }`}
            >
              {item.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfileHeader;
