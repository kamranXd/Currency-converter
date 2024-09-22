const fromAmountElement = document.querySelector('.amount');
const convertedAmountElement = document.querySelector('.convertedAmount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const toCurrencyElement = document.querySelector('.toCurrency');
const result = document.querySelector('.result');

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

    fromCurrencyElement.value = "USD";
    toCurrencyElement.value = "INR";
});