import { useEffect, useState } from "react"
import { polpooApi } from "../../../services/api/polpoo.api"
import type { Shipment } from "../../../models/shipment.model"

export const useShipments = () => {

  const [data, setData] = useState<Shipment[]>([])
  const [loading, setLoading] = useState(true)

  const load = async () => {

    if (document.hidden) return

    try {

      const apiData = await polpooApi.getShipments()

      setData(apiData)

    } catch (err) {

      console.error(err)

    } finally {

      setLoading(false)

    }

  }

  useEffect(() => {

    load()

    const interval = setInterval(load, 300000) // 5 min

    return () => clearInterval(interval)

  }, [])

  return { data, loading }

}