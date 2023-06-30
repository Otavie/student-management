<template>
    <div class="container">
        <HeaderSection />
        <LogInContent />
        <FooterSection />
    </div>
</template>

<script>
import HeaderSection from './HeaderSection.vue';
import LogInContent from './LogInContent.vue';
import FooterSection from './FooterSection.vue';

export default {
    name: 'LogIn',
    components: {
        HeaderSection,
        LogInContent,
        FooterSection,
    }
}
</script>