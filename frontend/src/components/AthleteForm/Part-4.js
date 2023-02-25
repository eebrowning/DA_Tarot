import { useEffect, useState } from "react";
import "./part-4.css"
import "../Athletes/athletes.css"

const Part4 = ({ receivePart4, step }) => {
    const [name, setName] = useState(null);
    const [avatar, setAvatar] = useState(null);
    var isLinkRegex = "/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$";


    useEffect(() => {
        receivePart4({ name, avatar })
    }, [name, avatar])



    return (
        < div style={{ display: step === 4 ? 'flex' : "none" }} className="part-4 bootPart" >
            <p>Welcome to the Character Card creator!</p>
            <p>We will start with your character name and tarot image link: check out how they look on the preview card below</p>

            <label htmlFor="name" className="form-label">Athlete name
                <label id='name-error' htmlFor="name"></label>
                <input
                    required
                    name="name"
                    id="name"
                    minLength={4}
                    className="form-control boot-data"
                    placeholder="Athlete name"
                    type="text"
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <label htmlFor="avatar" className="form-label">Avatar link
                <label id='avatar-error' htmlFor="avatar"></label>
                <input
                    name='avatar'
                    className="form-control boot-data"
                    placeholder='Image link in jpg / jpeg format'
                    id='avatar'
                    type="text"
                    pattern="(https:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)"
                    onChange={e => setAvatar(e.target.value)}
                    required
                />


            </label>

        </div>)


}

export default Part4;



// import { useEffect, useState } from "react";

// const Part4 = ({ receivePart4, step }) => {
//     const [location, setLocation] = useState();
//     const [about, setAbout] = useState();
//     const [team, setTeam] = useState();
//     const [interests, setInterests] = useState();

//     useEffect(() => {
//         receivePart4({ location, about, team, interests })
//     }, [location, about, team, interests])

//     return (< div style={{ display: step === 4 ? 'flex' : "none" }} className="part-4 bootPart" >
//         <div id="team-location">
//             <label htmlFor="team">Team
//                 <label id='team-error' htmlFor="team" className="form-label"></label>
//                 <input
//                     required
//                     name='team'
//                     className="form-control boot-data"
//                     minLength={4}

//                     placeholder="Athlete's Team"
//                     onChange={e => setTeam(e.target.value)}
//                 />
//             </label>
//             <label htmlFor="location" className="form-label">Location
//                 <label id='location-error' htmlFor="location"></label>
//                 <input
//                     required
//                     className="form-control boot-data"
//                     minLength={4}
//                     name="location"
//                     placeholder="Athlete location"
//                     type="string"
//                     // value={name}
//                     onChange={e => setLocation(e.target.value)}
//                 />
//             </label>

//         </div>

//         <label htmlFor="about" className="form-label">About Summary
//             <label id='about-error' htmlFor="about"></label>
//             <textarea
//                 required
//                 className="form-control boot-data"
//                 type='text'
//                 minLength={10}
//                 name='about'
//                 placeholder='About(min 10 characters)'
//                 onChange={e => setAbout(e.target.value)}
//             />
//         </label>

//         {/* <label htmlFor= "interests" className="form-label">Interests
//             <label id='interests-error' htmlFor= "interests"></label>
//             <textarea
//                 name='interests'
//                 className="form-control"
//                 placeholder='interests'
//                 onChange={e => setInterests(e.target.value)}
//             />
//         </label> */}


//     </div>)
// }

// export default Part4;
