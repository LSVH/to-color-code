import React, { Component } from 'react'

import toHexColorCode from 'to-hex-color-code'

export default class App extends Component {
  render () {
    return (
      <div>
        <p>Testing "#ABC": {toHexColorCode('#ABC')}</p>
        <p>Testing "ABC": {toHexColorCode('ABC')}</p>
        <p>Testing "AABBCC": {toHexColorCode('AABBCC')}</p>
        <p>Testing "red": {toHexColorCode('red')}</p>
      </div>
    )
  }
}
