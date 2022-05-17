Note for development: updated code for ESP32 board under following repo
https://github.com/im818/ESP32

# Roadmap for the project

## Stage 1 - MVP

### TO-DOs

1. Board

* Send live data of the putter (acceleration and angular velocity) through a websocket - DONE
* Record the acceleration of a stroke on HTTP request and send over data ad JSON - IN PROGRESS
* Develop logic to calculate metrics on-board - IN PROGRESS

2. Front End

* Proof of concept: display live acceleration on app - DONE
* Create a button that can be clicked to record a stroke - IN PROGRESS
* Fetch JSON object with data from a stroke and display as chart - IN PROGRESS

## Stage 2 - Testing and feedback gathering from industry leaders

### TO-DOs

1. Board

* Develop logic further
* Work towards a greater efficiency (memory usage, custom libraries, etc.)

2. PCB

* Develop a PCB to connect the components in a unified board

3. Case

* Design on CAD and 3D print a case for the board

4. Front End

* Create 2 views, one with summary data (i.e., a table) of a stroke, and another one to display different charts
* Polish and determine branding stuff (colour scheme, logo, name, etc.)

## Stage 3 - Public launch

### TO-DOs

1. PCB

* This needs to be a consumer-grade product, so quite a bit of work on PCB. Ideally not relying on prototyping boards.
* Add more sensors for reliability

2. Front End

* Consumer-ready, at least as good as competition, ideally better

3. Website

* For marketing and selling purposes

4. IG account

* For marketing, we can contact players for them to test our technology
