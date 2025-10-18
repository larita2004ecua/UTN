
import React from 'react';

interface ChecklistItemProps {
  children: React.ReactNode;
  checked: boolean;
  onChange: () => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ children, checked, onChange }) => {
  return (
    <li className="flex items-start space-x-3 mb-3">
      <label className="flex items-start space-x-3 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="h-5 w-5 rounded border-gray-300 text-flacso-blue-light focus:ring-flacso-blue-light mt-0.5"
        />
        <span className={`${checked ? 'text-slate-500 line-through' : 'text-slate-800'}`}>
          {children}
        </span>
      </label>
    </li>
  );
};

export default ChecklistItem;