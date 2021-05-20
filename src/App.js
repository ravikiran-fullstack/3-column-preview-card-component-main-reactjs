import CarCategoryCard from './components/CarCategoryCard'

import {carCategoryData} from './data';

function App() {
  return (
    <div className="container">
      {carCategoryData.map(car => <CarCategoryCard carType={car.type} description={car.description}></CarCategoryCard>)}
    </div>
  );
}

export default App;
