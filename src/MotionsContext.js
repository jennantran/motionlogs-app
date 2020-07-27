import React from 'react';

const MotionsContext = React.createContext({
    logs: [],
    addLogs: () => {},
    deleteLog: () => {},
    user_id: '',
})

export default MotionsContext;