<template>
    <section id="project" class="py-[70px] px-[140px] flex flex-col gap-y-10">
        <div class="text-white font-semibold text-[40px]">Selected Project</div>
        <div class="p-6 flex flex-row gap-x-10 items-center rounded-2xl backdrop-blur-xs"
            style="background: var(--gradient-in-card);">
            <div class="rounded-2xl h-[360px] w-1/2 flex justify-center items-center relative overflow-hidden"
                style="background: var(--gradient-in-card);">
                <div class="absolute -bottom-56 transition ease-in-out duration-500 hover:-translate-y-48">
                    <img src="/sam-pic-removebg.png" alt="sam-porto">
                </div>
                <img src="/See_Me!.png" alt="see me" class="mb-16">
            </div>
            <div class="w-1/2 flex flex-col gap-y-6">
                <div class="flex flex-row gap-x-6">
                    <img src="/logo-sam-venue.svg" alt="logo sam venue">
                    <div>
                        <p
                            class="text-base font-semibold bg-gradient-to-r from-[#7B4CDB] to-[#BDA5ED] bg-clip-text text-transparent">
                            Website Design</p>
                        <p class="text-[30px] font-semibold text-white">SAM VENUE</p>
                    </div>
                </div>
                <div class="text-base text-white font-normal">SAM Venue is a platform providing venue vendor services
                    and event support. The website focuses on enhancing the user experience in finding suitable
                    locations and event services.</div>
                <router-link :to="{ name: 'Detail', params: { id: 'sam-venue' } }">
                    <div class="p-[1px] rounded-lg bg-gradient-to-r from-[#7B4CDB] to-[#BDA5ED] cursor-pointer w-fit">
                        <div class="bg-white dark:bg-[#130824] rounded-lg p-4 flex gap-x-2">
                            <p
                                class="bg-gradient-to-r from-[#7B4CDB] to-[#BDA5ED] bg-clip-text text-transparent text-base font-medium">
                                See Detail Project</p>
                            <img src="/arrow-right.svg" alt="arrow right">
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="p-6 flex flex-row gap-x-10 items-center rounded-2xl backdrop-blur-xs"
            style="background: var(--gradient-in-card);">
            <div class="w-1/2 flex flex-col gap-y-6">
                <div class="flex flex-row gap-x-6">
                    <img src="/logo-danain.svg" alt="logo sam venue">
                    <div>
                        <p
                            class="text-base font-semibold bg-gradient-to-r from-[#7B4CDB] to-[#BDA5ED] bg-clip-text text-transparent">
                            Product Design</p>
                        <p class="text-[30px] font-semibold text-white">DANAIN</p>
                    </div>
                </div>
                <div class="text-base text-white font-normal">As the Lead Product Designer at Danain, I played a key
                    role in enhancing the platform’s user experience and optimizing product functionality. Danain is a
                    fintech lending platform that connects lenders and borrowers through secured, asset-backed loans.
                </div>
                <router-link :to="{ name: 'Detail', params: { id: 'danain' } }">
                    <div class="p-[1px] rounded-lg bg-gradient-to-r from-[#7B4CDB] to-[#BDA5ED] cursor-pointer w-fit">
                        <div class="bg-white dark:bg-[#130824] rounded-lg p-4 flex gap-x-2">
                            <p
                                class="bg-gradient-to-r from-[#7B4CDB] to-[#BDA5ED] bg-clip-text text-transparent text-base  font-medium">
                                See Detail Project</p>
                            <img src="/arrow-right.svg" alt="arrow right">
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="rounded-2xl h-[360px] w-1/2 flex justify-center items-center relative overflow-hidden"
                style="background: var(--gradient-in-card);">
                <div class="absolute -bottom-56 left-10 transition ease-in-out duration-500 hover:-translate-y-56">
                    <img src="/mockup-danain.png" alt="danain-porto">
                </div>
                <img src="/See_Me!.png" alt="see me" class="mb-16">
            </div>
        </div>
    </section>
</template>