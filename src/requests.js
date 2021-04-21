var fetch = require("node-fetch");
function getDirectReports(tsoId) {
  fetch(
    `https://employee-search-api.apps.cf.humana.local/employees?tsoid=${tsoId}`
  )
    .then((res) => res.json())
    .then((res) => {
      res[0].directReports.forEach((employee) => {
        console.log(employee)
        console.log(getDirectReports(employee.tsoId))
      });
    })
    .catch((e) => {
      console.warn(`no direct reports for ${tsoId}`);
      console.warn("Error", e)
    });
}

getDirectReports("AXM1131");
// var fetch = require("node-fetch");

// function getDirectReports(tsoId) {
// fetch(`https://employee-search-api.apps.cf.humana.local/employees?tsoid=${tsoId}`)
// .then((res) =>
// res.json())
// .then((res) => {
//  res[0].directReports.forEach((el) => {
// getDirectReports(el.tsoId)
//  })
// })
// .catch(() => {
//  console.warn(`no direct reports for ${tsoId}`)
// })
// }

// getDirectReports("AXM1131")

// function getJsonResult(tsoId) {
//   fetch(
//     `https://employee-search-api.apps.cf.humana.local/employees?tsoid=${tsoId}`
//   )
//     .then((res) => res.json())
//     .then((res) => console.log(res[0]))
//     .catch((e) => console.warn("ERROR MESSAGE", e));
// }
// getJsonResult("AXM1131");
