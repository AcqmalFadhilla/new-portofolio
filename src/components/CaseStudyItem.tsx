type CaseStudyItemProps = {
    title: string;
    items: string[];
    color?: string;
};

export default function CaseStudyItem({
    title,
    items,
    color = "bg-blue-400",
}: CaseStudyItemProps) {
    return (
        <div className="grid grid-cols-[40px_1fr] gap-6 relative">

            {/* DOT */}
            <div className="relative">
                <div
                    className={`
                        absolute left-5 -translate-x-1/2
                        w-8 h-8 rounded-full border-4 border-black
                        ${color}
                    `}
                />
            </div>

            {/* CARD */}
            <div className="neo-card p-5">

                <h4 className="font-extrabold mb-2">
                    {title}
                </h4>

                <ul className="list-disc pl-5 space-y-2 text-sm">

                    {items.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}

                </ul>

            </div>

        </div>
    );
}