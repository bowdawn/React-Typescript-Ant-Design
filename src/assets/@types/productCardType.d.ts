export interface productCardType {
  title: string;
  tags: Array<string>;
  type: string;
  price: number;
  ageGroupPlan: Array<{ age: number; price: number; premium: number }>;
}
