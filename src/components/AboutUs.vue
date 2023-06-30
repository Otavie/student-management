<template>
    <HeaderSection />
    <AboutUsContent />
    <FooterSection />
    <CopyRight />
</template>

<script>
import HeaderSection from './HeaderSection.vue';
import AboutUsContent from './AboutUsContent.vue';
import FooterSection from './FooterSection.vue';
import CopyRight from './CopyRight.vue';
export default {
    name: 'AboutUs',
    components: {
        HeaderSection,
        FooterSection,
        AboutUsContent,
        CopyRight,
    }
}
</script>

<style>
@import '../../styles/about-us.css';
</style>