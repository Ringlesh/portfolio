console.log("i am in");


const MobileNav=()=>{

//state

let isMobileNavOpen = false;
console.log(isMobileNavOpen)

  const headerBtn= document.querySelector('.header__bar');
  const mobileNav=document.querySelector('.mobile-nav');
  const mobilelink=document.querySelectorAll(".mobile-nav__link");
  console.log(mobilelink)



  headerBtn.addEventListener('click',()=>{
    isMobileNavOpen=!isMobileNavOpen;
    if(isMobileNavOpen===true)
    {
      console.log(isMobileNavOpen)
    console.log("i am in");
    mobileNav.style.display='flex';
    document.body.style.overflow='hidden'

    }
    else
    {
      console.log(isMobileNavOpen)
      console.log("i am in");
      mobileNav.style.display='none';
      document.body.style.overflow='auto'
    }
    
  });

 mobilelink.forEach(link =>
 {
 link.addEventListener('click',()=>
 {
  isMobileNavOpen=false;
  mobileNav.style.display="none";
  document.body.style.overflow="auto";
 })
 });

}

MobileNav()




