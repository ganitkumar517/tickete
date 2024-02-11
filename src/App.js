import "./App.css";
import CartDetail from "./components/Cart";
import Navbar from "./components/Navbar";
import Feedback from "./components/feedback";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <CartDetail />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
