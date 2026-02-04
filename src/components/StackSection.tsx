type StackSectionProps = {
    title: string;
    items: string[];
    primary?: boolean;
};

const rotations = [
    "rotate-1",
    "-rotate-1",
];

export default function StackSection({
    title,
    items,
    primary = false,
}: StackSectionProps) {
    return (
        <div>
            {/* Section Title */}
            <div className="flex items-center gap-2 mb-3">
                <span className="font-bold">{title}</span>

                {primary && (
                    <span className="neo-badge bg-yellow-300 text-xs">
                        Primary
                    </span>
                )}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
                {items.map((item, index) => {
                    const rotationClass =
                        rotations[index % rotations.length];

                    return (
                        <span
                            key={item}
                            className={`
                                        neo-pill
                                        ${rotationClass}
                                        hover:rotate-0
                                        hover:translate-x-0.5
                                        hover:translate-y-0.5
                                        transition
                                    `}
                        >
                            {item}
                        </span>
                    );
                })}
            </div>
        </div >
    );
}
