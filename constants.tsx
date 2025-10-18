import React from 'react';
import type { Sections } from './types';
import { HomeIcon, MapIcon, BookOpenIcon, GlobeAltIcon, BriefcaseIcon, AcademicCapIcon, UserGroupIcon, CubeIcon, ReceiptRefundIcon, DocumentTextIcon, BuildingLibraryIcon, PencilSquareIcon, TicketIcon, DocumentCheckIcon, ClipboardDocumentCheckIcon, PhoneIcon, DocumentMagnifyingGlassIcon } from './components/Icons';

import Introduccion from './components/sections/Introduccion';
import MapaGeneral from './components/sections/MapaGeneral';
import PagoDocencia from './components/sections/PagoDocencia';
import ViaticosYPasajes from './components/sections/ViaticosYPasajes';
import HonorariosProfesionales from './components/sections/HonorariosProfesionales';
import EvaluacionesExternas from './components/sections/EvaluacionesExternas';
import PagosEstudiantes from './components/sections/PagosEstudiantes';
import FondosRotativos from './components/sections/FondosRotativos';
import CorreccionEdicionTraduccion from './components/sections/CorreccionEdicionTraduccion';
import AyudasCongresos from './components/sections/AyudasCongresos';
import ActasLiquidacion from './components/sections/ActasLiquidacion';
import Reembolsos from './components/sections/Reembolsos';
import ChecklistFinal from './components/sections/ChecklistFinal';
import Contactos from './components/sections/Contactos';

export const SECTION_KEYS = [
    'introduccion',
    'mapaGeneral',
    'pagoDocencia',
    'viaticosPasajes',
    'honorariosProfesionales',
    'evaluacionesExternas',
    'pagosEstudiantes',
    'fondosRotativos',
    'correccionEdicionTraduccion',
    'ayudasCongresos',
    'actasLiquidacion',
    'reembolsos',
    'checklistFinal',
    'contactosApoyo'
] as const;

export type SectionKey = typeof SECTION_KEYS[number];

// FIX: Used React.ReactElement instead of JSX.Element to avoid issues with the JSX namespace not being found.
export const SECTIONS: Record<SectionKey, { id: SectionKey; title: string; emoji: string; icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement; component: React.FC; }> = {
    introduccion: {
        id: 'introduccion',
        title: '1. Introducción',
        emoji: '🏛️',
        icon: HomeIcon,
        component: Introduccion,
    },
    mapaGeneral: {
        id: 'mapaGeneral',
        title: '2. Mapa General del Proceso',
        emoji: '🗺️',
        icon: MapIcon,
        component: MapaGeneral,
    },
    pagoDocencia: {
        id: 'pagoDocencia',
        title: '3. Pago por Docencia',
        emoji: '🧑‍🏫',
        icon: AcademicCapIcon,
        component: PagoDocencia,
    },
    viaticosPasajes: {
        id: 'viaticosPasajes',
        title: '4. Viáticos y Pasajes',
        emoji: '✈️',
        icon: GlobeAltIcon,
        component: ViaticosYPasajes,
    },
    honorariosProfesionales: {
        id: 'honorariosProfesionales',
        title: '5. Honorarios Profesionales',
        emoji: '💼',
        icon: BriefcaseIcon,
        component: HonorariosProfesionales,
    },
    evaluacionesExternas: {
        id: 'evaluacionesExternas',
        title: '6. Evaluaciones Externas',
        emoji: '📝',
        icon: DocumentMagnifyingGlassIcon,
        component: EvaluacionesExternas,
    },
    pagosEstudiantes: {
        id: 'pagosEstudiantes',
        title: '7. Pagos a Estudiantes',
        emoji: '🎓',
        icon: UserGroupIcon,
        component: PagosEstudiantes,
    },
    fondosRotativos: {
        id: 'fondosRotativos',
        title: '8. Fondos Rotativos',
        emoji: '🔄',
        icon: CubeIcon,
        component: FondosRotativos,
    },
    correccionEdicionTraduccion: {
        id: 'correccionEdicionTraduccion',
        title: '9. Corrección y Edición',
        emoji: '✍️',
        icon: PencilSquareIcon,
        component: CorreccionEdicionTraduccion,
    },
    ayudasCongresos: {
        id: 'ayudasCongresos',
        title: '10. Ayudas para Congresos',
        emoji: '🎟️',
        icon: TicketIcon,
        component: AyudasCongresos,
    },
    actasLiquidacion: {
        id: 'actasLiquidacion',
        title: '11. Actas de Liquidación',
        emoji: '📋',
        icon: DocumentCheckIcon,
        component: ActasLiquidacion,
    },
    reembolsos: {
        id: 'reembolsos',
        title: '12. Reembolsos',
        emoji: '🧾',
        icon: ReceiptRefundIcon,
        component: Reembolsos,
    },
    checklistFinal: {
        id: 'checklistFinal',
        title: '13. Checklist Final',
        emoji: '✅',
        icon: ClipboardDocumentCheckIcon,
        component: ChecklistFinal,
    },
    contactosApoyo: {
        id: 'contactosApoyo',
        title: '14. Contactos de Apoyo',
        emoji: '💬',
        icon: PhoneIcon,
        component: Contactos,
    }
};