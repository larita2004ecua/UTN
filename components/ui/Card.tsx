import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  emoji?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, emoji, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg mb-6 overflow-hidden border-t-4 border-flacso-blue-light transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}>
      <div className="p-4 sm:p-5">
        <h3 className="text-xl font-bold text-flacso-blue flex items-center">
          {emoji && <span className="text-2xl mr-3">{emoji}</span>}
          {title}
        </h3>
      </div>
      <div className="px-4 sm:px-5 pb-5 text-slate-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default Card;