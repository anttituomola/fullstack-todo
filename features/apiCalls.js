export const toggleTodoInDatabase = async (todo) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "text": todo.text,
        "completed": todo.completed,
        "id": todo.id,
        "createdAt": todo.date
    });

    var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch("http://localhost:3000/api/todo", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export const deleteTodoInDatabase = async (todo) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "text": todo.text,
        "completed": todo.completed,
        "id": todo.id,
        "createdAt": todo.date
    });

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch("http://localhost:3000/api/todo", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export const createTodoInDatabase = async (todo) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "text": todo.text,
        "completed": false,
        "id": todo.id,
        "createdAt": todo.date
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch("http://localhost:3000/api/todo", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}