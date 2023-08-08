<script>
    import { auth } from "../../firebase.js";
    import {  signInWithEmailAndPassword} from "firebase/auth";

    let email='';
    let password='';
    async function handleLogin() {
    try {
      // Call the Firebase Auth method for login with email and password
      await signInWithEmailAndPassword(auth,email, password);
        //navigate('/');
        window.location.replace('/');
      // If successful, do something like redirect the user or display a success message
    } catch (error) {
      // Handle the error, display an error message, or take appropriate action
      console.error('Error during login:', error);
    }
  }
</script>
<div class="flex flex-col justify-center md:grid md:grid-cols-2 bg-slate-800 md:h-screen ">
    <img src="bienvenue.png" alt="welcome" class="m-auto h-60 md:h-auto">
    <section class=" bg-white flex flex-col align-items-center justify-center md:gap-2">
        <div class="flex flex-col md:gap-8 gap-4 border border-primary-500 rounded-lg p-4 md:p-10 mx-auto mt-8 md:mt-0">            
            <label class="label md:w-96">
                <span class="text-xs text-primary-500">Email</span>
                <input class="input rounded-lg  bg-slate-50" title="email" type="email" bind:value={email} placeholder="Email" />
            </label>
            <label class="label md:w-96">
                <span class="text-xs text-primary-500">Mot de passe</span>
                <input class="input rounded-lg  bg-slate-50" title="password" type="password" bind:value={password}  placeholder="Mot de passe" />
            </label>
            
            <div class=" flex justify-between md:w-96">
                <button on:click={()=>{}} type="button" class="text-error-500 bg-error-200 hover:text-error-200 hover:bg-error-500 h-10 rounded-lg w-2/5">Annuler</button>
                <button on:click={handleLogin} type="submit" class="text-secondary-500 bg-secondary-200 h-10 rounded-lg w-2/5 hover:text-secondary-200 hover:bg-secondary-500">Se connecter</button>
            </div>
        </div>
        <div class="flex align-items-center justify-around md:justify-between md:w-96 md:mx-auto my-8 md:my-0 ">
            <h1 class="text-xs md:text-sm">Vous n'avez pas de compte : <span><a class="text-secondary-500 font-semibold" href="./register">S'inscrire</a></span></h1>
            <a class="text-error-500 font-semibold text-xs" href="./forgot">Forgot password ?</a>
        </div>
        
    </section>
</div>


