interface DividerProps {
    text?: string;
    className?: string;
}

export default function Divider({ text, className = '' }: DividerProps) {
    if (!text) {
        return <hr className={`my-6 border-t border-gray-200 ${className}`} />;
    }

    return (
        <div className={`relative my-6 ${className}`}>
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">{text}</span>
            </div>
        </div>
    );
}