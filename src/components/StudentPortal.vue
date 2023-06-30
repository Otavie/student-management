<template>
    <HeaderSection />
    <StudentPortalContent />
    <FooterSection />
    <CopyRight />

</template>

<script>
import HeaderSection from './HeaderSection.vue';
import StudentPortalContent from './StudentPortalContent.vue';
import FooterSection from './FooterSection.vue';
import CopyRight from './CopyRight.vue';
export default {
    name: 'StudentPortal',
    components: {
        HeaderSection,
        StudentPortalContent,
        FooterSection,
        CopyRight,
    }
}
</script>

<style>
@import '../../styles/student-portal.css';
</style>