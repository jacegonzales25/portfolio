export interface TechnologyCategory {
  id: number;
  name: string;
  technologies: Technology[];
}

export interface Technology {
  id: number;
  name: string;
  categoryId: number;
  category?: TechnologyCategory; // Optional to prevent circular references
  projects: Project[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  githubLink: string;
  externalLink?: string;
  createdAt: Date;
  updatedAt: Date;
  technologies: Technology[];
}

export interface Experience {
  id: number;
  company: string;
  title: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  responsibilities: {
    tasks: string[];
  }; // based on seeding of object Json
  createdAt: Date;
  updatedAt: Date;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  description: string;
  issueDate: Date;
  credentialId?: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}
