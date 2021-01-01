import '../styles/styles.scss';
import '../styles/authorization.scss';


//Перенос фотографий в папку dist
require.context('../images', true, /\.(png|jpg|svg|gif)$/);