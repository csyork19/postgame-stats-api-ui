// PlayerContext.js
import React, { createContext, useContext, useState } from 'react';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    return (
        <PlayerContext.Provider value={{ selectedPlayer, setSelectedPlayer }}>
            {children}
        </PlayerContext.Provider>
    );
};

export const usePlayer = () => useContext(PlayerContext);
