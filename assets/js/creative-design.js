/*!
=========================================================
* Creative Design Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ 

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 

window.addEventListener("load", function () {
	document.getElementById("loader").style.display = "none";
	document.getElementById("box").style.display = "block";
});
const testimonials = [
	{
		name: "Vivek Mahajan",
		job: "Larimars Clothing Toronto,Canada",
		image: "/assets/imgs/avatar1.png",
		testimonial:
			"The team at Mindfully sustainable is very well versed and helped setting up systems to achieve our sustainable goals. We got on board with the team to help our small apparel manufacturing setup to reduce its carbon foot print and reduce wastage so it can either be repurposed or upscaled. We have seen a significant change in how small but very useful techniques when implemented correctly can contribute to the greater cause of value addition, helps being compliant with circular ideology and putting positive contribution to the community. Thank you again for your help and would highly recommend using their services."
	},
	{
		name: "Farah Alam",
		job: "QA/Test Engineer Dartford,UK",
		image: "/assets/imgs/avatar1.png",
		testimonial:
			"Anamika is an amazing consultant and a thorough professional. She has helped and guided us through the process, to becoming completely sustainable in terms and f our food habits, lifestyle and fashion. We can feel the difference it has made in the quality of our life. It has become healthy, enjoyable and stress & guilt free."
	}
];
let i = 0; // current slide
let j = testimonials.length; // total slides
let testimonialContainer = document.getElementById("testimonial-container");
function next() {
	i = (j + i + 1) % j;
	displayTestimonial();
}

function prev() {
	i = (j + i - 1) % j;
	displayTestimonial();
}
let displayTestimonial = () => {
	testimonialContainer.innerHTML = `
        <p>${testimonials[i].testimonial}</p>
         <img src=${testimonials[i].image}></img>
        <h3>${testimonials[i].name}</h3>
        <h6>${testimonials[i].job}</h6>
        `;
};
window.onload = displayTestimonial;


