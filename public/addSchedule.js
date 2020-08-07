var schudule = document.getElementById('schedule')
var box = document.getElementById('schedule-box')
var btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    var clone = schudule.cloneNode(true)
    box.appendChild(clone)
})