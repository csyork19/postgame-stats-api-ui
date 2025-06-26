import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CareerStats from './CareerStats';
import reportWebVitals from './reportWebVitals';
import PlayerPlayoffStats from "./PlayerPlayoffStats";
import TeamSeasonStats from "./TeamSeasonStats";
import TeamPlayoffStats from "./TeamPlayoffStats";
import PlayerSeasonStats from "./PlayerSeasonStats";
import PlayerSeasonAverageStats from "./PlayerSeasonAverage";
import LandingPage from "./LandingPage";
import { PlayerProvider, usePlayer } from "./PlayerContext";
import {TeamProvider} from "./TeamContext";
import ImageComponent from "./RegularSeasonShotChart";
import ImageComponentHex from "./RegularSeasonHexShotChart";
import RegularSeasonHeatMap from "./RegularSeasonHeatMap";

const root = ReactDOM.createRoot(document.getElementById('root'));

const PlayerSeasonStatsWithPlayer = () => {
    const { selectedPlayer } = usePlayer();
    return <PlayerSeasonStats playerName={selectedPlayer} />;
};

root.render(
    <React.StrictMode>
        <PlayerProvider>
            <LandingPage />
            <PlayerSeasonStatsWithPlayer />
            <PlayerSeasonAverageStats />
            <CareerStats />
            <PlayerPlayoffStats />
            <ImageComponent />
            <ImageComponentHex />
            <RegularSeasonHeatMap />
        </PlayerProvider>

        <TeamProvider>
            <TeamPlayoffStats />
        </TeamProvider>
        <TeamSeasonStats />


    </React.StrictMode>
);

reportWebVitals();
