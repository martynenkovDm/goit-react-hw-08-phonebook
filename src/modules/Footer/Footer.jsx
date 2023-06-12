import React from 'react';
import { FooterBlock } from './Footer.styled';

const Footer = () => {
  return (
    <FooterBlock>
      <p>
        Created by
        <a href="https://github.com/martynenkovDm">
          {' '}
          &copy; martynenkovDm{' '}
        </a>{' '}
        {new Date().getFullYear()}
      </p>
    </FooterBlock>
  );
};

export default Footer;
