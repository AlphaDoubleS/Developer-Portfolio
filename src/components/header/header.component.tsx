import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavBar } from 'components/navbar';
import Image from 'next/image';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <NavBar />
      <div className="header flex light-bg">
        <div>
          <div className="buttons">
            <button>{t('header.designer')}</button>
            <button>{t('header.developer')}</button>
          </div>
          <h1 className="white">{t('header.title')}</h1>
          <p className="gray">{t('header.text')}</p>
          <a className="blue" href="mailto:lauraj@hotmail.be">
            {t('header.cta')}
          </a>
        </div>
        <Image src="/images/laura.png" width={463} height={513} alt="laura" />
      </div>
    </header>
  );
};
