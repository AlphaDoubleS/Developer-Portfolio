import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import i18n from 'pages/i18n';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const NavBar = () => {
  const { t } = useTranslation();

  const navLinks = [
    { title: t('navbar.home'), path: '/' },
    { title: t('navbar.about'), path: '/#about' },
    { title: t('navbar.software'), path: '/#software' },
    { title: t('navbar.projects'), path: '/projects-overview' },
  ];

  const router = useRouter();

  const onChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <nav className="flex light-bg justify-space">
      <div className="logo white">
        <Link href="/">{t('name')}</Link>
      </div>

      <ul className="flex">
        {navLinks.map(link => (
          <li key={link.title}>
            <Link href={link.path} passHref>
              <a className={router.pathname === link.path ? 'link-active' : 'link-white'}>
                {link.title}
              </a>
            </Link>
          </li>
        ))}

        <div className="switch">
          <select className="select" name="language" onChange={onChange}>
            <option value="en">{t('language.en')}</option>
            <option value="nl">{t('language.nl')}</option>
            <option value="de">{t('language.de')}</option>
          </select>
          <KeyboardArrowDownIcon />
        </div>
      </ul>
    </nav>
  );
};
