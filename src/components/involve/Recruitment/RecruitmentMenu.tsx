import React, {useState} from 'react';
import TeamInfo from './RecruitTeamInfo'
import RecruitPosition from './RecruitTeamPosition';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import './RecruitmentMenu.css';

/**
 * @returns {React.Component}
 */
export default function RecruitmentMenu() {

    const [team, setTeam] = useState({ name: '', expanded: false});
    const recruitmentDescription = "Washington iGEM is recruiting for several positions in 2021 for our interdisciplinary, undergraduate-driven, synthetic biology research and entrepreneurship competition team! All skill levels, class standing, and major (intended or declared) are eligible. Our recruitment is from late Autumn quarter to Winter quarter. UW iGEM is a serious time commitment, requiring 10-15 hours/week in winter and spring quarter and 10-20 hours/week in the summer and fall. We expect all members to dedicate themselves to the team for the entire season. Subteams include teams performing biological labwork (wetlab), hardware + software development (drylab), fundraising, human practices, design, and website development." 
    const recruitmentNote = "Note: we are recruiting manager roles and member (non-manager) roles. The managers are expected to be full-time roles, that is, little to no direct involvement in other subteams. Team members, however, are encouraged to participate in more than one subteam (we recommend two). ";

    const openingPositions = require('./openingPositions.json');
    console.log(openingPositions);
    // #region mock team info
    // const teamInfoMap = new Map();
    // teamInfoMap.set("Wetlab", {
    //     statement: "Experiments ",
    //     highlight: "Experiments and Experiments",
    //     statementMore: " to show Experiments.",
    //     example: "Experiments, Experiments, iGEM Experiments",
    //     position: testPosition,
    //     requirement: postionDescription
    // });
    // teamInfoMap.set("Drylab", {
    //     statement: "People who are dedicated to Simulations ",
    //     highlight: "Simulations and Simulations",
    //     statementMore: " to show Simulations.",
    //     example: "Simulations, Simulations, iGEM Simulations",
    //     position: testPosition,
    //     requirement: postionDescription
    // });
    // teamInfoMap.set("Fundraising", {
    //     statement: "People who are dedicated to Fundraising ",
    //     highlight: "Fundraising and Fundraising",
    //     statementMore: " to Fundraising.",
    //     example: "Fundraising, Fundraising, iGEM Fundraising",
    //     position: testPosition,
    //     requirement: postionDescription
    // });
    // teamInfoMap.set("Synbio for Everyone", {
    //     statement: "People who are dedicated to Synbio ",
    //     highlight: "Synbio and Synbio",
    //     statementMore: " to Synbio.",
    //     example: "Synbio, Synbio, iGEM Synbio",
    //     position: testPosition,
    //     requirement: postionDescription
    // });
    // teamInfoMap.set("Human Practices", {
    //     statement: "People who are dedicated to Outreach ",
    //     highlight: "Outreach and Outreach",
    //     statementMore: " to Outreach.",
    //     example: "Outreach, Outreach, iGEM Outreach",
    //     position: testPosition,
    //     requirement: postionDescription
    // });
    // teamInfoMap.set("Design", {
    //     statement: "People who are dedicated to design meaningful ",
    //     highlight: "graphics and products",
    //     statementMore: " to show empathy to the iGEM competition.",
    //     example: "Posters, Inforgraphics, iGEM merchandise",
    //     position: testPosition,
    //     requirement: postionDescription
    // });
    // teamInfoMap.set("Web Development", {
    //     statement: "People who are dedicated to Web Development ",
    //     highlight: "Web Development and Web Development",
    //     statementMore: " to Web Development.",
    //     example: "Web Development, Web Development, iGEM Web Development",
    //     position: testPosition,
    //     requirement: postionDescription
    // });
    //#endregion

    const handleClick = (teamName) => {
        if (teamName === team.name) {
            setTeam({name: teamName, expanded: !team.expanded});
        } else {
            setTeam({name: teamName, expanded: true});
        }
    }

    const getPositions = (teamName) => {
        return openingPositions[teamName].positions;
    }

    return <>
        <div className="m-5">
            <h2 className="recruit-menu-title">Recruitment</h2>
            <div className="recruit-menu-description">
                We are holding a <b>virtual information session on Saturday, January 9th, 11:00am - 12:30pm</b>. 
                This will be held on zoom, <a href="https://igem-org.zoom.us/j/98707180183?pwd=RUdDMlhYQXJHSmZSTGJLd3dLS2w3QT09">click here for link to join</a>. 
                A recording will be posted here shortly afterwards if you are unable to attend.
            </div>
            <div className="recruit-menu-description">
                <hr/>
                {recruitmentDescription}
                <br/>
                <br/>
                {recruitmentNote}
            </div>
            <div className="mt-3 recruit-menu-link-container">
                <Button 
                    className="recruit-menu-link" 
                    href="https://forms.gle/rgyAy9JMLTFPaHDe6 "
                >
                    Apply Here
                </Button>
                <Alert variant='light' className="recruit-menu-link-more">
                    Click on the team names below to learn more about the positions!
                </Alert>
            </div>
            <div className="recruit-menu-div">
                <div className="recruit-menu-col">
                    <h3 className="recruit-menu-col-title">Research.</h3>
                    <div className="recruit-menu-col-main">
                        <div className="recruit-menu-col-side"></div>
                        <div className="recruit-menu-col-text">
                            <TeamInfo 
                            teamName="Wetlab"
                            onClick={handleClick}
                            />
                            <TeamInfo 
                                teamName="Drylab"
                                onClick={handleClick}
                            />
                        </div>
                    </div>
                </div>
                <div className="recruit-menu-col">
                    <h3 className="recruit-menu-col-title">Society.</h3>
                    <div className="recruit-menu-col-main">
                        <div className="recruit-menu-col-side"></div>
                        <div className="recruit-menu-col-text">
                            <TeamInfo 
                                teamName="Fundraising"
                                onClick={handleClick}
                            />
                            <TeamInfo 
                                teamName="Human Practices"
                                onClick={handleClick}
                            />
                            {/* <TeamInfo 
                                teamName="Synbio for Everyone"
                                onClick={handleClick}
                            /> */}
                        </div>
                    </div>
                </div>
                <div className="recruit-menu-col">
                    <h3 className="recruit-menu-col-title">Information.</h3>
                    <div className="recruit-menu-col-main">
                        <div className="recruit-menu-col-side"></div>
                        <div className="recruit-menu-col-text">
                            <TeamInfo 
                                teamName="Design"
                                onClick={handleClick}
                            />
                            <TeamInfo 
                                teamName="Web Development"
                                onClick={handleClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {
                    team.expanded?
                    <RecruitPosition 
                        teamName={team.name}
                        positions={getPositions(team.name)}
                        // statement={teamInfoMap.get(team.name).statement}
                        // highlight={teamInfoMap.get(team.name).highlight}
                        // statementMore={teamInfoMap.get(team.name).statementMore}
                        // example={teamInfoMap.get(team.name).example}
                        // position={teamInfoMap.get(team.name).position}
                        // description={teamInfoMap.get(team.name).requirement}
                    />
                    : null
            }
            {/* <div className="recruit-menu-link-container">
                <Button 
                    className="recruit-menu-link" 
                    href="https://react-bootstrap.github.io/components/buttons/#api"
                >
                    Apply Here
                </Button>
            </div> */}
        </div>
    </>
}