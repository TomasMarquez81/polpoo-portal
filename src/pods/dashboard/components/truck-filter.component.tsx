import truck1 from "../../../assets/icons/truck1.png"
import truck2 from "../../../assets/icons/truck2.png"
import truck3 from "../../../assets/icons/truck3.png"
import truck4 from "../../../assets/icons/truck4.png"
import truck5 from "../../../assets/icons/truck5.png"
import truck6 from "../../../assets/icons/truck6.png"
import truck7 from "../../../assets/icons/truck7.png"
import truck8 from "../../../assets/icons/truck8.png"
import truck9 from "../../../assets/icons/truck9.png"

const trucks = [
  truck1, truck2, truck3, truck4, truck5,
  truck6, truck7, truck8, truck9
]

interface Props {
  selectedTruck: number | null
  onSelectTruck: (truck: number) => void
  clearFilter: () => void
}

export const TruckFilter = ({
  selectedTruck,
  onSelectTruck,
  clearFilter
}: Props) => {

  return (
    <div className="flex items-center gap-3">

      {trucks.map((icon, index) => {

        const truckNumber = index + 1

        return (
          <button
            key={truckNumber}
            onClick={() => onSelectTruck(truckNumber)}
            className={`p-1 rounded border ${
              selectedTruck === truckNumber
                ? "border-blue-500 bg-blue-50"
                : "border-slate-200"
            }`}
          >
            <img
              src={icon}
              className="w-8 h-8"
            />
          </button>
        )

      })}

      <button
        onClick={clearFilter}
        className="ml-4 mr-4 px-4 py-1.5 text-sm font-medium text-white bg-slate-600 rounded-lg hover:bg-slate-700 transition"
      >
        Clear filter
      </button>

    </div>
  )
}