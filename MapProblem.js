// 2a -- Dice roll simultation
// Random number - 1 to 6 on each roll and map it to a dictionary(for 10 times)
var mapDiceRollsWithTurn = new Map();
var numberOfDiceRolls = 0;
var flag = true;
while(flag == true)
{
    numberOfDiceRolls++;
    var diceRandomResult = (Math.floor((Math.random()*100) % 6)) + 1;
    mapDiceRollsWithTurn.set(numberOfDiceRolls, diceRandomResult);
    // Map to store the count result with the dice turn
    var resultCount = new Map();
    for (var i = 1; i <= 6; i++)
    {
        // Converting the map dictionary to array
        var diceRollResult = Array.from(mapDiceRollsWithTurn.values());
        var diceCount = 0;
        // Checking the dice output count
        for(let result of diceRollResult)
        {
            if(result == i)
            diceCount++;
        }
        // Mapping the dice outcome count with its outcome
        resultCount.set(i, diceCount);
    }
    // Loop to check for the end condition
    for (var i = 1; i <= 6; i++)
    {
        // End condition as a dice outcome count be greater then 10
        if(resultCount.get(i) >= 10)
        {
            console.log(i + " has been rolled " + resultCount.get(i) + " times.");
            // Updating the flag to break the loop
            flag = false;
            break;
        }
    }
    // Printing the result of the dice roll count
    if(flag == false)
    {
        console.log("Final result after continuous rolls --> ");
        for(var element of resultCount) 
        console.log(element); 
    }
}

// 2b -- To generate birthDate As MM-YYYY for 50 people
// Then group the result by month and store it in a map
var personToBirthMonth = new Map();
// Loop to generate birthDate As MM-YYYY randomly for 50 people
for(var i = 1; i<= 50; i++)
{
    var monthRandomResult = (Math.floor((Math.random()*1000) % 12)) + 1;
    personToBirthMonth.set(i, monthRandomResult+"-"+1992);
}
// Store the grouped result in a map
var groupedResults = new Map();
for(var i = 1; i<= 12; i++)
{
    var birthDateAsDDYYYY = i+"-"+1992;
    // Array to store person number for same birthDate As MM-YYYY
    var groupRecordOfPersonOfSameBirthday = new Array();
    for(var j = 1; j<= 50; j++)
    {
        if(personToBirthMonth.get(j) == birthDateAsDDYYYY)
        groupRecordOfPersonOfSameBirthday.push(j);
    }
    // Storing in the map
    groupedResults.set(birthDateAsDDYYYY, groupRecordOfPersonOfSameBirthday);
}
// Printing the result
console.log("Grouped result for birthDate As MM-YYYY and person number -->");
console.log(groupedResults);