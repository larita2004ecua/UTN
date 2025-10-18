import React from 'react';
import Card from '../ui/Card';
import { HomeIcon, MapIcon } from '../Icons';
import { SectionKey, SECTIONS, SECTION_KEYS } from '../../constants';

interface IntroduccionProps {
  setActiveSection: (section: SectionKey) => void;
}

const SectionIntro: React.FC<{ icon: React.FC<any>, title: string, children: React.ReactNode }> = ({ icon: Icon, title, children }) => (
    <div className="flex items-start space-x-4 p-4 bg-flacso-blue/5 rounded-lg border border-flacso-blue/10 mb-8">
        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-flacso-blue-light rounded-full text-white">
            <Icon className="h-7 w-7" />
        </div>
        <div>
            <h2 className="text-2xl font-bold text-flacso-blue">{title}</h2>
            <p className="text-slate-600 mt-1">{children}</p>
        </div>
    </div>
);

const Introduccion: React.FC<IntroduccionProps> = ({ setActiveSection }) => {
  return (
    <div className="space-y-8">
      <SectionIntro icon={HomeIcon} title="Bienvenido/a a la Guía Interactiva de Pagos">
        Esta guía te orientará en cada paso de los procesos administrativos y financieros de la institución.
      </SectionIntro>

      <Card 
        title="El Propósito de Esta Guía" 
        emoji="🎯"
        className="bg-flacso-blue/5 border-t-4 border-flacso-blue-light"
      >
        <p className="text-slate-700 leading-relaxed text-lg text-center px-4">
          La Subdirección Administrativa Financiera (SAF) elaboró esta guía con el propósito de orientar a las distintas unidades en la elaboración, presentación y justificación de trámites de pago. Antes de remitir cualquier trámite a la SAF, es indispensable verificar que el expediente y sus anexos estén completos y cumplan con los lineamientos aquí establecidos.
        </p>
      </Card>

      <Card title="Explora la Guía" emoji="🗺️">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-4">
          {SECTION_KEYS.filter(key => key !== 'introduccion').map(key => {
            const section = SECTIONS[key];
            if (!section) return null;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className="flex flex-col items-center text-center p-4 bg-slate-50/50 rounded-lg border border-slate-200 hover:border-flacso-blue-light hover:bg-white hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1"
                aria-label={`Ir a ${section.title}`}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-flacso-blue-light/10 rounded-full mb-3">
                  <span className="text-3xl">{section.emoji}</span>
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-flacso-blue leading-tight">{section.title.replace(/^\d+\.\s/, '')}</h4>
              </button>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Introduccion;