<template>
    <div class="container">
        <HeaderSection />
        <SignUpContent />
        <FooterSection />
    </div>
</template>

<script>
import HeaderSection from './HeaderSection.vue';
import SignUpContent from './SignUpContent.vue';
import FooterSection from './FooterSection.vue';

export default {
    name: 'LogIn',
    components: {
        HeaderSection,
        SignUpContent,
        FooterSection,
    }
}
</script>