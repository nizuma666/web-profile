<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()
const isMobileMenuOpen = ref(false)

const toogleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const scrollAndClose = (sectionId, offset = 0) => {
    ScrollToSection(sectionId, offset)
    isMobileMenuOpen.value = false
}

const ScrollToSection = (id, offset = 0) => {
    const el = document.getElementById(id)
    if (route.name !== 'Home') {
        router.push({ name: 'Home', hash: `#${id}`, state: { offset } })
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
        <div class="lg:hidden cursor-pointer" @click="toogleMobileMenu"><img src="/icon-hamburger.svg" alt="hamburger-icon"></div>

        <transition name="fade">
            <div v-if="isMobileMenuOpen"
                class="absolute top-full left-0 w-full text-white flex flex-col items-start px-10 py-4 gap-4 lg:hidden z-40 shadow-lg" style="background: var(--gradient-navbar);">
                <button @click="scrollAndClose('home', -100)" class="text-white cursor-pointer">About Me</button>
                <button @click="scrollAndClose('project', -100)" class="text-white cursor-pointer">Projects</button>
                <button @click="scrollAndClose('tools', -100)" class="text-white cursor-pointer">Tools</button>
                <button @click="scrollAndClose('contact', -100)" class="text-white cursor-pointer">Contact</button>
            </div>
        </transition>
    </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>