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

const ActasLiquidacion: React.FC = () => {
  return (
    <>
      <SectionIntro emoji="📋" title="Actas de Liquidación y Pago">
        Regularización de pagos excepcionales de bienes o servicios que no pasaron por un proceso de contratación formal.
      </SectionIntro>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Alert type="info">
            <p>Cada caso requiere justificación y aprobación de la Dirección de la Sede.</p>
          </Alert>

          <Card title="Requisitos Principales" emoji="📝">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoCard emoji="✍️" title="Solicitud Formal">Presentada mediante memorando oficial.</InfoCard>
                <InfoCard emoji="✅" title="Pedido de Acta Aprobado">Debe ser aprobado por la Dirección de la Sede.</InfoCard>
                <InfoCard emoji="📄" title="Informe de Sustento">Explica por qué no se usó el canal regular.</InfoCard>
                <InfoCard emoji="💰" title="Compromiso Presupuestario">Solicitado directamente a la Unidad de Presupuesto.</InfoCard>
                <InfoCard emoji="📜" title="Acta de Liquidación">Elaborada en coordinación con Procuraduría FLACSO.</InfoCard>
                <InfoCard emoji="📎" title="Respaldos">Copia de facturas y documentos de la entrega.</InfoCard>
            </div>
          </Card>
        
          <Card title="Plazos y Condiciones" emoji="⏳">
              <ul className="list-disc pl-5 space-y-3">
                  <li>El trámite debe gestionarse una vez entregado y validado el bien o servicio.</li>
                  <li>No se aceptarán solicitudes retroactivas sin una justificación formal y válida.</li>
              </ul>
          </Card>
        </div>

        <div className="space-y-6">
          <Alert type="danger" title="Errores Frecuentes">
              <ul className="list-disc pl-5 space-y-2">
                  <li>No incluir el informe justificativo.</li>
                  <li>Falta de aprobación de la Dirección de la Sede.</li>
                  <li>Omitir la coordinación con Procuraduría.</li>
              </ul>
          </Alert>
          <Card title="Contactos de Apoyo" emoji="💬">
              <ul className="space-y-2 text-sm">
                  <li><strong>Procuraduría:</strong> Canal Institucional Interno</li>
                  <li><strong>SAF:</strong> exts. 2009 - 2010</li>
                  <li><strong>Presupuesto:</strong> exts. 2190 - 2182 - 2166</li>
              </ul>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ActasLiquidacion;