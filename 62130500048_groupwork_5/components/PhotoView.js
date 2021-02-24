app.component('photo-view', {
    props: {
        gallery: {
            type: Array,
            require: true
        },
        'menu-id': Number,
        'show-images': Boolean
    },
    template:
    /*html*/
    `
    <div id="imgCanvas">
        <div class="bg-white text-xl rounded font-medium mt-6 h-9/12 py-4">
            <div class="bg-black rounded mx-4" v-if="showImages">
                <i class="fas fa-times text-white text-3xl p-2 cursor-pointer" @click="close()"></i>
                <img :src="gallery[menuId].img">
            </div>
            <p class="pt-2 text-center text-lg" v-if="showImages"> {{ gallery[menuId].menuTitle }} </p>
            <p class="p-4" v-else>Preview images goes here.</p>
        </div>
    </div>
    `,
    methods: {
        close() {
            this.$emit('close', this.showImages);
        }
    }
})