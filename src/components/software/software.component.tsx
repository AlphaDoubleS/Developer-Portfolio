import React from 'react';
import { useTranslation } from 'react-i18next';

export const Software = () => {
  const { t } = useTranslation();

  return (
    <section id="software" className="light-bg">
      <div className="flex">
        <div className="flex-full software">
          <h2 className="white">{t('software_block.title')}</h2>
          <p className="gray">{t('software_block.text')}</p>
          <div className="flex justify-space">
            <img src="/images/software/Symfony.svg" alt="" />
            <img src="/images/software/Laravel.svg" alt="" />
            <img src="/images/software/React.svg" alt="" />
            <img src="/images/software/Figma.svg" alt="" />
            <img src="/images/software/Illustrator.svg" alt="" />
            <img src="/images/software/Photoshop.svg" alt="" />
            <img src="/images/software/Github.svg" alt="" />
            <img src="/images/software/Docker.svg" alt="" />
            <img src="/images/software/VSCode.svg" alt="" />
            <img src="/images/software/PhpStorm.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
