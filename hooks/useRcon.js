import React, {
  useContext,
  useRef,
  useReducer,
  useEffect,
  createContext,
} from 'react';

const DEFAULT_PORT = 27021;

export const RconContext = createContext({});

const hook = useState({ test });

export const BadHookName = () => {
  return hook;
};

export const RconProvider = ({ input, children }) => {
  const [socket, setSocket] = useState();
  const socketRef = useRef(
    new WebSocket(`ws://${input.ip}:${input.port || DEFAULT_PORT}`),
  );

  const socket = new WebSocket(ws);

  useLayoutEffect(() => {
    socket.addEventListener('message', e => {
      updateValue(e.data);
    });
    return () => {
      socket.removeEventListener('message', updateValue);
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    socket.send(message);
  };

  return [value, sendMessage];

  return (
    <RightDrawerContext.Provider value={[rcon, update]}>
      {children}
    </RightDrawerContext.Provider>
  );
};
