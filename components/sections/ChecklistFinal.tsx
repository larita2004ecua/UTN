import React, { useState } from 'react';
import Card from '../ui/Card';
import ChecklistItem from '../ui/ChecklistItem';

type ChecklistState = {
  [key: string]: boolean;
};

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

const ChecklistFinal: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<ChecklistState>({});

  const handleCheckboxChange = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };
  
  const allItems = {
      doc1: 'La solicitud de pago está firmada por el responsable autorizado.',
      doc2: 'Se adjuntan todos los documentos requeridos (cédula/pasaporte, certificado bancario, RUC o residencia fiscal).',
      doc3: 'La factura o comprobante tiene fecha dentro de los 3 días hábiles posteriores a su emisión.',
      doc4: 'Los archivos digitales incluyen PDF y XML (en caso de facturación electrónica).',
      sys1: 'Confirmaste la disponibilidad presupuestaria antes de enviar.',
      sys2: 'El trámite fue ingresado en el sistema correspondiente (SISFIN, INFOFLAX, FLAXINV o FLAXVINC).',
      sys3: 'El contrato, si aplica, está cargado y aprobado en el sistema.',
      val1: 'Todos los documentos cuentan con firma electrónica vigente.',
      val2: 'Las aprobaciones y validaciones de las coordinaciones están adjuntas (Docencia, Investigación, Vinculación o Dirección de Sede).',
  };

  const isChecked = (id: string) => !!checkedItems[id];

  return (
    <>
      <SectionIntro emoji="✅" title="Checklist Final de Revisión">
        Usa esta lista interactiva para verificar tu trámite antes de enviarlo a la SAF y evitar devoluciones o retrasos.
      </SectionIntro>
      <div>
        <div className="space-y-6">
            <Card title="Documentos" emoji="📄" className="bg-slate-50 border-t-4 border-blue-400">
                <ul className="space-y-3">
                    <ChecklistItem checked={isChecked('doc1')} onChange={() => handleCheckboxChange('doc1')}>{allItems.doc1}</ChecklistItem>
                    <ChecklistItem checked={isChecked('doc2')} onChange={() => handleCheckboxChange('doc2')}>{allItems.doc2}</ChecklistItem>
                    <ChecklistItem checked={isChecked('doc3')} onChange={() => handleCheckboxChange('doc3')}>{allItems.doc3}</ChecklistItem>
                    <ChecklistItem checked={isChecked('doc4')} onChange={() => handleCheckboxChange('doc4')}>{allItems.doc4}</ChecklistItem>
                </ul>
            </Card>
             <Card title="Presupuesto y Sistema" emoji="💰" className="bg-slate-50 border-t-4 border-green-400">
                <ul className="space-y-3">
                    <ChecklistItem checked={isChecked('sys1')} onChange={() => handleCheckboxChange('sys1')}>{allItems.sys1}</ChecklistItem>
                    <ChecklistItem checked={isChecked('sys2')} onChange={() => handleCheckboxChange('sys2')}>{allItems.sys2}</ChecklistItem>
                    <ChecklistItem checked={isChecked('sys3')} onChange={() => handleCheckboxChange('sys3')}>{allItems.sys3}</ChecklistItem>
                </ul>
            </Card>
            <Card title="Firmas y Validaciones" emoji="✒️" className="bg-slate-50 border-t-4 border-yellow-400">
                <ul className="space-y-3">
                    <ChecklistItem checked={isChecked('val1')} onChange={() => handleCheckboxChange('val1')}>{allItems.val1}</ChecklistItem>
                    <ChecklistItem checked={isChecked('val2')} onChange={() => handleCheckboxChange('val2')}>{allItems.val2}</ChecklistItem>
                </ul>
            </Card>
        </div>
      </div>
    </>
  );
};

export default ChecklistFinal;