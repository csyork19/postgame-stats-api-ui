import React, {useRef, useState} from 'react';
import './LandingPage.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import atlanta from './atlanta.png';
import boston from './boston.png';
import brooklyn from './brooklyn.png';
import bulls from './bulls.png';
import cavs from './cavs.png';
import nuggets from './nuggets.png';
import pistons from './pistons.png';
import warriors from './warriors.png';
import rockets from './rockets.png';
import pacers from './pacers.png';
import clippers from './clippers.png';
import grizzlies from './grizzlies.png';
import heat from './heat.png';
import bucks from './bucks.png';
import timberwolves from './timberwolves.png';
import pelicans from './pelicans.png';
import knicks from './knicks.png';
import thunder from './thunder.png';
import magic from './magic.png';
import philly from './76ers.png'
import suns from './suns.png';
import trailblazers from './trailblazers.png';
import kings from './kings.png';
import spurs from './spurs.png';
import raptors from './raptors.png';
import jazz from './jazz.png';
import wizards from './wizards.png';
import mavericksImage from './mavericks.png';
import lakersImage from './lakers.png';
import hornetsImage from './hornets.png';
import t_young from './t_young.png'
import PlayerImages from "./PlayerImages";
import {usePlayer} from "./PlayerContext";



const teamRosters = {
    Atlanta: ["Trae Young", "Dyson Daniels", "Trent Forrest", "Kobe Bufkin", "Jordan Bowden",
        "Bogdan Bogdanovic", "Garrison Mathews", "Wesley Matthews", "Vít Krejčí",
        "Seth Lundy", "Kevon Harris", "Keaton Wallace", "De'Andre Hunter",
        "Zaccharie Risacher", "Dylan Windler", "Nikola Djurisic", "Daeqwon Plowden",
        "Jalen Johnson", "Larry Nance Jr.", "David Roddy", "Dominick Barlow",
        "Mouhamed Gueye", "Joirdon Nicholas", "Clint Capela", "Onyeka Okongwu", "Cody Zeller"],
    Boston: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Kristaps Porzingis",
        "Al Horford", "Derrick White", "Sam Hauser", "Payton Pritchard",
        "Luke Kornet", "Oshae Brissett", "Dalano Banton", "Jordan Walsh",
        "Neemias Queta", "Svi Mykhailiuk", "Kylor Kelley"],
    Brooklyn: ["Mikal Bridges", "Cam Johnson", "Spencer Dinwiddie", "Ben Simmons",
        "Nic Claxton", "Royce O'Neale", "Cam Thomas", "Dorian Finney-Smith",
        "Lonnie Walker IV", "Dennis Smith Jr.", "Day'Ron Sharpe", "Trendon Watford",
        "Noah Clowney", "Armoni Brooks", "Harry Giles III"],
    Charlotte: ["LaMelo Ball", "Terry Rozier", "Gordon Hayward", "P.J. Washington",
        "Mark Williams", "Miles Bridges", "Brandon Miller", "Nick Richards",
        "Bryce McGowens", "James Bouknight", "Frank Ntilikina", "Theo Maledon",
        "Xavier Sneed", "Kai Jones", "JT Thor"],
    Chicago: ["Zach LaVine", "DeMar DeRozan", "Nikola Vucevic", "Patrick Williams",
        "Coby White", "Ayo Dosunmu", "Alex Caruso", "Jevon Carter",
        "Torrey Craig", "Andre Drummond", "Dalen Terry", "Julian Phillips",
        "Terry Taylor", "Justin Lewis", "Onuralp Bitim"],
    Cleveland: ["Donovan Mitchell", "Darius Garland", "Evan Mobley", "Jarrett Allen",
        "Max Strus", "Georges Niang", "Caris LeVert", "Isaac Okoro",
        "Ty Jerome", "Damian Jones", "Emani Bates", "Sam Merrill",
        "Craig Porter Jr.", "Isaiah Mobley", "Dean Wade"],
    Dallas: ["Luka Dončić", "Kyrie Irving", "Derrick Jones Jr.", "Tim Hardaway Jr.",
        "Grant Williams", "Dwight Powell", "Seth Curry", "Josh Green",
        "Maxi Kleber", "Richaun Holmes", "Jaden Hardy", "Dante Exum",
        "Olivier-Maxence Prosper", "Dereck Lively II", "Markieff Morris"],
    Denver: ["Nikola Jokic", "Jamal Murray", "Michael Porter Jr.", "Aaron Gordon",
        "Kentavious Caldwell-Pope", "Reggie Jackson", "Christian Braun", "Zeke Nnaji",
        "Julian Strawther", "Peyton Watson", "Hunter Tyson", "Collin Gillespie",
        "Jay Huff", "Braxton Key", "DeAndre Jordan"],
    Detroit: ["Cade Cunningham", "Jaden Ivey", "Bojan Bogdanovic", "Isaiah Stewart",
        "Jalen Duren", "Ausar Thompson", "Killian Hayes", "Marvin Bagley III",
        "Monte Morris", "Joe Harris", "Alec Burks", "Isaiah Livers",
        "James Wiseman", "Marcus Sasser", "Stanley Umude"],
    GoldenState: ["Stephen Curry", "Klay Thompson", "Andrew Wiggins", "Draymond Green",
        "Kevon Looney", "Chris Paul", "Gary Payton II", "Jonathan Kuminga",
        "Moses Moody", "Dario Saric", "Cory Joseph", "Brandon Podziemski",
        "Trayce Jackson-Davis", "Rodney McGruder", "Usman Garuba"],
    Houston: ["Jalen Green", "Fred VanVleet", "Alperen Sengun", "Dillon Brooks",
        "Amen Thompson", "Tari Eason", "Jabari Smith Jr.", "Jae'Sean Tate",
        "Cam Whitmore", "Aaron Holiday", "Jock Landale", "Boban Marjanovic",
        "Jermaine Samuels Jr.", "Reggie Bullock", "Matthew Mayer"],
    Indiana: ["Tyrese Haliburton", "Buddy Hield", "Myles Turner", "Bruce Brown",
        "Bennedict Mathurin", "Aaron Nesmith", "Obi Toppin", "Andrew Nembhard",
        "Isaiah Jackson", "T.J. McConnell", "Jalen Smith", "Oscar Tshiebwe",
        "Jordan Nwora", "Ben Sheppard", "Kendall Brown"],
    LAClippers: ["Kawhi Leonard", "Paul George", "Russell Westbrook", "Ivica Zubac",
        "Marcus Morris Sr.", "Norman Powell", "Terance Mann", "Mason Plumlee",
        "Nicolas Batum", "Bones Hyland", "Kenyon Martin Jr.", "Amir Coffey",
        "Kobe Brown", "Jason Preston", "Joshua Primo"],
    LALakers: ["LeBron James", "Anthony Davis", "D'Angelo Russell", "Austin Reaves",
        "Rui Hachimura", "Gabe Vincent", "Jarred Vanderbilt", "Christian Wood",
        "Cam Reddish", "Jaxson Hayes", "Max Christie", "Taurean Prince",
        "Alex Fudge", "Maxwell Lewis", "Colin Castleton"],
    Memphis: ["Ja Morant", "Desmond Bane", "Jaren Jackson Jr.", "Steven Adams",
        "Marcus Smart", "Derrick Rose", "Luke Kennard", "Santi Aldama",
        "David Roddy", "Xavier Tillman", "Jake LaRavia", "Kenneth Lofton Jr.",
        "G.G. Jackson II", "Vince Williams Jr.", "Ziaire Williams"],
    Miami: ["Jimmy Butler", "Bam Adebayo", "Tyler Herro", "Kyle Lowry",
        "Duncan Robinson", "Haywood Highsmith", "Caleb Martin", "Nikola Jovic",
        "Josh Richardson", "Thomas Bryant", "Jaime Jaquez Jr.", "Orlando Robinson",
        "R.J. Hampton", "Cole Swider", "Jamal Cain"],
    Milwaukee: ["Giannis Antetokounmpo", "Damian Lillard", "Brook Lopez", "Khris Middleton",
        "Bobby Portis", "Malik Beasley", "MarJon Beauchamp", "Cameron Payne",
        "Pat Connaughton", "Jae Crowder", "Robin Lopez", "AJ Green",
        "Andre Jackson Jr.", "TyTy Washington Jr.", "Chris Livingston"],
    Minnesota: ["Anthony Edwards", "Karl-Anthony Towns", "Rudy Gobert", "Mike Conley",
        "Jaden McDaniels", "Naz Reid", "Kyle Anderson", "Nickeil Alexander-Walker",
        "Shake Milton", "Jordan McLaughlin", "Troy Brown Jr.", "Wendell Moore Jr.",
        "Josh Minott", "Leonard Miller", "Vit Krejci"],
    NewOrleans: ["Zion Williamson", "Brandon Ingram", "CJ McCollum", "Jonas Valanciunas",
    "Herbert Jones", "Trey Murphy III", "Larry Nance Jr.", "Jose Alvarado",
    "Dyson Daniels", "Naji Marshall", "Kira Lewis Jr.", "Jordan Hawkins",
    "E.J. Liddell", "Dereon Seabron", "Karim Mane"],
    NewYork: ["Jalen Brunson", "Julius Randle", "RJ Barrett", "Mitchell Robinson",
    "Josh Hart", "Donte DiVincenzo", "Immanuel Quickley", "Quentin Grimes",
    "Isaiah Hartenstein", "Jericho Sims", "Miles McBride", "Ryan Arcidiacono",
    "Jaylen Martin", "Jacob Toppin", "DaQuan Jeffries"],
    OklahomaCity: ["Shai Gilgeous-Alexander", "Josh Giddey", "Chet Holmgren", "Luguentz Dort",
    "Jalen Williams", "Aleksej Pokusevski", "Vasilije Micic", "Cason Wallace",
    "Isaiah Joe", "Ousmane Dieng", "Jack White", "Jaylin Williams",
    "Kenrich Williams", "Jeremiah Robinson-Earl", "Tre Mann"],
    Orlando: ["Paolo Banchero", "Franz Wagner", "Markelle Fultz", "Wendell Carter Jr.",
        "Cole Anthony", "Jalen Suggs", "Jonathan Isaac", "Joe Ingles",
        "Goga Bitadze", "Anthony Black", "Moe Wagner", "Jett Howard",
        "Kevon Harris", "Caleb Houstan", "Trevelin Queen"],
    Philadelphia: ["Joel Embiid", "Tyrese Maxey", "Kelly Oubre Jr.", "P.J. Tucker",
        "De'Anthony Melton", "Jaden Springer", "Patrick Beverley", "Mo Bamba",
        "Danuel House Jr.", "Furkan Korkmaz", "Paul Reed", "Filip Petrusev",
        "Danny Green", "Javonte Smart", "Azuolas Tubelis"],
    Phoenix: ["Kevin Durant", "Bradley Beal", "Devin Booker", "Deandre Ayton",
        "Eric Gordon", "Grayson Allen", "Keita Bates-Diop", "Drew Eubanks",
        "Yuta Watanabe", "Ish Wainright", "Chimezie Metu", "Jordan Goodwin",
        "Toumani Camara", "Saben Lee", "Bol Bol"],
    Portland: ["Scoot Henderson", "Anfernee Simons", "Shaedon Sharpe", "Jerami Grant",
        "Deandre Ayton", "Matisse Thybulle", "Jabari Walker", "Kris Murray",
        "Ish Smith", "Duop Reath", "Trendon Watford", "Skylar Mays",
        "Keon Johnson", "Ibu Baji", "Moses Brown"],
    Sacramento: ["De'Aaron Fox", "Domantas Sabonis", "Harrison Barnes", "Kevin Huerter",
        "Keegan Murray", "Malik Monk", "Davion Mitchell", "Sasha Vezenkov",
        "Alex Len", "JaVale McGee", "Chris Duarte", "Kessler Edwards",
        "Keon Ellis", "Jordan Ford", "Kobe Brown"],
    SanAntonio: ["Victor Wembanyama", "Devin Vassell", "Keldon Johnson", "Jeremy Sochan",
    "Tre Jones", "Malaki Branham", "Zach Collins", "Doug McDermott",
    "Blake Wesley", "Sandro Mamukelashvili", "Charles Bassey", "Dominick Barlow",
    "Sidy Cissoko", "Julian Champagnie", "Cam Payne"],
    Toronto: ["Pascal Siakam", "Scottie Barnes", "OG Anunoby", "Dennis Schroder",
    "Jakob Poeltl", "Gary Trent Jr.", "Precious Achiuwa", "Chris Boucher",
    "Otto Porter Jr.", "Malachi Flynn", "Christian Koloko", "Gradey Dick",
    "Jeff Dowtin Jr.", "Marquis Nowell", "Ron Harper Jr."],
    Utah: ["Lauri Markkanen", "Jordan Clarkson", "John Collins", "Walker Kessler",
    "Collin Sexton", "Kris Dunn", "Ochai Agbaji", "Kelly Olynyk",
    "Talen Horton-Tucker", "Brice Sensabaugh", "Taylor Hendricks", "Micah Potter",
    "Luka Samanic", "Keyonte George", "Joey Hauser"],
    Washington: ["Kyle Kuzma", "Jordan Poole", "Deni Avdija", "Tyus Jones",
    "Daniel Gafford", "Corey Kispert", "Bilal Coulibaly", "Landry Shamet",
    "Anthony Gill", "Mike Muscala", "Eugene Omoruyi", "Patrick Baldwin Jr.",
    "Xavier Cooks", "Ryan Rollins", "Delon Wright"]
};




const LandingPage = () => {
    const [selectedTeam, setSelectedTeam] = useState('Atlanta');
    const [selectedPlayerId, setSelectedPlayerId] = useState(null);
    const rosterRef = useRef(null);
    const [showRoster, setShowRoster] = useState(false);
    const displayRoster = (roster) => {
        // setCurrentRoster(roster);
        setShowRoster(true);
        rosterRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const { setSelectedPlayer } = usePlayer();

    const selectPlayer = (player) => {
        setSelectedPlayer(player); // Set player in context
    };

    const handleTeamChange = (team) => {
        setSelectedTeam(team);
    };

    const currentRoster = teamRosters[selectedTeam] || [];



    const handleClick = (player) => {
        // Your existing selectPlayer logic
        selectPlayer(player);

    };

    const playerImageUrl = `https://cdn.nba.com/headshots/nba/latest/1040x760/${selectedPlayerId}.png`;


    return (

        <div className="container">
            <nav className="navbar">
                <div className="navbar-brand">postgame-stats-api</div>
            </nav>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={atlanta}
                            teamName="Atlanta Hawks"
                            onClick={() => {
                                handleTeamChange('Atlanta'); // Update selected team
                                displayRoster(teamRosters.Atlanta); // Display Atlanta roster
                            }}
                        />
                        <div className="team-name">
                            Atlanta Hawks
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={boston}
                            teamName="Boston Celtics"
                            onClick={() => {
                                handleTeamChange('Boston'); // Update selected team
                                displayRoster(teamRosters.Boston); // Display Atlanta roster
                            }}
                        />
                        <div className="team-name">
                            Boston Celtics
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={brooklyn}
                            teamName="Brooklyn Nets"
                            onClick={() => {
                                handleTeamChange('Brooklyn'); // Update selected team
                                displayRoster(teamRosters.Brooklyn); // Display Atlanta roster
                            }}
                        />
                        <div className="team-name">
                            Brooklyn Nets
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={hornetsImage}
                            teamName="Charlotte Hornets"
                            onClick={() => {
                                handleTeamChange('Charlotte'); // Update selected team
                                displayRoster(teamRosters.Charlotte); // Display Atlanta roster
                            }}
                        />
                        <div className="team-name">
                            Charlotte Hornets
                        </div>

                    </div>
                </div>
            </div>


            {/****************ROW TWO*********************/}
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={bulls}
                            teamName="Chicago Bulls"
                            onClick={() => {
                                handleTeamChange('Chicago'); // Update selected team
                                displayRoster(teamRosters.Chicago); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={cavs}
                            teamName="Clevaland Cavaliers"
                            onClick={() => {
                                handleTeamChange('Cleveland'); // Update selected team
                                displayRoster(teamRosters.Cleveland); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={mavericksImage}
                            teamName="Dallas Mavericks"
                            onClick={() => {
                                handleTeamChange('Dallas'); // Update selected team
                                displayRoster(teamRosters.Dallas); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={nuggets}
                            teamName="Denver Nuggets"
                            onClick={() => {
                                handleTeamChange('Denver'); // Update selected team
                                displayRoster(teamRosters.Denver); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={pistons}
                            teamName="Detroit Pistons"
                            onClick={() => {
                                handleTeamChange('Detroit'); // Update selected team
                                displayRoster(teamRosters.Detroit); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={warriors}
                            teamName="Golden State Warriors"
                            onClick={() => {
                                handleTeamChange('GoldenState'); // Update selected team
                                displayRoster(teamRosters.GoldenState); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={rockets}
                            teamName="Houston Rockets"
                            onClick={() => {
                                handleTeamChange('Houston'); // Update selected team
                                displayRoster(teamRosters.Houston); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={pacers}
                            teamName="Indiana Pacers"
                            onClick={() => {
                                handleTeamChange('Indiana'); // Update selected team
                                displayRoster(teamRosters.Indiana); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={clippers}
                            teamName="LA Clippers"
                            onClick={() => {
                                handleTeamChange('LAClippers'); // Update selected team
                                displayRoster(teamRosters.LAClippers); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={lakersImage}
                            teamName="LA Lakers"
                            onClick={() => {
                                handleTeamChange('LALakers'); // Update selected team
                                displayRoster(teamRosters.LALakers); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={grizzlies}
                            teamName="Memphis Grizzlies"
                            onClick={() => {
                                handleTeamChange('Memphis'); // Update selected team
                                displayRoster(teamRosters.Memphis); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={heat}
                            teamName="Miami Heat"
                            onClick={() => {
                                handleTeamChange('Miami'); // Update selected team
                                displayRoster(teamRosters.Miami); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={bucks}
                            teamName="Milwaukee Bucks"
                            onClick={() => {
                                handleTeamChange('Milwaukee'); // Update selected team
                                displayRoster(teamRosters.Milwaukee); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={timberwolves}
                            teamName="Minnesota Timberwolves"
                            onClick={() => {
                                handleTeamChange('Minnesota'); // Update selected team
                                displayRoster(teamRosters.Minnesota); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={pelicans}
                            teamName="New Orlean Pelicans"
                            onClick={() => {
                                handleTeamChange('NewOrleans'); // Update selected team
                                displayRoster(teamRosters.NewOrleans); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={knicks}
                            teamName="New York Knicks"
                            onClick={() => {
                                handleTeamChange('NewYork'); // Update selected team
                                displayRoster(teamRosters.NewYork); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={thunder}
                            teamName="Oklahoma City Thunder"
                            onClick={() => {
                                handleTeamChange('OklahomaCity'); // Update selected team
                                displayRoster(teamRosters.OklahomaCity); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={magic}
                            teamName="Orlando Magic"
                            onClick={() => {
                                handleTeamChange('Orlando'); // Update selected team
                                displayRoster(teamRosters.Orlando); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={philly}
                            teamName="Philiadelphia 76ers"
                            onClick={() => {
                                handleTeamChange('Philadelphia'); // Update selected team
                                displayRoster(teamRosters.Philadelphia); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={suns}
                            teamName="Phoenix Suns"
                            onClick={() => {
                                handleTeamChange('Phoenix'); // Update selected team
                                displayRoster(teamRosters.Phoenix); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={trailblazers}
                            teamName="Portland Trailblazers"
                            onClick={() => {
                                handleTeamChange('Portland'); // Update selected team
                                displayRoster(teamRosters.Portland); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={kings}
                            teamName="Sacramento Kings"
                            onClick={() => {
                                handleTeamChange('Sacramento'); // Update selected team
                                displayRoster(teamRosters.Sacramento); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={spurs}
                            teamName="San Antonio Spurs"
                            onClick={() => {
                                handleTeamChange('SanAntonio'); // Update selected team
                                displayRoster(teamRosters.SanAntonio); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={raptors}
                            teamName="Toronto Raptors"
                            onClick={() => {
                                handleTeamChange('Toronto'); // Update selected team
                                displayRoster(teamRosters.Toronto); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={jazz}
                            teamName="Utah Jazz"
                            onClick={() => {
                                handleTeamChange('Utah'); // Update selected team
                                displayRoster(teamRosters.Utah); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <PlayerImages
                            imageSrc={wizards}
                            teamName="Washington Wizards"
                            onClick={() => {
                                handleTeamChange('Washington'); // Update selected team
                                displayRoster(teamRosters.Washington); // Display Atlanta roster
                            }}
                        />
                    </div>
                </div>
            </div>
            {showRoster && (
                <div ref={rosterRef} className="roster-section">
                    <h2>Roster</h2>
                    <div className="row">
                        {currentRoster.map(player => (
                            <div className="col-lg-3 col-md-4 col-sm-6" key={player.name}>
                                <div className="player-card" onClick={() => handleClick(player)}>
                                    <img
                                        src={'https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png'}
                                        alt={player.name}
                                        className="player-image"
                                    />
                                    <p className="player-name">{player}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}


        </div>

    );
}

export default LandingPage;