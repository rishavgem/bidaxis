export interface ImportedTender {
  tenderId: string;
  title: string;
  department: string;
  category: string;
  location: string;
  closingDate: Date;
  estimatedValue?: string;

  source: string;
  sourceUrl?: string;
}