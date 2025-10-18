
import React from 'react';
import { InformationCircleIcon, ExclamationTriangleIcon, XCircleIcon, LightBulbIcon } from '../Icons';

interface AlertProps {
  type?: 'info' | 'warning' | 'danger' | 'tip';
  children: React.ReactNode;
  title?: string;
}

const Alert: React.FC<AlertProps> = ({ type = 'info', children, title }) => {
  const baseClasses = "p-4 rounded-md flex items-start space-x-3 my-4 border";
  
  const styles = {
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: <InformationCircleIcon className="h-6 w-6 text-blue-500" />,
      text: "text-blue-700",
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      icon: <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500" />,
      text: "text-yellow-800",
    },
    danger: {
      bg: "bg-red-50",
      border: "border-red-200",
      icon: <XCircleIcon className="h-6 w-6 text-red-500" />,
      text: "text-red-800",
    },
    tip: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: <LightBulbIcon className="h-6 w-6 text-green-500" />,
      text: "text-green-800",
    }
  };

  const selectedStyle = styles[type];

  return (
    <div className={`${baseClasses} ${selectedStyle.bg} ${selectedStyle.border}`}>
      <div className="flex-shrink-0 mt-0.5">{selectedStyle.icon}</div>
      <div className={`flex-1 text-sm ${selectedStyle.text}`}>
        {title && <h4 className="font-bold mb-1">{title}</h4>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Alert;