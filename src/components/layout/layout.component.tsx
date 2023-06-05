import { FC, ReactNode } from 'react';
import { NavBar } from '../navbar';
import { Footer } from '../footer';

type PropsType = {
  children?: ReactNode;
};

export const Layout: FC<PropsType> = ({ children }: PropsType) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
