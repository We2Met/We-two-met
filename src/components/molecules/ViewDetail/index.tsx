import birthday_icon from "../../../../public/assets/svg/birthday.svg";
import ValueIcon from "../../atoms/value";

const ViewDetail = () => {
  return (
    <div className="mt-8 p-2 gap-4 flex-wrap flex items-center ">
      <ValueIcon right={true} value="22" icon={birthday_icon.src} />
      <ValueIcon right={true} value="22" icon={birthday_icon.src} />
      <ValueIcon right={true} value="22" icon={birthday_icon.src} />
      <ValueIcon right={true} value="22" icon={birthday_icon.src} />
      <ValueIcon right={true} value="22" icon={birthday_icon.src} />
    </div>
  );
};

export default ViewDetail;
