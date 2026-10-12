let npc = {
	name : '',
	jop : '',
	status : 'Untargetable',
	spawn_local : '',
	greetings : '',
	interacting : '',
	set naming(str) {
		this.name = str
	},
	set jopHunting(str) {
		this.jop = str
	},
	set spawnLocal(str) {
		this.spawn_local = str;
	},	
	get speakGreetings() {
		return `안녕, 처음보는 얼굴이네. 여긴 ${this.spawn_local}이야 나는 이곳의 ${this.jop}이고. 어떤 일로 왔니?`
	}
}

let store_owner = {
	__proto__ : npc,
	products : [],
	set product_list(list) {
		for(let el of list) {
			this.products.push(el)
		}
	},
	get product_list() {
		return this.products;
	}
}








class Animal {
    legs = 4;
    stomach = [];
    tail = true;

    static defaultOptions = {
        version:'0.1.1'
        , company:'8b-studio'
        , ceo:'심선범'
    }

    // private field
    #nickName = 'unknown';

    constructor(name) {
        this.name = name;
        console.log(this.#nickName);
    }

    get eat() {
        return this.stomach;
    }

    set eat(food) {
        this.stomach.push(food);
    }
}

const animal = new Animal('몽실이');


class Tiger extends Animal{
    constructor(name){
        super(name);
    }

    hunt(target) {
        this.prey = target;
        return `${target}에게 조용히 접근한다.`
    }

    static bark(sound) {
        return sound;
    }
}

const tiger = new Tiger('호돌이');

