<template>
    <HeaderSection />
    <LandingPage />
    <TakeLeap />
    <InteractiveSection />
    <ToBecome />
    <OurPartners />
    <OurAlumni />
    <FooterSection />
    <CopyRight />
</template>


<script>
import HeaderSection from './HeaderSection.vue';
import LandingPage from './LandingPage.vue'
import TakeLeap from './TakeLeap.vue'
import ToBecome from './ToBecome.vue'
import InteractiveSection from './InteractiveSection.vue'
import OurPartners from './OurPartners.vue'
import OurAlumni from './OurAlumni.vue'
import FooterSection from './FooterSection.vue'
import CopyRight from './CopyRight.vue';

export default {
    name: 'HomePage',
    components: {
        HeaderSection,
        LandingPage,
        TakeLeap,
        InteractiveSection,
        ToBecome,
        OurPartners,
        OurAlumni,
        FooterSection,
        CopyRight,
    }
}
</script>

<style>
@import '../../styles/container.css';
@import '../../styles/take-leap.css';
@import '../../styles/interactive.css';
@import '../../styles/to-become.css';
@import '../../styles/our-partners.css';
@import '../../styles/our-alumni.css';
@import '../../styles/footer.css';
</style>