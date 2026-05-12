import Footer from "./components/footer";
import Header from "./components/header";
import Exhibitor from "./components/main/Exhibitor";
import ExhibitorMobile from "./components/main/ExhibitorMobile";
import Floorplan from "./components/main/Floorplan";
import Home from "./components/main/Home";
import MasterClass from "./components/main/MasterClass";
import MasterClassMobile from "./components/main/MasterClassMobile";
import Ticket from "./components/main/Ticket";
import { useRef } from "react";

export default function App() {
  const homeRef = useRef<HTMLElement>(null);
  const TicketRef = useRef<HTMLElement>(null);
  const masterClassRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    const headerHeight = 64;
    const top = ref.current?.getBoundingClientRect().top ?? 0;
    window.scrollBy({ top: top - headerHeight, behavior: "smooth" });
  };

  const navItems = [
    { label: "홈", onClick: () => scrollTo(homeRef) },
    { label: "티켓", onClick: () => scrollTo(TicketRef) },
    { label: "강연", onClick: () => scrollTo(masterClassRef) },
    { label: "CONTACT", onClick: () => scrollTo(footerRef) },
  ];

  return (
    <div>
      <Header navItems={navItems} /> {/* 상단 고정 */}
      <main>
        <Home ref={homeRef} />
        <Ticket ref={TicketRef} />
        <div className="xl:hidden">
          <ExhibitorMobile />
        </div>
        <div className="hidden xl:block">
          <Exhibitor />
        </div>
        <Floorplan />
        <div className="xl:hidden">
          <MasterClassMobile />
        </div>
        <div className="hidden xl:block">
          <MasterClass ref={masterClassRef} />
        </div>
      </main>
      <Footer ref={footerRef} />
    </div>
  );
}
