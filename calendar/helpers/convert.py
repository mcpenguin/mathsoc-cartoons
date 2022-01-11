import json
# take todo.txt and convert it into respective json file

filein = open('./todo.txt', 'r')
# init list of events
eventList = []
# for each line in txt file, split based on colon
for line in filein:
    line = line.split(': ')
    # line = [weeks, desc]
    # convert weeks into num of weeks before publishing by
    # adding -6 to each value, rounding to 1dp
    line[0] = round(float(line[0]) - 1.5, 1)
    # remove newline from line[1]
    line[1] = line[1].strip().title()
    # add to list of events
    eventList.append(line)

# write to json file
with open('../comic_reminders.json', 'w') as outfile:
    json.dump(eventList, outfile)

outfile.close()

