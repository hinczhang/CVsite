<template>
    <div id="language">
        <h2><p class="main-title">Language Proficiency</p></h2>
        <el-divider></el-divider>
        <el-carousel id="lang-carousel" style="position: relative; margin-top: 120px" height="90%">
            <el-carousel-item v-for="item in tests" :key="item.name">
                <img class="gallery-img" :src="item.path">
                <p class="pro-name">{{item.name}}</p>
                <p class="content"> —— {{item.score}}</p>
            </el-carousel-item>
        </el-carousel>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            tests:[{
                name: 'College English Test Band 4',
                score:'Score: 570 (2018)',
                path: '/static/img/1.jpg'
            },{
                name: 'College English Test Band 6',
                score:'Score: 603 (2019)',
                path: '/static/img/2.jpg'
            },{
                name: 'The Test of English as a Foreign Language (IBT)',
                score:'Score: 100 (R28+L27+S21+W24) (2020)',
                path: '/static/img/3.jpg'
            },{
                name: 'Graduate Record Examination (General)',
                score:'Score: 321 (V151+Q170+AW4.0) (2020)',
                path: '/static/img/4.jfif'
            }]
        }
    },
    mounted() {
        this.resizeWindow()
        window.onresize = () => {
            return ( () => {
                this.resizeWindow()
            })()
        }
    },
    methods: {
        resizeWindow () {

            document.getElementById("language").style.height = document.documentElement.innerHeight+'px'
            document.getElementById("language").style.width = '100%'
            document.getElementById("lang-carousel").style.height = (Number(document.documentElement.clientHeight)*0.7).toString()+'px'
            document.getElementById("lang-carousel").style.width = document.documentElement.innerHeight+'px'
        }
    }
}
</script>

<style scoped>
#project {
    background-color: rgb(255, 255, 255);
    padding-bottom: 30px;
    padding-top: 30px;
}

.main-title{
    font-family: "lucida sans unicode", "lucida grande", sans-serif;
    font-size: 35px;
    margin-top: 100px;
    color: rgb(0, 0, 0);
    text-align: center;
}

.el-divider--horizontal {
    display: block;
    height: 5px;
    width: 8%;
    margin: 0 auto;
}

.el-divider {
    background-color: #000000;
    position: relative;
    border-radius: 25px;
}

.pro-name{
    font-family: 'Times New Roman', Times, serif;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
    color: black;
}

.content{
    font-family: SpaceMono-Regular;
    margin-bottom: 55px;
    margin-top: 0;
    font-size: 15px;
    text-align: center;
    width: 80%;
    margin: 0 auto;
}

.gallery-img{
    width: 600px;
    height: 400px;
    margin-top: 0px;

}
</style>
