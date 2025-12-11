<template>
  <section class="max-w-6xl mx-auto py-16 px-6">
    <!-- Header -->
    <div class="mb-16 text-center">
      <div class="relative inline-block">
        <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-xl rounded-full blur-xl -z-10"></div>
        <h1 class="text-5xl font-bold text-white mb-4 tracking-tight relative">About Me</h1>
      </div>
      <p class="text-lg text-white/70 max-w-2xl mx-auto">
        Passionate full-stack developer crafting digital experiences that matter
      </p>
    </div>

    <!-- Bento Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <!-- Hero Card - Large -->
      <div class="md:col-span-2 lg:col-span-2 glass-card rounded-3xl p-10">
        <div class="flex flex-col h-full justify-between">
          <div>
            <h2 class="text-4xl font-bold text-white mb-6">Hi, I'm Tony</h2>
            <p class="text-white/80 text-lg leading-relaxed mb-8">
              A passionate full-stack developer with 5+ years of experience creating innovative web solutions.
              I love turning complex problems into simple, beautiful designs that provide exceptional user experiences.
            </p>
          </div>
          <div class="flex gap-6">
            <div v-for="stat in stats" :key="stat.label" class="glass-stat">
              <div class="text-3xl font-bold text-white mb-1">{{ stat.value }}</div>
              <div class="text-sm text-white/70">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Profile Photo Card -->
      <div class="glass-card rounded-3xl p-8">
        <div class="text-center">
          <div class="glass-avatar-lg mx-auto mb-6">
            <span class="text-3xl text-white font-bold">JD</span>
          </div>
          <h3 class="font-bold text-xl text-white mb-2"> Ahmad Fatoni</h3>
          <p class="text-white/70 mb-6">Full-Stack Developer</p>
          <div class="glass-badge inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-300">
            <span>✓</span>
            <span>Available for work</span>
          </div>
        </div>
      </div>

      <!-- Skills Card -->
      <div class="glass-card rounded-3xl p-8">
        <h3 class="font-semibold text-xl text-white mb-6 flex items-center gap-3">
          <div class="glass-icon">
            🎯
          </div>
          Core Skills
        </h3>
        <div class="space-y-5">
          <div v-for="skill in skills" :key="skill.name" class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-white/80 text-sm">{{ skill.name }}</span>
              <span class="text-white/60 text-xs">{{ skill.level }}%</span>
            </div>
            <div class="glass-progress">
              <div class="glass-progress-bar" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Card -->
      <div class="glass-card rounded-3xl p-8">
        <h3 class="font-semibold text-xl text-white mb-6 flex items-center gap-3">
          <div class="glass-icon">
            💼
          </div>
          Experience
        </h3>
        <div class="space-y-6">
          <div v-for="exp in experiences" :key="exp.title" class="glass-experience-item">
            <div class="font-medium text-white">{{ exp.title }}</div>
            <div class="text-sm text-white/60">{{ exp.company }} • {{ exp.period }}</div>
            <div class="glass-experience-dot"></div>
          </div>
        </div>
      </div>

      <!-- Technologies Card - Large -->
      <div class="md:col-span-2 lg:col-span-2 glass-card rounded-3xl p-8">
        <h3 class="font-semibold text-xl text-white mb-6 flex items-center gap-3">
          <div class="glass-icon">
            🔧
          </div>
          Technologies I Work With
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div v-for="tech in technologies" :key="tech.name" class="text-center group">
            <div class="glass-tech-icon mx-auto mb-3 group-hover:scale-110 transition-transform">
              <span class="text-2xl">{{ tech.icon }}</span>
            </div>
            <div class="text-sm font-medium text-white/90">{{ tech.name }}</div>
          </div>
        </div>
      </div>

      <!-- Education Card -->
      <div class="glass-card rounded-3xl p-8">
        <h3 class="font-semibold text-xl text-white mb-6 flex items-center gap-3">
          <div class="glass-icon">
            🎓
          </div>
          Education
        </h3>
        <div class="space-y-6">
          <div v-for="edu in education" :key="edu.degree" class="glass-education-item">
            <div class="font-medium text-white">{{ edu.degree }}</div>
            <div class="text-sm text-white/60">{{ edu.institution }} • {{ edu.period }}</div>
            <div class="glass-education-badge">{{ edu.type }}</div>
          </div>
        </div>
      </div>

      <!-- Achievements Card -->
      <div class="glass-card rounded-3xl p-8">
        <h3 class="font-semibold text-xl text-white mb-6 flex items-center gap-3">
          <div class="glass-icon">
            🏆
          </div>
          Achievements
        </h3>
        <div class="space-y-5">
          <div v-for="achievement in achievements" :key="achievement.title" class="glass-achievement-item">
            <div class="glass-icon-sm">
              {{ achievement.icon }}
            </div>
            <div class="flex-1">
              <div class="font-medium text-white text-sm">{{ achievement.title }}</div>
              <div class="text-xs text-white/60">{{ achievement.description }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Fun Facts Card -->
      <div class="glass-card rounded-3xl p-8">
        <h3 class="font-semibold text-xl text-white mb-6 flex items-center gap-3">
          <div class="glass-icon">
            🌟
          </div>
          Fun Facts
        </h3>
        <div class="space-y-5">
          <div v-for="fact in funFacts" :key="fact.title" class="glass-funfact-item">
            <div class="glass-icon-sm">
              {{ fact.icon }}
            </div>
            <div class="flex-1">
              <div class="font-medium text-white text-sm">{{ fact.title }}</div>
              <div class="text-xs text-white/60">{{ fact.description }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact CTA Card - Large -->
      <div class="md:col-span-2 lg:col-span-3 glass-card rounded-3xl p-10 bg-gradient-to-r from-white/10 to-white/5">
        <div class="text-center">
          <h3 class="text-3xl font-bold text-white mb-6">Let's Work Together</h3>
          <p class="text-white/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            I'm always interested in new opportunities and exciting projects.
            Whether you have a project in mind or just want to chat about technology,
            I'd love to hear from you!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/store" class="glass-button-primary">
              View My Services
            </router-link>
            <router-link to="/support" class="glass-button-secondary">
              Get In Touch
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref([
  { value: '50+', label: 'Projects Completed' },
  { value: '100+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' }
])

const skills = ref([
  { name: 'JavaScript', level: 95 },
  { name: 'React/Vue', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'TypeScript', level: 85 },
  { name: 'UI/UX Design', level: 75 }
])

const experiences = ref([
  { title: 'Senior Developer', company: 'Tech Corp', period: '2022-Present' },
  { title: 'Full-Stack Developer', company: 'StartupXYZ', period: '2020-2022' },
  { title: 'Junior Developer', company: 'WebAgency', period: '2019-2020' }
])

const education = ref([
  { degree: 'Computer Science', institution: 'University of Tech', period: '2015-2019', type: "Bachelor's Degree" },
  { degree: 'Web Development', institution: 'Online Bootcamp', period: '2018', type: 'Certificate' }
])

const achievements = ref([
  { icon: '🏆', title: 'Best Developer 2023', description: 'Company Award' },
  { icon: '🚀', title: '50+ Projects', description: 'Successfully Delivered' },
  { icon: '🌟', title: '100+ Happy Clients', description: '5-Star Reviews' }
])

const funFacts = ref([
  { icon: '☕', title: 'Coffee Addict', description: '5+ cups per day' },
  { icon: '🎵', title: 'Music Lover', description: 'Always coding with headphones' },
  { icon: '🌍', title: 'Traveler', description: 'Visited 15+ countries' }
])

const technologies = ref([
  { name: 'React', icon: '⚛️' },
  { name: 'Vue.js', icon: '💚' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Git', icon: '📚' },
  { name: 'Figma', icon: '🎨' }
])
</script>

<style scoped>
/* Glass Morphism Base Styles dari profile page */
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

.glass-avatar-lg {
  width: 8rem;
  height: 8rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
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

.glass-stat {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.25rem;
  border-radius: 1.25rem;
  flex: 1;
  text-align: center;
  transition: all 0.3s;
}

.glass-stat:hover {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.06) 100%
  );
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-4px);
}

.glass-progress {
  width: 100%;
  height: 6px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.glass-progress-bar {
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  border-radius: 3px;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-experience-item {
  position: relative;
  padding-left: 1.5rem;
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s;
}

.glass-experience-item:hover {
  border-left-color: rgba(255, 255, 255, 0.4);
  transform: translateX(4px);
}

.glass-experience-dot {
  position: absolute;
  left: -0.375rem;
  top: 0.25rem;
  width: 0.75rem;
  height: 0.75rem;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.glass-tech-icon {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.glass-tech-icon:hover {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.06) 100%
  );
  border-color: rgba(255, 255, 255, 0.2);
}

.glass-education-item {
  position: relative;
  padding: 1rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  transition: all 0.3s;
}

.glass-education-item:hover {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.glass-education-badge {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.25rem 0.75rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
}

.glass-achievement-item,
.glass-funfact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  transition: all 0.3s;
}

.glass-achievement-item:hover,
.glass-funfact-item:hover {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
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
.grid > div:nth-child(9) { animation-delay: 0.9s; }

/* Responsive adjustments */
@media (max-width: 768px) {
  .glass-stat {
    padding: 1rem;
  }
  
  .glass-tech-icon {
    width: 3rem;
    height: 3rem;
  }
  
  .glass-button-primary,
  .glass-button-secondary {
    padding: 0.875rem 2rem;
    font-size: 0.9rem;
  }
}
</style>