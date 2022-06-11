import SnapLogo from "../public/images/logo.svg";
import OpenMenu from "../public/images/icon-menu.svg";
import CloseMenu from "../public/images/icon-close-menu.svg";
import Up from "../public/images/icon-arrow-up.svg";
import Down from "../public/images/icon-arrow-down.svg";
import Button from "./Button";
import TodoIcon from "../public/images/icon-todo.svg";
import ReminderIcon from "../public/images/icon-reminders.svg";
import PlanningIcon from "../public/images/icon-planning.svg";
import CalendarIcon from "../public/images/icon-calendar.svg";

const Header = () => {
  return (
    <header className="my-10 flex justify-between  items-center mx-20 max-h-24 text-mediumGray ">
      <div className=" min-w-fit ">
        <SnapLogo />
      </div>

      <div className="flex justify-between items-center  md:w-4/5">
        <div className=" hidden w-full justify-between items-center space-x-5 md:flex">
          <div className="flex justify-between items-center w-2/5 font-semibold">
            <span className="cursor-pointer relative flex justify-between items-center space-x-2 hover:text-almostBlack">
              <h4>Features</h4>
              <div className="hover:text-almostBlack">
                <Up className="hidden" />
                <Down />
              </div>
              <div
                id="content-dropdown  "
                className="flex flex-col justify-between items-center space-y-3 absolute top-8 -left-16 text-mediumGray text-sm w-36 bg-white border shadow-3xl border-almostWhite py-3 rounded-lg"
              >
                <span className="flex justify-between space-x-4 items-center mt-2 w-3/4">
                  <TodoIcon />
                  <span>Todo List</span>
                </span>
                <span className="flex justify-between items-center space-x-4 w-3/4">
                  <CalendarIcon />
                  <span>Calendars</span>
                </span>
                <span className="flex justify-between items-center space-x-4 w-3/4">
                  <ReminderIcon />
                  <span>Reminders</span>
                </span>
                <span className="flex justify-between items-center space-x-4 mb-3 w-3/4">
                  <PlanningIcon />
                  <span className="">Planning</span>
                </span>
              </div>
            </span>
            <span className="cursor-pointer flex relative justify-between items-center space-x-2 hover:text-almostBlack">
              <h4>Company</h4>
              <div className="hover:text-almostBlack">
                <Up className="hidden " />
                <Down />
              </div>
              <div id="content-two " className=" absolute top-0 left-0">
                <span> History</span>
                <span>Our Team</span>
                <span>Blog</span>
              </div>
            </span>
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
        <div className="block md:hidden">
          <OpenMenu />
          <CloseMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
