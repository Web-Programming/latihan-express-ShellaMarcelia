//controller index
const index = (req, res)=>{
    res.render("index", {title :"Express MVC"});
}
//controller kontak
const kontak = (req, res)=>{
    res.render("kontak", {title :"Ini Halaman Kontak"});
}
//controller profile
const profile = (req, res)=>{
    res.render("profile", {title :"Ini Halaman Profile"});
}

module.exports = { index, kontak, profile };