<template>
    <div class="header">
        <div class="header-logo">
            <div class="logo">
                <router-link to="/" @click="scrollToTop">
                    <img src="../assets/logo-header.png" alt="Header Logo">
                </router-link>
            </div>
        </div>

        <div class="menu-overlay" :class="{open: isMenuOpen}">
            <div class="menu">
                <ul>
                    <li>
                        <router-link to="/" @click="scrollToTop" :class="{ active: $route.path === '/' }">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/student_portal" @click="scrollToTop" :class="{ active: $route.path === '/student_portal' }">Student Portal</router-link>
                    </li>
                    <li>
                        <router-link to="/about" @click="scrollToTop" :class="{ active: $route.path === '/about' }">About Us</router-link>
                    </li>
                    <li>
                        <router-link to="/login" @click="scrollToFooter">Contact Us</router-link>
                    </li>
                    <li>
                        <router-link to="/login" @click="scrollToTop" :class="{ active: $route.path === '/login' }">Login</router-link>
                    </li>

                </ul>
            </div>
        </div>
           
        <div class="header-actions">
            <div class="theme-toggle" @click="toggleTheme">
                <img 
                    class="theme-toggle-icon-sun" src="../assets/sun.png" 
                    alt="Sun" v-if="theme === 'light'">
                <img 
                    class="theme-toggle-icon-moon" src="../assets/moon.png" 
                    alt="Moon" v-if="theme === 'dark'">
            </div>

            <div class="menu-icon" @click="toggleMenu">
                <img class="open-menu" v-if="!isMenuOpen" src="../assets/open-menu-black.png" alt="Open Menu" />
                <img class="close-menu" v-else src="../assets/close-menu-black.png" alt="Close Menu" />
            </div>

        </div>

    </div>
</template>

<script>

export default {
    name: 'HeaderSection',
    methods: {
        scrollToTop(){
            window.scrollTo({ top: 0, behavior: 'smooth', duration: 500 });
            this.closeMenu();
        },
        toggleMenu(){
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu(){
            const menuOverlay = document.querySelector('.menu-overlay');
            
            if (menuOverlay){
                menuOverlay.addEventListener('transitioned', () =>{
                    this.isMenuOpen = false;
                }, { once: true });
            }
            menuOverlay.classList.remove('open');
            this.isMenuOpen = false;
        },
        scrollToFooter(){
            const footer = document.getElementById("footer-section");
            footer.scrollIntoView({ behavior: "smooth", duration: 500 });
            this.closeMenu();
        },
        toggleTheme(){
            this.theme = this.theme === 'light' ? 'dark' : 'light'
        }
        
    },
    data(){
        return{
            isMenuOpen: false,
            theme: 'dark',
        };
    }
}
</script>

<style>
@import '../../styles/header.css';
</style>