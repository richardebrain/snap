import TodoIcon from "../public/images/icon-todo.svg";
import ReminderIcon from "../public/images/icon-reminders.svg";
import PlanningIcon from "../public/images/icon-planning.svg";
import CalendarIcon from "../public/images/icon-calendar.svg";
import CloseMenu from "../public/images/icon-close-menu.svg";
import Up from "../public/images/icon-arrow-up.svg";
import Down from "../public/images/icon-arrow-down.svg";
import Button from "./Button";
import { useEffect, useState } from "react";

const Sidebar = ({ToggleSidebar, Sidebar}) => {
    const [Features, setFeatures] = useState(false);
    const [company, setCompany] = useState(false);
   
    const ToggleFeatures = () => {
        setFeatures(!Features);
    }
    const ToogleCompany = () => {
        setCompany(!company);
    }
   
   

    return (
        <div className={` flex items-start flex-col pt-15 fixed right-0 top-0 bg-white h-full   z-10 overflow-x-hidden overflow-y-hidden    text-mediumGray space-y-[65px] md:hidden`}>
        <div id="close-btn" >
          <CloseMenu className="absolute top-6 right-5 cursor-pointer" onClick={ToggleSidebar}/>
        </div>
        <div id="nav-content" className=" mx-auto w-3/4 font-bold space-y-4">
          {/* features */}
          <div className="flex flex-col justify-between items-center space-x-2 ">
            <div className="flex w-2/3  cursor-pointer font-medium text-lg  items-center space-x-3 -ml-16  hover:text-almostBlack mb-2 " onClick={ ToggleFeatures}>
              <h4>Features</h4>
            {Features ?  <Up /> : <Down />}
            </div>
            <div
              id="feature-content"
              className={`${!Features ? 'hidden' :'flex' } flex-col items-start space-y-4 w-3/4 font-medium text-lg`}
            >
              <span className="flex cursor-pointer  space-x-4 items-center  mt-2 w-4/5 hover:text-almostBlack">
                <TodoIcon />
                <span className="ml-4">Todo List</span>
              </span>
              <span className="flex cursor-pointer  items-center space-x-4 w-32 hover:text-almostBlack">
                <CalendarIcon />
                <span>Calendars</span>
              </span>
              <span className="flex cursor-pointer items-center space-x-5 w-36 hover:text-almostBlack">
                <ReminderIcon />
                <span className="">Reminders</span>
              </span>
              <span className="flex cursor-pointer items-center space-x-4 mb-3 w-4/5 hover:text-almostBlack">
                <PlanningIcon />
                <span className="">Planning</span>
              </span>
            </div>
          </div>
          {/* company */}
          <div className="  flex-col flex justify-between items-center space-y-2 w-3/4 -ml-6">
            <div className="flex  items-center space-x-3 mb-1 font-medium text-lg cursor-pointer hover:text-almostBlack" onClick={ToogleCompany}>
              <h4>Company</h4>
                {company ? <Up /> : <Down />}
            </div>
            <div
              id="content-two "
              className={` flex-col justify-between font-medium text-lg items-center space-y-3 ${!company ? "hidden" : "flex"}  pl-4`}
             >
              <span className="cursor-pointer hover:text-almostBlack w-full"> History</span>
              <span  className="cursor-pointer hover:text-almostBlack w-full">Our Team</span>
              <span  className="cursor-pointer hover:text-almostBlack w-full">Blog</span>
            </div>
          </div>
          <div className="cursor-pointer font-medium text-lg  hover:text-almostBlack">
            <h4>Careers</h4>
          </div>
          <div className="cursor-pointer font-medium text-lg hover:text-almostBlack">
            <h4>About</h4>
          </div>
        </div>
        <div id="users" className="flex flex-col self-center -mt-10  space-y-5">
          <Button className="px-3  text-lg cursor-pointer hover:text-almostBlack ">
            Login
          </Button>
          <Button className="px-16 py-2 border-solid cursor-pointer border-2 mx-8 rounded-xl font-medium text-lg border-mediumGray hover:border-almostBlack hover:text-almostBlack ">
            Register
          </Button>
        </div>

      </div>
    );
}

export default Sidebar;