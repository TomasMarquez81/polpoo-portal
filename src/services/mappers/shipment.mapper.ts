import type { Shipment } from "../../models/shipment.model"

export const mapShipmentFromApi = (apiShipment: any): Shipment => {

  return {
    id: apiShipment.id,
    recipient: apiShipment.recipient,
    driver: apiShipment.driver,
    status: apiShipment.status,
    eta: apiShipment.eta,
    truckNumber: apiShipment.truck_number,
    stopOrder: apiShipment.stop_order,
    lat: apiShipment.latitude,
    lng: apiShipment.longitude
  }

}