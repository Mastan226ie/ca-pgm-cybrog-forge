import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import './Toast.css';

const ToastContext = createContext(null);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const showToast = useCallback((message, iconClass = 'fa-bolt') => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, iconClass, show: false }]);

        // Trigger animation in next frame
        setTimeout(() => {
            setToasts((prev) => prev.map(t => t.id === id ? { ...t, show: true } : t));
        }, 10);

        // Remove after 2.5 seconds
        setTimeout(() => {
            setToasts((prev) => prev.map(t => t.id === id ? { ...t, show: false } : t));
            setTimeout(() => {
                setToasts((prev) => prev.filter(t => t.id !== id));
            }, 300);
        }, 2500);
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="toast-container">
                {toasts.map((toast) => (
                    <div key={toast.id} className={`toast ${toast.show ? 'show' : ''}`}>
                        <i className={`fa-solid ${toast.iconClass}`}></i>
                        <span>{toast.message}</span>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};
