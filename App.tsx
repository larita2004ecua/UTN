import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ContentDisplay } from './components/ContentDisplay';
import AIAssistant from './components/AIAssistant';
import { SECTIONS, SectionKey } from './constants';
import { Sections } from './types';
import { SparklesIcon } from './components/Icons';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>('introduccion');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const mainContentRef = useRef<HTMLElement>(null);


  useEffect(() => {
    // Scroll to top whenever the section changes
    mainContentRef.current?.scrollTo(0, 0);

    // Handle content fade transition
    setContentVisible(false);
    const timer = setTimeout(() => setContentVisible(true), 150);
    return () => clearTimeout(timer);
  }, [activeSection]);


  const filteredSections: Sections = useMemo(() => {
    if (!searchTerm.trim()) {
      return SECTIONS;
    }
    const lowercasedFilter = searchTerm.toLowerCase();
    
    return (Object.keys(SECTIONS) as SectionKey[])
      .filter(key => SECTIONS[key].title.toLowerCase().includes(lowercasedFilter))
      .reduce((res, key) => {
        res[key as SectionKey] = SECTIONS[key];
        return res;
      }, {} as Sections);

  }, [searchTerm]);

  const activeSectionDetails = SECTIONS[activeSection];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800 overflow-hidden">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filteredSections={filteredSections}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-20 lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header 
            title={activeSectionDetails?.title || 'Guía de Pagos'} 
            emoji={activeSectionDetails?.emoji} 
            onMenuClick={() => setIsSidebarOpen(true)}
        />
        <main ref={mainContentRef} className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-50 to-slate-100">
           <div 
             key={activeSection} 
             className={`transition-opacity duration-300 ease-in-out ${contentVisible ? 'opacity-100' : 'opacity-0'}`}
           >
            <div className="max-w-4xl mx-auto">
              <ContentDisplay activeSection={activeSection} setActiveSection={setActiveSection}/>
            </div>
          </div>
        </main>
      </div>

      <button
        onClick={() => setIsAssistantOpen(true)}
        className="fixed bottom-6 right-6 bg-flacso-blue text-white p-4 rounded-full shadow-lg hover:bg-flacso-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-flacso-blue-light transition-transform hover:scale-110"
        aria-label="Abrir Asistente IA"
      >
        <SparklesIcon className="h-7 w-7" />
      </button>

      <AIAssistant isOpen={isAssistantOpen} onClose={() => setIsAssistantOpen(false)} />
    </div>
  );
};

export default App;