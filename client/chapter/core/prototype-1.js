/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우





const animal = {
    legs:4,
    tail:true,
    get eat(){
        return this.stomach
    },
    set eat(food){
        this.stomach = [];
        this.stomach.push(food)
    }
}

const tiger = {
    pattern: '호랑이 무늬'
    , hunt(target) {
        this.prey = EventTarget;
        this.eat = this.prey;
        return `${target}에게 조용히 접근 후 먹는다.`
    },
    __proto__: animal
}


// 생성자 함수 

function Animal() {
    this.legs = 4;
    this.tail = true;
    this.getEat - function() {
        return this.stomach ?? [];
    },
    this.setEat = function(food) {
        this.stomach = [];
        this.stomach.push(food);
    }
}

function Tiger(name) {
    Animal.call(this)
    this.name = name;
    this.pattern = '호랑이무늬';
    this.hunt = function(target) {
        this.prey = target;
        return `${target}에게 조용히 접근합니다.`
    }
}

const _animal = new Animal();
// Tiger.prototype = _animal

const _tiger = new Tiger('호돌이');

console.log(_animal);
  
/*
function instance method

 1. f.call 함수를 대신 실행. this를 custom 가능, 인수를 넘겨줌 , 
 2. f.apply 함수를 대신 실행. this를 custom 가능, 인수를 넘겨줌 []
 3. f.bind 함수를 대신 실행X 담아두기만함. this를 custom 가능, 인수를 넘겨줌 , 
 */

 function sum(a,b) {
    console.log(this);
    return a + b;
 }

// const a = sum.call('hello', 1,2);

// const b = sum.apply('hello', [1,2]);

const b = sum.bind('hello', 1,2);

let count = 0;

function print() {
    console.log(this);
    console.log('클릭했습니다.', count++);
}

const span = document.querySelector('.first');
span.addEventListener('click', print);

