function formatDate(dt) {
    return `${new Date(dt).getMonth() + 1}/${new Date(dt).getDate()}/${new Date(dt).getFullYear()}`
}

module.exports = {
    formatDate
}
