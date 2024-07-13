import { House, Briefcase, BookUser } from "lucide-react";

export const Nav = () => {
  return (
    <ul className='menu bg-base-200 rounded-box fixed left-6 top-1/2 hidden -translate-y-1/2 md:block'>
      <li>
        <a
          aria-label='Home'
          href='/'
          className='tooltip tooltip-right aspect-square flex justify-center items-center'
          data-tip='Home'
        >
          <House strokeWidth={2} size={24} />
        </a>
      </li>
      <li>
        <a
          aria-label='Work'
          href='/work'
          className='tooltip tooltip-right aspect-square flex justify-center items-center'
          data-tip='Work'
        >
          <Briefcase strokeWidth={2} size={24} />
        </a>
      </li>
      <li>
        <a
          aria-label='Contact'
          href='/contact'
          className='tooltip tooltip-right aspect-square flex justify-center items-center'
          data-tip='Contact'
        >
          <BookUser strokeWidth={2} size={24} />
        </a>
      </li>
    </ul>
  );
};
