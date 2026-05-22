import React from 'react';
import { Icon } from '../components/Common/Icon';
import { RevealOnScroll, SectionTitle } from '../components/Common/SectionComponents';

const toPhoneHref = (phone: string) => `tel:${phone.replace(/\D/g, '')}`;
const toWhatsAppHref = (phone: string) => `https://wa.me/55${phone.replace(/\D/g, '')}`;

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.62 2 2.23 6.39 2.23 11.8c0 1.73.45 3.42 1.31 4.91L2 22l5.44-1.43a9.74 9.74 0 0 0 4.59 1.17h.01c5.41 0 9.8-4.39 9.8-9.8a9.75 9.75 0 0 0-2.79-7.03ZM12.04 20.1h-.01a8.1 8.1 0 0 1-4.12-1.13l-.3-.18-3.23.85.86-3.15-.2-.32a8.1 8.1 0 0 1-1.24-4.35c0-4.48 3.65-8.13 8.15-8.13 2.17 0 4.2.84 5.73 2.38a8.05 8.05 0 0 1 2.37 5.74c0 4.49-3.65 8.14-8.11 8.14Zm4.46-6.09c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.17-.71-.63-1.2-1.41-1.34-1.65-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.41-.41-.56-.41h-.48c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 1.99s.86 2.31.98 2.47c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.52.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
  </svg>
 );

const units = [
  {
    name: 'Jardins',
    image: '/images/unidades/Pace-Site-2025-Unidades-Jardins.jpg',
    phones: ['(11) 99457-3619', '(11) 2729-4268'],
    email: 'jardins@clinicapace.com.br',
    address: 'R. Haddock Lobo, 1421 / Loja 08 – Mezanino',
    region: 'Jardins | Sao Paulo',
    hours: ['Segunda a Sexta – 7h as 21h', 'Sabado – 7h as 12h'],
  },
  {
    name: 'Vila Mariana',
    image: '/images/unidades/Pace-Site-2025-Unidades-Vila-Mariana.jpg',
    phones: ['(11) 99455-6493', '(11) 2373-6486'],
    email: 'vilamariana@clinicapace.com.br',
    address: 'Rua Dr. Amancio de Carvalho, 182 – Conjunto 401',
    region: 'Vila Mariana | Sao Paulo',
    hours: ['Segunda a Sexta – 7h as 21h', 'Sabado – 7h as 12h'],
  },
  {
    name: 'Butanta / USP',
    image: '/images/unidades/Pace-Site-2025-Unidades-Butanta.jpg',
    phones: ['(11) 93231-1310', '(11) 2373-6486'],
    address: 'Rua Alvarenga, 2022',
    region: 'Butanta | Sao Paulo',
    hours: ['Segunda a Sexta – 7h as 21h', 'Sabado – 7h as 12h'],
  },
  {
    name: 'Club Athletico Paulistano',
    image: '/images/unidades/Pace-Site-2025-Unidades-CAP (1).jpg',
    phones: ['(11) 99100-2699', '(11) 3065-2002'],
    email: 'paulistano@clinicapace.com.br',
    address: 'R. Honduras, 1400',
    region: 'Jardim America | Sao Paulo - SP',
    hours: ['Segunda a Sexta – 7h as 21h', 'Sabado – 8h as 13h'],
  },
];

export const UnitsSection: React.FC = () => {
  return (
    <section className="py-section-padding units-section">
      <div className="max-w-container-max mx-auto px-gutter">
        <RevealOnScroll>
          <SectionTitle
            label="Nossas Unidades"
            title="Escolha a Pace mais perto de voce"
            centered
          />
        </RevealOnScroll>

        <div className="units-grid">
          {units.map((unit, index) => (
            <RevealOnScroll key={unit.name} delay={`${0.08 * index}s`}>
              <article className="unit-card glass-dark">
                <div className="unit-card__media">
                  <img
                    src={unit.image}
                    alt={unit.name}
                    className="unit-card__image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, 220px"
                  />
                </div>

                <div className="unit-card__body">
                  <div className="unit-card__header">
                    <h3 className="unit-card__title">{unit.name}</h3>
                    <p className="unit-card__region">{unit.region}</p>
                  </div>

                  <div className="unit-card__section">
                    <div className="unit-card__line">
                      <Icon name="location_on" className="unit-card__icon" />
                      <span className="unit-card__address">{unit.address}</span>
                    </div>
                    <div className="unit-card__line unit-card__line--top">
                      <Icon name="schedule" className="unit-card__icon" />
                      <div>
                        {unit.hours.map((item) => (
                          <div key={item}>{item}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="unit-card__section">
                    <div className="unit-card__contacts">
                      <div className="unit-card__phones">
                        {unit.phones.map((phone, phoneIndex) => (
                          <a
                            key={phone}
                            href={phoneIndex === 0 ? toWhatsAppHref(phone) : toPhoneHref(phone)}
                            className="unit-card__chip"
                            aria-label={
                              phoneIndex === 0
                                ? `Falar com a unidade ${unit.name} no WhatsApp`
                                : `Ligar para a unidade ${unit.name}`
                            }
                            target={phoneIndex === 0 ? '_blank' : undefined}
                            rel={phoneIndex === 0 ? 'noreferrer' : undefined}
                          >
                            {phoneIndex === 0 ? (
                              <WhatsAppIcon className="unit-card__chip-icon" />
                            ) : (
                              <Icon name="call" className="unit-card__chip-icon" />
                            )}
                            <span>{phone}</span>
                          </a>
                        ))}
                      </div>
                      {unit.email ? (
                        <a href={`mailto:${unit.email}`} className="unit-card__chip unit-card__chip--email">
                          <Icon name="mail" className="unit-card__chip-icon" />
                          <span>{unit.email}</span>
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <a href="#" className="unit-card__cta">
                    Conheça mais
                    <Icon name="arrow_forward" className="unit-card__chip-icon" />
                  </a>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};