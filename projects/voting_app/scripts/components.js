const $authBlock = (e) => {
    
    
    
    const guest = `
            <div class="btn-group" role="group">
                <div class="col-lg-12 justify-content-end">
                    <button type="button" class="btn btn-primary" onclick="register()">Register</button>
                    <button type="button" class="btn btn-primary" onclick="authorization()">Authorize</button>
                </div>
            </div>
                `
    const authUser = `
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-danger" onclick="logOut()"> 
                        Log Out
                        </button>
                    </div>
                `
    
    return `
            <div class="col-md-4">
                ${ localStorage.hasOwnProperty("auth") ? authUser : guest }
            </div>
            `
}

const $questionInput = (e) => {
    
    const questionInput = 'Which Programming language do you prefer?'
    
    return  `
                <div class="col-lg-12 my-5 question ">
                    <h2>${localStorage.hasOwnProperty('auth') ? questionInput : ''}</h2>
                </div>
            `
}

const $choicesInput = (_) => {
    const {id, title, color, quantity} = _
    
    const choicesInput = `
                        <div style="background-color:${color}" id="${id}">
                            <h4><input type="radio" name="choices" value="${quantity}" 
                            data-id="${id}"
                            onchange="radioButtonInformation(event)"
                            >${title}</h4>
                        </div>    
                            
                        
                        `
    return  `
                <div class="col-lg-12">
                    ${localStorage.hasOwnProperty('auth') ? choicesInput : ''}
                </div>
            `
}

const $voteButtonInput = (_) => {
    const voteButton =  `
                        <div class="row">
                            <div class="col-lg-2">
                                <button type="button" class="btn btn-success" id="vote-button-one" onclick="vote(event)">Vote</button>
                            </div>
                        </div>
                        `
    
    return  `
            ${localStorage.hasOwnProperty('auth') ? voteButton : ''}
            `
}

const $programVoteAmount = (_) => {
    const {quantity, title } = _ 
    const programVoteAmount = `
                        <div class="col-lg-12">
                            <h4>${title}</h4>
                            <h4>${quantity}</h4>
                        </div>
    `
}

const $ShowProgramsPercentage = (_) => {
        const {color, calculation} = _
    const input =  `
            <div class="col-lg-12">
                <div data-javascript style="width:${calculation}%;background-color:${color};">
                ${color} ${calculation} 
                </div>
            </div>`
    return `
            ${localStorage.hasOwnProperty('auth') ? input : ''}
    `
}