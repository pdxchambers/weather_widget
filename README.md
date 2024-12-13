# NWS Weather Widget Version 1.0.0

## Description
Leverages the National Weather Service (NWS) API to pull weather data and present it in three ways:
- A simple temperature with an associated icon.
- A 7 day forecast including expected temperature, day, a graphic icon, and a textual forecast.
- A list of most recent observations including temperature, Wind Speed, Barometric pressure, relative humidity, and wind chill.

## Installation
1. Download or clone the repository  from [https://github.com/pdxchambers/weather_widget](https://github.com/pdxchambers/weather_widget)
2. Open a terminal and run `npm i`
3. Build the project with `npm run build`
4. Locate the `dist/assets` folder, copy the .js file to your site and include it in the footer as you would any other scripts.
5. On the webpage you want to install the widget, create and combination of three block elements (`div` or `section` work nicely) and give them an id of `curTemp`, `forecast`, and `conditions`.
-- `curTemp` - Displays the current temperature.
-- `forecast` - Displays a full seven day forecast.
-- `conditions` - Displays the latest data for the area such as temperature, realitive humidity, and wind speed.

## Post Installation
Once you've got your widgets displaying on the page, feel free to style them however you'd like. You can inspect the elements in our browser's Dev Tools to see the class structure for each widget. 
I created the classes to work nicely with a B.E.M. format and Less, but you can style them in straight CSS if you prefer.

## Known Issues

- Location of forecast is hard coded in, a future release will incorporate a way to customize the location. Finding the correct location in the NWS API is not exactly straight forward,
but if you want to make the adjustment yourself first, get the geolocation coordinates (Lat, long) for your address. Secondly, you'll need to use that data to locate the appropriate `stationID` 
for your locale. Finally, once you have the ID replace anywhere you see `KUOA` in the code with your station ID.

## ChangeLog
- 1.0.1 - Updated code so each widget can be added to a site independently without breaking if any of the required DOM elements are not present.
- 1.0.0 - Initial Release
