<template>
  <section class="max-w-6xl mx-auto py-16 px-6">
    <!-- Header -->
    <div class="mb-12">
      <div class="relative inline-block mb-4">
        <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-xl rounded-full blur-xl -z-10"></div>
        <h1 class="text-5xl font-bold text-white tracking-tight relative">Store</h1>
      </div>
      <p class="text-lg text-white/70">Browse services, templates, and development packages</p>
    </div>

    <!-- Featured Service -->
    <div v-if="featuredService" class="mb-12">
      <div class="glass-card rounded-3xl p-10 relative overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm -z-10 group-hover:opacity-80 transition-opacity"></div>
        
        <div class="flex flex-col lg:flex-row gap-10 items-start">
          <!-- Service Icon -->
          <div class="lg:w-1/4">
            <div class="glass-featured-icon">
              {{ featuredService.icon }}
            </div>
          </div>
          
          <!-- Content -->
          <div class="flex-1">
            <div class="inline-flex items-center gap-3 mb-6">
              <div class="glass-badge bg-emerald-500/10 text-emerald-300">
                ⭐ Featured Service
              </div>
              <div class="glass-badge bg-red-500/10 text-red-300">
                -{{ featuredService.discount }}% OFF
              </div>
            </div>
            
            <h2 class="text-3xl font-bold text-white mb-4">{{ featuredService.title }}</h2>
            <p class="text-lg text-white/80 mb-6 leading-relaxed">{{ featuredService.description }}</p>
            
            <!-- Features -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="feature in featuredService.features" :key="feature" 
                    class="glass-tag">
                {{ feature }}
              </span>
            </div>
            
            <!-- Pricing -->
            <div class="flex items-center gap-6 mb-8">
              <div>
                <span class="text-4xl font-bold text-white">${{ featuredService.price }}</span>
                <span v-if="featuredService.originalPrice" 
                      class="text-lg text-white/50 line-through ml-3">${{ featuredService.originalPrice }}</span>
              </div>
              <div class="glass-stat-sm">
                <div class="text-sm text-white/60">Delivery</div>
                <div class="font-medium text-white">🚀 {{ featuredService.deliveryTime }}</div>
              </div>
              <div class="glass-stat-sm">
                <div class="text-sm text-white/60">Rating</div>
                <div class="font-medium text-white">★ {{ featuredService.rating }}</div>
              </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-4">
              <button @click="purchaseService(featuredService.id)" class="glass-button-primary">
                <span class="flex items-center gap-2">
                  Purchase Now
                  <span class="text-lg">→</span>
                </span>
              </button>
              <button @click="viewServiceDetail(featuredService.id)" class="glass-button-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Services Grid -->
    <div class="mb-12">
      <!-- Grid Header -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h2 class="text-2xl font-bold text-white mb-2">Available Services</h2>
          <p class="text-white/60">{{ services.length }} premium services available</p>
        </div>
        
        <!-- Filters -->
        <div class="flex flex-wrap gap-4">
          <select class="glass-select">
            <option>All Categories</option>
            <option>Web Development</option>
            <option>UI/UX Design</option>
            <option>Templates</option>
            <option>Consultation</option>
          </select>
          
          <select class="glass-select">
            <option>Sort by: Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>
      
      <!-- Services Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.id" 
             class="glass-card rounded-2xl overflow-hidden group hover:translate-y-[-4px] transition-all duration-300">
          
          <!-- Service Thumbnail -->
          <div class="w-full h-48 relative overflow-hidden" :style="{ background: service.bgColor }">
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div class="absolute top-4 right-4">
              <div class="glass-badge-sm bg-red-500/10 text-red-300" v-if="service.discount">
                -{{ service.discount }}% OFF
              </div>
            </div>
            <div class="absolute top-4 left-4">
              <div class="glass-badge-sm bg-white/10 text-white">
                {{ service.category }}
              </div>
            </div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="glass-service-icon text-5xl">
                {{ service.icon }}
              </div>
            </div>
          </div>
          
          <!-- Service Content -->
          <div class="p-6">
            <!-- Title & Description -->
            <h3 class="font-bold text-xl text-white mb-3 line-clamp-2">{{ service.title }}</h3>
            <p class="text-white/70 text-sm mb-4 line-clamp-2">{{ service.shortDesc }}</p>
            
            <!-- Features -->
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span v-for="(feature, idx) in service.features.slice(0, 2)" :key="idx" 
                    class="glass-tag-sm">
                {{ feature }}
              </span>
              <span v-if="service.features.length > 2" 
                    class="glass-tag-more">
                +{{ service.features.length - 2 }}
              </span>
            </div>
            
            <!-- Rating & Delivery -->
            <div class="flex items-center justify-between text-sm mb-4">
              <div class="flex items-center gap-2">
                <span class="text-yellow-400">★</span>
                <span class="font-medium text-white">{{ service.rating }}</span>
                <span class="text-white/50">({{ service.reviews }})</span>
              </div>
              <div class="flex items-center gap-1 text-white/70">
                <span>🚀</span>
                <span>{{ service.deliveryTime }}</span>
              </div>
            </div>
            
            <!-- Pricing -->
            <div class="flex items-center justify-between mb-6">
              <div>
                <div class="flex items-baseline gap-2">
                  <span class="text-2xl font-bold text-white">${{ service.price }}</span>
                  <span v-if="service.originalPrice" 
                        class="text-sm text-white/50 line-through">${{ service.originalPrice }}</span>
                </div>
              </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex gap-2">
              <button @click="purchaseService(service.id)" 
                      class="flex-1 glass-button">
                Buy Now
              </button>
              <button @click="viewServiceDetail(service.id)" 
                      class="px-4 glass-button-icon" 
                      title="View Details">
                🔍
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Load More -->
    <div class="text-center">
      <button class="glass-button-secondary">
        <span class="flex items-center gap-2">
          Load More Services
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

// Services data - marketplace untuk jasa development
const services = ref([
  {
    id: 1,
    title: 'Complete E-Commerce Website',
    shortDesc: 'Full-featured online store with payment integration and admin panel.',
    description: 'Professional e-commerce website with product catalog, shopping cart, payment gateway integration, and admin dashboard.',
    category: 'Web Development',
    icon: '🛒',
    bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    rating: 4.9,
    reviews: 127,
    price: 2999,
    originalPrice: 3999,
    discount: 25,
    deliveryTime: '2-3 weeks',
    features: ['Responsive Design', 'Payment Integration', 'Admin Panel', 'SEO Optimized', 'Mobile App']
  },
  {
    id: 2,
    title: 'Modern Portfolio Website',
    shortDesc: 'Showcase your work with a stunning portfolio website.',
    description: 'Beautiful portfolio website with smooth animations, project galleries, and contact forms.',
    category: 'Web Development',
    icon: '💼',
    bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    rating: 4.8,
    reviews: 89,
    price: 899,
    originalPrice: 1299,
    discount: 31,
    deliveryTime: '1-2 weeks',
    features: ['Responsive Design', 'Animations', 'Contact Form', 'SEO Ready', 'Fast Loading']
  },
  {
    id: 3,
    title: 'Business Landing Page',
    shortDesc: 'Convert visitors into customers with a high-converting landing page.',
    description: 'Optimized landing page with compelling copy, call-to-action buttons, and conversion tracking.',
    category: 'Web Development',
    icon: '📈',
    bgColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    rating: 4.7,
    reviews: 156,
    price: 599,
    originalPrice: 799,
    discount: 25,
    deliveryTime: '5-7 days',
    features: ['A/B Testing Ready', 'Analytics Integration', 'Mobile Optimized', 'Fast Loading']
  },
  {
    id: 4,
    title: 'UI/UX Design Package',
    shortDesc: 'Complete design system and user interface design.',
    description: 'Professional UI/UX design including wireframes, mockups, prototypes, and design system.',
    category: 'UI/UX Design',
    icon: '🎨',
    bgColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    rating: 4.9,
    reviews: 73,
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    deliveryTime: '1-2 weeks',
    features: ['Wireframes', 'High-fidelity Mockups', 'Interactive Prototype', 'Design System', 'User Research']
  },
  {
    id: 5,
    title: 'WordPress Theme Customization',
    shortDesc: 'Custom WordPress theme tailored to your brand.',
    description: 'Fully customized WordPress theme with your branding, content, and functionality requirements.',
    category: 'Web Development',
    icon: '🎯',
    bgColor: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    rating: 4.6,
    reviews: 94,
    price: 799,
    originalPrice: 999,
    discount: 20,
    deliveryTime: '1-2 weeks',
    features: ['Custom Design', 'Responsive Layout', 'SEO Optimized', 'Fast Loading', 'Plugin Integration']
  },
  {
    id: 6,
    title: 'Technical Consultation',
    shortDesc: 'Expert advice on your web development projects.',
    description: '1-hour consultation session to discuss your project requirements and technical solutions.',
    category: 'Consultation',
    icon: '💡',
    bgColor: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)',
    rating: 4.8,
    reviews: 45,
    price: 149,
    originalPrice: null,
    discount: 0,
    deliveryTime: 'Within 24 hours',
    features: ['Project Planning', 'Technology Stack', 'Best Practices', 'Code Review', 'Performance Tips']
  },
  {
    id: 7,
    title: 'React Component Library',
    shortDesc: 'Reusable React components for your projects.',
    description: 'Custom React component library with documentation and TypeScript support.',
    category: 'Templates',
    icon: '⚛️',
    bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    rating: 4.7,
    reviews: 38,
    price: 499,
    originalPrice: 699,
    discount: 29,
    deliveryTime: '3-5 days',
    features: ['TypeScript Support', 'Storybook Docs', 'Unit Tests', 'Responsive Design', 'Accessibility']
  },
  {
    id: 8,
    title: 'API Development Service',
    shortDesc: 'RESTful API development with documentation.',
    description: 'Complete API development with authentication, documentation, and testing.',
    category: 'Web Development',
    icon: '🔌',
    bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    rating: 4.9,
    reviews: 67,
    price: 1299,
    originalPrice: 1699,
    discount: 24,
    deliveryTime: '2-3 weeks',
    features: ['RESTful Design', 'Authentication', 'Documentation', 'Testing', 'Database Design']
  }
])

// Featured service dari query atau service pertama
const featuredService = computed(() => {
  const id = route.query.featuredId || route.query.featuredid || route.params.id
  if (id) {
    const key = Number(id)
    return services.value.find(s => s.id === key) || services.value[0]
  }
  return services.value[0] || null
})

// Purchase service action
function purchaseService (serviceId) {
  alert(`Service #${serviceId} added to cart!`)
}

// View service detail
function viewServiceDetail (serviceId) {
  alert(`Viewing details for service #${serviceId}`)
}
</script>

<style scoped>
/* Glass Morphism Base Styles */
.glass-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

.glass-featured-icon {
  width: 8rem;
  height: 8rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.glass-service-icon {
  width: 6rem;
  height: 6rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.glass-badge {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.glass-badge-sm {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
}

.glass-tag {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  padding: 0.375rem 0.875rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  transition: all 0.3s;
}

.glass-tag-sm {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
}

.glass-tag-more {
  color: rgba(255, 255, 255, 0.5);
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
}

.glass-stat-sm {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.75rem;
  border-radius: 1rem;
  min-width: 5rem;
}

.glass-button-primary {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.glass-button-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.15) 100%
  );
  opacity: 0;
  transition: opacity 0.3s;
}

.glass-button-primary:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.4);
}

.glass-button-primary:hover::before {
  opacity: 1;
}

.glass-button-secondary {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s;
}

.glass-button-secondary:hover {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-4px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.glass-button {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.875rem 1.5rem;
  border-radius: 1rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-button:hover {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 
    0 12px 24px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.glass-button-icon {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: white;
  padding: 0.875rem;
  border-radius: 1rem;
  font-size: 1.25rem;
  transition: all 0.3s;
}

.glass-button-icon:hover {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.glass-select {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: white;
  padding: 0.875rem 1rem;
  padding-right: 2.5rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  transition: all 0.3s;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='rgba%28255,255,255,0.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.25em 1.25em;
  cursor: pointer;
}

.glass-select:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 0 0 3px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.glass-select option {
  background: rgba(30, 41, 59, 0.95);
  color: white;
}

/* Animations */
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

.glass-card {
  animation: fadeInUp 0.6s ease-out;
}

/* Staggered animations */
.grid > div:nth-child(1) { animation-delay: 0.1s; }
.grid > div:nth-child(2) { animation-delay: 0.2s; }
.grid > div:nth-child(3) { animation-delay: 0.3s; }
.grid > div:nth-child(4) { animation-delay: 0.4s; }
.grid > div:nth-child(5) { animation-delay: 0.5s; }
.grid > div:nth-child(6) { animation-delay: 0.6s; }
.grid > div:nth-child(7) { animation-delay: 0.7s; }
.grid > div:nth-child(8) { animation-delay: 0.8s; }

/* Service thumbnail overlay */
.w-full.h-48::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  opacity: 0;
  transition: opacity 0.3s;
}

.w-full.h-48:hover::after {
  opacity: 1;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .glass-featured-icon {
    width: 6rem;
    height: 6rem;
    font-size: 2rem;
  }
  
  .glass-button-primary,
  .glass-button-secondary {
    padding: 0.875rem 2rem;
    font-size: 0.9rem;
  }
  
  .glass-select {
    width: 100%;
  }
}
</style>