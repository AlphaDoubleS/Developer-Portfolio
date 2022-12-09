import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'pages/i18n';
import Link from 'next/link';

export const NavBar = () => {
  const { t } = useTranslation();

  const onChange = event => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <nav className="flex light-bg justify-space">
      <div className="logo white">
        <Link href="/">{t('name')}</Link>
      </div>

      <ul className="flex white">
        <li className="green">
          <Link href="/">{t('navbar.home')}</Link>
        </li>
        <li>
          <Link href="/#about">{t('navbar.about')}</Link>
        </li>
        <select name="language" onChange={onChange}>
          <option value="en">{t('language.en')}</option>
          <option value="nl">{t('language.nl')}</option>
          <option value="de">{t('language.de')}</option>
        </select>
      </ul>
    </nav>
  );
};
