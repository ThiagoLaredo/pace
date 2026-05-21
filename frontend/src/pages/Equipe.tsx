import './Equipe.css';

const team = [
  {
    name: 'Dra. Ana Lima',
    role: 'Psicóloga Clínica',
    crp: 'CRP 06/123456',
    specialties: ['Terapia Cognitivo-Comportamental', 'Ansiedade', 'Depressão'],
    bio: 'Especialista em TCC com mais de 10 anos de experiência em atendimento de adultos e adolescentes.',
  },
  {
    name: 'Dr. Ricardo Souza',
    role: 'Psiquiatra',
    crp: 'CRM 123456',
    specialties: ['Transtornos do Humor', 'TDAH', 'Psicose'],
    bio: 'Psiquiatra com formação em saúde mental integrativa e foco em tratamentos baseados em evidências.',
  },
  {
    name: 'Dr. Carlos Melo',
    role: 'Psicólogo Clínico',
    crp: 'CRP 06/654321',
    specialties: ['Terapia de Casal', 'Terapia Familiar', 'Trauma'],
    bio: 'Especializado em psicoterapia relacional e abordagens sistêmicas para famílias e casais.',
  },
  {
    name: 'Dra. Fernanda Costa',
    role: 'Terapeuta Ocupacional',
    crp: 'CREFITO 123456',
    specialties: ['Reabilitação Psicossocial', 'Autismo', 'Integração Sensorial'],
    bio: 'Especialista em reabilitação de pessoas com transtornos do desenvolvimento e saúde mental.',
  },
  {
    name: 'Dra. Juliana Pires',
    role: 'Neuropsicóloga',
    crp: 'CRP 06/789012',
    specialties: ['Avaliação Cognitiva', 'Reabilitação Neurológica', 'Demências'],
    bio: 'Pesquisadora e clínica com foco em avaliação e reabilitação de funções cognitivas.',
  },
];

const Equipe = () => {
  return (
    <div className="equipe">
      <section className="equipe-hero">
        <div className="container">
          <span className="page-eyebrow">Nossa equipe</span>
          <h1>Profissionais dedicados à sua saúde</h1>
          <p className="equipe-hero__desc">
            Nossa equipe multidisciplinar é formada por profissionais altamente
            qualificados, comprometidos com o cuidado humanizado e com atualização
            constante em suas áreas.
          </p>
        </div>
      </section>

      <section className="equipe-list">
        <div className="container">
          <div className="equipe-grid">
            {team.map((member) => (
              <div key={member.name} className="equipe-card">
                <div className="equipe-card__avatar" aria-hidden="true">
                  <span>{member.name.charAt(0)}</span>
                </div>
                <div className="equipe-card__info">
                  <h3 className="equipe-card__name">{member.name}</h3>
                  <p className="equipe-card__role">{member.role}</p>
                  <p className="equipe-card__register">{member.crp}</p>
                  <p className="equipe-card__bio">{member.bio}</p>
                  <div className="equipe-card__specialties">
                    {member.specialties.map((s) => (
                      <span key={s} className="equipe-card__tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipe;
