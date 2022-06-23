# Formatting Date
This example will combind showing date and format date using [moment.js].

> Note: `formating date` related by GraphQL directives.

For example query as showing date type:
```sh
query getMySchedule {
  getMySchedule {
    id
    eventName
    startDate(format: "YYYY / MM / DD")
    endDate
  }
}
```
Result:
```sh
"getMySchedule": [
  {
    "id": "1",
    "eventName": "Watch movie at home",
    "startDate": "2022 / 01 / 01",
    "endDate": "2022-01-01T16:30:00+07:00"
  },
  {
    "id": "2",
    "eventName": "Play game console",
    "startDate": "2022 / 01 / 02",
    "endDate": "2022-01-02T18:00:00+07:00"
  }
]
```

[Moment.js]: <https://momentjs.com/docs>