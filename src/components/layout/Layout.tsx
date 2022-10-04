import React from 'react';

import Header from './Header';

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-dark text-white max-w-screen-lg m-auto p-2 min-h-screen h-full">
        {children}
      </div>
    </>
  );
};

export default Layout;
