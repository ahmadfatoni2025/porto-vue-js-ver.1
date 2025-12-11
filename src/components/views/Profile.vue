<template>
  <section class="max-w-6xl mx-auto py-16 px-6">
    <!-- Header -->
    <div class="mb-12 text-center">
      <div class="relative inline-block">
        <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-xl rounded-full blur-xl -z-10"></div>
        <h1 class="text-5xl font-bold text-white mb-4 tracking-tight relative">My Profile</h1>
      </div>
      <p class="text-lg text-white/70 max-w-2xl mx-auto">Manage your account settings and preferences</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Profile Sidebar -->
      <div class="lg:col-span-1 space-y-8">
        <!-- Profile Card -->
        <div class="glass-card rounded-3xl p-8 text-center">
          <div class="relative mb-8">
            <div class="glass-avatar w-32 h-32 mx-auto mb-6">
              <span class="text-3xl text-white font-bold">JD</span>
            </div>
            <button class="glass-button-sm absolute bottom-6 right-1/2 translate-x-1/2">
              ✏️ Edit
            </button>
          </div>
          <h3 class="font-bold text-2xl text-white mb-2">John Doe</h3>
          <p class="text-white/70 text-sm mb-8">john.doe@example.com</p>
          
          <!-- Verified Badge -->
          <div class="inline-flex items-center gap-2 glass-badge bg-emerald-500/10 text-emerald-300">
            <span>✓</span>
            <span>Verified Account</span>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="glass-card rounded-3xl p-8">
          <h4 class="font-semibold text-xl text-white mb-8 flex items-center gap-3">
            <div class="glass-icon">
              📊
            </div>
            Quick Stats
          </h4>
          <div class="space-y-6">
            <div v-for="stat in quickStats" :key="stat.label" class="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
              <span class="text-white/70">{{ stat.label }}</span>
              <span class="font-bold text-white text-xl">{{ stat.value }}</span>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div class="glass-card rounded-3xl p-8">
          <h4 class="font-semibold text-xl text-white mb-8 flex items-center gap-3">
            <div class="glass-icon">
              💼
            </div>
            Top Skills
          </h4>
          <div class="flex flex-wrap gap-3">
            <span v-for="skill in topSkills" :key="skill" class="glass-tag">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-8">
        <!-- Personal Information -->
        <div class="glass-card rounded-3xl p-8">
          <div class="flex items-center justify-between mb-10">
            <div>
              <h2 class="text-2xl font-bold text-white mb-3">Personal Information</h2>
              <p class="text-white/60">Update your personal details and bio</p>
            </div>
            <div class="glass-icon-lg">👤</div>
          </div>
          
          <form @submit.prevent="updateProfile" class="space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="field in personalFields" :key="field.key" :class="field.fullWidth ? 'md:col-span-2' : ''">
                <label class="block text-sm font-medium text-white/80 mb-3">{{ field.label }}</label>
                <component
                  :is="field.type === 'textarea' ? 'textarea' : 'input'"
                  v-model="profile[field.key]"
                  :type="field.type"
                  :rows="field.rows"
                  :placeholder="field.placeholder"
                  class="glass-input"
                />
              </div>
            </div>

            <div class="flex justify-end pt-8 border-t border-white/10">
              <button type="submit" class="glass-button">
                Update Profile
              </button>
            </div>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="glass-card rounded-3xl p-8">
          <div class="flex items-center justify-between mb-10">
            <div>
              <h2 class="text-2xl font-bold text-white mb-3">Contact Information</h2>
              <p class="text-white/60">Manage your social media and contact links</p>
            </div>
            <div class="glass-icon-lg">📱</div>
          </div>
          
          <form @submit.prevent="updateContacts" class="space-y-8">
            <!-- Social Links Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="link in socialLinks" :key="link.key" class="group">
                <label class="block text-sm font-medium text-white/80 mb-3">
                  <span class="flex items-center gap-3">
                    <div class="glass-icon-sm">
                      {{ link.icon }}
                    </div>
                    {{ link.label }}
                  </span>
                </label>
                <input v-model="contacts[link.key]" :type="link.type" :placeholder="link.placeholder" 
                       class="glass-input group-hover:border-white/30 transition-all duration-300" />
              </div>
            </div>

            <div class="flex justify-end pt-8 border-t border-white/10">
              <button type="submit" class="glass-button">
                Update Contacts
              </button>
            </div>
          </form>
        </div>

        <!-- Account Settings -->
        <div class="glass-card rounded-3xl p-8">
          <div class="flex items-center justify-between mb-10">
            <div>
              <h2 class="text-2xl font-bold text-white mb-3">Account Settings</h2>
              <p class="text-white/60">Manage your account preferences</p>
            </div>
            <div class="glass-icon-lg">⚙️</div>
          </div>
          
          <div class="space-y-8">
            <!-- Password Change -->
            <div>
              <h3 class="font-semibold text-xl text-white mb-6">Change Password</h3>
              <form @submit.prevent="changePassword" class="flex flex-col sm:flex-row gap-4">
                <input v-model="passwordForm.current" type="password" placeholder="Current Password" class="glass-input flex-1" />
                <input v-model="passwordForm.new" type="password" placeholder="New Password" class="glass-input flex-1" />
                <button type="submit" class="glass-button whitespace-nowrap">
                  Change Password
                </button>
              </form>
            </div>

            <!-- Notifications -->
            <div class="pt-8 border-t border-white/10">
              <h3 class="font-semibold text-xl text-white mb-6">Notification Preferences</h3>
              <div class="space-y-4">
                <label v-for="notification in notificationSettings" :key="notification.key" 
                       class="glass-notification-item group">
                  <div class="flex items-center gap-4">
                    <div class="glass-icon">
                      {{ notification.icon }}
                    </div>
                    <div class="flex-1">
                      <span class="text-white block mb-1">{{ notification.title }}</span>
                      <p class="text-sm text-white/60">{{ notification.description }}</p>
                    </div>
                  </div>
                  <input v-model="notifications[notification.key]" type="checkbox" 
                         class="glass-checkbox" />
                </label>
              </div>
            </div>

            <!-- Danger Zone -->
            <div class="pt-8 border-t border-white/10">
              <div class="glass-danger-zone">
                <div class="flex items-start gap-6">
                  <div class="glass-icon-danger">
                    ⚠️
                  </div>
                  <div class="flex-1">
                    <h3 class="font-semibold text-xl text-red-400 mb-3">Danger Zone</h3>
                    <p class="text-sm text-white/70 mb-6">Once you delete your account, there is no going back. Please be certain.</p>
                    <button @click="deleteAccount" class="glass-button-danger">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const profile = ref({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  bio: 'Full-stack developer passionate about creating amazing web experiences. Specializing in modern web technologies and user-centered design.'
})

const passwordForm = ref({
  current: '',
  new: ''
})

const notifications = ref({
  email: true,
  sms: false,
  marketing: true
})

const contacts = ref({
  github: 'https://github.com/johndoe',
  twitter: 'https://twitter.com/johndoe',
  linkedin: 'https://linkedin.com/in/johndoe',
  instagram: 'https://instagram.com/johndoe',
  website: 'https://johndoe.dev',
  location: 'San Francisco, CA',
  discord: 'johndoe#1234',
  telegram: '@johndoe'
})

// Data arrays untuk cleaner template
const quickStats = ref([
  { label: 'Projects Completed', value: '12' },
  { label: 'Active Projects', value: '3' },
  { label: 'Total Spent', value: '$4,250' },
  { label: 'Member Since', value: 'Jan 2024' }
])

const topSkills = ref(['Vue.js', 'React', 'Tailwind', 'Node.js', 'UI/UX', 'Figma', 'TypeScript', 'Next.js'])

const personalFields = ref([
  { key: 'firstName', label: 'First Name', type: 'text', placeholder: 'Enter first name' },
  { key: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Enter last name' },
  { key: 'email', label: 'Email', type: 'email', placeholder: 'Enter email address' },
  { key: 'phone', label: 'Phone', type: 'tel', placeholder: 'Enter phone number' },
  { key: 'bio', label: 'Bio', type: 'textarea', rows: 4, placeholder: 'Tell us about yourself...', fullWidth: true }
])

const socialLinks = ref([
  { key: 'github', icon: '💻', label: 'GitHub', type: 'url', placeholder: 'https://github.com/username' },
  { key: 'twitter', icon: '🐦', label: 'Twitter/X', type: 'url', placeholder: 'https://twitter.com/username' },
  { key: 'linkedin', icon: '💼', label: 'LinkedIn', type: 'url', placeholder: 'https://linkedin.com/in/username' },
  { key: 'instagram', icon: '📸', label: 'Instagram', type: 'url', placeholder: 'https://instagram.com/username' },
  { key: 'website', icon: '🌐', label: 'Portfolio', type: 'url', placeholder: 'https://yourportfolio.com' },
  { key: 'location', icon: '📍', label: 'Location', type: 'text', placeholder: 'City, Country' },
  { key: 'discord', icon: '🎮', label: 'Discord', type: 'text', placeholder: 'username#1234' },
  { key: 'telegram', icon: '📱', label: 'Telegram', type: 'text', placeholder: '@username' }
])

const notificationSettings = ref([
  { key: 'email', icon: '📧', title: 'Email Notifications', description: 'Receive project updates via email' },
  { key: 'sms', icon: '💬', title: 'SMS Alerts', description: 'Important alerts via SMS' },
  { key: 'marketing', icon: '📢', title: 'Marketing Emails', description: 'Promotions and newsletters' }
])

function updateProfile() {
  alert('Profile updated successfully!')
}

function changePassword() {
  if (!passwordForm.value.current || !passwordForm.value.new) {
    alert('Please fill in all password fields')
    return
  }
  alert('Password changed successfully!')
  passwordForm.value = { current: '', new: '' }
}

function deleteAccount() {
  if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
    alert('Account deletion request submitted. You will receive a confirmation email.')
  }
}

function updateContacts() {
  alert('Contact information updated successfully!')
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

.glass-avatar {
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
  padding: 0.875rem 2rem;
  border-radius: 1rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.glass-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  opacity: 0;
  transition: opacity 0.3s;
}

.glass-button:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.3);
}

.glass-button:hover::before {
  opacity: 1;
}

.glass-button-sm {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  transition: all 0.3s;
}

.glass-button-sm:hover {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
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

.glass-icon-danger {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(
    135deg,
    rgba(239, 68, 68, 0.2) 0%,
    rgba(239, 68, 68, 0.1) 100%
  );
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
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

.glass-tag:hover {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.06) 100%
  );
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.glass-input {
  width: 100%;
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

.glass-notification-item {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s;
}

.glass-notification-item:hover {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.glass-checkbox {
  appearance: none;
  -webkit-appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
}

.glass-checkbox:checked {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  border-color: rgba(255, 255, 255, 0.3);
}

.glass-checkbox:checked::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 0.875rem;
}

.glass-danger-zone {
  background: linear-gradient(
    135deg,
    rgba(239, 68, 68, 0.1) 0%,
    rgba(239, 68, 68, 0.05) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 1.5rem;
  padding: 2rem;
}

.glass-button-danger {
  background: linear-gradient(
    135deg,
    rgba(239, 68, 68, 0.2) 0%,
    rgba(239, 68, 68, 0.1) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #f87171;
  padding: 0.875rem 2rem;
  border-radius: 1rem;
  font-weight: 500;
  transition: all 0.3s;
}

.glass-button-danger:hover {
  background: linear-gradient(
    135deg,
    rgba(239, 68, 68, 0.3) 0%,
    rgba(239, 68, 68, 0.15) 100%
  );
  border-color: rgba(239, 68, 68, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(239, 68, 68, 0.2);
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
.lg\\:col-span-1 > div:nth-child(1) { animation-delay: 0.1s; }
.lg\\:col-span-1 > div:nth-child(2) { animation-delay: 0.2s; }
.lg\\:col-span-1 > div:nth-child(3) { animation-delay: 0.3s; }

.lg\\:col-span-2 > div:nth-child(1) { animation-delay: 0.1s; }
.lg\\:col-span-2 > div:nth-child(2) { animation-delay: 0.2s; }
.lg\\:col-span-2 > div:nth-child(3) { animation-delay: 0.3s; }

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  backdrop-filter: blur(10px);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
  border: 2px solid transparent;
  background-clip: padding-box;
}
</style>