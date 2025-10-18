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

const PagosEstudiantes: React.FC = () => {
  return (
    <>
      <SectionIntro emoji="🎓" title="Pagos a Estudiantes Semilleros">
        Apoyos para estudiantes que colaboran en proyectos, fortaleciendo su formación práctica y vínculo con la gestión universitaria.
      </SectionIntro>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Requisitos por Tipo de Apoyo" emoji="📂">
            <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-lg text-flacso-blue mb-2 flex items-center"><span className="text-xl mr-2">🔬</span>INVESTIGACIÓN</h4>
                    <p className="font-semibold text-slate-700 mb-2">Límite: Hasta $500 (pago único o total)</p>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Informe de actividades firmado por el estudiante.</li>
                        <li>Carta o correo de aprobación de la Coord. de Investigación.</li>
                        <li>Solicitud de pago hecha por el responsable del proyecto.</li>
                    </ul>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-lg text-flacso-blue mb-2 flex items-center"><span className="text-xl mr-2">🤝</span>VINCULACIÓN</h4>
                    <p className="font-semibold text-slate-700 mb-2">Cobertura: Solo Viáticos</p>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Solicitud de pago y respaldos correspondientes.</li>
                        <li>Aprobación del responsable del proyecto.</li>
                    </ul>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-lg text-flacso-blue mb-2 flex items-center"><span className="text-xl mr-2">⚙️</span>GESTIÓN</h4>
                    <p className="font-semibold text-slate-700 mb-2">Límite: Hasta $200/mes (máx. 3 meses)</p>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Acuerdo aprobado por el estudiante.</li>
                        <li>Informe mensual de actividades firmado.</li>
                        <li>Solicitud de pago gestionada por el coordinador o jefe.</li>
                    </ul>
                </div>
            </div>
          </Card>
        
          <Card title="Plazos y Condiciones Generales" emoji="⏳">
            <ul className="list-disc pl-5 space-y-3">
                <li>Los pagos se realizan según las fechas definidas en el acuerdo o proyecto.</li>
                <li>Ningún pago podrá exceder los límites económicos establecidos.</li>
                <li>Todo trámite debe contar con la documentación completa antes del envío a SAF.</li>
            </ul>
          </Card>
        </div>

        <div className="space-y-6">
          <Alert type="danger" title="Errores Frecuentes">
              <ul className="list-disc pl-5 space-y-2">
                  <li>Falta la firma del estudiante o del coordinador en el informe.</li>
                  <li>Se excede el monto o la duración máxima autorizada.</li>
                  <li>Se omite la aprobación de la Coordinación correspondiente.</li>
              </ul>
          </Alert>
          <Card title="Contactos de Apoyo" emoji="💬">
              <ul className="space-y-2 text-sm">
                  <li><strong>Coordinación de Investigación:</strong> ext. 2191</li>
                  <li><strong>Vinculación:</strong> Canal institucional interno</li>
                  <li><strong>SAF:</strong> exts. 2009 - 2010</li>
              </ul>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PagosEstudiantes;