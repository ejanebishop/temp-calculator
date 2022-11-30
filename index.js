function calc(){
    const myValue = document.getElementById("Tvalue").value
    const fromVal = document.getElementById("from").value
    const toVal = document.getElementById("to").value
    
    console.log(myValue, fromVal, toVal)

    if(fromVal == "c" && toVal == "f"){
        const calc = Number(myValue) * 1.8 + 32
        document.getElementById("totVal").value = calc
    } 
    else if (fromVal == "f" && toVal == "c"){
        const calc = Number(myValue) / 1.8 - 32
        document.getElementById("totVal").value = calc
    }
    else if (fromVal == "c" && toVal == "k"){
        const calc = Number(myValue) + 273.15
        document.getElementById("totVal").value = calc
    }
    else if (fromVal == "k" && toVal == "c"){
        const calc = Number(myValue) - 273.15
        document.getElementById("totVal").value = calc
    }
    else if (fromVal == "k" && toVal == "f"){
        const calc = (Number(myValue) - 273.15) * 9/5 + 32
        document.getElementById("totVal").value = calc
    }
    else if (fromVal == "f" && toVal == "k"){
        const calc = (Number(myValue) - 32) * 5/9 + 273.15
        document.getElementById("totVal").value = calc
    }
    else {
        document.getElementById("totVal").value = myValue
    }

}
