import axiox from 'axios'

export default () => {
    return axiox.create({
        baseURL: 'http://localhost:8081'
    }

    )
}