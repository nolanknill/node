// 21 in USA
// 19 in Canada, sorry Quebec

const age = process.argv[2];
const country = process.argv[3];

// Two conditions
// 1. By country 
//  (sorry Quebec)

if ( (country === 'USA' && age >= 21) || (country === 'Canada' && age >= 19) ) {
    console.log("You're allowed in!")
} else {
    console.log("Ask your parents if you're allowed in, sorry");
}

// What cases should we test for?
/*
- 19 in USA
- 21 in USA
- 19 in Canada
- 17 in Canada
- invalid country -> UK
*/