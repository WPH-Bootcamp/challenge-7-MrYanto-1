export interface StatItem {
  id: number;
  value: string;
  label: string;
}
export interface ProcessItem {
  id: number;
  stepNumber: number;
  title: string;
  description: string;
  alignLeft: boolean;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}