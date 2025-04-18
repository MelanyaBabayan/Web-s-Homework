const cars = [
    { brand: 'Renault', model: 'Logan', year: 2018 },
    { brand: 'Toyota', model: 'Rav4', year: 2022 },
    { brand: 'Ford', model: 'Focus', year: 2016 }
  ];
  
function filterCars() {
    const year = parseInt(document.getElementById('filterYear').value);
    const filteredCars = cars.filter(car => car.year === year);
  
    const carList = document.getElementById('carList');
    carList.innerHTML = ''; 
    filteredCars.forEach(car => {
      const li = document.createElement('li');
      li.textContent = `${car.brand} ${car.model} (${car.year})`;
      carList.appendChild(li);
    });
}
  
  