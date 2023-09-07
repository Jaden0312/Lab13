//Team's Infomations
var list = [
    {
        name: 'Daniel',
        age: 22,
        skill: 'HTML'
    },
    {
        name: 'Jayden',
        age: 30,
        skill: 'CSS'
    },
    {
        name: 'Jin',
        age: 28,
        skill: 'JavaScript'
    },
    {
        name: 'Joons',
        age: 30,
        skill: 'React'
    },
]

//Team Name
var nameResult = '';
for (var i=0; i < list.length; i++) {
    console.log(list[i].name);
    if (i < 3) {
        nameResult += list[i].name + ',';
    } else if (i === 3) {
        nameResult += list[i].name;
    }
    document.getElementById('team-list').innerHTML = nameResult;
}

//Team Age Average 
var sum = 0;
for (var i = 0; i < list.length; i++) {
    sum += list[i].age;
}
averageResult = sum / list.length;
document.getElementById('age-average').innerHTML = averageResult;

//Team Skills
var skills = '';
var lineBreak = '\n';
for (var i=0; i < list.length; i++) {
    console.log(list[i].name + ':' + list[i].skill);
    skills += list[i].name + ':' + list[i].skill + lineBreak;
}
document.getElementById('skills').innerHTML = skills;