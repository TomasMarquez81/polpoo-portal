import { useEffect, useState } from "react"
import { polpooApi } from "../../../services/api/polpoo.api"
import type { Vehicle } from "../../../models/vehicle.model"

export const useVehicles = () => {

  const [data, setData] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState(true)

  const load = async () => {

    try {

      const vehicles = await polpooApi.getVehicles()
      setData(vehicles)

    } catch (err) {

      console.error("Error loading vehicles", err)

    } finally {

      setLoading(false)

    }

  }

  useEffect(() => {

    load()

    const interval = setInterval(load, 300000) // 5 minutos

    return () => clearInterval(interval)

  }, [])

  return { data, loading }

}