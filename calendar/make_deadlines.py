# import libraries for icalendar
from icalendar import Calendar, Event
from datetime import datetime
import csv

def gen_event(comicNo, name, date, uid):
    # create event
    event = Event()
    # set event properties
    event['summary'] = f"(Cartoons) C{comicNo} - {name}"
    event.add('dtstart', date)
    event['dtend'] = event['dtstart']
    event['uid'] = uid
    # return event
    return event

cal = Calendar()

# read deadlines csv file
deadlines_file = open('deadlines.csv', 'r')
deadlines_reader = csv.reader(deadlines_file, delimiter='\t')
# get headers
headers = next(deadlines_reader)
    
# for each row in csv file
for row in deadlines_reader:
    # row = Comic #, sketch due, rough draft due, final artwork due,
    # production night, publishing date
    # iterate through each date
    for i in range(1,6):
        try:
            event = gen_event(
                        row[0],
                        headers[i],
                        datetime.strptime(f"{row[i]} 12:00:00", '%d/%m/%Y %H:%M:%S'),
                        f"d{row[0]}_{i}",
                    )
            cal.add_component(event)
        except:
            pass

# convert calendar to icalendar format
cal_str = cal.to_ical()
# export to .ics file
with open('deadlines.ics', 'wb') as f:
    f.write(cal_str)
f.close()

