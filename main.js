let sideAInput = prompt("What is the length of side A")
let sideBInput = prompt("What is the length of side B")
let heightInput = prompt("What is the Height")

let sideA = parseFloat(sideAInput)
let sideB = parseFloat(sideBInput)
let height = parseFloat(heightInput)


console.log (sideA)
console.log (sideB)
console.log (height)

let sum = sideA + sideB

let average = sum / 2

//Step 4: Multipy average of the sides by the height!
let area = average * height

//Step 5: Output
document.write(`
    <details>
        <summary>
            If the length of side a equals ${sideA},
            the length of side b equals ${sideB}
            and the height equals ${height}
            then the area of the triangle is...
        </summary

        <h3>${area}<h3>

    </details>

`



)