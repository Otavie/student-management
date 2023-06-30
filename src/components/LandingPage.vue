<template>
    <div class="landing-page-container">
        <div class="landing-page">
            <div class="landing-text">
                <h1>Be a <span class="h1-stand-out">Catalyst</span> for Change:</h1>
                <h2><span class="h1-stand-out">Empowering</span>  Minds, Shaping Futures.</h2>
                <p>
                    At [School Name], we believe that education is the key to unlocking endless possibilities.
                </p>

                <div class="landing-about">
                    <router-link to="/about" class="landing-about-button" @click="scrollToTop">
                        About Us
                    </router-link>
                </div>
            </div>
            <div class="landing-blob-left">
                <img src="../assets/landing-blob.png" alt="Landing Blog Left">
            </div>
            <div class="landing-blob-right">
                <img src="../assets/landing-blob-right.png" alt="Landing Blog Right">
            </div>
            <div class="landing-img">
                <img src="../assets/programmer.png" alt="Image of Student">
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'LandingPage',
}

</script>

<style>
@import '../../styles/landing.css';
</style>