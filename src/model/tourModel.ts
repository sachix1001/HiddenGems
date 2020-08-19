export interface Place {
  name: string;
  description: string;
  photo: string;
  address: string;
  location: { lat: number; lng: number };
}
