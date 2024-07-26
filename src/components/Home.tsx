import { motion } from "framer-motion";

export function Button() {
  return (
    <motion.a
      href='#about'
      initial={{ scale: 0, rotate: 180 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className='btn btn-primary mx-auto text-white font-bold'
    >
      Explore
    </motion.a>
  );
}

export function InfoBento() {
  return (
    <section
      id='information'
      className='grid-row-3 md:mx-auto flex grid-cols-3 flex-col gap-8 py-8 md:grid max-w-7xl mx-8'
    >
      <motion.div
        initial={{ translateX: -100, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true, margin: "-200px" }}
        className='bento-box flex justify-center'
      >
        <div className='my-auto'>
          <h1 className='bento-heading bg-gradient-to-bl from-primary to-secondary bg-clip-text text-6xl text-transparent'>
            3 Years
          </h1>
          <p>Of experience</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ translateX: 100, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true, margin: "-200px" }}
        className='bento-box col-span-2'
      >
        <h1 className='bento-heading bg-gradient-to-bl from-primary to-secondary bg-clip-text text-6xl text-transparent md:text-8xl'>
          1K+
        </h1>
        <p>
          Contributions on{" "}
          <a
            href='https://github.com/nevthereal'
            target='_blank'
            className='anchor'
          >
            GitHub
          </a>
        </p>
      </motion.div>
      <motion.div
        initial={{ translateX: -100, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true, margin: "-200px" }}
        className='bento-box col-span-2 flex flex-col'
      >
        <div className='m-auto'>
          <h1 className='bento-heading bg-gradient-to-bl from-primary to-secondary bg-clip-text text-4xl text-transparent md:text-6xl'>
            Why me?
          </h1>
          <ul className='list-inside list-decimal text-lg font-semibold md:text-xl text-left'>
            <li>Beautifully crafted Websites</li>
            <li>Modern Design</li>
            <li>Keen eye on detail</li>
            <li>Fast response times</li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        initial={{ translateX: 100, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true, margin: "-200px" }}
        className='bento-box bg-gradient-to-b from-white/25 to-orange-500/25'
      >
        <h1 className='bento-heading text-4xl md:text-6xl'>Stack:</h1>
        <ul className='text-md text-lg font-bold md:text-xl'>
          <li>
            <a href='https://kit.svelte.dev' target='_blank'>
              SvelteKit
            </a>
          </li>
          <li>
            <a href='https://astro.build' target='_blank'>
              Astro
            </a>
          </li>
          <li>
            <a href='https://tailwindcss.com' target='_blank'>
              Tailwind
            </a>
          </li>
          <li>
            <a href='https://orm.drizzle.team' target='_blank'>
              Drizzle
            </a>
          </li>
          <li>
            <a href='https://neon.tech' target='_blank'>
              Neon
            </a>
          </li>
          <li>
            <a href='https://lucia-auth.com'>Lucia</a>
          </li>
        </ul>
      </motion.div>
      <div className='col-span-3 flex grid-cols-2 flex-col gap-8 md:grid'>
        <motion.div
          initial={{ translateX: -100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true, margin: "-200px" }}
          className='bento-box flex'
        >
          <div className='mx-auto flex flex-col text-left'>
            <i className='fa-solid fa-quote-left mx-auto bg-gradient-to-bl from-primary to-secondary bg-clip-text text-left text-3xl text-transparent'></i>
            <p className='text-center text-2xl font-semibold italic'>
              Design is not just what it looks like and feels like. Design is
              how it works. <br />
              <span className='text-lg font-normal'>- Steve Jobs</span>
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ translateX: 100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true, margin: "-200px" }}
          className='bento-box flex items-center justify-center'
        >
          <div>
            <h1 className='bento-heading bg-gradient-to-bl from-primary to-secondary bg-clip-text text-4xl text-transparent duration-200 ease-in-out hover:tracking-widest'>
              Interactivity
            </h1>
            <p>
              Creates a feeling of{" "}
              <span className='group font-bold'>
                connection{" "}
                <a
                  href='https://github.com/nevthereal/nevillebrem-astro'
                  target='_blank'
                  className='hidden group-hover:inline'
                >
                  <i className='fa-solid fa-link'></i>
                </a>
              </span>{" "}
              to the site.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
