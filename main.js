function car() {
    let car1 = {
        manufacturer: "Toyota",
        model: "Camry",
        year: 2022,
        averageSpeed: 60
    }
    let car2 = {
        manufacturer: "Daihatsu",
        model: "Charade",
        year: 1978,
        averageSpeed: 113
    }

    function displayCarInfo(car) {
        alert(`Car Information:\nManufacturer: ${car.manufacturer}\nModel: ${car.model}\nYear: ${car.year}\nAverage Speed: ${car.averageSpeed} km/h`)
    }

    function calculateTravelTimeWithBreaks(car, distance) {
        let drivingTimeWithoutBreaks = distance / car.averageSpeed
        let numberOfBreaks = Math.floor(drivingTimeWithoutBreaks / 4)
        let breakTime = numberOfBreaks * 1
        let totalTravelTime = drivingTimeWithoutBreaks + breakTime
        return totalTravelTime
    }

    function displayTravelTimeWithBreaks(car, distance) {
        let totalTravelTime = calculateTravelTimeWithBreaks(car, distance)
        alert(`Total travel time with breaks: ${totalTravelTime} hours`)
    }
    displayCarInfo(car1)

    let distance = parseInt(prompt("What distance you need to ride(KM)"))
    displayTravelTimeWithBreaks(car1, distance)

    displayCarInfo(car2)
    distance = parseInt(prompt("What distance you need to ride(KM)"))
    displayTravelTimeWithBreaks(car2, distance)
}

function fraction() {
    const fraction1 = {
        numerator: 3,
        denominator: 4
    }

    const fraction2 = {
        numerator: 2,
        denominator: 5
    }

    function addFractions(fraction1, fraction2) {
        let result = {
            numerator: fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator,
            denominator: fraction1.denominator * fraction2.denominator
        }
        return simplifyFraction(result)
    }

    function subtractFractions(fraction1, fraction2) {
        let result = {
            numerator: fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator,
            denominator: fraction1.denominator * fraction2.denominator
        }
        return simplifyFraction(result)
    }

    function multiplyFractions(fraction1, fraction2) {
        let result = {
            numerator: fraction1.numerator * fraction2.numerator,
            denominator: fraction1.denominator * fraction2.denominator
        }
        return simplifyFraction(result)
    }

    function divideFractions(fraction1, fraction2) {
        let result = {
            numerator: fraction1.numerator * fraction2.denominator,
            denominator: fraction1.denominator * fraction2.numerator
        }
        return simplifyFraction(result)
    }

    function simplifyFraction(fraction) {
        let gcd = findGCD(fraction.numerator, fraction.denominator)
        return {
            numerator: fraction.numerator / gcd,
            denominator: fraction.denominator / gcd
        }
    }

    function findGCD(a, b) {
        return b === 0 ? a : findGCD(b, a % b)
    }

    alert(`First fraction:${fraction1.numerator}/${fraction1.denominator}\nSecond fraction:${fraction2.numerator}/${fraction2.denominator}`)

    let additionResult = addFractions(fraction1, fraction2)
    alert("Addition: " + additionResult.numerator + "/" + additionResult.denominator)

    let subtractionResult = subtractFractions(fraction1, fraction2)
    alert("Subtraction: " + subtractionResult.numerator + "/" + subtractionResult.denominator)

    let multiplicationResult = multiplyFractions(fraction1, fraction2)
    alert("Multiplication: " + multiplicationResult.numerator + "/" + multiplicationResult.denominator)

    let divisionResult = divideFractions(fraction1, fraction2)
    alert("Division: " + divisionResult.numerator + "/" + divisionResult.denominator)



}

function time() {
    let time = {
        hours: 20,
        minutes: 30,
        seconds: 45
    }

    function displayTime() {
        alert(`${formatNumber(time.hours)}:${formatNumber(time.minutes)}:${formatNumber(time.seconds)}`)
    }

    function formatNumber(number) {
        return number < 10 ? `0${number}` : `${number}`
    }

    function addSeconds(seconds) {
        time.seconds += seconds
        normalizeTime()
        displayTime()
    }

    function addMinutes(minutes) {
        time.minutes += minutes
        normalizeTime()
        displayTime()
    }

    function addHours(hours) {
        time.hours += hours
        normalizeTime()
        displayTime()
    }

    function normalizeTime() {
        while (time.seconds >= 60) {
            time.seconds -= 60
            time.minutes += 1
        }

        while (time.minutes >= 60) {
            time.minutes -= 60
            time.hours += 1
        }

        while (time.hours >= 24) {
            time.hours -= 24
        }
    }

    displayTime()
    addSeconds(30)
    addMinutes(30)
    addHours(4)

}