import React from 'react';
import type { SectionKey } from '../constants';
import type { Sections, Section } from '../types';
import { FlacsoLogo, SearchIcon } from './Icons';

interface SidebarProps {
  activeSection: SectionKey;
  setActiveSection: (section: SectionKey) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredSections: Sections;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection, searchTerm, setSearchTerm, filteredSections, isOpen, setIsOpen }) => {
  
  const handleSectionClick = (sectionId: SectionKey) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <aside className={`fixed inset-y-0 left-0 w-72 bg-flacso-blue text-white flex-shrink-0 flex flex-col p-4 shadow-lg z-30 transform transition-transform duration-300 ease-in-out lg:relative lg:w-64 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <button
        onClick={() => handleSectionClick('introduccion')}
        className="bg-black/20 rounded-lg p-3 mb-6 text-left w-full transition-all duration-300 transform hover:bg-blue-900 hover:scale-105"
        aria-label="Volver a la introducción"
      >
        <div className="flex items-center space-x-3">
            <FlacsoLogo className="h-12 w-12" />
            <div>
            <h1 className="text-lg font-bold leading-tight">Guía de Pagos</h1>
            <p className="text-xs text-blue-200">FLACSO Ecuador</p>
            </div>
        </div>
      </button>
      
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Buscar sección..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-8 pr-3 py-2 text-sm text-slate-800 bg-blue-100 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
        />
        <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
      </div>

      <nav className="flex-1 overflow-y-auto pr-2 -mr-2">
        <ul>
          {/* FIX: Explicitly typed 'section' as 'Section' (imported from '../types') because type inference for Object.values was failing, causing multiple property access errors. */}
          {Object.values(filteredSections).map((section: Section) => (
            <li key={section.id}>
              <button
                onClick={() => handleSectionClick(section.id)}
                className={`w-full text-left flex items-center space-x-3 p-2 my-1 rounded-md transition-all duration-200 transform ${
                  activeSection === section.id
                    ? 'bg-flacso-blue-light font-semibold shadow-inner'
                    : 'hover:bg-blue-900 hover:scale-105'
                }`}
              >
                <span className="text-lg w-6 text-center">{section.emoji}</span>
                <span className="text-sm flex-1">{section.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto text-center text-xs text-blue-300 pt-4">
        <p>&copy; {new Date().getFullYear()} FLACSO Ecuador</p>
        <p>Subdirección Administrativa Financiera</p>
      </div>
    </aside>
  );
};