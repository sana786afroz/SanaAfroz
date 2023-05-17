// : JavaScript Closures
// Instructions:
// 1. Create a JavaScript function called counter that returns another function.
// 2. The returned function should increment a counter variable defined in counter
// function by 1 each time it is called.
// 3. Implement the counter function using closures.
// 4. Create two instances of the counter function: counter1 and counter2.
// 5. Call counter1 three times and display the result after each call.
// 6. Call counter2 five times and display the result after each call.

function counter() {
    let count = 0;
  
    function increment() {
      count++;
      console.log(count);
    }
  
    return increment;
  }
  const counter1 = counter();
  const counter2= counter()
  const counter3= counter()
counter1(); 
counter1(); 
counter1(); 
counter2(); 
counter2(); 
counter2(); 
counter3();
counter3();




// const counter2 = counter();
// counter1(); 
// counter2();