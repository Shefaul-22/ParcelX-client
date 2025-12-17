import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Home/HomePage/Homepage";
import Covarage from "../pages/Covarage/Covarage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [

        {
            index: true, 
            Component: Homepage,
        },
        
        {
          path: "coverage",
          Component: Covarage,
        }
    ]
  },
]);