import Footer from "./components/footer";
import Header from "./components/header";
import Exhibitor from "./components/main/Exhibitor";
import Floorplan from "./components/main/Floorplan";
import Home from "./components/main/Home";
import MasterClass from "./components/main/MasterClass";
import Ticket from "./components/main/Ticket";

export default function App() {
  return (
    <div>
      <Header /> {/* 상단 고정 */}
      <main>
        <Home />
        <Ticket />
        <Exhibitor />
        <Floorplan />
        <MasterClass />
      </main>
      <Footer />
    </div>
  );
}
