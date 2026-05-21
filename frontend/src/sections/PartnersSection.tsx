import React from 'react';
import { RevealOnScroll } from '../components/Common/SectionComponents';

const partners = [
  {
    name: 'Balance',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBZfH-TSOfMioAZRHp1BFheFgLB93buCNjMsj97-MD2qDOMD5_zdMO9j1ge7fv9fd1tqaCUsPysQk2pHaqpDWJIiRZFK_mn3Qt4ZkS_NeKlh8OopetJTVSUh6TTJQ7u_xISDw5dMKbXV7tC3e1gBQySZ3xHoo1JI2kPXZmbV1jy5BgdPd9NHgxej78wpkLmOtFf9S2w4FbdGuBOYQOMMn7YDan98u0DYK6XQP8fqu0oFAeSAoyiO9Ea2s71wGS0_VjKlPzkiClsXeg',
  },
  {
    name: 'Boali',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBPslaSn0KgNu6S6dozFjiG7jomcXtX4ivXZABtNGMn6y71N1l9qCHI7lFVYdp3_8C642oaDvZaj5eimVJ7jBKYDk9NO0ln2-0-ij0cssRRFmLmwhQZztSY0BJOXT4Xxu_Ng07GFaqnf5CtCcCM3Mkrc7P3gsRCPNpKNVAegGdDvbjy4rIbqc-RmkvqgmcfAZYsejS97wcOOYUOSF2Xt5vjObIp36snAqTlMqMYMKmXmssIFdYfRpzgmaqGf4caC-xs7vjiMKQx2q0',
  },
  {
    name: 'Bauerfeind',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnMBYPBpR6ndoIy_MXRkyWOOdIZs-fEL8b9YPGkVF-aepfo-iqSfTSLaAnaPOFdK79OZ17-sGR4KtPtCFvrFhfWyG9ZOZ89abGgwFCPSG-YCYRGD5Se6EQzZigzX7iSti5t34d-rJRAUXwImcOx-tOa67uT6mbvd7ZQSTP6oq4zCuaBhJw19aAn5V-vRzO1zU6jyDi1N9FKR2pamu3uXY5gXFsQTNIyvrA_pEdJAdnctO4C4_0YmXJ_9zqNAU0Zpahy8JJZFx2ECA',
  },
  {
    name: 'DJO',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbjWtAA220zH__En_RMsQ5-lJ2-_IwQvvcaTSC5pC6VXQMg8h5chuHzvDdiDxQz0zuWTguEaRys7mF0-LZMphjlLxu6egu4CA2OLV6W2LwtgRHdxjUpkt0aNeIMIAyWHFcFhiUUYl_RDImIcwyReVm4gR9JwFhRv2vdVTAUxTps4GvfhbdJ_axZb6CoTKWjGLB4qjswfDs0aGqgZZNWCMOehWAXNZollnbLRvzaCtXoZlrFY3VbA1-tCPRdtSans-KMGEAANOAI4Y',
  },
];

interface PartnersSectionProps {
  compact?: boolean;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ compact = false }) => {
  return (
    <section
      className={`partners-section py-16 bg-surface-container-lowest overflow-hidden border-t border-outline-variant/10 ${compact ? 'partners-section--compact' : ''}`}
    >
      <div className="max-w-container-max mx-auto px-gutter">
        <RevealOnScroll>
          <h3 className={`text-center font-label-bold text-label-bold uppercase tracking-widest text-on-surface-variant mb-12 ${compact ? 'partners-section__title--compact' : ''}`}>
            Nossos Parceiros
          </h3>
        </RevealOnScroll>
        <div className={`flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 ${compact ? 'partners-section__logos--compact' : ''}`}>
          {partners.map((partner, index) => (
            <RevealOnScroll key={index} delay={`${0.08 * index}s`}>
              <img
                alt={partner.name}
                className={`h-10 md:h-12 w-auto object-contain ${compact ? 'partners-section__logo--compact' : ''}`}
                src={partner.image}
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
