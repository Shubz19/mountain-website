document.querySelectorAll('.img-gallery-section img').forEach(galleryimg =>{
    galleryimg.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = galleryimg.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}

// // Carousel
// const prev = document.getElementById('prev-btn')
// const next = document.getElementById('next-btn')
// const list = document.getElementById('item-list')

// const itemWidth = 1000

// prev.addEventListener('click',()=>{
//   list.scrollLeft -= itemWidth
// })

// next.addEventListener('click',()=>{
//   list.scrollLeft += itemWidth
// })