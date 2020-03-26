import axois from 'axios'

const instance = axois.create({
    baseURL: 'https://cit94-1517426142976.firebaseio.com/emoji'
})

export default instance