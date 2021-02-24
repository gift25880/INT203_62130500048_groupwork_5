const app = {
    data() {
        return {
            gallery: [
                { id: 0, img: "./images/strawberry-sundae.png", menuTitle: "Strawberry Banana & Cream", click: false },
                { id: 1, img: "./images/coit-tower.png", menuTitle: "Coit Tower", click: false },
                { id: 2, img: "./images/banana-split.png", menuTitle: "Banana Split", click: false },
                { id: 3, img: "./images/chewy-chocky-fancy.png", menuTitle: "Chewy Chocky Fancy", click: false },
                { id: 4, img: "./images/hot-fudge-bonanza-split.png", menuTitle: "Hot Fudge Bonanza Split", click: false },
                { id: 5, img: "./images/nutty-crispy-tower.png", menuTitle: "Nutty Crispy Tower", click: false },
                { id: 6, img: "./images/waffle-sundae.png", menuTitle: "Waffle Sundae", click: false },
                { id: 7, img: "./images/chocolate-ring-a-ding.png", menuTitle: "Chocolate Ring-A-Ding", click: false },
                { id: 8, img: "./images/earthquake.png", menuTitle: "The EarthQuake", click: false }
            ],
            searchClicked: false,
            inputSearch: '',
            notFound: false,
            showImages: false,
            currentIndex: 0
        }
    },
    methods: {
        favClicked(index) {
            this.gallery[index].click = !this.gallery[index].click;
        },
        switchSearchClicked() {
            this.searchClicked = !this.searchClicked;
            if (this.searchClicked == false) {
                this.inputSearch = '';
            }
        },
        close() {
            this.showImages = false;
        },
        imgClicked(index) {
            this.showImages = true;
            this.currentIndex = index;
        }

    },
    computed: {
        photoAmount() {
            return this.gallery.length;
        },
        likeAmount() {
            return this.gallery.filter(n => n.click).length;
        },
        searchAmount() {
            return this.gallery.filter(n => n.menuTitle.toLowerCase().includes(this.inputSearch.toLowerCase())).length;
        },
        searchMenu() {
            this.notFound = false;
            if (this.inputSearch == '') {
                return this.gallery;
            } else {
                menu = this.gallery.filter(n => n.menuTitle.toLowerCase().includes(this.inputSearch.toLowerCase()));
                if (menu == '') {
                    this.notFound = true;
                } else {
                    return menu;
                }
            }
            
        }
    }
}
Vue.createApp(app).mount('#app');