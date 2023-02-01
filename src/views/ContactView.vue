<script setup>
import { useGamesStore } from '@/stores/games.js';
const games = useGamesStore();
</script>
<template>
    <div class="about">
        <ul>
            <li v-for="game in games.list">
                {{ game.title }}
            </li>
        </ul>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>