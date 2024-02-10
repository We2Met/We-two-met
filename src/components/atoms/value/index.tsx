const ValueIcon = ({ icon, value }: any) => {
  return (
    <div className="flex bg-white border rounded-full w-fit py-2 px-4 items-center gap-2">
      <img className="w-[18px] h-[18px]" src={icon} alt="value-icon" />
      <div className="text-md text-black">{value}</div>
    </div>
  );
};

export default ValueIcon;
