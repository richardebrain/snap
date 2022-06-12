import TodoIcon from "../public/images/icon-todo.svg";
import ReminderIcon from "../public/images/icon-reminders.svg";
import PlanningIcon from "../public/images/icon-planning.svg";
import CalendarIcon from "../public/images/icon-calendar.svg";

const FeaturesList = () => {
    return (
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
    );
}

export default FeaturesList;