var fetch = require("node-fetch");

function getDirectReports(tsoId) {
  fetch(
    `https://employee-search-api.apps.cf.humana.local/employees?tsoid=${tsoId}`
  )
    .then((res) => res.json())
    .then((res) => {
      res[0].directReports.forEach((employee) => {
        console.log(employee.name)
        getDirectReports(employee.tsoId)
      });
    })
    .catch((e) => {
      console.warn(`no direct reports for ${tsoId}`);
      console.warn("Error", e)
    });

}

getDirectReports("JMM3599	");



 
