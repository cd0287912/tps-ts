import { add } from "./tools";
const a = 123;
const person = {
  name: "张三",
  age: 18,
};
person.name = "lisi";
const test = (name: string) => {
  console.log(name);
};
console.log(Promise);
console.log(person);
console.log(add(1, 2));
console.log(test(person.name));
