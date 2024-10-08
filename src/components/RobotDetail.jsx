import { Card, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

const RobotDetail = ({ robot }) => {
  return (
    <Card
      className="rounded-1 p-3 border"
      style={{ backgroundColor: "#D9D9D9" }}
    >
      {/*<pre>{JSON.stringify(robot)}</pre>*/}
      <Card.Title className="text-center">{robot.nombre}</Card.Title>
      <Image className="mx-auto w-50 border" src={`${robot.imagen}?raw=true`} />
      <Card.Body>
        <div>
          <span className="fw-bold mx-1">
            → <FormattedMessage id="robotDetail-year" />:
          </span>
          <span>{robot["añoFabricacion"]}</span>
        </div>
        <div>
          <span className="fw-bold mx-1">
            → <FormattedMessage id="robotDetail-capacity" />:
          </span>
          <span>{robot["capacidadProcesamiento"]}</span>
        </div>
        <div>
          <span className="fw-bold mx-1">
            → <FormattedMessage id="robotDetail-humor" />:
          </span>
          <span>{robot["humor"]}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

RobotDetail.propTypes = {
  robot: {
    imagen: PropTypes.string,
    nombre: PropTypes.string,
  },
};

export default RobotDetail;
