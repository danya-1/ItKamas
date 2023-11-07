import Header from './components/Header';
import MainContent from './components/MainContent';
import SideBar from './components/SideBar';
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Header className="header"/>
      <div className='main'>
      <SideBar className="sideBar"/>
      <MainContent className="mainContent"/>
      </div>
    </div>
  );
}




export default App;

