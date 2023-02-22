import { useEffect, useState } from "react";
import "./part-1.css"
import "../Athletes/athletes.css"

const Part1 = ({ receivePart1, step }) => {
    const [name, setName] = useState(null);
    const [avatar, setAvatar] = useState(null);
    var isLinkRegex = "/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$";


    useEffect(() => {
        receivePart1({ name, avatar })
    }, [name, avatar])



    return (
        < div style={{ display: step === 1 ? 'flex' : "none" }} className="part-1 bootPart" >
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

export default Part1;
