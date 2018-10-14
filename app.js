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
        logs: [],
        selects: [
            { name: "가위", value: "scissor" },
            { name: "바위", value: "rock" },
            { name: "보", value: "paper" }
        ]
    },
    computed: {
        myChoiceImg() {
            return this.myChoice!==null ? `images/${this.myChoice}.jpg` : "images/question.jpg"
        },
        comChoiceImg() {
            return this.comChoice!==null ? `images/${this.comChoice}.jpg` : "images/question.jpg"
        },
        leftLifeOfMe() {
            return 3 - this.lifeOfMe
        },
        leftLifeOfCom() {
            return 3 - this.lifeOfCom
        }
    },
    watch: {
        count(newVal) {
            if (newVal === 0) {
                // 가위바위보를 선택하는 부분
                this.selectOne()
                // 가위바위보 승패 결정 & 몫 차감
                this.whoIsWin()

                // 게임 리셋
                this.count = 3
                this.isSelectable = true

                // 로그를 업데이트 하는 부분
                this.updateLogs()
            }
        },
        lifeOfMe(newVal) {
            if(newVal === 0) {
                // 게임을 종료
                this.endGame("안타깝네요. 당신이 패배하였습니다.")
            }
        },
        lifeOfCom(newVal) {
            if(newVal === 0) {
                // 게임을 종료
                this.endGame("축하드립니다. 당신이 승리하였습니다.")
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
        },
        selectOne() {
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
        },
        whoIsWin() {
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
        },
        updateLogs() {
            let log = {
                message: `You ${this.myChoice}, Computer ${this.comChoice}`,
                winner: this.winter
            }
            this.logs.unshift(log)
        },
        endGame(msg) {
            setTimeout(()=>{
                confirm(msg)
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
})