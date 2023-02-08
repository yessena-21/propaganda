$(window).resize(function(){
    console.log("jdsjsdjksdjk");
    if ($(this).width() < 1024) {
        const bigCards = document.querySelectorAll(".card-big__container")

        bigCards.forEach((card) => {
            card.clalist.add("card-big__container_invisible");

        })    

        const smallCards = document.querySelectorAll("card-small__container_invisible")

        smallCards.forEach((card) => {
            card.clalist.add("card-small__container_invisible");
        })    

        } else {

        const bigCards = document.querySelectorAll("card-big__container_invisible")
        bigCards.forEach((card) => {
            card.clalist.remove("card-big__container_invisible");
        })   

        const smallCards = document.querySelectorAll("card-small__container")
        bigCards.forEach((card) => {
            card.clalist.add("card-big__container_invisible");
        })
    } 

 });