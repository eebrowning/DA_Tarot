import { useEffect, useState } from "react";
import '../Styles/part-4.css'
import "../../Athletes/athletes.css"


import { uploadImage } from "../../../api";
import { useSelector } from "react-redux";
import CropEasy from "../ImageUtils/crop/CropEasy";


const Part4 = ({ receivePart4, step }) => {
    const [name, setName] = useState(null);
    const [avatar, setAvatar] = useState(null);
    var isLinkRegex = "/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$";
    const user = useSelector((state) => state.session.user)


    useEffect(() => {
        receivePart4({ name, avatar })
        console.log(avatar, 'avatar')

    }, [name, avatar])


    const updateImage = async (e) => {
        const file = e.target.files[0];
        const typeError = [];
        // console.log('user', user)
        let payload = new FormData();
        payload.append('file', file)
        payload.append('user', user.id)

        let res = await uploadImage(payload);
        setAvatar(res.data.url);

    }
    return (
        <div className="part-4-outer">
            < div style={{ display: step === 4 ? 'flex' : "none" }} className="part-4 bootPart" >
                <div className="crop-box">
                    {/* <button htmlFor='file' onClick={updateImage}>Upload</button> */}
                    <div id="CropEasy">
                        <CropEasy avatar={avatar} setAvatar={setAvatar} />
                    </div>
                </div>

                <div className='part-4-input-fields'>
                    <label htmlFor="name" className="form-label">
                        <p>
                            Character name:
                            <label id='name-error' htmlFor="name"></label>
                            <input
                                required
                                name="name"
                                id="name"
                                minLength={4}
                                className="form-control boot-data"
                                placeholder="Character name"
                                type="text"
                                onChange={e => setName(e.target.value)}
                            />
                        </p>
                    </label>
                    <p className="card-text">Choose a file and crop if necessary:
                        <input className="form-control boot-data" type="file" name="file" onChange={updateImage} required />

                    </p>

                </div>
                {/* <label htmlFor="avatar" className="form-label">Avatar link
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
            </label> */}
            </div>

        </div>)


}

export default Part4;
