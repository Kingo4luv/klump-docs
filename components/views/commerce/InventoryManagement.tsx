import type { ReactNode } from 'react';
import DocumentationPageLayout from '../../Layouts/DocumentationPageLayout';
import ContentSection from '../../Layouts/ContentSection';
import CodeBlockWrapper from '../../Layouts/CodeBlockWrapper';
import { CodeTabs } from '../../Codetabs';
import content from '../../../data/content/views/commerce/inventory-management.json';

interface InventoryManagemntViewProps {
    children: ReactNode;
    title: string;
    date?: string;
    readingTime?: string;
}

export default function InventoryManagemnt({ children, readingTime, date, title }: InventoryManagemntViewProps) {
    const { inventoryManagement } = content;

    const UpdateProductInventory = [
        {
            label: inventoryManagement.codeExamples.updateInventory.label,
            content: (
                <div className="py-2 w-full h-full">
                    <CodeBlockWrapper code={inventoryManagement.codeExamples.updateInventory.code} lang="json" />
                </div>
            ),
        },
    ];

    const Response = [
        {
            label: inventoryManagement.codeExamples.sampleResponse.label,
            content: (
                <div className="py-2 w-full h-full">
                    <CodeBlockWrapper code={inventoryManagement.codeExamples.sampleResponse.code} lang="json" />
                </div>
            ),
        },
    ];

    return (
        <DocumentationPageLayout
            title={title}
            readingTime={readingTime}
            date={date}
            sections={inventoryManagement.sections}
            titleId="getting-started"
        >
            <ContentSection
                title={inventoryManagement.title}
                className="border-t border-[#E3E8EE] pt-6"
            >
                {inventoryManagement.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <div className="py-2 w-full h-full">
                    <CodeTabs tabs={UpdateProductInventory} />
                </div>
                <p>{inventoryManagement.updateNote}</p>
                <p>Sample response</p>
                <div className="py-2 w-full h-full">
                    <CodeTabs tabs={Response} />
                </div>
            </ContentSection>
        </DocumentationPageLayout>
    );
}
