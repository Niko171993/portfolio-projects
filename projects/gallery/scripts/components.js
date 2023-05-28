const $gallery = _ => {
    const {id, title, images} = _
    const _images = images.map(image => $image(image)).join('')
    return `<div class="col-lg-4 col-md-6 mb-4" id="${id}">
                <div class="card gallery-card">
                    <div class="card-header">
                        ${title}
                    </div>
                    <div class="card-body insert">
                        ${_images}
                    
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-success" data-gallery-id="${id}" onclick="addImage(event)">Add Image</button>
                    </div>
                </div>
            </div>`
}

const $image = _ => {
    const {id, src, gallery_id} = _ 
    return `<img id="${id}" src="${src}" class="img-thumbnail" alt="..." data-gallery-id="${gallery_id}" />`
}

export {$gallery, $image} 