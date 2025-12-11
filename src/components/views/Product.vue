<template>
  <section class="max-w-6xl mx-auto py-16 px-6">
    <!-- Header -->
    <div class="mb-16 text-center">
      <h1 class="text-5xl font-bold text-white mb-4 tracking-tight">My Projects</h1>
      <p class="text-lg text-white/70 max-w-2xl mx-auto">A curated collection of digital experiences I've crafted with passion and precision</p>
    </div>

    <!-- Featured Project -->
    <div v-if="featuredProject" class="mb-16 relative group">
      <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl -z-10 group-hover:opacity-80 transition-opacity"></div>
      <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
        <div class="flex flex-col lg:flex-row gap-8 items-start">
          <!-- Icon Container -->
          <div class="lg:w-1/4">
            <div class="w-24 h-24 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center text-5xl backdrop-blur-sm border border-white/10">
              {{ featuredProject.icon }}
            </div>
          </div>
          
          <!-- Content -->
          <div class="flex-1">
            <div class="inline-block bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 text-sm px-4 py-1.5 rounded-full border border-emerald-500/30 mb-3">
              Featured Project
            </div>
            <h2 class="text-3xl font-bold text-white mb-4">{{ featuredProject.title }}</h2>
            <p class="text-lg text-white/80 mb-6 leading-relaxed">{{ featuredProject.description }}</p>
            
            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tech in featuredProject.technologies" :key="tech" 
                    class="bg-white/5 text-white/90 text-xs px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                {{ tech }}
              </span>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-3">
              <a :href="featuredProject.liveUrl" target="_blank" 
                 class="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-all duration-300 font-medium group">
                <span class="flex items-center gap-2">
                  Visit Live
                  <span class="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
              <a v-if="featuredProject.githubUrl" :href="featuredProject.githubUrl" target="_blank" 
                 class="bg-white/5 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 font-medium">
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <div v-for="project in projects" :key="project.id" 
           class="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/10 transition-all duration-300 overflow-hidden">
        
        <!-- Header -->
        <div class="p-6">
          <!-- Category & Icon -->
          <div class="flex items-start justify-between mb-4">
            <span class="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 text-xs px-3 py-1 rounded-full">
              {{ project.category }}
            </span>
            <div class="text-3xl opacity-70 group-hover:opacity-100 transition-opacity">
              {{ project.icon }}
            </div>
          </div>
          
          <!-- Title & Description -->
          <h3 class="text-xl font-bold text-white mb-3 line-clamp-2">{{ project.title }}</h3>
          <p class="text-white/70 text-sm mb-4 line-clamp-2">{{ project.shortDesc }}</p>
          
          <!-- Technologies -->
          <div class="flex flex-wrap gap-1.5 mb-4">
            <span v-for="(tech, idx) in project.technologies.slice(0, 3)" :key="idx" 
                  class="bg-white/5 text-white/70 text-xs px-2.5 py-1 rounded-lg border border-white/5">
              {{ tech }}
            </span>
            <span v-if="project.technologies.length > 3" 
                  class="text-xs text-white/50 px-2.5 py-1">
              +{{ project.technologies.length - 3 }}
            </span>
          </div>
        </div>
        
        <!-- Stats & Actions -->
        <div class="px-6 pb-6 pt-4 border-t border-white/5">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-4 text-sm">
              <span class="flex items-center gap-1 text-white/80">
                <span class="text-yellow-400">★</span>
                {{ project.rating }}
              </span>
              <span class="text-white/80">👁️ {{ project.views }}</span>
            </div>
            <div class="flex gap-2">
              <a :href="project.liveUrl" target="_blank" 
                 class="text-white/70 hover:text-white transition-colors" title="Live Demo">
                ↗
              </a>
              <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" 
                 class="text-white/70 hover:text-white transition-colors" title="View Code">
                💻
              </a>
            </div>
          </div>
          
          <a :href="project.liveUrl" target="_blank" 
             class="block w-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-300 text-center py-2.5 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 hover:from-emerald-500/20 hover:to-teal-500/20 transition-all duration-300 text-sm font-medium">
            View Project Details
          </a>
        </div>
      </div>
    </div>

    <!-- View More -->
    <div class="text-center pt-8 border-t border-white/10">
      <button class="bg-white/5 backdrop-blur-sm text-white px-8 py-3 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 font-medium group">
        <span class="flex items-center justify-center gap-2">
          View More Projects
          <span class="group-hover:translate-y-0.5 transition-transform">↓</span>
        </span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'

const route = useRoute()

// Portfolio projects data
const projects = ref([
  {
    id: 1,
    title: 'E-Commerce Platform',
    shortDesc: 'Full-featured online store with product catalog, cart, and checkout.',
    description: 'A complete e-commerce solution built with Vue.js and Node.js backend.',
    category: 'Web App',
    icon: '🛒',
    bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    rating: 4.9,
    views: '1.2K',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/example/ecommerce'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    shortDesc: 'Personal portfolio showcasing projects and skills.',
    description: 'Responsive portfolio website with dark mode and animations.',
    category: 'Landing Page',
    icon: '💼',
    bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    rating: 4.7,
    views: '856',
    technologies: ['Vue.js', 'Vite', 'GSAP', 'Tailwind CSS'],
    liveUrl: 'https://example-portfolio.com',
    githubUrl: 'https://github.com/example/portfolio'
  },
  {
    id: 3,
    title: 'Task Management App',
    shortDesc: 'Collaborative task manager with real-time updates.',
    description: 'Real-time task management application with team collaboration features.',
    category: 'Dashboard',
    icon: '✅',
    bgColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    rating: 4.8,
    views: '645',
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'Material UI'],
    liveUrl: 'https://example-tasks.com',
    githubUrl: 'https://github.com/example/tasks'
  },
  {
    id: 4,
    title: 'Blogging Platform',
    shortDesc: 'Medium-like blogging platform with markdown support.',
    description: 'Content creation platform with rich editor and social features.',
    category: 'Web App',
    icon: '📝',
    bgColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    rating: 4.6,
    views: '923',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth'],
    liveUrl: 'https://example-blog.com',
    githubUrl: 'https://github.com/example/blog'
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    shortDesc: 'Real-time weather app with location tracking.',
    description: 'Interactive weather dashboard with forecasts and location services.',
    category: 'Web App',
    icon: '🌤️',
    bgColor: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    rating: 4.5,
    views: '534',
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js'],
    liveUrl: 'https://example-weather.com',
    githubUrl: 'https://github.com/example/weather'
  },
  {
    id: 6,
    title: 'Social Media Dashboard',
    shortDesc: 'Analytics dashboard for social media management.',
    description: 'Comprehensive dashboard for managing multiple social accounts.',
    category: 'Dashboard',
    icon: '📊',
    bgColor: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)',
    rating: 4.8,
    views: '1.1K',
    technologies: ['React', 'Redux', 'Chart.js', 'Ant Design'],
    liveUrl: 'https://example-social-dashboard.com',
    githubUrl: null
  }
])

// Featured project dari query atau project pertama
const featuredProject = computed(() => {
  const id = route.query.featuredId || route.query.featuredid || route.params.id
  if (id) {
    const key = Number(id)
    return projects.value.find(p => p.id === key) || projects.value[0]
  }
  return projects.value[0] || null
})
</script>

<style scoped>
/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply animations to cards */
.grid > div {
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
}

/* Staggered animation for grid items */
.grid > div:nth-child(1) { animation-delay: 0.1s; }
.grid > div:nth-child(2) { animation-delay: 0.2s; }
.grid > div:nth-child(3) { animation-delay: 0.3s; }
.grid > div:nth-child(4) { animation-delay: 0.4s; }
.grid > div:nth-child(5) { animation-delay: 0.5s; }
.grid > div:nth-child(6) { animation-delay: 0.6s; }

/* Gradient text effect */
.text-gradient {
  background: linear-gradient(135deg, #10b981 0%, #0d9488 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glow effect on hover */
.group:hover .glow {
  box-shadow: 0 0 30px rgba(16, 185, 129, 0.3);
}
</style>