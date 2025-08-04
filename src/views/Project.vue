<template>
    <section id="project" class="py-[70px] px-20 lg:px-[140px] flex flex-col gap-y-10">
        <div class="text-white font-semibold text-[40px]">Selected Project</div>
        <div class="p-6 flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row gap-x-10 items-center rounded-2xl backdrop-blur-xs"
            style="background: var(--gradient-in-card);">
            <div class="rounded-2xl h-[360px] w-full lg:w-1/2 flex justify-center items-center relative overflow-hidden"
                style="background: var(--gradient-in-card);">
                <div class="lg:absolute -bottom-56 transition ease-in-out duration-500 hover:-translate-y-48 -mb-10 lg:mb-0">
                    <img src="/sam-pic-removebg.png" alt="sam-porto">
                </div>
                <img src="/See_Me!.png" alt="see me" class="mb-16 hidden lg:block">
            </div>
            <div class="lg:w-1/2 w-full flex flex-col gap-y-6">
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
                <RouterLink to="/sam-venue">
                    <div class="p-[1px] rounded-lg bg-gradient-to-r from-[#7B4CDB] to-[#BDA5ED] cursor-pointer w-fit">
                        <div class="bg-white dark:bg-[#130824] rounded-lg p-4 flex gap-x-2">
                            <p
                                class="bg-gradient-to-r from-[#7B4CDB] to-[#BDA5ED] bg-clip-text text-transparent text-base font-medium">
                                See Detail Project</p>
                            <img src="/arrow-right.svg" alt="arrow right">
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
        <div class="p-6 flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row gap-x-10 items-center rounded-2xl backdrop-blur-xs"
            style="background: var(--gradient-in-card);">
            <div class="lg:w-1/2 w-full flex flex-col gap-y-6 order-2 lg:order-1">
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
                <RouterLink to="/danain">
                    <div class="p-[1px] rounded-lg bg-gradient-to-r from-[#7B4CDB] to-[#BDA5ED] cursor-pointer w-fit">
                        <div class="bg-white dark:bg-[#130824] rounded-lg p-4 flex gap-x-2">
                            <p
                                class="bg-gradient-to-r from-[#7B4CDB] to-[#BDA5ED] bg-clip-text text-transparent text-base  font-medium">
                                See Detail Project</p>
                            <img src="/arrow-right.svg" alt="arrow right">
                        </div>
                    </div>
                </RouterLink >
            </div>
            <div class="rounded-2xl h-[360px] lg:w-1/2 w-full flex justify-center items-center relative overflow-hidden order-1 lg:order-2"
                style="background: var(--gradient-in-card);">
                <div class="lg:absolute -bottom-56 left-10 transition ease-in-out duration-500 hover:-translate-y-56 -mb-10 lg:mb-0 -ml-14 lg:ml-0">
                    <img src="/mockup-danain.png" alt="danain-porto">
                </div>
                <img src="/See_Me!.png" alt="see me" class="mb-16 hidden lg:block">
            </div>
        </div>
    </section>
</template>