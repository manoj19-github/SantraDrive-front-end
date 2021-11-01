import {FunctionComponent} from "react"
import Image from "next/image"
import {sizeInMb} from "libs/sizeInMb"
const RenderFile=({file})=>{

  return(
    <div className="d-flex justify-content-center align-items-center " style={{width:"100%",margin:"1rem 0"}}>
      <Image src={`/fileTypes/${file.format}.png`} alt="" width="70" height="70"/>
      <div className="d-flex  justify-content-around align-items-center" style={{width:"75%"}}>
        <div>{file.name}</div>
        <div>{sizeInMb(file.sizeInBytes)}</div>

      </div>

    </div>
  )
}
export default RenderFile
