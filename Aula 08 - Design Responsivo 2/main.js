function toggleMenu() {
    if (document.getElementById('menu').classList.contains('show')) {
        document.getElementById('menu').classList.remove('show')
    } else {
        document.getElementById('menu').classList.add('show')
    }
}