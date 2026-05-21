import { useState } from 'react';
import type { FormEvent } from 'react';
import './Contato.css';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const Contato = () => {
  const [formState, setFormState] = useState<FormState>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    // Simula envio
    setTimeout(() => {
      setFormState('success');
    }, 1200);
  };

  return (
    <div className="contato">
      <section className="contato-hero">
        <div className="container">
          <span className="page-eyebrow">Fale conosco</span>
          <h1>Agende sua consulta</h1>
          <p className="contato-hero__desc">
            Entre em contato conosco e dê o primeiro passo rumo ao seu bem-estar.
            Nossa equipe responderá em breve.
          </p>
        </div>
      </section>

      <section className="contato-main">
        <div className="container">
          <div className="contato-grid">
            {/* Form */}
            <div className="contato-form-wrap">
              {formState === 'success' ? (
                <div className="contato-success">
                  <span className="contato-success__icon" aria-hidden="true">✅</span>
                  <h3>Mensagem enviada!</h3>
                  <p>Entraremos em contato em breve. Obrigado!</p>
                  <button
                    className="btn btn--outline"
                    onClick={() => setFormState('idle')}
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form className="contato-form" onSubmit={handleSubmit}>
                  <div className="contato-form__row">
                    <div className="contato-form__field">
                      <label htmlFor="nome">Nome *</label>
                      <input
                        id="nome"
                        type="text"
                        placeholder="Seu nome completo"
                        required
                        disabled={formState === 'submitting'}
                      />
                    </div>
                    <div className="contato-form__field">
                      <label htmlFor="email">E-mail *</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        disabled={formState === 'submitting'}
                      />
                    </div>
                  </div>
                  <div className="contato-form__field">
                    <label htmlFor="telefone">Telefone</label>
                    <input
                      id="telefone"
                      type="tel"
                      placeholder="(11) 90000-0000"
                      disabled={formState === 'submitting'}
                    />
                  </div>
                  <div className="contato-form__field">
                    <label htmlFor="servico">Serviço de interesse</label>
                    <select
                      id="servico"
                      disabled={formState === 'submitting'}
                    >
                      <option value="">Selecione...</option>
                      <option value="psicologia">Psicologia</option>
                      <option value="psiquiatria">Psiquiatria</option>
                      <option value="terapia-ocupacional">Terapia Ocupacional</option>
                      <option value="neuropsicologia">Neuropsicologia</option>
                    </select>
                  </div>
                  <div className="contato-form__field">
                    <label htmlFor="mensagem">Mensagem *</label>
                    <textarea
                      id="mensagem"
                      placeholder="Como podemos ajudar?"
                      rows={5}
                      required
                      disabled={formState === 'submitting'}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn--primary"
                    disabled={formState === 'submitting'}
                  >
                    {formState === 'submitting' ? 'Enviando...' : 'Enviar mensagem'}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="contato-info">
              <h2>Informações de contato</h2>

              <div className="contato-info__items">
                <div className="contato-info__item">
                  <span className="contato-info__icon" aria-hidden="true">📍</span>
                  <div>
                    <strong>Endereço</strong>
                    <p>Rua das Flores, 123 – Sala 45<br />Jardim Europa, São Paulo – SP<br />CEP 01234-567</p>
                  </div>
                </div>
                <div className="contato-info__item">
                  <span className="contato-info__icon" aria-hidden="true">📞</span>
                  <div>
                    <strong>Telefone</strong>
                    <p>(11) 3000-0000<br />(11) 99000-0000 (WhatsApp)</p>
                  </div>
                </div>
                <div className="contato-info__item">
                  <span className="contato-info__icon" aria-hidden="true">✉️</span>
                  <div>
                    <strong>E-mail</strong>
                    <p>contato@clinicapace.com.br</p>
                  </div>
                </div>
                <div className="contato-info__item">
                  <span className="contato-info__icon" aria-hidden="true">🕐</span>
                  <div>
                    <strong>Horários</strong>
                    <p>Segunda a sexta: 8h – 20h<br />Sábados: 8h – 13h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
