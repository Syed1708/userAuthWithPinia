<script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '../store/authstore2';

  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');

  // errors veriable
const showEmailError = ref(false);
const showPasswordError = ref(false);
const showPasswordMatchError = ref(false);


  const authStore = useAuthStore();

  const registerUser = () => {

      // Reset error flags
  showEmailError.value = false;
  showPasswordError.value = false;
  showPasswordMatchError.value = false;

   // Email format validation
   if (!isValidEmail(email.value)) {
    showEmailError.value = true;
    return;
  }

  // Password length validation
  if (password.value.length < 6) {
    showPasswordError.value = true;
    return;
  }

  // Password match validation
  if (password.value !== confirmPassword.value) {
    showPasswordMatchError.value = true;
    return;
  }
    //create an object newUser and pass to as a parameter

    const newUser = {
      email: email.value,
      password: password.value,
    };
    authStore.registerUser(newUser);

    //then you can clear the form fields after registration
    email.value = '';
    password.value = '';
    confirmPassword.value = '';
  };


  const isValidEmail = (email) => {
  
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

</script>
<template>
    
        <!-- <h1 class="text-2xl mb-3">This is Register page</h1>
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <input v-model="confirmPassword" type="password" placeholder="Confirm Password" />
      <button type="submit">Register</button>
    </form> -->


    <!-- <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"> -->
    <div class="flex min-h-full flex-col justify-center">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <!-- <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> -->
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form @submit.prevent="registerUser" class="space-y-6"  method="POST">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input id="email" v-model="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          
        </div>
        <div v-if="showEmailError" class="error-message">Invalid email format.</div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>

        </div>
        <div class="mt-2">
          <input id="password" v-model="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
         
        </div>
        <div v-if="showPasswordError" class="error-message">Password must be at least 6 characters</div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="confirmPassword" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>

        </div>
        <div class="mt-2">
          <input id="confirmPassword" v-model="confirmPassword" name="confirmPassword" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        <div v-if="showPasswordMatchError" class="error-message">Passwords do not match.</div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
      </div>
    </form>

    
  </div>
</div>
</template>

<style scoped>

.error-message {
  color: red;
  font-size: 14px;
}
</style>