app.component('photo-search', {
    props: {
        gallery: {
            type: Array,
            require: true
        }
    },
    template:
        /*html*/
        `
    <div>
    <div v-if="searchClicked">
        <div class="flex">
            <input v-model="inputSearch" @input="searchText" placeholder="What are you craving for?"
                class="p-2 bg-white w-10/12 rounded border">
            <button class="p-2 bg-blue-500 rounded ml-2 text-white hover:bg-blue-900"
                v-on:click="switchSearchClicked">Cancel</button>
        </div>
    </div>
    <i class="fas fa-search text-2xl cursor-pointer" v-on:click="switchSearchClicked" v-else></i>
    <p class="text-xl mt-4" v-if="inputSearch==''">Total Menu: {{ photoAmount }}</p>
    <p class="text-xl mt-4" v-else>Total Search Result: {{ searchAmount }}</p>
    </div>
    `,
    data() {
        return {
            inputSearch: '',
            searchClicked: false
        }
    },
    methods: {
        switchSearchClicked() {
            this.searchClicked = !this.searchClicked;
            if (this.searchClicked == false) {
                this.inputSearch = '';
            }
        },
        searchText() {
            this.$emit('search-text', this.inputSearch);
        }
    },
    computed: {
        photoAmount() {
            return this.gallery.length;
        },
        searchAmount() {
            return this.gallery.filter(n => n.menuTitle.toLowerCase().includes(this.inputSearch.toLowerCase())).length;
        }
    }
})