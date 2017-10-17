
var months = [{
    name: 'January',
    days: 31
},{
    name: 'February',
    days: 28
},{
    name: 'March',
    days: 31
},{
    name: 'April',
    days: 30
},{
    name: 'May',
    days: 31
},{
    name: 'June',
    days: 30
},{
    name: 'July',
    days: 31
},{
    name: 'August',
    days: 31
},{
    name: 'September',
    days: 30
},{
    name: 'October',
    days: 31
},{
    name: 'November',
    days: 30
},{
    name: 'December',
    days: 31
}];

// days of the year
console.log("<pre>");
for (var mon=0; mon < months.length; mon++) {
  for (var i=0; i < months[mon].days; i++) {
    console.log(months[mon].name + ' ' + (i+1));
  }
}
console.log("</pre>");

// time of the day
console.log("<pre>");
for (var hour=0; hour < 24; hour++) {
  for (var min=0; min < 60; min++) {
    for (var sec=0; sec < 60; sec++) {
      console.log(hour + ':' + min + ':' + sec);
    }
  }
}
console.log("</pre>");
