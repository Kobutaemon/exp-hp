// 画面を一定の高さまでスクロールしたらアニメーションをつけたい。
// 今のところ以下では動かなかったので、一旦後回しにしてる。いつかやるかも。

// window.addEventListener('scroll', function() {
// 	const element = document.querySelector('.page2 .intro-sen p');
// 	const window_height = window.innerHeight; //現在のブラウザの高さを取得する

// 	for ( i = 0; i < element.length; i++) {
//         const element_height = element[i].getBoundingClientRect().bottom; //要素の位置（座標）を取得する
        
//         if(element_height < window_height * 0.5 ) {
//             element[i].classList.add('fade-in');
//         }
// 	}
// });

function applicant_form() {
    window.open("https://forms.gle/26M9VX1cxfs2J95L8", "_blank");
}

function contact_form() {
    window.open("https://forms.gle/biw6bn82gGAfy4uX6", "_blank");
}