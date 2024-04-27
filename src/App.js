import './App.css';
import { ROUTES } from "./const/routes";
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
  },
  {
    path: ROUTES.details+":id",
    element: <Details />,
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;