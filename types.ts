
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconDefinition;
}
