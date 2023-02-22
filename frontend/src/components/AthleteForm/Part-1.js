import { useEffect, useState } from "react";
import "./part-1.css"
import "../Athletes/athletes.css"

const Part1 = ({ receivePart1, step }) => {
    const [name, setName] = useState(null);
    const [avatar, setAvatar] = useState(null);
    var isLinkRegex = "/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$";

    // console.log(step)
    useEffect(() => {
        receivePart1({ name, avatar })
    }, [name, avatar])



    return (< div style={{ display: step === 1 ? 'flex' : "none" }} className="part-1 bootPart" >
        <p>Welcome to the Character Card creator!</p>
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
            <div className="preview">
                {avatar && (
                    // <img className="test-avatar" src={avatar} alt='test view of avatar' />
                    <div id='profile-card' className='profile test-avatar'>
                        <h2>Preview:</h2>
                        <div className='card'>

                            <div className="card-front">
                                <img className="card-img" src={avatar} />
                                <div className="front-info">
                                    <div id='basic-info'>
                                        {/* <p className="name">Name: {name}</p>
                            <p className="sports">Sport: {sports}</p> */}
                                        <p className="name">{name ? name : "<name>"}</p>
                                        <p className="sports">{"<class name>"}</p>
                                    </div>
                                    <div id='about'>
                                        {/* <p className="location">Location: {location}</p>
                            <p className="team">Team: {team}</p> */}
                                        <p className="team">{"<team>"}</p>
                                        <p className="location">{"<location>"}</p>
                                    </div>
                                </div >
                            </div>
                            <div className="card-back" >
                                <div className="back-info">
                                    <div id='basic-info'>
                                        <p className="name">Name: {name ? name : "<name>"}</p>
                                        <p className="sports">Class: {"<class name>"}</p>
                                    </div>
                                    <img className="back-img" src={avatar} />
                                    <div id='about'>
                                        <p className="team">Faction: {"<faction>"}</p>
                                        <p className="location">Location: {"<location>"}</p>
                                        <>About:<p className="about"> {"<about>"}</p></>
                                    </div>
                                </div >

                            </div>
                        </div>
                    </div>

                )}
            </div>


        </label>


    </div>)


}

export default Part1;
