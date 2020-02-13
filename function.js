function daynames() {
    var day = document.getElementById("day").value;
    var d = new Date(day);
    var DD = d.getDate(day);
    var month = document.getElementById("month").value;
    var MM = d.getMonth(month) + 1;
    var year = document.getElementById("year").value;
    var YY = d.getFullYear(year);
    var CC = (YY - 1) / 100 + 1;
    var dayOfWeek = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    if (document.getElementById("gender").checked) {
      var gender = 'male';
    }
    else {
      var gender = 'female';
    }
    //validating months and feb month...user should not enter an invalid data if so alert them
    if (MM < 1 || MM > 12 || MM == 2 && DD > 29) {
      alert("Invalid data for the month!! please enter valid month");
    }
    // validating year
    else if (YY <= 1699 || YY >= 2020) {
      alert("Invalid year!!! Please enter a valid year");
    }
    else if (Math.ceil(dayOfWeek) == 1 && gender === 'male'); {
      document.getElementById("view").innerHTML = ("Your day name is " + maleNames[1] + " ,which means you were born on a Monday.");
    }
    if (Math.ceil(dayOfWeek) == 2 && gender === 'male') {
      document.getElementById("view").innerHTML = ("Your day name is " + maleNames[2] + " ,which means you were born on a Tuesday.");
    }
    else if (Math.ceil(dayOfWeek) == 3 && gender === 'male') {
      document.getElementById("view").innerHTML = ("Your day name is " + maleNames[3] + " ,which means you were born on a Wednesday.");
    }
    else if (Math.ceil(dayOfWeek) == 4 && gender === 'male') {
      document.getElementById("view").innerHTML = ("Your day name is " + maleNames[4] + " ,which means you were born on a Thursay.");
    }
    else if (Math.ceil(dayOfWeek) == 5 && gender === 'male') {
      document.getElementById("view").innerHTML = ("Your day name is " + maleNames[5] + " ,which means you were born on a Friday.");
    }
    else if (Math.ceil(dayOfWeek) == 6 && gender === 'male') {
      document.getElementById("view").innerHTML = ("Your day name is " + maleNames[6] + " ,which means you were born on a Saturday.");
    }
    else if (Math.ceil(dayOfWeek) == 0 && gender === 'male') {
      document.getElementById("view").innerHTML = ("Your day name is " + maleNames[0] + " ,which means you were born on a Sunday.");
    }
    else if (Math.ceil(dayOfWeek) == 1 && gender === 'female') {
      document.getElementById("view").innerHTML = ("Your day name is " + femaleNames[1] + " ,which means you were born on a Monday.");
    }
    else if (Math.ceil(dayOfWeek) == 2 && gender === 'female') {
      document.getElementById("view").innerHTML = ("Your day name is " + femaleNames[2] + " ,which means you were born on a Tuesday.");
    }
    else if (Math.ceil(dayOfWeek) == 3 && gender === 'female') {
      document.getElementById("view").innerHTML = ("Your day name is " + femaleNames[3] + " ,which means you were born on a Wednesday.");
    }
    else if (Math.ceil(dayOfWeek) == 4 && gender === 'female') {
      document.getElementById("view").innerHTML = ("Your day name is " + femaleNames[4] + " ,which means you were born on a Thursay.");
    }
    else if (Math.ceil(dayOfWeek) == 5 && gender === 'female') {
      document.getElementById("view").innerHTML = ("Your day name is " + femaleNames[5] + " ,which means you were born on a Friday.");
    }
    else if (Math.ceil(dayOfWeek) == 6 && gender === 'female') {
      document.getElementById("view").innerHTML = ("Your day name is " + femaleNames[6] + " ,which means you were born on a Saturday.");
    }
    else if (Math.ceil(dayOfWeek) == 0 && gender === 'female') {
      document.getElementById("view").innerHTML = ("Your day name is " + femaleNames[0] + " ,which means you were born on a Sunday.");
    }
    else {
      alert("Oops!!! Something went wrong! Please try again");
    }
  } // end of the function