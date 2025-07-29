const months = ['Jan','Feb','Mar','Apr','May','Jun','July']

const capitalMonths = months.forEach((i, month) => {
    console.log(i+1,month);
    return i++;
})

console.log('###########################################');


months.map((i, month) => {
    console.log(i+1,month);
    return i++;
})

console.log('###########################################');

const filterMonths = months.filter((month) => {
    console.log(month);
    
    // console.log(month.length <= 3);
    return month.length <= 3;
})