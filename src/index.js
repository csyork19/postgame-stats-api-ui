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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <LandingPage />
    <PlayerSeasonStats />
    <PlayerSeasonAverageStats />
      <CareerStats />
      <PlayerPlayoffStats />
      <TeamSeasonStats />
      <TeamPlayoffStats />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
