Let sections = document.querySelectorAll('section')
Let navlinks = document.querySelectorAll('ul li a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        Let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navlink.forEach(links =>{
                links.classlist.remove('active');
                document.querySelector('ul li a[href*=' + id + ']').classList.add
                ('active');
            })
        }
    })
}