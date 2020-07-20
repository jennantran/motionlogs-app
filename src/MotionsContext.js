import React from 'react';

const MotionsContext = React.createContext({
    logs: [],
    addLogs: () => {},
    deleteLog: () => {},
})

export default MotionsContext;