import {BiCopyAlt} from "react-icons/bi"

const DownloadFile = ({ downloadPageLink }) => {
  return(
    <div>
      <div className="mt-4">Download file link </div>
      <div className="d-flex justify-content-between  align-items-center mt-1 mb-5 " style={{width:"30vw"}}>

        <div>{downloadPageLink}</div>
          <BiCopyAlt size={20} style={{cursor:"pointer"}}
            onClick={()=>navigator.clipboard.writeText(downloadPageLink)}
            />
      </div>
    </div>


  )
}
export default DownloadFile
