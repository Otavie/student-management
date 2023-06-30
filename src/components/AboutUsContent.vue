<template>
    <!-- <div class="container"> -->
    <div class="about-us-container section-container">
        <div class="about-us-content-container sub-section-container">
            <div class="about-us-header section-header">
                <h1>About Us!</h1>
            </div>
            <div class="about-us-content">
                <div class="our-team">
                    <div class="our-team-header">
                        <h2>Our Team</h2>
                    </div>
                    <div class="our-team-container">
                        <div class="about-us-image our-team-image">
                            <img src="../assets/team.jpg" alt="Team">
                        </div>
                        <div class="about-us-text-container" id="our-team-text-container">
                            <div class="about-us-text our-team-text">
                                <p>Our platform is designed to provide students with a convenient and easy-to-use portal that allows them to access all of their important information in one place. From learning tracks and exam records, to assessment results and personal details, our system is here to help you stay organized and on track.</p>
                                <p>Our platform is designed to provide students with a convenient and easy-to-use portal that allows them to access all of their important information in one place. From learning tracks and exam records, to assessment results and personal details, our system is here to help you stay organized and on track.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="our-story">
                    <div class="our-story-header">
                        <h2>Our Story</h2>
                    </div>
                    <div class="our-story-container">
                        <div class="about-us-image our-story-image">
                            <img src="../assets/story.jpg" alt="Story">
                        </div>
                        <div class="about-us-text-container" id="our-story-text-container">
                            <div class="about-us-text our-story-text">
                                <p>Our platform is designed to provide students with a convenient and easy-to-use portal that allows them to access all of their important information in one place. From learning tracks and exam records, to assessment results and personal details, our system is here to help you stay organized and on track.</p>
                                <p>Our platform is designed to provide students with a convenient and easy-to-use portal that allows them to access all of their important information in one place. From learning tracks and exam records, to assessment results and personal details, our system is here to help you stay organized and on track.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="our-vision">
                    <div class="our-vision-header">
                        <h2>Our Vision</h2>
                    </div>
                    <div class="our-vision-container">
                        <div class="about-us-image our-vision-image">
                            <img src="../assets/vision.jpg" alt="Vision">
                        </div>
                        <div class="about-us-text-container" id="our-vision-text-container">
                            <div class="about-us-text our-vision-text">
                                <p>Our platform is designed to provide students with a convenient and easy-to-use portal that allows them to access all of their important information in one place. From learning tracks and exam records, to assessment results and personal details, our system is here to help you stay organized and on track.</p>
                                <p>Our platform is designed to provide students with a convenient and easy-to-use portal that allows them to access all of their important information in one place. From learning tracks and exam records, to assessment results and personal details, our system is here to help you stay organized and on track.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="our-mission">
                    <div class="our-mission-header">
                        <h2>Our Mission</h2>
                    </div>
                    <div class="our-mission-container">
                        <div class="about-us-image our-mission-image">
                            <img src="../assets/mission.jpg" alt="Mission">
                        </div>
                        <div class="about-us-text-container" id="our-mission-text-container">
                            <div class="about-us-text our-mission-text">
                                <p>Our platform is designed to provide students with a convenient and easy-to-use portal that allows them to access all of their important information in one place. From learning tracks and exam records, to assessment results and personal details, our system is here to help you stay organized and on track.</p>
                                <p>Our platform is designed to provide students with a convenient and easy-to-use portal that allows them to access all of their important information in one place. From learning tracks and exam records, to assessment results and personal details, our system is here to help you stay organized and on track.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- </div> -->
</template>

<script>
export default {
    name: 'AboutUsContent',
    mounted(){
        const options = {
            threshold: 0.3
        };

        function observerTextContainer(textContainerId, textClassName){
            const textContainer = document.getElementById(textContainerId);
            const text = document.querySelector(textClassName);

            function toggleText(entries) {
                entries.forEach(entry => {
                    text.classList.toggle('show', entry.isIntersecting);
                });
            }

            const observer = new IntersectionObserver(toggleText, options);
            observer.observe(textContainer);
        }

        observerTextContainer('our-team-text-container', '.our-team-text');
        observerTextContainer('our-story-text-container', '.our-story-text');
        observerTextContainer('our-vision-text-container', '.our-vision-text');
        observerTextContainer('our-mission-text-container', '.our-mission-text');
        
    }

}
</script>

<style>
@import '../../styles/about-us.css';
</style>