import { showNav } from './js/app'
import { checkURL } from './js/urlChecker'
import { postData } from './js/postRoute'
import { handleSubmit } from './js/formHandler'
import { linkSubmit } from './js/urlInputHandler'
import { textSubmit } from './js/textareaHandler'

import './styles/resets.scss'
import './styles/global.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/main.scss'
import './styles/footer.scss'

import happy from './images/happy.svg'
import neutral from './images/neutral.svg'
import sad  from './images/sad.svg'

const reactions = document.querySelector('.reactions')

reactions.innerHTML += happy
reactions.innerHTML += neutral
reactions.innerHTML += sad


export {
	showNav,
    checkURL,
	postData,
    handleSubmit,
	linkSubmit,
	textSubmit
}