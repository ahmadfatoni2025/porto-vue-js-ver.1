<template>
  <section class="max-w-6xl mx-auto py-16 px-6">
    <!-- Header -->
    <div class="mb-12">
      <div class="relative inline-block mb-4">
        <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-xl rounded-full blur-xl -z-10"></div>
        <h1 class="text-5xl font-bold text-white tracking-tight relative">Support Center</h1>
      </div>
      <p class="text-lg text-white/70">Get help with your projects and find answers to common questions</p>
    </div>

    <!-- Quick Actions -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div v-for="action in quickActions" :key="action.title" class="glass-card rounded-3xl p-8 text-center group">
        <div class="glass-icon-lg mx-auto mb-6 group-hover:scale-110 transition-transform">
          {{ action.icon }}
        </div>
        <h3 class="font-semibold text-xl text-white mb-3">{{ action.title }}</h3>
        <p class="text-white/60 text-sm mb-6">{{ action.description }}</p>
        <button class="glass-button w-full">
          {{ action.buttonText }}
        </button>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="mb-12">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
          <p class="text-white/60">Quick answers to common questions</p>
        </div>
        <div class="glass-icon">❓</div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div v-for="faq in faqs" :key="faq.id" class="glass-card rounded-2xl p-8 group hover:translate-y-[-4px] transition-all duration-300">
          <div class="flex items-start gap-4">
            <div class="glass-icon-sm flex-shrink-0">
              ?
            </div>
            <div>
              <h3 class="font-semibold text-lg text-white mb-3">{{ faq.question }}</h3>
              <p class="text-white/70 text-sm leading-relaxed">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="glass-card rounded-3xl p-10 mb-12">
      <div class="flex items-center justify-between mb-10">
        <div>
          <h2 class="text-3xl font-bold text-white mb-2">Contact Us</h2>
          <p class="text-white/60">Send us a message and we'll get back to you shortly</p>
        </div>
        <div class="glass-icon-lg">📨</div>
      </div>
      
      <form @submit.prevent="submitContact" class="space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-white/80 mb-3">Name</label>
            <input v-model="contactForm.name" type="text" 
                   class="glass-input w-full" 
                   placeholder="Enter your name" 
                   required>
          </div>

          <div>
            <label class="block text-sm font-medium text-white/80 mb-3">Email</label>
            <input v-model="contactForm.email" type="email" 
                   class="glass-input w-full" 
                   placeholder="Enter your email" 
                   required>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-white/80 mb-3">Subject</label>
          <div class="relative">
            <select v-model="contactForm.subject" 
                    class="glass-input w-full appearance-none" 
                    required>
              <option value="" disabled selected>Select a subject</option>
              <option value="technical">Technical Support</option>
              <option value="billing">Billing Question</option>
              <option value="feature">Feature Request</option>
              <option value="bug">Bug Report</option>
              <option value="other">Other</option>
            </select>
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg class="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-white/80 mb-3">Message</label>
          <textarea v-model="contactForm.message" rows="5" 
                    class="glass-input w-full resize-none" 
                    placeholder="Describe your issue or question..." 
                    required></textarea>
        </div>

        <div class="flex justify-end pt-6 border-t border-white/10">
          <button type="submit" class="glass-button-primary">
            <span class="flex items-center gap-2">
              Send Message
              <span class="text-lg">→</span>
            </span>
          </button>
        </div>
      </form>
    </div>

    <!-- Status Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="status in statuses" :key="status.title" class="glass-card rounded-2xl p-6">
        <div class="flex items-center gap-4">
          <div class="relative">
            <div class="w-3 h-3 rounded-full" :class="status.dotClass"></div>
            <div class="absolute inset-0 rounded-full animate-ping" :class="status.pulseClass"></div>
          </div>
          <div>
            <h3 class="font-semibold text-white mb-1">{{ status.title }}</h3>
            <p class="text-sm" :class="status.textClass">{{ status.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const quickActions = ref([
  {
    icon: '💬',
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    buttonText: 'Start Chat'
  },
  {
    icon: '📧',
    title: 'Email Support',
    description: 'Send us a detailed message',
    buttonText: 'Send Email'
  },
  {
    icon: '📚',
    title: 'Documentation',
    description: 'Browse our knowledge base',
    buttonText: 'View Docs'
  }
])

const faqs = ref([
  {
    id: 1,
    question: 'How do I get started with a new project?',
    answer: 'To start a new project, navigate to our Store page and browse available services. Choose the package that fits your needs and click "Buy Now" to proceed with the purchase.'
  },
  {
    id: 2,
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.'
  },
  {
    id: 3,
    question: 'How long does project delivery take?',
    answer: 'Delivery times vary by service. Most web development projects take 1-3 weeks, while consultation services are delivered within 24 hours. Check individual service details for exact timelines.'
  },
  {
    id: 4,
    question: 'Do you provide ongoing support after delivery?',
    answer: 'Yes, we offer 30 days of free support after project delivery. Extended support packages are also available for ongoing maintenance and updates.'
  },
  {
    id: 5,
    question: 'Can I request custom features?',
    answer: 'Absolutely! We welcome custom feature requests. Contact our support team to discuss your specific requirements and get a custom quote.'
  },
  {
    id: 6,
    question: 'What if I\'m not satisfied with the final result?',
    answer: 'We offer a 100% satisfaction guarantee. If you\'re not happy with the delivered work, we\'ll revise it until you are completely satisfied or provide a full refund.'
  }
])

const statuses = ref([
  {
    title: 'System Status',
    description: 'All systems operational',
    dotClass: 'bg-emerald-500',
    pulseClass: 'bg-emerald-500/40',
    textClass: 'text-emerald-300'
  },
  {
    title: 'Response Time',
    description: '< 2 hours average',
    dotClass: 'bg-blue-500',
    pulseClass: 'bg-blue-500/40',
    textClass: 'text-blue-300'
  },
  {
    title: 'Support Hours',
    description: '24/7 available',
    dotClass: 'bg-purple-500',
    pulseClass: 'bg-purple-500/40',
    textClass: 'text-purple-300'
  }
])

function submitContact() {
  // Handle form submission
  alert('Thank you for your message! We\'ll get back to you within 24 hours.')
  // Reset form
  contactForm.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
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

.glass-icon {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.glass-icon-lg {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.glass-icon-sm {
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
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

.glass-input {
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
  border-radius: 1rem;
  font-size: 0.875rem;
  transition: all 0.3s;
}

.glass-input:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 0 0 3px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.glass-input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

/* Select arrow styling */
select {
  cursor: pointer;
}

select option {
  background: rgba(30, 41, 59, 0.95);
  color: white;
}

/* Status dot animation */
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
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

/* FAQ grid staggered */
.grid > div:nth-child(4) { animation-delay: 0.4s; }
.grid > div:nth-child(5) { animation-delay: 0.5s; }
.grid > div:nth-child(6) { animation-delay: 0.6s; }
.grid > div:nth-child(7) { animation-delay: 0.7s; }
.grid > div:nth-child(8) { animation-delay: 0.8s; }
.grid > div:nth-child(9) { animation-delay: 0.9s; }

/* Responsive adjustments */
@media (max-width: 768px) {
  .glass-button-primary {
    padding: 0.875rem 2rem;
    font-size: 0.9rem;
  }
  
  .glass-icon-lg {
    width: 3rem;
    height: 3rem;
    font-size: 1.25rem;
  }
}

/* Custom scrollbar for textarea */
textarea::-webkit-scrollbar {
  width: 6px;
}

textarea::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>