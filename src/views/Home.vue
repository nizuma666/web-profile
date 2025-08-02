<script>
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
import About from './About.vue';
import Contact from './Contact.vue';
import Expertise from './Expertise.vue';
import Project from './Project.vue';
import Purpose from './Purpose.vue';
import Tools from './Tools.vue';
import { nextTick, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute()
        const offset = history.state?.offset || 0
        onMounted(() => {
            nextTick(() => {
                setTimeout(() => {
                    if (route.hash) {
                        const el = document.querySelector(route.hash)
                        if (el) {
                            const y = el.getBoundingClientRect().top + window.pageYOffset + offset
                            window.scrollTo({ top: y, behavior: 'smooth' })
                        }
                    }
                }, 100) // jeda sedikit untuk memastikan element benar-benar render
            })
        })
    },
    components: {
        Footer,
        Navbar,
        About,
        Contact,
        Expertise,
        Project,
        Purpose,
        Tools
    }
}
</script>

<template>
    <div style="background: var(--gradient-primary);">
        <Navbar />
        <About ref="home" />
        <Expertise ref="expertise" />
        <Project ref="project" />
        <Tools ref="tools" />
        <Contact ref="contact" />
        <Purpose />
        <Footer />
    </div>
</template>