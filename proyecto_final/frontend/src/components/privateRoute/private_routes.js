import {Navigate, Outlet} from "react-router-dom";
import auth from "../sessionContext"

const PrivateRoutes = () => {
  return (
    auth.token? <Outlet/> : <Navigate to="/ingreso"/>  
  )
}
export default PrivateRoutes;