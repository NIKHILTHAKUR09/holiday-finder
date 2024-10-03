let form = document.querySelector("form");
let country = document.querySelector("#country");
let date = document.querySelector("#date");
let card = document.querySelector("#holiday-card");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

let API_KEY = "f5aa2711ebc94e67861a208a148b9e35";

const fetchHoliday = async (e) => {
  e.preventDefault();

  try {
    dateValue = date.value.split("-");
    const year = dateValue[0];
    const month = dateValue[1];
    const day = dateValue[2];
    const countryName = country.value;
    const response = await fetch(
      `https://holidays.abstractapi.com/v1/?api_key=${API_KEY}&country=${countryName}&year=${year}&month=${month}&day=${day}`
    );

    const data = await response.json();
    card.className = "card p-4 my-3 shadow";
    reset();

    if (data.length === 0) {
      h1.innerText = "No Holiday!!";
    } else {
      h1.innerText = data[0].name;
      h2.innerText = data[0].date;
      h3.innerText = data[0].week_day;
      p.innerText = data[0].location;
    }
  } catch (error) {
    window.alert("Something Went Worng!!");
  }
};

const reset = () => {
  h1.innerText = "";
  h2.innerText = "";
  h3.innerText = "";
  p.innerText = "";
};

form.addEventListener("submit", fetchHoliday);

