import { Col } from "react-bootstrap";

export const ValorantCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="apishowcase-imgbx">
        <img src={imgUrl} />
        <div className="apishowcase-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}