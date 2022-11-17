const forShoppers = document.getElementById("forShoppers");
const forMalls = document.getElementById("forMalls");
const forEco = document.getElementById("forEco");
const forBrands = document.getElementById("forBrands");
    // console.log([forShoppers, forMalls, forEco, forBrands])
    // console.log(forShoppers)



const shoppersCateg = document.getElementById("shoppers");
const mallsCateg = document.getElementById("malls");
const ecoFriendlyCateg = document.getElementById("ecoFriendly");
const brandsCateg = document.getElementById("brands");
    // console.log([shoppersCateg, mallsCateg, ecoFriendlyCateg, brandsCateg])
    // console.log(shoppersCateg)

    const hideShoppers = ()=>{
        shoppersCateg.style.display = "none"
        console.log(shoppersCateg)
    }


    shoppersCategList = shoppersCateg.classList
    // mallCategList = mallsCateg.classList
    // ecoFriendlyCategList = ecoFriendlyCateg.classList
    // brandsCategList = brandsCateg.classList
    
    
    // forShoppers.addEventListener("click", ()=>{
    //     shoppersCategList.add("d-none")
        
    //     }
    // )
    // forMalls.addEventListener("click", ()=>{
    //     mallCategList.replace("d-none", "d-block")
    //     shoppersCategList.add("d-none")
    //     }
    // )
    // forEco.addEventListener("click", ()=>{
    //     ecoFriendlyCategList.replace("d-none", "d-block")
    //     shoppersCategList.add("d-none")
    //     }
    // )
    // forBrands.addEventListener("click", ()=>{
    //     brandsCategList.remove("d-none", "d-block")
    //     shoppersCategList.add("d-none")
    //     }
    // )