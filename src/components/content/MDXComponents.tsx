import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import clsx from 'clsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/material-dark';

const MDXComponents = {
  Image,
  Head,
};

export default MDXComponents;

function highlighter({
  className,
  children,
}: {
  className: string;
  children: any;
}) {
  const language = className?.includes('language')
    ? className.replace('language-', '')
    : '';

  return (
    <SyntaxHighlighter
      className={clsx('rounded-lg py-4')}
      PreTag="div"
      language={language}
      style={atomOneDark}
    >
      {children}
    </SyntaxHighlighter>
  );
}
