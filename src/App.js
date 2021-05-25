import './App.css'

import React, { useRef, useState } from 'react'

import Logo from './assets/ingo.gif'

const number_writing = {
  1: 'uno', 2: 'dos', 3: 'tres', 4: 'cuatro',
  5: 'cinco', 6: 'seis', 7: 'siete', 8: 'ocho', 9: 'nueve',
  10: 'diez', 11: 'once', 12: 'doce', 13: 'trece', 14: 'catorce',
  15: 'un cuarto', 16: 'dieciséis', 17: 'diecisiete', 18: 'dieciocho', 19: 'diecinueve',
  20: 'veinte', 21: 'veintiuno', 22: 'veintidós', 23: 'veintitrés', 24: 'veinticuatro',
  25: 'veinticinco', 26: 'veintiséis', 26: 'veintisiete', 26: 'veintiocho', 26: 'veintinueve',
  30: 'treinta', 40: 'cuarenta', 45: 'tres cuartos', 50: 'cincuenta'
}

const App = () => {
  const [hour, setHour] = useState(12)
  const [minute, setMinute] = useState(0)
  const [meridiem, setMeridiem] = useState('am')

  const hour_picker = useRef(null)
  const minute_picker = useRef(null)
  const meridiem_picker = useRef(null)
  const modal_background = useRef(null)

  const getTimeWriting = () => {
    if (hour == 12 && minute == 0)
      return meridiem == 'am' ? 'Es media noche' : 'Es medio día'
    return readHour() + readMinute() + readMeridiem()
  }

  const readHour = () =>
    hour == 1 ? 'Es la una' : 'Son las ' + number_writing[hour]
  
  const readMinute = () => {
    if (minute == 0)
      return ' en punto'
    if (minute == 30)
      return ' y media'
    let units = minute % 10
    let tens = ~~(minute / 10) * 10
    //validate multiples of 10, unique names and quarter hours
    if (units == 0 || minute < 30 || minute == 45)
      return ' y ' + number_writing[minute]
    return ' y ' + number_writing[tens] + ' y ' + number_writing[units]
  }

  const readMeridiem = () => {
    if (meridiem == 'am')
      return ' de la mañana'
    if (hour < 6 || hour == 12)
      return ' de la tarde'
    return ' de la noche'
  }

  const timePickerReducer = (type, action, value) => {
    switch (type){
      case 'hour':
        if (action=='open'){
          modal_background.current.classList = 'modal_background modal_background_hour'
          hour_picker.current.style.display = 'block'
        }
        else{
          setHour(value)
          modal_background.current.classList = ''
          hour_picker.current.style.display = 'none'
        }
        break
      case 'minute':
        if (action=='open'){
          modal_background.current.classList = 'modal_background modal_background_minute'
          minute_picker.current.style.display = 'block'
        }
        else{
          setMinute(value)
          modal_background.current.classList = ''
          minute_picker.current.style.display = 'none'
        }
        break
      case 'meridiem':
        if (action=='open'){
          modal_background.current.classList = 'modal_background modal_background_meridiem'
          meridiem_picker.current.style.display = 'block'
        }
        else{
          setMeridiem(value)
          modal_background.current.classList = ''
          meridiem_picker.current.style.display = 'none'
        }
        break
      default:
        break
    }
  }

  const closeModal = () => {
    modal_background.current.classList = ''
    meridiem_picker.current.style.display = 'none'
    minute_picker.current.style.display = 'none'
    hour_picker.current.style.display = 'none'
  }

  return (
    <div className="App">
      <div className='icon'>
        <image src={Logo} alt='ingo'/>
      </div>
      <div className='container'>
        <label className='std_text'>
          Indique la hora
        </label>
        <div className='time_input_container'>
          <div ref={modal_background}
            onClick={closeModal}/>
          <div className='time_input_hour_container'>
            <input
              className='time_input time_hour'
              onClick={() => timePickerReducer('hour', 'open', null)}
              value={hour < 10 ? `0${hour}` : hour}
              readOnly
              />
            <div ref={hour_picker} className='select_time select_hour'>
              {
                Array.from(Array(12).keys()).map(item => 
                  <button
                    className='select_time_unit'
                    onClick={() => timePickerReducer('hour', 'close', item + 1)}>
                    {item < 9 ? `0${item + 1}` : item + 1}
                  </button>
                )
              }
            </div>
          </div>
          <label>:</label>
          <div className='time_input_hour_container'>
            <input
              className='time_input time_minute'
              onClick={() => timePickerReducer('minute', 'open', null)}
              value={minute < 10 ? `0${minute}` : minute}
              readOnly
              />
            <div ref={minute_picker} className='select_time select_minute'>
              {
                Array.from(Array(60).keys()).map(item => 
                  <button
                    className='select_time_unit'
                    onClick={() => timePickerReducer('minute', 'close', item)}>
                    {item < 10 ? `0${item}` : item}
                  </button>
                )
              }
            </div>
          </div>
          <div className='time_input_hour_container'>
            <input
              className='time_input time_meridiem'
              onClick={() => timePickerReducer('meridiem', 'open', null)}
              value={meridiem}
              readOnly
              />
            <div ref={meridiem_picker} className='select_time select_meridiem'>
              <button
                className='select_time_unit'
                onClick={() => timePickerReducer('meridiem', 'close', 'am')}>
                am
              </button>
              <button
                className='select_time_unit'
                onClick={() => timePickerReducer('meridiem', 'close', 'pm')}>
                pm
              </button>
            </div>
          </div>
        </div>
        <label className='result'>
          {
            getTimeWriting()
          }
        </label>
      </div>
    </div>
  )
}

export default App