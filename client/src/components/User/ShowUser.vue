<!-- <template>
    <div>
        <h1>Get User By Id</h1>
    </div>
</template>
<script>

import UsersService from '@/services/UsersService'
export default {
    data() {
        return {
            users:null
        }
    },

    methods: {
        navigateTo(route) {
            // ตรง$router ต้องตั้งให้ตรง folder ของ route
            this.$router.push(route)
        }
    },

    async created() {
        let userId = this.$route.params.userId
        this.users = (await UsersService.show(userId)).data
        console.log(this.user)
    }
}

</script>
<style scoped></style> -->

<template>

    <div>
        <h1>Get User By Id</h1>
        <hr>
        <p>ID : {{ user.id }}</p>
        <p>ชื่อ : {{ user.name }}</p>
        <p>นามสกุล : {{ user.lastname }}</p>
        <p>Email : {{ user.email }}</p>
        <p>Password : {{ user.password }}</p>
        <p>Status : {{ user.status }}</p>
        <p>Type : {{ user.type }}</p>
        <p>
        <button v-on:click="navigateTo('/user/edit/'+user.id)">edit user</button>
        <button v-on:click="navigateTo('/users')">กลับ</button>
        </p>
        <hr>
    </div>

</template>

<script>

import UsersService from '@/services/UsersService'

export default {

    data() {
        return {
            user: null
        }
    },

    methods: {
        navigateTo(route) {
            // ตรง$router ต้องตั้งให้ตรง folder ของ route
            this.$router.push(route)
        }
    },

    async created() {
        try {
            let userId = this.$route.params.userId
            this.user = (await UsersService.show(userId)).data
        } catch (error) {
            console.log(error)
        }
    }

}

</script>

<style scoped></style>