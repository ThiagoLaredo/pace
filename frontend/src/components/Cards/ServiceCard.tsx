import React from 'react';
import { Icon } from '../Common/Icon';
import './ServiceCard.css';

export interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  imageSrcSet?: string;
  imageSizes?: string;
  imageWidth?: number;
  imageHeight?: number;
  linkText?: string;
  linkHref?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  imageSrcSet,
  imageSizes,
  imageWidth = 512,
  imageHeight = 341,
  linkText = 'Saiba Mais',
  linkHref = '#',
}) => {
  return (
    <div className="service-card group">
      {/* Image Container */}
      <div className="relative h-[300px] rounded-t-xl overflow-hidden mb-0">
        <img
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={image}
          srcSet={imageSrcSet}
          sizes={imageSizes}
          width={imageWidth}
          height={imageHeight}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="service-card__content">
        <h3 className="service-card__title service-card__title--content">{title}</h3>

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
