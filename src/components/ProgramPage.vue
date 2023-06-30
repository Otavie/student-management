<template>
    <HeaderSection />
    <ProgramContent />
    <FooterSection />
</template>

<script>
import HeaderSection from './HeaderSection.vue';
import ProgramContent from './ProgramContent.vue';
import FooterSection from './FooterSection.vue';

export default {
    name: 'ApplyForm',
    components: {
        HeaderSection,
        ProgramContent,
        FooterSection,
    }
}
</script>