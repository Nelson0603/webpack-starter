import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpacklogo.png';


export const saludar = (nombre = 'sin nombre')=>{
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}!!!`;

    document.body.append(h1);

    // Img

    // console.logo(webpacklogo);
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append(img);
}
