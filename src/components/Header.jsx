import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-2 ">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex gap-2 items-center">
        <DarkModeSwitch />
        <span className="text-2xl font-bold bg-amber-600 py-1 px-2 rounded-lg">
          IMDB
        </span>
        <p className="">Clone</p>
      </div>
    </div>
  );
}
