import { createContext } from 'react';
import useControl from '../utilities/useControl';

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const allControl = useControl();
  return (
    <SocketContext.Provider value={allControl}>
      {children}
    </SocketContext.Provider>
  );
};
export default SocketProvider;
