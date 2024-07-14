import { motion } from "framer-motion";
import { House, Briefcase, BookCheck, MailOpen } from "lucide-react";
import type { ReactNode } from "react";

export const Nav = () => {
  interface Item {
    title: string;
    link: string;
    icon: ReactNode;
  }

  const links: Item[] = [
    {
      title: "Home",
      link: "/",
      icon: <House />,
    },
    {
      title: "Work",
      link: "/work",
      icon: <Briefcase />,
    },
    {
      title: "Blog",
      link: "/blog",
      icon: <BookCheck />,
    },
    {
      title: "Contact",
      link: "/contact",
      icon: <MailOpen />,
    },
  ];

  return (
    <motion.ul
      initial={{ translateX: -36, translateY: "-50%" }}
      whileHover={{ translateX: 24 }}
      transition={{
        ease: "easeOut",
        duration: 0.2,
      }}
      className='menu bg-base-200 border-base-300 border rounded-box fixed top-1/2 hidden md:block'
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
              <span>{icon}</span>
            </a>
          </li>
        );
      })}
    </motion.ul>
  );
};
