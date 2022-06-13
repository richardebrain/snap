import SnapLogo from "../public/images/logo.svg";
import OpenMenu from "../public/images/icon-menu.svg";
import CloseMenu from "../public/images/icon-close-menu.svg";
import Up from "../public/images/icon-arrow-up.svg";
import Down from "../public/images/icon-arrow-down.svg";
import Button from "./Button";
import Sidebar from "./Sidebar";

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

            <span className="cursor-pointer ">
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
          }  cursor-pointer block md:hidden`}
          onClick={ToggleSidebar}
          
        >
          <OpenMenu />
          {/* {!sidebar ? <OpenMenu /> : <CloseMenu />} */}
        </div>
      </div>
      {/* sidebar  */}
      {sidebar ? <Sidebar ToggleSidebar={ToggleSidebar} sidebar={sidebar} />  : null}
      
    </header>
  );
};

export default Header;
