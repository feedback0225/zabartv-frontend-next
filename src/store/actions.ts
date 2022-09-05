
import {setLang} from './reducers/langSlice';
import {showMenu} from './reducers/menuSlice';
import {setVisibleSearch, setSearch} from './reducers/searchSlice';
import {showRegisterModal, showSubscribeModal, showGradeModal} from './reducers/modalSlice'
import {setSubscribedEmail, setEmail, setPassword, setDate} from './reducers/userSlice'

export {
    showMenu,
    setVisibleSearch,
    setSearch,
    setLang,
    showRegisterModal,
    showSubscribeModal,
    showGradeModal,
    setSubscribedEmail,
    setEmail,
    setPassword,
    setDate
}