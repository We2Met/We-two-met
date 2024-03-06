import { useState } from "react";

const Card = ({ item, setItemData, isEdit = false }: any) => {
  const [showInp, setShowInp] = useState(false);
  const [value, setValue] = useState(item?.value);
  const clickHandler = () => {
    if (isEdit) {
      setShowInp(true);
    }
  };
  console.log(item,"hee")

  const submitHandler = () => {
    setShowInp(false);
    setItemData({ key: item.key, value: value });
  };

  return (
    <>
      <div
        className={"flex flex-row justify-between gap-5 border-2 p-4"}
        onClick={clickHandler}
      >
        <h1 className=" text-2xl">{item?.key}</h1>
        {!showInp && <p>{value}</p>}
        {showInp && (
          <input
            className="border-2 "
            defaultValue={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
      </div>
      {showInp && <button onClick={submitHandler}>Submit</button>}
    </>
  );
};

export default Card;
