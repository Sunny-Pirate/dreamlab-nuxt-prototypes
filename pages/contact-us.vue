<script setup lang="ts">

import type {AsyncDataRequestStatus} from "#app/composables/asyncData";
import type {Database, Tables, Enums} from "~/types/database.types.ts";
import type {QueryResult, QueryData, QueryError} from '@supabase/supabase-js'

import TheFooter from "~/components/TheFooter.vue";
import TheNavbar from "~/components/TheNavbar.vue";
import InputText from 'primevue/inputtext';
import Services from "~/pages/services.vue";
import type {} from '@prisma/client'

const statusRef = ref<AsyncDataRequestStatus>("idle");
const pendingRef = ref<boolean>(false);
const formRef = ref();
const serviceChoices = ref<ServicesTable | null>([])
import Editor from 'primevue/editor';
import UploadDragAndDrop from "~/components/forms/UploadDragAndDrop.vue";


const user = useSupabaseUser();
const supabase = useSupabaseClient<Database>();

const servicesFilterBuilder = supabase.from('services').select().eq('active', true).limit(3);

type ServicesTable = QueryData<typeof servicesFilterBuilder>;

const state = ref({
  fullName: user.value?.user_metadata.full_name,
  email: user.value?.user_metadata.email,
  message: "An example message longer than 10 chars.",
  isBusinessRequest: false,
  website: '',// "https://dreamlab.solutions",
  scope: '',
  concept: undefined,
  budget: 1000,
  timeline: undefined,
  isPrivacyAccepted: false,
})

onMounted(async () => {
  const {data, error} = await servicesFilterBuilder.returns<ServicesTable>();
  if (error?.code) {
    console.log('[/contact-us] Something went wrong fetching servcies.')
    throw new Error(error.message);
    return;
  }
  serviceChoices.value = data

})

async function onSubmit(event: Event) {

  console.log('[contact-us] onSubmit(), ', event)

  console.log(state.value)
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

  <main class="landing-page">
    <TheNavbar/>

    <Card :pt="{
      root: `px-2 shadow-md max-w-screen-md mx-auto`,
      content: `flex flex-col justify-start pt-8 gap-6 px-5`
    }">
      <template #title>Contact us</template>
      <template #subtitle>
        <h4>Get in Touch: We’re excited to hear from you!</h4>
        <small class="font-dreamlab text-slate-400">
          Fill in the form below with your details. Fields marked with an asterisk<span class="text-super text-red-500/50">(*)</span> are
          required, but feel free to provide as much information as you’re comfortable with. Whether it’s a business inquiry or just a
          hello, let us know your thoughts, and we’ll get back to you promptly. Your privacy is important to us, and your information will
          be kept confidential.
        </small>
      </template>
      <template #content>
        <form @submit.prevent="onSubmit" id="contact-form">
          <div class="input-field col-span-full xs:col-span-3">
            <FloatLabel>
              <InputText id="fullName" v-model="state.fullName"/>
              <label for="fullName">Your full name</label>
            </FloatLabel>
          </div>

          <div class="input-field col-span-full xs:col-span-3">
            <FloatLabel>
              <InputText id="email" v-model="state.email"/>
              <label for="email">Your email</label>
            </FloatLabel>
          </div>

          <div class="input-field col-span-full">
            <FloatLabel>
              <Editor v-model="state.message" :placeholder="state.message" :pt="{
                root: `flex flex-col justify-start`
              }"/>
              <label for="email">Your message</label>
            </FloatLabel>
          </div>

          <div class="input-field col-span-full xs:col-span-2">
            <h4 class="field-float-label">Is a business request?</h4>
            <div class="checkbox-inline">
              <Checkbox v-model="state.isBusinessRequest" :binary="true" id="isBusinessRequest" :value="state.isBusinessRequest"/>
              <label for="isBusinessRequest">Select the checkbox if you want a business invoice.</label>
            </div>
          </div>
          <div class="input-field col-span-full xs:col-span-2">
            <FloatLabel>
              <InputText id="website" v-model="state.website"/>
              <label for="website">Your domain</label>
            </FloatLabel>
          </div>
          <div class="multiselect-3col-field col-span-full xs:col-span-2">
            <h4 class="field-float-label">Your preferred service?</h4>
            <ButtonGroup :pt="{
              root: `flex flex-row`
            }">
              <Button v-for="(service, sKey) in serviceChoices" :key="sKey" :label="service.name" :value="service.id"
                      class="inline-flex"
                      :outlined="service.id !== state.scope"
                      @click="() => state.scope = service.id"/>
            </ButtonGroup>
          </div>

          <!--          <UploadDragAndDrop class="w-full col-span-full"/>-->

          <div class="input-field col-span-full xs:col-span-2">
            <h4 class="field-float-label">Do you have a budget limit? € {{state.budget}}</h4>
            <Slider id="budget" v-model="state.budget" :step="1500" :min="1500" :max="10500"/>
          </div>

          <div class="input-field col-span-full xs:col-span-2">
            <h4 class="field-float-label">There's a dreadline? </h4>

          </div>
          <Button type="submit" label="Send request"/>
        </form>
      </template>
    </Card>

    <div class="content">
      <p class="intro">Fill-in the form to contact us.</p>
      <form @submit="onSubmit"
            @error="onError"
            ref="formRef"
            class="form-single-column"
      >
        <InputGroup>
        </InputGroup>
        <div class="fullname-input">
          <h6>Your name</h6>
          <input placeholder="Type here your full name" v-model="state.fullName"
                 @change="console.log(state.fullName)"/>
        </div>
        <div class="email-input">
          <h6>Your e-mail</h6>
          <InputText placeholder="Type here your e-mail address" v-model="state.email"/>
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
            <!--            <button label="Consulting" @click.prevent="state.scope = Enum_Lead_Scope.Consulting "/>-->
            <!--            <button label="Design" @click.prevent="state.scope = Enum_Lead_Scope.Design "/>-->
            <!--            <button label="Development" @click.prevent="state.scope = Enum_Lead_Scope.Development "/>-->
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
#contact-form {
  @apply grid grid-cols-6 gap-8 place-items-stretch;
}

.input-field {
  @apply relative flex flex-col;

  & span {
    @apply flex flex-col;
  }
}


.field-float-label {
  @apply absolute leading-5 -top-3 -translate-y-1/2 left-3 text-sm text-surface-900/50;
}

.multiselect-3col-field {
  @apply relative;

  span {
    @apply grid grid-cols-3;
  }
}

.checkbox-inline {
  @apply w-full flex flex-row items-center gap-2;

  label {
    @apply text-xs  ;
  }
}
</style>
