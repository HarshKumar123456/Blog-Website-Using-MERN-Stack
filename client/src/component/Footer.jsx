import React from 'react';

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">© {new Date().getFullYear()} Company, Inc</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <img src="https://img.icons8.com/cotton/64/whatsapp--v4.png" alt="whatsapp handle logo" height="40" />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin handle logo" height="40" />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <img src="https://img.icons8.com/arcade/64/000000/discord-logo.png" alt="discord handle logo" height="40" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
