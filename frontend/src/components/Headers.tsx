import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-blue-900 py-2 px-8 flex justify-between items-center">
      <Link to={"/"}>
        <img src="logo.png" alt="" className="h-[50px] " />
      </Link>
      <div className="items-center gap-4 hidden sm:flex">
        <Link to={""} className="text-white underline hover:text-yellow-400">
          Link1
        </Link>
        <Link to={""} className="text-white underline hover:text-yellow-400">
          Link1
        </Link>
        <Link to={""} className="text-white underline hover:text-yellow-400">
          Link1
        </Link>
        <Link to={""} className="text-white underline hover:text-yellow-400">
          Link1
        </Link>
      </div>
      <div className="hidden sm:inline-block">
        <Link
          to={""}
          className="text-white  hover:underline bg-gradient-to-b from-[#F57B6F] to-[#FEACA3] rounded-md py-2 px-6 mr-4"
        >
          Login
        </Link>
        <Link
          to={""}
          className="text-white hover:underline bg-[#2FBEB7] rounded-md py-2 px-6  "
        >
          SignUp
        </Link>
      </div>

      {!menuOpen ? (
        <GiHamburgerMenu
          className="sm:hidden text-white text-3xl"
          onClick={() => setMenuOpen(true)}
        />
      ) : (
        <div className="sm:hidden fixed inset-0 right-0 w-screen h-screen flex flex-col gap-6 bg-black/80 p-10">
          <RxCross2
            className="sm:hidden text-3xl text-white self-end"
            onClick={() => setMenuOpen(false)}
          />
          <Link to={""} className="text-white underline hover:text-yellow-400">
            Link1
          </Link>
          <Link to={""} className="text-white underline hover:text-yellow-400">
            Link1
          </Link>
          <Link to={""} className="text-white underline hover:text-yellow-400">
            Link1
          </Link>
          <Link to={""} className="text-white underline hover:text-yellow-400">
            Link1
          </Link>

          <Link
            to={""}
            className="text-white  hover:underline bg-gradient-to-b from-[#F57B6F] to-[#FEACA3] rounded-md py-2 px-6 mr-4 w-fit"
          >
            Login
          </Link>
          <Link
            to={""}
            className="text-white hover:underline bg-[#2FBEB7] rounded-md py-2 px-6 w-fit "
          >
            SignUp
          </Link>
        </div>
      )}
    </div>
  );
}
