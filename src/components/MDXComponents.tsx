import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import clsx from 'clsx';

const MDXComponents = {
    // TestComponent: dynamic(() => import('../../components/TestComponent')),
    Image,
    Head,
    h1: (props: any) => <h1 className="text-white my-2">{props.children}</h1>,
    h2: (props: any) => <h2 className="text-white my-2">{props.children}</h2>,
    h3: (props: any) => <h3 className="text-white my-1">{props.children}</h3>,
    p: (props: any) => <p className="text-white my-1">{props.children}</p>,
    code: (props: any) => Codeblock(props),
  };

export default MDXComponents



import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/material-dark';

const Codeblock = ({
  className,
  children,
}: {
  className: string;
  children: any;
}) => {
  const language = className?.includes('language')
    ? className.replace('language-', '')
    : null;

  const filterCode = children.map((child: any) => {
    if (typeof child === 'object') {
      return child.props.children ? child.props.children : '';
    } else return child;
  });

  const codeToString = filterCode.join('').replace(/\n$/, '');

  return (
    <div className="relative">
      {language && (
        <div className="absolute py-2 px-4 right-0 z-10">{language}</div>
      )}

      <SyntaxHighlighter
        className={clsx('rounded-lg py-4')}
        PreTag="div"
        language="javascript"
        style={atomOneDark}
      >
        {codeToString}
      </SyntaxHighlighter>
    </div>
  );
};

export { Codeblock };