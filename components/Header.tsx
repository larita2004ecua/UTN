import React from 'react';
import { MenuIcon } from './Icons';

interface HeaderProps {
  title: string;
  emoji?: string;
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, emoji, onMenuClick }) => {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-sm shadow-sm p-4 flex-shrink-0 z-10 border-b border-slate-200">
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button
          onClick={onMenuClick}
          className="p-1 text-slate-600 hover:text-flacso-blue lg:hidden"
          aria-label="Abrir menú"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
        {emoji && 
          <div className="w-12 h-12 flex items-center justify-center bg-flacso-blue-light/10 rounded-full">
            <span className="text-3xl">{emoji}</span>
          </div>
        }
        <h2 className="text-xl sm:text-2xl font-bold text-flacso-blue">{title}</h2>
      </div>
    </header>
  );
};