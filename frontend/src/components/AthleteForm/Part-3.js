import { useEffect, useState } from "react";

const Part3 = ({ receivePart3, step }) => {
    const [location, setLocation] = useState();
    const [about, setAbout] = useState();
    const [team, setTeam] = useState();
    const [interests, setInterests] = useState();

    useEffect(() => {
        receivePart3({ location, about, team, interests })
    }, [location, about, team, interests])

    return (< div style={{ display: step === 3 ? 'flex' : "none" }} className="part-3" >
        <label for="about">About Summary
            <label id='about-error' for="about"></label>
            <textarea
                name='about'
                placeholder='about'
                onChange={e => setAbout(e.target.value)}
            />
        </label>

        <label for="interests">Interests
            <label id='interests-error' for="interests"></label>
            <textarea
                name='interests'
                placeholder='interests'
                onChange={e => setInterests(e.target.value)}
            />
        </label>

        <label for="location">Location
            <label id='location-error' for="location"></label>
            <input
                required
                name="location"
                placeholder="Athlete location"
                type="string"
                // value={name}
                onChange={e => setLocation(e.target.value)}
            />
        </label>

        <label for="team">Team
            <label id='team-error' for="team"></label>
            <input
                required
                name='team'
                placeholder="Athlete's Team"
                onChange={e => setTeam(e.target.value)}
            />
        </label>
    </div>)
}

export default Part3;
