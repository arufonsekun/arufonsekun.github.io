<template>
    <div class="flex flex-col sidebar shadow-xl rounded p-4 border-1 border-neutral-100">
        <div>
            <img
                src="@/assets/images/me.jpeg"
                alt="Arufonsekun"
                class="rounded-full w-8/12 mx-auto brightness-150 hue-rotate-15"
            />
        </div>

        <div class="name font-bold text-3xl text-left mx-4 my-3">
            <h4>
                Junior Vitor Ramisch
            </h4>
        </div>

        <div class="mx-4">
            <p class="text-base">
                {{ description }}
            </p>
        </div>

        <div class="flex mt-auto">
            <div class="media">
                <a :href="telegram" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/images/telegram.svg" alt="Telegram" width="76">
                </a>
            </div>
            <div class="media">
                <a :href="twitter" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/images/twitter.svg" alt="Twitter" width="76">
                </a>
            </div>
            <div class="media">
                <a :href="instagram" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/images/instagram.svg" alt="Instagram" width="76">
                </a>
            </div>
            <div class="media">
                <a :href="linkedin" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/images/linkedin.svg" alt="LinkedIn" width="76">
                </a>
            </div>
            <div class="media">
                <a :href="discord" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/images/discord.svg" alt="Discord" width="76">
                </a>
            </div>
            <div class="media">
                <a :href="spotify" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/images/spotify.svg" alt="Spotify" width="76">
                </a>
            </div>
            <div class="media">
                <a :href="github" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/images/github.svg" alt="Github" width="76">
                </a>
            </div>
            <div class="media">
                <a :href="email" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/images/email.svg" alt="Email" width="76">
                </a>
            </div>
        </div>
    </div>
</template>

<script>

import GeneralInfo from "@/data/general-info";

export default {
    data(){
        return {
            description: GeneralInfo.description,
            twitter: GeneralInfo.twitter,
            github: GeneralInfo.github,
            spotify: GeneralInfo.spotify,
            instagram: GeneralInfo.instagram,
            linkedin: GeneralInfo.linkedin,
            telegram: GeneralInfo.telegram,
            email: GeneralInfo.email,
            discord: GeneralInfo.discord
        }
    },
}
</script>

<style scoped>
    .sidebar {
        height: 97vh;
        width: 25%;
    }

    .media img {
        padding: 15%;
    }

</style>