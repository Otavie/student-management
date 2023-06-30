import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import AboutUs from './components/AboutUs.vue'
import StudentPortal from './components/StudentPortal.vue'
import ApplyForm from './components/ApplyForm.vue'
import ProgramPage from './components/ProgramPage.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'

const routes = [
    {
        name: "HomePage",
        component: HomePage,
        path: '/'
    },
    {
        name: "AboutUs",
        component: AboutUs,
        path: '/about'
    },
    {
        name: "StudentPortal",
        component: StudentPortal,
        path: '/student_portal'
    },
    {
        name: "ApplyForm",
        component: ApplyForm,
        path: '/application'
    },
    {
        name: "ProgramPagec",
        component: ProgramPage,
        path: '/program'
    },
    {
        name: "LogIn",
        component: LogIn,
        path: '/login'
    },
    {
        name: "SignUp",
        component: SignUp,
        path: '/sign_up'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(() =>{
    window.scrollTo({ top: 0, behavior: 'smooth', duration: 500 })
})

export default router;