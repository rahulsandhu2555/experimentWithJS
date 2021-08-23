var year = 2016;
var month = 2;
var dayCount;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
        break;
    case 2:
        if (((year % 4 == 0) && !(year % 100 == 0))
            || (year % 400 == 0))
            dayCount = 29;
        else
            dayCount = 28;
        break;
    default:
        dayCount = -1; // invalid month
}
// If the month is 1, 3,5, 7, 8, 10, or 12, the number of days in a month is 31.
// If the month is 4, 6, 9, or 11, the number of days in that month is 30.
// If the month is 2, and the year is not the leap year, the number of days is 28. If the year is the leap year, the number of days is 29.
console.log(dayCount); // 29