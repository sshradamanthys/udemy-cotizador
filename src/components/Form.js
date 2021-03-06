import { useState } from "react";
import { getYears, byBrand, getPlan } from "../helper";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Field = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 0.5rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 0.5rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 0.5rem;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
`;

const initialState = {
  brand: "",
  year: "",
  plan: "",
};

const Form = ({ setResumen, setLoading }) => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(false);
  const { brand, year, plan } = data;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    // base
    let resultado = 2000;
    // diferencia en a@os
    const years = getYears(year);

    // aplica precio segun a@o
    resultado -= (years * 3 * resultado) / 100;

    // incremento por marca
    resultado *= byBrand(brand);

    // obtiene el plan
    const incrementByPlan = getPlan(plan);
    resultado = parseFloat(incrementByPlan * resultado).toFixed(2);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResumen({
        cotizacion: Number(resultado),
        data,
      });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Field>
        <Label>Marca</Label>
        <Select name="brand" value={brand} onChange={handleChange}>
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Field>
      <Field>
        <Label>A??o</Label>
        <Select name="year" value={year} onChange={handleChange}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={handleChange}
        />{" "}
        B??sico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={handleChange}
        />{" "}
        Completo
      </Field>
      <Button type="submit">Cotizar</Button>
    </form>
  );
};

Form.propTypes = {
  setResumen: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default Form;
