new Vue({
    el: "#app",
    data: {
        title: "안녕! Vuejs!"
    },
    methods:{
        HowAreYou: function() {
            return "기분이 어때?"
        },
        HowAreYou: function() {
            return this.title
        }
    }
})