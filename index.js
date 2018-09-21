var recipes = {}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { object[key] = value;
return object }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyDeleteFromObjectByKey(object, key) {
  

var obj = { prop: 1 }
      var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

function deleteFromObjectByKey(object, key){
  var obj = { foo : 'bar' };
  var newObj = Object.assign({}, obj);
  delete newObj.foo;
  return obj;
}
