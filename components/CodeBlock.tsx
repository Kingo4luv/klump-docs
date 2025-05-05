// components/CodeBlock.client.tsx
'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function CodeBlock({
  code,
  lang = 'bash',
}: {
  code: string;
  lang?: string;
}) {
  return (
    <SyntaxHighlighter language={lang} style={vscDarkPlus} customStyle={{ borderRadius: '8px', maxHeight:'600px', overflowY: 'auto' }}>
      {code}
    </SyntaxHighlighter>
  );
}
