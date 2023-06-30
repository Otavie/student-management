<template>
    <div class="take-leap-container">
        <div class="take-leap">
            <h2>Take a <span class="h2-leap">Leap</span>, Build a <span class="h2-leap">Fortune</span></h2>
            <router-link to="/application" class="apply-button" @click="scrollToTop">
                Apply Now
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TakeLeap',
}

</script>