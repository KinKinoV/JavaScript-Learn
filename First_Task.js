/*Task 1:
    You have two variables: a = 3 and b = 9.
    Switch their values and result should be
    shown in the console.
*/

function switchValue()
{
    var a = 3;
    var b = 9;
    console.log(`Before switcheroo:\na = ${a}, b = ${b}`)
    var temp = a;
    a = b;
    b = temp;

    console.log(`After switcheroo:\na = ${a}, b = ${b}`);
}

switchValue();