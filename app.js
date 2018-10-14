new Vue({
    el:"#app",
    data: {
        myChoice: null,
        comChoice: null,
        count: 3,
        winter: null,
        lifeOfMe: 3,
        lifeOfCom: 3,
        isSelectable: true,
        logs: []
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
                else if (this.myChoice === 'paper' && this.comChoice === 'rock') this.winter = 'me'
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
                this.count = 3
                // 버튼은 다시 보이게 됨
                this.isSelectable = true
                let log = {
                    message: `You ${this.myChoice}, Computer ${this.comChoice}`,
                    winner: this.winter
                }
                this.logs.unshift(log)
            }
        },
        lifeOfMe: function (newVal) {
            if(newVal === 0) {
                setTimeout(()=>{
                    confirm("안타깝네요. 당신이 패배하였습니다.")
                    this.lifeOfMe = 3
                    this.lifeOfCom = 3
                    this.myChoice = null
                    this.comChoice = null
                    this.winter = null
                    this.count = 3
                    this.logs = []
                }, 500)
            }
        },
        lifeOfCom: function (newVal) {
            if(newVal === 0) {
                setTimeout(()=>{
                    confirm("축하드립니다. 당신이 승리하였습니다.")
                    this.lifeOfMe = 3
                    this.lifeOfCom = 3
                    this.myChoice = null
                    this.comChoice = null
                    this.winter = null
                    this.count = 3
                    this.logs = []
                }, 500)
            }
        }
    },
    methods: {
        startGame() {
            // 버튼이 보이지 않음
            if(this.myChoice === null) {
                alert("가위 바위 보 중 하나를 선택해주세요.")
            } else {
                this.isSelectable = false
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