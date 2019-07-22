const view = {}

view.showComponents = function (name) {
    let viewHandler = view[name]
    if(viewHandler instanceof Function) {
        viewHandler()
    }
}

