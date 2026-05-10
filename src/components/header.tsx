import { useState } from "react";

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
    <header className="fixed top-0 z-50 flex w-full flex-nowrap bg-black/70 px-3 py-1 whitespace-nowrap backdrop-blur-lg xl:px-8 xl:py-2">
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

        {/* 모바일환경 */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-12 w-12 items-center xl:hidden"
        >
          <img
            src="/icons/align-right.svg"
            alt=""
            className="h-8 w-8 brightness-0 invert"
          />
        </button>
      </div>

      {isMenuOpen && (
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
      )}
    </header>
  );
}
