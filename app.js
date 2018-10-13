new Vue({
    el:"#app",
    data: {
        myChoice: null,
        comChoice: null,
        count: 3,
        winter: null,
        lifeOfMe: 3,
        lifeOfCom: 3
    },
    watch: {
        count: function (newVal) {
            if (newVal === 0) {
                let number = Math.random()
                if (number < 0.33) {
                    this.comChoice = "scissor"
                }
                else if (number < 0.66) {
                    this.comChoice = "rock"
                }
                else {
                    this.comChoice = "paper"
                }
                // 가위바위보 승패 결정
                if (this.myChoice === this.comChoice) this.winter = 'no one'
                else if (this.myChoice === 'rock' && this.comChoice === 'scissor') this.winter = 'me'
                else if (this.myChoice === 'scissor' && this.comChoice === 'paper') this.winter = 'me'
                else if (this.myChoice === 'paper' && this.comChoice === 'scissor') this.winter = 'me'
                else if (this.myChoice === 'scissor' && this.comChoice === 'rock') this.winter = 'com'
                else if (this.myChoice === 'paper' && this.comChoice === 'scissor') this.winter = 'com'
                else if (this.myChoice === 'rock' && this.comChoice === 'paper') this.winter = 'com'
                else this.winter = 'error'
                // 몫 차감
                if (this.winter === 'me') {
                    this.lifeOfCom--
                }
                else if (this.winter === 'com') {
                    this.lifeOfMe--
                }
            }
        }
    },
    methods: {
        startGame() {
            if(this.myChoice === null) {
                alert("가위 바위 보 중 하나를 선택해주세요.")
            } else {
                let countDown = setInterval(()=>{
                    this.count--
                    if(this.count===0) {
                        clearInterval(countDown)
                    }
                }, 1000)
            }
        }
    }
})