import "./index.css";
import { FaTachometerAlt, FaHistory, FaCalendarAlt, FaStethoscope, FaChartBar, FaComments, FaLifeRing, FaCog } from "react-icons/fa";

const Sidebar = (props) => {
  const { settingTypes, settings } = props;

  const iconMap = {
    Dashboard: <FaTachometerAlt />,
    History: <FaHistory />,
    Calendar: <FaCalendarAlt />,
    Appointment: <FaStethoscope />,
    Statistics: <FaChartBar />,
    Chat: <FaComments />,
    Support: <FaLifeRing />,
    Settings: <FaCog />,
  };

  return (
  <div className="sidebar-container">
    <ul className="sidebar-list">
      {settingTypes.map((section, sectionIndex) => (
        <div key={section}>
          <li className="section-header">{section}</li>
          {settings[sectionIndex].map((item, itemIndex) => {
            const globalIndex = settings
              .slice(0, sectionIndex)
              .reduce((acc, arr) => acc + arr.length, 0) + itemIndex;

            return (
              <li
                key={item}
                className={`sidebar-item ${
                  globalIndex === 0 ? "active" : ""
                }`}
              >
                <span className="sidebar-icon">{iconMap[item]}</span>
                <span className="sidebar-text">{item}</span>
              </li>
            );
          })}
        </div>
      ))}
    </ul>
  </div>
);

};

export default Sidebar;
