<script setup>
import GeneralInfo from "./data/general-info";
</script>

<template>
  <div class="container-fluid">
    <div class="row user-select-none">
      <div class="col-md-3 info shadow">
        <div
          class="d-flex flex-column justify-content-between"
          style="height: inherit"
        >
          <div class="col-12">
            <div class="d-flex justify-content-center py-5">
              <img
                src="@/assets/images/me.jpeg"
                class="rounded-circle d-sm-block d-none border-3 border"
                alt="Junior Vitor Ramisch"
                width="250px"
              />
              <img
                src="@/assets/images/me.jpeg"
                class="rounded-circle d-sm-none border-3 border"
                alt="Junior Vitor Ramisch"
                width="200px"
              />
            </div>
            <div class="col-12">
              <h3 class="text-center fw-bolder">Junior Vitor Ramisch</h3>
              <p>
                Estudante de Ciência da Computação pela UFFS Chapecó e Dev
                Fullstack na
                <a
                  href="https://www.optidata.cloud/"
                  class="fw-bolder"
                  target="_blank"
                >
                  Optidata</a
                >. Gosto de Daft Punk, The Office,
                <a
                  href="https://www.op.gg/summoners/br/arufonsekun"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="fw-bolder"
                  >LOL</a
                >
                e dos meus amigos da firma.
              </p>
            </div>
          </div>
          <div class="col-12 d-flex justify-content-around p-sm-3 p-2">
            <div class="media">
              <a
                :href="GeneralInfo.telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="@/assets/images/telegram.svg"
                  alt="Telegram"
                  class="p-sm-25 p-1"
                />
              </a>
            </div>
            <div class="media">
              <a
                :href="GeneralInfo.twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="@/assets/images/twitter.svg"
                  alt="Twitter"
                  class="p-sm-25 p-1"
                />
              </a>
            </div>
            <div class="media">
              <a
                :href="GeneralInfo.instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="@/assets/images/instagram.svg"
                  alt="Instagram"
                  class="p-sm-25 p-1"
                />
              </a>
            </div>
            <div class="media">
              <a
                :href="GeneralInfo.linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="@/assets/images/linkedin.svg"
                  alt="LinkedIn"
                  class="p-sm-25 p-1"
                />
              </a>
            </div>
            <div class="media">
              <a
                :href="GeneralInfo.spotify"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="@/assets/images/spotify.svg"
                  alt="Spotify"
                  class="p-sm-25 p-1"
                />
              </a>
            </div>
            <div class="media">
              <a
                :href="GeneralInfo.github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="@/assets/images/github.svg"
                  alt="Github"
                  class="p-sm-25 p-1"
                />
              </a>
            </div>
            <div class="media">
              <a
                :href="GeneralInfo.email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="@/assets/images/email.svg"
                  alt="Email"
                  class="p-sm-25 p-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #eee;
}
.working-in-progress {
  align-items: center;
  font-size: 4rem;
  height: 97vh;
  width: 75%;
  animation: color-change 5s infinite;
}

@keyframes color-change {
  5% {
    color: #2c2549;
  }
  10% {
    color: #27264b;
  }
  15% {
    color: #282e4c;
  }
  20% {
    color: #2a364e;
  }
  25% {
    color: #2c3e50;
  }
  30% {
    color: #455869;
  }
  35% {
    color: #5f7282;
  }
  40% {
    color: #798c9a;
  }
  45% {
    color: #94a5b1;
  }
  50% {
    color: #b0bec7;
  }
  55% {
    color: #b0bec7;
  }
  60% {
    color: #94a5b1;
  }
  65% {
    color: #798c9a;
  }
  70% {
    color: #5f7282;
  }
  75% {
    color: #455869;
  }
  80% {
    color: #2c3e50;
  }
  85% {
    color: #2a364e;
  }
  90% {
    color: #282e4c;
  }
  95% {
    color: #27264b;
  }
  100% {
    color: #2c2549;
  }
}

.info {
  height: 100vh;
}

.media {
  img {
    width: 45px;
  }
}

img {
  -webkit-user-drag: none;
}
</style>
