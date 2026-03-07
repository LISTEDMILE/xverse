import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Headers";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";

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
      children: [{ path: "/", element: <LandingPage /> }],
    },
  ]);

  return <RouterProvider router ={routes}/>;
}

export default App;
