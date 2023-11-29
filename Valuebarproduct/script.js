const valueBox = document.getElementById("value-box");
const myVal = document.getElementById("values-return");

function addTask(){
        if(valueBox.value === ''){
        alert("Enter Value");
        }
    
    else{
        let X = document.createElement("h3");
        X.innerHTML = percentage(valueBox.value, 0.25);
        myVal.appendChild(X);

        };
        valueBox.value = "";
};

function addTask2(){
        if
        (valueBox.value === ''){
        alert("enter Value");
        }
        else {
        let X = document.createElement("h3");
        X.innerHTML = percentage(valueBox.value, 0.50);
        myVal.appendChild(X);
        }
        valueBox.value = "";
};


function percentage(value, percent){ 
        return value * percent;
        
}


