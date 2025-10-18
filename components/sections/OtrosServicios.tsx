
import React from 'react';
import Card from '../ui/Card';
import Accordion from '../ui/Accordion';

const OtrosServicios: React.FC = () => {
  return (
    <div>
      <p className="mb-6 text-slate-600">
        Esta sección cubre pagos por servicios de corrección, ayudas para congresos y adquisición de bienes/servicios mediante Actas de liquidación.
      </p>

      <Card title="7. Servicios por corrección, estilo, edición, etc.">
        <p>Servicios por corrección de bibliografías, estilo, edición de libros, traducciones, transcripciones, lectura de artes finales.</p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Solicitud de pago:</strong> Se gestiona en SISFIN.</li>
          <li>Además de los campos solicitados en las generalidades, requieren un documento que valide que el servicio fue recibido.</li>
        </ul>
      </Card>

      <Card title="8. Ayudas para participación en congresos">
        <p className="mb-2">Este apoyo se da con la figura de ayudas de viaje para cubrir gastos como compra de pasajes, obtención de pasaporte o visa, y gastos de viaje no cubiertos por viáticos o subsistencias.</p>
        <Accordion title="Solicitud de pago">
            <p>Se presenta mediante un memorando escrito por parte del responsable del programa académico/administrativo.</p>
        </Accordion>
        <Accordion title="Respaldos del pedido">
            <p>Aprobación de la participación del beneficiario en el congreso conforme las bases de adjudicación de la ayuda.</p>
        </Accordion>
      </Card>

      <Card title="9. Pagos adquisición de bienes y/o servicios mediante Actas de liquidación y pago">
        <Accordion title="Solicitud de pago">
          <p>Se presenta mediante un memorando escrito por parte del responsable del programa académico/administrativo.</p>
        </Accordion>
        <Accordion title="Respaldos mínimos requeridos (Originales)">
            <ul className="list-disc pl-5 space-y-2">
                <li>Pedido de elaboración del acta (aprobada por la Dirección de la Sede).</li>
                <li>Informe de actividades recibidas a satisfacción.</li>
                <li>Compromiso presupuestario (solicitado a la unidad de presupuesto).</li>
                <li>Acta de liquidación y pago (coordinada con la Procuraduría de FLACSO).</li>
            </ul>
        </Accordion>
      </Card>
    </div>
  );
};

export default OtrosServicios;
