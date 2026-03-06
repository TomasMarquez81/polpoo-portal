export const KPIs = () => {

  const stats = [
    { label: "Total Shipments", value: "1284" },
    { label: "Out for Delivery", value: "432" },
    { label: "Completed Today", value: "812" },
    { label: "Alerts", value: "14" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white dark:bg-slate-800 p-6 rounded-xl border shadow-sm"
        >
          <p className="text-sm text-slate-500">
            {stat.label}
          </p>

          <p className="text-3xl font-black">
            {stat.value}
          </p>
        </div>
      ))}

    </div>
  )
}