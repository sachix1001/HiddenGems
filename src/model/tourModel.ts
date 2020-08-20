export interface Place {
  showWindow: boolean;
  name: string;
  description: string;
  photo: string;
  address: string;
  location: { lat: number; lng: number };
}
