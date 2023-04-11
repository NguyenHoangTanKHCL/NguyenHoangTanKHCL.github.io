function max(a, b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}




function knapsack(n, weights, values, capacity){
    let dp = new Array(n+1);
    for(let i = 0; i < n+1; i++){
        dp[i] = new Array(capacity+1);
        dp[i].fill(0);
    }
    for(let i = 1; i < n+1; i++){
        for(let j = 1; j < capacity+1; j++){
            if(weights[i-1] <= j){
                dp[i][j] = max(dp[i-1][j], values[i-1] + dp[i-1][j-weights[i-1]]);
            }
            else{
                dp[i][j] = dp[i-1][j];
            }
        }
    }


    getItems(capacity, dp[n][capacity], dp, values, weights, n)
    return dp[n][capacity];
}

function validate(n, weights, values, capacity){
    if(n && weights && values && capacity){
        return true;
    }
    return false;
}

function getAnswer(){
    let n = document.getElementById("items").value;
    let weights = document.getElementById("weight").value;
    let values = document.getElementById("values").value;
    let capacity = document.getElementById("capacity").value;

    if(validate(n, weights, values, capacity)){
        n = parseInt(n);
        capacity = parseInt(capacity);
        weights = weights.split(" ");
        for(let i = 0; i < n; i++){
            weights[i] = parseInt(weights[i]);
        }
        values = values.split(" ");
        for(let i = 0; i < n; i++){
            values[i] = parseInt(values[i]);
        }
        let result = knapsack(n, weights, values, capacity);
    
        let ans = document.getElementById("res");
        ans.value = result;
        
    }
    else{
        let ans = document.getElementById("res");
        ans.value = "Please enter all the fields"
       
    }
}



function getItems(capacity, ans, dp, benefits, weights, n){

    let temp_ans = ans;
    let w = capacity;
    let s = "Item Number: ";

    for (let i = n; i > 0; i--){
        if(temp_ans == dp[i-1][w]){
            continue;
        }
        else{
            s += i + " ";
            w -= weights[i-1];
            temp_ans -= benefits[i-1];
        }
    }
    document.getElementById("allItems").value = s;
}

document.getElementById("result").onclick = getAnswer;

var menu = document.querySelector("header ul");
var btn = document.querySelector("#HamburgerMenu");
var links = document.querySelectorAll("header ul li");
btn.onclick = function(){
    btn.classList.toggle("active");
    menu.classList.toggle("open");
}

links.forEach(elem => {
    elem.addEventListener("click", ()=>{
        btn.classList.toggle("active");
        menu.classList.toggle("open");
    })
})