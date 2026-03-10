import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Headers";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  const routes = createBrowserRouter([
    {
      element: <Layout />,
      children: [{ path: "/", element: <LandingPage /> },
        {path:"/login",element:<Login/>}
      ],
    },
  ]);

  return <RouterProvider router ={routes}/>;
}

export default App;
