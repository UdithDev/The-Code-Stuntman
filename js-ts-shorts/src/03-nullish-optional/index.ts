type ApiUser={
    id: string;
    profile?: { socials?: {twitter? : string} };

};

const u1: ApiUser={id: "u1", profile:{socials: { twitter: "@real_dev" } } };
const u2: ApiUser={id: "u2"}; //missing profile/socials


function getTwitterHandle(u: ApiUser): string{
    //without ?. this can crash when   profile/socials is missing 
    return u.profile?. socials?.twitter ?? "(no twitter)";
}

console.group("Optional chaining demo");
console.log("u1:", getTwitterHandle(u1));
console.log("u2:", getTwitterHandle(u2));
console.groupEnd();

console.log("\nBonus: ?? is NOT the same as || ");
const views=0;
console.log("views || 100 ->", views || 100); //0 becoms 100 (maybe wrong)
console.log("views ?? 100 ->", views ?? 100); //0  stays 0 (coorect defaulting)
