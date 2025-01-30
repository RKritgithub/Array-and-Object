// 3. Object Extensibility and Sealing
// a) Use the Object.preventExtensions method to prevent any further additions of properties to the student object.
// b) Use the Object.isExtensible method to check if the student object is extensible. Store the result in a variable
// called extensibleStatus.
// c) Create a new object called teacher with a 'subject' property set to 'Math'.
// d) Use the Object.seal method to seal the teacher object, preventing any additions or deletions of properties.
// e) Use the Object.isSealed method to check if the teacher object is sealed. Store the result in a variable called
// sealedStatus.
// f) Print the extensibleStatus and sealedStatus to the console.

// a) Prevent additions to the student object
const student = { name: 'John', age: 21 };
Object.preventExtensions(student);

const extensibleStatus = Object.isExtensible(student);

// c) Create a teacher object
const teacher = { subject: 'Math' };

// d) Seal the teacher object (no additions or deletions allowed)
Object.seal(teacher);

const sealedStatus = Object.isSealed(teacher);

console.log(`Is student extensible? ${extensibleStatus}`);
console.log(`Is teacher sealed? ${sealedStatus}`);

