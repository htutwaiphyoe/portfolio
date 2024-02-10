import Image from "next/image";

function Navigation() {
  return (
    <header className="bg-white fixed top-12 left-0 right-0 rounded-full p-3 max-w-5xl mx-auto shadow flex items-center space-x-8">
      <div className="flex items-center space-x-5">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src="/512.png"
            alt="Avatar"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
        <h3 className="font-bold">HWP.SWE</h3>
      </div>
      <div className="w-px h-5 bg-gray" />
      <nav className="flex justify-between items-center w-full">
        <ul className="flex items-center space-x-8">
          <li className="text-sm">About</li>
          <li className="text-sm">Pricing</li>
          <li className="text-sm">Projects</li>
          <li className="text-sm">Blogs</li>
        </ul>
        <button className="bg-primary text-black rounded-full px-7 py-3">
          Contact
        </button>
      </nav>
    </header>
  );
}

export default Navigation;
