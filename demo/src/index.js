import React, {Component} from 'react'
import {render} from 'react-dom'

import AddToCalendar from '../../src'
import Button from './Button';
import Dropdown from './Dropdown';

const AddToCalendarButton = AddToCalendar(Button, Dropdown);

class Demo extends Component {
  render() {
    return <div style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
      <h1>React Add to Calendar Button Demo</h1>
      <AddToCalendarButton
        event={{
          description: 'This is a smple event provided as an example only',
          duration: '2:00',
          endTime: '20160916T214500-04:00',
          location: 'NYC',
          startTime: '20160916T201500-04:00',
          title: 'Sample Event',
        }}
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
