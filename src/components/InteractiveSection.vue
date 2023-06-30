<template>
    <div class="interactive-container">
        <div class="interactive-section">
            <div class="interactive-image">
                <img src="../assets/vr-student.jpg" alt="VR Student">
            </div>
            <div class="interactive-text">
                <div class="interactive-text-head">
                    <h3>Quick Details</h3>
                </div>
                <div class="interactive-text-content">
                    <details>
                        <summary>
                            <div>
                                <h5>What is [School Name]?</h5>
                            </div>
                        </summary>
                        <div>
                            <p>
                                [School Name] is an alternative school for computer science courses.
                            </p>
                            <div class="faqs-button-container">
                                <router-link to="/about" class="faqs-button" @click="scrollToTop">
                                    About Us
                                </router-link>
                            </div>
                        </div>
                    </details>

                    <details>
                        <summary>
                            <div>
                                <h5>Why is [School Name] Different from the Rest?</h5>
                            </div>
                        </summary>
                        <div>
                            <p>
                                [School Name] distinguishes itself through its exceptional flexibility and accessibility, self-paced learning options, diverse multimedia resources, global community, industry-relevant curriculum, and supportive online learning environment. With diverse resources like video lectures and virtual labs, practical hands-on experience is emphasized. The global community encourages cross-cultural knowledge exchange and collaboration, while the curriculum remains aligned with industry demands.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>
                            <div>
                                <h5>What I Gain from [School Name]?</h5>
                            </div>
                        </summary>
                        <div>
                            <p>
                                At [School Name], industry-based instructors are at the forefront. Benefit from their expertise, real-world experience, and valuable insights to gain a competitive edge in the industry.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary>
                            <div>
                                <h5>What is the Cost at [School Name]?</h5>
                            </div>
                        </summary>
                        <div>
                            <p>
                                At [School Name], each program has its own unique price. The cost of each program varies depending on the specific programs, durations, level of study and associated contents.
                            </p>
                            <div class="faqs-button-container">
                                <router-link to="/program" class="faqs-button" @click="scrollToTop">
                                    <a>Check Our Programs</a>
                                </router-link>
                            </div>
                        </div>
                    </details>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InteractiveSection',
}

</script>