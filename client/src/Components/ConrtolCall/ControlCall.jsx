import React from 'react';
import useControl from '../../utilities/useControl';

const ControlCall = () => {
  const { callEnd, currentStream, myVideo, me } = useControl();
  console.log(me);
  return <div>Control call</div>;
};

export default ControlCall;
