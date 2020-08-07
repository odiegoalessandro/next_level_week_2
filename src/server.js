const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

var proffys = [
    {
        name: "Diego Fernandes",
        whatsapp: "345676543",
        bio: ' Entusiasta das melhores tecnoligias de quimica avançada. Apaixonado por explodir coisas em laboratório  e por mudar a vida das pessoas atráves de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
        cost: "20,00",
        weekday: [
            "2"
        ],
        time_from: [
            "900"
        ],
        time_to: [
            "1200"
        ],
        classes: "Quimica"
    }
]

const subjects = [
    "Matématica",
    "Português",
    "Inglês",
    "Quimica",
    "Fisica",
    "Biologia",
    "Educação Física",
    "Geografia",
    "Artes",
    "História",
    "Ciências",
]
const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
]

function pageLanding(req, res){
    return res.render("index.html") 
}
function pageStudy(req, res){
    const filter = req.query
    console.log(filter)
    return res.render("study.html", {proffys, filter, subjects, weekdays})
}
function pageClasses(req, res){
    const data = req.query
    if(data.whatsapp&&
        data.bio&&
        data.cost&& 
        data.time_from&& 
        data.time_to&& 
        data.name){
        data.classes = subjects[data.subject - 1]    
        proffys.push(data)    
        return res.redirect('/study')
    }
    else{
        return res.render("classe.html", {data, weekdays, subjects})
    }
}

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server.use("/public", express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/classes", pageClasses)
.listen(5500)
