let submenu = document.querySelector('.submenu'),
nav = document.querySelector('nav'),
header = document.querySelector('header'),
catalogLink = document.querySelector('.catalog-link'),
megamenu = document.querySelector('.megamenu'),
mouseenterMegamenu = false,
discountMenu = document.querySelector('.discount-image'),
links = document.querySelectorAll('.link-tree'),
linksNest = document.querySelector('.links-nest'),
linkNest = document.querySelectorAll('.link-nest'),
nestedLinks = document.querySelector('.nested-links'),
productImg = document.querySelectorAll('.product-image'),
productDescription = document.querySelectorAll('.product-description');

catalogLink.addEventListener('mouseenter', () => {
    header.classList.add('fixed')
    discountMenu.classList.remove('slideUp')
    show(megamenu)
    hide(submenu)
    discountMenu.style.display = 'flex'
    megamenu.classList.add('megamenu-slide')
    
})

megamenu.onmouseenter = () => mouseenterMegamenu = true 
megamenu.onmouseleave = () => mouseenterMegamenu = false 

nav.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!mouseenterMegamenu) {
            megamenu.classList.add('megamenu-slide-inside')
            setTimeout(() => {
                megamenu.classList.remove('megamenu-slide-inside')
                hide(megamenu)
                header.classList.remove('fixed')
            }, 490);
        }
    }, 100);
})

links.forEach((el) => {
    el.addEventListener('mouseenter', () => { 
        if (submenu.style.display == 'flex') {
            linksNest.classList.remove('slideRight-12')
            productImg.forEach((img) => img.classList.remove('slideRight-12'))
            productDescription.forEach((des) => des.classList.remove('slideRight-24'))
            hide(nestedLinks)
            setTimeout(() => {
                linksNest.classList.add('slideRight-12')
                productImg.forEach((img) => img.classList.add('slideRight-12'))
                productDescription.forEach((des) => des.classList.add('slideRight-24'))
            }, 0)
        } else {
            discountMenu.classList.add('slideUp')
            linksNest.classList.remove('slideRight-12')
            productImg.forEach((img) => img.classList.remove('slideRight-12'))
            productDescription.forEach((des) => des.classList.remove('slideRight-24'))
            hide(nestedLinks)
            setTimeout(() => {
                hide(discountMenu)
                show(submenu)
                linksNest.classList.add('slideRight-12')
                productImg.forEach((img) => img.classList.add('slideRight-12'))
                productDescription.forEach((des) => des.classList.add('slideRight-24'))
            }, 225)            
        }        
    })
})

linkNest.forEach((el) => {
    el.addEventListener('mouseenter', () => {
        hide(nestedLinks)
        nestedLinks.classList.remove('slideRight-12')

        setTimeout(() => {
            show(nestedLinks)
            nestedLinks.classList.add('slideRight-12')
        }, 100);
    })
})

// show element (flex)
function show(el) {
    el.style.display = 'flex'
}

// hide element
function hide(el) {
    el.style.display = 'none'
}