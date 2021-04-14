var fetch = require("node-fetch");
let emails = [];
function getDirectReports(tsoId) {
  let directReports = [];
  fetch(
    `https://employee-search-api.apps.cf.humana.local/employees?tsoid=${tsoId}`
  )
    .then(res => res.json())
    .then(res => {
      res[0].directReports.forEach(employee => {
        console.log(employee.name);
        getDirectReports(employee.tsoId);
      });
    });
}
getDirectReports("JMM3559")
