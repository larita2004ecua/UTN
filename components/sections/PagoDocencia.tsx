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

const PagoDocencia: React.FC = () => {
  return (
    <>
      <SectionIntro emoji="🧑‍🏫" title="Pago por Servicio de Docencia">
        Procesos para docentes, tutores, coasesores y profesores invitados, gestionados a través del sistema SISFIN.
      </SectionIntro>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Requisitos Principales" emoji="📝">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoCard emoji="💰" title="Solicitud de Pago">Firmada por el responsable académico.</InfoCard>
                  <InfoCard emoji="🧾" title="Factura Específica">Debe tener el concepto "Honorarios por docencia".</InfoCard>
                  <InfoCard emoji="✍️" title="Contrato Firmado">Copia del contrato, si es que aplica para el caso.</InfoCard>
                  <InfoCard emoji="🆔" title="RUC Válido">Con actividad económica registrada como docencia de cuarto nivel.</InfoCard>
                  <InfoCard emoji="👥" title="Documentos Personales">Cédula o pasaporte vigente y certificado bancario.</InfoCard>
                  <InfoCard emoji="✒️" title="Firma Electrónica">Debe ser válida en todos los documentos digitales.</InfoCard>
              </div>
          </Card>

          <Card title="Plazos y Condiciones" emoji="⏳">
              <ul className="list-disc pl-5 space-y-3">
                  <li>La factura debe ser presentada dentro de los <strong>3 días hábiles</strong> posteriores a su emisión.</li>
                  <li>El pago se solicita una vez sea entregado el servicio, <strong>nunca antes</strong>.</li>
                  <li>La subsanación de observaciones solo se acepta si la factura sigue vigente (plazo de 3 días).</li>
              </ul>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Casos Especiales" emoji="🎓">
              <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li><strong>Coasesorías/Tesis:</strong> Se debe consultar el nombre del estudiante, título de tesis y convocatoria.</li>
                  <li><strong>Ayudantías/Tutorías:</strong> Requiere aprobación de Coordinación Docente por correo institucional.</li>
                  <li><strong>Formación Contínua:</strong> Requiere aprobación de la ficha de realización del curso.</li>
              </ul>
          </Card>
          <Alert type="danger" title="Errores Frecuentes">
              <ul className="list-disc pl-5 space-y-2">
                  <li>Enviar factura sin descripción académica.</li>
                  <li>No validar la residencia fiscal del docente extranjero.</li>
                  <li>Olvidar cargar el contrato antes del pago.</li>
                  <li>Superar los 3 días de plazo para la factura.</li>
              </ul>
          </Alert>
          <Card title="Contactos de Apoyo" emoji="💬">
              <ul className="space-y-2 text-sm">
                  <li><strong>Contabilidad:</strong> Exts. 2165 - 2180 - 2183</li>
                  <li><strong>Presupuesto:</strong> Exts. 2190 - 2182 - 2166</li>
                  <li><strong>SAF:</strong> Exts. 2009 – 2010</li>
              </ul>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PagoDocencia;