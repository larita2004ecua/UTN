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

const EvaluacionesExternas: React.FC = () => {
  return (
    <>
      <SectionIntro emoji="📝" title="Evaluaciones Externas">
        Pagos para evaluadores en convocatorias de becas, proyectos de investigación o evaluaciones académicas.
      </SectionIntro>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Alert type="info">
              <p>Aplica para evaluadores en convocatorias de becas, proyectos de investigación o evaluaciones académicas. Los trámites se gestionan vía SISFIN.</p>
          </Alert>

          <Card title="Requisitos Principales" emoji="📋">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoCard emoji="💻" title="Solicitud en SISFIN">El pago debe ser generado en el sistema.</InfoCard>
                  <InfoCard emoji="✅" title="Aprobación y Validación">Por parte de la Coord. de Investigación o Subdirección Académica.</InfoCard>
                  <InfoCard emoji="✍️" title="Informe o Acta Firmada">Respaldo de la evaluación realizada.</InfoCard>
                  <InfoCard emoji="🧾" title="Factura Específica">Con descripción "Honorarios por evaluación externa".</InfoCard>
                  <InfoCard emoji="🆔" title="RUC Válido">Con actividad registrada como Servicios Profesionales.</InfoCard>
                  <InfoCard emoji="👥" title="Documentos Personales">Cédula o pasaporte vigente y certificado bancario.</InfoCard>
                  <InfoCard emoji="🌍" title="Para Extranjeros">Certificado de residencia fiscal vigente, si aplica.</InfoCard>
              </div>
          </Card>
        
          <Card title="Plazos y Condiciones" emoji="⏳">
              <ul className="list-disc pl-5 space-y-3">
                  <li>El pago se solicita una vez completada y validada la evaluación.</li>
                  <li>La factura debe presentarse dentro de los <strong>3 días hábiles</strong> posteriores a la entrega del servicio.</li>
              </ul>
          </Card>
        </div>

        <div className="space-y-6">
          <Alert type="danger" title="Errores Frecuentes">
              <ul className="list-disc pl-5 space-y-2">
                  <li>Enviar solicitud sin la aprobación correspondiente.</li>
                  <li>Factura con descripción genérica.</li>
                  <li>Falta de respaldo (acta o informe firmado).</li>
              </ul>
          </Alert>
          <Card title="Contactos de Apoyo" emoji="💬">
              <ul className="space-y-2 text-sm">
                  <li><strong>Coord. de Investigación:</strong> ext. 2191</li>
                  <li><strong>Subdirección Académica:</strong> Canal institucional</li>
                  <li><strong>Contabilidad:</strong> ext. 2165</li>
                  <li><strong>SAF:</strong> exts. 2009 - 2010</li>
              </ul>
          </Card>
        </div>
      </div>
    </>
  );
};

export default EvaluacionesExternas;