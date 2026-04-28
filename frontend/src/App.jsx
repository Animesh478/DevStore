import Footer from "./components/Footer";
import Header from "./components/Header";
// import HomePage from "./pages/HomePage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className=" flex flex-col items-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
