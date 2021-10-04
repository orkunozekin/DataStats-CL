import React, { useState } from 'react'

import { ButtonGroup, ToggleButton } from 'react-bootstrap'
import './ToggleBtn.css'

const ToggleBtn = ({ setOption }) => {

  const [radioValue, setRadioValue] = useState('1')

  const radios = [
    { name: 'Graph', value: '1' },
    { name: 'Table', value: '2' },
  ];

  return (
    <ButtonGroup>
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant={idx % 2 ? 'outline-success' : 'outline-danger'}
          name="radio"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => {
            setRadioValue(e.currentTarget.value)
            setOption(radio.name)
          }}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  )
}

export default ToggleBtn