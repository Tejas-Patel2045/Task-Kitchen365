import { InputHTMLAttributes, forwardRef } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    error?: string;
    helperText?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ label, error, helperText, className = '', id, ...props }, ref) => {
        const checkboxId = id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;

        return (
            <div className="flex items-start mb-4">
                <div className="flex items-center h-5">
                    <input
                        ref={ref}
                        id={checkboxId}
                        type="checkbox"
                        className={`h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${className}`}
                        {...props}
                    />
                </div>
                <div className="ml-3 text-sm">
                    {label && (
                        <label htmlFor={checkboxId} className="font-medium text-gray-700">
                            {label}
                        </label>
                    )}
                    {helperText && !error && <p className="text-gray-500">{helperText}</p>}
                    {error && <p className="text-red-600">{error}</p>}
                </div>
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;