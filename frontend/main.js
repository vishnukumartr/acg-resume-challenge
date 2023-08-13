window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitedCount();
})

const localFunctionAppUrl = 'http://localhost:7071/api/GetResumeViewCounter';

const getVisitedCount = () => {
    let count = 30;
    fetch(localFunctionAppUrl)
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