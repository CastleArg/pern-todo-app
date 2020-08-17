const myBuddies = [
    { name: 'Elon', species: 'human' },
    { name: 'Linus', species: 'human' },
    { name: 'Lucy', species: 'cat' },
    { name: 'Bart', species: 'cat' }
]

// <div>Elon is a human</div>

const myBuddiesDiv = []

for (buddy of myBuddies) {
    buddy.species = 'dog';
    if (buddy.species == 'human') {
        myBuddiesDiv.push(`<div>${buddy.name} is a ${buddy.species}</div>`);
    }
}

const myOtherBuddiesDiv = myBuddies
    .filter(buddy => buddy.species == 'human')
    .map(buddy => `<div>${buddy.name} is a ${buddy.species}</div>`)

console.log(myBuddiesDiv);
console.log(myOtherBuddiesDiv);