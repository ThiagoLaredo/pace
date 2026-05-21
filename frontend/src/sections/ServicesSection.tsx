
import React from 'react';
import { ServiceCard } from '../components/Cards/ServiceCard';
import { RevealOnScroll } from '../components/Common/SectionComponents';
const services = [
  {
    title: 'Fisioterapia',
    description:
      'Reabilitação física para recuperação e retorno ao esporte e preparação física com treino funcional individualizado.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4zP712PadSaj2nRB_72MWFRgDzpKf28qghiE4ZX7Y8z0PY7dtPBRjgGvncPbmlt6m_svQxQX7tWFv155sY9vUx7vDcOJFbsJNf0lcI33sJeDUbfb77uvGygEh6JC9Qmtn1S12z2Ofm67QcDQOZdK3Xa3BJxlNnmNfMLZwK8NxZaiYKT3Y4bVu7k5hMjY1akxGcH66gQPqW0XFk20VCPzJQGLzla5Xh0plX9vXRCGHTxm25n6XW5QIUVZ2wfctSJKHlutp7nSMB6I',
  },
  {
    title: 'Pace Sports',
    description:
      'Um programa de avaliação e treinamento individualizado que tem como objetivo detectar e corrigir eventuais déficits de mobilidade e força.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDaztQJTeQtZ6JLwYwRj0kj1B_SJhv-o8io0lQMsX7nzk_nmzWMEgh8GvAn00tclZ0ZW7-8906vep-XWZ944hYW_EM3WY2iaNA9xxfJVt3MnIC-0BTFsAjYgjehNSfuLtZ3OOeQq-ML8It8oQrigXLToxg43DcXgHhwTXqX7x_dr13S6dwI9mvVa9DQXLswjrWGjgOR5tcSYp0YFWglK5rP_U8qIXZbgocqnm8ggPLauqOHNvTewKzsklLt5c91kzxSv30XdqKQDwk',
  },
  {
    title: 'Prevenção',
    description:
      'Um programa de prevenção e cuidado indicado para todas as idades, focado na manutenção da saúde articular e muscular.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuACzv-8QiS0EGp8CydOpWxONfPTy67d1cXZneFDZCMrdiRXu3m3FJXHcM4oPa-gg3svI8OEb4mfcx_9qu2xsk8iwYiMEgTP5-CJUWFMdQAQRPw28tgFfQk61j_qX1bzzHZItDJral0A54-zbgeM9vvvRnAHW7ArjOUQJjGaL0yAGRftGiaeGgK_I_F7kgdWSOjTLBRwHGm5yWZ3TsvUatzC4D8P32u4p84IXeFCXIteADD-dPFimyilXa-M8jfALLWh1TJOMc5e0lw',
  },
  {
    title: 'Recovery',
    description:
      'A recuperação após o exercício é essencial para a reparação muscular e tecidual, além da construção de força de elite.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBt5-CthE-c_RzPfec7pbDChU4URB2k3nQBgV-MOWxhaqh7mx0q9yBbq4cZ0_lMxYXTghZdzzQVGEKKt_R4aX0XwriBPMSZwcaHmQjb9GxztazhGB1skVu9dE-yOY4VypPiPoZwWqR-DbZqMsahKK-3dsBJIPADpGlm5jkT75wJ5ZlRXM0N4DHoKn-tJ_5u_FmhPwRAmJU9XRCJNl12XINTG0RLgJoW8Zp30_6qVbJdJ-cTuJYiw8Akv4CecD13E8bGHwJkJXZ9Qps',
  },
  {
    title: 'Fisioterapia Domiciliar',
    description:
      'Transforme sua qualidade de vida com sessões de fisioterapia domiciliar com nossa equipe especializada no conforto do seu lar.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDo_ednhimcDm3hPamz55vThG7QFs7nguFoj0SpcT99z_ylUjgs4RpK7Ea6ShkcF9yiV7CuK5gTsOFe61CqkSEzwsCSNc_bssKphl1_XjJWOrbL-5Hr-mWzJhdyxf3EwjKq4RVhM3Cv4YI1BLKRVw3jSsDaUMKhCR_Wn87sEAwm-76jwbD9ghStDlbRje_ApH9LWFCI9tvmNE2nEbS9yHo4aRG3RwXCrP-_i407bIy8SZdX2ho8spELDe8QC0fL1D2-_euiviXyNEc',
  },
  {
    title: 'Aluguel de Equipamentos',
    description:
      'Recupere-se no conforto da sua casa com o aluguel de equipamentos para fisioterapia CPM e Crioterapia portáteis.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC4RJT_ekZF9WtoSIKnye6grmhnNJxjnBHsel8uoDtMKHJCtF61N92C4JQjLK_neC2wSaldfD3kvSIXKwuaUOLvs9CelTgsjyHn7RNXAxX0hnMPk08GWTMaN55qUaoMgPRYHikjiP00FZ6Q5LTmTuMUF0v-hi6NUpd7dHxTNxAh5S3T5zs8NKOIrCFwIxXHWvRJnm39SuOE9ccgRXz7fhv9jEqKnDoeZ0onXndMqRpfL9njoK-0u1Nqe30pC2ZdCwIpX6tj0gzS2mo',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-section-padding relative" id="servicos">
      <div className="max-w-container-max mx-auto px-gutter">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
            <span className="text-primary font-label-bold uppercase tracking-widest">
                Tratamentos especializados
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase">Nossos Serviços</h2>
            </div>
          </div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={index} delay={`${0.08 * index}s`}>
              <ServiceCard {...service} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
