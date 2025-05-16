const cirlceAnim = lottie.loadAnimation({
	container: document.querySelector('.marker-circle'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'circle.json',
});

cirlceAnim.setSpeed(2.5)

const slide2Text = lottie.loadAnimation({
	container: document.querySelector('.slide2-text'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'proud.json',
});

slide2Text.setSpeed(1.5)

const line1 = lottie.loadAnimation({
	container: document.querySelector('.slide3-line1'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'line1.json',
});

const line2 = lottie.loadAnimation({
	container: document.querySelector('.slide3-line2'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'line1.json',
});

const slide5Img = lottie.loadAnimation({
	container: document.querySelector('.slide5-text2'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'slide5-love.json',
});

window.addEventListener('beforeunload', function () {
	window.scrollTo(0, 0);
});

window.addEventListener('DOMContentLoaded', () => {

	document.querySelector('.opening')
		.addEventListener('click', () => {
			document.querySelector('.opening').style.transform = 'translateY(-200%)'

			const audio = document.getElementById("myAudio");
			audio.play();

			document.querySelector('#slide1').setAttribute('href', 'slide1.css')

			setTimeout(() => {
				document.body.style.overflow = 'visible'
			}, 5000)

			const elements = document.querySelectorAll('.anim');

			const observer = new IntersectionObserver((entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const dataId = entry.target.getAttribute('data-id')

						entry.target.classList.add(dataId);

						if (dataId === 'slide2-textAnim') {
							cirlceAnim.play()
							slide2Text.play()
						}
						else if (dataId === 'slide3-imgAnim') {
							line1.play()
							line2.play()
						}
						else if (dataId === 'slide4-img-box') {
							document.querySelectorAll('.slide4-text-lines')
								.forEach(item => {
									item.classList.add(item.getAttribute('data-id'))
								})

							const slide4Img = document.querySelector('.slide4-img')

							slide4Img.classList.add(slide4Img.getAttribute('data-id'))
						}
						else if (dataId === 'slide5-text2Anim') {
							slide5Img.play()
						}
					}
				});
			}, {
				threshold: 0.5
			});

			elements.forEach(el => observer.observe(el));
		})
})