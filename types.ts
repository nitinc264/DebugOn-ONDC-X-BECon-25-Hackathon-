export interface StoreDetails {
  storeName: string;
  ownerName: string;
  phone: string;
  address: string;
  pincode: string;
  gstNumber?: string;
}

export interface Product {
  name: string;
  category: string;
  price: number;
  unit: string;
  stock: number;
  image?: string;
}

export type Language = 'en' | 'hi' | 'pa' | 'gu' | 'mr' | 'bn';

export interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}