import { useEffect, useState } from "react";
import './part-2.css'
import classData from "../../util/classData";


////TODO for dragon age app: make radio options for gender, after gender selected, move to class.
//class radio options appear, after selection, next enabled.
//this will be the test of the DA:Inquisition-like character detail menu.
const Part2 = ({ receivePart2, step }) => {
    let testData = Object.values(classData);
    let testData2 = Object.keys(classData);

    let sportsArr = [];
    testData.forEach(entry => { sportsArr.push(entry['class']) })
    const [gender, setGender] = useState();
    const [sports, setSports] = useState();
    // const [birthdate, setBirthdate] = useState();
    const [birthdate, setBirthdate] = useState("1111-11-11T00:00:00.000Z");//temp to disable input TODO
    console.log(testData, testData2)

    useEffect(() => {
        receivePart2({ gender, sports, birthdate })
    }, [gender, sports, birthdate])

    return (<div style={{ display: step === 2 ? 'flex' : "none" }} className="part-2 bootPart">
        <label htmlFor="sports" className="form-label">Select Class
            <label id='sports-error' htmlFor="sports"></label>
            {/* 
            KEEP, former form structure
            <select  name='sports' id='sports-select' className="form-control boot-data" onChange={e => setSports(e.target.value)} required>
                <option>{null}</option>
                {
                    sportsArr.map(sport => (
                        <option key={sport}>{sport}</option>
                    ))
                }
            </select> 
            */}
            <div name='sports' id='sports-select' >
                {
                    sportsArr?.map(sport => (
                        <div class={`form-check form-check-inline sport`} id={`${sport}-card`}>
                            <input type='radio' className="form-check-input " name="inlineRadioOptions" value={sport} id={`inlineRadio${sport}`} />
                            <label className="form-check-label" htmlFor={`inlineRadio${sport}`} style={{ backgroundImage: `URL(${classData[sport]["cardURL"]})` }}>
                                {sport}
                            </label>
                        </div>
                    ))
                }
            </div>
        </label >




        <label htmlFor="gender-select" className="form-label">Gender
            <label id='gender-error' htmlFor="gender-select"></label>
            <select onChange={e => setGender(e.target.value)} id='gender' className="form-control boot-data" required>
                <option>{null}</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>

            </select>
        </label>
        {/* temp disable  */}
        {/* <label htmlFor="birthdate" className="form-label">Birthdate
            <label id='birthdate-error' htmlFor="birthdate"></label>
            <input
                required
                name='birthdate'
                placeholder="Athlete's birthdate"
                type='date'
                className="form-control boot-data"

                onChange={e => setBirthdate(e.target.value)}
            />
        </label> */}
    </div >)
}

export default Part2;
