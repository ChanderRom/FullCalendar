import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import multiMonthPlugin from '@fullcalendar/multimonth';
import timeGridPlugin from '@fullcalendar/timegrid';


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
      plugins: [dayGridPlugin, multiMonthPlugin, timeGridPlugin],
      editable: true,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,multiMonthYear',
      },
      buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        year: 'Year'
      }
    }
  }
}
