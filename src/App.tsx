import Footer from './components/footer';
import Header from './components/header';
import Exhibitor from './components/main/Exhibitor';
import Home from './components/main/Home';
import Ticket from './components/main/Ticket';

export default function App() {
  return (
    <>
      <Header /> {/* 상단 고정 */}
      <main>
        <Home />
        <Ticket />
        <Exhibitor />
      </main>
      <Footer />
    </>
  );
}
