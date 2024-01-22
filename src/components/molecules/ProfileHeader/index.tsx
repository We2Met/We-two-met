import React from "react";

const ProfileHeader = ({ data, setView }: any) => {
  const onClickHandler = (title: any) => {
    if (title === "View") {
      setView(true);
    } else {
      setView(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl">{data.name}</h1>
      <div className="flex justify-between m-10">
        {data.items.map((item: any) => (
          <a onClick={() => onClickHandler(item.title)}>{item.title}</a>
        ))}
      </div>
    </div>
  );
};

export default ProfileHeader;
