
#Air Travel Footprint Calculator
This Angular application allows users to calculate the carbon footprint of a round-trip flight between two airports. The user selects departure and destination airports, enters the number of passengers, and the app calculates the CO2 emissions per passenger and the total emissions for the trip.

#Table of Contents
Features
Technologies
Setup and Installation
Usage
Components
Services
API
Testing
Contributing
License
Features
Select departure and destination airports using a search dropdown.
Enter the number of passengers.
Calculate the carbon footprint for each passenger and the total for the trip.
Display the results in a list of calculations.
Technologies
Angular 15+
TypeScript
ng-select (for airport dropdowns)
HttpClient (for API calls)
GoClimate API (for footprint calculation)
Setup and Installation
Prerequisites
Node.js
Angular CLI
Installation
Clone the repository:

bash
Copia codice
git clone https://github.com/yourusername/air-travel-footprint-calculator.git
cd air-travel-footprint-calculator
Install dependencies:

bash
Copia codice
npm install
Run the app:

bash
Copia codice
ng serve
Open your browser and go to http://localhost:4200.

Usage
Select airports: Use the dropdown menus to search and select the departure and arrival airports.
Enter passengers: Type the number of passengers in the input field.
Calculate footprint: Click the "Calculate" button to see the carbon footprint per passenger and for all passengers.
The results of the calculation will be displayed below the form, including:

Departure and destination airports
Carbon footprint per passenger
Total carbon footprint for all passengers
Components
HomeComponent
This component renders the form to calculate the flight footprint. It handles the selection of airports and the number of passengers, and submits the data to calculate the footprint.

Inputs:

selectedValue: The selected departure airport.
selectedValue2: The selected arrival airport.
passeggeri: The number of passengers.
Outputs:

The calculated footprint results are displayed below the form.
CalcoloComponent
This component is responsible for displaying the results of each calculation. It takes an input of type calcolo and renders the details (footprint per passenger and total for the trip).

Services
DataService
This service is responsible for making HTTP requests to external APIs. It has two main functions:

getDati(url: string): Fetches a list of airports from a public API.
calculateFlightFootprint(from: string, to: string): Calculates the carbon footprint for a round-trip flight using the GoClimate API.
API
This app uses two APIs:

Airport Data API: Provides a list of airports that the user can select from.
GoClimate API: Used to calculate the carbon footprint of the flight based on the departure and arrival airports and the number of passengers.
Testing
Unit tests are provided for the components and services using Jasmine and Karma. You can run the tests with the following command:

bash
Copia codice
ng test
Tests include:

HomeComponent: Tests for submitting the form and ensuring the correct API requests are made.
CalcoloComponent: Tests for displaying the calculation results.
DataService: Tests for fetching airport data and calculating the flight footprint.
