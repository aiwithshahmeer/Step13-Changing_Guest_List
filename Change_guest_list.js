"use strict";
let Guest_list = ['Nawaz Sharif', 'Imran Khan', 'Asif Ali Zardari'];
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our Party.\n\nThank you!\n\n');
}
let absent_guest = 'Imran Khan';
let new_guest = 'Kamran tessori';
Guest_list[1] = new_guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our Party.\n\nThank you!\n\n');
}
console.log(`Mr ${absent_guest} is not coming to the Party.`);
