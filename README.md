# MathSoc Cartoons Repository

This repository houses any scripts used for MathSoc Cartoons.

## Setting up

1. Clone the repository on your local device.

2. Make sure you have Python installed.

3. Go to `calendar` and run `pip install -r requirements.txt`. This installs the necessary
Python libraries and dependencies.

4. Fill in `deadlines.csv` with the deadlines for the comics of the current term, once the deadlines have been decided.
You can use the existing data to help format the data for the upcoming comics.
  - Ask MathNEWS for the production night dates for the term (this is when we need to submit the comics by)
  - Usually:
    - Final art is usually ~1 week before the production night
    - Rough draft is usually ~3 weeks before the production night
    - Sketch is usually ~5 weeks before the production night

5. Run `python make_calendar.py` to generate the reminders for the comics for the upcoming term, 
and `python make_deadlines.py` to generate the deadlines for the comics for the upcoming term.

6. This generates .ics files for reminders and deadlines respectively.

7. You can add these .ics files to your calendar (or the MathSoc Cartoons' calendar) to
keep track of reminders and deadlines.
