import {useState} from "react"

import RenderFile from "@/components/RenderFile"
import DropZoneComponent from "@/components/DropZoneComponent"
import Image from "next/image"
import axios from "axios"
import  EmailForm from "@/components/EmailForm"
import {BiCopyAlt} from "react-icons/bi"
function Home(){
  const [file,setFile]=useState(null)
  const[id,setId]=useState(null)
  const[uploadState,setUploadState]=useState("Upload")
  const[downloadPageLink,setDownloadPageLink]=useState(null)

  const handleFormData=async()=>{
    if(uploadState==="Uploading ..."){
      return;
    }
    setUploadState("Uploading ...")
    const formData=new FormData()
    formData.append("myFile",file)
    try{
      const {data}=await axios({
        method:"post",
        data:formData,
        url:"/api/file/upload",
        headers:{
          "Content-Type":"multipart/form-data",
        },

      })
      console.log(data)
      setUploadState("Uploaded")
      setDownloadPageLink(data.downloadPageLink)
      setId(data.id)

    }catch(error){
      console.log(error)
      setUploadState("Upload Failed !")
    }
  }
  const resetFile=()=>{
    setFile(null)
    setDownloadPageLink(null)
    setUploadState("Upload")
  }
  return (
    <div className="parent-div">

    <h3 className="mt-2 text-dark mt-2 ">Got a File ? Share it Like a Pro </h3>
    <Image src="/CopyBackupFiles.jpg" alt="backupfiles" width="100" height="100" className="imageFile mb-2"/>

      <div className="parent-div-first d-flex flex-column justify-content-center align-items-center" >


      {/* dropzone side*/}

        {
          !downloadPageLink &&(
            <DropZoneComponent setFile={setFile}/>
          )
        }


        {/* render file */}


        {
          file && (

            <RenderFile file={{
              format:file.type.split("/")[1],
              name:file.name,
              sizeInBytes:file.size
            }}/>
          )
        }
        {
          !downloadPageLink && file &&
          (
            <button type="button" onClick={handleFormData} className="btn btn-primary mb-2">{uploadState}</button>
          )
        }

      {
        downloadPageLink &&(
          <div className="text-center">
            <div>
              <div className="mt-4">Download file link </div>
              <div className="d-flex justify-content-between  align-items-center mt-1 mb-5 " style={{width:"30vw"}}>

                <div>{downloadPageLink}</div>
                  <BiCopyAlt size={20} style={{cursor:"pointer"}}
                    onClick={()=>navigator.clipboard.writeText(downloadPageLink)}
                    />
              </div>

            </div>
            <EmailForm id={id}/>

            <button className="btn btn-primary mb-2 mt-2"
              onClick={resetFile}
            >
              Upload new File
            </button>
          </div>
        )
      }
      {/* email form */}



      </div>
    </div>
  )
}

export default Home
