export default class Component {
    static page (_) {
        const {id, title, category, url} = _
        return `<div class="col-lg-4 col-md-6 mb-4" id="${id}">
                    <div class="card card-page page-${category}">
                        <div class="card-header">
                            <h5 class="card-title text-muted text-center">${title}</h5>
                        </div>
                        <div class="card-body">
                            <a href="${url}" target="_blank" class="btn btn-success w-100">${title}</a>
                        </div>
                        <div class="card-footer">
                            <div class="btn-group float-end" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-warning" data-id="${id}" data-rows="pages" onclick="_edit_(event)">
                                    <i class="bi bi-pencil-square"></i>
                                </button>
                                <button type="button" class="btn btn-danger" data-rows="pages" data-id="${id}" onclick="_delete_(event)">
                                    <i class="bi bi-trash-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`
    }
}