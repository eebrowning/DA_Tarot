import { useEffect, useState } from "react";

const Part2 = ({ receivePart2, step }) => {
    let sportsArr = [
        'Golf', 'Tennis', 'Cricket', 'Basketball', 'Baseball', 'American Football', 'Aquatics', 'Archery', 'Automobile Racing', 'Badminton', 'Beach Volleyball', 'Bobsleigh', 'Body Building', 'Boxing', 'Cross Country Running', 'Cross Country Skiing', 'Curling', 'Cycling', 'Darts', 'Decathlon', 'Down Hill Skiing', 'Equestrianism', 'eSports', 'Fencing', 'Field Hockey', 'Figure Skating', 'Gymnastics', 'Ice Hockey', 'Martial Arts', 'Mixed Martial Arts', 'Modern Pentathlon', 'Motorcycle Racing', 'Netball', 'Polo', 'Racquetball', 'Rowing', 'Rugby', 'Sailing', 'Softball', 'Shooting', 'Skateboarding', 'Skeet Shooting', 'Skeleton', 'Snow Boarding', 'Soccer (Football)', 'Squash', 'Surfing', 'Swimming', 'Track and Field'
    ]
    const [gender, setGender] = useState();
    const [sports, setSports] = useState();
    const [birthdate, setBirthdate] = useState();

    useEffect(() => {
        receivePart2({ gender, sports, birthdate })
    }, [gender, sports, birthdate])

    return (<div style={{ display: step === 2 ? 'flex' : "none" }} className="part-2 bootPart">
        <label for="sports" className="form-label">Sport
            <label id='sports-error' for="sports"></label>
            <select name='sports' id='sports-select' className="form-control boot-data" onChange={e => setSports(e.target.value)} required>
                <option>{null}</option>
                {
                    sportsArr.map(sport => (
                        <option key={sport}>{sport}</option>
                    ))
                }
            </select>
        </label>
        <label for="gender-select" className="form-label">Gender
            <label id='gender-error' for="gender-select"></label>
            <select onChange={e => setGender(e.target.value)} id='gender' className="form-control boot-data" required>
                <option>{null}</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>

            </select>
        </label>
        <label for="birthdate" className="form-label">Birthdate
            <label id='birthdate-error' for="birthdate"></label>
            <input
                required
                name='birthdate'
                placeholder="Athlete's birthdate"
                type='date'
                className="form-control boot-data"

                onChange={e => setBirthdate(e.target.value)}
            />
        </label>
    </div>)
}

export default Part2;
