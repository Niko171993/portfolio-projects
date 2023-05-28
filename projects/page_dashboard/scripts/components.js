const $alert = (_) => {
  const {status, message} = _
  return `<div class="alert alert-${status}" role="alert">
              ${message}
          </div>`
}

const $button = (_) => {
  const {type, text} = _
  return `<button type="button" class="btn btn-${type}">${text}</button>`
}

const $fruit = (_) => {
  const {type, name, icon} = _
  return `<button type="button" class="btn btn-${type} fruits" data-fruit="${name}">${icon}</button>`
}

const $page = (_) => {
  const {title, url, id} = _
  return `<div class="col-md-3 col-sm-6" id="${id}">
            <div class="page">
              <button type="button" class="btn btn-dark open-dashboard" data-id="${id}" onclick="openDashboard(event)">
                <i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
              </button>
              <a class="page__link" href="${url}" target="_blank">
                <img class="page__icon" src="images/icons/web.png" />
                <h5 class="page__title">${title}</h5>
              </a>
              <div class="page__dashboard">
                <button class="btn btn-dark text-danger close-dashboard" data-id="${id}" onclick="closeDashboard(event)">
                  <i class="fa-solid fa-xmark"></i>
                </button>
                <button class="btn btn-warning" onclick="editComponent(event)" data-edit=${id}>
                  <i class="fa-solid fa-square-pen fa-2x"></i>
                </button>
                <button class="btn btn-danger" onclick="deleteComponent(event)" data-delete=${id}>
                  <i class="fa-solid fa-trash-can fa-2x"></i>
                </button>
              </div>
            </div>
          </div>`
}

const $addWebPage = (_) => {
  return `<div class="col-md-3 col-sm-6 d-flex justify-content-center">
            <button class="btn" id="add-page-button" data-bs-toggle="modal" data-bs-target="#add-web-page">
              <i class="fa-solid fa-plus fa-2x"></i>
            </button>
          </div>`
  }

