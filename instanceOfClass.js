function instanceOfClass(obj, targetClass) {
  if (!obj || typeof obj !== "object") return false;
  if (!targetClass.prototype) throw Error();

  if (Object.getPrototypeOf(obj) === targetClass.prototype) {
    return true;
  } else {
    return instanceOfClass(Object.getPrototypeOf(obj), targetClass);
  }
}

class A {}
class B extends A {}

let objB = new B();
console.log(instanceOfClass(objB, B)); // true
console.log(instanceOfClass(objB, A)); // true

class C {}
console.log(instanceOfClass(objB, C)); // false
