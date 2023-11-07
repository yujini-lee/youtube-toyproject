import { Reset } from "styled-reset";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./page/Root";
import NotFound from "./page/NotFound";
import Home from "./page/Home";
import ItemDetail from "./page/ItemDetail";

const router = createBrowserRouter([
  { path: "/", 
  element: <Root />,
  errorElement: <NotFound/>,
  children: [
    {index: true, element: <Home/>,},
    {path:'/list:videoId', element: <ItemDetail/>}
  ]
 }
]);
function App() {
  return (
    <>
      <Reset />
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
