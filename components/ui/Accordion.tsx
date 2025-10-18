
import React, { useState } from 'react';
import { ChevronDownIcon } from '../Icons';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  startOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, startOpen = false }) => {
  const [isOpen, setIsOpen] = useState(startOpen);

  return (
    <div className="border border-slate-200 rounded-md mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-3 bg-slate-50 hover:bg-slate-100 focus:outline-none"
      >
        <span className="font-semibold text-flacso-gray">{title}</span>
        <ChevronDownIcon
          className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="p-4 border-t border-slate-200">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
