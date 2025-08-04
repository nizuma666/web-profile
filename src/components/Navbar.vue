<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()
const showMenu = ref()

const ScrollToSection = (id, offset = 0) => {
    const el = document.getElementById(id)
    if (route.name !== 'Home') {
        router.push({ name: 'Home', hash: `#${id}`, state: {offset} })
    } else {
        if (el) {
            const y = el.getBoundingClientRect().top + window.pageYOffset + offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            history.replaceState(null, '', `#${id}`);
        }
    }
}
</script>

<template>
    <nav class="w-full flex justify-between px-10 lg:px-[140px] py-5 fixed z-50 top-0"
        style="background: var(--gradient-navbar);">
        <div class="cursor-pointer">
            <img src="/logo.svg" alt="logo-median">
        </div>
        <div class="hidden lg:flex gap-x-8 py-2 font-normal">
            <button @click="ScrollToSection('home', -145)" class="text-white cursor-pointer">About Me</button>
            <button @click="ScrollToSection('project', -80)" class="text-white cursor-pointer">Projects</button>
            <button @click="ScrollToSection('tools', -80)" class="text-white cursor-pointer">Tools</button>
            <button @click="ScrollToSection('contact', -140)" class="text-white cursor-pointer">Contact</button>
        </div>
        <div class="lg:hidden"><img src="/icon-hamburger.svg" alt="hamburger-icon"></div>
    </nav>
</template>