import { FaLungs, FaTooth, FaHeartbeat,FaSyringe,FaEye,FaHeart,FaBrain, FaBone ,FaSearchPlus,FaArrowRight,FaChevronLeft, FaChevronRight} from "react-icons/fa"; 
import "./index.css";

const DashboardMainContent = () => {
  
  const DashboardOverview = props => {
    const {ActivityFeed} = props
  const anatomyList = [
    { name: "Lungs", color: "red", icon: <FaLungs /> },
    { name: "Teeth", color: "green", icon: <FaTooth /> },
    { name: "Bone", color: "orange", icon: <FaBone /> },
  ];

  return (
    <div className="dashboard-box">
        <div>
        <h1 style={{margin:"0"}}>Dashboard</h1>

      <div className="anatomy-container">
        <div className="left-anatomy-container">
           <div style={{ display: "flex", justifyContent: "flex-end" ,marginBottom:"8px"}}>
      <FaSearchPlus size={18} color="lightgrey" />
    </div>
  <div className="image-wrapper">
    
    <img
      src="https://media.istockphoto.com/id/537403681/photo/human-anatomy.jpg?s=612x612&w=0&k=20&c=g3v5eKPSIsWWwDKhf27g2-H5wPJnZcfiZ8EPy6b2FpM="
      alt="Anatomy Illustration"
      className="anatomy-image"
    />
  </div>
</div>

        <div className="right-anatomy-container">
          <select className="menu">
          <option value="dashboard" >This week</option>
        </select>
          {anatomyList.map((item, index) => (
            <div className="anatomy-items" key={index}>
              <div className="icon-label">
                <span className="organ-icon">{item.icon}</span>
                <p>{item.name}</p>
              </div>
              <p>Date: 26 Oct 2021</p>

              <div className="progress-bar-container">
                <div
                  className="progress-bar-fill"
                  style={{
                    width: "70%",
                    height: "8px",
                    backgroundColor: item.color,
                    borderRadius: "4px",
                  }}
                ></div>
              </div>
            </div>
          ))}

          <p style={{alignSelf:"end",color:"darkblue",fontSize:"12px"}}>Details  {<FaArrowRight size={8} color="#5fc0d0" />}</p>
        </div>
      </div>
      </div>
      {<ActivityFeed/>}
    </div>
  );
};

const ActivityFeed = () => {
  const mockData = [
  { day: 'Mon', progress: 70 },
  { day: 'Tue', progress: 40 },
  { day: 'Wed', progress: 90 },
  { day: 'Thu', progress: 60 },
  { day: 'Fri', progress: 80 },
  { day: 'Sat', progress: 50 },
  { day: 'Sun', progress: 30 },
];
  return (
  <div className="">
    <div className="activity-container">
      <div className="activity-top">
        <h1>Activity</h1>
        <p>3 appointments this week</p>
      </div>  

      
      <div className="week-progress">
        {mockData.map(({ day, progress }) => (
          <div className="day" key={day}>
            <div className="bar-container">
              <div className="bar-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="label">{day}</div>
          </div>
        ))}
      </div>

    </div>
  </div>
  )
  };

  const CalendarView = props => {
    const {UpcomingSchedule}= props
  const calendarData = [
    { day: "Mon",date:"25", appointMentTime: null, availableTime: [10, 11, 12] },
    { day: "Tues",date:"26", appointMentTime: 9, availableTime: [8, 9, 10] },
    { day: "Wed",date:"27", appointMentTime: null, availableTime: [12, null, 13] },
    { day: "Thurs",date:"28", appointMentTime: 11, availableTime: [10, 11, null] },
    { day: "Fri",date:"29", appointMentTime: 9, availableTime: [null, 14, 16] },
    { day: "Sat",date:"30", appointMentTime: 12, availableTime: [12, 14, 15] },
    { day: "Sun",date:"31", appointMentTime: 9, availableTime: [9, 10, 11] },
  ];

  const presentIndex = 1; // "Tues" is the present

  return (
    <div className="dashboard-box" >
      <div className="calendar-top">
        <h1 className="calendar-title">October 2021</h1>
        <div className="calendar-arrow-buttons">
          <FaChevronLeft size={20} color="#5fc0d0" />
          <FaChevronRight size={20} color="#5fc0d0" />
        </div>
      </div>

      <ul className="calendar-list">
        {calendarData.map((dayData, index) => {
          const isFuture = index > presentIndex;
          const isToday = index === presentIndex;

          return (
            <li
              key={index}
              className={`calendar-list-item ${isToday ? "active-calendar" : ""}`}
              style={{ opacity: isFuture ? 0.6 : 1 }}
            >
              <p className="calendar-day">{dayData.day}</p>
              <p className="calendar-day">{dayData.date}</p>
              <div className="calendar-times">
                {dayData.availableTime.map((time, i) => {
                  const isActive = time === dayData.appointMentTime;
                  return (
                    <button
                      key={i}
                      className={`calendar-time-btn ${isActive ? "active-appointment" : ""}`}
                      disabled={!time}
                    >
                      {time ? `${time}:00` : "-"}
                    </button>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>

      {<UpcomingSchedule/>}

    </div>
  );
};

  const UpcomingSchedule = () => {
  const scheduleData = [
    {
      isActive: true,
      appointmentType: "Dentist",
      appointMentImg: <FaTooth />,
      appointTime: "09:00 - 11:00",
      appointerName: "Dr. Cameroon Williamson",
    },
    {
      isActive: false,
      appointmentType: "Physiotherapy",
      appointMentImg: <FaHeartbeat />,
      appointTime: "11:00 - 12:00",
      appointerName: "Dr. Kevin Djones",
    },
  ];

  const upcomingScheduleData = [
    {
      day: "Thursday",
      isActive: false,
      appointmentType: "Health Checkup Complete",
      appointMentImg: <FaSyringe />,
      appointTime: "11:00 AM",
    },
    {
      day: "Thursday",
      isActive: false,
      appointmentType: "Ophthalmologist",
      appointMentImg: <FaEye />,
      appointTime: "14:00 PM",
    },
    {
      day: "Saturday",
      isActive: false,
      appointmentType: "Cardiologist",
      appointMentImg: <FaHeart />,
      appointTime: "12:00 AM",
    },
    {
      day: "Saturday",
      isActive: false,
      appointmentType: "Neurologist",
      appointMentImg: <FaBrain />,
      appointTime: "16:00 AM",
    },
  ];

  // Group appointments by day
  const groupedData = upcomingScheduleData.reduce((acc, item) => {
    acc[item.day] = acc[item.day] ? [...acc[item.day], item] : [item];
    return acc;
  }, {});

  return (
    <div className="">
      {/* Current Schedule */}
      <ul className="schedule-top-container">
        {scheduleData.map((each, index) => (
          <li
            key={index}
            className={`schedule-item ${each.isActive ? "active" : ""}`}
          >
            <div className="appointment-header">
              <span className="appointment-type">{each.appointmentType}</span>
              <span className="appointment-icon">{each.appointMentImg}</span>
            </div>
            <p className="appointment-time">{each.appointTime}</p>
            <p className="appointer-name">{each.appointerName}</p>
          </li>
        ))}
      </ul>

      {/* Upcoming Schedule */}
      <h2 className="upcoming-title">The Upcoming Schedule</h2>
      {Object.entries(groupedData).map(([day, appointments]) => (
        <div key={day}>
          <h3 className="day-header">On {day}</h3>
          <ul className="schedule-top-container">
            {appointments.map((each, index) => (
              <li
                key={index}
                className={`schedule-item ${each.isActive ? "active" : ""}`}
              >
                <div className="appointment-header">
                  <span className="appointment-type">{each.appointmentType}</span>
                  <span className="appointment-icon">{each.appointMentImg}</span>
                </div>
                <p className="appointment-time">{each.appointTime}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};


  

  return (
    <div className="dashboard-main-container">
      <DashboardOverview ActivityFeed={ActivityFeed}/>
      <CalendarView UpcomingSchedule={UpcomingSchedule}/>
    </div>
  );
};

export default DashboardMainContent;
