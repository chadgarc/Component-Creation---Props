// components/AlertBox/AlertBox.tsx
import React from 'react';
import type { AlertBoxProps } from '../../types';

/**
 * AlertBox Component
 * ------------------
 * Displays an alert message with optional close button and children content.
 *
 * Props:
 * @param {"success"|"error"|"warning"|"info"} type - Determines the alert style.
 * @param {string} message - Main alert message.
 * @param {() => void} [onClose] - Optional callback fired when the close button is clicked.
 * @param {React.ReactNode} [children] - Optional additional content displayed below the message.
 *
 * Component Interaction:
 * - Parent components control when the alert is shown.
 * - When the close button is clicked, `onClose` notifies the parent to hide the alert.
 */

export const AlertBox: React.FC<AlertBoxProps> = ({
    type,
    message,
    onClose,
    children
    }) => {

    const alertStyles = {
        success: 'bg-green-100 border-green-500 text-green-700',
        error: 'bg-red-100 border-red-500 text-red-700',
        warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
        info: 'bg-blue-100 border-blue-500 text-blue-700'
    };
    
    return (
        <div className={`p-4 border-l-4 ${alertStyles[type]}`}>
            <div className="flex justify-between items-center">
                <p>{message}</p>
                {onClose && (
                <button
                    onClick={onClose}
                    className="ml-4 text-gray-500 hover:text-gray-700"
                >
                    ×
                </button>
                )}
            </div>
            {children}
        </div>
    );
};