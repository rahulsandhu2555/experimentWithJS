// Error
// EvalError => when you use eval()
// RangeError => when not in range
// ReferenceError => when that reference does not exists
// SyntaxError => incorrect syntax
// TypeError => var of different type tries to access or ...
// URIError => occur while encoding or decoding the uri

//Custom Error
function InvalidCallError(message) {
    this.name = 'InvalidCallError';
    this.message = message;
}

InvalidCallError.prototype = Object.create(Error.prototype);
InvalidCallError.prototype.constructor = Error;

throw new InvalidCallError('Invalid function call');
// "Uncaught InvalidCallError: Invalid function call"