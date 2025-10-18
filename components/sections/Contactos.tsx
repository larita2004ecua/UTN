import React from 'react';

const ContactCard: React.FC<{ title: string, description: string, contact: string }> = ({ title, description, contact }) => (
    <div className="p-5 bg-slate-50 rounded-lg border border-slate-200 hover:shadow-md transition-shadow h-full flex flex-col">
        <h4 className="font-bold text-flacso-blue text-lg">{title}</h4>
        <p className="text-sm text-slate-600 mt-1 mb-3 flex-grow">{description}</p>
        <p className="font-mono text-sm bg-slate-200 text-flacso-blue-light inline-block px-2 py-1 rounded">
          {contact}
        </p>
    </div>
);

const SectionIntro: React.FC<{ emoji: string, title: string, children: React.ReactNode }> = ({ emoji, title, children }) => (
    <div className="flex items-start space-x-4 p-4 bg-flacso-blue/5 rounded-lg border border-flacso-blue/10 mb-8">
        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-flacso-blue-light rounded-full">
            <span className="text-3xl">{emoji}</span>
        </div>
        <div>
            <h2 className="text-2xl font-bold text-flacso-blue">{title}</h2>
            <p className="text-slate-600 mt-1">{children}</p>
        </div>
    </div>
);


const Contactos: React.FC = () => {
  return (
    <>
      <SectionIntro emoji="💬" title="Contactos de Apoyo">
        Encuentra aquí los contactos de las unidades que pueden ayudarte a resolver dudas durante tu trámite de pago.
      </SectionIntro>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContactCard 
                title="Subdirección Administrativa (SAF)" 
                description="Para consultas generales sobre el proceso y estado de tu pago." 
                contact="Exts. 2009 – 2010" 
            />
            <ContactCard 
                title="Contabilidad" 
                description="Dudas sobre facturación, RUC, retenciones y residencia fiscal." 
                contact="Exts. 2165 - 2180 - 2183" 
            />
            <ContactCard 
                title="Presupuesto" 
                description="Para confirmar la disponibilidad de fondos antes de iniciar un trámite." 
                contact="Exts. 2190 - 2182 - 2166" 
            />
            <ContactCard 
                title="Coordinación de Investigación" 
                description="Para aprobación de pagos de investigación, estudiantes y evaluaciones." 
                contact="Ext. 2191" 
            />
            <ContactCard 
                title="Coordinación de Vinculación / Docencia" 
                description="Gestión de viáticos de vinculación y pagos de docencia." 
                contact="Módulos FLAXVINC / SISFIN" 
            />
             <ContactCard 
                title="Procuraduría" 
                description="Asesoría y elaboración de Actas de Liquidación y Pago." 
                contact="Canal Institucional Interno" 
            />
        </div>
      </div>
    </>
  );
};

export default Contactos;