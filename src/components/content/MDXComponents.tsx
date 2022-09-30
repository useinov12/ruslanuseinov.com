import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import clsx from 'clsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/material-dark';

const MDXComponents = {
  // TestComponent: dynamic(() => import('../../components/TestComponent')),
  Image,
  Head,
  h1: (props: any) => <h1 className="text-white my-3">{props.children}</h1>,
  h2: (props: any) => <h2 className="text-white my-3">{props.children}</h2>,
  h3: (props: any) => <h3 className="text-white my-3">{props.children}</h3>,
  p: (props: any) => <p className="text-white my-2">{props.children}</p>,
  code: (props: any) => highlighter(props),
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
