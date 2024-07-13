import { House, Briefcase, BookCheck, MailOpen, Icon } from "lucide-react";
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
    <ul className='menu bg-base-200 rounded-box fixed left-6 top-1/2 hidden -translate-y-1/2 md:block'>
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
    </ul>
  );
};
