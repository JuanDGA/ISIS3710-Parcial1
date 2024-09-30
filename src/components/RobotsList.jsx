import { Col, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../common/endpoints.js";
import RobotDetail from "./RobotDetail.jsx";
import { FormattedMessage } from "react-intl";

const RobotsList = () => {
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/robots`).then((res) => setRobots(res.data));
  }, []);

  const selectRobot = (id) => {
    axios
      .get(`${BACKEND_URL}/robots/${id}`)
      .then((res) => setSelectedRobot(res.data));
  };

  return (
    <Row className="mt-3 mx-auto">
      <Col xs={8}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>
                <FormattedMessage id="robotList-tableHeaders-name" />
              </th>
              <th>
                <FormattedMessage id="robotList-tableHeaders-model" />
              </th>
              <th>
                <FormattedMessage id="robotList-tableHeaders-company" />
              </th>
            </tr>
          </thead>
          <tbody>
            {robots.map((robot) => (
              <tr
                key={robot.id}
                style={{ cursor: "pointer" }}
                onClick={() => selectRobot(robot.id)}
              >
                <td>{robot.id}</td>
                <td>{robot.nombre}</td>
                <td>{robot.modelo}</td>
                <td>{robot.empresaFabricante}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
      <Col xs={4}>
        {selectedRobot && <RobotDetail robot={selectedRobot}></RobotDetail>}
      </Col>
    </Row>
  );
};

export default RobotsList;
