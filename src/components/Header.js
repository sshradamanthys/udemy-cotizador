import styled from "@emotion/styled";

const ContainerHeader = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #fff;
`;

const TextHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: "Slabo 27px", serif;
  text-align: center;
`;

const Header = () => {
  return (
    <ContainerHeader>
      <TextHeader>Cotizador de Seguros</TextHeader>
    </ContainerHeader>
  );
};

export default Header;
