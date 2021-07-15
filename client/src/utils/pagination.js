export const setPaginationViews = (list, amount) => {
    const views = [];
    let view = [];

    for (let i = 0; i < list.length; i++) {
        if (view.length < amount) {
            view.push(list[i]);
        }
        if (view.length === amount || i === list.length - 1) {
            views.push(view)
            view = []
        }
    }

    return views;
}

export const getAllPrice = (list) => {
    const total = list.reduce((acc, cur) => {
        return acc + parseInt(cur.price);
    })

    return total;
}