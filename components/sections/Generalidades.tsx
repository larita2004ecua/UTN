
import React from 'react';
import Card from '../ui/Card';
import Accordion from '../ui/Accordion';
import ChecklistItem from '../ui/ChecklistItem';
import Alert from '../ui/Alert';
import { DocumentTextIcon, UserGroupIcon, CurrencyDollarIcon } from '../Icons';

const Generalidades: React.FC = () => {
  return (
    <div>
      <p className="mb-6 text-slate-600">
        Esta guía elaborada por la Subdirección Administrativa Financiera (SAF) orienta a las distintas unidades en la elaboración, presentación y justificación de trámites de pago. Es indispensable verificar que el expediente y sus anexos estén completos y cumplan con los lineamientos establecidos antes de remitir cualquier trámite a la SAF.
      </p>

      <Card title="Proceso General de Pago" icon={DocumentTextIcon}>
        <ul className="list-disc pl-5 space-y-2">
          <li>Todo proceso debe estar acompañado de una solicitud de pago suscrita por el responsable, conforme a la resolución de autorizadores de gasto.</li>
          <li>Los responsables incluyen: Coordinador de departamento, coordinador de doctorado, responsable de programas docentes, coordinadores/responsables de proyectos, jefes/responsables de unidades y administradores de contrato.</li>
        </ul>
        <Alert type="warning">
          <strong>Trámites devueltos con observaciones:</strong> Se aceptará su subsanación únicamente si la factura sigue vigente, es decir, dentro de los tres (3) días posteriores a su emisión.
        </Alert>
      </Card>

      <Card title="Documentos Básicos Requeridos" icon={UserGroupIcon}>
        <Accordion title="Personas con residencia en Ecuador">
          <ul className="list-disc pl-5 space-y-2">
            <li>Cédula</li>
            <li>Certificado bancario</li>
            <li>Certificado de RUC actualizado</li>
          </ul>
           <Alert type="info">
            Estos documentos son solicitados al momento de registrar al beneficiario por primera vez en el sistema INFOFLAX.
          </Alert>
        </Accordion>
        <Accordion title="Personas con residencia en el exterior">
           <ul className="list-disc pl-5 space-y-2">
            <li>Escaneado en tamaño original del pasaporte o DNI vigente y legible.</li>
            <li>Documento de residencia fiscal (si aplica).</li>
            <li>Vigencia máximo de seis meses y dentro del mismo año de gestión de pago.</li>
          </ul>
        </Accordion>
      </Card>

      <Card title="Facturación" icon={CurrencyDollarIcon}>
        <p className="mb-4">
            El plazo para la presentación de facturas no podrá exceder de <strong>tres (3) días hábiles</strong> contados desde su fecha de emisión. Este límite garantiza el tiempo necesario para los procesos internos de revisión, registro contable y emisión de los comprobantes de retención.
        </p>
        <Accordion title="Datos para Facturas a nombre de FLACSO" startOpen={true}>
            <p className="mb-3">Para personas naturales y jurídicas nacionales, la factura o nota de venta deberá venir a nombre de FLACSO con los siguientes datos:</p>
            <ul className="space-y-2">
                <ChecklistItem><strong>BENEFICIARIO:</strong> FLACSO Sede – Ecuador o Facultad Latinoamericana de Ciencias Sociales</ChecklistItem>
                <ChecklistItem><strong>RUC:</strong> 1791036514001</ChecklistItem>
                <ChecklistItem><strong>Dirección:</strong> Calle la Pradera E7-174 y Av. Diego de Almagro</ChecklistItem>
                <ChecklistItem><strong>Teléfono:</strong> 2946800</ChecklistItem>
            </ul>
        </Accordion>
         <Alert type="info">
            La fecha para contabilizar los 3 días es la fecha de emisión. Sin embargo, todas las facturas electrónicas deben contar con hora y fecha de autorización por parte del SRI.
        </Alert>
        <Accordion title="Facturas Electrónicas">
            <p>Es necesario enviar los archivos en formato <strong>PDF y XML</strong>.</p>
        </Accordion>
        <Accordion title="Verificación de Actividad Económica (RUC)">
            <p>Verificar que el RUC cuente con la actividad económica por la cual se está emitiendo la factura. En caso de dudas, consultar con la Unidad de contabilidad a las exts. 2165 (Juan Carlos Lambogglia), 2180 (Judith Flores) o 2183 (Daniel Mora).</p>
        </Accordion>
        <Accordion title="Reembolsos y Fondos">
             <ul className="list-disc pl-5 space-y-2">
                <li>Para reembolsos, fondos rotativos y cajas chicas, las facturas deben estar a nombre del beneficiario o custodio del fondo, con sus datos personales y número de cédula.</li>
                <li><strong className="text-red-600">NO se aceptará con RUC</strong> para quienes consten en relación de dependencia.</li>
                <li>Para reembolsos con compras al exterior, el invoice/factura debe estar a nombre de FLACSO.</li>
            </ul>
        </Accordion>
        <Accordion title="Personas Extranjeras no Residentes">
            <p>El documento habilitante para el pago será su pasaporte o DNI vigente y legible.</p>
        </Accordion>
      </Card>
    </div>
  );
};

export default Generalidades;
