import { useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';
import { io } from 'socket.io-client';

const useControl = () => {
  // state Declaration
  const [stream, setStream] = useState(null);
  const [callEnd, setCallEnd] = useState(false);
  const [call, setCall] = useState(false);
  const [callAccepted, setCallAccepted] = useState(false);
  const [me, setMe] = useState('');
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  // end state Declaration
  const socket = io('http://localhost:5000');
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        myVideo.current.srcObjecty = currentStream;
      });
    socket.on('me', (id) => setMe(id));
    socket.on('callUser', ({ userToCall, name, from, signal }) => {
      setCall({ isResivedCall: true, userToCall, name, from, signal });
    });
  }, []);
  // accept the Call
  const makeCall = () => {};
  // accept Call
  const acceptCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject(currentStream);
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };
  return {
    callEnd,
    setCallEnd,
    makeCall,
    acceptCall,
    stream,
    myVideo,
    me,
  };
};

export default useControl;
