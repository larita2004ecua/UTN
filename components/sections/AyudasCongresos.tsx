import React from 'react';
import Card from '../ui/Card';
import Alert from '../ui/Alert';

const InfoCard: React.FC<{ emoji: string, title: string, children: React.ReactNode }> = ({ emoji, title, children }) => (
    <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg border border-slate-200 h-full">
        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-flacso-blue-light rounded-full text-white">
            <span className="text-xl">{emoji}</span>
        </div>
        <div>
            <h4 className="font-bold text-flacso-blue">{title}</h4>
            <p className="text-sm text-slate-600">{children}</p>
        </div>
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

const AyudasCongresos: React.FC = () => {
  return (
    <>
      <SectionIntro emoji="🎟️" title="Ayudas para Congresos y Eventos">
        Apoyo económico para la participación en eventos académicos, cubriendo gastos como pasajes, visas, etc., no cubiertos por viáticos.
      </SectionIntro>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Requisitos Principales" emoji="📝">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoCard emoji="✍️" title="Solicitud Formal">Presentada mediante memorando oficial del responsable.</InfoCard>
                  <InfoCard emoji="✅" title="Aprobación de Participación">Aprobación formal según las bases de la ayuda.</InfoCard>
                  <InfoCard emoji="👥" title="Documentos Personales">Cédula o pasaporte vigente y certificado bancario.</InfoCard>
                  <InfoCard emoji="📎" title="Documentos de Respaldo">Justificantes que validen el destino del apoyo financiero.</InfoCard>
                  <InfoCard emoji="✒️" title="Firma Electrónica">Vigente en todos los documentos digitales.</InfoCard>
              </div>
          </Card>

          <Card title="Plazos y Condiciones" emoji="⏳">
              <ul className="list-disc pl-5 space-y-3">
                  <li>La solicitud debe presentarse <strong>antes del inicio del evento</strong>, con tiempo suficiente para su revisión.</li>
                  <li>Las facturas o comprobantes deben tener fecha <strong>dentro del período del evento</strong> o del viaje autorizado.</li>
              </ul>
          </Card>
        </div>

        <div className="space-y-6">
          <Alert type="danger" title="Errores Frecuentes">
              <ul className="list-disc pl-5 space-y-2">
                  <li>Solicitud sin respaldo oficial de aprobación.</li>
                  <li>Gastos no relacionados con el evento académico.</li>
                  <li>Presentar comprobantes fuera de fecha.</li>
              </ul>
          </Alert>
          <Card title="Contactos de Apoyo" emoji="💬">
              <ul className="space-y-2 text-sm">
                  <li><strong>SAF:</strong> exts. 2009 - 2010</li>
                  <li><strong>Presupuesto:</strong> exts. 2190 - 2182 - 2166</li>
                  <li><strong>Unidad Académica:</strong> Canal Institucional Interno</li>
              </ul>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AyudasCongresos;