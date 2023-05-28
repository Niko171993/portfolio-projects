export default class Storage {
    static init(tables) {
        tables.forEach(table => {
            if (!localStorage.hasOwnProperty(table.title)) {
                localStorage.setItem(table.title, JSON.stringify(table.value))
            }
        });
    }

    static getData(rows) {
        if(localStorage.hasOwnProperty(rows)) {
            return JSON.parse(localStorage.getItem(rows))
        } 
        return []
    }

    static addData(rows, item) {
        if(!localStorage.hasOwnProperty(rows)) {
            localStorage.setItem(rows, JSON.stringify([item]))
        } else {
            let data = JSON.parse(localStorage.getItem(rows))
            data.push(item)
            localStorage.setItem(rows, JSON.stringify(data))
        }
    }
    
    static removeData(rows, id) {
        let data = JSON.parse(localStorage.getItem(rows))
        data = data.filter(item => item.id !== id)
        localStorage.setItem(rows, JSON.stringify(data))
    }

    static updateData(rows, id, updated) {
        let data = JSON.parse(localStorage.getItem(rows))
        data = data.map((item) => item.id === id ? updated : item)
        localStorage.setItem(rows, JSON.stringify(data))
    }
}
