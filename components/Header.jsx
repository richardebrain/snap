import SnapLogo from "../public/images/logo.svg";
import OpenMenu from "../public/images/icon-menu.svg";
import CloseMenu from "../public/images/icon-close-menu.svg";
import Button from "./Button";

const Header = () => {
  return (
    <header className="my-10 flex justify-between mx-auto items-center mx-5 max-h-24 text-mediumGray">
      <div className=" min-w-fit ">
        <SnapLogo />
      </div>

      <div className="flex justify-between items-center  md:w-4/5">
        <div className=" hidden w-full justify-between items-center space-x-5 md:flex">
          <div className="flex justify-between items-center w-2/5 font-semibold">
            <span>
              <h3>Features</h3>
            </span>
            <span>
              <h3>Company</h3>
            </span>
            <span>
              <h3>Careers</h3>
            </span>
            <span>
              <h3>About</h3>
            </span>
          </div>
          <div className="flex justify-between items-center font-semibold align-left w-50">
            <Button className='px-3 py- text-sm hover:text-almostBlack'>Login</Button>
            <Button className='px-3 py-2 border-solid border mx-8 rounded-lg border-mediumGray text-sm hover:border-almostBlack hover:text-almostBlack'>Register</Button>
          </div>
        </div>
        <div className="block md:hidden">
        <OpenMenu />
        </div>
        
      </div>
    </header>
  );
};

export default Header;
