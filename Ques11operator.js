// // 1. what will the code below output?

alert(alert(1) || 2 || alert(3));

// // 2. what will this code show?

alert(alert(1) && alert(2));

// // 4. what will the result be?

alert(null || 2 && 3 || 4);

// // 5. what will the results of the expressions be inside if(---)?

if (-1 || 0) alert('first');
if (-1 && 0) alert('second');
if (null || -1 && 1) alert('third');
