import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useGamesStore = defineStore('games', function () {
    // a games list 
    const list = reactive([{ title: 'Sonic Frontiers' }, { title: 'God of War' }])
    // add a game 
    function add(monster) {
        list.push(monster);
    }
    return { list, add };
});