function showUserCategoryDetail(event){
    document.querySelectorAll(".users-category-detail").forEach(function(userCat){
        userCat.classList.remove('showing')
    })
    // const userCategorySelector = document.querySelector('#users-categories');

    const targetId = event.target.value;
    console.log(targetId)
    document.querySelector("#"+targetId).classList.add('showing');
}

function showCard(event){
    document.querySelectorAll(".ceo-card").forEach(function(card){
        card.classList.remove('displaying')
    })
    const targetId = event.target.getAttribute('id');
    document.querySelector("."+targetId).classList.add('displaying');
    console.log(targetId)
}

function hideCards(){
    // document.querySelectorAll(".ceo-card").forEach(function(card){
    //     card.classList.remove('displaying')
    // })
}