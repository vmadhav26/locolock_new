
export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  shortDesc: string;
  problem: string;
  solution: string;
  impact: string;
  features: string[];
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  outcome: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface Industry {
  name: string;
  description: string;
  icon: string;
}
