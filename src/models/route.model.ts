export interface RouteStop {
  id: string
  client: string
  lat: number
  lng: number
  status: string
}

export interface Route {
  vehicleId: string
  stops: RouteStop[]
}