
import axios from "axios"
import Image from "next/image"
import RenderFile from "components/RenderFile"
import  fileDownload from "js-file-download"

const Index=({file})=>{
  const handleDownload=async()=>{
    const {data}=await axios.get(`/api/file/${file.id}/download`,{
      responseType:"blob",
    })
    fileDownload(data,file.name)
  }

  return(
    <div className="download-box">
    {
      !file.id?
      (<div>Oops ! file does not exist </div>)
      :
        <>
          <Image src={`/fileTypes/download.png`} height="70" width="70" alt="download" />
          <p className="mt-4">Your file is ready to be downloaded</p>
          <RenderFile file={file}/>
          <button onClick={handleDownload} className="btn btn-primary">Download</button>
        </>

    }

    </div>
  )
}
export default Index;
export async function getServerSideProps(context){
  const {id}=context.query
  let file;
  try{
    const {data}=await axios.get(`${process.env.API_BASE_ENDPOINT}/api/file/${id}`)
    file=data
  }catch(error){
    console.log(error)
    file={}
  }

  return{
    props:{
      file
    }
  }
}
