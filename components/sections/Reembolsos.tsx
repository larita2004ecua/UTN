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

const Reembolsos: React.FC = () => {
  return (
    <>
      <SectionIntro emoji="🧾" title="Reembolso por Gastos Varios">
        Para recuperar gastos personales realizados por motivos institucionales, con su debida justificación y respaldo.
      </SectionIntro>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Requisitos Principales" emoji="📝">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoCard emoji="✍️" title="Solicitud Formal">Mediante memorando oficial con justificación clara.</InfoCard>
                <InfoCard emoji="🧾" title="Facturas Originales">A nombre de la persona que realizó el pago.</InfoCard>
                <InfoCard emoji="🆔" title="Facturas con Cédula">Debe constar el N° de cédula (NO RUC de dependiente).</InfoCard>
                <InfoCard emoji="🌍" title="Compras en el Exterior">El invoice o factura debe estar a nombre de FLACSO.</InfoCard>
                <InfoCard emoji="🍽️" title="Consumo de Alimentos">Incluir la lista de asistentes al evento o reunión.</InfoCard>
            </div>
          </Card>

          <Card title="Plazos y Condiciones" emoji="⏳">
            <ul className="list-disc pl-5 space-y-3">
                <li>Los reembolsos deben gestionarse dentro del <strong>mismo año fiscal</strong> en que se realizó el gasto.</li>
                <li>Las facturas deben estar vigentes y haber sido emitidas dentro del período de la actividad.</li>
            </ul>
          </Card>
        </div>

        <div className="space-y-6">
          <Alert type="danger" title="Errores Frecuentes">
              <ul className="list-disc pl-5 space-y-2">
                  <li>Facturas sin N° de cédula o con RUC.</li>
                  <li>Falta de justificación escrita del gasto.</li>
                  <li>No incluir respaldo del evento (lista, etc.).</li>
                  <li>Solicitar reembolso por gastos personales.</li>
              </ul>
          </Alert>
          <Card title="Contactos de Apoyo" emoji="💬">
              <ul className="space-y-2 text-sm">
                  <li><strong>SAF:</strong> exts. 2009 - 2010</li>
                  <li><strong>Presupuesto:</strong> exts. 2190 - 2182 - 2166</li>
              </ul>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Reembolsos;