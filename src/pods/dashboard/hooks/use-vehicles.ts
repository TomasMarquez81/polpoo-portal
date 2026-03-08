import { useEffect, useState } from "react"
import { polpooApi } from "../../../services/api/polpoo.api"
import { PolpooSocket } from "../../../services/socket/polpoo.socket"
import type { Vehicle } from "../../../models/vehicle.model"

export const useVehicles = () => {

  const [data, setData] = useState<Vehicle[]>([])

  const load = async () => {

    const vehicles = await polpooApi.getVehicles()
    setData(vehicles)

  }

  useEffect(() => {

    const init = async () => {
      await load()
    }

    init()

    const socket = new PolpooSocket()

    socket.connect((update) => {

      setData(prev =>
        prev.map(v =>
          v.id === update.id
            ? { ...v, lat: update.lat, lng: update.lng }
            : v
        )
      )

    })

    return () => {
      socket.disconnect()
    }

  }, [])

  return { data }

}