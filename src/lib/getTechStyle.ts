const colors = [
    "bg-red-200 neo-tilt-soft",
    "bg-blue-200 neo-tilt-soft",
    "bg-purple-200 neo-tilt-soft",
    "bg-green-200 neo-tilt-soft",
    "bg-pink-200 neo-tilt-soft",
    "bg-yellow-200 neo-tilt-soft",
    "bg-indigo-200 neo-tilt-hard",
];

export function getTechStyle(tech: string): string {
    const index = tech.charCodeAt(0) % colors.length;
    return colors[index];
}