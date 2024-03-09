<script setup lang="ts">

import TheNavigation from "~/components/layout/TheNavigation.vue";
import TheFooter from "~/components/layout/TheFooter.vue";
import {leadSchema} from "~/schema";
import {Enum_Lead_Scope} from "#gql/default"
import type {AsyncDataRequestStatus} from "#app/composables/asyncData";

const formRef = ref();

const state = reactive({
  fullName: "Luca Faccio",
  email: "luca.faccio.pd@gmail.com",
  isBusinessRequest: false,
  businessName: "A business name for a company",
  website: "https://dreamlab.solutions",
  scope: Enum_Lead_Scope.Consulting,
  concept: undefined,
  budget: 1000,
  timeline: undefined,
  referrals: [] as { id: string }[],
  message: "An example message longer than 10 chars.",
  isPrivacyAccepted: false,
})

const statusRef = ref<AsyncDataRequestStatus>("idle");
const pendingRef = ref<boolean>(false);

async function onSubmit(event: Event) {

  console.log('[contact-us] onSubmit(), ', event)

  /*
  try {
  const {refresh, pending, status, data, error} = await useAsyncGql('createLeadFromContactUsForm', {
    data: event.data
  });

    const {} = await $fetch('/api/dreamlab/projects')

    if (status.value) {
      statusRef.value = status.value
    }

    if (pending.value) {
      pendingRef.value = pending.value
    }



  } catch (e) {
    console.log('[contact-us] error creating the Lead', e)
    throw new Error("[contact-us] Error creating the lead", e)
  }
  */


}

async function onError(event: Event) {
  console.log(event)
  /*
  set the viewport focus on the first error element
  const element = document.getElementById(event.errors[0].id)
  element?.focus()
  element?.scrollIntoView({behavior: 'smooth', block: 'center'})
  */
}


</script>

<template>

  <main class="webpage dashboard">
    <TheNavigation/>
    <div class="content">
      <p class="intro">Fill-in the form to contact us.</p>
      <form @submit="onSubmit"
            @error="onError"
            ref="formRef"
      >
        <div class="fullname-input">
          <h6>Your name</h6>
          <input placeholder="Type here your full name" v-model="state.fullName"
                 @change="console.log(state.fullName)"/>
        </div>
        <div class="email-input">
          <h6>Your e-mail</h6>
          <input placeholder="Type here your e-mail address" v-model="state.email"/>
        </div>
        <div class="business-request-selection">
          <h6>Is a business request</h6>

          <button label="`Yes, I have a business`" @click.prevent="state.isBusinessRequest = true"
                  :color="state.isBusinessRequest ? 'primary' : 'white'"/>
          <button label="`No I'm a consumer user`" @click.prevent="state.isBusinessRequest = false"
                  :color="!state.isBusinessRequest ? 'primary' : 'white'"/>


        </div>
        <div class="businessname-input" v-if="state.isBusinessRequest">
          <h6>Your company name</h6>
          <input placeholder="Type here your company name" v-model="state.businessName"/>
        </div>
        <div class="website-input">
          <h6>Your actual website</h6>
          <input placeholder="https://www" v-model="state.website"/>
        </div>
        <div class="service-selection">
          <h6>Preferred service</h6>
          <div class="buttons-wrapper">
            <button label="Consulting" @click.prevent="state.scope = Enum_Lead_Scope.Consulting "/>
            <button label="Design" @click.prevent="state.scope = Enum_Lead_Scope.Design "/>
            <button label="Development" @click.prevent="state.scope = Enum_Lead_Scope.Development "/>
          </div>
        </div>
        <div class="concept-selection">
          <h6>If you want to share any concept, you can upload it here...</h6>
          <input placeholder="Share your idea" type="file" @change="value => console.log(value)"/>
        </div>
        <div class="budget-selection">
          <h6>
            Select your budget: {{ state.budget }}<span v-if="state.budget === 10000">+</span>
          </h6>
          <div>
            <input v-model="state.budget"/>
          </div>
        </div>

        <div class="timeline-selection">
          <h6>
            Select your timeline restrictions?
          </h6>
          <ul>
            <button>Flexible</button>
            <button>Within a month</button>
            <button>Whitin 3 monts</button>
            <button>Specific date</button>
          </ul>
        </div>
        <div class="message-input">
          <h6>
            Write here your message
          </h6>
          <div>
            <input type="text" v-model="state.message"/>
          </div>
        </div>
        <div class="referral-selection">
          <h6>
            Where did you heard about us?
          </h6>
          <ul>
            <!--              <UCheckbox name="seo" label="Search engines like Google, Bing, Yahoo, etc..." @click="state.referrals.push({id: 'seo'})"/>-->
            <!--              <UCheckbox name="social" label="Social media like Facebook, GitHub, LinkedIn, X, etc"-->
            <!--                         @click="state.referrals.push({id: 'social'})"/>-->
            <!--              <UCheckbox name="partner" label="One of our refferral like SunnyDay or DURDN"-->
            <!--                         @click="state.referrals.push({id: 'partner'})"/>-->
            <!--              <UCheckbox name="other" label="Other..." @click="state.referrals.push({id: 'other'})"/>-->
          </ul>
        </div>

        <input type="checkbox" id="isPrivacyAccepted" name="isPrivacyAccepted" v-model="state.isPrivacyAccepted">
        <label for="isPrivacyAccepted"> I agree to be contacted regarding my inquiry.</label><br>

        <button type="submit" :disabled="!state.isPrivacyAccepted && !pendingRef">
          Send request
        </button>
      </form>
    </div>

    <TheFooter/>
  </main>

</template>

<style scoped>
.content {
  @apply w-full max-w-screen-lg mx-auto flex flex-col justify-center;

  p {
    @apply text-center;
  }

  form {
    @apply flex flex-col gap-4 text-xs transition-all duration-500 ease-in-out;

    > * {
      @apply transition-all duration-500 ease-in-out;
    }

  [ class $= "-selection" ],
  [ class $= "-input" ] {
    h6 {
      @apply text-sm font-headings;
    }
  }

  }
}
</style>
