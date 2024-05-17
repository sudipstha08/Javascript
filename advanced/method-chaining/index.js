/**
 * It is a mechanism for calling a method on another method of the same object.
 * JavaScript this keyword refers to the current object in which it is called.
 * Thus, when a method returns this, it simply returns an instance of the object
 * in which it is returned. Since the returned value is an instance of an object,
 * it is, therefore, possible to call another method of an object to the returned value,
 * which is its instance. This makes method chaining possible in JavaScript.
 */

function Land() {
	this.area = "";
	this.status = "for Sale";
}

Land.prototype.open = function () {
	this.status = "Open for Sale";
	return this;
};

Land.prototype.close = function () {
	this.status = "Not for Sale";
	return this;
};

Land.prototype.setParams = function (area) {
	this.area = area;
	return this;
};

Land.prototype.doorStatus = function () {
	console.log("The", this.area, "Land is", this.status);
	return this;
};

let land = new Land();
land.setParams("500 sq ft").close().doorStatus().open().doorStatus();

console.log(land)