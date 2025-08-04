<template>
    <div>
        <div v-if="loadingState.isLoading" class="fixed inset-0 flex justify-center items-center bg-white z-50">
            <Loading />
        </div>
        <RouterView />
    </div>
</template>

<script setup>
import Navbar from '@components/Navbar.vue';
import Home from '@views/Home.vue';
import Expertise from '@views/Expertise.vue';
import Project from '@views/Project.vue';
import Contact from '@views/Contact.vue';
import Tools from '@views/Tools.vue';
import Purpose from '@views/Purpose.vue';
import { ref } from 'vue';
import Footer from '@components/Footer.vue';
import { loadingState } from '@stores/loading';
import Loading from '@components/reusable/Loading.vue';

const home = ref(null)
const expertise = ref(null)
const project = ref(null)
const contact = ref(null)
const tools = ref(null)
</script>
