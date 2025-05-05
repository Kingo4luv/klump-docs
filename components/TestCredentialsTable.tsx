// components/TestCredentials.tsx


export default function TestCredentials() {
    const credentials = [
        {
            title: 'Bank Name',
            fields: [
                { label: 'Bank Name', value: 'Stanbic Bank' },
                { label: 'Account Number', value: '1234567890' },
                { label: 'Phone Number', value: '08012345678' },
                { label: 'OTP', value: '123456' },
            ],
        },
        {
            title: 'Bank Name',
            fields: [
                { label: 'Bank Name', value: 'Polaris Bank' },
                { label: 'Account Number', value: '1234567890' },
                { label: 'Phone Number', value: '08012345678' },
                { label: 'OTP', value: '1234' },
                { label: 'First name', value: 'John' },
            ],
        },
        {
            title: 'Bank Name',
            fields: [
                { label: 'Bank Name', value: 'Sterling Bank' },
                { label: 'Account Number', value: 'Generate any random 10 numbers. eg. 0239566990' },
                { label: 'Phone Number', value: '08012345678' },
                { label: 'Email', value: 'johndoe@klump.dev' },
                { label: 'Specta ID', value: 'SPTest' },
                { label: 'Specta Password', value: '111111' },
            ],
        },
    ];

    return (
        <div className="flex flex-col gap-4">
            {credentials.map((credential, index) => (
                <div
                    key={index}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 lg:p-6 text-sm text-[#171717]"
                >
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {credential.fields.map((field, idx) => (
                            <div key={idx}>
                                <div className="font-semibold text-[#171717] mb-1">{field.label}</div>
                                <div>{field.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
