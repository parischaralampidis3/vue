<template>

  <div class="about">

    <h3>Make a Note app</h3>
    <p>version 0.0.1</p>   
   <p>The 'Make a note' app is created by, {{author.name}}</p>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default{
computed: mapState({
 author: 'author'
})
};
</script>
