import {useDropzone} from "react-dropzone"
import {useCallback} from "react"
import Image from "next/image"
const DropZoneComponent=({setFile})=>{
  const onDrop=useCallback((acceptedFiles)=>{
    console.log(acceptedFiles)
    setFile(acceptedFiles[0])


  },[])
  const {getRootProps,getInputProps,isDragAccept,isDragReject}=useDropzone(
    {
      onDrop,
      multiple:false,
      accept:"image/jpeg,image/png,image/jpg,audio/mpeg,video/mp4,text/plain,text/html,application/pdf"

    }
  )

  return(
    <>

    <div className="d-flex flex-column justify-items-center">
    <p className="text-center my-2">Jpg,Mp3,Mp4,Jpeg,Png,Pdf types file supported</p>

      <div {...getRootProps()} className="dropZone-box bg-secondary d-flex flex-column justify-content-center align-items-center ">

        <input {...getInputProps()}/>
        <div className={`dropBox ${isDragReject && `danger`} ${isDragAccept && `success`} d-flex flex-column align-items-center justify-items-center p-3`}
          >
          <Image src="/images.jpg" alt="myimg" width="50" height="50" className="mt-2"/>

          {
             isDragReject?(<p className="text-center">Sorry , this app not support this type of file </p>):
             (
               <p className="mt-5 text-center">Drag and Drop Files Here</p>
             )
          }


        </div>



      </div>
    </div>
    </>
  )

}
export default DropZoneComponent
