import List from "@/components/List";
import { platforms } from "@/constant";

function Footer() {
  return (
    <footer className="bg-primary text-black p-5 sm:p-10 gap-5 sm:gap-10 grid rounded-3xl place-items-center">
      <div>
        <h3 className="text-2xl sm:text-4xl font-semibold text-center border px-6 py-3 rounded-3xl">
          Want to work together?
        </h3>
      </div>
      <ul className="flex items-start lg:items-center space-y-5 lg:space-y-0 lg:space-x-20 lg:flex-row flex-col">
        <li>
          <p className="text-black">Contact me</p>
          <ul className="flex items-center">
            <li>
              <a
                href="mailto:htutwaiphyoe@gmail.com"
                className="hover:underline font-semibold"
              >
                htutwaiphyoe@gmail.com
              </a>
            </li>
          </ul>
        </li>
        <li>
          <p className="text-black">Follow me</p>
          <ul className="grid gap-5 sm:gap-10 sm:grid-cols-4 grid-cols-2">
            <List
              of={platforms}
              renderItem={(item) => (
                <li key={item.platform}>
                  <a
                    target="_black"
                    href={item.link}
                    className="hover:underline font-semibold"
                  >
                    {item.platform}
                  </a>
                </li>
              )}
            />
          </ul>
        </li>
      </ul>
      <p>{new Date().getFullYear()} &copy; - All rights reserved</p>
    </footer>
  );
}

export default Footer;
