import { useCallback, useEffect, useState } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from './cropImage';
import "./crop-easy.css"
import ReactSlider from 'react-slider';
import { uploadImage } from '../../../../api';


const CropEasy = ({ avatar, setAvatar }) => {
    // const CropEasy = ({ setOpenCreate, photoURL, setOpenCrop, setPhotoURL, setImage }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [photoURL, setPhotoURL] = useState(avatar);

    // const [image, setImage] = useState();

    useEffect(() => {

        setPhotoURL(avatar)
        // setZoom(1)
        // setCrop({ x: 0, y: 0 })
        // document.querySelector('reactEasyCrop_Image').src = testFile
    }, [avatar])


    const cropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }

    const cropImage = async (e) => {
        e.preventDefault();
        const { file, url } = await getCroppedImg(photoURL, croppedAreaPixels)
        setPhotoURL(url)
        setCroppedAreaPixels(0)
        setZoom(1)
        // let fileName= Date.now()+'-'+avatar;
        let data = new FormData()
        data.append('file', blobToFile(file))
        let res = await uploadImage(data);
        console.log(res.data.url, 'url')
        setAvatar(res.data.url);


    };

    const blobToFile = (blob) => {
        //name should be returned as the same so it replaces resized image
        const croppedFile = new File([blob], `${avatar}`, {
            type: blob.type
        })
        return croppedFile;
    }


    return (
        <div className='crop-easy-outer'>

            <div className="crop-container">

                <div className="crop-cropper">
                    <Cropper
                        image={photoURL}
                        crop={crop}
                        zoom={zoom}
                        aspect={28 / 45}
                        onZoomChange={setZoom}
                        onCropChange={setCrop}
                        // onChange={(crop) => setCrop(crop)}
                        // onZoomChange={(zoom) => setZoom(zoom)}
                        onCropComplete={cropComplete}
                        minZoom={1}
                        maxZoom={3}
                    />
                </div>
            </div>
            <div className="crop-slider">
                <div className='crop-bttn-div'>
                    <div className='crop-bttn-border'></div>
                    <button
                        className="crop-bttn"
                        onClick={cropImage}>
                        Crop
                    </button>
                </div>
                <ReactSlider
                    value={zoom}
                    onChange={(val) => {
                        setZoom(val)
                    }}
                    min={1}
                    max={3}
                    step={.01}
                    className="horizontal-slider"
                    thumbClassName="zoom-thumb"
                    trackClassName="zoom-track"
                // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                />
            </div>

        </div>

    )
}

export default CropEasy;
