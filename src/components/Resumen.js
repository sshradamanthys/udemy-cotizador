import styled from "@emotion/styled";
import { capitalize } from "../helper";

const ContainerResumen = styled.div`
  background-color: #00838f;
  color: white;
  margin-top: 1rem;
  padding: 1rem;
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

export default Resumen;
