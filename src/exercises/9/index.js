"use strict";
/*

Intro:

    PowerUsers idea was bad. Once those users got
    extended permissions, they started bullying others
    and we lost a lot of great users.
    In response, we spent all the remaining money
    on the marketing and got even more users.
    We need to start preparing to move everything to a
    real database. For now we just do some mocks.

    The server API format was decided to be the following:

    In case of success: { status: 'success', data: RESPONSE_DATA }
    In case of error: { status: 'error', error: ERROR_MESSAGE }

    The API engineer started creating types for this API and
    quickly figured out that the amount of types needed to be
    created is too big.

Exercise:

    Remove UsersApiResponse and AdminsApiResponse types
    and use generic type ApiResponse in order to specify API
    response formats for each of the functions.

*/
exports.__esModule = true;
exports.requestCoffeeMachineQueueLength = exports.requestCurrentServerTime = exports.requestUsers = exports.requestAdmins = void 0;
var admins = [
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];
var users = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];
function requestAdmins(callback) {
    callback({
        status: 'success',
        data: admins
    });
}
exports.requestAdmins = requestAdmins;
function requestUsers(callback) {
    callback({
        status: 'success',
        data: users
    });
}
exports.requestUsers = requestUsers;
function requestCurrentServerTime(callback) {
    callback({
        status: 'success',
        data: Date.now()
    });
}
exports.requestCurrentServerTime = requestCurrentServerTime;
function requestCoffeeMachineQueueLength(callback) {
    callback({
        status: 'error',
        error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
    });
}
exports.requestCoffeeMachineQueueLength = requestCoffeeMachineQueueLength;
function logPerson(person) {
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(person.type === 'admin' ? person.role : person.occupation));
}
function startTheApp(callback) {
    requestAdmins(function (adminsResponse) {
        console.log('Admins:');
        if (adminsResponse.status === 'success') {
            adminsResponse.data.forEach(logPerson);
        }
        else {
            return callback(new Error(adminsResponse.error));
        }
        console.log();
        requestUsers(function (usersResponse) {
            console.log('Users:');
            if (usersResponse.status === 'success') {
                usersResponse.data.forEach(logPerson);
            }
            else {
                return callback(new Error(usersResponse.error));
            }
            console.log();
            requestCurrentServerTime(function (serverTimeResponse) {
                console.log('Server time:');
                if (serverTimeResponse.status === 'success') {
                    console.log("   ".concat(new Date(serverTimeResponse.data).toLocaleString()));
                }
                else {
                    return callback(new Error(serverTimeResponse.error));
                }
                console.log();
                requestCoffeeMachineQueueLength(function (coffeeMachineQueueLengthResponse) {
                    console.log('Coffee machine queue length:');
                    if (coffeeMachineQueueLengthResponse.status === 'success') {
                        console.log("   ".concat(coffeeMachineQueueLengthResponse.data));
                    }
                    else {
                        return callback(new Error(coffeeMachineQueueLengthResponse.error));
                    }
                    callback(null);
                });
            });
        });
    });
}
startTheApp(function (e) {
    console.log();
    if (e) {
        console.log("Error: \"".concat(e.message, "\", but it's fine, sometimes errors are inevitable."));
    }
    else {
        console.log('Success!');
    }
});
// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/generics.html
