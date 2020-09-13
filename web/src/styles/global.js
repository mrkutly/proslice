import { createGlobalStyle } from 'styled-components'
import grit from '../images/whitegrit.png'

export default createGlobalStyle`
	/* open-sans-regular - latin */
	@font-face {
		font-family: "Open Sans";
		font-style: normal;
		font-weight: 400;
		src: url("../fonts/open-sans-v17-latin-regular.eot"); /* IE9 Compat Modes */
		src: local("Open Sans Regular"), local("OpenSans-Regular"),
			url("../fonts/open-sans-v17-latin-regular.eot?#iefix")
				format("embedded-opentype"),
			/* IE6-IE8 */ url("../fonts/open-sans-v17-latin-regular.woff2")
				format("woff2"),
			/* Super Modern Browsers */ url("../fonts/open-sans-v17-latin-regular.woff")
				format("woff"),
			/* Modern Browsers */ url("../fonts/open-sans-v17-latin-regular.ttf")
				format("truetype"),
			/* Safari, Android, iOS */
				url("../fonts/open-sans-v17-latin-regular.svg#OpenSans") format("svg"); /* Legacy iOS */
	}

	/* open-sans-700 - latin */
	@font-face {
		font-family: "Open Sans";
		font-style: normal;
		font-weight: 700;
		src: url("../fonts/open-sans-v17-latin-700.eot"); /* IE9 Compat Modes */
		src: local("Open Sans Bold"), local("OpenSans-Bold"),
			url("../fonts/open-sans-v17-latin-700.eot?#iefix")
				format("embedded-opentype"),
			/* IE6-IE8 */ url("../fonts/open-sans-v17-latin-700.woff2") format("woff2"),
			/* Super Modern Browsers */ url("../fonts/open-sans-v17-latin-700.woff")
				format("woff"),
			/* Modern Browsers */ url("../fonts/open-sans-v17-latin-700.ttf")
				format("truetype"),
			/* Safari, Android, iOS */
				url("../fonts/open-sans-v17-latin-700.svg#OpenSans") format("svg"); /* Legacy iOS */
	}

	/* lato-regular - latin */
	@font-face {
		font-family: "Lato";
		font-style: normal;
		font-weight: 400;
		src: url("../fonts/lato-v16-latin-regular.eot"); /* IE9 Compat Modes */
		src: local("Lato Regular"), local("Lato-Regular"),
			url("../fonts/lato-v16-latin-regular.eot?#iefix")
				format("embedded-opentype"),
			/* IE6-IE8 */ url("../fonts/lato-v16-latin-regular.woff2") format("woff2"),
			/* Super Modern Browsers */ url("../fonts/lato-v16-latin-regular.woff")
				format("woff"),
			/* Modern Browsers */ url("../fonts/lato-v16-latin-regular.ttf")
				format("truetype"),
			/* Safari, Android, iOS */ url("../fonts/lato-v16-latin-regular.svg#Lato")
				format("svg"); /* Legacy iOS */
	}

	/* lato-italic - latin */
	@font-face {
		font-family: "Lato";
		font-style: italic;
		font-weight: 400;
		src: url("../fonts/lato-v16-latin-italic.eot"); /* IE9 Compat Modes */
		src: local("Lato Italic"), local("Lato-Italic"),
			url("../fonts/lato-v16-latin-italic.eot?#iefix") format("embedded-opentype"),
			/* IE6-IE8 */ url("../fonts/lato-v16-latin-italic.woff2") format("woff2"),
			/* Super Modern Browsers */ url("../fonts/lato-v16-latin-italic.woff")
				format("woff"),
			/* Modern Browsers */ url("../fonts/lato-v16-latin-italic.ttf")
				format("truetype"),
			/* Safari, Android, iOS */ url("../fonts/lato-v16-latin-italic.svg#Lato")
				format("svg"); /* Legacy iOS */
	}

	/* lato-700 - latin */
	@font-face {
		font-family: "Lato";
		font-style: normal;
		font-weight: 700;
		src: url("../fonts/lato-v16-latin-700.eot"); /* IE9 Compat Modes */
		src: local("Lato Bold"), local("Lato-Bold"),
			url("../fonts/lato-v16-latin-700.eot?#iefix") format("embedded-opentype"),
			/* IE6-IE8 */ url("../fonts/lato-v16-latin-700.woff2") format("woff2"),
			/* Super Modern Browsers */ url("../fonts/lato-v16-latin-700.woff")
				format("woff"),
			/* Modern Browsers */ url("../fonts/lato-v16-latin-700.ttf")
				format("truetype"),
			/* Safari, Android, iOS */ url("../fonts/lato-v16-latin-700.svg#Lato")
				format("svg"); /* Legacy iOS */
	}

	/* lato-700italic - latin */
	@font-face {
		font-family: "Lato";
		font-style: italic;
		font-weight: 700;
		src: url("../fonts/lato-v16-latin-700italic.eot"); /* IE9 Compat Modes */
		src: local("Lato Bold Italic"), local("Lato-BoldItalic"),
			url("../fonts/lato-v16-latin-700italic.eot?#iefix")
				format("embedded-opentype"),
			/* IE6-IE8 */ url("../fonts/lato-v16-latin-700italic.woff2") format("woff2"),
			/* Super Modern Browsers */ url("../fonts/lato-v16-latin-700italic.woff")
				format("woff"),
			/* Modern Browsers */ url("../fonts/lato-v16-latin-700italic.ttf")
				format("truetype"),
			/* Safari, Android, iOS */ url("../fonts/lato-v16-latin-700italic.svg#Lato")
				format("svg"); /* Legacy iOS */
	}

	:root {
		--yellow: #ffc600;
		--orange: #ec7505;
		--red: #f42b03;
		--dark: hsla(0, 0%, 0%, 0.8);
	}

	.highlight {
		background-image: url(${grit});
		background-color: var(--red);
		background-size: 800px;
		color: white;
		padding: 5px;
	}

	/* scrollbar styles */
	html {
		scrollbar-width: thin;
		scrollbar-color: var(--red) var(--dark);
	}
	body::-webkit-scrollbar {
		width: 12px;
	}
	body::-webkit-scrollbar-track {
		background: var(--dark);
	}
	body::-webkit-scrollbar-thumb {
		background-color: var(--yellow);
		border-radius: 6px;
		border: 3px solid var(--dark);
	}

`
