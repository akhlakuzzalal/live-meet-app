import React, { useContext, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../../Context/ControlContext';

const ControlCall = () => {
  const [callMood, setCallMood] = useState('');
  const {
    me,
    callAccepted,
    name,
    setName,
    callEnd,
    callUser,
    answerCall,
    call,
    leaveCall,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  return (
    <div>
      {/* set Mood */}
      {callMood === '' && (
        <div className="flex items-center space-x-3 mt-3 justify-center">
          <button
            onClick={() => setCallMood('newCall')}
            className="px-3 py-2 text-white rounded-lg bg-green-400"
          >
            New Call
          </button>
          <button
            onClick={() => setCallMood('join')}
            className="px-3 py-2 text-white rounded-lg bg-blue-400"
          >
            Join with Friend
          </button>
        </div>
      )}
      {/* new call */}
      {callMood === 'newCall' && !callAccepted && (
        <div className="flex space-x-3 justify-center items-center mt-4">
          <button
            className="px-4 py-2 rounded-lg bg-red-300 text-white"
            onClick={() => setCallMood('')}
          >
            Back
          </button>
          <input
            className="focus:outline-0 border-2 border-gray-600 rounded-lg pl-4 py-2"
            type="text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <CopyToClipboard text={me}>
            <button className="px-4 py-2 rounded-lg bg-green-600 text-white">
              Copy to Clipboard
            </button>
          </CopyToClipboard>
        </div>
      )}
      {/* join in a existing call */}
      {callMood === 'join' && !callAccepted && (
        <div className="flex space-x-3 justify-center items-center mt-4">
          <button
            className="px-4 py-2 rounded-lg bg-red-300 text-white"
            onClick={() => setCallMood('')}
          >
            Back
          </button>
          <input
            className="focus:outline-0 border-2 border-gray-600 rounded-lg pl-4 py-2"
            type="text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="focus:outline-0 border-2 border-gray-600 rounded-lg pl-4 py-2"
            type="text"
            placeholder="Enter Provided Id"
            onChange={(e) => setIdToCall(e.target.value)}
          />
          <button
            className="px-4 py-2 rounded-lg bg-green-600 text-white"
            onClick={() => callUser(idToCall)}
          >
            Call
          </button>
        </div>
      )}
      {callAccepted && !callEnd && (
        <button
          className="px-4 py-2 rounded-lg bg-red-600 text-white mt-6"
          onClick={leaveCall}
        >
          Hang Up
        </button>
      )}
      {call.isReceivingCall && !callAccepted && (
        <div>
          <h1>{call.name} is calling:</h1>
          <button onClick={answerCall}>Answer</button>
        </div>
      )}
    </div>
  );
};

export default ControlCall;
