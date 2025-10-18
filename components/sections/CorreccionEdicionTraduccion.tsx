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

const CorreccionEdicionTraduccion: React.FC = () => {
  return (
    <>
      <SectionIntro emoji="✍️" title="Corrección, Edición y Traducción">
        Pagos a profesionales que prestan servicios editoriales para garantizar la calidad de las publicaciones de FLACSO.
      </SectionIntro>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Alert type="info">
              <p>Se gestionan vía SISFIN y el pago reconoce la labor técnica que garantiza la calidad de las publicaciones de FLACSO.</p>
          </Alert>

          <Card title="Requisitos Principales" emoji="📝">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoCard emoji="💻" title="Solicitud en SISFIN">El pago debe ser generado en el sistema.</InfoCard>
                  <InfoCard emoji="👍" title="Validación de Recepción">Documento (correo, acta) que confirme la entrega del trabajo.</InfoCard>
                  <InfoCard emoji="🧾" title="Factura Específica">Con la descripción detallada del servicio prestado.</InfoCard>
                  <InfoCard emoji="👥" title="Documentos Personales">Cédula o pasaporte vigente y certificado bancario.</InfoCard>
                  <InfoCard emoji="🆔" title="RUC Válido">Con actividad económica relacionada a servicios editoriales.</InfoCard>
                  <InfoCard emoji="✒️" title="Firma Electrónica">Vigente en todos los documentos digitales.</InfoCard>
              </div>
          </Card>

          <Card title="Plazos y Condiciones" emoji="⏳">
              <ul className="list-disc pl-5 space-y-3">
                  <li>La factura debe emitirse y presentarse dentro de los <strong>3 días hábiles</strong> posteriores a la entrega del servicio.</li>
                  <li>El pago se tramita una vez que la unidad solicitante verifica la conformidad del trabajo.</li>
              </ul>
          </Card>
        </div>

        <div className="space-y-6">
          <Alert type="danger" title="Errores Frecuentes">
              <ul className="list-disc pl-5 space-y-2">
                  <li>Enviar factura con descripción genérica.</li>
                  <li>No adjuntar documento que confirme la recepción.</li>
                  <li>Falta de validación de la unidad responsable.</li>
              </ul>
          </Alert>
          <Card title="Contactos de Apoyo" emoji="💬">
              <ul className="space-y-2 text-sm">
                  <li><strong>Presupuesto:</strong> exts. 2190 - 2182 - 2166</li>
                  <li><strong>SAF:</strong> exts. 2009 - 2010</li>
              </ul>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CorreccionEdicionTraduccion;