const app = new Vue({
    el : "#app",
    data : {
        product: "Socks",
        image: './images/vmSocks-green-onWhite.jpg',
        link: "https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding",
        inStock: false,
        onSale: true,
        inventory: 0,
        cart:0,
        color:'green',
        underline:{
            textDecoration:'line-through',
            fontSize:"28px"
        },
        details : [
            'cotton 80%','polyester 20%','gender-neutral'
        ],
        variants : [
            {
                variantId:1234,
                variantColor: "green",
                variantImage: './images/vmSocks-green-onWhite.jpg'
            },
            {
                variantId:2235,
                variantColor: "blue",
                variantImage: './images/vmSocks-blue-onWhite.png'
            }
        ]  
        
    },
    
    methods:{
            addToCart:function(){
                this.cart += 1
            },
            removeFromCart:function(){
                this.cart -= 1
            },
            updateProduct: function(variantImage){
                this.image = variantImage
            }
        }
        
})

