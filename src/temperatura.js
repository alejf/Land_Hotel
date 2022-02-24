

async function showTemp() {
    var url = "https://www.7timer.info/bin/api.pl?lon=-96.704&lat=17.017&product=civillight&output=json";
    const response = await fetch(url);


    const data2 = await response.json();
    console.log(data2);
    
  }
  
  showTemp();