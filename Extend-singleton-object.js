/**
 * Created by buithanhbavuong on 05/09/2016.
 */
var TestObject = (function () {
  function TestObject(options) {
    this.helloWorld = options.helloWorld;
    this.helloWorld2 = options.helloWorld2;
  }

  TestObject.prototype = {
    clc : function (name) {
      return 'clc ' + this.helloWorld+' '+name;
    }
  };
  return TestObject;
}) ();

TestObject.prototype.clcClone = TestObject.prototype.clc;

TestObject.prototype.clc = function (name) {
  console.log(TestObject.prototype.clcClone.call(this, name));
  return 'fuck u '+ this.helloWorld+ ' '+this.helloWorld1;
}

var oldPrototype = TestObject.prototype;
var oldTestObject = TestObject;


TestObject  = function(options) {
  TestObject.prototype.init.call(this, options);
  this.helloWorld1 = options.helloWorld1;
}

TestObject.prototype = oldPrototype;

TestObject.prototype.init = function (options) {
  oldTestObject.call(this, options);
}

var test = new TestObject({
  helloWorld: ' hello world',
  helloWorld1: ' fucking easy',
  helloWorld2: 'helloworlddddddd'
});

test.clc('vuong');