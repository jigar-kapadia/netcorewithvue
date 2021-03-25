var app = new Vue({
    el: "#app",
    data: {
      users: []
    },
    created(){
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(x => x.json())
         .then(users => this.users = users);
    }
  });

var data2 = {
    name : 'Jigar',
    age : 0
};
//Object.freeze(data2);
var app2 = new Vue({
    el: "#app2",
    data : data2
});



//console.log(app2.$data === data2);
//console.log(app2.$el === document.getElementById("app2"));

app2.$watch('age', (newValue, oldValue) => {
    console.log(`Previous Value : ${oldValue} & New Value : ${newValue}`);
});
app2.age = 27;

//console.log (app2.name == data2.name)
 //data2.name = 'Sunny'
// data2.age = "27"