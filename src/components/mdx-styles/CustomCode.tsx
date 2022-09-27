import React, { ReactNode } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


const CustomCode: React.FC<{ children: any }> = ({ children }) => {

  return (
      <SyntaxHighlighter
        className="rounded"
        language={'javascript'}
        PreTag="div"
        style={vscDarkPlus}
      >
        {children}
      </SyntaxHighlighter>
  );
};

export default CustomCode;
