import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'pages/i18n';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const NavBar = () => {
  const { t } = useTranslation();

  const onChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <nav className="flex light-bg justify-space">
      <div className="logo white">
        <Link href="/">{t('name')}</Link>
      </div>

      <ul className="flex">
        <li>
          <Link href="/">{t('navbar.home')}</Link>
        </li>
        <li className="link-white">
          <Link href="#about">{t('navbar.about')}</Link>
        </li>
        <li className="link-white">
          <Link href="#software">{t('navbar.software')}</Link>
        </li>
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
