window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitedCount();
})

const localFunctionAppUrl = 'http://localhost:7071/api/GetResumeViewCounter';
const azureFunctionAppUrl = 'https://az204functionappaug.azurewebsites.net/api/GetResumeViewCounter?code=R94iCIJSCspsj8K9o9acyeVskuSarVDaDC5EKbJdFrmbAzFux8Qu6Q==';

const getVisitedCount = () => {
    let count = 30;
    fetch(azureFunctionAppUrl)
    .then(response => {
        return response.json()
    }).then(response =>{
        console.log("this website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
});
    return count;
}