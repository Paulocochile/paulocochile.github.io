function changeMenu() {
    // get the clock
    var myClock = document.getElementById('topmenu');

    // get the current value of the clock's display property
    var displaySetting = myClock.style.display;

    // now toggle the clock , depending on current state
    if (displaySetting == 'block') {
      // clock is visible. hide it
      myClock.style.display = 'none';

    }
    else {
      
      myClock.style.display = 'block';

    }
  }