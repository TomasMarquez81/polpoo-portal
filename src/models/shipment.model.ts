export interface Shipment {
  id: string
  recipient: string
  driver: string
  status: "pending" | "in_transit" | "delivered"
  eta: string
  lat: number
  lng: number
  truckNumber: number
  stopOrder: number
}