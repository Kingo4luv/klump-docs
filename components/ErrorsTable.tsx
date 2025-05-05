

export default function ErrorsTable() {
    const errors = [
        {
            code: '200',
            meaning: 'OK',
            description: "Everything is fine. You're cleared for take off.",
            color: 'bg-[#D8FFD933]',
            errorCodeColor: 'text-[#E09805]'
        },
        {
            code: '201',
            meaning: 'Created',
            description: "Everything is still fine, but this time around, we created a resource for you on our end. We are kind like that.",
            color: 'bg-[#D8FFD933]',
            errorCodeColor: 'text-[#E09805]'
        },
        {
            code: '400',
            meaning: 'Bad Request',
            description: "Ouch! We couldn't accept this request, you omitted a required parameter. Don't break a sweat, reconfirm, again.",
            color: 'bg-[#D8FFD933]',
            errorCodeColor: 'text-[#E09805]'
        },
        {
            code: '401',
            meaning: 'Unauthorized',
            description: "You didn't provide a valid API key.",
            color: 'bg-[#D8FFD933]',
            errorCodeColor: 'text-[#E09805]'
        },
        {
            code: '403',
            meaning: 'Forbidden',
            description: "You don't have the clearance to perform this action. Play nice, will you?",
            color: 'bg-[#D8FFD933]',
            errorCodeColor: 'text-[#E09805]'
        },
        {
            code: '409',
            meaning: 'Conflict',
            description: "The request conflicted with another one. There's a high likelihood that we have already treated this request.",
            color: 'bg-[#D8FFD933]',
            errorCodeColor: 'text-[#E09805]'
        },
        {
            code: '429',
            meaning: 'Too Many Request',
            description: "You're hitting our API too quickly. Pump your breaks, captain.",
            color: 'bg-[#D8FFD933]',
            errorCodeColor: 'text-[#E09805]'
        },
        {
            code: '5xx',
            meaning: 'Server Error',
            description: "We messed up and we are sorry. 😔",
            color: 'bg-[#D8FFD933]',
            errorCodeColor: 'text-[#D3271F]'
        },
    ];

    return (
        <section className="flex flex-col gap-3">
            {/* Header */}
            <div className="flex bg-gray-50 text-gray-600 text-xs font-semibold uppercase px-6 py-3 rounded-md border border-gray-200">
                <div className="w-36 lgw-56 flex gap-6">
                    <div>Code</div>
                    <div>Meaning</div>
                </div>
                <div className="flex-1">
                    What actually happened
                </div>
            </div>

            {/* Rows */}
            {errors.map((error, idx) => (
                <div
                    key={idx}
                    className={`flex items-start px-6 py-4 rounded-md border border-gray-200 text-gray-900 ${error.color} text-sm`}
                >
                    {/* Code and Meaning */}
                    <div className="w-36 lg:w-56 flex gap-6">
                        <div className={`font-semibold ${error.errorCodeColor}`}>
                            {error.code}
                        </div>
                        <div>
                            {error.meaning}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="flex-1">
                        {error.description}
                    </div>
                </div>
            ))}
        </section>
    );
}
