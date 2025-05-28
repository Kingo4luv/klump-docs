import type { ReactNode } from 'react';
import DocumentationPageLayout from '../../Layouts/DocumentationPageLayout';
import ContentSection from '../../Layouts/ContentSection';
import CodeBlockWrapper from '../../Layouts/CodeBlockWrapper';
import content from '../../../data/content/views/verification/transaction-verification.json';
import { CodeTabs } from '../../Codetabs';

interface TransactionVerificationViewProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function TransactionVerification({ children, readingTime, date, title }: TransactionVerificationViewProps) {
    const { transactionVerification } = content;

    return (
        <DocumentationPageLayout
            title={title}
            readingTime={readingTime}
            date={date}
            sections={transactionVerification.sections}
        >
            <ContentSection>
                <p>{transactionVerification.intro.description}</p>
                <p>Things to look out for when verifying a transaction:</p>
                <ul className="space-y-1">
                    {transactionVerification.intro.checkpoints.map((checkpoint, index) => (
                        <li key={index} className="flex items-center space-x-1">
                            <span>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6C2.55228 6 3 5.55228 3 5C3 4.44772 2.55228 4 2 4C1.44772 4 1 4.44772 1 5C1 5.55228 1.44772 6 2 6Z" fill="black" />
                                </svg>
                            </span>
                            <span>{checkpoint}</span>
                        </li>
                    ))}
                </ul>
                <p>{transactionVerification.intro.additionalNote}</p>
                
                <p>{transactionVerification.codeExamples.verificationRequest.description}</p>
                <CodeTabs tabs={[
                    {
                        label: 'cURL',
                        content: (
                            <div className="py-2 w-full h-full">
                                <CodeBlockWrapper code={transactionVerification.codeExamples.verificationRequest.code} lang="bash" />
                            </div>
                        ),
                    },
                ]} />
                <p>{transactionVerification.codeExamples.verificationRequest.note}</p>
                
                <p>{transactionVerification.codeExamples.verificationResponse.description}</p>
                <CodeTabs tabs={[
                    {
                        label: 'JSON',
                        content: (
                            <div className="py-2 w-full h-full">
                                <CodeBlockWrapper code={transactionVerification.codeExamples.verificationResponse.code} lang="javascript" />
                            </div>
                        ),
                    },
                ]} />
            </ContentSection>
        </DocumentationPageLayout>
    );
}
