import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="dark-bg flex justify-space">
      <span className="white">
        Copyright © {year} <Link href="/">{t('name')}</Link> - All rights reserved.
      </span>
      <ul className="flex">
        <li>
          <a
            className="link-white"
            href="https://www.linkedin.com/in/laura-janssens-600579143/"
            target="_blank"
            rel="noreferrer">
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a
            className="link-white"
            href="https://github.com/AlphaDoubleS"
            target="_blank"
            rel="noreferrer">
            <GitHubIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
};
