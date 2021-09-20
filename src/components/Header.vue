<template>
    <header class="flex flex-col md:flex-row flex-wrap justify-center pt-5">
        <div class="flex justify-between items-center h-10 w-30 mx-5 bg-red-300">
            LOGO HERE

            <!-- togglebotton -->
            <div class="block md:hidden md:bg-gray-100 rounded-lg">
                toggle here
            </div>
        </div>
        <!-- main-nav -->
        <nav class="hidden md:flex flex-col md:flex-row flex-wrap items-center mx-10 text-xl justify-center">
            <a href="" class="mr-2 md:mr-5 hover:text-gray-900">First Link</a>
            <a href="" class="mr-2 md:mr-5 hover:text-gray-900">Second Link</a>
            <a href="" class="mr-2 md:mr-5 hover:text-gray-900">Third Link</a>
            <a href="" class="mr-2 md:mr-5 hover:text-gray-900">Fourth Link</a>
            <a href="" class="mr-2 md:mr-5 hover:text-gray-900">Fifth Link</a>
            <a href="" class="mr-2 md:mr-5 hover:text-gray-900">Sixth Link</a>
        </nav>

        <!-- hidden-nav -->
        <nav class="flex flex-col md:flex-row md:hidden items-center text-4xl justify-center">
            <a href="" class="m-auto pt-20 hover:text-gray-900">First Link</a>
            <a href="" class="m-auto pt-20 hover:text-gray-900">Second Link</a>
            <a href="" class="m-auto pt-20 hover:text-gray-900">Third Link</a>
            <a href="" class="m-auto pt-20 hover:text-gray-900">Fourth Link</a>
            <a href="" class="m-auto pt-20 hover:text-gray-900">Fifth Link</a>
            <a href="" class="m-auto pt-20 hover:text-gray-900">Sixth Link</a>
        </nav>

        <div class="hidden md:flex">
            <button class="mr-10">Register</button>
            <button class="">Login</button>
        </div>
    </header>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>