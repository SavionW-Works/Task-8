import { getCurrentUser } from "../utils/data";
import Image from "next/image";
const { name, email } = getCurrentUser();
import icon from "../images/image_1.png";
const TopContent = () => {
  return (
    <div className="w-96 h-12 text-5xl grid justify-items-center text-center leading-10 pt-7 mb-7 ">
      <Image src={icon} className="" alt="User Icon" width={145} height={145} />
      <p>{name}</p>
    </div>
  );
};

export default TopContent;
