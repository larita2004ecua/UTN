import React from 'react';
import Card from '../ui/Card';
import Alert from '../ui/Alert';

interface StepProps {
    emoji: string;
    title: string;
    children: React.ReactNode;
}

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

const Step: React.FC<StepProps> = ({ emoji, title, children }) => (
    <div className="relative pl-16 sm:pl-20">
        <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white border-2 sm:border-4 border-flacso-blue-light rounded-full text-2xl sm:text-3xl shadow-lg z-10">
            {emoji}
        </div>
        <div className="border-l-2 border-dashed border-slate-300 pl-6 sm:pl-8 py-2">
            <h3 className="text-lg sm:text-xl font-bold text-flacso-blue mb-2">{title}</h3>
            <div className="text-slate-600 space-y-3">{children}</div>
        </div>
    </div>
);

const MapaGeneral: React.FC = () => {
    return (
        <div>
            <SectionIntro emoji="🗺️" title="Mapa General del Proceso">
                Cada trámite sigue un flujo claro. Sigue estos 4 pasos para garantizar que tu pago sea procesado sin contratiempos.
            </SectionIntro>
            <Card title="El Flujo de Pago en 4 Pasos" emoji="🗺️">
                <div className="space-y-4 pt-4">
                    <Step emoji="✍️" title="1. Solicitar el Pago">
                        <p>Presenta tu <strong>solicitud de pago firmada</strong> por el responsable autorizado (Coordinador, jefe de unidad, etc.).</p>
                        <Alert type="tip" title="Tip">
                            Usa los formularios institucionales y verifica que estén completos antes de enviarlos.
                        </Alert>
                    </Step>

                    <Step emoji="🔍" title="2. Verificar Documentos">
                        <p>Asegúrate de incluir todos los documentos obligatorios: Cédula/pasaporte, certificado bancario, RUC actualizado.</p>
                        <Alert type="warning" title="Recuerda">
                           Las facturas deben presentarse dentro de los <strong>3 días hábiles</strong> posteriores a su emisión.
                        </Alert>
                    </Step>

                    <Step emoji="💰" title="3. Confirmar Disponibilidad">
                        <p>Antes de enviar, confirma con la Unidad de Presupuesto que haya fondos disponibles (Exts. 2190, 2182 o 2166).</p>
                         <Alert type="danger" title="¡Evita Demoras!">
                           Sin disponibilidad presupuestaria, el proceso de pago no puede iniciar.
                         </Alert>
                    </Step>

                    <Step emoji="📤" title="4. Enviar a la SAF">
                         <p>Entrega tu <strong>expediente completo</strong> a la Subdirección Administrativa Financiera con firma electrónica válida.</p>
                         <Alert type="danger" title="¡Cuidado!">
                            Si el trámite tiene observaciones, solo podrás subsanarlo si la factura sigue vigente (plazo de 3 días).
                         </Alert>
                    </Step>
                </div>
            </Card>
        </div>
    );
};

export default MapaGeneral;