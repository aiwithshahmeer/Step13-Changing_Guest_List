

let Guest_list :string[]= ['Nawaz Sharif', 'Imran Khan', 'Asif Ali Zardari'];

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our Party.\n\nThank you!\n\n')
}

let absent_guest:string= 'Imran Khan' ;

let new_guest:string='Kamran tessori' ;

Guest_list[1] = new_guest ;

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our Party.\n\nThank you!\n\n')
}

console.log(`Mr ${absent_guest} is not coming to the Party.`)