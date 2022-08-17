<template>
    <div id="summary" class="summary-card">
        <el-avatar id="avatar" :size="avatarSize" :fit="fit" :src="'/static/img/user.jpg'"></el-avatar>
        <p class="self-intro">I'm Zhang Jiongyan (<b class="name">张炅焱</b>)</p>
        <p class="sub-intro">
            A researcher active in Computer Vision, 3DML and HPC<br>
		Fontend Designer, Web Developer, Backend Developer, Algorithm Planner<br>Scientific Amateur, Speaker, Researcher and Developer
        </p>
        <el-button id="button" type="info"><a href="#about" style="color: white; font-weight: bold;">Know me better</a></el-button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            avatarSize: 120,
            circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
        }
    },
    mounted() {
        this.resizeWindow()
        window.onresize = () => {
            return ( () => {
                document.getElementById("summary").style.height = '100%'
                document.getElementById("summary").style.width = '100%'
            })()
        }
    },
    methods: {
        resizeWindow () {
            document.getElementById("summary").style.height = '100%'
            document.getElementById("summary").style.width = '100%'
            
        }
    }
}
</script>

<style scoped>
.summary-card {
    background-image: url('/static/img/parallex.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%; 
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    justify-content: center;
}
.self-intro{
    font-family: "times new roman", times, serif;
    color: #FFFFFF;
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    font-style: italic;
    margin:0 auto;
    margin-bottom: 50px;
}
.self-intro .name{
    font-family: zcoolkuaile;
    font-style: normal;
}

.sub-intro{
    font-family: "palatino linotype", palatino, serif;
    font-weight: 200;
    color: #42423e;
    font-size: 24px;
    text-align: center;
    line-height: 1.7;
    text-shadow: 0 0 0.1em #fff, 0 0 0.1em #fff, 0 0 0.1em #fff;
    -webkit-text-stroke: 0.2px white;
    -webkit-text-fill-color:12px black;
}
.el-button {
    border: 0px;
    background-color:black;
    width:180px;
    height:50px;
    margin:0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
}

#avatar {
    margin:0 auto;
    margin-bottom: 50px;
    margin-top: 100px;
}


</style>