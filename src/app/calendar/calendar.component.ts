import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import multiMonthPlugin from '@fullcalendar/multimonth';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarOptions?: CalendarOptions

  ngOnInit() {
    forwardRef(() => Calendar)

    this.calendarOptions = {
      themeSystem: 'bootstrap5',
      initialView: 'dayGridMonth',
      // aspectRatio: 2,
      plugins: [interactionPlugin, dayGridPlugin, multiMonthPlugin, timeGridPlugin],
      selectable: true,
      headerToolbar: {
        left: 'prev,next today addEventButton',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,multiMonthYear',
      },
      buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        year: 'Year'
      },
      customButtons: {
        addEventButton: {
          text: 'Add Event',
          click: function() {
            addEvent()
          }
        }
      },
      dateClick: function(info) {
        console.log(info.dateStr)
        // change the day's background color just for fun
        info.dayEl.style.backgroundColor = 'red';
      }
    }
  }
}


function addEvent() {
  alert('button clicked')
}

