let t = _.pluck(users, 'name'); // 객체에서 두번째 인자의 키의 값을 배열로 반환
console.log(t);
t = _.first(numArr); // 배열에서 첫번째 인자를 반환 두번째 인자를 넣으면 해당 개수까지
console.log(t);
t = _.first(numArr, 2);
console.log(t);

t = _.last(numArr); // 배열에서 마지막 요소를 반환
console.log(t);
t = _.last(numArr, 2); //두번쨰 인자를 넣으면 해당 개수만큼 반환
console.log(t);

t = _.rest(numArr); // 앞쪽 값을 제외한 배열을 반환
console.log(t);
t = _.rest(numArr, 3); // 두번째 인자를 넣으면 해당 개수만큼 제외
console.log('rest ', t);

t = _.initial(numArr); // rest의 반대방향으로 동작
console.log('initial ', t);
t = _.initial(numArr, 3);
console.log('inital', t);

t = _.lastIndexOf(numArr, 3); // 뒤에서 부터 찾은후 인덱스를 반환
console.log('lastIndexOf 3 ', t);

t = _.flatten([1, 2, [3, 4, [5, 6]]]); // 깊이를 가진 배열을 펴준다
console.log('flatten ', t);

t = _.values({id: 1, name: 'test', age: 30}); //객체의 값을 리턴한다
console.log('values ', t);

t = _.keys(users[0]); // 객체의 키를 리턴한다
console.log('keys ', t);

t = _.extend({id: 1, age: 100}, {age: 999, city: 'suwon'}); // 왼쪽의 객체에 오른쪽 객체를 덮어씌운다.
//같은키가 있다면 덮어씌우고 아니면 추가한다. 원본객체를 바꾼다!!!
console.log('extend ', t);

t = _.extend({}, users[0], {city: 'seoul'}); // 원본객체를 바꾸고 싶지 않다면 빈객체를 넣으면된다.
console.log('extend ', t);

t = _.pick(users[0], 'id', 'name'); // 두번째 인자로 넘겨진 키의 값을 객체로 반환
console.log('pick ', t);

t = _.omit(users[0], 'id', 'name'); //두번째 인자로 넘겨진 키를 제외한 객체를 반환
console.log('omit ', t);

let eq5 = a => a == 5;
console.log('eq5', eq5(5));

let neq5 = _.negate(eq5); //원래 함수의 결과를 반대로 바꾸는 함수
console.log('neq5', neq5(5)); //받아둔 함수를 실행하여 나온 결과를 반대로 바꾸는 함수를 리턴하는 함수

const c_negate = function(f) {
  return function() {
    return !f.apply(this, arguments);
  };
};

console.log(_.noop()); // 인자가 무엇이든 undefind만 리턴하는 함수
console.log(_.noop('adsf'));

// functional
t = _.filter(_.map([1, 2, 3], v => v * 2), v => v <= 4);
console.log('functional', t);

//chaning
t = _.chain([1, 2, 3])
  .map(v => v * 2)
  .filter(v => v <= 4)
  .value();
console.log('chaining', t);
