function openworld() {
  alert("Met je open world...")
}

function calculate() {
    var lovePercentage = 0;
    const hateNames = ["danique", "martijn", "jitse",];
        var name1 = document.getElementById("name1").value;
          name1 = name1.toLowerCase();
          name1 = name1.replace(/\s+/g,"");
        var name2 = document.getElementById("name2").value;
          name2 = name2.toLowerCase();
          name2 = name2.replace(/\s+/g,"");
        if(name1.length == 0){
          document.getElementById("result").innerHTML = ("Wat ben je, asexueel?")
          return;
        }
        if(name2.length == 0){
          document.getElementById("result").innerHTML = ("Wat ben je, asexueel?")
          return;
        }
    for (let i = 0; i < hateNames.length; i++){
      if (name1 == hateNames[i]){
        lovePercentage = -100;
          document.getElementById("result").innerHTML = (lovePercentage + "% love")
          return;
        }
      else if(name2 == hateNames[i]){
        lovePercentage = -100;
          document.getElementById("result").innerHTML = (lovePercentage + "% love")
          return;
      }
    }
    if(name1 == name2){
        lovePercentage = 100;
        document.getElementById("result").innerHTML = (lovePercentage + "% love")
        return;
    }
        var Names = name1 + name2
        var valueNames = 0;
        for(let i = 0; i<Names.length; i++){
            valueNames += Names.charCodeAt(i);
        }
        lovePercentage = (valueNames % 101);
          document.getElementById("result").innerHTML = (lovePercentage + "% love")
          return;
}

//  hallo menneer 