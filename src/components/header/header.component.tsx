import React from 'react';
import { useTranslation } from 'react-i18next';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="header flex light-bg">
        <div>
          <div className="buttons">
            <button>{t('header.designer')}</button>
            <button>{t('header.developer')}</button>
          </div>
          <h1 className="white">{t('header.title')}</h1>
          <p className="gray">{t('header.text')}</p>
          <a className="blue link-with-icon link-animation" href="mailto:lauraj@hotmail.be">
            {t('header.cta')}
            <ArrowCircleRightOutlinedIcon />
          </a>
        </div>
        <img src="/images/laura.svg" alt="Laura Janssens" />
      </div>
    </header>
  );
};
