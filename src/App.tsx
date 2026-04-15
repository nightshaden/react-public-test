import Footer from './components/footer';
import Header from './components/header';
import Home from './components/main/Home';

export default function App() {
  return (
    <>
      <Header /> {/* 상단 고정 */}
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}
