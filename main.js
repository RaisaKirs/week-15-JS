const cities = ["New York", "Riga", "Tokyo", "Berlin", "London"];
const temperatures = [];

for (let i = 0; i < cities.length; i++) {
  let temp = prompt(`Введите температуру для города ${cities[i]}:`);
  temperatures.push(Number(temp));
}

const temperatureList = document.getElementById("temperature-list");
const ul = document.createElement("ul");

for (let i = 0; i < cities.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${cities[i]}: ${temperatures[i]}°C`;
  ul.appendChild(li);
}

temperatureList.appendChild(ul);

const maxTemp = Math.max(...temperatures);
const minTemp = Math.min(...temperatures);

const temperatureSummary = document.getElementById("temperature-summary");
const summaryText = document.createElement("p");
summaryText.textContent = `Максимальная температура: ${maxTemp}°C, Минимальная температура: ${minTemp}°C`;

temperatureSummary.appendChild(summaryText);
