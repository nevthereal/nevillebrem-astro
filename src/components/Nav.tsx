import { motion } from "framer-motion";

export const Nav = () => {
  interface Item {
    title: string;
    link: string;
    icon: string;
  }

  const links: Item[] = [
    {
      title: "Home",
      link: "/",
      icon: "fa-solid fa-house",
    },
    {
      title: "Work",
      link: "/work",
      icon: "fa-solid fa-suitcase",
    },
    {
      title: "Blog",
      link: "/blog",
      icon: "fa-solid fa-book-bookmark",
    },
    {
      title: "Contact",
      link: "/contact",
      icon: "fa-solid fa-envelope",
    },
  ];

  return (
    <>
      <motion.ul
        initial={{ translateX: -36, translateY: "-50%" }}
        whileHover={{ translateX: 24 }}
        transition={{
          ease: "easeOut",
          duration: 0.2,
        }}
        className='menu bg-base-200 border-base-300 border rounded-box fixed top-1/2 max-md:hidden'
      >
        {links.map(({ title, link, icon }) => {
          return (
            <li key={title}>
              <a
                aria-label={title}
                href={link}
                className='tooltip tooltip-right aspect-square flex justify-center items-center'
                data-tip={title}
              >
                <i className={`${icon} text-xl`}></i>
              </a>
            </li>
          );
        })}
      </motion.ul>
      <ul className='md:hidden menu menu-xs gap-2 menu-horizontal bg-base-200 border-base-300 border rounded-box fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10'>
        {links.map(({ title, link, icon }) => {
          return (
            <li key={title}>
              <a
                aria-label={title}
                href={link}
                className='tooltip tooltip-right aspect-square flex justify-center items-center'
                data-tip={title}
              >
                <i className={`${icon} text-xl`}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
