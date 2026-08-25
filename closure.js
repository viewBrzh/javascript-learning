function counter() {
  let count = 0;

  return function () {
    count++;
    if (count === 3) {
      return 'he hee';
    }
    return count;
  };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3
console.log(increment()); // 4