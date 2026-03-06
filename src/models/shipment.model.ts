export interface Shipment {
  id: string
  recipient: string
  driver: string
  status: "pending" | "in_transit" | "delivered" | "delayed"
  eta: string
  truckNumber: number
}