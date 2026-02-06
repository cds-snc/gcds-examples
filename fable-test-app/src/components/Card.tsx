import React from "react";
import { GcdsCard } from "@gcds-core/components-react";

interface CardProps {
  children?: React.ReactNode;
  cardTitle: string;
  cardTitleTag: "h3" | "h4" | "h5" | "h6";
  href: string;
  description?: string;
  badge?: string;
  imgSrc?: string;
  imgAlt?: string;
}

const Card: React.FC<CardProps> = React.memo(
  ({
    badge,
    cardTitle,
    cardTitleTag,
    description,
    href,
    imgSrc,
    imgAlt,
    children,
    ...rest
  }) => (
    <GcdsCard
      badge={badge}
      cardTitle={cardTitle}
      cardTitleTag={cardTitleTag}
      description={description}
      href={href}
      imgSrc={imgSrc}
      imgAlt={imgAlt}
      {...rest}
    >
      {children}
    </GcdsCard>
  ),
);

export default Card;
