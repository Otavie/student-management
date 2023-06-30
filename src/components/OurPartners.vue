<template>
    <div class="partners-container">
      <div class="partners-head">
        <h2>Where Our Graduates are:</h2>
      </div>

      <div class="our-partners">
        <div class="partners-sliders" id="partnersCarousel">
          <div class="partners-slide" v-for="partner in partners" :key="partner.id">
            <a :href="partner.url" :id="partner.id">
              <img :src="partner.image" :alt="partner.name + ' Logo'">
            </a>
          </div>
        </div>
        <button class="prev" @click="prevSlide">&#10094;</button>
        <button class="next" @click="nextSlide">&#10095;</button>
      </div>
    </div>

</template>
  
<script>
  export default {
    name: "OurPartners",
    data() {
      return {
        partners: [
          {
            id: "google-logo",
            name: "Google", 
            url: "https://about.google", 
            image: require("../assets/google-logo.png")
          },
          {
            id: "meta-logo",
            name: "Meta", 
            url: "https://www.meta.com", 
            image: require("../assets/meta-logo.png"),
          },
          {
            id: "linkedin-logo",
            name: "Linkedin", 
            url: "https://www.linkedin.com/company/linkedin", 
            image: require("../assets/linkedin-logo.png")
          },
          {
            id: "netflix-logo",
            name: "Netflix", 
            url: "https://www.netflix.com/company/linkedin", 
            image: require("../assets/netflix-logo.png")
          },
          {
            id: "pinterest-logo",
            name: "Pinterest", 
            url: "https://www.pinterest.com", 
            image: require("../assets/pinterest-logo.png")
          },
          {
            id: "twitter-logo",
            name: "Twitter", 
            url: "https://twitter.com", 
            image: require("../assets/twitter-logo.png")
          },
          {
            id: "airbnb-logo",
            name: "AirBnB", 
            url: "https://www.airbnb.com", 
            image: require("../assets/airbnb-logo.png")
          },
          {
            id: "youtube-logo",
            name: "YouTube", 
            url: "https://youtube.com", 
            image: require("../assets/youtube-logo.png")
          },
          {
            id: "whatsapp-logo",
            name: "WhatsApp", 
            url: "https://www.whatsapp.com", 
            image: require("../assets/whatsapp-logo.png")
          },
          {
            id: "instagram-logo",
            name: "Instagram", 
            url: "https://www.instagram.com", 
            image: require("../assets/instagram-logo.png")
          },
          {
            id: "tesla-logo",
            name: "Tesla", 
            url: "https://www.tesla.com", 
            image: require("../assets/tesla-logo.png")
          },
          {
            id: "github-logo",
            name: "GitHub", 
            url: "https://github.com", 
            image: require("../assets/github-logo.png")
          },
        ],
        index: 0,
        timer: null
      };
    },
    computed:{
      sliderStyle(){
        return{
          transform: `translateX(-${this.index * (100 / this.partners.length)}%)`
        };
      }
    },
    methods: {
      prevSlide() {
        clearInterval(this.timer);
        this.index = this.index > 0 ? this.index - 1 : this.partners.length - 1;
        this.startAutoSlide();
      },

      nextSlide() {
        clearInterval(this.timer);
        this.index = this.index < this.partners.length - 1 ? this.index + 1 : 0; 
        this.startAutoSlide();
      },

      startAutoSlide(){
        clearInterval(this.timer);
        this.timer = setInterval(() =>{
          this.nextSlide();
        }, 3000);
      }
    },
    mounted(){
      this.startAutoSlide();
    },
    beforeUnmount(){
      clearInterval(this.timer);
    }
  };
  </script>