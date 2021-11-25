var result = document.querySelector('#tempConverted')
var celsius = document.getElementById('celsius')
var fahrenheit = document.getElementById('fahrenheit')

function converTemp(){

    if(celsius.value !== ''){
        tempConverted = (celsius.value * 1.8) + 32
        tempConverted.toFixed(1)
        result.innerText = `O valor convertido de ${celsius.value}°C é ${tempConverted}°F`
        celsius.value = ''
    } else if(fahrenheit.value !== ''){
        tempConverted = (fahrenheit.value - 32) * 5/9
        tempConverted = tempConverted.toFixed(1)
        result.innerText = `O valor convertido de ${fahrenheit.value}°F é ${tempConverted}°C`
        fahrenheit.value = ''
    }


}