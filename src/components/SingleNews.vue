<template>
    <div class="article-outer">
        <div class="img-container">
            <a href=""><img :src="require('../assets/images/news/' + image)" alt=""> </a>
        </div> <!--end.img-container-->
        <h2 v-html="title">
        </h2>
        <div class="entry-content">
            <p class="cutoff-text" v-html="text" >
            </p>

        <button @click="readContent()" class="read-c">READ CONTENT</button>
        </div><!--end.entry-content-->
    </div><!--end.article-outer-->
</template>
<script>
export default {
    name: 'SingleNews',
    props: ['image', 'title', 'text'],
    methods: {
        readContent() {
            //Passing parameters
            this.$router.push({
                name: 'NewsPage',
                query: { image: this.image, title: this.title, text: this.text}
            });
        }
    }
}
</script>
<style scoped>
    .cutoff-text {
        --max-lines: 3;
        --line-height: 1.2;

        height:calc((var(--max-lines) *1em *var(--line-height) ));
        
        overflow:hidden;
    }



</style>