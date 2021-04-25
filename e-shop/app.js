Vue.component('product', {
    
    props: {
        premium: {
          type: Boolean,
          required: true
        }
      },
    
template:
`
<div class="product">
<div class="product-image">
    <img v-bind:src="image" :alt="image"/>
  
</div>
<div class="product-info">
    <h1 :style="{color}">{{title}}</h1> 
    

    <h3 v-if="inventory > 10">in stock</h3>
    <h3 v-else-if="inventory <= 10 && inventory > 0">almost in stock</h3>
    <h3 v-else 
    :style = "underline"
    >out of stock</h3>

<!--
    <h3 v-if='onSale'>onSale!</h3>
    <h3 v-else>out of Sale</h3>
-->
  <!--render a list of socks details-->
        <ul >
            <li v-for="detail in details">{{detail}}</li>
        </ul>
  <!--render a list that is provided choice of colors-->
        <div v-for="(variant,index) in variants" 
        :key="variant.variantId"
        class="color-box"
        :style = "{backgroundColor: variant.variantColor}" 
        @mouseover="updateProduct(index)">
              
        </div>
  <!---
        <a :href="link">Here's the link</a>
  -->

  <!--add button cart functionality here..-->

  <div class="cart">    
        <h3>Add product to your cart:</h3>
      <button v-on:click="addToCart" 
      :disabled="!inStock"
      :class = "{disabledButton: !inStock}"
    
      >Add</button>
      <button v-on:click="removeFromCart"
      :class="{disabledButton : cart <= 0 }"
      >Remove</button>
      <p>Cart:{{cart}}</p>
  </div>

</div> 
</div>
`,
   data() {
       return{
        brand:"Vue Mastery",
        product: "Socks",
        selectedVariant:0,
        link: "https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding",
        onSale: true,
        inventory:10,
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
                variantImage: './images/vmSocks-green-onWhite.jpg',
                variantQuantity: 10
            },
            {
                variantId:2235,
                variantColor: "blue",
                variantImage: './images/vmSocks-blue-onWhite.png',
                variantQuantity:0
            }
        ]  
        
    }
   },


 
    
    methods:{
            addToCart:function(){
                this.cart += 1
            },
            removeFromCart:function(){
                this.cart -= 1
            },
            updateProduct(index){
                this.selectedVariant = index
            }
        }, 
    computed:{
        title(){
            return this.brand + " " + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        }
        , 
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
        
})

var app = new Vue({
    el: '#app',
    data: {
      premium: true
    }
})