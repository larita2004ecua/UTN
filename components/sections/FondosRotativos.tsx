import React from 'react';
import Card from '../ui/Card';
import Alert from '../ui/Alert';

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

const FondosRotativos: React.FC = () => {
  return (
    <>
      <SectionIntro emoji="🔄" title="Fondos Rotativos y Cajas Chicas">
        Para cubrir gastos institucionales menores o actividades que requieren desembolsos inmediatos de forma ágil.
      </SectionIntro>
      <div className="space-y-6">
        <Alert type="info">
            <p>Se gestionan en INFOFLAX o SISFIN para agilizar gastos operativos sin procesos de contratación extensos.</p>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="Fondos Rotativos" emoji="🗳️" className="border-t-4 border-blue-500">
              <p className="mb-4 text-sm">Para gastos de actividades, proyectos o programas, especialmente con financiamiento externo.</p>
              
              <h5 className="font-semibold mb-2 text-flacso-blue">Requisitos Clave</h5>
              <ul className="list-disc pl-5 space-y-2 text-sm mb-4">
                  <li>Solicitud de creación con justificación y proyección.</li>
                  <li>Aprobación de SAF (hasta 8 SBU) o Dirección (+8 SBU).</li>
                  <li>Comprobantes a nombre del custodio con N° de cédula (no RUC de dependiente).</li>
              </ul>
              
              <h5 className="font-semibold mb-2 text-flacso-blue">Plazos Importantes</h5>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li><strong>Uso:</strong> Máximo 60 días.</li>
                  <li><strong>Justificación y cierre:</strong> Dentro de los 15 días posteriores al último gasto.</li>
              </ul>
          </Card>

          <Card title="Cajas Chicas" emoji="💵" className="border-t-4 border-green-500">
              <p className="mb-4 text-sm">Para pagos en efectivo de gastos menores y urgentes.</p>
              
              <h5 className="font-semibold mb-2 text-flacso-blue">Requisitos Clave</h5>
              <ul className="list-disc pl-5 space-y-2 text-sm mb-4">
                  <li>Solicitud formal en INFOFLAX/SISFIN.</li>
                  <li>Custodio debe ser empleado en relación de dependencia.</li>
                  <li>Gastos únicamente institucionales y autorizados.</li>
              </ul>
              
              <h5 className="font-semibold mb-2 text-flacso-blue">Montos y Reposición</h5>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li><strong>Monto máximo del fondo:</strong> USD 500.</li>
                  <li><strong>Límite por gasto:</strong> USD 100 (incluido IVA).</li>
                  <li><strong>Reposición:</strong> Al usar el 60% del fondo o al inicio del mes.</li>
              </ul>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Alert type="danger" title="Errores Frecuentes (Ambos Casos)">
              <ul className="list-disc pl-5 space-y-2">
                  <li>Justificar con facturas a nombre de terceros o con RUC.</li>
                  <li>No entregar respaldos dentro del plazo.</li>
                  <li>Superar los montos máximos permitidos.</li>
                  <li>Solicitar un nuevo fondo sin haber cerrado el anterior.</li>
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

export default FondosRotativos;