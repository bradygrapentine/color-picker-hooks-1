import React, { Component } from 'react'

export default function ColorSlider(props) {
  return (
    <>
      <div className="colorSlider">
        <button onClick={() => props.randomColor()}>
          <strong>Random Color</strong>
        </button>
        <p>
          <strong>Hue: {props.hue}</strong>
        </p>
        <input
          type="range"
          max={360}
          value={props.hue}
          onChange={props.handleHue}
        />
        <p>
          <strong>Saturation: {props.sat}</strong>
        </p>
        <input
          type="range"
          max={100}
          value={props.sat}
          onChange={props.handleSat}
        />
        <p>
          <strong>Lightness: {props.light}</strong>
        </p>
        <input
          type="range"
          max={100}
          value={props.light}
          onChange={props.handleLight}
        />
        <p>
          <strong>
            {Math.floor(props.alpha * 100) / 100 == 1
              ? 'N/A'
              : `Alpha: ${Math.floor(props.alpha * 100) / 100}`}
          </strong>
        </p>
        <input
          type="range"
          max={100}
          value={props.alpha * 100}
          onChange={props.handleAlpha}
        />
      </div>
    </>
  )
}
