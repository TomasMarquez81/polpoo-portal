export const Alerts = () => {

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border shadow-sm p-4">

      <h3 className="font-bold mb-4">
        Recent Alerts
      </h3>

      <div className="flex flex-col gap-3 text-sm">

        <div>
          <strong>Route Blockage</strong>
          <p className="text-slate-500">
            Driver reported heavy traffic
          </p>
        </div>

        <div>
          <strong>Delayed Pickup</strong>
          <p className="text-slate-500">
            Warehouse experiencing high volume
          </p>
        </div>

      </div>

    </div>
  )
}