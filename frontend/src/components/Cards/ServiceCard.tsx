import React from 'react';
import { Icon } from '../Common/Icon';
import './ServiceCard.css';

export interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  linkText?: string;
  linkHref?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  linkText = 'Saiba Mais',
  linkHref = '#',
}) => {
  return (
    <div className="service-card group">
      {/* Image Container */}
      <div className="relative h-[300px] rounded-xl overflow-hidden mb-0">
        <img
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        
        {/* Title overlay */}
        <div className="absolute bottom-4 left-6">
          <h4 className="service-card__title">{title}</h4>
        </div>
      </div>

      <div className="service-card__content">
        {/* Description */}
        <p className="service-card__description">{description}</p>

        {/* Link */}
        <a
          href={linkHref}
          className="service-card__cta"
        >
          {linkText}
          <Icon name="arrow_forward" className="service-card__cta-icon" />
        </a>
      </div>
    </div>
  );
};
