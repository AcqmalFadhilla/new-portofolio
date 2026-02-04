type TimelineItemProps = {
    color: string;
    title: string;
    company: string;
    period: string;
    points: string[];
};



export default function TimelineItem({
    color,
    title,
    company,
    period,
    points,
}: TimelineItemProps) {
    return (
        <div className="grid grid-cols-[40px_1fr] gap-6 relative">
            {/* DOT COLUMN */}
            <div className="relative">
                <div
                    className={`
                                absolute 
                                left-5 
                                -top-1 
                                -translate-x-1/2
                                w-8 
                                h-8 
                                rounded-full 
                                border-4 
                                border-black 
                                ${color}
                            `}
                />
            </div>

            {/* CARD */}
            <div className="neo-card p-5" >
                <h4 className="font-extrabold"> {title} </h4>

                <p className="text-sm mt-1 text-gray-700">
                    {company} · {period}
                </p>

                <ul className="mt-3 list-disc list-outside pl-5 text-sm space-y-1">
                    {points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </div >
    );
}
