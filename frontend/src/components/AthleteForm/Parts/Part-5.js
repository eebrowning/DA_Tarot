import { useEffect, useRef, useState } from "react";
import '../Styles/part-5.css'
import factionData from '../../../util/factionData';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'


const Part5 = ({ receivePart5, step }) => {
    const [location, setLocation] = useState();
    const [about, setAbout] = useState();
    const [team, setTeam] = useState("Inquisition");
    const [interests, setInterests] = useState();
    let teams = Object.keys(factionData);
    const options = {
        scrollSpeed: 2,
        // minScrollbarLength: 100,
        maxScrollbarLength: 80,
    };

    useEffect(() => {
        receivePart5({ location, about, team, interests })
    }, [location, about, team, interests])


    const handleSelectTeam = (e) => {
        e.preventDefault();
        console.log(document.getElementById(e.target.id).previousSibling, 'boo')
        document.getElementById(e.target.id).previousSibling.checked = 'true'
        setTeam(e.target.id)
    }

    return (< div style={{ display: step === 5 ? 'flex' : "none" }} className="part-5 bootPart" >
        <div id="team-location  ">
            <label className="faction-label">Faction</label>
            <PerfectScrollbar id="team-input"
                options={options}
                className='horizontal-scroll'
            >
                {factionData && teams.map(team => (
                    <div className={`form-check form-check-inline team`} key={team} >
                        <input type='radio' className="form-check-input" name="faction" value={factionData[team]['name']} />
                        <img alt={`${team} faction icon`} id={team} className='faction-icon' src={factionData[team]['url']} onClick={handleSelectTeam} />
                        <p className="team-name">{factionData[team]['name']}</p>
                    </div>
                ))}
            </ PerfectScrollbar >

            <label id='team-error' htmlFor="team" className="form-label"></label>
            <label htmlFor="location" className="form-label form-location">Location
                <label id='location-error' htmlFor="location"></label>
                <input
                    required
                    className="form-control boot-data"
                    minLength={4}
                    maxLength={30}
                    name="location"
                    placeholder="Athlete location"
                    type="string"
                    onChange={e => setLocation(e.target.value)}
                />
            </label>

        </div>

        <label htmlFor="about" className="form-label form-about">About Summary
            <label id='about-error' htmlFor="about"></label>
            <textarea
                required
                className="form-control boot-data"
                type='text'
                minLength={10}
                name='about'
                placeholder='About(min 10 characters)'
                onChange={e => setAbout(e.target.value)}
            />
        </label>

    </div >)
}

export default Part5;
