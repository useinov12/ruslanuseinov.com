import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../layout/Footer';
import TechIcons from './TechIcons';

const MDXComponents = {
  Image,
  Head,
  Footer,
  a:(props:any)=> <a href={props.href} target='_blank' rel="noreferrer" >{props.children}</a>,
  TechIcons
};

export default MDXComponents;
