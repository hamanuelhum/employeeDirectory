var fetch = require('node-fetch');
let directReports = []
 
fetch("https://employee-search-api.apps.cf.humana.local/employees?tsoid=JMM3599")
.then((res) => res.json())
.then((res) => {
 res[0].directReports.forEach((el) => {
 directReports.push(
 {
 "name": el.name,
 "email": el.email,
 "tsoId": el.tsoId
 }
 )
 })
 console.log(directReports)
})
.then(() => {
 checkDirectReports(directReports)
})
.catch(() => {
 console.warn("no direct reports")
})
 
function checkDirectReports(directReports){
directReports.forEach((el) => {
 fetch(`https://employee-search-api.apps.cf.humana.local/employees?tsoid=${el.tsoId}`)
 .then((res) => res.json())
 .then((res) =>{
 if(res[0].directReports){
 console.log(`need to fetch again and find other direct reports for ${el.name}`);
 }
 else {
 console.log(`${el.name} doesnt have direct reports`);
 }
 }) 
})
}