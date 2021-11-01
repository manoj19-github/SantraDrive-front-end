import {useState} from "react"
import axios from "axios"

const EmailForm=({id})=>{

  const [emailTo,setEmailTo]=useState("")
  const [emailFrom,setEmailFrom]=useState("")
  const[emailSend,setEmailSending]=useState("")
  const submitHandler=async(event)=>{

    event.preventDefault()
    if (emailSend ==="email sending ...") return
    setEmailSending("email sending ...")
    try{
      const {data}=await axios({
        method:'post',
        url:"/api/file/email",
        data:{
          id,emailFrom,emailTo
        },

      })

      setEmailSending("email sended successfully")
    }catch(error){
      setEmailSending("email sending failed")
      console.log(error)
    }


  }

  return(
    <div className="form-div">
      <h4 className="text-center"> You can send the file through mail </h4>
      <div>
        <form onSubmit={submitHandler}>
          <div className="form-group">

            <input
              type="email"
              value={emailTo}
              className="form-control"
              placeholder="Your Email"
              onChange={(e)=>setEmailTo(e.target.value)}
              required style={{width:"40vw"}}
              />
          </div>
          <div className="form-group">

            <input
              type="email"
              value={emailFrom}
              placeholder="Receiver Email"
              className="form-control mt-2"
              onChange={(e)=>setEmailFrom(e.target.value)}
              required
              style={{width:"40vw"}}
              />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button type="submit" className="btn btn-primary mt-3 mb-2" >Send Mail</button>

          </div>
          {emailSend && (<div>{emailSend}</div>)}

        </form>

      </div>



    </div>
  )

}
export default EmailForm
