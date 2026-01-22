import { LucideIcon } from "lucide-react";

export interface Place {
  id: string;
  title: string;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  location: string;
  isOpen: boolean;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  count: string;
  color: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface FeatureCardData {
  id: string;
  category: string;
  icon: LucideIcon;
  image?: string;
  bgGradient?: string;
  overlayType?: 'clips' | 'contact_center' | 'meetings' | 'ai_companion' | 'team_chat' | 'phone';
  hasNotification?: boolean;
}