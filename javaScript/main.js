const burgerMenu = document.querySelector("#burgerMenu");
const mobileMenu = document.querySelector("#mobileMenu");

burgerMenu.addEventListener("click", () => {

    burgerMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});


const close_mobile = document.querySelector("#close_mobile");

close_mobile.addEventListener("click", () => {

  close_mobile.classList.toggle("active");
  mobileMenu.classList.toggle("active");
})


//sub menu - about institute
const arrowAboutInstitut = document.querySelector("#arrowAboutInstitut");
const subMenuInstitute = document.querySelector("#subMenuInstitute");

arrowAboutInstitut.addEventListener("click", () => {

    if(subMenuInstitute.style.display == "none"){
      subMenuInstitute.style.display = "block";
    }
    else{
      subMenuInstitute.style.display = "none";
    }
})


//sub menu - vidannia
const arrowEdition = document.querySelector("#arrowEdition");
const subMenuEdition = document.querySelector("#subMenuEdition");

arrowEdition.addEventListener("click", () => {

    if(subMenuEdition.style.display == "none"){
      subMenuEdition.style.display = "block";
    }
    else{
      subMenuEdition.style.display = "none";
    }
})


//sub menu - preparation
const arrowPreparation = document.querySelector("#arrowPreparation");
const subMenuPreparation = document.querySelector("#subMenuPreparation");

arrowPreparation.addEventListener("click", () => {

    if(subMenuPreparation.style.display == "none"){
      subMenuPreparation.style.display = "block";
    }
    else{
      subMenuPreparation.style.display = "none";
    }
})