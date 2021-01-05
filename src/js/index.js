import '../styles/styles.scss';
import '../styles/authorization.scss';
import '../styles/cabinet.scss';
import '../styles/modal.scss';


//Перенос фотографий в папку dist
require.context('../images', true, /\.(png|jpg|svg|gif)$/);