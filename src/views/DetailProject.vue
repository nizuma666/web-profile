<template>
    <Navbar />
    <section class="my-40">
        <div v-if="id === 'danain'">
            <Danain />
        </div>
        <div v-else>
            <SamVenue />
        </div>
    </section>
    <Footer />
</template>

<script>
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
import Danain from '../project/Danain.vue';
import SamVenue from '../project/SamVenue.vue';

export default {
    props: ['id'],
    components: {
        Navbar,
        Footer,
        SamVenue,
        Danain
    }
}
</script>