import { useEffect, useState } from "react";

const Part1 = ({ receivePart1, step }) => {
    const [name, setName] = useState();
    const [avatar, setAvatar] = useState();

    // console.log(step)
    useEffect(() => {
        receivePart1({ name, avatar })
    }, [name, avatar])

    return (< div style={{ display: step === 1 ? 'flex' : "none" }} className="part-1" >
        <label for="avatar">Avatar link
            <label id='avatar-error' for="avatar"></label>
            <input
                name='avatar'
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
                placeholder="Athlete name"
                type="string"
                // value={name}
                onChange={e => setName(e.target.value)}
            />

        </label>

    </div>)
}

export default Part1;
