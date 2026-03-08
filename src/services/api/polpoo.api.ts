import { getMockVehicles } from "../../mocks/vehicles.mock"
import { getMockShipments } from "../../mocks/shipments.mock"

const API_URL = import.meta.env.VITE_POLPOO_API_URL
const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true"

export const polpooApi = {

  async getVehicles() {

    if (USE_MOCK) {

      return getMockVehicles()

    }

    const res = await fetch(`${API_URL}/vehicles`)
    return res.json()

  },

  async getShipments() {

    if (USE_MOCK) {

      return getMockShipments()

    }

    const res = await fetch(`${API_URL}/shipments`)
    return res.json()

  }

}