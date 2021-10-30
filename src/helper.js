// obtiene la diferencia de años
export const getYears = (year) => new Date().getFullYear() - Number(year);

// calcula el total a pagar segun la marca
export const byBrand = (brand) => {
  let increment;

  switch (brand) {
    case "europeo":
      increment = 1.3;
      break;
    case "americano":
      increment = 1.15;
      break;
    case "asiatico":
      increment = 1.05;
      break;
    default:
      break;
  }

  return increment;
};

// Calcula el tipo de seguro
export const getPlan = (plan) => (plan === "basico" ? 1.2 : 1.5);

// Muestra la primer letra mayuscula
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
