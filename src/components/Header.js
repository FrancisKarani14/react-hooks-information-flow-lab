import React from 'react'

export default function Header({onDarkModeClick, isDarkMode}) {
  return (
    <>
    <h2>Shopster</h2>
    <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      
    </>
  )
}
