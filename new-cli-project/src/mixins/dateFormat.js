export const dateFormat = {
    created() {
        console.log('믹스인')
    },
    data() {
        return {
            mixinData: '나는 믹스인이오!'
        }
    },
    methods: {
        getDateAndTime(date) {
            if(date!==null) {
                let hour = date.getHours()
                let minutes = date.getMinutes()
                let fullDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
                return `${fullDate} ${hour}:${minutes}`
            } else {
                return null
            }
        }
    }
}