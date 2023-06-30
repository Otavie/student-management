<template>
    <div class="main">
        <div class="take-leap">
            <h2>Take a <span class="h2-leap">Leap</span>, Build a <span class="h2-leap">Fortune</span></h2>
            <router-link to="/application" class="apply-button" @click="scrollToTop">
                <a>Apply Now</a>
            </router-link>
        </div>
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
                                    <a>About Us</a>
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

        <div class="to-become">
            <div class="become-head">
                <h2>To <span class="h2-leap">Become</span> a:</h2>
            </div>

            <div class="become-button-container">
                <button class="become-button fullstack-engineer">Fullstack Engineer</button>
                <button class="become-button frontend-developer">Frontend Developer</button>
                <button class="become-button backend-developer">Backend Developer</button>
                <button class="become-button cloud-engineer">Cloud Engineer</button>
                <button class="become-button ux-designer">UI/UX Designer</button>
                <button class="become-button product-designer">Product Designer</button>
                <button class="become-button game-developer">Game Developer</button>
                <button class="become-button data-analyst">Data Analyst</button>
                <button class="become-button data-scientist">Data Scientist</button>
                <button class="become-button ai-ml-expert">AI/ML Expert</button>
            </div>

            <!-- <button class="apply-button">Apply Now</button> -->
            <router-link to="/application" class="apply-button" @click="scrollToTop">
                <a>Apply Now</a>
            </router-link>

        </div>

        <div class="modal" v-if="showModal">
            <div class="modal-content">
                <h3 class="modal-title">{{ modalTitle }}</h3>
                <p class="modal-text">{{ modalText }}</p>
                <button class="modal-close" @click="closeModal">❌</button>
            </div>
        </div>

        <div class="where-graduates-container">
            <div class="where-graduates-head">
                <h1>Where Our Graduates are Working</h1>
            </div>
        </div>


            <div class="partners about-intersection">
                        <h2>Our Partners</h2>

                        <div class="our-partners">
                            <div class="partners-sliders">
                            
                                <div class="partners-slide">
                                    <a id="google" href="https://about.google"><img src="../assets/google.png" alt="Google"></a>
                                </div>
                            
                                <div class="partners-slide">
                                    <a id="britishcouncil" href="https://www.britishcouncil.org.ng"><img src="../assets/britishcouncil.png" alt="British Council"></a>
                                </div>
                            
                                <div class="partners-slide">
                                    <a id="wolverhampton" href="https://www.wlv.ac.uk"><img src="../assets/wolverhampton.png" alt="Wolverhampton"></a>
                                </div>
                                
                                <div class="partners-slide">
                                    <a id="tableau" href="https://www.tableau.com"><img src="../assets/tableau.png" alt="Tableau"></a>
                                </div>
                                
                                <div class="partners-slide">
                                    <a id="cavista" href="https://www.cavistatech.com"><img src="../assets/cavista.png" alt="Cavista"></a>
                                </div>
                            
                                <div class="partners-slide">
                                    <a id="meraki" href="https://meraki.cisco.com"><img src="../assets/ciscomeraki.png" alt="Cisco Meraki"></a>
                                </div>
                            
                                <div class="partners-slide">
                                    <a id="co_creationhub" href="https://cchubnigeria.com"><img src="../assets/co_creationhub.png" alt="Co Creation Hub"></a>
                                </div>
                            
                                <div class="partners-slide">
                                    <a id="design_competition" href="https://paadc.com"><img src="../assets/design_competition.png" alt="Design Competition"></a>
                                </div>
                                
                                <div class="partners-slide">
                                    <a id="korapay" href="https://korapay.com"><img src="../assets/korapay.png" alt="Korapay"></a>
                                </div>
                                
                                <div class="partners-slide">
                                    <a id="productdive" href="https://productdive.com"><img src="../assets/productdive.png" alt="Product Dive"></a>
                                </div>
                                
                                <div class="partners-slide">
                                    <a id="arm" href="https://www.arm.com"><img src="../assets/arm.png" alt="Arm"></a>
                                </div>
                            
                                <div class="partners-slide">
                                    <a id="dreamcode" href="https://upi-sponsorships.org/dreamcode"><img src="../assets/dreamcode.png" alt="Dream Code"></a>
                                </div>
                                
                                <div class="partners-slide">
                                    <a id="softcom" href="https://softcom.xyz"><img src="../assets/softcom.png" alt="SoftCom"></a>
                                </div>
                                
                                <div class="partners-slide">
                                    <a id="thriveagric" href="https://softcom.xyz"><img src="../assets/thriveagric.png" alt="Thrive Agric"></a>
                                </div>

                            </div> <!-- End of the Sliders Partners-->
                        </div>
                    </div>

            <!-- <div class="where-graduates-content">
                <div class="slider">
                    <div class="slides">
                        <img src="../assets/google.png" alt="Google Logo">
                    </div>
                    <div class="slides">
                        <img src="../assets/youtube-logo.png" alt="YouTube Logo">
                    </div>
                    <div class="slides">
                        <img src="../assets/airbnb.png" alt="AirBnB Logo">
                    </div>
                    <div class="slides">
                        <img src="../assets/linkedin-logo.png" alt="LinkedIn Logo">
                    </div>
                    <div class="slides">
                        <img src="../assets/netflix.png" alt="Netflix Logo">
                    </div>
                    <div class="slides">
                        <img src="../assets/meta.png" alt="Meta Logo">
                    </div>
                    <div class="slides">
                        <img src="../assets/twitter-logo.png" alt="Twitter Logo">
                    </div>
                    <div class="slides">
                        <img src="../assets/instagram-logo.png" alt="Instagram Logo">
                    </div>
                    <div class="slides">
                        <img src="../assets/pinterest.png" alt="Pinterest Logo">
                    </div>
                    <div class="slides">
                        <img src="../assets/whatsapp.png" alt="Whatsapp Logo">
                    </div>


                </div>
            </div> -->
        <!-- </div> -->
<!-- 
        <div class="our-graduates-container">
            <div class="our-graduates-head">
                <h1>Where Our Graduates are Working</h1>
            </div>
        </div> -->

    </div>
</template>

<script>
export default {
    name: 'MainSection',
    data(){
        return {
            showModal: false,
            modalTitle: '',
            modalText: ''
        };
    },

    methods: {
        openModal(title, text){
            this.modalTitle = title;
            this.modalText = text;
            this.showModal = true;
        },
        closeModal(){
            this.showModal = false;
        }
    },
    mounted(){
        const becomeButtons = document.querySelectorAll('.become-button');
        
        becomeButtons.forEach((becomeButton) => {
            becomeButton.addEventListener('click', () => {
                switch(becomeButton.classList[1]){
                    case 'fullstack-engineer':
                        this.openModal('Fullstack Engineer', 'A Fullstack Engineer is a versatile developer who possesses knowledge and skills in both front-end and back-end web development. They are proficient in various programming languages, frameworks, and technologies required to build and maintain complete web applications. A Fullstack Engineer is capable of handling both the client-side (user interface) and server-side (backend logic and database) components of a software project, allowing them to contribute to every stage of the development process. Their ability to work across the entire stack enables them to create efficient, scalable, and responsive web solutions.');
                        break;

                    case 'frontend-developer':
                        this.openModal('Frontend Developer', 'A Frontend Developer is a web developer who specializes in creating and implementing the user interface and user experience of a website or web application. They are proficient in programming languages such as HTML, CSS, and JavaScript, and they utilize various frameworks and libraries to build responsive and interactive user interfaces. Frontend Developers work closely with designers and backend developers to ensure a seamless and visually appealing user experience. They focus on optimizing the website\'s performance, accessibility, and compatibility across different browsers and devices.');
                        break;

                    case 'backend-developer':
                        this.openModal('Backend Developer', 'A backend developer is responsible for building and maintaining the server-side of web applications. This includes designing and implementing the application\'s architecture, developing APIs and web services, integrating with databases and other third-party services, and ensuring the application\'s performance, security, and scalability. Backend developers typically work with programming languages such as Java, Python, Ruby, and PHP, as well as frameworks such as Node.js, Django, and Ruby on Rails. They work closely with frontend developers, product owners, project managers, and business analysts, to ensure that the web application meets the needs of the business and its users.');
                        break;

                    case 'cloud-engineer':
                        this.openModal('Cloud Engineer', 'A cloud engineer is responsible for designing, implementing, and managing cloud-based systems and infrastructure. They have a deep understanding of cloud computing technologies and platforms, such as Amazon Web Services (AWS), Microsoft Azure, or Google Cloud Platform (GCP). Cloud engineers play a crucial role in helping organizations leverage the power of the cloud to enhance scalability, availability, and efficiency of their applications and services. They create and deploy cloud-based solutions, including virtual machines, containers, serverless architectures, and storage systems.');
                        break;

                    case 'ux-designer':
                        this.openModal('UI/UX Designer', 'A UI/UX designer focuses on creating engaging and intuitive digital experiences for users. They are responsible for designing the user interface (UI) and user experience (UX) of websites, mobile applications, software, and other digital products. UI/UX designers possess a deep understanding of user behavior, psychology, and design principles. In the UI phase, designers create visually appealing layouts, selecting appropriate color schemes, typography, and graphics, etc. The UX aspect of their role involves conducting user research, analyzing user flows, and creating wireframes or prototypes to map out the user journey and identify potential pain points.');
                        break;

                    case 'product-designer':
                        this.openModal('Product Designer', 'A product designer specializes in conceptualizing, designing, and developing innovative products. They combine their expertise in design principles, user experience, and technical knowledge to create functional and visually appealing products that meet the needs and desires of consumers. Product designers often work closely with cross-functional teams, including engineers, marketers, and manufacturers, to bring their designs to life. They employ various tools and techniques, such as sketching, prototyping, and 3D modeling, to translate their ideas into tangible designs. Their ultimate goal is to create products that not only solve problems but also enhance the user\'s overall experience, resulting in successful and impactful products in the market.');
                        break;

                    case 'game-developer':
                        this.openModal('Game Developer', 'A game developer is responsible for designing and creating interactive digital experiences known as video games. They combine technical expertise with artistic vision to bring virtual worlds to life, captivating players with immersive gameplay, captivating storylines, and visually stunning graphics. Game developers work in multidisciplinary teams, collaborating with artists, programmers, animators, and sound designers to develop games across various platforms, such as consoles, computers, and mobile devices. They utilize programming languages, game engines, and development tools to build game mechanics, physics, artificial intelligence, and user interfaces.');
                        break;

                    case 'data-analyst':
                        this.openModal('Data Analyst', 'A data analyst examines and interprets complex data sets to uncover meaningful insights and patterns that can guide informed decision-making. They possess a strong analytical mindset, combining statistical knowledge, programming skills, and domain expertise to extract valuable information from raw data. Data analysts collect, organize, and clean large volumes of data from various sources, ensuring its accuracy and reliability. They employ a range of analytical techniques, such as data mining, statistical analysis, and predictive modeling, to identify trends, correlations, and anomalies within the data.');
                        break;

                    case 'data-scientist':
                        this.openModal('Data Scientist', 'A data scientist specializes in extracting meaningful insights and knowledge from large and complex datasets. They possess a unique blend of expertise in mathematics, statistics, computer science, and domain knowledge, allowing them to uncover patterns, trends, and correlations within data to drive informed decision-making. Data scientists are proficient in programming languages like Python or R, as well as various statistical analysis and machine learning techniques. While data scientist tends to be closely related to data analyst, data scientists have a broader skill set and focus on developing advanced models and algorithms, while data analysts concentrate on organizing and interpreting data to support business decision-making. Data scientists tend to work on complex, strategic projects, while data analysts typically handle more routine analysis tasks.');
                        break;

                    case 'ai-ml-expert':
                        this.openModal('AI/ML Expert', 'An AI/ML Expert possesses deep knowledge and expertise in Artificial Intelligence (AI) and Machine Learning (ML) and their algorithms, enabling them to develop innovative solutions to complex problems. AI/ML Experts are adept at analyzing large datasets, identifying patterns, and building predictive models. They possess advanced programming skills and are proficient in languages such as Python, R, or Java. Their expertise extends to popular ML frameworks and libraries like TensorFlow, PyTorch, and scikit-learn. These experts are proficient in data preprocessing, feature engineering, and model selection, ensuring optimal performance and accuracy. They are skilled at implementing and fine-tuning various ML algorithms, including regression, classification, clustering, and deep learning models.');
                        break;

                    default:
                        this.openModal('No Information Available', 'There is no detail about this career path!');
                }
            });
        });
        
        
    }
}

</script>