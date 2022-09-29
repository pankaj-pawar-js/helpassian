import React, { Fragment } from "react";

import {ReactComponent as GitHub} from "../../../assets/GitHub.svg";
import {ReactComponent as Database} from "../../../assets/Database.svg";

import './Footer.styles.scss';

const Footer = () => {
  return <Fragment>
    <div className='footer'>
      <div className="socials">
        <div className="social-item">
          <a
            href='/'
            target='_blank'
            rel="noreferrer"
          >
            © 2022 Atlassian
          </a>
        </div>
        <div className="social-item">
          <a
            href='/'
            target='_blank'
            rel="noreferrer"
          >
           Trademark
          </a>
        </div>
        <div className="social-item">
          <a
            href='/'
            target='_blank'
            rel="noreferrer"
          >
           Privacy
          </a>
        </div>
        <div className="social-item">
          <a
            href='/'
            target='_blank'
            rel="noreferrer"
          >
           License
          </a>
        </div>
      </div>
    </div>
  </Fragment>
};

export default Footer;