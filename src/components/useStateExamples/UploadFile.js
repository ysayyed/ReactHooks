import { useState } from "react"


export default function UploadFile() {
    const [file, setFile] = useState()
    function fileUpload(event) {
        setFile(event.target.files[0])
    }
    function handleUpload(event) {
        event.preventDefault()
        alert("Uploaded Successfully")
    }

    return (
        <div style={{ margin: "5%" }}>
            <form encType="multipart/form-data">
                <input type="file" alt="SomeFile" onChange={fileUpload} /> &nbsp;
                <button type="submit" onClick={handleUpload}>Upload</button>
            </form> <br />
            <div style={{ width: "500px", height: "500px" }}>
                <img src={file && window.URL.createObjectURL(file)} alt="" width={"100%"} />
            </div>
        </div>
    )
}