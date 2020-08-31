import React from 'react';

const MotionsContext = React.createContext({
    logs: [],
    addLogs: () => {},
    deleteLog: () => {},
    user_id: '',
    error: null
})

export default MotionsContext;