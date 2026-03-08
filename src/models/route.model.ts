export interface RouteStop {
  id: string
  client: string
  lat: number
  lng: number
  status: string
  stopOrder: number
}

export interface Route {
  vehicleId: string
  stops: RouteStop[]
}