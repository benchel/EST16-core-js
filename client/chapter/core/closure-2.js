
const button = document.querySelector('button');

const handleClick = (() => {
    
    let isClicked = false;

    return () => {
        if(!isClicked) {
            document.body.style.background = 'orange';
        } else {
            document.body.style.background = '';
        }

        isClicked = !isClicked;
    }

})()

button.addEventListener('click', handleClick);

function state(init) {
    let value = init;

    function read() {
        return value;
    }

    function write(newValue) {
        value = newValue;
    }

    return [read, write];
}

// const value = state('hello')[0];
const [value, setValue] = state('hello');

value() // 값을 읽기

setValue() // 값 쓰기
