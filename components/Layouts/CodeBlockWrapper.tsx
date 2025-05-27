import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

interface CodeBlockProps {
  code: string;
  lang: string;
}

const CodeBlock = dynamic(() => import('../CodeBlock'), {
  ssr: false,
}) as ComponentType<CodeBlockProps>;

interface CodeBlockWrapperProps {
  code: string;
  lang: string;
  className?: string;
}

export default function CodeBlockWrapper({ 
  code, 
  lang, 
  className = 'py-4 w-full h-full' 
}: CodeBlockWrapperProps) {
  return (
    <div className={className}>
      <CodeBlock code={code} lang={lang} />
    </div>
  );
}