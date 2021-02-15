const baseUri = "http://jsonplaceholder.typicode.com/posts"

Vue.createApp({
    data() {
        return {
            posts: [],
            error: null,
            userId: ""
        }
    },
    async created() { // created() is a life cycle method, not an ordinary method
        console.log("created method called")
        try {
            const response = await axios.get(baseUri)
            this.posts = await response.data
            this.error = null
        } catch (ex) {
            this.posts = []
            this.error = ex
        }
    },
    methods: {
        cleanList() {
            this.posts = []
        },
        async getByUserId(uid) {
            const uri = baseUri + "?userId=" + uid
            console.log("getByUserId: " + uri)
            try {
                const response = await axios.get(uri)
                this.posts = await response.data
                this.error = null
            } catch (ex) {
                this.posts = []
                this.error = ex
            }
        }
    }
}).mount("#app")