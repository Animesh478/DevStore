import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <main className=" flex flex-col items-center">
        <HomePage />
      </main>
      <Footer />
    </>
  );
}

export default App;
