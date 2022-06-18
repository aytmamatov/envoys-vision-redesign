import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface Props {
    children: any
}

const Layout:React.FC<Props> = (props) => {
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <div onClick={(e) => setShow(false)}>
      <Header burgerShow={show} burgerSetShow={setShow} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
