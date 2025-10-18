import React from 'react';
import { SECTIONS, SectionKey } from '../constants';

interface ContentDisplayProps {
  activeSection: SectionKey;
  setActiveSection: (section: SectionKey) => void;
}

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ activeSection, setActiveSection }) => {
  const ActiveComponent = SECTIONS[activeSection]?.component;

  if (!ActiveComponent) {
    return (
      <div className="text-center p-8">
        <h3 className="text-xl font-semibold">Sección no encontrada</h3>
        <p>Por favor, seleccione una sección del menú.</p>
      </div>
    );
  }

  return (
    <div>
      <ActiveComponent setActiveSection={setActiveSection} />
    </div>
  );
};