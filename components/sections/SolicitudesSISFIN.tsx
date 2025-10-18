
import React from 'react';
import Card from '../ui/Card';
import Accordion from '../ui/Accordion';
import Alert from '../ui/Alert';
import { BookOpenIcon } from '../Icons';

const SolicitudesSISFIN: React.FC = () => {
  return (
    <div>
      <p className="mb-6 text-slate-600">
        Esta sección detalla los procedimientos para pagos gestionados a través del sistema SISFIN, principalmente relacionados con servicios de docencia.
      </p>

      <Card title="Servicios de Docencia" icon={BookOpenIcon}>
        <p className="mb-4">
          Incluye pagos por co-asesorías, dirección y lectura de tesis, lectura de examen doctoral, ayudantes de cátedra, tutores para estudiantes de maestría y dictado de cursos. Todos estos procesos, con o sin contrato, se gestionan en el sistema SISFIN.
        </p>

        <Accordion title="Solicitud de pago" startOpen={true}>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Cursos de programas docentes o formación continua:</strong> Validar que las fechas de inicio y fin coincidan con lo indicado en el contrato o formulario del curso. La fecha de vencimiento del pago debe estar alineada con la fecha de fin de curso.
            </li>
            <li>
              <strong>Co-asesorías, dirección y lectura de tesis, etc.:</strong> Antes de enviar la solicitud, verificar que conste el nombre del estudiante, título de tesis y convocatoria. Validar que la información sea consistente entre el sistema, el formulario de pago y la factura.
            </li>
            <li>
              La solicitud de pago debe entregarse a la SAF una vez que el profesor haya entregado el servicio.
            </li>
          </ul>
        </Accordion>

        <Accordion title="Contrato firmado (aplica para cursos de malla curricular)">
          <p>Verificar que el docente cuente con el contrato firmado por ambas partes. Asegurarse de que el contrato especifique si el profesor es residente o no en Ecuador, ya que esto influye en el monto de sus honorarios.</p>
        </Accordion>

        <Accordion title="Residencia fiscal del profesor">
          <p>Si la persona no es residente en Ecuador y desea aplicar convenio de doble tributación, debe validarla con Contabilidad (exts. 2165/2180/2183).</p>
        </Accordion>

        <Accordion title="Facturación">
          <ul className="list-disc pl-5 space-y-2">
            <li>La descripción principal de la factura debe indicar que es una actividad de <strong>honorarios por docencia</strong>. No se aceptarán facturas que mencionen únicamente honorarios profesionales.</li>
            <li>El RUC del profesor debe tener registrada la actividad de docencia de cuarto nivel.</li>
          </ul>
        </Accordion>

        <Accordion title="Casos que NO aplican contrato">
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Co-asesorías, dirección y lectura de tesis/examen doctoral:</strong> No aplica contrato. Verificar que se cumpla con lo mencionado en generalidades.</li>
                <li><strong>Ayudantes de cátedra, tutorías y cursos por doctorantes:</strong> No aplica contrato. Se exige la aprobación de la Coordinación Docente que llega desde el correo electrónico de planificación.</li>
            </ul>
        </Accordion>

        <Accordion title="Cursos de formación continua">
            <p>Además de los documentos de generalidades, debe existir la aprobación de la ficha de realización del curso, emitida por la Coordinación de Vinculación o Docente. Confirmar la disponibilidad de fondos con la Unidad de Presupuesto antes de solicitar el pago.</p>
        </Accordion>
      </Card>
    </div>
  );
};

export default SolicitudesSISFIN;
