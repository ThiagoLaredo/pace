import { Link } from 'react-router-dom';
import './Servicos.css';

const services = [
  {
    id: 'psicologia',
    icon: '🧠',
    title: 'Psicologia',
    description:
      'Atendimento psicológico individual, de casal e familiar. Utilizamos abordagens humanistas, cognitivo-comportamentais e integrativas para promover autoconhecimento e bem-estar.',
    highlights: ['Terapia individual', 'Terapia de casal', 'Terapia familiar', 'Atendimento online'],
  },
  {
    id: 'psiquiatria',
    icon: '💊',
    title: 'Psiquiatria',
    description:
      'Diagnóstico e tratamento médico de transtornos mentais como depressão, ansiedade, TOC, TDAH e outros. Acompanhamento farmacológico com foco na qualidade de vida.',
    highlights: ['Avaliação diagnóstica', 'Acompanhamento medicamentoso', 'Laudos e relatórios'],
  },
  {
    id: 'terapia-ocupacional',
    icon: '🤝',
    title: 'Terapia Ocupacional',
    description:
      'Intervenções terapêuticas focadas na promoção da autonomia, independência e participação social através de atividades significativas.',
    highlights: ['Reabilitação psicossocial', 'Integração sensorial', 'Funcionalidade no cotidiano'],
  },
  {
    id: 'neuropsicologia',
    icon: '🔬',
    title: 'Neuropsicologia',
    description:
      'Avaliação e reabilitação das funções cognitivas como memória, atenção e linguagem. Atendemos crianças, adultos e idosos.',
    highlights: ['Avaliação neuropsicológica', 'Reabilitação cognitiva', 'Laudos periciais'],
  },
];

const Servicos = () => {
  return (
    <div className="servicos">
      <section className="servicos-hero">
        <div className="container">
          <span className="page-eyebrow">Nossos serviços</span>
          <h1>Cuidado especializado para cada necessidade</h1>
          <p className="servicos-hero__desc">
            Oferecemos uma gama completa de serviços em saúde mental,
            com profissionais qualificados e abordagens baseadas em evidências.
          </p>
        </div>
      </section>

      <section className="servicos-list">
        <div className="container">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`servicos-item${idx % 2 === 1 ? ' servicos-item--reverse' : ''}`}
            >
              <div className="servicos-item__icon-wrap" aria-hidden="true">
                <span className="servicos-item__icon">{service.icon}</span>
              </div>
              <div className="servicos-item__content">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul className="servicos-item__highlights">
                  {service.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <Link to="/contato" className="btn btn--primary">Agendar {service.title}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Servicos;
