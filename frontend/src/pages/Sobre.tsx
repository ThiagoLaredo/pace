import './Sobre.css';

const Sobre = () => {
  return (
    <div className="sobre">
      <section className="sobre-hero">
        <div className="container">
          <span className="page-eyebrow">Sobre nós</span>
          <h1>Uma clínica criada para cuidar de quem cuida</h1>
          <p className="sobre-hero__desc">
            A Clínica Pace nasceu do desejo de oferecer um espaço de escuta qualificada,
            acolhimento genuíno e tratamentos baseados em evidências para quem busca
            saúde mental e qualidade de vida.
          </p>
        </div>
      </section>

      <section className="sobre-mission">
        <div className="container">
          <div className="sobre-mission__grid">
            <div className="sobre-mission__card">
              <span className="sobre-mission__icon" aria-hidden="true">🎯</span>
              <h3>Missão</h3>
              <p>
                Promover saúde mental por meio de atendimento humanizado,
                ético e baseado nas melhores evidências científicas.
              </p>
            </div>
            <div className="sobre-mission__card">
              <span className="sobre-mission__icon" aria-hidden="true">👁️</span>
              <h3>Visão</h3>
              <p>
                Ser referência em saúde mental integrativa, reconhecida pela
                excelência clínica e pelo impacto positivo na vida dos pacientes.
              </p>
            </div>
            <div className="sobre-mission__card">
              <span className="sobre-mission__icon" aria-hidden="true">💡</span>
              <h3>Valores</h3>
              <p>
                Acolhimento, ética, comprometimento, respeito à diversidade e
                busca contínua pelo aprimoramento profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sobre-story">
        <div className="container">
          <div className="sobre-story__inner">
            <div className="sobre-story__text">
              <h2>Nossa história</h2>
              <p>
                Fundada em 2014, a Clínica Pace surgiu a partir da parceria de
                profissionais comprometidos com uma abordagem integrada da saúde mental.
                Desde o início, o objetivo foi criar um ambiente onde cada paciente
                se sentisse ouvido, respeitado e amparado.
              </p>
              <p>
                Ao longo dos anos, expandimos nossa equipe e serviços, mantendo sempre
                o cuidado individualizado como nossa maior prioridade. Hoje, atendemos
                crianças, adolescentes, adultos e idosos, de forma presencial e online.
              </p>
            </div>
            <div className="sobre-story__aside">
              <div className="sobre-story__highlight">
                <span className="sobre-story__year">2014</span>
                <p>Ano de fundação da Clínica Pace</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
