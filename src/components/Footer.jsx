import "./footer.css";

const Footer = () => {
  const year = new Date();
  return (
    <footer className='footer__wrapper'>
      <p className='footer__title'>
        NewsWave&copy;{year.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
