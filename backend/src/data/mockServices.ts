import { Service } from '../types/service';

export const mockServices: Service[] = [
  {
    id: 'psicologia',
    title: 'Psicologia',
    description: 'Atendimento psicológico individual, de casal e familiar com abordagem humanista e integrativa.',
    icon: '🧠',
    professionals: ['Dra. Ana Lima', 'Dr. Carlos Melo'],
  },
  {
    id: 'psiquiatria',
    title: 'Psiquiatria',
    description: 'Diagnóstico e tratamento de transtornos mentais com acompanhamento médico especializado.',
    icon: '💊',
    professionals: ['Dr. Ricardo Souza'],
  },
  {
    id: 'terapia-ocupacional',
    title: 'Terapia Ocupacional',
    description: 'Intervenções terapêuticas focadas na promoção da autonomia e qualidade de vida.',
    icon: '🤝',
    professionals: ['Dra. Fernanda Costa'],
  },
  {
    id: 'neuropsicologia',
    title: 'Neuropsicologia',
    description: 'Avaliação e reabilitação neuropsicológica para crianças, adultos e idosos.',
    icon: '🔬',
    professionals: ['Dra. Juliana Pires'],
  },
];
