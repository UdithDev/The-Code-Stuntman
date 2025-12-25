function sumForLoop(arr: number[]): number {
  let s = 0;
  for (let i = 0; i < arr.length; i++) s += arr[i];
  return s;
}

function sumReduce(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}

const N = 400_000;
const data = Array.from({ length: N }, (_, i) => i % 10);

// Warm-up
sumForLoop(data);
sumReduce(data);

console.log(`Benchmarking with ${N.toLocaleString()} numbers...`);

console.time("for-loop");
const a = sumForLoop(data);
console.timeEnd("for-loop");

console.time("reduce");
const b = sumReduce(data);
console.timeEnd("reduce");

console.log({ a, b, same: a === b });

console.log("\nTakeaway: performance is contextual - always measure.");
