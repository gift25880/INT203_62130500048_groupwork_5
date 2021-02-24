app.component('photo-item', {
    props: {
        gallery: {
            type: Array,
            require: true
        },
        'not-found': Boolean,
        'search-menu': Array
    },
    template:
        /*html*/
        `
    <div class="grid grid-cols-3 gap-4 mt-8">
        <div v-for="photo in searchMenu">
            <div class="flex bg-white rounded-lg items-center shadow-lg border-grey border">
                <i class="fas fa-heart text-red-500 text-xl ml-10 cursor-pointer" v-if="photo.click"
                    v-on:click="favClicked(photo.id)"></i>
                <i class="far fa-heart text-xl ml-10 cursor-pointer" v-else
                    v-on:click="favClicked(photo.id)"></i>
                <img :src="photo.img" class="w-4/12 cursor-pointer" @click="imgClicked(photo.id)">
                <p class="text-xl font-medium"> {{ photo.menuTitle }}</p>
            </div>
        </div>
        <br>
        <p v-if="notFound">We can't find what you are looking for... :(</p>
    </div>
    `,
    data() {
        return {
            currentIndex: 0,
            showImagesStatus: false
        }
    },
    methods: {
        favClicked(id) {
            this.gallery[id].click = !this.gallery[id].click;
        },
        imgClicked(id) {
            this.currentIndex = id;
            this.showImagesStatus = true;
            this.$emit('img-clicked', this.currentIndex);
            this.$emit('show-images', this.showImagesStatus)
        }
    }
})