import { useState } from "react";
import { Drawer, DrawerClose, DrawerContent } from "./ui/drawer";

type NavItem = {
  label: string;
  onClick: () => void;
};

export default function Header({ navItems }: { navItems: NavItem[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (onClick: () => void) => {
    onClick();
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 z-60 flex w-full flex-nowrap bg-black/70 px-3 py-1 whitespace-nowrap backdrop-blur-lg xl:px-8 xl:py-2">
      <div className="flex w-full max-w-480 items-center justify-between">
        <a
          href="/"
          className="font-black-han mt-1 flex items-center justify-start text-xl text-[20px] leading-7 font-normal text-white xl:mt-1 xl:h-14 xl:w-80 xl:text-4xl xl:leading-[53.47px]"
        >
          CASK CARNIVAL
        </a>

        {/* 데스크탑 */}
        <nav className="hidden items-end justify-end-safe text-center xl:flex">
          <ul className="font-poppins flex gap-30 py-4 text-3xl font-normal">
            {navItems.map((item, index) => (
              <li
                key={item.label}
                onClick={item.onClick}
                className={`cursor-pointer transition-colors ${index === 0 ? "text-orange-600" : ""}`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>

        {/* 모바일환경 - 메뉴버튼 */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-12 w-12 items-center justify-center text-white xl:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-align-right"
            aria-hidden="true"
          >
            <line x1="21" y1="10" x2="7" y2="10" />
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="3" y2="14" />
            <line x1="21" y1="18" x2="7" y2="18" />
          </svg>
        </button>
      </div>

      <Drawer
        open={isMenuOpen}
        onOpenChange={setIsMenuOpen}
        direction="right"
        modal={true}
      >
        <DrawerContent className="fixed inset-y-0 right-0 z-50 flex h-auto w-[80%] flex-col rounded-none bg-black/90 backdrop-blur-lg">
          <div className="flex h-14 items-center justify-end px-3">
            <DrawerClose>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-align-right"
                  aria-hidden="true"
                >
                  <line x1="21" y1="10" x2="7" y2="10" />
                  <line x1="21" y1="6" x2="3" y2="6" />
                  <line x1="21" y1="14" x2="3" y2="14" />
                  <line x1="21" y1="18" x2="7" y2="18" />
                </svg>
              </button>
            </DrawerClose>
          </div>
          <nav className="right-4 min-w-40 rounded-lg shadow-lg">
            <ul className="font-poppins flex flex-col items-end px-6 py-4 text-2xl font-normal">
              {navItems.map((item, index) => (
                <li
                  key={item.label}
                  onClick={() => handleMenuClick(item.onClick)}
                  className={`cursor-pointer transition-colors ${index === 0 ? "text-orange-600" : ""}`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </nav>
        </DrawerContent>
      </Drawer>

      {/* {isMenuOpen && (
        <nav className="absolute top-full right-4 mt-2 min-w-40 rounded-lg bg-black/90 shadow-lg backdrop-blur-lg xl:hidden">
          <ul className="font-poppins flex flex-col items-end px-6 py-4 text-2xl font-normal">
            {navItems.map((item, index) => (
              <li
                key={item.label}
                onClick={() => handleMenuClick(item.onClick)}
                className={`cursor-pointer transition-colors ${index === 0 ? "text-orange-600" : ""}`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      )} */}
    </header>
  );
}
