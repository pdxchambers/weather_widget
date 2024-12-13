import { createRoot } from 'react-dom/client'
import './index.css'
import Temperature from './components/temperature'
import Forecast from './components/forecast'
import Conditions from './components/conditions'

if (document.body.contains(document.getElementById('curTemp'))) {
  createRoot(document.getElementById('curTemp')).render(
    <Temperature />
  )
}

if (document.body.contains(document.getElementById('forecast'))) {
  createRoot(document.getElementById('forecast')).render(
    <Forecast />
  )
}


if (document.body.contains(document.getElementById('conditions'))) {
  createRoot(document.getElementById('conditions')).render(
    <Conditions />
  )
}
