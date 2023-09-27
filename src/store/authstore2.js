// src/store/auth.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import router from '../router/router';

export const useAuthStore = defineStore('auth', () => {
  
  const users = ref([]); // Store registered users
  const currentUser = ref(''); // Store the current user
  const showError = ref(false);

  const registerUser = (newUser) => {
    // Here, add the newUser to the 'users' array
    // alert(newUser);
    users.value.push(newUser);
    console.log(newUser);
    router.push('/login');

  };

  const loginUser = (credentials) => {

    //showError.value = false;

    const foundUser = users.value.find(
      (user) => user.email === credentials.email && user.password === credentials.password
    );

    // alert( foundUser );
    if (foundUser) {
      showError.value = false;
      currentUser.value = foundUser;
      console.log(foundUser);
      router.push('/dashboard');
    }else{
        console.log('Somthing Wrong!');
    //    alert(showError.value = 'somthiyghd f');
    //   showError.value = true;
       
    }

  };

  const logoutUser = () => {
    currentUser.value = '';
    router.push('/login');
  };

  const isAuthenticated = computed(() => !!currentUser.value);

  return {
    users,
    currentUser,
    registerUser,
    loginUser,
    logoutUser,
    isAuthenticated,
  };
});
