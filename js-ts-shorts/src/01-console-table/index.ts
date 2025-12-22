type User={id: number; name: string; country: string; bugsFixed: number};

const users: User[]=[
    {id: 101, name:"Ava", country:"UK", bugsFixed:12},
    {id: 102, name:"Ken", country:"US", bugsFixed:7},
    {id: 103, name:"Mina", country:"Japan", bugsFixed:19},
    {id: 104, name:"Noah", country:"DE", bugsFixed:9},
    
];

console.log("Messy log:");
console.log(users);

console.log("\nReadable log (console.table):");
console.table(users);

console.log("\nPro tip: table with selected columns:");
console.table(users,["name", "bugsFixed"]);