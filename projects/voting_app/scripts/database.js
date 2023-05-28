const database = {
    users: [
        {
            id: "",
            email: "",
            password: ''
        }
    ],
    users_voted: [ 
       
    ],
    choices: [
        {
            id: '59d03860-b80d-4441-9372-4b08c8a5c8aa',
            title: 'php',
            color: 'rgba(215,125,130)',
            quantity: 1
        },
        {
            id: '33c78662-9071-43ec-97ad-681e7698ae46',
            title: 'JavaScript',
            color: 'rgba(215,154,200)',
            quantity: 1

        },
        {
            id: '9c7783a1-4a4e-406e-9449-b0a06595e0e7',
            title: 'python',
            color: 'rgba(100,215,130)',
            quantity: 1
        }
    ]
}


// const {votes} = database 
// const allVotes = votes.reduce((acc, vote) => acc + vote.quantity, 0)


// votes.map((vote) => {

//     const _ = {
//         title : vote.title,
//         percentage: Math.floor(100 * (vote.quantity / allVotes))
//     }




    // console.log(vote.title)
    // console.log(allVotes / 100 * vote.quantity)
    //console.log(Math.floor(100 * (vote.quantity / allVotes)));
    // console.log(`${allVotes} / ${(allVotes / 100)} %`)
    
    
// })
