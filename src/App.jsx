import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';

const settingTypes=["General","Tools","Settings"]
const settings =[["Dashboard","History","Calendar","Appointment","Statistics"],["Chat","Support"],["Settings"]]
function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar settingTypes={settingTypes} settings={settings}/>
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;