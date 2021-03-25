import './style.css';

const ul = document.querySelector('ul');
const form = document.querySelector('form');
const input = document.querySelector('form > input');

console.log(form, input);

const todos = [
    {
        text: 'Je suis une todo',
        done: false
    },
    {
        text: 'Faire du JavaScript',
        done: true
    },
    {
        text: 'Faire du PHP',
        done: false
    }
];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = input.value;
    input.value = '';
    
    //Invocation
    addTodo(value);
    displayTodo();
});

const displayTodo = () => {
    const todosNode = todos.map((todo, index) => {
        return createTodoElement(todo, index);
    });
    ul.innerHTML="";
    ul.append(...todosNode);
    // for(let i in todosNode)
    //     ul.append(todosNode[i]);
};


const createTodoElement = (todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = ` 
        <span class="todo ${todo.done ? 'done' : ''}"></span>
        <p>${todo.text }</p>
        <button>Editer</button>
        <button>Supprimer</button>
    `;
    return li;
};

//Invocation de la méthode
displayTodo();

 
const addTodo = (text) => {
    todos.push({
        text, //equivaut à faire text:text
        done: false
    });
}