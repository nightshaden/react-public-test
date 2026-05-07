type NavItem = {
  label: string;
  onClick: () => void;
};

export default function Header({ navItems }: { navItems: NavItem[] }) {
  return (
    <header className="fixed top-0 z-50 flex w-full flex-nowrap bg-black/70 px-8 py-2 whitespace-nowrap backdrop-blur-lg">
      <div className="flex w-full max-w-480 items-center justify-between">
        <a
          href="/"
          className="font-black-han flex h-14 w-80 justify-start px-5 text-4xl leading-[53.47px] font-normal text-white"
        >
          CASK CARNIVAL
        </a>
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
      </div>
    </header>
  );
}
