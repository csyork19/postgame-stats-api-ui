import React from 'react';
import './Landing Page.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import magicImage from './magic.png';
import mavericksImage from './mavericks.png';
import lakersImage from './lakers.png';
import hornetsImage from './hornets.png';

const LandingPage = () => {
    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={magicImage} className="img-fluid" alt="Boston Celtics"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Atlanta Hawks</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={mavericksImage} className="img-fluid" alt="Boston Celtics"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Boston Celtics</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={lakersImage} className="img-fluid" alt="Brooklyn Nets"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Brooklyn Nets</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={hornetsImage} className="img-fluid" alt="Charlotte Hornets"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Charlotte Hornets</div>
                        </div>
                    </div>
                </div>
            </div>


            {/****************ROW TWO*********************/}
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={magicImage} className="img-fluid" alt="Boston Celtics"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Chicago Bulls</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={mavericksImage} className="img-fluid" alt="Boston Celtics"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Cleveland Cavaliers</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={lakersImage} className="img-fluid" alt="Brooklyn Nets"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Dallas Mavericks</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={hornetsImage} className="img-fluid" alt="Charlotte Hornets"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Denver Nuggets</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={magicImage} className="img-fluid" alt="Boston Celtics"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Detroit Pistons</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={mavericksImage} className="img-fluid" alt="Boston Celtics"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Golden State Warriors</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={lakersImage} className="img-fluid" alt="Brooklyn Nets"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Houston Rockets</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={hornetsImage} className="img-fluid" alt="Charlotte Hornets"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Indiana Pacers</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={magicImage} className="img-fluid" alt="Boston Celtics"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Los Angeles Clippers</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={mavericksImage} className="img-fluid" alt="Boston Celtics"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Los Angeles Lakers</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={lakersImage} className="img-fluid" alt="Brooklyn Nets"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Memphis Grizzlies</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={hornetsImage} className="img-fluid" alt="Charlotte Hornets"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Miami Heat</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={magicImage} className="img-fluid" alt="Boston Celtics"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Milwaukee Bucks</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={mavericksImage} className="img-fluid" alt="Boston Celtics"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Minnesoata Timberwolves</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={lakersImage} className="img-fluid" alt="Brooklyn Nets"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">New Orleans Pelicans</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={hornetsImage} className="img-fluid" alt="Charlotte Hornets"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">New York Knicks</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={magicImage} className="img-fluid" alt="Boston Celtics"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Oklahoma City Thunder</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={mavericksImage} className="img-fluid" alt="Boston Celtics"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Orlando Magic</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={lakersImage} className="img-fluid" alt="Brooklyn Nets"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Philipelphia 76ers</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={hornetsImage} className="img-fluid" alt="Charlotte Hornets"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Phoenix Suns</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={magicImage} className="img-fluid" alt="Boston Celtics"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Portland Trailblazers</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={mavericksImage} className="img-fluid" alt="Boston Celtics"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Sacramento Kings</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={lakersImage} className="img-fluid" alt="Brooklyn Nets"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">San Antonio Spurs</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={hornetsImage} className="img-fluid" alt="Charlotte Hornets"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Toronto Raptors</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={magicImage} className="img-fluid" alt="Boston Celtics"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Utah Jazz</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={mavericksImage} className="img-fluid" alt="Boston Celtics"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Washington Wizards</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={lakersImage} className="img-fluid" alt="Brooklyn Nets"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Brooklyn Nets</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="gallery-item">
                        <img src={hornetsImage} className="img-fluid" alt="Charlotte Hornets"/>
                        <div className="gallery-overlay">
                            <div className="gallery-caption">Charlotte Hornets</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default LandingPage;