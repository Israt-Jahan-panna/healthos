
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";


const router = createBrowserRouter([
    {
      path: '/',
      element:<Home></Home>,
      children:[
        {
            path:"/login",
            element:<Login></Login>,
        },
        {
            path:"/registration",
            element:<Registration></Registration>,
        }
        
      ]
    },
  ]);

  export default router ;