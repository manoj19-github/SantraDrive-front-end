import '../styles/globals.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
axios.defaults.baseURL=process.env.NEXT_PUBLIC_API_BASE_ENDPOINT
function MyApp({ Component, pageProps }) {
  return(
      <div className="main-div">
        <div className="second-div"><h1>Santra Drive</h1></div>
        <div className="third-div"><Component {...pageProps} /></div>
      </div>
  )
}

export default MyApp
