<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="fixed top-6 left-0 right-0 z-50">
    <div class="max-w-7xl mx-auto px-8">
      <div class="flex items-center justify-center">
        <!-- Floating Navigation Pill -->
        <div class="flex items-center bg-black backdrop-blur-sm p-2 rounded-full shadow-2xl border border-white/10">
          <!-- Logo di dalam pill -->
          <div class="flex items-center px-4 py-2 rounded-full bg-slate-800/50 mx-1">
            <span class="font-bold text-lg text-white tracking-tight">Leafiess</span>
          </div>

          <!-- Separator -->
          <div class="w-px h-6 bg-white/10 mx-2"></div>

          <!-- Navigation Links -->
          <ul class="flex gap-1 list-none items-center">
            <li>
              <RouterLink to="/Home" class="text-white/70 hover:text-white transition px-4 py-2 rounded-full hover:bg-white/5 text-sm font-medium" active-class="border-b-2 border-white/80 pb-1">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/product" class="text-white/70 hover:text-white transition px-4 py-2 rounded-full hover:bg-white/5 text-sm font-medium" active-class="border-b-2 border-white/80 pb-1">Product</RouterLink>
            </li>
            <li>
              <RouterLink to="/store" class="text-white/70 hover:text-white transition px-4 py-2 rounded-full hover:bg-white/5 text-sm font-medium" active-class="border-b-2 border-white/80 pb-1">Store</RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="text-white/70 hover:text-white transition px-4 py-2 rounded-full hover:bg-white/5 text-sm font-medium" active-class="border-b-2 border-white/80 pb-1">About</RouterLink>
            </li>
            <li>
              <RouterLink to="/support" class="text-white/70 hover:text-white transition px-4 py-2 rounded-full hover:bg-white/5 text-sm font-medium" active-class="border-b-2 border-white/80 pb-1">Support</RouterLink>
            </li>
            <li>
              <RouterLink to="/profile" class="text-white/70 hover:text-white transition px-4 py-2 rounded-full hover:bg-white/5 text-sm font-medium" active-class="border-b-2 border-white/80 pb-1">Profile</RouterLink>
            </li>
          </ul>

          <!-- Separator -->
          <div class="w-px h-6 bg-white/10 mx-2"></div>

          <!-- Auth Links -->
          <div class="flex gap-2 items-center px-2">
            <RouterLink to="/login" class="text-white/70 hover:text-white transition px-4 py-2 rounded-full hover:bg-white/5 text-sm font-medium">Login</RouterLink>
            <RouterLink to="/signin" class="bg-gradient-to-r from-blue-950 to-blue-900 text-white px-4 py-2 rounded-full hover:opacity-90 transition text-sm font-medium shadow-lg">Chat Me</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>