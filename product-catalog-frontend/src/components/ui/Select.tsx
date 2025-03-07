import { SelectHTMLAttributes, forwardRef } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
    helperText?: string;
    options: Array<{ value: string, label: string }>;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ label, error, fullWidth = true, helperText, options, className = '', id, ...props }, ref) => {
        const selectId = id || `select-${Math.random().toString(36).substring(2, 9)}`;
        const widthClass = fullWidth ? 'w-full' : '';
        const errorClass = error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '';

        return (
            <div className={`mb-4 ${widthClass}`}>
                {label && (
                    <label htmlFor={selectId} className="block text-sm font-medium text-gray-700 mb-1">
                        {label}
                    </label>
                )}
                <select
                    ref={ref}
                    id={selectId}
                    className={`px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errorClass} ${widthClass} ${className}`}
                    {...props}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
                {helperText && !error && <p className="mt-1 text-sm text-gray-500">{helperText}</p>}
            </div>
        );
    }
);

Select.displayName = 'Select';

export default Select;