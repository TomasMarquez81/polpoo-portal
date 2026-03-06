import { useQuery } from "@tanstack/react-query"
import { getShipments } from "../../../core/api/shipments.api"

export const useShipments = () => {

  return useQuery({
    queryKey: ["shipments"],
    queryFn: getShipments,
  })

}