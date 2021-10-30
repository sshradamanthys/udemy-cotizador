import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Resumen from "./components/Resumen";

import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

const initialState = {
  cotizacion: 0,
  data: {
    marca: "",
    year: "",
    plan: "",
  },
};

function App() {
  const [resumen, setResumen] = useState(initialState);
  const { data } = resumen;
  return (
    <Container>
      <Header />
      <ContainerForm>
        <Form setResumen={setResumen} />
        <Resumen data={data} />
      </ContainerForm>
    </Container>
  );
}

export default App;
