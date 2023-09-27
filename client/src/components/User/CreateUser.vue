<template>
    <div>
        <h1>Create User</h1>
        <form v-on:submit.prevent="createUser">
        <p>ชื่อ : <input type="text" v-model="user.name"></p>
        <p>นามสกุล : <input type="text" v-model="user.lastname"> </p>
        <p>Email : <input type="text" v-model="user.email"> </p>
        <p>Password : <input type="text" v-model="user.password"> </p>
        <p><button type="submit">Create user</button></p>
        <!-- <p><button type="submit" v-on:click="navigateTo('/users')">Create user</button></p> -->
        </form>
    </div>
</template>
<script>

import UsersService from '@/services/UsersService'
export default {
    data() {
        return {

            user: {
                name: "",
                lastname: "",
                email: "",
                password: "",
                status: "active",
            }
        }
    },
    methods: {
        async createUser() {
            try {
                await UsersService.post(this.user)
                this.$router.push({
                    name: 'users',
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
};
</script>
<style scoped></style>