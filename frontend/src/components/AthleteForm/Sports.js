import { useEffect, useState } from "react";


const Sports = ({ sports }) => {

    let [sportSelect, setSportSelect] = useState();


    let sportsArr = [
        'Golf', 'Tennis', 'Cricket', 'Basketball', 'Baseball', 'American Football', 'Aquatics', 'Archery', 'Automobile Racing', 'Badminton', 'Beach Volleyball', 'Bobsleigh', 'Body Building', 'Boxing', 'Cross Country Running', 'Cross Country Skiing', 'Curling', 'Cycling', 'Darts', 'Decathlon', 'Down Hill Skiing', 'Equestrianism', 'eSports', 'Fencing', 'Field Hockey', 'Figure Skating', 'Gymnastics', 'Ice Hockey', 'Martial Arts', 'Mixed Martial Arts', 'Modern Pentathlon', 'Motorcycle Racing', 'Netball', 'Polo', 'Racquetball', 'Rowing', 'Rugby', 'Sailing', 'Softball', 'Shooting', 'Skateboarding', 'Skeet Shooting', 'Skeleton', 'Snow Boarding', 'Soccer (Football)', 'Squash', 'Surfing', 'Swimming', 'Track and Field'
    ]

    // useEffect(() => {
    // console.log(sportSelect)
    // }, [sportSelect])

    const handleSports = (e) => {
        e.preventDefault();
        // if (sportSelect.indexOf(e.target.value) == -1) {
        //     // setSportSelect(sportSelect ? `${sportSelect}-${e.target.value}` : e.target.value)
        //     setSportSelect(sportSelect ? `${sportSelect}-${e.target.value}` : e.target.value)

        // }
        if (!sportSelect) {
            setSportSelect(e.target.value)

        }
        // console.log(sportSelect)
    }



    return (
        <>
            <select onChange={handleSports} id='sports-select' multiple>
                {
                    sportsArr.map(sport => (
                        <option >{sport}</option>
                    ))
                }
            </select>
        </>
    )
}
export default Sports;
