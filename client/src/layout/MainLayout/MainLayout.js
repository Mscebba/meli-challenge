import React from 'react';
import Header from 'layout/Header';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main role='main'>{children}</main>
    </>
  );
}
