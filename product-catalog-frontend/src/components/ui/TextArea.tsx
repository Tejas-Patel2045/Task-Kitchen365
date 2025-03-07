import { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
    helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, error, fullWidth = true, helperText, className = '', id, rows = 4, ...props }, ref) => {
        const textareaId = id || `textarea-${Math.random().toString(36).substring(2, 9)}`;
        const widthClass = fullWidth ? 'w-full' : '';
        const errorClass = error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '';

        return (
            <div className={`mb-4 ${widthClass}`}>
                {label && (
                    <label htmlFor={textareaId} className="block text-sm font-medium text-gray-700 mb-1">
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    id={textareaId}
                    rows={rows}
                    className={`px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errorClass} ${widthClass} ${className}`}
                    {...props}
                />
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
                {helperText && !error && <p className="mt-1 text-sm text-gray-500">{helperText}</p>}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';

export default Textarea;