// get element inner text using id
function getInnerTextById(id){
    const text = document.getElementById(id).innerText
    return text
}


// function for to get button by id and make btn disable
function getBtnClickResultById(id){
    document.getElementById(id).addEventListener('click', function(event){
        alert('Board update successfully')
        disabled = document.getElementById(id).disabled = true;

       // to decrease the value of task assigned
        let taskAssignedValue = document.getElementById('task-assigned');
        const convertedTaskAssignedValue = parseFloat(taskAssignedValue.innerText);
        const output = convertedTaskAssignedValue - 1;
        taskAssignedValue.innerText = output;

        // to increase the value of the number of the navbar area
        let navbarCount = document.getElementById('navbar-count');
        const convertedNavbarCount = parseFloat(navbarCount.innerText);
        
        const navbarOutput = convertedNavbarCount + 1;
        navbarCount.innerText = navbarOutput
    })
}
