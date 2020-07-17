import React from 'react';

const MotionsContext = React.createContext({
    logs: [],
    addLogs: () => {},
})

export default MotionsContext;