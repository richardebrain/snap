import SnapLogo from "../public/images/logo.svg";
import OpenMenu from "../public/images/icon-menu.svg";
import CloseMenu from "../public/images/icon-close-menu.svg";
import Up from "../public/images/icon-arrow-up.svg";
import Down from "../public/images/icon-arrow-down.svg";
import Button from "./Button";

import { useState } from "react";
import FeaturesList from "./FeaturesList";
import CompanyList from "./CompanyList";

const Header = () => {
  const [Features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const ToggleFeatures = () => {
    setFeatures(!Features);
  };
  const ToogleCompany = () => {
    setCompany(!company);
  };
  const ToggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <header className="my-6 flex justify-between  items-center mx-5 max-h-24 text-mediumGray mb-20 md:mx-20 sm:my-18">
      <div className=" min-w-fit ">
        <SnapLogo />
      </div>

      <div className="flex justify-between items-center  md:w-10/12">
        <div className=" hidden w-full justify-between items-center space-x-5 md:flex">
          <div className="flex justify-between items-center w-2/5 font-semibold">
            <div className="relative">
              <span
                className="cursor-pointer relative flex justify-between items-center space-x-2 hover:text-almostBlack"
                onClick={ToggleFeatures}
              >
                <h4>Features</h4>
                <div className="hover:text-almostBlack">
                  {!Features ? <Down /> : <Up />}
                </div>
              </span>
              {Features ? <FeaturesList /> : null}
            </div>

            <div className="relative">
              <span
                className="cursor-pointer flex  justify-between items-center space-x-2 hover:text-almostBlack"
                onClick={ToogleCompany}
              >
                <h4>Company</h4>
                <div className="hover:text-almostBlack">
                  {!company ? <Down /> : <Up />}
                </div>
              </span>
              {company ? <CompanyList /> : null}
            </div>

            <span className="cursor-pointer hover:text-almostBlack">
              <h4>Careers</h4>
            </span>
            <span className="cursor-pointer  hover:text-almostBlack">
              <h4>About</h4>
            </span>
          </div>
          <div className="flex justify-between items-center font-semibold align-left w-50">
            <Button className="px-3 py- text-sm cursor-pointer hover:text-almostBlack ">
              Login
            </Button>
            <Button className="px-3 py-2 border-solid cursor-pointer border mx-8 rounded-lg border-mediumGray text-sm hover:border-almostBlack hover:text-almostBlack">
              Register
            </Button>
          </div>
        </div>
        <div
          className={`${
            sidebar
              ? "rotate-180 duration-300 ease- out"
              : "duration-300 ease-in-out rotate-0"
          } block md:hidden`}
          onClick={ToggleSidebar}
        >
          {!sidebar ? <OpenMenu /> : <CloseMenu />}
        </div>
      </div>
      {/* sidebar  */}
      <div className=" flex items-start flex-col  fixed right-0 bg-white h-full w-2/3  z-10 overflow-x-hidden mt-[618px]   text-mediumGray space-y-24">
        <div id="close-btn">
          <CloseMenu className="absolute top-6 right-5 " />
        </div>
        <div id="nav-content" className=" mx-auto w-3/4 space-y-4">
          <div className="cursor-pointer font-bold flex justify-between items-center space-x-2 hover:text-almostBlack">
            <div className="flex w-2/3 items-center space-x-5">
              <h4>Features</h4>
              <Down />
            </div>
          </div>
          <div className="cursor-pointer font-bold flex justify-between items-center space-x-2 hover:text-almostBlack">
            <div className="flex w-2/3 items-center space-x-3">
              <h4>Company</h4>
              <Down />
            </div>
          </div>
          <div className="cursor-pointer font-bold  hover:text-almostBlack">
            <h4>Careers</h4>
          </div>
          <div className="cursor-pointer font-bold hover:text-almostBlack">
            <h4>About</h4>
          </div>
        </div>
        <div id="users" className="flex flex-col self-center  space-y-5">
          <Button className="px-3  text-lg cursor-pointer hover:text-almostBlack ">
            Login
          </Button>
          <Button className="px-16 py-2 border-solid cursor-pointer border-2 mx-8 rounded-xl font-bold border-mediumGray text-sm  hover:border-almostBlack hover:text-almostBlack ">
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
