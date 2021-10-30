import styled from "@emotion/styled";
import { capitalize } from "../helper";
import PropTypes from "prop-types";

const ContainerResumen = styled.div`
  background-color: #00838f;
  color: white;
  margin-top: 0.5rem;
  padding: 0.5rem;
  text-align: center;
`;

const Resumen = ({ data }) => {
  const { brand, year, plan } = data;
  if (brand === "" || year === "" || plan === "") return null;

  return (
    <ContainerResumen>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: {capitalize(brand)} </li>
        <li>Plan: {capitalize(plan)} </li>
        <li>Año del Auto: {capitalize(year)} </li>
      </ul>
    </ContainerResumen>
  );
};

Resumen.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Resumen;
