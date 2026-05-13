
// 1. BASE DE CONOCIMIENTOS 

const casos = [
    { 
        id: 1, personaje: "Rey", locacion: "Salón de Fiestas", arma: "Copa Envenenada",
        titulo: "El Banquete Fatal",
        narrativa: [
            "Había una celebración en el salón de fiestas del Rey Rubén y la Reina Iza. Se estaba preparando un gran banquete para todos los invitados. La empleada doméstica Ana estaba en la cocina. El Rey Rubén se retira de la mesa hacia el baño, que está cerca de la cocina. La Reina Iza decide ir a conversar con el Rey Ozlo sobre un plan de inversión que tienen ella y el Rey Rubén en su estado, y aprovecha para desearle suerte al Rey Ozlo, ya que él y su esposo el Rey Rubén están compitiendo por el puesto de representante del comité, así como otros reyes",
            "Ana, la cocinera, estaba en la cocina junto con los demás cocineros, había salido a buscar unos utensilios al comedor. La Cocinera Ana regresa a la cocina y, sin notar nada extraño, termina de preparar las bandejas con las copas. Poco después sale al salón a hablar con la Reina Iza para avisarle que el banquete está listo, así como las copas para brindar. La Reina le dice que comiencen a repartir los platillos y las copas.Mientras se reparten las copas, la Reina Iza se acerca personalmente al Rey Ozlo para entregarle su copa con una sonrisa, diciéndole: Por su victoria, mi Rey. Un gesto que varios invitados notaron con curiosidad.", 
            "El Rey Rubén regresa del baño justo cuando comienza el brindis, toma su copa y levanta el vaso con una amplia sonrisa. Momentos después del brindis, el Rey Ozlo comienza a sentirse mal. Se lleva la mano al pecho, tose violentamente y cae de la silla ante el horror de todos los presentes. Los médicos del reino llegan rápidamente pero ya es demasiado tarde."
        ],
        historiaFinal: "CASO 1: El Rey Rubén vertió veneno en la copa del Rey Ozlo antes del brindis en el Salón de Fiestas para asegurar su victoria política.",
        interrogatorios: [
            {
                nombre: "Reina Iza",
                preguntas: [
                    { p: "¿Dónde estaba cuando el Rey Ozlo se sintió mal?", r: '"Estaba conversando con el Rey Ozlo justo antes del brindis, luego regresé a mi lugar."' },
                    { p: "¿Alguien más estuvo cerca de la copa del Rey Ozlo?", r: '"Ana repartió las copas. Yo solo estuve cerca de la del Rey Ozlo un momento para desearle suerte."' },
                    { p: "¿Sabe dónde estaba el Rey Rubén antes del brindis?", r: '"Fue al baño. Tardó un poco más de lo normal, pero no le presté mucha atención."' },
                    { p: "¿El Rey Rubén y el Rey Ozlo tenían algún conflicto?", r: '"Son competidores, claro, pero Rubén siempre fue muy caballeroso con Ozlo. Al menos en público."' }
                ]
            },
            {
                nombre: "Cocinera Ana",
                preguntas: [
                    { p: "¿Quién preparó las copas del brindis?", r: '"Yo las preparé y las serví. Estaban listas antes de que el Rey Rubén pasara por la cocina."' },
                    { p: "¿Alguien entró a la cocina antes del brindis?", r: '"Salí un momento a buscar unos utensilios al comedor. Cuando regresé todo estaba igual... creo."' },
                    { p: "¿Notó algo extraño en las copas al servirlas?", r: '"No. Aunque... una copa tenía una pequeña mancha en el exterior, pero asumí que era del pulido."' },
                    { p: "¿Sabe si alguien más tocó las copas?", r: '"No vi a nadie. Pero estuve fuera de la cocina unos minutos antes de servirlas."' }
                ]
            },
            {
                nombre: "Rey Rubén",
                preguntas: [
                    { p: "¿Dónde estuvo antes del brindis?", r: '"Fui al baño. Estas celebraciones son largas y necesitaba un momento."' },
                    { p: "¿Pasó por la cocina camino al baño?", r: '"El pasillo pasa cerca, pero no entré. ¿Por qué lo pregunta?"' },
                    { p: "¿Cómo era su relación con el Rey Ozlo?", r: '"Éramos competidores, pero también colegas. Su muerte es una gran pérdida para el reino."' },
                    { p: "¿Sabía que el Rey Ozlo llevaba ventaja en las votaciones?", r: '"Todos lo sabíamos. Las encuestas son públicas." — pausa breve — "Pero el proceso era justo."' }
                ]
            }
        ],
        inspecciones: [
            {
                titulo: "La Cocina",
                texto: "Las copas restantes del brindis están ordenadas, pero una tiene una pequeña marca en el borde. En el suelo hay una gota oscura cerca de donde estaban. Pista: Alguien manipuló una copa específica."
            },
            {
                titulo: "El Comedor",
                texto: "En la mesa principal queda una mancha circular oscura en el mantel. Un invitado dejó una nota culpando a la Reina. El programa del evento tiene una marca de tinta. Pista: La nota desvía hacia la Reina."
            },
            {
                titulo: "El Salón de Fiestas",
                texto: "El médico examinó el cuerpo del Rey Ozlo aquí mismo: murió por envenenamiento de acción rápida (unos 8 minutos). Pista: El veneno fue introducido minutos antes del brindis, lo que descarta a la cocinera."
            },
            {
                titulo: "El Jardín",
                texto: "En el pasillo exterior que conecta el jardín con la cocina, hay una huella de zapato que no es de servicio. Un delantal colgado tiene una mancha del mismo tono que la gota. Pista: Alguien mintió sobre su destino."
            },
            {
                titulo: "El Baño",
                texto: "El baño está limpio y sin señales de uso reciente. En el basurero, casi cubierto por papel, hay un pequeño frasco de vidrio oscuro sin etiqueta con residuos de líquido. Pista: Si el Rey lo usó, habría señales."
            }
        ]
    },
    { 
        id: 2, personaje: "Reina", locacion: "Baño", arma: "Pluma Envenenada",
        titulo: "La Tinta de los Secretos",
        narrativa: [
            "Era una tarde tranquila. Esa mañana, la Reina Iza encontró entre los papeles de su esposo una carta que delataba una infidelidad. Guardó la carta en silencio, pero algo oscuro se encendió en ella. Mientras tanto, en el jardín, el Jardinero Juan y la Cocinera Ana discutían acaloradamente.",
            "La Reina bajó de sus aposentos portando su pluma real, la que usa para firmar documentos. Ana, la cocinera estaba sola lavándose las manos en la cocina cuando vio a la Reina en el umbral con una expresión aterradora. Después Ana se dirigió al baño.",
            "Minutos después, una doncella encontró el cuerpo de Ana. El Rey Rubén llegó alterado a la escena, y el Jardinero Juan fue visto entrando apresuradamente desde el jardín con sus tijeras, atrayendo todas las sospechas."
        ],
        historiaFinal: "CASO 2: La Reina Iza descubrió la infidelidad de su esposo. Con la frialdad de la realeza, usó su pluma entintada con veneno para silenciar a la Cocinera en el baño de servicio.",
        interrogatorios: [
            {
                nombre: "Jardinero Juan",
                preguntas: [
                    { p: "¿Dónde estaba cuando encontraron a Ana?", r: '"Estaba podando los arbustos del lado norte del palacio. Llevo ahí desde las cuatro."' },
                    { p: "¿Cómo era su relación con Ana?", r: '"Bien, supongo. Aunque discutíamos seguido por el tema de los desperdicios del jardín. Era terca."' },
                    { p: "¿Alguien lo vio trabajar esa tarde?", r: '"No sé. Estaba solo. Los arbustos que podé están justo debajo de la ventana del baño de servicio."' },
                    { p: "¿Vio u oyó algo inusual esa tarde?", r: '"Escuché un golpe fuerte desde adentro, como algo cayendo. Pensé que fue un sirviente torpe."' }
                ]
            },
            {
                nombre: "Rey Rubén",
                preguntas: [
                    { p: "¿Dónde estaba cuando Ana fue encontrada?", r: '"En mi estudio. Tenía documentos urgentes que revisar."' },
                    { p: "¿Cuál era su relación con la Cocinera Ana?", r: '"Era nuestra empleada. Una muy buena cocinera." — desvía la mirada — "Nada más."' },
                    { p: "¿Sabe si Ana tenía conflictos con alguien en el palacio?", r: '"Con Juan discutía frecuentemente. Creo que había tensión entre ellos."' },
                    { p: "¿Notó algo diferente en la Reina Iza esa tarde?", r: '"Estaba... callada. Más de lo normal. Pero no le pregunté nada."' }
                ]
            },
            {
                nombre: "Reina Iza",
                preguntas: [
                    { p: "¿Dónde estaba cuando encontraron a Ana?", r: '"En mis aposentos revisando correspondencia. Bajé cuando escuché el alboroto."' },
                    { p: "¿Cómo era su relación con Ana?", r: '"Era una empleada competente. Confiábamos en ella para el manejo de la cocina."' },
                    { p: "¿Bajó de sus aposentos en algún momento esa tarde?", r: '"No. Estuve arriba hasta que escuché los gritos." — pausa — "Bueno, quizás bajé un momento a pedir té, pero fue brevísimo."' },
                    { p: "¿Sabía dónde estaba Ana esa tarde?", r: '"No tengo por qué rastrear a mis empleadas."' }
                ]
            }
        ],
        inspecciones: [
            {
                titulo: "La Cocina",
                texto: "Ana abandonó su puesto de prisa. Cerca de su mesa hay un pétalo de flor aplastado. En un cajón cercano hay un espacio vacío del tamaño exacto de una carta. Pista: La carta del Rey pasó por aquí."
            },
            {
                titulo: "El Comedor",
                texto: "En el pasillo que conecta el comedor con el área de servicio hay una huella de zapato fino de tacón delgado apuntando al baño. Pista: Alguien con zapatos finos caminó por ahí asegurándose de no ser vista."
            },
            {
                titulo: "El Salón de Fiestas",
                texto: "En una mesa discreta del salón, la taza de té de la Reina está fría e intacta. Falta la pluma real de su estuche de viaje, y hay una carta a medio doblar que revela un engaño. Pista: La Reina no estuvo tomando el té."
            },
            {
                titulo: "El Jardín",
                texto: "En el Jardín del Norte hay ramas podadas y una tijera con barro fresco. La ventana hacia el baño tiene vidrio esmerilado y no hay forzamiento. Pista: Juan estuvo ahí, pero no pudo ver hacia adentro ni entrar."
            },
            {
                titulo: "El Baño",
                texto: "La escena del crimen. Hay una mancha oscura azulada (no es sangre). El lavabo tiene gotas de agua recientes. En el delantal de Ana hay una mancha de tinta negra. Pista: El arma dejó residuos de tinta."
            }
        ]
    },
    { 
        id: 3, personaje: "Empleada Doméstica", locacion: "Cocina", arma: "Cuchillo de Plata",
        titulo: "El Secreto de la Despensa",
        narrativa: [
            "Era una mañana ordinaria en el palacio. El Rey Rubén y la Reina Iza se encontraban en el comedor desayunando, mientras la Cocinera Ana preparaba los platillos en la cocina. El Jardinero Juan trabajaba en el jardín desde temprano, y el Perro Drako —la mascota del palacio— merodeaba libremente por los pasillos como era su costumbre, entrando y saliendo de la cocina cada que podía, atraído por los olores de la comida. Lo que parecía una mañana como cualquier otra, escondía una tensión que llevaba días acumulándose entre dos de los empleados del palacio.",
            "Esa mañana, antes de que comenzara el desayuno real, el Jardinero Juan se presentó en la cocina con el pretexto de pedir agua. Esperó a que los demás ayudantes de cocina salieran y habló con Ana sobre algo sospechoso que vió en el jadrin.",
            "Se escucharon gritos, Drako despertó asustado y mordió la pierna de Ana. Poco después, una doncella encontró a Juan sin vida en la cocina. El perro Drako fue hallado en los pasillos con el hocico ensangrentado, convirtiéndose de inmediato en el principal sospechoso."
        ],
        historiaFinal: "CASO 3: Ana robaba de la despensa. Cuando el Jardinero la descubrió que robaba e intentó chantajearla, ella lo atacó con un cuchillo en la cocina, y el Perro Drako resultó herido en el caos.",
        interrogatorios: [
            {
                nombre: "Rey Rubén",
                preguntas: [
                    { p: "¿Dónde estaba cuando encontraron a Juan?", r: '"Pasé por la cocina esta mañana buscando a Juan para hablarle del jardín. Después fui al jardín directamente."' },
                    { p: "¿Cómo era su relación con el Jardinero Juan?", r: '"Buena, aunque últimamente Juan parecía tenso. Le exigí mucho trabajo esta semana."' },
                    { p: "¿Notó algo extraño en la cocina cuando pasó?", r: '"Ana estaba cortando verduras. Parecía normal. Aunque... el perro estaba ahí echado, lo cual era habitual."' },
                    { p: "¿Sabe si Juan tenía conflictos con alguien en el palacio?", r: '"Con Ana discutían seguido. Pero eran discusiones de trabajo, nada serio que yo supiera."' }
                ]
            },
            {
                nombre: "Reina Iza",
                preguntas: [
                    { p: "¿Dónde estaba cuando encontraron a Juan?", r: '"En el comedor revisando los arreglos para la cena de esta noche. Varios sirvientes me vieron ahí."' },
                    { p: "¿Cómo era su relación con Juan?", r: '"Correcta. Era un buen jardinero, aunque algo impulsivo cuando se le contrariaba."' },
                    { p: "¿Ha notado algo inusual en la cocina últimamente?", r: '"Ahora que lo menciona... el inventario de especias ha tenido algunas inconsistencias en los últimos meses. Lo atribuí a errores de registro."' },
                    { p: "¿Sabe si Juan y Ana tenían algún problema personal?", r: '"Los escuché discutir en el jardín ayer. Juan estaba muy alterado pero Ana parecía fría, calculadora. Me pareció extraño."' }
                ]
            },
            {
                nombre: "Cocinera Ana",
                preguntas: [
                    { p: "¿Dónde estaba cuando encontraron a Juan?", r: '"Estuve en la cocina toda la mañana preparando el almuerzo. Salí un momento al comedor a entregar unos platillos."' },
                    { p: "¿Cómo era su relación con Juan?", r: '"Bien, aunque discutíamos por sus herramientas en el camino de la cocina. Cosas normales de convivencia."' },
                    { p: "¿Notó algo extraño en la cocina esta mañana?", r: '"No... aunque Drako estuvo más inquieto de lo normal. Creo que algo lo alteró."' },
                    { p: "¿Juan pasó por la cocina esta mañana?", r: '"Sí, pasó a pedir agua. Intercambiamos pocas palabras y se fue." — baja la mirada' }
                ]
            }
        ],
    inspecciones: [
            {
                titulo: "La Cocina",
                texto: "Hay un charco de sangre y utensilios caídos. El cuchillo más grande tiene una micro mancha oscura en el mango y fue devuelto a su lugar. Debajo de la mesa hay un hueso de Drako. Pista: El asesino conoce bien la cocina."
            },
            {
                titulo: "El Comedor",
                texto: "En su huida, Drako dejó un rastro por el comedor. Tiene mínima sangre en el hocico (un roce, no una mordida letal) y una herida en la pata. Pista: Drako no es el asesino, fue un daño colateral que huyó asustado."
            },
            {
                titulo: "El Salón de Fiestas",
                texto: "Ana fue llevada al salón para ser interrogada. Cojea ligeramente. En la pantorrilla tiene una herida semicircular. En su delantal hay un trapo ensangrentado. Pista: Drako la mordió a ella durante el ataque a Juan."
            },
            {
                titulo: "El Jardín",
                texto: "En la zona de compost hay huellas de dos personas discutiendo. Entre las herramientas está la libreta de Juan detallando el robo de Ana. Pista: Juan tenía pruebas escritas para chantajearla."
            },
            {
                titulo: "El Baño",
                texto: "En un cuarto de limpieza junto al baño, escondido detrás de toallas, hay un cajón oculto con fajos de oro y especias robadas de la despensa. Pista: Ana llevaba meses robando sistemáticamente."
            }
        ]
    },
    { 
        id: 4, personaje: "Jardinero", locacion: "Jardín", arma: "Tijeras de Podar",
        titulo: "El Jardín de las Culpas",
        narrativa: [
            "Era la tarde previa a una visita importante en el palacio. El Rey Rubén había ordenado que el jardín estuviera impecable para recibir a sus invitados al día siguiente, por lo que el Jardinero Juan tenía instrucciones estrictas de trabajar hasta terminar, sin importar la hora. La Cocinera Ana iba y venía entre la cocina y el jardín trasero, llevando desperdicios al compost y recogiendo hierbas frescas para la cena. La Reina Iza estaba en sus aposentos, y el Perro Drako —como cada tarde— merodeaba libremente por el jardín, persiguiendo mariposas y echándose entre los arbustos a descansar. Todo parecía normal. Hasta que no lo fue.",
            "El Jardinero Juan llevaba horas trabajando bajo el sol sin descanso. Estaba de pésimo humor: el Rey le había dado la lista de pendientes del jardín apenas esa mañana, cuando lo lógico era haberlo avisado días antes. Además, debía terminar de podar los rosales más grandes del fondo, los que bordeaban la fuente, y la podadora grande estaba rota desde la semana anterior, por lo que tenía que hacerlo todo con sus tijeras de jardinería.",
            "Al caer la noche, el Rey Rubén salió al jardín a llamar a Drako para entrar, como hacía cada noche. El perro no apareció. Llamó varias veces, recorrió los pasillos del palacio, preguntó a los sirvientes. Nadie lo había visto en horas. Fue la Cocinera Ana, con una mezcla de curiosidad y sospecha, quien sugirió revisar el rincón del jardín donde Juan había estado trabajando. Dijo que le pareció ver a Drako por allá más temprano. Cuando retiraron las ramas acumuladas, encontraron al Perro Drako sin vida."
        ],
        historiaFinal: "CASO 4: Una tragedia de errores. Juan golpeó accidentalmente a Drako con sus tijeras al retroceder en el jardín e intentó encubrir el cuerpo entre las ramas.",
        interrogatorios: [
            {
                nombre: "Rey Rubén",
                preguntas: [
                    { p: "¿Dónde estaba cuando encontraron a Drako?", r: '"Estuve en el jardín buscando a Juan para hablarle de los preparativos. Luego regresé adentro."' },
                    { p: "¿Cuándo fue la última vez que vio a Drako?", r: '"Por la mañana, en el pasillo. Drako me siguió hasta el jardín un momento, pero luego se fue."' },
                    { p: "¿Cómo era su relación con Drako?", r: '"Drako era mi perro desde cachorro. Lo quería enormemente." — voz quebrada' },
                    { p: "¿Sabe si alguien en el palacio tenía problemas con Drako?", r: '"Juan se quejaba a veces de que Drako le revolvía las herramientas del jardín. Pero nunca pensé que fuera algo serio."' }
                ]
            },
            {
                nombre: "Cocinera Ana",
                preguntas: [
                    { p: "¿Dónde estaba cuando encontraron a Drako?", r: '"En la cocina todo el día. Aunque salí un par de veces al jardín a recoger hierbas y a tirar desperdicios."' },
                    { p: "¿Llevaba algo cuando fue al jardín?", r: '"Mis utensilios de cocina habituales. Un cuchillo para cortar hierbas frescas."' },
                    { p: "¿Vio algo extraño en el jardín durante sus visitas?", r: '"Vi a Juan trabajando en los arbustos del fondo. Parecía agitado, más de lo normal. En un momento lo vi agacharse de manera extraña pero no le presté mucha atención."' },
                    { p: "¿Cuándo fue la última vez que vio a Drako vivo?", r: '"Lo vi en el jardín por la tarde, echado entre unas ramas cerca de donde Juan trabajaba."' }
                ]
            },
            {
                nombre: "Jardinero Juan",
                preguntas: [
                    { p: "¿Dónde estaba toda la tarde?", r: '"Podando los rosales del fondo, cerca de la fuente. Estuve ahí hasta que terminé."' },
                    { p: "¿Cuándo fue la última vez que vio a Drako?", r: '"Por la mañana, cuando llegué al jardín. Después no lo volví a ver."' },
                    { p: "¿Cómo estaba el jardín cuando terminó de trabajar?", r: '"Lo dejé todo recogido. Amontoné las ramas podadas en el rincón del muro trasero como siempre."' },
                    { p: "¿Sus tijeras de jardinería tienen alguna mancha?", r: '"Son herramientas de jardín, siempre tienen manchas de tierra y savia."' }
                ]
            }
        ],
    inspecciones: [
            {
                titulo: "La Cocina",
                texto: "En la ventana de la cocina, que da al jardín trasero, hay marcas de dedos en el polvo del alféizar. Desde ahí se ve perfectamente el rincón del muro. Pista: Ana estuvo apoyada observando todo lo que Juan hizo."
            },
            {
                titulo: "El Comedor",
                texto: "En el pasillo que une el comedor y el jardín, hay barro fresco y pisadas profundas como si alguien cargara mucho peso. Un delantal colgado tiene una mancha oscura. Pista: El delantal conecta a Juan con el traslado."
            },
            {
                titulo: "El Salón de Fiestas",
                texto: "En un mueble cerca del salón, Juan escondió temporalmente sus tijeras. Están limpiadas apresuradamente, pero hay líquido oscuro en la bisagra y un trapo sucio al lado. Pista: Limpió el arma presa del pánico."
            },
            {
                titulo: "El Jardín",
                texto: "En los rosales del fondo hay una zona aplastada en el pasto, circular, del tamaño de un perro. Hay un rastro de arrastre que va hasta el muro trasero. Pista: Drako cayó aquí por accidente y luego fue arrastrado."
            },
            {
                titulo: "El Baño",
                texto: "En el muro exterior junto a la ventana del baño, hay ramas de un arbusto diferente cubriendo el cuerpo de Drako. La herida indica un impacto de arriba hacia abajo al retroceder. Pista: Fue un encubrimiento apresurado."
            }
        ]
    },
    { 
        id: 5, personaje: "Perro", locacion: "Comedor", arma: "Mordida Rabiosa",
        titulo: "La Bestia del Comedor",
        narrativa: [
            "Era la noche más importante del año en el palacio. El Rey Rubén había organizado una cena de gala en el Comedor Principal para anunciar oficialmente su candidatura como representante del Comité de la Realeza de Absalón. Los invitados más importantes del reino estaban presentes, las mesas estaban decoradas con candelabros de oro, y el ambiente era de celebración y elegancia.",
            "Esa tarde, mientras la Cocinera Ana preparaba la carne del banquete, separó un trozo grande para Drako, como hacía siempre en los días de fiesta. Lo dejó en un plato pequeño en la esquina de la cocina, listo para dárselo al final de la noche. Juan el jardinero entró a la cocina por un poco de agua, mientras estaba guardando los fertilizantes en la alacena.",
            "Durante la primera hora de la cena, Drako estuvo dormido en su rincón habitual del pasillo. Pero pasada esa hora, comenzó a comportarse de manera extraña. Caminaba en círculos, gruñía sin razón aparente, y sus ojos estaban vidriosos. El Rey Rubén, ajeno a todo, decidió en ese momento levantarse de la mesa principal para dar un breve receso antes del discurso oficial. Salió del comedor por la puerta lateral hacia el pasillo, donde nadie más estaba en ese instante. Drako estaba ahí. El Rey, acostumbrado a acariciarlo sin pensarlo, se agachó instintivamente hacia el perro. saltó sobre el Rey con una furia que no era propia de él. Las mordidas fueron rápidas, profundas y directas al cuello y al hombro. El Rey cayó sin poder pedir ayuda, y Drako salió corriendo por el pasillo, chocando contra las paredes."
        ],
        historiaFinal: "CASO 5: El Jardinero derramó fertilizantes tóxicos en la comida de Drako. Intoxicado, el perro atacó al Rey Rubén por instinto descontrolado en el pasillo del Comedor.",
        interrogatorios: [
            {
                nombre: "Reina Iza",
                preguntas: [
                    { p: "¿Dónde estaba cuando el Rey fue atacado?", r: '"En el comedor, con los invitados. Todos me vieron ahí."' },
                    { p: "¿Por qué pidió que sacaran a Drako del comedor?", r: '"Estaba comportándose de manera errática. No era apropiado tenerlo ahí con los invitados." — pausa — "Cualquiera hubiera hecho lo mismo."' },
                    { p: "¿Notó algo inusual en Drako durante la cena?", r: '"Estaba inquieto, caminaba en círculos. Pensé que era por el ruido de los invitados, pero ahora no estoy segura."' },
                    { p: "¿Sabe si alguien le dio algo de comer a Drako esa tarde?", r: '"Ana siempre le guardaba un trozo de carne en los días de fiesta. Era una costumbre."' }
                ]
            },
            {
                nombre: "Cocinera Ana",
                preguntas: [
                    { p: "¿Le dio comida a Drako esa tarde?", r: '"Sí, como siempre en los días de gala. Le aparté un trozo de carne desde la mañana."' },
                    { p: "¿Notó algo extraño en la comida de Drako antes de dársela?", r: '"No... aunque el plato estaba en un lugar diferente a donde lo dejé. Pensé que lo había movido yo misma sin darme cuenta."' },
                    { p: "¿Alguien más estuvo en la cocina esa tarde?", r: '"Juan pasó a buscar agua a media tarde. Estuvo solo un momento."' },
                    { p: "¿Notó algo diferente en el comportamiento de Juan cuando entró?", r: '"Parecía distraído, apresurado. Dejó algo sobre la mesa y salió rápido. No le presté atención."' }
                ]
            },
            {
                nombre: "Jardinero Juan",
                preguntas: [
                    { p: "¿Estuvo en la cocina esa tarde?", r: '"Sí, entré un momento a buscar agua. Estaba deshidratado de tanto trabajar."' },
                    { p: "¿Dejó algo sobre la mesa de la cocina?", r: '"Yo... creo que dejé mi botella de trabajo. La recogí después."' },
                    { p: "¿Qué contenía esa botella?", r: '"Fertilizante líquido. Lo uso para las plantas del jardín." — se detiene — "Mezclado con un repelente orgánico que preparo yo mismo."' },
                    { p: "¿Notó que el plato de Drako estaba cerca de donde dejó la botella?", r: '"No vi ningún plato. Estaba oscureciendo y la cocina tenía poca luz en esa zona."' }
                ]
            }
        ],
       
        inspecciones: [
            {
                titulo: "La Cocina",
                texto: "El plato de Drako tiene una película aceitosa. Junto a él hay una mancha circular del tamaño de una botella con líquido verdoso. Hay un rastro de gotas hacia la salida. Pista: Juan derramó su mezcla tóxica en la carne."
            },
            {
                titulo: "El Comedor",
                texto: "La escena del ataque. Hay marcas de forcejeo y arañazos a baja altura. Varios testigos dicen que Drako gruñía desorientado mucho antes del ataque. La puerta está forzada. Pista: Drako atacó por un instinto descontrolado."
            },
            {
                titulo: "El Salón de Fiestas",
                texto: "En el salón, el Rey llevaba un sobre con el anuncio de su divorcio. La Reina está alterada y dejó una carta a medio escribir. Pista: El divorcio es un distractor emocional; las heridas del Rey son claramente de animal."
            },
            {
                titulo: "El Jardín",
                texto: "Drako fue hallado temblando. El veterinario nota pupilas dilatadas (intoxicación). En su hocico hay residuos del líquido verdoso de la cocina. Pista: Drako no tiene rabia, es víctima de la intoxicación."
            },
            {
                titulo: "El Baño",
                texto: "En el baño de servicio, Juan dejó olvidada su botella de 'Repelente Nº3' tras lavarse las manos. La etiqueta advierte que contiene Hierba de San Juan, tóxica para animales. Pista: La negligencia de Juan lo causó todo."
            }
        ]
    }
];


// 2. VARIABLES GLOBALES Y MOTOR DE ARRANQUE
// ==========================================
let casoSecreto = {};
let parteNarrativaActual = 0;
let preguntasRestantes = 5;

window.onload = function() {
    generarNuevoCaso();
};

function generarNuevoCaso() {
    casoSecreto = casos[Math.floor(Math.random() * casos.length)];
    console.log("Motor de inferencia listo. Caso secreto generado:", casoSecreto.titulo);
}


// 3. CONTROL DE PANTALLAS Y NARRATIVA
// ==========================================
function comenzarJuego() {
    document.getElementById("pantalla-inicio").classList.add("oculto");
    document.getElementById("pantalla-narrativa").classList.remove("oculto");
    document.getElementById("subtitulo").textContent = "Lee atentamente los hechos antes de investigar.";
    
    document.getElementById("titulo-caso").textContent = casoSecreto.titulo;
    parteNarrativaActual = 0;
    actualizarVistaNarrativa();
}

function cambiarParte(direccion) {
    parteNarrativaActual += direccion;
    actualizarVistaNarrativa();
}

function actualizarVistaNarrativa() {
    document.getElementById("texto-narrativa").textContent = casoSecreto.narrativa[parteNarrativaActual];

    const btnAtras = document.getElementById("btn-atras");
    const btnSiguiente = document.getElementById("btn-siguiente");

    if (parteNarrativaActual === 0) {
        btnAtras.style.display = "none";
    } else {
        btnAtras.style.display = "inline-block";
    }

    if (parteNarrativaActual === 2) {
        btnSiguiente.textContent = "Ir a Interrogatorios";
        btnSiguiente.onclick = irAInterrogatorios; 
    } else {
        btnSiguiente.textContent = "Siguiente";
        btnSiguiente.onclick = function() { cambiarParte(1); };
    }
}


// 4. SALA DE INTERROGATORIOS
// ==========================================
function irAInterrogatorios() {
    document.getElementById("pantalla-narrativa").classList.add("oculto");
    document.getElementById("pantalla-interrogatorio").classList.remove("oculto");
    document.getElementById("subtitulo").textContent = "Tienes 5 preguntas. Elige sabiamente a quién y qué preguntar.";
    
    iniciarSalaInterrogatorio();
}

function iniciarSalaInterrogatorio() {
    preguntasRestantes = 5;
    document.getElementById("contador-preguntas").textContent = preguntasRestantes;
    document.getElementById("texto-respuesta").textContent = "Selecciona a un sospechoso y haz una pregunta para ver su respuesta aquí.";
    document.getElementById("contenedor-preguntas").classList.add("oculto");

    const contenedorSospechosos = document.getElementById("lista-sospechosos");
    contenedorSospechosos.innerHTML = ""; 

    casoSecreto.interrogatorios.forEach((sospechoso, indexSospechoso) => {
        const btn = document.createElement("button");
        btn.className = "btn-sospechoso";
        btn.textContent = sospechoso.nombre;
        btn.onclick = () => mostrarPreguntas(indexSospechoso, btn);
        contenedorSospechosos.appendChild(btn);
    });
}

function mostrarPreguntas(indexSospechoso, botonActivado) {
    document.querySelectorAll(".btn-sospechoso").forEach(b => b.classList.remove("activo"));
    botonActivado.classList.add("activo");

    const sospechoso = casoSecreto.interrogatorios[indexSospechoso];
    document.getElementById("nombre-sospechoso").textContent = `Preguntando a: ${sospechoso.nombre}`;
    
    const contenedorPreguntas = document.getElementById("lista-preguntas");
    contenedorPreguntas.innerHTML = ""; 
    
    document.getElementById("contenedor-preguntas").classList.remove("oculto");

    sospechoso.preguntas.forEach((item, indexPregunta) => {
        const btn = document.createElement("button");
        btn.className = "btn-pregunta";
        btn.textContent = item.p;
        
        btn.onclick = () => hacerPregunta(indexSospechoso, indexPregunta, btn);
        contenedorPreguntas.appendChild(btn);
    });
}

function hacerPregunta(indexSospechoso, indexPregunta, botonPregunta) {
    if (preguntasRestantes > 0) {
        preguntasRestantes--;
        document.getElementById("contador-preguntas").textContent = preguntasRestantes;
        
        const respuesta = casoSecreto.interrogatorios[indexSospechoso].preguntas[indexPregunta].r;
        document.getElementById("texto-respuesta").innerHTML = `<strong>${casoSecreto.interrogatorios[indexSospechoso].nombre} responde:</strong><br><br>${respuesta}`;
        
        botonPregunta.disabled = true;

        if (preguntasRestantes === 0) {
            alert("Has agotado tus 5 preguntas. Es hora de inspeccionar las escenas.");
            document.querySelectorAll(".btn-pregunta").forEach(btn => btn.disabled = true);
        }
    } else {
        alert("Ya no te quedan preguntas.");
    }
}


// 5. INSPECCIÓN Y MOTOR DE DEDUCCIÓN FINAL
// ==========================================
function irAInspeccion() {
    document.getElementById("pantalla-interrogatorio").classList.add("oculto");
    document.getElementById("pantalla-inspeccion").classList.remove("oculto");
    document.getElementById("subtitulo").textContent = "Revisa las escenas. Solo tienes 3 intentos.";
}

function irAAcusacion() {
    document.getElementById("pantalla-inspeccion").classList.add("oculto");
    document.getElementById("pantalla-juego").classList.remove("oculto");
    document.getElementById("subtitulo").textContent = "Analiza las variables y haz tu acusación final.";
}

function hacerAcusacion() {
    const p_sel = document.getElementById("personaje").value;
    const a_sel = document.getElementById("arma").value;
    const l_sel = document.getElementById("locacion").value;

    if (!p_sel || !a_sel || !l_sel) {
        alert("Por favor, selecciona un Sospechoso, un Arma y una Locación.");
        return;
    }

    let aciertos = 0;
    if (p_sel === casoSecreto.personaje) aciertos++;
    if (a_sel === casoSecreto.arma) aciertos++;
    if (l_sel === casoSecreto.locacion) aciertos++;

    mostrarResultado(aciertos);
}

function mostrarResultado(aciertos) {
    const panel = document.getElementById("resultado-panel");
    const titulo = document.getElementById("titulo-resultado");
    const mensaje = document.getElementById("mensaje-resultado");
    const btnReiniciar = document.getElementById("btn-reiniciar");

    panel.classList.remove("oculto");

    if (aciertos === 3) {
        panel.style.borderLeftColor = "#4CAF50"; 
        titulo.textContent = "¡MISTERIO RESUELTO!";
        titulo.style.color = "#4CAF50";
        mensaje.textContent = casoSecreto.historiaFinal;
        
        document.querySelector(".btn-acusar").classList.add("oculto");
        btnReiniciar.classList.remove("oculto");
    } else {
        panel.style.borderLeftColor = "#f44336"; 
        titulo.textContent = "Hipótesis Incorrecta";
        titulo.style.color = "#f44336";
        mensaje.textContent = `Tienes ${aciertos} de 3 pistas correctas. Revisa bien los detalles y vuelve a intentarlo.`;
    }
}

function reiniciarJuego() {
    document.getElementById("pantalla-juego").classList.add("oculto");
    document.getElementById("pantalla-inicio").classList.remove("oculto");
    document.getElementById("subtitulo").textContent = "Un crimen ha ocurrido. Usa tu lógica para encontrar la verdad.";

    document.getElementById("personaje").value = "";
    document.getElementById("arma").value = "";
    document.getElementById("locacion").value = "";
    document.getElementById("resultado-panel").classList.add("oculto");
    
    document.querySelector(".btn-acusar").classList.remove("oculto");
    document.getElementById("btn-reiniciar").classList.add("oculto");
    
    generarNuevoCaso();
}

// 6. LÓGICA DE INSPECCIÓN DE ESCENAS
// ==========================================
let inspeccionesRestantes = 3;

// Modificamos la función que ya tenías para que inicie las escenas
function irAInspeccion() {
    document.getElementById("pantalla-interrogatorio").classList.add("oculto");
    document.getElementById("pantalla-inspeccion").classList.remove("oculto");
    document.getElementById("subtitulo").textContent = "Revisa las escenas. Solo tienes 3 intentos.";
    
    iniciarSalaInspeccion();
}

function iniciarSalaInspeccion() {
    inspeccionesRestantes = 3;
    document.getElementById("contador-zonas").textContent = inspeccionesRestantes;
    document.getElementById("resultado-inspeccion").classList.add("oculto");

    const cuadricula = document.getElementById("cuadricula-zonas");
    cuadricula.innerHTML = ""; // Limpiar cuadros anteriores

    // 1. Aquí definimos las 5 escenas fijas (Nombre e Imagen)
    const escenasFijas = [
        { nombre: "Cocina", imagen: "images/cocina.jpg" },
        { nombre: "Comedor", imagen: "images/comedor.jpeg" },
        { nombre: "Salón de Fiestas", imagen: "images/salon_fiestas.jpeg" },
        { nombre: "Jardín", imagen: "images/jardin.webp" },
        { nombre: "Baño", imagen: "images/baño.jpg" }
    ];

    // Generar los 5 cuadros universales
    escenasFijas.forEach((escena, index) => {
        const cuadro = document.createElement("div");
        cuadro.className = "cuadro-zona";
        
        // Asignar la imagen fija
        cuadro.style.backgroundImage = `url('${escena.imagen}')`; 
        
        // Asignar el nombre fijo (Cocina, Comedor, etc.) al cuadro
        const tituloCuadro = document.createElement("div");
        tituloCuadro.className = "titulo-cuadro";
        tituloCuadro.textContent = escena.nombre;

        cuadro.appendChild(tituloCuadro);

        // Evento al hacer clic: pasamos el index y el nombre de la escena
        cuadro.onclick = () => inspeccionarZona(index, cuadro, escena.nombre);
        
        cuadricula.appendChild(cuadro);
    });
}

function inspeccionarZona(index, cuadroVisual, nombreEscena) {
    if (cuadroVisual.classList.contains("deshabilitado")) {
        return; // Si ya se clickeó, no hace nada
    }

    if (inspeccionesRestantes > 0) {
        inspeccionesRestantes--;
        document.getElementById("contador-zonas").textContent = inspeccionesRestantes;
        
        // Sacamos la pista correspondiente del caso secreto
        const pistaSecreta = casoSecreto.inspecciones[index];
        
        // Mostramos el nombre de la escena universal como título principal
        document.getElementById("titulo-zona-inspeccionada").textContent = `Inspeccionando: ${nombreEscena}`;
        
        // Mostramos el subtítulo de tu pista original y el texto de deducción
        document.getElementById("texto-zona-inspeccionada").innerHTML = `<strong>Pista encontrada (${pistaSecreta.titulo}):</strong><br>${pistaSecreta.texto}`;
        
        document.getElementById("resultado-inspeccion").classList.remove("oculto");

        // Deshabilitar el cuadro revisado
        cuadroVisual.classList.add("deshabilitado");

        if (inspeccionesRestantes === 0) {
            alert("Has agotado tus 3 inspecciones. Es momento de ir a la Acusación Final.");
            document.querySelectorAll(".cuadro-zona").forEach(c => c.classList.add("deshabilitado"));
        }
    } else {
        alert("Ya no te quedan inspecciones.");
    }
}