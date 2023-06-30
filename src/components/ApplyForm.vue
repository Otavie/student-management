<template>
    <!-- <div class="container"> -->
        <HeaderSection />
        <ApplyContent />
        <FooterSection />
    <!-- </div> -->
</template>

<script>
import HeaderSection from './HeaderSection.vue';
import ApplyContent from './ApplyContent.vue';
import FooterSection from './FooterSection.vue';

export default {
    name: 'ApplyForm',
    components: {
        HeaderSection,
        ApplyContent,
        FooterSection,
    }
}
</script>