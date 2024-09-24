import { inc, dec, reset, resetBtn, incBtn, decBtn } from './counter';
import '../css/style.css';

resetBtn.addEventListener('click' ,reset);
incBtn.addEventListener('click' ,inc);
decBtn.addEventListener('click' ,dec);
