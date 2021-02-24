# ObservableGambling
Like to gamble? Cannot watch horse races at work? Are you a coder? Well now you can gamble with code.
Place your bets on the fastest observable today!

This program creates a virtual race where the contestants battle to GET the last endpoint.
A number of URLs are defined that the contestants request in order,
and the first contestant to finish with their requests wins.

This project was inspired by an Entelect bootcamp presenter's love for RXJS operations.
It uses [RXJS's](https://rxjs-dev.firebaseapp.com/)  ```race``` operation to create an
Observable that emits only the first event.

## Usage
This project requires Node and NPM.
```bash
# Parameters: [contestants] is a number for the number of contestants to have.
# Beware getting banned for too many requests >.<
npm i                         # Install packages
npm run build                 # Build sources
npm run start [contestants]   # Begin the race!
```

## Example
### Input
```
npm run start 4
```
### Output
```
Welcome to ObservableGambling!
Todays contestants will need to reach the following checkpoints:
 - http://google.com
 - http://github.com
 - http://takealot.com
 - http://netflix.com
 - http://npmjs.com

Gathering all 4 contestants...
Contestants gathered. Let the race begin!

Contestant #2 reached http://google.com!
Contestant #3 reached http://google.com!
Contestant #1 reached http://google.com!
Contestant #4 reached http://google.com!
Contestant #1 reached http://github.com!
Contestant #3 reached http://github.com!
Contestant #4 reached http://github.com!
Contestant #2 reached http://github.com!
Contestant #1 reached http://takealot.com!
Contestant #3 reached http://takealot.com!
Contestant #4 reached http://takealot.com!
Contestant #2 reached http://takealot.com!
Contestant #2 reached http://netflix.com!
Contestant #2 reached http://npmjs.com!

Observable #2 won the race!
I hope you enjoyed the race. That's all folks!
```
