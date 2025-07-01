import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {usePlayer} from "./PlayerContext";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    customHeader: {
        color: '#FAFDF3', // Change this to your desired color
        fontWeight: 'bold', // Optional: make the header bold
        backgroundColor: '#e3d70c'
    },
});

function PlayerPlayoffStats() {
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    const [error, setError] = useState(null);
    const { selectedPlayer } = usePlayer();

    const data = {
        playerName: selectedPlayer,
        season: '2024-25'
    };

    useEffect(() => {
        if (selectedPlayer) {
            fetch('http://127.0.0.1:5000/api/nba/player/playoffStats', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(text => {
                    console.log("Response text:", text);
                    const parsedData = JSON.parse(text);
                    console.log("Parsed data:", parsedData);

                    if (Array.isArray(parsedData)) {
                        setRows(parsedData); // This is the clean array of rows already
                    } else {
                        // fallback in case it's an object with keys
                        const keys = Object.keys(parsedData);
                        const rowCount = Object.keys(parsedData[keys[0]]).length;
                        const formattedRows = [];

                        for (let i = 0; i < rowCount; i++) {
                            const row = {};
                            keys.forEach(key => {
                                row[key] = parsedData[key][i];
                            });
                            formattedRows.push(row);
                        }

                        setRows(formattedRows);
                    }
                })

        }
    }, [selectedPlayer]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center', // Horizontally centers the table
                alignItems: 'center',    // Vertically centers the table
                // Ensures the table takes up the full viewport height
                backgroundColor: '#f0f0f0', // Optional: background color for visibility
                borderRadius: '12px', // Adds rounded corners to the table
                overflow: 'hidden',
                marginBottom: '20px'
            }}
        >
        <TableContainer component={Paper} style={{ width: '75%', backgroundColor: '#FAFDF3' }}>
            <h1 style={{ textAlign: 'center', marginTop: 0 }}>Player Playoff Stats - {data.playerName} | {data.season}</h1>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {[
                            "AST", "BLK", "DREB", "FG3A", "FG3M", "FG3_PCT", "FGA",
                            "FGM", "FG_PCT", "FTA", "FTM", "FT_PCT", "GAME_DATE", "Game_ID",
                            "MATCHUP", "MIN", "OREB", "PF", "PLUS_MINUS", "PTS", "Player_ID",
                            "REB", "SEASON_ID", "STL", "TOV", "VIDEO_AVAILABLE", "WL"
                        ].map(header => (
                            <TableCell key={header} align="right" className={classes.customHeader}>{header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            {Object.keys(row).map(key => (
                                <TableCell key={key} align="right">{row[key]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}

export default PlayerPlayoffStats;
