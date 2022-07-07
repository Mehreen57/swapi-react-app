// calculating BMI
export default function BMI({height, mass}){
    let bmi = (mass / (Math.pow(height / 100, 2))).toFixed(1); // convert height to cm and applied BMI formula: mass/height.sq
    return bmi;
  }