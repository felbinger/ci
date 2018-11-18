<template>
    <div>
        <ul v-if="errors.length == 0">
            <li v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
        </ul>
        <h1>
          {{ challenge.name }}
          <span id="rate">
            <span @click="like" :class="{ rate: true, active: liked }"><material-icon name="thumb_up" />{{ challenge.ratings.thumbUp }}</span>
            <span @click="dislike" :class="{ rate: true, active: disliked }"><material-icon name="thumb_down" />{{ challenge.ratings.thumbDown }}</span>
          </span>
        </h1>
        <h2>({{ challenge.points }} points, {{ challenge.solveCount }} solved)</h2>
        <div>
          {{ challenge.description }}<br>
          <label for="solve">Flag: </label><input id="solve" :disabled="!challenge.solve" :placeholder="!challenge.solve ? 'Already solved!' : 'TMT{y0ur_fl4g}'">
        </div>
        <ul id="urls">
            <li v-for="(url, index) in challenge.urls" v-bind:key="index"><h3>{{ url.description }}</h3><a target="_blank" :href="url.url">{{ url.url }}</a></li>
        </ul>
        <div id="youtube">
          <youtube id="challenge" :videoId="challenge.ytChallengeId"></youtube>
          <youtube id="solution" :videoId="challenge.ytSolutionId"></youtube>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Youtube from '@/components/Youtube.vue';
import MaterialIcon from '@/components/MaterialIcon.vue';

@Component({
  components: {
    Youtube,
    MaterialIcon
  }
})
export default class Challenge extends Vue {
  token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
  errors: string[] = [];
  challenge = { ratings: {} };
  liked: boolean = false;
  disliked: boolean = false;

  like() {
    this.liked = !this.liked;
    this.disliked = false;
  }

  dislike() {
    this.disliked = !this.disliked;
    this.liked = false;
  }

  created() {
    this.$http
      .get(
        `https://challenges.the-morpheus.de/api/challenges/${
          this.$route.params.id
        }`,
        {
          headers: {
            'Access-Token': this.token
          }
        }
      )
      .then(response => response.json(), response => response.json())
      .then(json => {
        this.errors.push(json.errors);
        this.challenge = json.data;
      });
  }
}
</script>

<style scoped>
h1 {
  margin: 0;
  text-align: center;
}

#rate {
  text-align: left;
  position: absolute;
  font-weight: 500;
  opacity: 0;
  padding-left: 10px;
  transition: opacity 0.5s;
}

#rate:hover {
  opacity: 1;
}

.rate {
  cursor: pointer;
  padding: 2.25px;
  transition: color 0.25s;
}

.active {
  color: #2943d4;
}

h2 {
  text-align: center;
  font-weight: 100;
  font-style: italic;
  margin: 0;
}

div {
  margin-top: 20px;
  margin-bottom: 20px;
}

#urls {
  padding: 0;
  margin: 2.5px 0;
  list-style: none;
  display: flex;
}

#urls li {
  width: 100%;
  font-size: 1.5vw;
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
}

#urls li h3 {
  margin: 0;
  color: #2943d4;
}

#urls li a {
  color: #000000;
}

#youtube {
  width: 100%;
  height: 20vw;
  display: flex;
}

#challenge,
#solution {
  width: calc(50% - 20px);
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
}
</style>