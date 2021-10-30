import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Resumen from "./components/Resumen";
import Spinner from "./components/Spinner";

import styled from "@emotion/styled";
import Result from "./components/Result";

const Container = styled.div`
  max-width: 600px;
  margin: 1rem auto;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 1.5rem;
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
  const [loading, setLoading] = useState(false);

  const { data, cotizacion } = resumen;

  return (
    <Container>
      <Header />
      <ContainerForm>
        <Form setResumen={setResumen} setLoading={setLoading} />
        {loading ? <Spinner /> : null}
        <Resumen data={data} />
        {!loading ? <Result cotizacion={cotizacion} /> : null}
      </ContainerForm>
    </Container>
  );
}

export default App;
