const fromAmountElement = document.querySelector('.amount');
const convertedAmountElement = document.querySelector('.convertedAmount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const toCurrencyElement = document.querySelector('.toCurrency');
const result = document.querySelector('.result');
const convertedContainer = document.querySelector(".converter-container")
//Array to populate the select tags with these countries
const countries = [ 
    { code: "USD", name: "United States Dollar" },
    { code: "INR", name: "Indian Rupee" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "ZAR", name: "South African Rand" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "KRW", name: "South Korean Won" },
    { code: "THB", name: "Thai Baht" },
    { code: "MYR", name: "Malaysian Ringgit" },
    { code: "IDR", name: "Indonesian Rupiah" },
    { code: "TRY", name: "Turkish Lira" },
    { code: "PHP", name: "Philippine Peso" },
    { code: "AED", name: "United Arab Emirates Dirham" },
    { code: "SAR", name: "Saudi Riyal" }
];


//Showing countries from array to select tag
countries.forEach(country =>{
    const options1 = document.createElement('option');
    const options2 = document.createElement('option');

    options1.value = options2.value = country.code;
    options1.textContent = options2.textContent =`${country.code}(${country.name})`;
   
    fromCurrencyElement.appendChild(options1);
    toCurrencyElement.appendChild(options2);

    //Setting default values of select tag
    fromCurrencyElement.value = "USD";
    toCurrencyElement.value = "INR";
});

//Function to get exchange rate using API
const getExchangeRate = async() =>{
    const amount = parseFloat(fromAmountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;
    result.textContent = "Fetching Exchange rate..";

    try{
   //Fetching data from API
   const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
   const data = await response.json();

   const conversionRate = data.rates[toCurrency];
   const convertedAmount = (amount * conversionRate).toFixed(2);

   if(typeof conversionRate === "undefined"){
    result.textContent = "Exchange rate data is not available for selected country";
    convertedAmountElement = " ";
   } 
  else{
   convertedAmountElement.value = convertedAmount;
   result.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${ toCurrency}`
   }    
}
catch(error){
    convertedContainer.innerHTML = `<h1>Error while fetching exchange rates!</h1>`;
} 

}
 
//Fetching exchange rate when user input the amount
fromAmountElement.addEventListener('input',getExchangeRate);

//Fetching exchange rate when users change currency
fromCurrencyElement.addEventListener('change',getExchangeRate);
toCurrencyElement.addEventListener('change',getExchangeRate);
window.addEventListener('load',getExchangeRate);
