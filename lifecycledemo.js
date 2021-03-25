var app = new Vue({
    el: "#app",
    data: {
      users: []
    },
    beforeCreate() {
        console.log('beforCreate', this);
    },
    created(){
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(x => x.json())
         .then(users => this.users = users);
         console.log('created');
    },
    beforeMount() {
        console.log('beforeMount')
    },

  });