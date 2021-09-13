import { Card, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronUp, faCog } from '@fortawesome/free-solid-svg-icons'

import Mask from './Mask'

export default function WeatherCard() {
  return (
    <Card style={{ borderRadius: '10px' }} className="mb-3">
      <div className="bg-image ripple" data-mdb-ripple-color="light" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
        <Image src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-weather/draw2.png" className="w-100" alt="night" />
          <Mask>
            <div className="d-flex justify-content-between p-4">
              <FontAwesomeIcon icon={faChevronLeft} size="lg" className="text-white" />
              <FontAwesomeIcon icon={faCog} size="lg" className="text-white" />
            </div>
            <div className="text-center text-white">
              <p className="h4 mb-4">Clear night</p>
              <p className="h6 mb-4">Detroit, US</p>
              <p className="display-5"><strong>20°C</strong> </p>
            </div>
        </Mask>
      </div>
      <div className="card-body p-4 text-center">
        <div className="d-flex justify-content-between mb-3">
          <p className="h6 fw-normal">Max</p>
          <p className="h6 fw-normal"><i className="fas fa-sun pe-2"></i> 23°C</p>
        </div>
        <div className="d-flex justify-content-between" style={{ color: '#aaa' }}>
          <p className="h6 fw-normal">Min</p>
          <p className="h6 fw-normal"><i className="fas fa-cloud pe-2"></i> 21°C</p>
        </div>
      </div>
    </Card>
  )
}