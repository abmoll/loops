

// time of the day 12 hour format
console.log("<pre>");
for (var hour=1; hour < 12; hour++) {
  for (var min=0; min < 60; min++) {
    for (var sec=0; sec < 60; sec++) {
      console.log(hour + ':' + min + ':' + sec + "AM");
    }
  }
}
console.log("12:00:00 PM")

for (var hour=1; hour < 12; hour++) {
  for (var min=0; min < 60; min++) {
    for (var sec=0; sec < 60; sec++) {
      console.log(hour + ':' + min + ':' + sec + "PM");
    }
  }
}
console.log("</pre>");
