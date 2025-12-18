// --- BASE DE DATOS DE FOTOS ---
// Rutas relativas para mejor compatibilidad
const album = {
    enero: [
        { src: "IMG/enero/enero4.jpg", type: "img", texto: "Comenzar el año con la mejor novia que me podia conseguir" },
        { src: "IMG/enero/enero2.jpg", type: "img", texto: "Cuando andaba el pelo de hongo xd" },
        { src: "IMG/enero/enero3.jpg", type: "img", texto: "de nuevo" },
        { src: "IMG/enero/enero1.jpg", type: "img", texto: "Primera vez llendo en moto" }
    ],
    febrero: [
        { src: "IMG/febrero/febrero1.jpg", type: "img", texto: "Escapadita a la playa" },
        { src: "IMG/febrero/febrero2.jpg", type: "img", texto: "Escapadita a la playa" },
        { src: "IMG/febrero/febrero3.jpg", type: "img", texto: "Foto azteca" },
        { src: "IMG/febrero/febrero4.jpg", type: "img", texto: "Mas azteca todavia" }
    ],
    marzo: [
        { src: "IMG/marzo/marzo1.jpg", type: "img", texto: "Escapadita juntos" },
        { src: "IMG/marzo/marzo2.jpg", type: "img", texto: "Cachetitos mas lindos esos" },
        { src: "IMG/marzo/marzo3.jpg", type: "img", texto: "Preciosa esa mujer" },
        { src: "IMG/marzo/marzo4.jpg", type: "img", texto: "Rica esa boquita" },
        { src: "IMG/marzo/marzo5.jpg", type: "img", texto: "Juntando nuestras manos y nuestros destinos una vez mas" },
        { src: "IMG/marzo/marzo6.jpg", type: "img", texto: "Y las patitas tambien" }
    ],
    abril: [
        { src: "IMG/abril/abril1.jpg", type: "img", texto: "Mujer hermosa" },
        { src: "IMG/abril/abril2.jpg", type: "img", texto: "Tu hombre bien aestetic" },
        { src: "IMG/abril/abril3.jpg", type: "img", texto: "aestetic again" },
        { src: "IMG/abril/abril4.jpg", type: "img", texto: "aestetic pero dandote un corazon" }
    ],
    mayo: [
        { src: "IMG/mayo/mayo1.jpg", type: "img", texto: "Fotazo de mi mujer" },
        { src: "IMG/mayo/mayo2.jpg", type: "img", texto: "mi mujer bien abrigada" },
        { src: "IMG/mayo/mayo3.jpg", type: "img", texto: "Esa sonrisa tan hermosa" },
        { src: "IMG/mayo/mayo4.mp4", type: "video", texto: "Un recuerdo especial en video 🎥 ('Hiciste que se partiera la madre una bicha')" }
    ],
    junio: [
        { src: "IMG/junio/junio1.jpg", type: "img", texto: "De nuevo esa mujer tan hermosa alegrandome los dias con su bellaza" },
        { src: "IMG/junio/junio2.jpg", type: "img", texto: "Tu salida a tu evento" },
        { src: "IMG/junio/junio3.jpg", type: "img", texto: "Licenciada 👩‍💼" },
        { src: "IMG/junio/junio5.jpg", type: "img", texto: "Antes ◀️" },
        { src: "IMG/junio/junio4.jpg", type: "img", texto: "▶️ Despues" },
        { src: "IMG/junio/junio6.jpg", type: "img", texto: "Una foto mas tuya porque estas preciosa" }
    ],
    julio: [
        { src: "IMG/julio/julio1.jpg", type: "img", texto: "Foto aestetic 1" },
        { src: "IMG/julio/julio2.jpg", type: "img", texto: "Foto aestetic 2" },
        { src: "IMG/julio/julio3.jpg", type: "img", texto: "Foto aestetic 3 de tu hombre" },
        { src: "IMG/julio/julio4.jpg", type: "img", texto: "Foto aestetic 4" },
        { src: "IMG/julio/julio5.jpg", type: "img", texto: "Foto aestetic 5" },
        { src: "IMG/julio/julio6.jpg", type: "img", texto: "Foto aestetic 6" }
    ],
    agosto: [
        { src: "IMG/agosto/agosto1.jpg", type: "img", texto: "Otra salidita con la mujer que me deslecha" },
        { src: "IMG/agosto/agosto2.jpg", type: "img", texto: "Otra salidita con la mujer que me deslecha" },
        { src: "IMG/agosto/agosto3.jpg", type: "img", texto: "Otra salidita con la mujer que me deslecha" },
        { src: "IMG/agosto/agosto4.jpg", type: "img", texto: "Otra salidita con la mujer que me deslecha" },
        { src: "IMG/agosto/agosto5.jpg", type: "img", texto: "Otra salidita con la mujer que me deslecha" },
        { src: "IMG/agosto/agosto6.jpg", type: "img", texto: "Foto en el cagadero para darle sason" },
        { src: "IMG/agosto/agosto7.jpg", type: "img", texto: "Foto rancia para completar" }
    ],
    septiembre: [
        { src: "IMG/septiembre/septiembre1.jpg", type: "img", texto: "En la cama porque no tenemos nada que hacer" },
        { src: "IMG/septiembre/septiembre3.jpg", type: "img", texto: "Foto antes de la lluvia" },
        { src: "IMG/septiembre/septiembre2.jpg", type: "img", texto: "Dia intenso con lluvia incluida" }
    ],
    octubre: [
        { src: "IMG/octubre/octubre1.jpg", type: "img", texto: "Dia donde mi abue" },
        { src: "IMG/octubre/octubre2.jpg", type: "img", texto: "Dia de la expo en la cual no hable mucho xd " },
        { src: "IMG/octubre/octubre3.jpg", type: "img", texto: "Dia de la victoria del torneo" },
        { src: "IMG/octubre/octubre4.jpg", type: "img", texto: "Todo un crack con dolor de rodilla incluida en la premiacion" },
        { src: "IMG/octubre/octubre5.jpg", type: "img", texto: "Foto camino ala casa" },
        { src: "IMG/octubre/octubre6.jpg", type: "img", texto: "Que me ves, Te gusto?" },
        { src: "IMG/octubre/octubre7.jpg", type: "img", texto: "Mira ese angel" },
        { src: "IMG/octubre/octubre8.jpg", type: "img", texto: "Foto en el cagadero de nuevo porque si" },
        { src: "IMG/octubre/octubre9.jpg", type: "img", texto: "Poque ta bavo" },
        { src: "IMG/octubre/octubre10.jpg", type: "img", texto: "De nuevo mi angel haciendo presencia" },
        { src: "IMG/octubre/octubre11.jpg", type: "img", texto: "OMG esa mujer me hace muy feliz" },
        { src: "IMG/octubre/octubre12.jpg", type: "img", texto: "Again mi mujer hermosa, no te cansas de ser tan preciosa?" },
        { src: "IMG/octubre/octubre13.jpg", type: "img", texto: "Se creia serio el nene" },
        { src: "IMG/octubre/octubre14.jpg", type: "img", texto: "Wazaaaaaaaaaaa" },
        { src: "IMG/octubre/octubre15.jpg", type: "img", texto: "Lenguetazo pa tu puchaina WAAAAAAAAAAAA" },
        { src: "IMG/octubre/octubre16.jpg", type: "img", texto: "La licenciada de nuevo" }
    ],
    noviembre: [
        { src: "IMG/noviembre/noviembre1.jpg", type: "img", texto: "Caminando vamos a casa" },
        { src: "IMG/noviembre/noviembre3.jpg", type: "img", texto: "caminado de nuevo que aburrido" },
        { src: "IMG/noviembre/noviembre5.jpg", type: "img", texto: "De regreso de la foto anterior cara seria de nuevo porque me dio un airecito de la rosa de Guadalupe en la jeta" },
        { src: "IMG/noviembre/noviembre6.jpg", type: "img", texto: "Otra foto no mas actualizar por donde iba ya " },
        { src: "IMG/noviembre/noviembre2.jpg", type: "img", texto: "Reencuentro con mi mujer" },
        { src: "IMG/noviembre/noviembre7.jpg", type: "img", texto: "Mi graduada" },
        { src: "IMG/noviembre/noviembre4.jpg", type: "img", texto: "Giño de ojo como si me saliera bien" }
    ],
    diciembre: [
        { src: "IMG/diciembre/diciembre1.jpg", type: "img", texto: "Llamadita con filtros poque si " },
        { src: "IMG/diciembre/diciembre2.jpg", type: "img", texto: "Bien nacos" },
        { src: "IMG/diciembre/diciembre3.jpg", type: "img", texto: "Mi regalo de navidad adelantado❤️" },
        { src: "IMG/diciembre/diciembre4.jpg", type: "img", texto: "Un rabano culon" },
        { src: "IMG/diciembre/diciembre5.jpg", type: "img", texto: "Mi mujer saboreandome cuando me piensa👌" },
        { src: "IMG/diciembre/diciembre6.jpg", type: "img", texto: "Mi mujer hermosa preparandose para ser una contadora"}
    ]
};

// --- VARIABLES Y ELEMENTOS DEL DOM ---
let mesActual = 'enero';
let indiceFoto = 0;

const imgElement = document.getElementById('fotoActual');
const videoElement = document.getElementById('videoActual');
const textElement = document.getElementById('textoFoto');
const titleElement = document.getElementById('tituloMes');
const modal = document.getElementById('modalSorpresa');

// --- EVENT LISTENERS (Mejor que onclick inline) ---
document.addEventListener('DOMContentLoaded', () => {
    // Botones de meses
    const monthButtons = document.querySelectorAll('.month-btn');
    monthButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const mes = btn.dataset.month;
            cargarMes(mes);
        });
    });

    // Botones de navegación
    document.getElementById('prevBtn').addEventListener('click', () => cambiarFoto(-1));
    document.getElementById('nextBtn').addEventListener('click', () => cambiarFoto(1));

    // Botón sorpresa
    document.getElementById('surpriseBtn').addEventListener('click', mostrarSorpresa);

    // Botón cerrar modal
    document.getElementById('closeModal').addEventListener('click', cerrarSorpresa);

    // Cerrar modal al clickear fuera
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            cerrarSorpresa();
        }
    });

    // Cargar enero al inicio
    actualizarCarrusel();
});

// --- FUNCIONES OPTIMIZADAS ---
function cargarMes(mes) {
    mesActual = mes;
    indiceFoto = 0;

    // Actualizar botones activos
    document.querySelectorAll('.month-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.month === mes) {
            btn.classList.add('active');
        }
    });

    // Actualizar título
    const mesCapitalizado = mes.charAt(0).toUpperCase() + mes.slice(1);
    titleElement.innerText = `Recuerdos de ${mesCapitalizado}`;

    actualizarCarrusel();
}

function cambiarFoto(direccion) {
    const fotosDelMes = album[mesActual];
    indiceFoto += direccion;

    // Lógica circular
    if (indiceFoto < 0) {
        indiceFoto = fotosDelMes.length - 1;
    } else if (indiceFoto >= fotosDelMes.length) {
        indiceFoto = 0;
    }

    actualizarCarrusel();
}

function actualizarCarrusel() {
    const archivo = album[mesActual][indiceFoto];

    // Ocultar todo primero
    imgElement.style.display = 'none';
    videoElement.style.display = 'none';
    videoElement.pause();

    // Actualizar texto
    textElement.innerText = archivo.texto;

    if (archivo.type === 'video') {
        videoElement.src = archivo.src;
        videoElement.style.display = 'block';
        videoElement.play();
    } else {
        imgElement.src = archivo.src;
        imgElement.style.display = 'block';
    }
}

function mostrarSorpresa() {
    modal.style.display = 'flex';
}

function cerrarSorpresa() {
    modal.style.display = 'none';
}