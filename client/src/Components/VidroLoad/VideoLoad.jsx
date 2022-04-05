import React, { useContext } from 'react';
import { SocketContext } from '../../Context/ControlContext';

const VideoLoad = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <div className="grid grid-cols-2 mx-11 gap-4">
      {stream && (
        <div className="flex flex-col items-center justify-center shadow-xl rounded-lg">
          <h6 className="text-base font-bold my-4">{name}</h6>
          <video playsInline ref={myVideo} muted autoPlay />
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="flex flex-col items-center justify-center shadow-xl rounded-lg">
          <h6 className="text-base font-bold my-4">{call?.name}</h6>
          <video playsInline ref={userVideo} muted autoPlay></video>
        </div>
      )}
    </div>
  );
};

export default VideoLoad;
