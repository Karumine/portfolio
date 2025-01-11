import { Col } from "react-bootstrap";

export const ValorantCard = ({ name, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div>
        <img src={imgUrl} />
        <div >
          <h4>{name}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}