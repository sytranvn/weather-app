import { Row, Col } from 'react-bootstrap'

interface ErrorProps {
  code?: number
  message: string
}
export default function ErrorView({ code, message }: ErrorProps) {
  return (
    <Row>
      <Col>
        {!!code && <h1>{code}</h1>}
        <h2>
          {message} <b>:(</b>
        </h2>
      </Col>
    </Row>
  )
}
