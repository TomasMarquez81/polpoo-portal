type VehicleUpdate = {
  id: string
  lat: number
  lng: number
}

export class PolpooSocket {

  private socket: WebSocket | null = null

  connect(onVehicleUpdate: (vehicle: VehicleUpdate) => void) {

    this.socket = new WebSocket(
      import.meta.env.VITE_POLPOO_WS_URL
    )

    this.socket.onmessage = (event) => {

      const data = JSON.parse(event.data)

      if (data.type === "vehicle_position") {
        onVehicleUpdate(data.payload)
      }

    }

  }

  disconnect() {

    this.socket?.close()

  }

}