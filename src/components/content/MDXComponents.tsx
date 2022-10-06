import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../layout/Footer';
import UnstyledLink from '../UnstyledLink';

const MDXComponents = {
  Image,
  Head,
  Footer,
  a:(props:any)=> <a href={props.href} target='_blank'>{props.children}</a>
};

export default MDXComponents;
