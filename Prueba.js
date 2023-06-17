let A = 0;
let preguntado = new Array(100).fill(false);
console.log('V4');
preguntas = [
    ['¿Cuál es la luz reglamentaria de tope?','Es una luz blanca.'],
    ['¿Qué luz debe llevar una embarcación en la banda de estribor?','Una luz verde.'],
    ['¿Qué luz debe llevar una embarcación en la banda de babor?','Una luz roja.'],
    ['¿Qué arco de horizonte visible debe tener la luz de tope?','225° repartidos desde la proa, 112°5’ a cada banda.'],
    ['¿Qué arco de horizonte visible deben tener las luces de banda?','112°5 desde la proa.'],
    [`¿Qué alcance lumínico deben tener la luz de tope? en buques de:<br/>
    a. 50 o más metros de eslora<br/>
    b. Entre 20 y 50 metros de eslora<br/>
    c. Entre 12 y 20 metros de eslora<br/>
    d. Menos de 12 metros de eslora`,`a. 6 millas.<br/>
    b. 5 millas.<br/>
    c. 3 millas.<br/>
    d. 2 millas.`],
    [`¿Qué alcance lumínico debe tener las luces de banda de un buque de:<br/>
    a. 50 o mas metros de eslora<br/>
    b. Entre 12 y 50 metros de eslora<br/>
    c. Menos de 12 metros de eslora`,`a. 3 millas.<br/>
    b. 2 millas.<br/>
    c. 1 millas.`],
    ['¿Qué luces adicionales deberá llevar un buque que realice tareas de remolque siendo la longitud de este menor a 183 metros?','Dos luces blancas verticales.'],
    ['¿Qué luces adicionales deberá llevar un buque que realiza tareas de remolque, siendo la longitud de este superior a 183 metros?','3 luces blancas verticales.'],
    ['¿Qué arco de horizonte deben tener las luces que indican buque en tareas de remolque?','-Iguales a las luces de tope, 225°.'],
    ['¿Qué señal exhibirá todo buque en tarea de remolque siendo este superior a 183 metros, en horas del día?','Una señal bicónica'],
    ['¿Qué luces exhibirá todo buque remolcado durante la noche?','Luces de banda y luz de alcance'],
    ['¿Que luces debe exhibir durante la noche una embarcación navegando a vela?','Luces de banda.'],
    ['¿Que señal exhibirá un buque que navega a vela y también mecanicamente durante el día?','Una señal cónica con el vértice hacia abajo'],
    ['¿Que luces adicionales exhibirán durante la noche los buques pesqueros dedicados a la pesca de arrastre?','Dos luces en línea vertical todo el horizonte, verde la superior y blanca la inferior.'],
    ['¿Que señal deberá mostrar un pesquero de arrastre de 20, o más metros de eslora durante el día?','Dos conos negros unidos por sus puntas en línea vertical.'],
    ['¿Que señal deberá tener izada un pesquero de arrastre de menos de 20 metros de eslora durante el día?','Dos conos negros unidos por sus puntas o un canasto de pesca.'],
    ['¿Que luces exhibirán además de la reglamentaria los buques pesqueros que no sean de arrastre?','2 luces todo horizonte en línea vertical, roja la superior y blanca la inferior'],
    ['¿Que luces deberá exhibir un buque sin gobierno que no tenga arrancada?','2 luces rojas visible en todo el horizonte en línea vertical en lugar mas visible'],
    ['¿Qué señal deberán exhibir todo buque sin gobierno en horas del día?','2 balones negros'],
    ['¿Qué señal deberá tener izada durante el día toda embarcación que se encuentre fondeada?','Un balón negro'],
    ['¿Qué luz deberán tener durante la noche todo buque fondeado de menos de 45 ,75 metros de eslora?','Una luz blanca todo horizonte en proa en el lugar mas visible.'],
    ['¿Que señal deberá exhibir todo buque varado durante el día?','Tres balones negros en línea vertical'],
    ['¿Que luces deberán mostrar todo buque de menos de 45,75 metros de eslora varado durante la noche?','Una luz blanca a proa todo horizonte y dos luces rojas en línea vertical todo horizonte'],
    ['¿Las embarcaciones de menos de 7 metros de eslora cuando están fondeados o varados fuera de la zona de navegación, paso o canales, deberán llevar las luces o señales de un buque varado o fondeado?','No'],
    ['¿Qué se entiende por pitada corta?','Un sonido de aproximadamente un segundo de duración'],
    ['¿Qué se entiende por pitada larga?','Un sonido de aproximadamente 4 a 6 segundo de duración'],
    ['¿Qué significa una pitada corta?','Caigo a estribor'],
    ['¿Qué significa dos pitadas cortas?','Caigo a babor'],
    ['¿Qué significan tres pitadas cortas?','Estoy dando atrás'],
    ['¿Cómo indica por medio de destellos que caerá a estribor?','Un destello'],
    ['¿Cómo indica por destellos que caerá a babor?','Dos destellos'],
    ['¿Cómo indica por medio de destellos que esta dando maquina atrás?','Tres destellos'],
    ['¿Cuál es la duración aproximada de un destello?','1 segundo'],
    ['¿Cuál es el intervalo entre destello y destello?','1 segundo'],
    ['¿Cuál es el intervalo entre señales sucesivas?','No menor de 10 segundos'],
    ['Cuándo dos embarcaciones se encuentran a la vista en un paso o canal angosto ¿qué señales deberá realizar el buque que pretende alcanzar a otro?',`a. Dos pitadas largas seguidas de una corta significan pretendo alcanzarle por su banda de estribor<br/>
    b. Dos pitadas largas seguidas de dos cortas significan pretendo alcanzarle por su banda de babor`],
    ['¿Qué señal deberá realizar todo buque que no entiende las intenciones del otro?','5 pitadas cortas y rápidas'],
    ['¿Qué señal deberá realizar un buque navegando en zona de visibilidad reducida?','Una pitada larga cada dos minutos'],
    ['¿Qué señal s deberán realizar los buques sin gobierno, pesqueros, veleros con capacidad de maniobra reducida o todo buque remolcado cuando navega en zona de visibilidad reducida?','1 pitada larga seguida de dos corta con un intervalo de 2 minutos.'],
    ['¿Qué señal sonora deberá realizar todo buque fondeado en zona de visibilidad reducida?','Repiques de campana con una duración de 5 segundos con un intervalo de más de un minuto'],
    ['¿Qué es la velocidad de seguridad?','Es la que permite efectuar la maniobra adecuada y eficaz para evitar un abordaje'],
    ['¿Qué elementos se deberán tener en cuenta para determinar la velocidad de Seguridad?',`1) Visibilidad;<br/>
    2) Densidad del trafico;<br/>
    3) Maniobrabilidad del buque;<br/>
    4) Estado del viento, mar y corriente;<br/>
    5) Calado con relación a la profundidad`],
    ['¿Cómo determina que existe riesgo de colisión cuando dos buques navegan en rumbo encontrados?','Si la marcación al buque que se aproxima es constante o sin variación, apreciable.'],
    ['¿Cómo debe ser realizada una buena maniobra para evitar un abordaje?','Deberá ser realizada de tal forma que los buques pasen a distancia segura'],
    ['Si navegando por un canal se encuentra dos embarcaciones con rumbos encontrados, ¿qué maniobra deberán realizar?','Se arrimaran lo más posible al limite exterior del canal que queda por su banda de estribor'],
    ['Cuando un buque de fuerza motriz y un velero, están avanzando en dirección que involucren riesgo de colisión, en aguas libres, ¿quién deberá mantenerse apartado de la ruta del otro?','El buque de fuerza motriz'],
    ['¿Puede un buque cruzar un paso o canal, si al hacerlo interfiere el transito de otro buque?','No'],
    ['¿Puede un buque cruzar un paso o canal, si al hacerlo interfiere el transito de otro buque?','No'],
    ['Cuando dos veleros se aproxima uno al otro y reciben el viento por banda contraria, ¿Cuál de ellos deberán mantenerse apartado de la derrota del otro?','El que recibe el viento por babor'],
    ['¿Puede una embarcación fondear en un canal angosto?','No deberá si es posible salir del canal para la navegación'],
    ['Cuando dos veleros que navegan con rumbo cruzado y pudiera existir riesgo de abordaje, y ambos reciban el viento por la misma banda. ¿Cuál de ellos se mantendrá apartado de la derrota del otro?','El buque que este a barlovento se mantendrá apartado del que este a sotavento'],
    ['¿Qué significa barlovento?','Banda de donde viene el viento'],
    ['¿Qué significa sotavento?','Banda opuesta a la que viene el viento'],
    ['¿Qué se considera por buque que alcanza?','A todo buque que se aproxima a otro viniendo desde una marcación mayor de 22°5’ a popa del través del buque alcanzado, de tal forma que de noche solo sea visible la luz de coronamiento y ninguna de sus luces de costado'],
    ['Entre un buque que alcanza y el alcanzado, ¿cuál de los dos tiene que mantenerse apartado de la derrota del otro?','El buque que alcanza'],
    ['Cuando un buque tiene dudas si alcanza o no, ¿cómo se considera?','Como buque que alcanza'],
    ['Cuando dos buques naveguen de vuelta encontrada, a rumbos opuestos o casi opuestos con riesgos de colisión. ¿Qué maniobra deberán realizar?','Cada uno de ellos deberá caer a estribor'],
    ['¿Cómo determina en hora de la noche cuando dos buques vienen de vuelta encontrada?','Cuando se ven por la proa las dos luces de banda y la luz de tope'],
    ['¿Cómo determina en horas del día que dos buques están en situación de vuelta encontrada?','Cuando por la proa se ven enfilados los palos del otro buque'],
    ['¿Qué deberá hacer si tiene dudas de que existe una situación de vuelta encontrada?','Precederá como si fuera una situación de vuelta encontrada.'],
    ['Cuando dos buques se crucen con riesgo de colisión, ¿cuál de los dos deberá mantenerse apartado de la derrota del otro?','El buque que tenga el otro por su banda de estribor deberá gobernar para mantener apartado de la derrota del otro.'],
    ['¿De que buque se mantendrán apartado las embarcaciones en navegación libre con propulsión mecánica?',`a. De un buque sin gobierno<br/>
    b. De un buque con capacidad de maniobra limitada<br/>
    c. De un buque dedicado a la pesca<br/>
    d. De un buque a vela`],
    ['¿Qué precauciones deberá tomar toda embarcación navegando en zona de visibilidad reducida?','Reducir la velocidad a la de seguridad y realizar las señales correspondientes'],
    ['¿Qué indica una boya de luz blanca con grupos de destellos y como esta pintada a su reconocimiento diurno?','Indican casco a pique y están pintadas con una o más franjas rojas, siendo su marca de tope 2 esferas negras superpuestas'],
    ['¿Qué indica una boya de luz blanca con un ritmo isofásico de ocultación o Morse “A”, y como está pintada para su reconocimiento diurno?','Indican aguas seguras y están pintadas con franjas verticales blancas y rojas con una esfera roja como marca de tope'],
    ['¿Qué indica una boya de luz blanca con un ritmo QOVQ y como esta pintada para su reconocimiento diurno?','Indica que las aguas mas profundas en la zona se encuentran en el cuadrante norte tomando como centro la boya y están pintadas de negro sobre amarillo con 2 conos negros superpuestos con los puntos hacia arriba'],
    ['¿Qué boya se debe dejar a estribor al entrar en un canal de acceso a un puerto o al remontar un río balizado?','Las boyas rojas'],
    ['¿Cómo pueden ser las boyas por sus características luminosas?','Destellos, fija, de ocultación, isofásica, centelleante'],
    ['¿De donde se pueden extraer las características de los faros?','De las cartas náuticas las cuales dan las características lumínicas y los datos de alcance en millas y altura del faro; de los derroteros y listas de faros'],
    ['¿Qué normas debe seguirse para el estudio de una derrota','Estudiar la derrota en la carta poniendo especial atención en que esta no pase sobre peligros a la navegación'],
    ['¿Qué precauciones deberán tomar para realizar una entrada o salida a puerto?',`a. Para salir de puerto, deberá observar si este está abierto o cerrado si tiene salida libre hacerlo con velocidad de seguridad.<br/>
    b. Para entrar, si tiene entrada libre, hacerlo con velocidad de seguridad`],
    ['¿Qué es un fondeadero?','Es aquel que asegura una buena protección para los vientos predominantes y además su fondo es un buen tenedero'],
    ['¿Cuántas veces el fondo es conveniente fondear de cadena?','Por lo menos 3 veces el fondo determinado'],
    ['¿Cómo se debe tomar un fondeadero?','Se deberá aproar la embarcación a la corriente o al viento, llegando al punto elegido sin arrancada o con arrancada atrás, fondear el ancla y dar cadena a medida que vaya pidiendo'],
    ['¿Qué significa garrear?','Cuando una embarcación fondeada no se aguante produciendo un arrastre del ancla por el fondo.'],
    ['¿Cómo determina que una embarcación garrea?','Cuando las marcaciones a dos puntos notables en tierra por lo menos, varían en forma apreciable'],
    ['¿Cuándo estando fondeado se levante mal tiempo, que precauciones se deberán tomar?','Cuidar que la embarcación no garrea para ello es aconsejable aumentar la cantidad de cadena fondeada hasta por lo menos cinco veces el fondo.'],
    ['¿Qué indica un descenso rápido en la presión atmosférica?','Un cambio en las condiciones del tiempo generalmente con aportes de vientos fuertes'],
    ['¿Qué aspectos presentan los cúmulus- nimbus?','Grandes masas nubosas que se alzan como montañas en el horizonte con tonalidades oscuras casi negras'],
    ['¿Qué fenómenos meteorológicos acompañan la presencia de cumulus- nimbus?','Vientos fuertes, turbonadas y en casos excepcionales tornados.'],
    ['¿Cuál es la presión atmosférica media al nivel del mar?','760 mm'],
    ['En épocas de verano y en situaciones normales, ¿cual es el régimen de rotación de los vientos en el Río de la Plata?','Durante la noche sopla del Norte, por la mañana rota por el Oeste y se coloca del Este- sureste.'],
    ['¿Por debajo de que valores la presión atmosférica puede indicar un cambio sensible en las condiciones meteorológicas?','Cuando la presión desciende por debajo de los 760 mm'],
    ['La persistencia de un viento de dirección norte, ¿qué trae generalmente aparejado?','La entrada de un frente frío con aporte de vientos fuertes del sector Sur'],
    ['¿Cuáles son los tres elementos que determinan un incendio?','Combustible, aire y calor'],
    ['¿Cuáles son las tres clases de incendio?',`a. Clase A combustibles sólidos<br/>
    b. Clase B combustibles líquidos<br/>
    c. Clase C materiales eléctricos`],
    ['¿Qué tipo de extintor debe usarse preferentemente en un incendio de combustibles sólidos?','Chorro de agua'],
    ['¿Qué tipo de extintor debe usarse preferentemente en un incendio de combustibles líquidos?','Espuma mecánica'],
    ['¿Qué tipo de extintor debe usarse preferentemente en un incendio de materiales eléctricos?','Anhídrido carbónico'],
    ['¿Cuál es la primer medida a tomar al producirse un incendio de materiales eléctricos?','Desenergizar el sistema'],
    ['¿Dónde se solicita el despacho de las embarcaciones deportivas?','Ante la repartición de la Prefectura Nacional Naval correspondiente al Puerto donde se halla surta la embarcación, en caso de que no existiera dependencia de la P.N.N. deberá efectuarlo en la más próxima'],
    ['¿Qué documentación se deberá exhibir para solicitar despacho?','Certificado de matrícula, navegabilidad, brevet para patronear embarcaciones deportivas y documentos de identidad'],
    ['¿Dentro de que zona está autorizada a navegar una embarcación habilitada para zona “B”?','En todo el Río de la Plata y una franja costera oceánica de 15 millas de ancho hasta la desembocadura del Arroyo Chuy'],
    ['¿Dentro de que radio está autorizada a navegar una embarcación habilitada para hacerlo en la zona “C”?','Estará autorizada a navegar en un radio de 15 millas de puerto de despacho, en el Río de la Plata interior y Océano Atlántico. En el Río de la Plata superior y el Río Uruguay dicho radio será de 20 millas.'],
    ['¿Cuántos metros tiene una milla marina?','Tiene 1852 metros'],
    ['¿Cuantos salvavidas deberá llevar una embarcación?','Tantos como numero de tripulantes lleve'],
    ['¿Cuál es la aplicación a dar a las tiras de tela color naranja que deben llevar las embarcaciones?','Colocarlas formando cruz sobre cubierta en caso de solicitar auxilio'],
    ['¿Cuál es la aplicación a dar al espejo que deben llevar las embarcaciones?','Llamar la atención reflejando en este los rayos solares'],
    ['¿A cuanto equivale en metros una braza (Fathom)?','Equivale a 1.83 metros'],
]

function preguntaNueva(){
    let i = Math.floor(Math.random() * 100);
    if (preguntado.every(element => element === true)) {
        preguntado.fill(false);
    }
    while (preguntado[i]) {
        i = Math.floor(Math.random() * 100);
    }
    preguntado[i] = true;
    let Q = preguntas[i][0];
    A = preguntas[i][1];

    document.getElementById("preg").innerHTML = Q;
    document.getElementById("resp").innerHTML = '';
}

function revelarRespuesta() {
    if (A !=0) {
        document.getElementById("resp").innerHTML = A;
    }
}
