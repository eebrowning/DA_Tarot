import { useState } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from './cropImage';
import "./crop-easy.css"
import ReactSlider from 'react-slider';


const CropEasy = () => {
    // const CropEasy = ({ setOpenCreate, photoURL, setOpenCrop, setPhotoURL, setImage }) => {

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    //TODO: holdout, this stuff will need to be passed from/handled in props, this is just a test of the editor.
    const [openCreate, setOpenCreate] = useState();
    const [openCrop, setOpenCrop] = useState();
    const [photoURL, setPhotoURL] = useState("https://tse4.mm.bing.net/th?id=OIP.U0SfqHcCr4A3TEW4cIDGOQHaEI&pid=Api");
    const [image, setImage] = useState();


    const cropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }

    const cropImage = async (e) => {
        e.preventDefault();
        const { file, url } = await getCroppedImg(photoURL, croppedAreaPixels)
        setPhotoURL(url)
        setImage(blobToFile(file))
        setOpenCrop(false)
        setOpenCreate(true)

    };


    const blobToFile = (blob) => {
        const croppedFile = new File([blob], "image.jpeg", {
            type: blob.type
        })
        return croppedFile;
    }



    return (
        <div className="crop-container">
            <div className='crop-bttn'>
                <button
                    className="create-post-share-button"
                    onClick={cropImage}>
                    Next
                </button>
            </div>
            <div className="crop-cropper">
                <Cropper
                    image={photoURL}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    onZoomChange={setZoom}
                    onCropChange={setCrop}
                    onCropComplete={cropComplete}
                />
            </div>
            <div className="crop-slider">
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
                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                />
            </div>
        </div>
    )
}

export default CropEasy;
