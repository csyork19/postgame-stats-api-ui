import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    customHeader: {
        color: '#ffffff', // Change this to your desired color
        fontWeight: 'bold', // Optional: make the header bold
        backgroundColor: '#2dec47'
    },
});

function CareerStats() {
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    const [error, setError] = useState(null);

    const data = {
        playerName: 'Dereck Lively II',
        season: '2024-25'
    };

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/nba/player/careerStats ', {
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
        <TableContainer component={Paper}>
            <h1>Player Career Stats - {data.playerName} | {data.season}</h1>
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
    );
}

export default CareerStats;
