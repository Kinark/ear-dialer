import styled from 'styled-components';
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";

 import Layout from '~/components/Layout';
 import Contacts from '~/pages/Contacts';
 import Dialer from '~/pages/Dialer';
 import Recent from '~/pages/Recent';

 const router = createBrowserRouter([
   {
     path: "/",
     element: <Layout />,
     children: [
       {
         path: "contacts",
         element: <Contacts />,
       },
       {
         path: "dialer",
         element: <Dialer />,
       },
       {
         path: "recent",
         element: <Recent />,
       },
     ],
   },
 ]);

const Routes = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default Routes;
