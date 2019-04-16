import React from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'
import styled from 'styled-components'

import axios from 'axios';

import moment from 'moment'
import BigCalendar from 'react-big-calendar'
const localizer = BigCalendar.momentLocalizer(moment)
require('react-big-calendar/lib/css/react-big-calendar.css')

const Container = styled.div`
  min-height: 75vh;
  padding: 10px 20px;
`;

const CALENDAR_ID = `${process.env.REACT_APP_CALENDAR_ID}`
const API_KEY = `${process.env.REACT_APP_API_KEY}`
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`


class Schedule extends React.PureComponent {

  constructor () {
    super()
    this.state = {
      events: []
    }
  }

  getEvents () {
    axios
      .get(url)
      .then(resp => {
        const events = []
        // eslint-disable-next-line
        resp.data.items.map((event) => {
          events.push({
            start: new Date(event.start.date || event.start.dateTime),
            end: new Date(event.end.date || event.end.dateTime),
            title: event.summary,
            allDay: event.start.date ? true : false,
          })
        })
        this.setState({events})
      })
      .catch((error) =>{
        console.log(error)
      })
  }

  componentDidMount () {
    this.getEvents()
  }

  render () {
    console.log(this.state.events)
    return(
      <div>
        <Header active="schedule" />
        <Container>
          <BigCalendar
            style={{ height: '620px' }}
            localizer={localizer}
            events={this.state.events}
          />
        </Container>
        <Footer profile={{
          name: 'Rumah Belajar Sahaja',
          address: 'Jalan Ciroyom, Bandung',
          phone: '081081081081',
          email: 'sahaja@rumbel.com',
        }}
        />
      </div>
    )  
  }
}

export default Schedule
