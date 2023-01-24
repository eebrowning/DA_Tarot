import { useEffect, useState } from "react";

const Part1 = ({ receivePart1, step }) => {
    const [name, setName] = useState(null);
    const [avatar, setAvatar] = useState(null);

    // console.log(step)
    useEffect(() => {
        receivePart1({ name, avatar })
    }, [name, avatar])

    return (< div style={{ display: step === 1 ? 'flex' : "none" }} className="part-1" >
        {/* <label for="avatar">Avatar link
            <label id='avatar-error' for="avatar"></label>
            <input
                name='avatar'
                className="form-control"
                placeholder='Image link in jpg / jpeg format'
                // value={imageURL}
                onChange={e => setAvatar(e.target.value)}
            />
        </label>
        <label for="name">Athlete name
            <label id='name-error' for="name"></label>
            <input
                required
                name="name"
                id="validationCustom01"
                className="form-control"
                placeholder="Athlete name"
                type="text"
                // value={name}
                onChange={e => setName(e.target.value)}
            />
        </label> */}
        <label for="name" className="form-label">Athlete name
            <label id='name-error' for="name"></label>
            <input
                required
                name="name"
                id="name"
                className="form-control"
                placeholder="Athlete name"
                type="text"
                onChange={e => setName(e.target.value)}
            />
        </label>
        <label for="avatar" className="form-label">Avatar link
            <label id='avatar-error' for="avatar"></label>
            <input
                name='avatar'
                className="form-control"
                placeholder='Image link in jpg / jpeg format'
                id='avatar'
                type="text"
                onChange={e => setAvatar(e.target.value)}
                required
            />
        </label>


    </div>)
}

export default Part1;
