export default function WebhookHeadersTable() {
    const webhookHeaders = [
        {
            name: 'X-Klump-Signature',
            description: 'HMAC signature of the request body. See Signature section.',
            example: 'ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb'
        },
        {
            name: 'X-Klump-Webhook-Id',
            description: 'Unique ID of the webhook call. This value is consistent between retries and could be used to deduplicate retry calls.',
            example: '65843e9e-b12d-4120-8d1b-34abea95695e'
        },
        {
            name: 'X-Klump-Webhook-Attempt',
            description: 'Number of webhook request attempts starting from 1.',
            example: '1'
        },
    ];

    return (
        <section className="flex flex-col gap-3">
            {/* Header */}
            <div className="flex bg-[#F7FAFC] text-xs font-semibold uppercase px-6 py-3 rounded-md border border-gray-200">
                <div className="w-64">Name</div>
                <div className="flex-1">Description</div>
                <div className="w-1/3">Example</div>
            </div>

            {/* Rows */}
            {webhookHeaders.map((header, idx) => (
                <div
                    key={idx}
                    className="flex items-start px-6 py-4 bg-[#F7FAFC] rounded-md border border-gray-200 text-gray-900 text-sm"
                >
                    <div className="w-64">{header.name}</div>
                    <div className="flex-1 pr-4">{header.description}</div>
                    <div className="w-1/3 break-words font-mono text-gray-600">{header.example}</div>
                </div>
            ))}
        </section>
    );
}
