const $displayInput = (_) => {
    return `
            <li id="${_.id}">
                <span>${_.text}</span>
                <span><button id="edit-button" onclick="editButton(event)" data-edit="${_.id}" class="btn btn-warning">Edit</button>
                <span><input type="checkbox" value="${_.id}" class="check-checkbox" onchange="changeBackground(event)"/></span>
                <span><button id="delete-button" onclick="deleteButton(event)" data-delete-id="${_.id}" class="btn btn-danger">Delete</button>
            </li>
            `
}