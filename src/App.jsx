import React, { useEffect, useState } from 'react'
import ColorSlider from './components/ColorSlider'

export function App() {
  const [sat, setSat] = useState(0)
  const [hue, setHue] = useState(0)
  const [light, setLight] = useState(0)
  const [alpha, setAlpha] = useState(0)

  useEffect(() => {
    setHue(Math.floor(Math.random() * 360))
    setSat(Math.floor(Math.random() * 100))
    setLight(Math.floor(Math.random() * 100))
    setAlpha(Math.floor(Math.random() * 100) / 100)
  }, [])

  function handleHue(event) {
    setHue(event.target.value)
  }
  function handleSat(event) {
    setSat(event.target.value)
  }
  function handleLight(event) {
    setLight(event.target.value)
  }
  function handleAlpha(event) {
    setAlpha(event.target.value / 100)
  }

  const randomColor = () => {
    setHue(Math.floor(Math.random() * 360))
    setSat(Math.floor(Math.random() * 100))
    setLight(Math.floor(Math.random() * 100))
    setAlpha(Math.floor(Math.random() * 100) / 100)
  }

  return (
    <>
      <h1>Color Picker</h1>
      <div className="colorPickerContainer">
        <div
          className="colorPicker"
          style={{
            backgroundColor: `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`,
          }}
        ></div>
      </div>
      <ColorSlider
        hue={hue}
        sat={sat}
        light={light}
        alpha={alpha}
        handleHue={handleHue}
        handleSat={handleSat}
        handleLight={handleLight}
        handleAlpha={handleAlpha}
        randomColor={randomColor}
      />
    </>
  )
}
