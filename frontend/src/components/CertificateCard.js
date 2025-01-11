import { Col } from "react-bootstrap";

export const CertificateCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="certificate-imgbx">
        <img src={imgUrl} />
        <div className="certificate-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}