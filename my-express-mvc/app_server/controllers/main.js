// controller index
const index = (req, res) => {
    res.render('index', {title: 'Express MVC'});
}
//controller kontak
const kontak = (req, res) => {
    res.render('kontak', {title: 'Ini Halaman Kontak'});
}

//controller profile
const profil = (req, res) => {
    res.render('profil', {title: 'Ini Halaman Profil'});
}
module.exports = {index, kontak, profil};