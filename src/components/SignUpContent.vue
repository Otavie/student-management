<template>
    <div class="container">
        <div class="login-container section-container">
            <div class="login-content-container sub-section-container">
                <div class="about-us-header section-header">
                    <h1>Welcome!</h1>
                </div>
                <div class="login-content-inner">
                    <div class="login-content">
                        <div class="login-image">
                            <img src="../assets/big-logo.png" alt="Login Form Logo">
                            <div class="circle circle-shadow"> </div>
                        </div>
                        <div class="login-form-container" id="login-form-container">
                            <div class="big-logo">
                                <img src="../assets/big-logo.png" alt="Big Logo at the Background">
                            </div>
                            <div class="login-header">
                                <h2>Sign Up!</h2>
                            </div>
                            <div class="login-form">
                                <div class="input-box">
                                    <input type="text" v-model="name" required id="name">
                                    <label for="name">Full Name</label>
                                </div>
                                <div class="input-box">
                                    <input type="text" v-model="email" required id="email">
                                    <label for="email">Email</label>
                                </div>
                                <div class="input-box">
                                    <input type="password" v-model="password" required id="password">
                                    <label for="password">Password</label>
                                </div>
                                <button @click="SignUp" class="login-button" :class="{ pressed: isPressed }">Sign Up</button>
                                <p>
                                    <span class="new-sign-text">Already have an account? </span> <router-link class="new-sign-up" to="/login">Login</router-link>
                                </p>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignUpContent',
    data() {
        return {
            isPressed: false,
        };
    },
    methods: {
        LogIn() {
            this.isPressed = true;
            // do other login logic
            setTimeout(() =>{
                this.isPressed = false;
            }, 250)
        },
    },
}
</script>

<style>
@import '../../styles/login.css';
</style>