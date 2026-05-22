import React from 'react';

interface IconProps {
  name: string;
  className?: string;
}

interface ArrowIconProps {
  className?: string;
}

const iconPaths: Record<string, React.ReactNode> = {
  arrow_forward: <path d="M12.3 5.3a1 1 0 0 0 0 1.4L16.6 11H4a1 1 0 1 0 0 2h12.6l-4.3 4.3a1 1 0 1 0 1.4 1.4l6-6a1 1 0 0 0 0-1.4l-6-6a1 1 0 0 0-1.4 0Z" />,
  menu: <path d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z" />,
  check_circle: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1.2 14.2-3.5-3.5 1.4-1.4 2.1 2.1 4.9-4.9 1.4 1.4-6.3 6.3Z" />,
  send: <path d="M3.4 3.2a1 1 0 0 1 1.1-.2l15.8 7.4a1 1 0 0 1 0 1.8L4.5 19.6a1 1 0 0 1-1.4-1.1l1.5-5.8a1 1 0 0 1 .8-.7l7.5-1.2-7.5-1.1a1 1 0 0 1-.8-.7L3.1 4a1 1 0 0 1 .3-.8Z" />,
  share: <path d="M15 5a3 3 0 1 0-.2 1l-5.3 3.1a3 3 0 0 0-4.5 2.6 3 3 0 0 0 .1.9l5.4 3.1a3 3 0 1 0 .9-1.8l-5.3-3a3.3 3.3 0 0 0 0-.5c0-.2 0-.3.1-.5l5.3-3A3 3 0 0 0 15 5Z" />,
  location_on: <path d="M12 2a6.5 6.5 0 0 0-6.5 6.5c0 4.4 5.2 10.9 6 12a.7.7 0 0 0 1 0c.8-1.1 6-7.6 6-12A6.5 6.5 0 0 0 12 2Zm0 9a2.5 2.5 0 1 1 2.5-2.5A2.5 2.5 0 0 1 12 11Z" />,
  schedule: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm4.2 14.2L11 13V7h2v5.2l4.6 2.7-1.4 1.3Z" />,
  call: <path d="M7.8 3A1.8 1.8 0 0 0 6 4.8C6 13.2 10.8 18 19.2 18A1.8 1.8 0 0 0 21 16.2v-1.7a1.2 1.2 0 0 0-.9-1.2l-3.2-.7a1.2 1.2 0 0 0-1.1.4l-.9 1.1a13.6 13.6 0 0 1-4-4l1.1-.9a1.2 1.2 0 0 0 .4-1.1l-.7-3.2A1.2 1.2 0 0 0 10.5 3Z" />,
  mail: <path d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 2h16l-8 5.3ZM4 17V9.1l7.4 4.9a1 1 0 0 0 1.2 0L20 9.1V17Z" />,
  fitness_center: <path d="M4 9a2 2 0 0 1 2-2h1V6a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0v-1H6a2 2 0 0 1-2-2v-1H3a1 1 0 1 1 0-2h1Zm16 0v3h1a1 1 0 1 1 0 2h-1v1a2 2 0 0 1-2 2h-1v1a1 1 0 1 1-2 0V6a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2ZM10 10h4v4h-4Z" />,
  psychology: <path d="M12 2a8 8 0 0 0-8 8c0 3.3 1.8 5.6 3.7 7.2.8.7 1.3 1.7 1.3 2.8v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V20c0-1.1.5-2.1 1.3-2.8C18.2 15.6 20 13.3 20 10a8 8 0 0 0-8-8Zm-1 4a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0Zm1 10a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 16Zm1.8-4.2a1 1 0 0 0-.4.8 1 1 0 0 1-2 0 2.9 2.9 0 0 1 1.3-2.4 1.7 1.7 0 1 0-2.7-1.4 1 1 0 1 1-2 0A3.7 3.7 0 1 1 13.8 11.8Z" />,
  architecture: <path d="M3 20a1 1 0 0 1-.7-1.7l4.6-4.6L4.3 11A1 1 0 0 1 5.7 9.6l2.6 2.6 1.4-1.4L7 8.1A1 1 0 0 1 8.4 6.7l2.7 2.7 1.4-1.4-2.6-2.6A1 1 0 0 1 11.3 4l2.6 2.6 2-2a1 1 0 1 1 1.4 1.4l-2 2 2.6 2.6a1 1 0 1 1-1.4 1.4l-2.6-2.6-1.4 1.4 2.7 2.7a1 1 0 0 1-1.4 1.4L11 12.2l-1.4 1.4 2.6 2.6a1 1 0 0 1-1.4 1.4l-2.6-2.6-4.6 4.6A1 1 0 0 1 3 20Z" />,
};

export const Icon: React.FC<IconProps> = ({ name, className = '' }) => {
  const pathNode = iconPaths[name];

  if (!pathNode) {
    return <span aria-hidden="true" className={className}>{name}</span>;
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`icon ${className}`}
      width="1em"
      height="1em"
    >
      {pathNode}
    </svg>
  );
};

export const ArrowIcon: React.FC<ArrowIconProps> = ({ className = '' }) => (
  <Icon name="arrow_forward" className={className} />
);
export const MenuIcon = () => <Icon name="menu" />;
export const CheckCircleIcon = () => <Icon name="check_circle" />;
export const SendIcon = () => <Icon name="send" />;
export const ShareIcon = () => <Icon name="share" />;
