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


const ViaticosYPasajes: React.FC = () => {
  return (
    <>
      <SectionIntro emoji="✈️" title="Viáticos y Pasajes">
        Cubre los gastos de desplazamiento y estadía para docentes, investigadores o personal administrativo en viajes institucionales.
      </SectionIntro>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Alert type="info">
            <p>Se gestionan en SISFIN, FLAXINV o FLAXVINC y requieren aprobación previa.</p>
          </Alert>

          <Card title="Requisitos Principales" emoji="📝">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoCard emoji="✍️" title="Solicitud de Viáticos">Debe estar firmada por el responsable del proyecto o programa.</InfoCard>
                <InfoCard emoji="📎" title="Documento de Respaldo">Carta de invitación, inscripción al evento o agenda de trabajo.</InfoCard>
                <InfoCard emoji="👥" title="Documentos Personales">Cédula o pasaporte vigente y certificado bancario.</InfoCard>
                <InfoCard emoji="🎟️" title="Para Pasajes">Ticket electrónico y cotizaciones (si el valor supera 7SBU).</InfoCard>
                <InfoCard emoji="✅" title="Aprobación Previa">De la coordinación correspondiente (Vinculación, Investigación, etc.).</InfoCard>
            </div>
          </Card>

          <Card title="Plazos y Condiciones" emoji="⏳">
              <ul className="list-disc pl-5 space-y-3">
                <li>Solicitar los viáticos con un mínimo de <strong>7 días y máximo 15 días</strong> antes del viaje.</li>
                <li>Los viáticos se reconocen desde un día antes hasta un día después del evento.</li>
                <li>La justificación debe presentarse en los <strong>2 días</strong> posteriores al regreso o antes de solicitar un nuevo viático.</li>
              </ul>
          </Card>
        </div>

        <div className="space-y-6">
            <Alert type="warning" title="Justificación y Reembolsos">
              <p className="font-semibold mb-2">Al concluir el viaje, adjunta:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Informe de viaje y pasabordo.</li>
                <li>Facturas de gastos (para reembolsos).</li>
              </ul>
            </Alert>
            <Alert type="danger" title="Errores Frecuentes">
              <ul className="list-disc pl-5 space-y-2">
                <li>Solicitar fuera de plazo.</li>
                <li>No justificar un viático anterior.</li>
                <li>No adjuntar ticket electrónico.</li>
                <li>Fechas de pasaje que no coinciden con el evento.</li>
              </ul>
            </Alert>
          <Card title="Contactos de Apoyo" emoji="💬">
            <ul className="space-y-2 text-sm">
              <li><strong>Coord. de Vinculación:</strong> Módulo FLAXVINC</li>
              <li><strong>Coord. de Investigación:</strong> Módulo FLAXINV</li>
              <li><strong>SAF:</strong> exts. 2009 – 2010</li>
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ViaticosYPasajes;