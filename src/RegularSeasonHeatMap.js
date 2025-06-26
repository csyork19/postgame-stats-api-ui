import React, { useState, useEffect } from 'react';
import { usePlayer } from "./PlayerContext";

const ImageComponentHex = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const { selectedPlayer } = usePlayer();

    useEffect(() => {
        if (selectedPlayer) {
            fetch('http://127.0.0.1:5000/api/nba/player/regularSeasonHeatmap', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ playerName: selectedPlayer , season: '2024-25'}), // Sending selectedPlayer as part of the request
            })
                .then((response) => response.json())
                .then((data) => {
                    setImageUrl(data.imageUrl); // Assuming API response has `imageUrl`
                })
                .catch((error) => {
                    console.error('Error fetching image:', error);
                });
        }
    }, [selectedPlayer]); // Dependency ensures this runs when `selectedPlayer` changes

    return (
        <div>
            {imageUrl ? (
                <img src={imageUrl} alt="Fetched from Flask API" />
            ) : (
                <p>Loading image...</p>
            )}
        </div>
    );
};

// Export must be outside the component definition
export default ImageComponentHex;
