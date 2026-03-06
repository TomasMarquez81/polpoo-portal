import { useQuery } from "@tanstack/react-query"
import { getVehicles } from "../../../core/api/vehicles.api"

export const useVehicles = () => {

  return useQuery({
    queryKey: ["vehicles"],
    queryFn: getVehicles,
    refetchInterval: 300000, // 5 minutos
  })

}