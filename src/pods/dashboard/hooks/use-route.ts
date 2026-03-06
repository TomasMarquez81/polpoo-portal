import { useQuery } from "@tanstack/react-query"
import { getRouteByVehicle } from "../../../core/api/routes.api"

export const useRoute = (vehicleId?: string) => {

  return useQuery({
    queryKey: ["route", vehicleId],
    queryFn: () => getRouteByVehicle(vehicleId!),
    enabled: !!vehicleId
  })

}