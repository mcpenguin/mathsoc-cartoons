# import libraries for icalendar
from icalendar import Calendar, Event
import pytz
from datetime import datetime, timedelta
import os
from pathlib import Path

import json
import csv

def convert_week_to_day(week):
    # return floor(week * 7)
    return int(round(week * 7))

def gen_event(weeks, comicNo, comicPubDate, summary, uid):
    # create event
    event = Event()
    # set event properties
    event['summary'] = f"(Cartoons) C{comicNo} - {summary}"
    event.add('dtstart', comicPubDate + timedelta(days=convert_week_to_day(weeks)))
    event['dtend'] = event['dtstart']
    # event['description'] = f"Comic {comicNo} - {name}"
    event['uid'] = uid
    # return event
    return event

cal = Calendar()

# import comic reminders json file
comic_reminders_file = open('comic_reminders.json', 'r')
comic_reminders = json.load(comic_reminders_file)

# read deadlines csv file
deadlines_file = open('deadlines.csv', 'r')
deadlines_reader = csv.reader(deadlines_file, delimiter='\t')
# skip first line
next(deadlines_reader)
    
# for each row in csv file
for row in deadlines_reader:
    # row = Comic #, sketch due, rough draft due, final artwork due,
    # production night, publishing date
    count = 0
    # iterate through each comic reminder
    for comic_reminder in comic_reminders:
        try:
            # generate event
            event = gen_event(
                float(comic_reminder[0]),
                row[0],
                datetime.strptime(row[-1], '%d/%m/%Y'),
                comic_reminder[1],
                f"{row[0]}_{count}"
            )
            count += 1
            # add event to calendar
            cal.add_component(event)
        except ValueError:
            pass

# convert calendar to icalendar format
cal_str = cal.to_ical()
# export to .ics file
with open('comic_reminders.ics', 'wb') as f:
    f.write(cal_str)
f.close()
