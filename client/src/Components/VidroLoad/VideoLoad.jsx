import React, { useContext } from 'react';
import { SocketContext } from '../../Context/ControlContext';

const VideoLoad = () => {
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    callMood,
    call,
  } = useContext(SocketContext);
  return (
    <div className="md:grid md:grid-cols-2 md:mx-11 gap-4">
      {stream && (
        <div className="md:flex flex-col items-center justify-center shadow-xl rounded-lg absolute bottom-0 right-0 w-36 h-36">
          <h6 className="text-base font-bold my-4 hidden md:block">{name}</h6>
          <video playsInline muted ref={myVideo} autoPlay />
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="md:flex flex-col items-center justify-center shadow-xl rounded-lg  h-[100vh]">
          <h6 className="text-base font-bold my-4 hidden md:block">
            {call?.name}
          </h6>
          <video playsInline ref={userVideo} autoPlay></video>
        </div>
      )}
    </div>
  );
};

export default VideoLoad;
