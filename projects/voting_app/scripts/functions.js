const logOut = () => {
    localStorage.removeItem('auth')
    window.location.reload()
}

const register = () => {
    registerModal.show()
}

const authorization = () => {
    authorizationModal.show()
}

const radioButtonInformation = (e) => {
    const id = e.target.dataset.id 
    const voteButton = document.getElementById('vote-button-one')
    voteButton.dataset.saveId = id
   
  

}

const vote = (e) => {
    const auth = JSON.parse(localStorage.getItem('auth'))
    const user = JSON.parse(localStorage.getItem('users'))
    const voteButton = document.getElementById('vote-button-one')
    const voteId = voteButton.dataset.saveId
    const votes = JSON.parse(localStorage.getItem('votes'))
    const {choices} = database 
    const choice = choices.find((item) => item.id === voteId)
    const selectedChoice = votes.find((vote) => vote.choice_id === voteId && vote.auth_id === auth.id)
    if(selectedChoice) {
        // const updateSelectedChoice = votes.map((vote) => {
        //     if(vote.choice_id === voteId) return {...vote, quantity: vote.quantity + 1}
        //     return vote 
        // })
        // localStorage.setItem('votes', JSON.stringify(updateSelectedChoice))
        // console.log(updateSelectedChoice)
        return
    } else {
        const vote = {
            id: uid(),
            auth_id: auth.id,
            choice_id: voteId,
            title: choice.title,
            quantity: choice.quantity
        }
        
        const votes = JSON.parse(localStorage.getItem('votes'))
        votes.push(vote)
        localStorage.setItem('votes', JSON.stringify(votes))
        delete vote.id 
        delete vote.auth_id 
        delete vote.choice_id 
        delete vote.quantity 
        const titleSum = JSON.parse(localStorage.getItem('programsSum'))
        titleSum.push(vote.title)
        localStorage.setItem('programsSum', JSON.stringify(titleSum))
        
    }
    
    updateVoteQuantity()
    calculateProgramSum()
    displaySum()
    voteButton.disabled = true
    // calculateProgramPercentage()
}

// const calculateProgramPercentage = (e) => {
//     const votes = JSON.parse(localStorage.getItem('votes'))
//     const titleArray = []
//     votes.forEach(vote => {
        
//         titleArray.push(vote.title)
//     })
//     const uniqueItems = [...new Set(titleArray)]
//     console.log(votes, 'votes')
//     const sum = votes.map(item => {
//         const {quantity} = item
//         if(uniqueItems.includes(item.title)) return {...item, quantity: quantity + 1}
        
//     })
//     console.log(sum, 'SUM')
    
// }
const updateVoteQuantity = (e) => {
    const votes = JSON.parse(localStorage.getItem('votes'))
    const voteAmount = votes.reduce((acc, vote) => acc + vote.quantity, 0)
    document.getElementById('vote-amount').innerHTML = voteAmount
}

const calculateProgramSum = (e) => {
    const colors = JSON.parse(localStorage.getItem('programsSum'))
    const totalItems = colors.length
    const uniqueItems = [...new Set(colors)]
    const sum = []
    uniqueItems.forEach(currColor => {
    const numItems = colors.filter(color => color === currColor) 
    console.log(`${currColor}  ${numItems.length * 100 / totalItems}%`)
    
    const calculated = Math.floor(numItems.length * 100 / totalItems)
    const calculatedProgramsSum = {
        color: currColor,
        calculation: calculated
    }
    sum.push(calculatedProgramsSum)
    })
    localStorage.setItem('sum', JSON.stringify(sum))
    
    
}
const input = document.getElementById('total-input')
const displaySum = (e) => {
    const sum = JSON.parse(localStorage.getItem('sum'))
    const mapping = sum.map(item => $ShowProgramsPercentage(item)).join('')
    input.innerHTML = mapping
}