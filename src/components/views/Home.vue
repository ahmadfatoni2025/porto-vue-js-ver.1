<template>
    <section>
        <div class="max-w-7xl mx-auto py-8 px-4 text-center lg:py-16 z-10 relative">
            <div class="w-auto inline-flex items-center p-1 pe-2 mb-4 text-sm text-fg-brand-strong rounded-full bg-brand-softer border border-brand-subtle"
                role="alert">
                <span class="bg-brand-soft text-fg-brand-strong py-0.5 px-2 rounded-full">New</span>
                <div class="ms-2 text-sm text-white">
                    Great job! You've acknowledged this <a href="#"
                        class="font-medium underline hover:no-underline">significant</a> alert message.
                </div>
                <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m9 5 7 7-7 7" />
                </svg>
            </div>
            <h1 class="mb-6 text-4xl font-bold tracking-tighter text-heading md:text-5xl lg:text-6xl text-white">We invest in the
                world’s potential</h1>
            <p class="mb-8 text-base font-normal text-body md:text-xl text-white">Here at Flowbite we focus on markets where
                technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            <form class="max-w-md mx-auto">
                <label for="rch"
                    class="rounded-full block mb-2.5 text-sm font-medium text-heading sr-only text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="search"
                        class="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-full focus:ring-brand focus:border-brand shadow-xs placeholder:text-body text-white border-white"
                        placeholder="Search" required />
                    <button type="button"
                        class="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-full text-xs px-3 py-1.5 focus:outline-none">Search</button>
                </div>
            </form>
        </div>
        <div
            class="bg-gradient-to-b from-blue-50 to-transparent dark:from-slate-950 w-full h-full absolute top-0 left-0 z-0">
        </div>
        
    </section>
</template>