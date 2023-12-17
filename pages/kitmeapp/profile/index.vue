<script setup lang="ts">
import TheKitterProfileNavigation from "~/components/kitme/TheKitterProfileNavigation.vue";
import {mockProfile} from "~/mocks/mock-profile";

const profileModules = ref<{ label: string, isActive: boolean }[]>([
  {label: 'Privacy', isActive: true},
  {label: 'Notification', isActive: true},
  {label: 'Language', isActive: true},
  {label: 'Theme', isActive: true},
  {label: 'Simracing', isActive: false},
])

const dynamicModules = computed(() => profileModules.value.filter(value => value.isActive))

const handleShareViaQRCodeAction = () => {
  console.log(`User is trying to share it's profile link with a QRcode...`)
}


</script>

<template>
  <main>
    <TheKitterProfileNavigation>
      <template #actions>
        <router-link to="/kitmeapp/profile/edit" class="edit-link">
          Edit
        </router-link>
      </template>
    </TheKitterProfileNavigation>
    <div class="wrapper">
      <div class="profile-info">
        <div class="profile-image-container">
          <div class="gender-sign">♀️/♂️</div> <!-- Placeholder for the gender sign -->
          <div class="profile-image">
            <!-- Placeholder for the profile image -->
<!--            <i class="user-icon">👤</i> &lt;!&ndash; Placeholder for the user icon &ndash;&gt;-->
            <Icon class="user-icon" icon="ph:user-duotone" />
          </div>
        </div>
        <div class="fullname">Kitter Full Name</div>
        <div class="username">@KitterUsername
          <button class="qrcode-share-icon" @click="handleShareViaQRCodeAction">
            <Icon icon="solar:qr-code-linear"/>
          </button>
        </div>
        <div class="birthdate">07 dicembre 1985</div>
        <div class="bio" v-html="mockProfile.biography"/>
      </div>
      <div class="dynamic-area">
        <button v-for="(module, idx) in dynamicModules" :key="idx">
          <span>{{ module.label }}</span>
        </button>
      </div>
      <div class="footer-area">
        <button>Help</button>
        <button>Suggest app to a friend</button>
      </div>
    </div>
    <div class="copyright">
      <p>EngineeredBy SunnyDay.Software</p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  @apply min-h-screen grid grid-rows-[40px_1fr_48px];


  .edit-link {
    @apply underline text-amber-600 place-self-end;
  }


  .wrapper {
    @apply grid gap-4 px-4 self-start place-items-center h-full;
  }


  .profile-info {
    @apply grid grid-cols-1 place-items-center;
    .profile-image-container {
      @apply relative;
      .gender-sign {
        @apply absolute top-0 left-0;
      }

      .profile-image {
        @apply w-28 h-28 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden;
        .user-icon {
          @apply text-gray-500 text-3xl w-48 h-48;
        }
      }
    }

    .fullname {
      @apply text-2xl font-bold;
    }

    .username {
      @apply flex items-center;
      .qrcode-share-icon {
        @apply ml-2;
        // Add additional styles for the QR code icon here
      }
    }

    .birthdate {
      @apply text-sm text-gray-600;
    }


    .bio {
      @apply max-h-40 overflow-hidden relative;
      &:after {
        @apply absolute bottom-0 left-0 w-full h-10;
        content: '';
        background: linear-gradient(to bottom, transparent, white);
      }
    }
  }

  .dynamic-area, .footer-area {
    @apply grid grid-cols-1 bg-white shadow-md w-full rounded py-1.5;
    button {
      @apply w-full h-8 text-left pl-2;
    }
  }

  .dynamic-area {
    @apply place-self-start;
  }

  .footer-area {
    @apply place-self-end;

  }


  .copyright {
    @apply w-full p-2 grid justify-end items-end text-xs text-gray-500;
  }
}
</style>
