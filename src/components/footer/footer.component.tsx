import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="light-bg flex justify-space">
      <span className="white">
        Copyright © {year} <Link href="/">{t('name')}</Link> - All rights reserved.
      </span>
      <ul className="flex">
        <li>
          <a
            href="https://www.linkedin.com/in/laura-janssens-600579143/"
            target="_blank"
            rel="noreferrer">
            <Image src="/icons/linkedin.svg" width={24} height={24} alt="linkedin-icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/AlphaDoubleS" target="_blank" rel="noreferrer">
            <Image src="/icons/github.svg" width={24} height={24} alt="github-icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
