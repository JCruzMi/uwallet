import React from 'react';
import Footer from '../landing/Footer';
import Navbar from '../Navbar';

// #region Functions (1)

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex min-w-screen flex-col py-[4rem] items-center bg-background justify-between bg-dot-white">
        {children}
      </div>
      <Footer />
    </>
  );
}

// #endregion Functions (1)
