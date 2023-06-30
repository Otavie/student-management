<template>
    <div class="footer-section" id="footer-section">
        <div class="footer-content">
            <div class="footer-with-logo">
                <router-link to="/" @click="scrollToTop">
                    <div class="logo footer-logo">
                        <img src="../assets/logo-header.png" alt="Footer Logo">
                    </div>
                </router-link>
                <div class="footer-social-media">
                    <div class="social-media">
                        <img class="social-icons twitter" src="../assets/twitter.png" alt="">
                        <img class="social-icons facebook" src="../assets/facebook.png" alt="">
                        <img class="social-icons youtube" src="../assets/youtube.png" alt="">
                        <img class="social-icons linkedin" src="../assets/linkedin.png" alt="">
                        <img class="social-icons instagram" src="../assets/instagram.png" alt="">
                    </div>
                </div>
                <p class="footer-email">info@smsystem.com</p>
                <p class="footer-address">123, ABC Road, XYZ City, Country</p>
                <p class="footer-number">080xxxxxxxx</p>
            </div> 
            
            <div class="footer-without-logo">

                <div class="footer-box programs-container">
                    <h4>Programs</h4>
                    <ul>
                        <li>Frontend Development</li>
                        <li>Backend Development</li>
                        <li>Fullstack Development</li>
                        <li>Cloud Engineering</li>
                        <li>Product Design</li>
                        <li>Market Design</li>
                        <li>Data Analysis</li>
                    </ul>
                </div>

                <div class="footer-box about-footer-container">
                    <h4>About Us</h4>
                    <ul>
                        <li>Our Team</li>
                        <li>Our Story</li>
                        <li>Our Vision</li>
                        <li>Our Mission</li>
                    </ul>                
                </div>

                <div class="footer-box resources-container">
                    <h4>Resources</h4>
                    <ul>
                        <li>Blog</li>
                        <li>Mobile App</li>
                        <li>Study Guide</li>
                        <li>Study Tools</li>
                        <li>Scholarships</li>
                        <li>Video Tutorials</li>    
                        <li>Online Courses</li>    
                    </ul>
                </div>

                <div class="footer-box get-help-container">
                    <h4>Get Help</h4>
                    <ul>
                        <li>News</li>
                        <li>Events</li>
                        <li>Careers</li>
                        <li>Supports</li>
                        <li>Apps</li>
                        <li>Refers</li>    
                        <li>Login</li>    
                        <li>Logout</li>    
                    </ul>
                </div>
                
                <div class="footer-box legal-container">
                    <h4>Legal</h4>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                        <li>Terms of Service</li>
                        <li>Acceptable Use Policy</li>
                        <li>Code of Conduct</li>
                        <li>License</li>
                    </ul>
                </div>

                <!-- <router-link to="/about" class="about-us" @click="scrollToTop">
                    <a>About Us</a>
                </router-link> -->

            </div>
        </div>

        <!-- <div class="copy-right">
            <p>&copy; 2023 SM System. All rights reserved.</p>
        </div> -->
    </div>
</template>


<script>
// import CopyRight from './CopyRight.vue';
export default {
    name: 'FooterSection',
    // components: {
    //     CopyRight,
    // },
    methods: {
        scrollToTop(){
            const menuOverlay = document.querySelector('.menu-overlay');
            window.scrollTo({ top:0, behavior: 'smooth' });
            menuOverlay.classList.remove('open');
        }
    }
}
</script>