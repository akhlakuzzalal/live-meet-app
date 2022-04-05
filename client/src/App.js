import './App.css';
import ControlCall from './Components/ConrtolCall/ControlCall';
import VideoLoad from './Components/VidroLoad/VideoLoad';

function App() {
  return (
    <div className="App">
      <h3 className="text-2xl font-bold mt-10">Lets make a Meeting</h3>
      <h6 className="text-xl font-semibold mt-2">
        Copy your Id and provide Fried to Join
      </h6>
      <VideoLoad />
      <ControlCall />
    </div>
  );
}

export default App;
