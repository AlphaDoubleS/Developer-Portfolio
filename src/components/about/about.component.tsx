import React from 'react';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import Link from 'next/link';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="dark-bg">
      <div className="flex">
        <div className="flex-full">
          <Link href="/projects-overview">
            <div className="light-bg about-card">
              <div className="flex justify-space heading">
                <h3 className="blue">{t('about_block.design')}</h3>
                <ArchitectureIcon className="blue" />
              </div>
              <p className="white">{t('about_block.design_text')}</p>
              <span className="gray">7 projects</span>
            </div>
          </Link>

          <Link href="/projects-overview">
            <div className="light-bg about-card">
              <div className="flex justify-space heading">
                <h3 className="blue">{t('about_block.development')}</h3>
                <CodeIcon className="blue" />
              </div>
              <p className="white">{t('about_block.development_text')}</p>
              <span className="gray">10 projects</span>
            </div>
          </Link>
        </div>

        <div className="flex-full about-text">
          <h5 className="gray">{t('about_block.intro')}</h5>
          <h2 className="white">{t('about_block.title')}</h2>
          <h3 className="white">{t('about_block.subtitle')}</h3>
          <p className="gray">
            {t('about_block.text_one')}
            <br />
            <br />
            {t('about_block.text_two')}
          </p>
        </div>
      </div>
    </section>
  );
};
