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
        <div id="team-location">
            <label for="team">Team
                <label id='team-error' for="team" className="form-label"></label>
                <input
                    required
                    name='team'
                    className="form-control"
                    minLength={4}

                    placeholder="Athlete's Team"
                    onChange={e => setTeam(e.target.value)}
                />
            </label>
            <label for="location" className="form-label">Location
                <label id='location-error' for="location"></label>
                <input
                    required
                    className="form-control"
                    minLength={4}
                    name="location"
                    placeholder="Athlete location"
                    type="string"
                    // value={name}
                    onChange={e => setLocation(e.target.value)}
                />
            </label>

        </div>

        <label for="about" className="form-label">About Summary
            <label id='about-error' for="about"></label>
            <textarea
                required
                className="form-control"
                type='text'
                minLength={10}
                name='about'
                placeholder='About(min 10 characters)'
                onChange={e => setAbout(e.target.value)}
            />
        </label>

        {/* <label for="interests" className="form-label">Interests
            <label id='interests-error' for="interests"></label>
            <textarea
                name='interests'
                className="form-control"
                placeholder='interests'
                onChange={e => setInterests(e.target.value)}
            />
        </label> */}

    </div>)
}

export default Part3;
