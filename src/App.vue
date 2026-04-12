<script setup>
import GeneralInfo from "./data/general-info";
</script>

<template>
  <div class="d-flex flex-column justify-content-between">
    <div class="col-12">
      <div class="d-flex justify-content-center py-5">
        <img src="@/assets/images/mr.png" class="rounded-circle img-thumbnail border-3 border"
          alt="Junior Vitor Ramisch" width="250px" />
      </div>
      <div class="col-12">
        <div class="p-3">
          <h3 class="text-center fw-bolder">Salute, I'm Junior Vitor Ramisch 👋</h3>
          <ul>
            <li>
              Arufonsekun is my nickname, it's inspired Fullmetal Alchemist anime;
            </li>
            <li>
              I play League of Legends, Morgana is my main (my <a href="http://www.op.gg/summoners/br/arufonsekun-BR1" target="_blank" rel="noopener noreferrer">op.gg</a>);
            </li>
            <li>
              This days I'm reading <a href="https://www.google.com/search?q=tecnodalism+what+killed+capitalism" target="_blank" rel="noopener noreferrer"> <b>Technofeudalism: What Killed Capitalism</b></a> by Yanis Varoufakis;
            </li>
            <li>
              I often get lost reading the most random wikipedia articles;
            </li>
            <li>
              Lil skeptical 'bout everything (AI era if ya know what i mean);
            </li>
            <li>
              Me gusta syncpop y eurodance;
            </li>
            <li>
              Tudo que eu começo eu não acabo, (tudo aqui é pela metade);
            </li>
            <li>
              Minha frase preferida é "Caraio matrix, vai devagar!".
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-around p-sm-3 p-2">
      <div class="media">
        <a :href="GeneralInfo.instagram" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/images/instagram.svg" alt="Instagram" class="p-sm-25 p-1" />
        </a>
      </div>
      <div class="media">
        <a :href="GeneralInfo.linkedin" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/images/linkedin.svg" alt="LinkedIn" class="p-sm-25 p-1" />
        </a>
      </div>
      <div class="media">
        <a :href="GeneralInfo.spotify" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/images/spotify.svg" alt="Spotify" class="p-sm-25 p-1" />
        </a>
      </div>
      <div class="media">
        <a :href="GeneralInfo.github" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/images/github.svg" alt="Github" class="p-sm-25 p-1" />
        </a>
      </div>
      <div class="media">
        <a :href="GeneralInfo.email" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/images/email.svg" alt="Email" class="p-sm-25 p-1" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
