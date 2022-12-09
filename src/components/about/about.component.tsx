import React from 'react';
import { useTranslation } from 'react-i18next';
import Image, { StaticImageData } from 'next/image';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="dark-bg">
      <div className="flex">
        <div className="flex-full">
          <AboutCard
            title={t('about_page.design')}
            icon="/icons/design.svg"
            description={t('about_page.design_text')}
            projects={7}
          />
          <AboutCard
            title={t('about_page.development')}
            icon="/icons/code.svg"
            description={t('about_page.development_text')}
            projects={10}
          />
        </div>

        <div className="flex-full about-text">
          <h5 className="gray">{t('about_page.intro')}</h5>
          <h1 className="white">{t('about_page.title')}</h1>
          <h3 className="white">{t('about_page.subtitle')}</h3>
          <p className="gray">
            {t('about_page.text_one')}
            <br />
            <br />
            {t('about_page.text_two')}
          </p>
        </div>
      </div>
    </section>
  );
};

type Props = {
  title: string;
  icon: string | StaticImageData;
  description: string;
  projects: number;
};

function AboutCard({ title, icon, description, projects }: Props) {
  return (
    <div className="light-bg about-card">
      <div className="flex justify-space">
        <h3 className="green">{title}</h3>
        <Image src={icon} width={28} height={28} alt={title} />
      </div>
      <p className="white">{description}</p>
      <span className="gray">{projects.toString()} projects</span>
    </div>
  );
}
