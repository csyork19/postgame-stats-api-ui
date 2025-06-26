import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        backgroundColor: '#FAFDF3'
    },
    customHeader: {
        color: '#ffffff', // Change this to your desired color
        fontWeight: 'bold', // Optional: make the header bold
        backgroundColor: '#cd0b2c'
    },
});

function TeamSeasonStats() {
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    const [error, setError] = useState(null);

    const data = {
        teamName: 'Dallas Mavericks',
        season: '2024-25'
    };

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/nba/team/seasonStats', {
            method: 'POST', // or 'POST' if the server requires it
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text(); // Get response as text first
            })
            .then(text => {
                console.log("Response text:", text);
                const data = JSON.parse(text); // Then parse the text as JSON
                console.log("Parsed data:", data);

                const keys = Object.keys(data);
                const rowCount = Object.keys(data[keys[0]]).length;
                const formattedRows = [];

                for (let i = 0; i < rowCount; i++) {
                    const row = {};
                    keys.forEach(key => {
                        row[key] = data[key][i];
                    });
                    formattedRows.push(row);
                }

                console.log("Formatted rows:", formattedRows);
                setRows(formattedRows);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
            });
    }, []);

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
                marginBottom: '20px'
            }}
        >

        <TableContainer component={Paper} style={{ width: '75%', backgroundColor: '#FAFDF3' }}>
            <h1 style={{ textAlign: 'center', marginTop: 0 }} >Team Season Stats - {data.teamName} | {data.season}</h1>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {[
                            "AST", "BLK", "DREB", "FG3A", "FG3M", "FG3_PCT", "FGA",
                            "FGM", "FG_PCT", "FTA", "FTM", "FT_PCT", "GAME_DATE", "Game_ID",
                            "MATCHUP", "MIN", "OREB", "PF", "PLUS_MINUS", "PTS", "Player_ID",
                            "REB", "SEASON_ID", "STL", "TOV", "VIDEO_AVAILABLE", "WL", "UPDATE THIS"
                            , "UPDATE THIS", "UPDATE THIS", "UPDATE THIS", "UPDATE THIS", "UPDATE THIS"
                            , "UPDATE THIS", "UPDATE THIS", "UPDATE THIS", "UPDATE THIS", "UPDATE THIS", "UPDATE THIS"
                            , "UPDATE THIS", "UPDATE THIS", "UPDATE THIS", "UPDATE THIS", "UPDATE THIS", "UPDATE THIS"
                            , "UPDATE THIS", "UPDATE THIS", "UPDATE THIS", "UPDATE THIS", "UPDATE THIS", "UPDATE THIS"
                            , "UPDATE THIS", "UPDATE THIS", "UPDATE THIS", "UPDATE THIS", "UPDATE THIS", "UPDATE THIS"
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

export default TeamSeasonStats;
