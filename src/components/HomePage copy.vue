<template>
    <!-- <div class="container"> -->
        <HeaderSection />
        <LandingPage />
        <TakeLeap />
        <!-- <MainSection /> -->
        <FooterSection />
        <CopyRight />
    <!-- </div> -->
</template>

<script>
import HeaderSection from './HeaderSection.vue';
import LandingPage from './LandingPage.vue';
import TakeLeap from './TakeLeap.vue';
// import MainSection from './MainSection.vue';
import FooterSection from './FooterSection.vue';
import CopyRight from './CopyRight.vue';

export default {
    name: 'HomePage',
    components: {
        HeaderSection,
        LandingPage,
        TakeLeap,
        // MainSection,
        FooterSection,
        CopyRight,
    }
}
</script>

<style>
@import '../../styles/container.css';
@import '../../styles/take-leap.css';
/* @import '../../styles/main.css'; */
@import '../../styles/footer.css';
</style>