import React from 'react';
import { useTranslation } from 'react-i18next';
import Image, { StaticImageData } from 'next/image';

export const Software = () => {
  const { t } = useTranslation();

  return (
    <section id="software" className="light-bg">
      <div className="flex">
        <h2 className="white">Software</h2>
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
        <h3 className="blue">{title}</h3>
        <Image src={icon} width={28} height={28} alt={title} />
      </div>
      <p className="white">{description}</p>
      <span className="gray">{projects.toString()} projects</span>
    </div>
  );
}
