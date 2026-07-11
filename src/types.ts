export type PageId =
  | 'home'
  | 'gynecology'
  | 'obstetrics'
  | 'fertility'
  | 'diagnostics'
  | 'second-opinion'
  | 'about'
  | 'contact';

export interface ServicePillar {
  id: PageId;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  bullets: string[];
  faqs: { question: string; answer: string }[];
}

export interface QuickInquiry {
  patientName: string;
  patientPhone: string;
  reasonForVisit: string;
  preferredDate: string;
  message: string;
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
  tag: string;
  rating: number;
}
