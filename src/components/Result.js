import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ContainerCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 0.5rem;
  position: relative;
`;

const Cotizacion = styled.p`
  color: #00838f;
  padding: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Result = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Message>Elige marca, año y tipo de seguro</Message>
  ) : (
    <ContainerCotizacion>
      <TransitionGroup component="span" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={cotizacion}
          timeout={{ enter: 1000, exit: 1500 }}
        >
          <Cotizacion>
            El total es: $<span>{cotizacion}</span>
          </Cotizacion>
        </CSSTransition>
      </TransitionGroup>
    </ContainerCotizacion>
  );
};

Result.propTypes = {
  cotizacion: PropTypes.number.isRequired,
};

export default Result;
