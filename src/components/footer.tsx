export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="flex w-full justify-between">
        {/* 상단부분 */}
        <div className="font-roboto flex flex-col">
          <h2 className="flex px-8 py-2 text-4xl">Contact</h2>
          <div className="flex flex-row px-2 py-2">
            <div className="flex flex-col gap-2 px-6 py-4 text-2xl">
              <span>Intagram</span>
              <span className="text-[#EA5514]">@caskcarnival</span>
            </div>
            <div className="flex flex-col gap-2 px-10 py-4 text-2xl">
              <span>Email</span>
              <span className="text-[#EA5514]">lsy9785@whiskynavi.com</span>
            </div>
          </div>
        </div>
        <div className="flex items-end">
          <span className="font-black-han flex px-2 py-4 text-center text-4xl leading-[134%] text-[#EA5514]">
            CASK <br />
            CARNIVAL
          </span>
          <img
            src="/png/cask_carnival_logo.png"
            alt="Cask Carnival Logo"
            className="w-33 py-6"
          />
        </div>
      </div>
      <div className="font-roboto flex h-13 items-center justify-between bg-[#EA5514] px-2 py-4 text-[14px] text-white">
        {/* 하단 부분 */}
        <span>Copyright &copy; 2025 &middot; Whiskynavi</span>
        <span>
          Terms & Conditions for Event &middot; Privacy Policy &middot; Terms of
          Use
        </span>
      </div>
    </footer>
  );
}
