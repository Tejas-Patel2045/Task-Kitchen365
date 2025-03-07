import { ReactNode } from 'react';

interface PageHeaderProps {
    title: string;
    description?: string;
    actions?: ReactNode;
    className?: string;
}

export default function PageHeader({
    title,
    description,
    actions,
    className = '',
}: PageHeaderProps) {
    return (
        <div className={`mb-8 ${className}`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                    {description && (
                        <p className="mt-1 text-sm text-gray-500">{description}</p>
                    )}
                </div>
                {actions && <div className="mt-4 md:mt-0">{actions}</div>}
            </div>
        </div>
    );
}