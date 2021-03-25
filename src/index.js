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
        done: true,
        editMode: false
    },
    {
        text: 'Faire du PHP',
        done: false,
        editMode: true
    }
];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = input.value;
    input.value = '';
    
    //Invocation
    addTodo(value);
});

const displayTodo = () => {
    const todosNode = todos.map((todo, index) => {
        if(todo.editMode) {
            return createTodoEditElement(todo, index);
        } else {
            return createTodoElement(todo, index);
        }
        
    });
    ul.innerHTML="";
    ul.append(...todosNode);
    // for(let i in todosNode)
    //     ul.append(todosNode[i]);
};


const createTodoElement = (todo, index) => {
    const li = document.createElement('li');
    const btnDelete = document.createElement('button');
    btnDelete.innerHTML="Suprimer";
    
    const btnEdit = document.createElement('button');
    btnEdit.innerHTML = "Edit";
    //Systeme de closure
    btnDelete.addEventListener("click", (event) => {
    event.stopPropagation();//stop la propagation de leven
        deleteTodo(index);
    });

    btnEdit.addEventListener("click", (event) =>{
        event.stopPropagation();
        toggleEditMode(index);
    });

    li.innerHTML = ` 
        <span class="todo ${todo.done ? 'done' : ''}"></span>
        <p>${todo.text }</p>
    `;
    li.addEventListener("click", (event) => {
        toggleTodo(index);
    });

    li.append(btnDelete, btnEdit);

    return li;
};

const createTodoEditElement = (todo, index) => {
    const li = document.createElement('li');
    const input = document.createElement("input");
    input.type = "text";
    input.value = todo.text;

    const btnSave = document.createElement('button');
    btnSave.innerHTML = "Save";
    const btnCancel = document.createElement('button');
    btnCancel.innerHTML = "Cancel";
    btnCancel.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleEditMode(index);
    });
    btnSave.addEventListener("click", () => {
        editTodo(index, input);
    });

    li.append(input, btnCancel, btnSave);
    return li;
};

 
const addTodo = (text) => {
    todos.push({
        text, //equivaut à faire text:text
        done: false
    });
    displayTodo();
}

const deleteTodo  =  (index) => {
    todos.splice(index, 1);
    displayTodo();
}

//Si false passe à true sinon false
const toggleTodo = (index) => {
    todos[index].done = !todos[index].done;
    displayTodo();
}

const toggleEditMode = index => {
    todos[index].editMode = !todos[index].editMode;;
    displayTodo();
}

const editTodo = (index, input) => {
    const value = input.value;
    todos[index].text = value;
    todos[index].editMode = false;
    displayTodo(); 
}

//Invocation de la méthode
displayTodo();