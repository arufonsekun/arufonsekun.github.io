<template>
    <div class="sidebar shadow-xl rounded p-4">
        <img
            src="@/assets/images/trash.jpeg"
            alt="Arufonsekun"
            class="rounded-full mx-auto"
        />

        <div class="name mx-4 my-3">
            <h4>
                Junior Vitor Ramisch
            </h4>
        </div>

        <div class="sidebar__content mx-4">
            <p class="text-xs">
                {{ description }}
            </p>
        </div>

        <div class="sidebar__easter-egg my-5">
            Hello stalker, congratulations!! You just found an easter egg.
            Here it's the place I'm going to write my thoughts once a while,
            something that i don't want to tweet, some outburst.

        </div>

        <div class="sidebar__social-media">
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
    mounted(){
        console.log(GeneralInfo);
    }
}
</script>

<style scoped>
    .sidebar {
        height: 97vh;
        width: 25%;
    }

    .sidebar__social-media {
        display: flex;
    }

    .media img {
        padding: 15%;
    }

    .sidebar__easter-egg {
        color: #eee;
    }
</style>