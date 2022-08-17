<template>
    <div>
        <summary-card></summary-card>

        <navigation-bar></navigation-bar>

        <about-card></about-card>

        <experience-card></experience-card>

        <education-card></education-card>

        <skill-card></skill-card>

        <honour-card></honour-card>

        <recommendation-card></recommendation-card>

        <project-card></project-card>

        <funding-card></funding-card>

        <seminar-card></seminar-card>

        <language-card></language-card>

        <contact-card></contact-card>

        <el-backtop target="#summary"></el-backtop>
    </div>
</template>

<script>
import SummaryCard from '../components/SummaryCard.vue'
import NavigationBar from '../components/NavigationBar.vue'
import AboutCard from '../components/AboutCard.vue'
import ExperienceCard from '../components/ExperienceCard.vue'
import EducationCard from '../components/EducationCard.vue'
import SkillCard from '../components/SkillCard.vue'
import HonourCard from '../components/HonourCard.vue'
import RecommendationCard from '../components/RecommendationCard.vue'
import ProjectCard from '../components/ProjectCard.vue'
import FundingCard from '../components/FundingCard.vue'
import SeminarCard from '../components/SeminarCard.vue'
import LanguageCard from '../components/LanguageCard.vue'
import ContactCard from '../components/ContactCard.vue'
import $ from 'jquery'

$(function(){
  $('a').click(function(){
    //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
    $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top -50 )},1000);
  });

  var nav=$("#bar"); //得到导航对象  
    var win=$(window); //得到窗口对象  
    var sc=$(document);//得到document文档对象。  
    win.scroll(function(){  
        if(sc.scrollTop()>=800){  
            nav.addClass("fixednav");   
            $(".navTmp").fadeIn();   
        }else{  
            nav.removeClass("fixednav");  
            $(".navTmp").fadeOut();  
        }   
    })   
});


export default {
  components: { SummaryCard ,NavigationBar, AboutCard, ExperienceCard, EducationCard, SkillCard, HonourCard, RecommendationCard,
  ProjectCard, FundingCard, SeminarCard, LanguageCard, ContactCard },
    componets: {
        'summary-card': SummaryCard,
        'navigation-bar': NavigationBar,
        'about-card': AboutCard,
        'experience-card': ExperienceCard,
        'education-card': EducationCard,
        'skill-card': SkillCard,
        'honour-card': HonourCard,
        'recommendation-card': RecommendationCard,
        'project-card': ProjectCard,
        'funding-card': FundingCard,
        'seminar-card': SeminarCard,
        'language-card': LanguageCard,
        'contact-card': ContactCard
    },
    data (){
        return {

        }
    }
}
</script>

<style scoped>

.fixednav {  
    position: fixed;  
    top: 0px;  
    left: 0px;  
    width: 100%;  
    z-index: 1;  
}
</style>

<style>
a{ 
    text-decoration: none
}
</style>