/**
 * The Proxy object enables you to create a proxy for another object,
 * which can intercept and redefine fundamental operations for that object.
 * The Proxy object allows you to create an object that can be used in place of the original object
 */

const targetObj = {
	message1: "hello",
	message2: "everyone",
};

const handler1 = {
	get(target, prop, receiver) {
		if (prop === "message2") {
			return "world";
		}
		return Reflect.get(...arguments);
	},
};

const proxy1 = new Proxy(targetObj, handler1);

console.log(proxy1.message1);
console.log(proxy1.message2);
