<div class="flex flex-col justify-center md:grid md:grid-cols-2 bg-slate-800 md:h-screen ">
    <img src="bienvenue.png" alt="welcome" class="m-auto h-60 md:h-auto">
    <section class=" bg-white flex flex-col align-items-center justify-center md:gap-2">
        <div class="flex flex-col md:gap-8 gap-4 border border-primary-500 rounded-lg p-4 md:p-10 mx-auto mt-8 md:mt-0">
            <label class="label md:w-96">
                <span class="text-xs text-primary-500">Nom</span>
                <input class="input rounded-lg bg-slate-50" title="lastname" type="text" placeholder="Nom" />
            </label>
            <label class="label md:w-96">
                <span class="text-xs text-primary-500">Prénom</span>
                <input class="input rounded-lg  bg-slate-50" title="name" type="text" placeholder="Prénom" />
            </label>
            <label class="label md:w-96">
                <span class="text-xs text-primary-500">Email</span>
                <input class="input rounded-lg  bg-slate-50" title="email" type="text" placeholder="Email" />
            </label>
            <label class="label md:w-96">
                <span class="text-xs text-primary-500">Mot de passe</span>
                <input class="input rounded-lg  bg-slate-50" title="password" type="text" placeholder="Mot de passe" />
            </label>
            <label class="label md:w-96">
                <span class="text-xs text-primary-500">Mot de passe</span>
                <input class="input rounded-lg  bg-slate-50" title="password" type="text" placeholder="Mot de passe" />
            </label>
            <div class=" flex justify-between md:w-96">
                <button type="button" class="text-error-500 bg-error-200 hover:text-error-200 hover:bg-error-500 h-10 rounded-lg w-2/5">Annuler</button>
                <button type="button" class="text-secondary-500 bg-secondary-200 h-10 rounded-lg w-2/5 hover:text-secondary-200 hover:bg-secondary-500">Enregistrer</button>
            </div>
        </div>       
        <h1 class="text-sm mx-auto mb-8 md:mb-0">Vous avez déjà un compte : <span><a class="text-secondary-500 font-semibold" href="./login">Login</a></span></h1>
    </section>
</div>