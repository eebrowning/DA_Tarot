import { useEffect, useState } from "react";

const Part4 = ({ receivePart4, step }) => {
    const [location, setLocation] = useState();
    const [about, setAbout] = useState();
    const [team, setTeam] = useState();
    const [interests, setInterests] = useState();

    useEffect(() => {
        receivePart4({ location, about, team, interests })
    }, [location, about, team, interests])

    return (< div style={{ display: step === 4 ? 'flex' : "none" }} className="part-4 bootPart" >
        <div id="team-location">
            <label htmlFor="team">Team
                <label id='team-error' htmlFor="team" className="form-label"></label>
                <input
                    required
                    name='team'
                    className="form-control boot-data"
                    minLength={4}

                    placeholder="Athlete's Team"
                    onChange={e => setTeam(e.target.value)}
                />
            </label>
            <label htmlFor="location" className="form-label">Location
                <label id='location-error' htmlFor="location"></label>
                <input
                    required
                    className="form-control boot-data"
                    minLength={4}
                    name="location"
                    placeholder="Athlete location"
                    type="string"
                    // value={name}
                    onChange={e => setLocation(e.target.value)}
                />
            </label>

        </div>

        <label htmlFor="about" className="form-label">About Summary
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

        {/* <label htmlFor= "interests" className="form-label">Interests
            <label id='interests-error' htmlFor= "interests"></label>
            <textarea
                name='interests'
                className="form-control"
                placeholder='interests'
                onChange={e => setInterests(e.target.value)}
            />
        </label> */}


    </div>)
}

export default Part4;
