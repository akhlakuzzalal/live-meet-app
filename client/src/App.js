import { useContext } from 'react';
import './App.css';
import ControlCall from './Components/ConrtolCall/ControlCall';
import VideoLoad from './Components/VidroLoad/VideoLoad';
import { SocketContext } from './Context/ControlContext';

function App() {
  const { callMood } = useContext(SocketContext);
  return (
    <div className="App">
      <h3
        className={`text-2xl font-bold mt-10 ${
          callMood === '' ? 'block' : 'hidden'
        }`}
      >
        Lets make a Meeting
      </h3>
      <h6
        className={`text-xl font-semibold mt-2 ${
          callMood === '' ? 'block' : 'hidden'
        }`}
      >
        Copy your Id and provide Friend to Join
      </h6>
      <VideoLoad />
      <ControlCall />
    </div>
  );
}

export default App;
