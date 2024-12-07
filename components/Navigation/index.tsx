import Image from "next/image";

function Navigation() {
  return (
    <header className="bg-white fixed  top-12 left-3 right-3 rounded-full p-3 max-w-xl lg:mx-auto shadow flex items-center space-x-8  justify-between">
      <div className="flex items-center space-x-5">
        <h3 className="font-bold pl-5">HWP.SWE</h3>
      </div>
      <div className="w-px h-5 bg-gray hidden sm:block" />
      <nav className="hidden sm:flex justify-end sm:justify-between items-center w-full">
        <ul className="items-center space-x-8 flex">
          <li className="text-sm">
            <a href="https://htutwaiphyo.medium.com/" target="_blank">
              Blogs
            </a>
          </li>
          <li className="text-sm">
            <a href="https://www.clubhouse.com/@htutwaiphyo_" target="_blank">
              Podcasts
            </a>
          </li>
        </ul>
        <a
          className="bg-primary text-black rounded-full px-7 py-3 cursor-pointer"
          href="mailto:htutwaiphyoe@gmail.com"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navigation;
