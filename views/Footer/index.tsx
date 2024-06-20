function Footer() {
  return (
    <footer className="bg-white px-4 py-10 sm:p-10 w-full md:max-w-5xl mx-auto gap-10 grid rounded-2xl place-items-center">
      <h3 className="text-2xl sm:text-4xl font-semibold text-center leading-snug">
        Let&apos;s keep in touch <br /> with me
      </h3>
      <ul className="flex items-start lg:items-center space-y-5 lg:space-x-20 lg:flex-row flex-col">
        <li>
          <p className="text-gray-dark">Contact me</p>
          <ul className="flex items-center">
            <li>
              <a
                href="mailto:htutwaiphyoe@gmail.com"
                className="hover:underline"
              >
                htutwaiphyoe@gmail.com
              </a>
            </li>
          </ul>
        </li>
        <li>
          <p className="text-gray-dark">Follow me</p>
          <ul className="grid gap-10 sm:grid-cols-4 grid-cols-2">
            <li>
              <a
                className="hover:underline"
                href="https://www.linkedin.com/in/htutwaiphyo/"
                target="_black"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://github.com/htutwaiphyoe"
                target="_black"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://htutwaiphyoe.medium.com/"
                target="_blank"
              >
                Medium
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://www.clubhouse.com/@htutwaiphyoe_"
                target="_blank"
              >
                Clubhouse
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <p>{new Date().getFullYear()} &copy; - All rights reserved</p>
    </footer>
  );
}

export default Footer;
