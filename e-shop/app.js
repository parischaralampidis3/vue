const app = new Vue({
    el : "#app",
    data : {
        product: "Socks",
        image: './images/vmSocks-green-onWhite.jpg',
        link: "https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding",
        inStock: true,
        onSale: true,
        inventory: 11,
        cart:0,
        methods:{
            addToCart(){
                this.cart += 1
            }
        }
        ,
        details : [
            'cotton 80%','polyester 20%','gender-neutral'
        ],
        variants : [
            {
                variantId:1234,
                variantColor: "green"
            },
            {
                variantId:2235,
                variantColor: "blue"
            }
        ]
    
        
        
    }
})

