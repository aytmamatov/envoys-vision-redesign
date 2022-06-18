import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface Props {
  children: any
}

const Layout:React.FC<Props> = ({ children }) => {
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <div onClick={() => setShow(false)} onKeyDown={() => setShow(false)}>
      <Header burgerShow={show} burgerSetShow={setShow} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
