/* ---------------- */
/* For In Loop      */
/* ---------------- */



const JS = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

console.log('toString' in JS);

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?


// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// onsole.log(JS.hasOwnProperty('nickName'));
// Object.prototype.hasOwnProperty.call(JS, 'nickName');

console.log(Object.prototype.hasOwnProperty
    .call(JS, 'nickName'));

console.log(Object.hasOwn(JS, 'nickName'));

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

console.clear();

for(const key in JS) {
    if(Object.hasOwn(JS, key)) {
        console.log(`JS.${key} : `, JS[key]);
    }
}