import React from 'react'

export const Autocomplete = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="select-btn">
          <i className="uil uil-angle-down"></i>
        </div>
      </div>
      <div className="content">
        <div className="search">
          <i className="uil uil-search"></i>
          <input type="text" placeholder='Search' />
        </div>
        <ul className="options">
          <li>Australia</li>
          <li>Bangladesh</li>
          <li>Canada</li>
          <li>China</li>
          <li>Denmark</li>
          <li>France</li>
          <li>Germany</li>
          <li>India</li>
          <li>Japan</li>
          <li>Mexico</li>
          <li>Russia</li>
          <li>Singapore</li>
          <li>South Korea</li>
          <li>Sweden</li>
          <li>Switzerland</li>
          <li>United Kingdom</li>
          <li>United States</li>
        </ul>
      </div>
    </div>
  )
}
