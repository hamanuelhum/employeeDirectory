var fetch = require("node-fetch");


function getDirectReports(tsoId) {
    let directReports = [];
fetch(
  `https://employee-search-api.apps.cf.humana.local/employees?tsoid=${tsoId}`
)
  .then((res) => res.json())
  .then((res) => {
    res[0].directReports.forEach((el) => {
      directReports.push({
        name: el.name,
        email: el.email,
        tsoId: el.tsoId
      });
    });
    console.log(directReports);
  })
  .then(() => {
    checkDirectReports(directReports);
  })
  .catch(() => {
    console.warn("no direct reports");
  });
}

function checkDirectReports(directReports) {
  directReports.forEach((el) => {
    fetch(
      `https://employee-search-api.apps.cf.humana.local/employees?tsoid=${el.tsoId}`
    )
      .then((res) => res.json())
      .then((res) => {
//produces an array that holds associates that have direct reports 
//manager = someone who has direct reports beneath them
//[cory, justin]
       var peoplewithdirectreportsArray =  res.filter(el => {//TODO:
            el[0].directReports
        })

        directReports.push(otherfolkes)
//if this array is not nil
    if(peoplewithdirectreportsArray)
    //for each person who has a direct repot puash their information into our direct report array
        peoplewithdirectreportsArray.forEach(
            directReports.push(
               { manager.name,
                manager.email,
                manager.tsoId
               }
            )
            //take their tsoid and feed it to our top function//TODO:
            getdirectReports(manager.tsoId)
        )else {
            console.log("process is complete you have all the emails")//TODO:
        }

        // if (res[0].directReports) {
        //   console.log(
        //     `need to fetch again and find other direct reports for ${el.name}`
        //   );
        //   directReports.push({
        //     name: el.name,
        //     email: el.email,
        //     tsoId: el.tsoId
        //   });
        // } else {
        //   console.log(`${el.name} doesnt have direct reports`);
        // }
      });
  });
}
getDirectReports("JMM3599");