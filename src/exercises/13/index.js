"use strict";
exports.__esModule = true;
exports.dateWizard = void 0;
var dateWizard = require("date-wizard");
exports.dateWizard = dateWizard;
require("./module-augmentations/date-wizard");
var admins = [
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator', registered: new Date('2016-06-01T16:23:13') },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver', registered: new Date('2017-02-11T12:12:11') },
    { type: 'admin', name: 'Steve', age: 40, role: 'Steve', registered: new Date('2018-01-05T11:02:30') },
    { type: 'admin', name: 'Will Bruces', age: 30, role: 'Overseer', registered: new Date('2018-08-12T10:01:24') },
    { type: 'admin', name: 'Superwoman', age: 28, role: 'Customer support', registered: new Date('2019-03-25T07:51:05') }
];
var users = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep', registered: new Date('2016-02-15T09:25:13') },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut', registered: new Date('2016-03-23T12:47:03') },
    { type: 'user', name: 'Moses', age: 70, occupation: 'Desert guide', registered: new Date('2017-02-19T17:22:56') },
    { type: 'user', name: 'Superman', age: 28, occupation: 'Ordinary person', registered: new Date('2018-02-25T19:44:28') },
    { type: 'user', name: 'Inspector Gadget', age: 31, occupation: 'Undercover', registered: new Date('2019-03-25T09:29:12') }
];
var isAdmin = function (person) { return person.type === 'admin'; };
var isUser = function (person) { return person.type === 'user'; };
function logPerson(person, index) {
    var additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    var registeredAt = dateWizard(person.registered, '{date}.{month}.{year} {hours}:{minutes}');
    var num = "#".concat(dateWizard.pad(index + 1));
    console.log(" - ".concat(num, ": ").concat(person.name, ", ").concat(person.age, ", ").concat(additionalInformation, ", ").concat(registeredAt));
}
console.log('All users:');
[]
    .concat(users, admins)
    .forEach(logPerson);
console.log();
console.log('Early birds:');
[]
    .concat(users, admins)
    .filter(function (person) { return dateWizard.dateDetails(person.registered).hours < 10; })
    .forEach(logPerson);
// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html
