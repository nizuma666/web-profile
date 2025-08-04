<template>
    <section id="tools" class="py-[70px] px-20 lg:px-[140px]">
        <div class="flex flex-col gap-y-[30px]">
            <p class="text-[32px] font-semibold text-white">Main Design Tools</p>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
                <div style="background: var(--gradient-in-card);"
                    class="flex flex-col gap-y-2 items-center justify-center p-6 rounded-2xl">
                    <img src="/logo-figma.svg" alt="figma">
                    <p class="text-base font-semibold text-white">Figma</p>
                </div>
                <div style="background: var(--gradient-in-card);"
                    class="flex flex-col gap-y-2 items-center justify-center p-6 rounded-2xl">
                    <img src="/logo-jira.svg" alt="jira">
                    <p class="text-base font-semibold text-white">Jira</p>
                </div>
                <div style="background: var(--gradient-in-card);"
                    class="flex flex-col gap-y-2 items-center justify-center p-6 rounded-2xl">
                    <img src="/logo-drawio.svg" alt="drawio">
                    <p class="text-base font-semibold text-white">Diagram</p>
                </div>
                <div style="background: var(--gradient-in-card);"
                    class="flex flex-col gap-y-2 items-center justify-center p-6 rounded-2xl">
                    <img src="/logo-maze.svg" alt="maze">
                    <p class="text-base font-semibold text-white">Maze</p>
                </div>
                <div style="background: var(--gradient-in-card);"
                    class="flex flex-col gap-y-2 items-center justify-center p-6 rounded-2xl hidden lg:block">
                    <img src="/logo-corel.svg" alt="corel">
                    <p class="text-base font-semibold text-white">Corel Draw</p>
                </div>
            </div>

        </div>
    </section>
</template>