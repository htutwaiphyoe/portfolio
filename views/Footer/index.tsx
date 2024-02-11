function Footer() {
  return (
    <footer className="bg-white p-10 w-[1024px] mx-auto gap-10 grid rounded-2xl place-items-center">
      <h3 className="text-5xl font-semibold text-center leading-snug">
        Want to start <br /> a project?
      </h3>
      <ul className="flex items-center space-x-20">
        <li>
          <p className="text-gray-dark">Contact me</p>
          <ul className="flex items-center">
            <li>htutwaiphyoe@gmail.com</li>
          </ul>
        </li>
        <li>
          <p className="text-gray-dark">Follow me</p>
          <ul className="flex items-center space-x-10">
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
                Blogs
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://www.clubhouse.com/@htutwaiphyoe_"
                target="_blank"
              >
                Podcasts
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <p>2024&copy; - All rights reserved</p>
    </footer>
  );
}

export default Footer;
