import CarCategoryCard from "./components/CarCategoryCard";

import { carCategoryData } from "./data";

function App() {
  return (
    <div className='container'>
      {carCategoryData.map((car) => (
        <CarCategoryCard
          key={car.id}
          carType={car.type}
          description={car.description}
        ></CarCategoryCard>
      ))}
    </div>
  );
}

//testing

export default App;
