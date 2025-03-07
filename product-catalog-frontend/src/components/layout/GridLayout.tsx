import { ReactNode } from 'react';

interface GridLayoutProps {
    children: ReactNode;
    columns?: {
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    gap?: number;
    className?: string;
}

export default function GridLayout({
    children,
    columns = {
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
    },
    gap = 6,
    className = '',
}: GridLayoutProps) {
    // Convert column counts to tailwind grid classes
    const getColumnClass = (count: number): string => {
        switch (count) {
            case 1: return 'grid-cols-1';
            case 2: return 'grid-cols-2';
            case 3: return 'grid-cols-3';
            case 4: return 'grid-cols-4';
            case 5: return 'grid-cols-5';
            case 6: return 'grid-cols-6';
            default: return 'grid-cols-1';
        }
    };

    // Build responsive grid classes
    const gridClasses = [
        'grid',
        `gap-${gap}`,
        columns.sm ? `sm:${getColumnClass(columns.sm)}` : '',
        columns.md ? `md:${getColumnClass(columns.md)}` : '',
        columns.lg ? `lg:${getColumnClass(columns.lg)}` : '',
        columns.xl ? `xl:${getColumnClass(columns.xl)}` : '',
        getColumnClass(1), // Default for smallest screens
    ].filter(Boolean).join(' ');

    return (
        <div className={`${gridClasses} ${className}`}>
            {children}
        </div>
    );
}