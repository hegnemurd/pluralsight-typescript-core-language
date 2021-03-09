// let junkDrawer: any[] = ["cool string", 42, true];

// let companies: Array<string> = ["Microsoft", "Google", "Amazon"];

// let primeNums: Array<number> = [7, 11, 13];

// let lastValue = primeNums.pop();

function shortenArray<T>(data: Array<T>, amountToShorten: number): Array<T> {
  return data.splice(amountToShorten, data.length);
}

let stringArray: string[] = ["Visual Basic", "C++", "TypeScript", "JavaScript"];

// shortenArray<string>(stringArray, 2);

