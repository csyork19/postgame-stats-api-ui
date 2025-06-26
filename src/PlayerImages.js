import React from 'react';
import './LandingPage.css'; // Include any relevant CSS for styling

const PlayerImages = ({ imageSrc, teamName, onClick }) => (
    <div className="gallery-item">
        <button className="gallery-item" onClick={onClick} style={{ border: "none", background: "transparent" }}>
            <img src={imageSrc} className="img-fluid" alt={teamName} />
            <div className="gallery-overlay">
                <div className="gallery-caption">{teamName}</div>
            </div>
        </button>
    </div>
);

export default PlayerImages;
