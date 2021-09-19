export default function WeatherCardBody({
  maxTemp,
  minTemp,
}: {
  maxTemp: number
  minTemp: number
}) {
  return (
    <div className="card-body p-4 text-center">
      <div className="d-flex justify-content-between mb-3">
        <p className="h6 fw-normal">Max</p>
        <p className="h6 fw-normal">
          <i className="fas fa-sun pe-2" /> {maxTemp.toFixed(0)}°C
        </p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="h6 fw-normal">Min</p>
        <p className="h6 fw-normal">
          <i className="fas fa-cloud pe-2" /> {minTemp.toFixed(0)}°C
        </p>
      </div>
    </div>
  )
}
