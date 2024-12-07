import { createRoot } from 'react-dom/client'
import './index.css'
import Temperature from './components/temperature'
import Forecast from './components/forecast'
import Conditions from './components/conditions'

const temperatureNode = document.getElementById('curTemp')
const forecastNode = document.getElementById('curForcast')

createRoot(document.getElementById('curTemp')).render(
  <Temperature />
)

createRoot(document.getElementById('forecast')).render(
  <Forecast />
)

createRoot(document.getElementById('conditions')).render(
  <Conditions />
)
