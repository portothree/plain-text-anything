# Play text \*anything

Track or manage anything with plain text files.

This repository currently aims to leverage [ledger-cli](https://www.ledger-cli.org/) to manage accounting and implements a similar solution to track calories and workout sessions.

## Workout

```
k exercise Chest:Bench Press

2021-01-01	Gold's Gym
	Chest:Bench Press	50	12
	Chest:Bench Press	50	12
	Chest:Bench Press	50	12
	Chest:Bench Press	50	12
```

-   `k exercise Chest:Bench Press`: creates a exercise entry names `Chest:Bench Press`, the `:` here is just used to prefix the exercise with the muscle group.
-   `2021-01-01`: Time stamp
-   `Gold's Gym`: Optional description/memo
-   `Chest:Bech Press 50 12`: Each line represents a set, `Chest:Bench Press` the exercise name, `50` the weight and `12` the reps

`k` is a special keyword to create a type, in this case `exercise`, it will be useful for later reports
