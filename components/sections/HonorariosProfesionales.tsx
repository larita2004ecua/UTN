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

const HonorariosProfesionales: React.FC = () => {
  return (
    <>
    <SectionIntro emoji="💼" title="Honorarios Profesionales">
        Aplica para profesionales o consultores con servicios bajo contrato o acuerdo formal. El pago se realiza tras la validación del servicio.
      </SectionIntro>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Alert type="info">
              <p>Se gestionan en SISFIN o INFOFLAX. El pago se realiza tras la validación del servicio.</p>
          </Alert>

          <Card title="Modalidades y Requisitos" emoji="📝">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <h4 className="font-bold text-lg text-flacso-blue mb-2 border-b-2 border-flacso-blue-light pb-1">Con Contrato</h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm pt-2">
                          <li>Solicitud de pago firmada.</li>
                          <li>Contrato cargado en INFOFLAX.</li>
                          <li>Informe de cumplimiento.</li>
                          <li>Factura como "Honorarios profesionales".</li>
                          <li>RUC de Servicios Profesionales.</li>
                      </ul>
                  </div>
                  <div className="border-t md:border-t-0 md:border-l border-slate-200 pl-0 md:pl-6 pt-4 md:pt-0">
                      <h4 className="font-bold text-lg text-flacso-blue mb-2 border-b-2 border-flacso-blue-light pb-1">Sin Contrato</h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm pt-2">
                          <li>Valor máximo: USD $4500.</li>
                          <li>No tener otro contrato vigente.</li>
                          <li>Aprobación del responsable.</li>
                          <li>Informe o evidencia del servicio.</li>
                          <li>Factura y documentos generales.</li>
                      </ul>
                  </div>
              </div>
          </Card>

          <Card title="Plazos y Condiciones" emoji="⏳">
              <ul className="list-disc pl-5 space-y-3">
                  <li>El pago se solicita una vez entregado el producto o servicio.</li>
                  <li>La factura debe emitirse y presentarse dentro de los <strong>3 días hábiles</strong> posteriores a la entrega.</li>
                  <li>Trámites con observaciones solo se aceptan mientras la factura siga vigente.</li>
              </ul>
          </Card>
        </div>

        <div className="space-y-6">
          <Alert type="warning" title="Profesionales Extranjeros">
              <ul className="list-disc pl-5 space-y-2">
                  <li>Se aplica retención del 25% (Impuesto a la Renta).</li>
                  <li>Para exoneración (por convenio de doble tributación), presentar certificado de residencia fiscal.</li>
                  <li>Validar siempre con Contabilidad.</li>
              </ul>
          </Alert>
          <Alert type="danger" title="Errores Frecuentes">
              <ul className="list-disc pl-5 space-y-2">
                  <li>Factura con descripción incorrecta.</li>
                  <li>Actividad económica en RUC no es la adecuada.</li>
                  <li>No subir el contrato/plan de pagos.</li>
                  <li>Omitir informe de cumplimiento firmado.</li>
              </ul>
          </Alert>
          <Card title="Contactos de Apoyo" emoji="💬">
              <ul className="space-y-2 text-sm">
                  <li><strong>Contabilidad:</strong> Exts. 2165 - 2180 - 2183</li>
                  <li><strong>Presupuesto:</strong> Exts. 2190 - 2182 – 2166</li>
                  <li><strong>SAF:</strong> Exts. 2009 – 2010</li>
              </ul>
          </Card>
        </div>
      </div>
    </>
  );
};

export default HonorariosProfesionales;