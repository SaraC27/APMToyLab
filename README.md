# Equipo: APM - ToyLab

- **Página web:** [APM ToyLab](https://apmtoylab.fcruzv.com/) FALTA: MODIFICAR FOTOS
- **Repositorio GitHub:** [GitHub - APMToyLab](https://github.com/SaraC27/APMToyLab)
- **Video presentación proyecto:** [Enlace Youtube]() (*no disponible aún*)

## Integrantes del equipo

- **Sara Valentina Cardona Mejía**
- **Juan Andrés Barrera Rodríguez**
- **Manuel Felipe Carranza Montenegro**
- **Felipe Cruz Vásquez**

# Tabla de Contenido

1. [Módulos](#módulos) 
   - [Módulo 1: Gestión de Producción y Automatización](#módulo-1-gestión-de-producción-y-automatización)  
     - [Pre-Automatización](#pre-automatización) MODIFICAR: J/S
       - [Indicadores](#indicadores)
       - [Tecnomatix](#tecnomatix)
       - [VSM](#vsm-pre)
     - [Post-Automatización](#post-automatización) MODIFICAR: J/S
       - [Indicadores](#indicadores-post)
       - [Tecnomatix](#tecnomatix-post)
       - [VSM](#vsm-post)
     - [Propuesta automatización](#propuesta-automatización) MODIFICAR: J/S
     - [Análisis de Mercado](#análisis-de-mercado) YA
     - [Sistema MES](#sistema-mes) YA

   - [Módulo 2: Industria 4.0 en la Automatización](#módulo-2-industria-40-en-la-automatización)  
     - [Pre-Automatización](#pre-automatización-40)  
       - [Diagramas P&ID](#diagramas-pid) FALTA: S
     - [Post-Automatización](#post-automatización-40)  
       - [Diagramas P&ID](#diagramas-pid-post) FALTA: S
       - [Diagrama Arquitectura / Tecnologías 4.0](#diagrama-arquitectura-post) FALTA: F
       
   - [Módulo 3: Planeación del Proyecto](#módulo-3-planeación-del-proyecto)  
     - [MES/ERP](#erp) FALTA: FELIPE
     - [EDT](#edt) YA
     - [Cronograma](#cronograma) YA
     - [Bitácoras](#bitácoras) FALTA: F

   - [Módulo 4: Evaluación Económica de Proyectos](#módulo-4-evaluación-económica-de-proyectos)  FALTA: F (REVISAR ENTRE TODOS)
     - [Economía del Proyecto](#economía-del-proyecto) 
       - [Presupuesto](#presupuesto)  
       - [Costos](#costos)  
       - [Flujo de Caja](#flujo-de-caja)  
     - [Análisis rentabilidad](#análisis-rentabilidad)   
       - [VPN](#vpn)  
       - [TIR](#tir)  
       - [Payback](#payback)  
     - [Oferta comercial](#oferta-comercial)

   - [Módulo 5: Celda de Manufactura Robotizada](#módulo-5-celda-de-manufactura-robotizada) MODIFICAR: M  
     - [Justificación y valor agregado](#justificación-y-valor-agregado) 
     - [Diseño](#diseño)  
       - [Relación con el proceso de manufactura](#relación-con-el-proceso-de-manufactura)
       - [Funcionalidad del robot](#funcionalidad-del-robot) 
       - [Interacción con operarios](#interacción-con-operarios) 
       - [Análisis y gestión de riesgos](#análisis-y-gestión-de-riesgos) 
       - [Seguridad](#seguridad) 
     - [RobotStudio](#robotstudio)  
       - [Modelado](#modelado) 
       - [Programación](#programación)
       - [Simulación](#simulación)  

   - [Módulo 6: Digital Factory](#módulo-6-digital-factory) MODIFICAR: J 
     - [Siemens NX](#siemens-nx)  
       - [Entorno y modelamiento](#entorno-y-modelamiento)
       - [Actuadores virtuales](#actuadores-virtuales)
       - [Sensores virtuales](#sensores-virtuales)
       - [Simulación](#simulación-digital-factory)  

   - [Módulo 7: Controladores industriales (PLC)](#módulo-7-controladores-industriales-plc) FALTA: F
     - [Selección de controladores](#selección-de-controladores)  
     - [Desglose de la lógica](#desglose-de-la-lógica)
       - [Etapas](#etapas)
       - [Transiciones](#transiciones)
       - [Modos](#modos)
     - [Programación](#programación-plc)  
       - [Grafcet](#grafcet)  
       - [Ladder](#ladder)  
     - [Studio 5000](#studio-5000)  
       - [Programación e integración](#programación-e-integración)  
       - [Simulación](#simulación-plc)  

   - [Módulo 8: SCADA](#módulo-8-scada) FALTA: S 
     - [HMI](#hmi)  
       - [Variables clave](#variables-clave)  
       - [Diseño](#diseño-hmi)  
       - [Desarrollo](#desarrollo)  
       - [Validación](#validación)  
       - [Elementos de alto desempeño](#elementos-de-alto-desempeño)  
     - [Ignition](#ignition)  
       - [Integración control](#integración-control)  
       - [Integración supervisión](#integración-supervisión)  

2. [Resultados](#resultados) FALTA: TODOS  
   - [Resultados de aprendizaje](#resultados-de-aprendizaje)  
     - [Grupal](#grupal)  
     - [Individual](#individual)  
   - [Resultados de ingeniería](#resultados-de-ingeniería)  
     - [Módulo 1](#resultados-módulo-1)  
     - [Módulo 2](#resultados-módulo-2)  
     - [Módulo 3](#resultados-módulo-3)  
     - [Módulo 4](#resultados-módulo-4)  
     - [Módulo 5](#resultados-módulo-5)  
     - [Módulo 6](#resultados-módulo-6)  
     - [Módulo 7](#resultados-módulo-7)  
     - [Módulo 8](#resultados-módulo-8)  

# Módulos

## Módulo 1: Gestión de Producción y Automatización


Una fábrica de juguetes de plástico desempeña un papel crucial en la industria manufacturera y en la sociedad en general. Los juguetes no solo son herramientas esenciales para el entretenimiento infantil, sino también para el desarrollo cognitivo, emocional y social de los niños. Estos productos fomentan la creatividad, la imaginación y las habilidades motoras. 

Por esto mismo es fundamental que la planta cumpla con las demandas de producción establecidas para garantizar un suministro constante que satisfaga las necesidades del mercado. Asimismo, mantener las tecnologías actualizadas permite optimizar los procesos, reducir costos operativos y mejorar la eficiencia general. Esto no solo contribuye a la sostenibilidad al minimizar el impacto ambiental, sino que también refuerza la competitividad de la planta, asegurando su relevancia y capacidad para adaptarse a las exigencias de un mercado en constante evolución.

### Planta pre-automatización

Antes de implementar un proceso de automatización, es importante comprender las características fundamentales de la planta en su estado inicial. A continuación, se presentarán las características más relevantes de la planta, esenciales para identificar áreas de mejora y garantizar una transición eficiente hacia un modelo más avanzado.

La planta comprende un espacio total de **40x45 m** y tiene únicamente un nivel. Además de esto, cuenta con las siguientes etapas de manufactura que garantizan la producción de los juguetes de calidad que caracterizan a la empresa.

#### Etapas del proceso de manufactura

- Mezclado de plástico con pigmentos y aditivos según el color deseado (rojo y blanco).
- Dosificación de plástico en pequeñas cantidades, según la capacidad de las inyectoras de plástico.
- Inyección para formar las diferentes piezas, separadas en las siguientes categorías:
  - Detalles
  - Partes móviles
  - Cuerpos
- Uso de herramientas como escalpelo y soplete para retirar las rebabas de las piezas moldeadas.
- Ensamble parcial de cuerpos y detalles específicos de cada juguete.
- Ensamble parcial de piezas móviles, como ejes con ruedas o hélices.
- Ensamble final del producto.
- Empaque del juguete terminado en papel burbuja y cajas individuales.
- Paletizado de cajas con juguetes para transporte y distribución.

Los procesos de transporte entre las estaciones pueden variar y pueden ser tanto manuales como automáticos. Se darán más detalles en la sección donde se presenta el modelo de la planta.

### Value Stream Mapping (VSM)

Con el objetivo de identificar y visualizar de manera integral el flujo de materiales e información a lo largo del proceso de producción, se realiza un **VSM** de la planta mencionada anteriormente. Esta herramienta permite detectar ineficiencias, cuellos de botella y actividades que no generan valor, lo que resulta clave para diseñar estrategias de automatización en las estaciones. Así mismo, el VSM ayudará a identificar los distintos indicadores de producción que tiene actualmente la planta.

### Indicadores

Existen distintos indicadores en una planta de manufactura que permiten medir y evaluar el desempeño de los procesos operativos, productivos y estratégicos. A partir del análisis de los indicadores iniciales, se podrán identificar áreas de oportunidad y sugerir cambios específicos en la planta. Para este caso especifico se tendran en cuenta los siguientes indicadores.

- **Takt Time (T)**
- **Tiempo de ciclo (Tc)**
- **Tasa de producción (Rp)**
- **Capacidad de producción (Pc)**
- **Tiempo total de manufactura (MLT)**
- **Disponibilidad (A)**
- **Eficiencia (PE)**
- **Calidad (Q)**
- **Overall Equipment Effectiveness (OEE)**
- **Utilización (U)**


### Pre-Automatización
#### Indicadores


Consideraciones para el cálculo de indicadores  

- Se toma como referencia de producción la cantidad de juguetes vendidos en el año 2023 (30,794 juguetes en total).  
- Se supone que la producción anual se realiza de manera uniforme todas las semanas, es decir, que cada semana se produce la misma cantidad de juguetes (714 juguetes).  
- Se asume que la planta funciona durante 45 horas a la semana.  
- La distribución en la producción de juguetes es la siguiente:  
  - **Carros:** 60%  
  - **Aviones:** 20%  
  - **Submarinos:** 20%  
- Los desplazamientos realizados por operadores se suponen con una velocidad de **1.5 m/s**.  
- Los desplazamientos realizados por bandas transportadoras se suponen con una velocidad de **2 m/s**.  
- Se evalúa la producción semanal de la planta.  
- Se supone una calidad del **90%**, es decir, que el **10%** de los juguetes producidos tienen alguna imperfección.  
  
| **KPI**                               | **Descripción**                                                                 | **Valor**                             |
|----------------------------------------|---------------------------------------------------------------------------------|---------------------------------------|
| **Takt Time (T)**                      | Cadencia con la que se debe fabricar el producto para satisfacer la demanda     | 3.78 min/juguete                      |
| **Tiempo de ciclo (Tc)**               | Tiempo de proceso                                              | 3,16 min |
| **Tasa de producción (Rp)**            | Número de partes producidas por hora                                           | 18 juguetes/hora                     |
| **Capacidad de producción (Pc)**       | Máxima tasa de salida que la fábrica puede alcanzar                            | 838 juguetes/semana                   |
| **Tiempo total de manufactura (MLT)**  | Tiempo desde la orden de producción hasta la finalización del lote (143 juguetes)             | 7,67 horas                          |
| **Disponibilidad (A)**                 | Disponibilidad de las máquinas                                                 | 80 %                                 |
| **Eficiencia**                         | Eficiencia de desempeño                                                         | 70 %                                 |
| **Calidad**                            | Porcentaje de producto defectuoso                                              | 90 %                                 |
| **Overall Equipment Effectiveness (OEE)** | Indicador general de desempeño                                            | 50 %                                 |
| **Utilización (U)**                    | Porcentaje de tiempo en que la fábrica está operativa                          | 85,26 %   |

Ademas de esto, se uso el software Tecnomatix para validar la exactidud de los indicadores calculados. Especificamente de la eficiencia y del OEE

| Métrica       | Calculado | Simulación |
|--------------|-----------|------------|
| **Eficiencia** | 67%       | 70%        |
| **OEE**       | 48%       | 50%        |

A partir de lo anterior se observa que los valores calculados no difieren mucho de los valores obtenidos en simulacion, por esto mismo se considera que los indicadores calculados tienen valores que se acercan a los de la simulacion y se consideran como datos validos para tomar de referencia.

#### Tecnomatix

El diseño inicial de la planta pre-automatizada se llevó a cabo en el software de fabricación digital Tecnomatix Plant Simulation de Siemens (como se evidencia en la imagen a continuación), debido a que este software permitió la simulación de las diferentes etapas del proceso de manufactura incluyendo, asimismo, los tiempos de proceso de cada una de las máquinas. Esto último facilitó observar información relevante para calcular el OEE.

![Captura de pantalla 2025-03-03 225601](https://github.com/user-attachments/assets/15fcb0af-0a01-43f5-8df3-99f624dd166d)



#### VSM Pre
La informacion detallada del diagrama VSM de la planta antes de la automatización se puede encontrar en el siguiente [enlace](Files/VSM_Pre.pdf).

### Post-Automatización
#### Indicadores


Luego de implementar la propuesta de automatizacion se espera obtener los siguientes KPI. Para obtener informacion mas detallada sobre el calculo de los mismos, remitirse al siguiente [archivo](Files/Indicadores_Post.xlsx).
Consideraciones para el cálculo de indicadores  

- Se toma realiza una prediccion de la demanda de juguetes de los proximos años, ya que el proyecto esta previsto para 5 años se usan las predicciones de demana del año 2029 para determinar la produccion que debe cumplir la planta automatizada (55,327 juguetes en total).  
- Se supone que la producción anual se realiza de manera uniforme todas las semanas, es decir, que cada semana se produce la misma cantidad de juguetes (1154 juguetes).  
- Se asume que la planta funciona durante 45 horas a la semana.  
- La distribución en la producción de juguetes es la siguiente:  
  - **Carros:** 60%  
  - **Aviones:** 20%  
  - **Submarinos:** 20%  
- Los desplazamientos realizados por operadores se suponen con una velocidad de **1.5 m/s**.  
- Los desplazamientos realizados por bandas transportadoras se suponen con una velocidad de **2 m/s**.  
- Se evalúa la producción semanal de la planta.  
- Se supone una calidad del **90%**, es decir, que el **10%** de los juguetes producidos tienen alguna imperfección.
  
| **KPI**                               | **Descripción**                                                                 | **Valor**                             |
|----------------------------------------|---------------------------------------------------------------------------------|---------------------------------------|
| **Takt Time (T)**                      | Cadencia con la que se debe fabricar el producto para satisfacer la demanda     | 2,34 min/juguete                      |
| **Tiempo de ciclo (Tc)**               | Tiempo de proceso                                              | 2,28 min |
| **Tasa de producción (Rp)**            | Número de partes producidas por hora                                           | 25 juguetes/hora                     |
| **Capacidad de producción (Pc)**       | Máxima tasa de salida que la fábrica puede alcanzar                            | 1157 juguetes/semana                   |
| **Tiempo total de manufactura (MLT)**  | Tiempo desde la orden de producción hasta la finalización del lote (231 juguetes)             | 8,98 horas                          |
| **Disponibilidad (A)**                 | Disponibilidad de las máquinas                                                 | 88 %                                 |
| **Eficiencia**                         | Eficiencia de desempeño                                                         | 71 %                                 |
| **Calidad**                            | Porcentaje de producto defectuoso                                              | 90 %                                 |
| **Overall Equipment Effectiveness (OEE)** | Indicador general de desempeño                                            | 57 %                                 |
| **Utilización (U)**                    | Porcentaje de tiempo en que la fábrica está operativa                          | 61,78 %   |

Además de esto, se usó el software Tecnomatix para validar la exactidud de los indicadores calculados. Específicamente de la eficiencia y del OEE, aquí se pudo observar que:

| Métrica       | Calculado | Simulación |
|--------------|-----------|------------|
| **Eficiencia** | 68%       | 72%        |
| **OEE**       | 54%       | 57%        |

A partir de lo anterior se observa que los valores calculados no difieren mucho de los valores obtenidos en simulación, por esto mismo se considera que los indicadores calculados tienen valores que se acercan a los de la simulación y se consideran como datos válidos para tomar de referencia.

#### Tecnomatix

Al igual que el diseño de la planta antes de la automatización, el modelado de la planta automatizada se desarrolló en Tecnomatix Plant Simulation, aprovechando las opciones que este software ofrece como, por ejemplo, robots de pick and place. Igualmente, se configuraron los tiempos correspondientes en las máquinas y se obtuvo información del proceso para el cálculo del OEE.


![Captura de pantalla 2025-03-03 234906](https://github.com/user-attachments/assets/44e11229-70a6-4d53-a4bb-b218d3826395)

Luego de implementar la simulación, se observaron algunos cambios significativos en ciertas estaciones. En particular, en la estación de empaquetado, se evidenció que el tiempo de espera disminuyó en un 20% en la planta automatizada, lo cual indica que la implementación de la celda robotizada cumple su función.


#### VSM Post

Con la implementación de la propuesta de automatización se espera obtener el siguiente [VSM](Files/VSM_Post.pdf).


### Propuesta automatización

Se propone implementar un plan de automatización en la planta, enfocado en optimizar tres zonas clave del proceso de producción. A continuación, se detalla la propuesta para cada una de estas áreas:

#### Transporte de piezas desde las inyectoras hasta las estaciones de desbarbado:

Actualmente, las piezas que salen de las inyectoras son transportadas a través de un sistema de bandas transportadoras hasta un almacén intermedio. Desde allí, un operario las recoge manualmente y las lleva a sus respectivas estaciones de desbarbado. Este proceso toma un total de 28 segundos, distribuidos de la siguiente manera: 10 segundos en el sistema de bandas transportadoras y 18 segundos en el traslado manual realizado por el operario.

Para optimizar este flujo, se propone complementar el sistema existente de bandas transportadoras mediante la instalación de un nuevo conjunto de bandas. Este nuevo sistema permitirá que las piezas sean transportadas directamente desde las inyectoras hasta sus estaciones correspondientes de desbarbado, eliminando la necesidad del almacenamiento intermedio y el transporte manual.

Con esta mejora, el tiempo total de transporte se reduciría a 15 segundos: 10 segundos en el sistema de bandas original y 5 segundos en el nuevo sistema. Además, esta automatización liberará al operario, quien podrá ser reubicado en otra estación donde sea más necesario, optimizando el uso de los recursos humanos.

#### Corte de la ejes de acero inoxidable:

Actualmente, los ejes de acero inoxidable que salen del proceso de corte láser son sometidos a un pulido manual. Este proceso requiere que un operario pula cada eje individualmente utilizando una esmeriladora de banco, con un tiempo promedio de 10 segundos por eje.

Para optimizar este procedimiento, se propone implementar una máquina de acabado por vibración que permita procesar múltiples ejes de manera simultánea, eliminando la necesidad de realizar el pulido manual uno a uno.

Con esta mejora, el tiempo de pulido por eje se reduciría drásticamente a 3,75 segundos, lo que representa una optimización significativa del proceso. Además, el operario sería liberado de esta tarea repetitiva, pasando a desempeñar labores de supervisión de la máquina de de acabado por vibración, lo que incrementa la eficiencia general del área y mejora la ergonomía del trabajo.

#### Empacado y paletizado:

Actualmente, el proceso de empacado y paletizado de los juguetes se realiza de manera manual por operarios. En la etapa de empacado, que incluye envolver cada juguete en plástico burbuja y colocarlo dentro de una caja de cartón, el tiempo requerido por juguete es de 60 segundos. Por otro lado, el proceso de paletizado, también manual, toma 15 segundos adicionales por juguete.

Para optimizar este flujo, se propone la implementación de una celda robotizada que realice ambas tareas de manera automática, eliminando la necesidad de que los operarios las ejecuten manualmente uno por uno.

Con esta mejora, el tiempo necesario para el empacado se reduciría a 10 segundos por juguete, mientras que el tiempo de paletizado disminuiría a 5 segundos. Esto no solo incrementaría la eficiencia y productividad del proceso, sino que también liberaría a los operarios de estas tareas repetitivas, permitiéndoles asumir funciones de supervisión de la celda robotizada, mejorando así el aprovechamiento de los recursos humanos.


#### Comparación entre la planta PRE y POST Automatización:

<div align="center">
   <img style="width: 30vw;" alt="Planta PRE" src="https://github.com/user-attachments/assets/bfdd4198-3791-4d6b-a145-dd83f91805b9"/>
   <img style="width: 30vw;" alt="Planta PRE" src="https://github.com/user-attachments/assets/6b6fcf66-b143-4b4a-ac43-0d86bbf7a2f0"/>
</div>


### Análisis de Mercado
Para saber cuántos juguetes deben producirse (gestión de la producción), se realizó el siguiente paso a paso para obtener un estimado de la demanda de juguetes en Colombia.

1. Se descargaron datos de los últimos `5` años de la `DIAN`. [Link DIAN](https://www.dian.gov.co/dian/cifras/Paginas/TributosDIAN.aspx)
2. Se revisó la información para la actividad económica: `Fabricación de juegos, juguetes y rompecabezas`.
3. En base al `número de responsables`, `total de ingresos brutos` y `total anticipos de IVA por bimestre`, se obtuvo la sigueinte gráfica, suponiendo que $\frac{1}{3}$ del total de la actividad económica corresponde a juguetes:

<img width="678" alt="Mercado 1" src="https://github.com/user-attachments/assets/d618e312-2cf6-490b-95a0-92f3149c1261" />

*Eje vertical en millones de pesos colombianos*

4. Estimamos el promedio de acaparación de mercado para una empresa/fábrica de juguetes en Colombia: $Acaparación=\frac{1}{número\ de\ competidores}\approx0.7%$.
5. Supusimos una fábrica promedio, con lo cual se obtiene la siguiente gráfica para los ingresos de la misma:

<img width="453" alt="Screenshot 2025-01-22 at 1 53 20 AM" src="https://github.com/user-attachments/assets/3a3540b5-a7aa-4278-b2eb-0d0be365f8f3" />

*Eje vertical en millones de pesos colombianos*

6. Supusimos un precio de venta de los juguetes de $1.5$ veces su costo.
7. Modelamos cuántos juguetes de cada tipo hay que fabricar y vender para llegar a los ingresos estimados. Para esto, se tiene $total\ juguetes\ tipo\ i = precio\ de\ un\ juguete\ tipo\ i* \frac{ingresos\ esperados\ totales}{porcentaje\ de\ ingresos\ que\ suple\ juguete\ tipo\ i}$.
8. Calculamos cuántos juguetes de cada tipo se deben producir. Se ajustó el `porcentaje de ingresos que suple juguete tipo i` para que la cantidad de juguetes a producir de cada tipo fuera similar y se obtuvo la siguiente gráfica de producción:

<img width="454" alt="Screenshot 2025-01-22 at 2 02 37 AM" src="https://github.com/user-attachments/assets/866e68f2-4536-4238-853f-ef832aae265c" />

*La gráfica tiene picos en las fechas donde se celebra el día del niño y Navidad. Lo cual sirve de validación para el estimado realizado.*

9. Se ajustó la gráfica para que se tuviera producción mensual en vez de bimestral (suponiendo que en los dos meses de un bimestre se produce la misma cantidad de juguetes), y se obtuvo la gráfica:

<img width="451" alt="Screenshot 2025-01-22 at 2 05 07 AM" src="https://github.com/user-attachments/assets/e8f2b574-9d67-45cf-bf03-19b716aa879f" />

10. Para estimar la producción esperada gracias a la automatización de la planta. Supusimos que se quiere acaparar el `2.5%` del mercaado en vez del `0.7%` y que, además, se logra cumplir con el crecimiento de la industria (ya que, mes a mes, se ve una tendencia creciente durante los últimos 5 años).
11. Se realizó una regresión lineal para extrapolar los datos hasta el año `2029` (5 años hacia el futuro), y se obtuvo la siguiente gráfica:

<img width="829" alt="Screenshot 2025-01-22 at 2 09 09 AM" src="https://github.com/user-attachments/assets/01a0f453-56aa-4545-bb6d-86e1b51168a0" />

12. Finalmente, la gráfica de demanda de juguetes estimada para el proyecto corresponde con:
   - Los datos iniciales estimados para una empresa promedio (acaparación del `0.7%`) en Colombia (antes de automatizar) durante los primeros 5 años.
   - Los datos extrapolados para una empresa que acapara el `2.5%` del mercado en Colombia (después de automatizar) durante los próximos 5 años.

![jriuks3j](https://github.com/user-attachments/assets/2edbc954-bf87-42d0-88a0-b72ed7f55f59)

El archivo [Analisis_Mercado.xlsx](Files/Analisis_Mercado.xlsx) se puede usar para generar las gráficas, cambiar estimados y suposiciones.

### Sistema MES

El sistema MES propuesto consta de una aplicación Web conectada a la arquitectura que se presenta más adelante en la sección [Diagrama Arquitectura / Tecnologías 4.0](#diagrama-arquitectura-post). El sistema MES cuenta con acceso a la base de datos que conecta los diferentes módulos/sistemas donde se registran valores históricos relacionados con la producción, operación y supervisión de la planta. **Los datos presentados en el sistema MES se actualizan cada minuto.**

#### Módulo de indicadores
El sistema MES cuenta con un módulo para el cálculo de indicadores.

Indicadores:
- Ocupación
- Eficiencia
- Disponibilidad
- Calidad
- OEE

*Nota: Más detalle sobre los indicadores en la sección [Gestión de producción y automatización](#diagrama-arquitectura-post)*.

Funciones:
- Visualizar los indicadores calculados con los datos.

<img width="840" alt="Screenshot 2025-03-03 at 9 20 19 PM" src="https://github.com/user-attachments/assets/80a7a2b9-bca2-4d7b-9964-e186a443c38f" />

*Nota: Los datos presentados en la imagen no son reales y se colocaron con fines netamente ilustrativos.*

#### Módulo de gestión de producción
El sistema MES cuenta con un módulo para la supervisión y control de la producción.

Funciones:
- Definir objetivo de producción para cada tipo de juguete.
- Visualizar cuántos juguetes de cada tipo se han producido.
- Visualizar serie de tiempo de la producción real y la producción objetivo (permite filtrar por tipo de juguete).

<img width="1295" alt="Screenshot 2025-03-03 at 9 21 00 PM" src="https://github.com/user-attachments/assets/7ff9f370-b0b6-4357-84f1-b7cedd15fd7c" />

*Nota: Los datos presentados en la imagen no son reales y se colocaron con fines netamente ilustrativos.*

#### Módulo de supervisión
El sistema MES cuenta con un módulo para la supervisión del estado de las secciones más importantes de la planta.

Secciones importantes de la planta:
- **Inyectora A:** Cuenta con una inyectora, una banda y una compuerta.
- **Inyectora B:** Cuenta con una inyectora, una banda y una compuerta.
- **Inyectora C:** Cuenta con una inyectora, una banda y una compuerta.
- **Estación A:** Cuenta con una compuerta, una banda y una zona de almacenamiento.
- **Estación B:** Cuenta con una compuerta, una banda y una zona de almacenamiento.
- **Estación C:** Cuenta con una compuerta, una banda y una zona de almacenamiento.
- **Celda robotizada:** Cuenta con 3 robots, una mesa de trabajo y varias bandas.
- **Banda Principal:** Es la banda principal de la planta por la que toda pieza fabricada por inyección debe pasar.

Funciones:
- Visualizar el estado actual de cada sección importante de la planta.
- Visualizar el porcentaje de tiempo que cada sección ha estado en cada estado (a partir del histórico).

Estados posibles para cada sección:
- **Offline:** No hay conexión de la sección con el sistema, no se recibe información.
- **Stop:** La sección se encuentra detenida, no realiza sus tareas.
- **Funcionando:** La sección se encuentra funcionando correctamente, realiza sus tareas de producción.
- **Mantenimiento:** La sección se encuentra en mantenimiento.
- **Falla:** La sección presenta una falla que requiere atención.
- **Setup:** La sección se encuentra en proceso de acondicionamiento para producir un juguete de un tipo específico.

<img width="1260" alt="Screenshot 2025-03-03 at 9 25 09 PM" src="https://github.com/user-attachments/assets/7c7e103a-4fd0-4825-9913-db262ed1f296" />

*Nota: Los datos presentados en la imagen no son reales y se colocaron con fines netamente ilustrativos.*

## Módulo 2: Industria 4.0 en la Automatización
### Pre-Automatización


#### Diagrama P&ID

El diagrama PI&D de la planta pre-automatizada, que se observa en la siguiente imagen, se desarrolló haciendo uso del programa drawio. Cabe resaltar que en esta planta no se cuenta con sensores y la mayoría se procesos se ejecutan de forma manual.
A continuación se especifican los modos de operación de cada estación.

| **Estación**             | **Modo de operación** |
| :---: | :---: |
| Mezcladoras              | Manual                |
| Dosificadoras            | Manual                |
| Inyectoras               | Automático            |
| Bandas transportadoras   | Automático            |
| Desbarbado               | Manual                |
| Ensambles                | Manual                |
| Empaquetado              | Manual                |
| Paletizado               | Manual                |

![P ID Planta Pre drawio](https://github.com/user-attachments/assets/c73dac85-7b08-4e81-aabc-8c2db0dc9a57)


### Post-Automatización

#### Diagrama P&ID

El diagrama P&ID de la planta automatizada también se graficó en drawio. Esta planta ya cuenta con sensores y actuadores, como se evidencia en la siguiente imagen, y aumentó la cantidad de procesos que se ejecutan de forma automática.
A continuación se especifican los modos de operación de cada estación y las convenciones.

| **Estación**             | **Modo de operación** |
| :---: | :---: |
| Mezcladoras              | Manual                |
| Dosificadoras            | Manual                |
| Inyectoras               | Automático            |
| Bandas transportadoras   | Automático            |
| Desbarbado               | Manual                |
| Ensambles                | Manual                |
| Empaquetado              | Automático            |
| Paletizado               | Automático            |

| **Símbolo**             | **Modo de operación** |
| :---: | :---: |
| Sensor "IQI"            | Sensor "Infrared Quantity Indicator" |
| Línea "-----"           | Señal eléctrica                      |

![P ID Planta Post](https://github.com/user-attachments/assets/96f85d47-00af-4e06-8527-ed091d1adb8d)


### Arquitectura y Tecnologías 4.0

La arquitectura implementada para el sistema se presenta a continuación:

<img width="1380" alt="Screenshot 2025-03-03 at 9 35 41 PM" src="https://github.com/user-attachments/assets/c496d881-b20a-46e1-add8-411d45094d12" />

La arquitectura se despliega en la nube de `AWS`, donde se cuenta con una base de datos `NoSQL`, un sistema de autenticación y funciones que se pueden acceder/ejecutar a través de una `API`. La integración de las diferentes tecnologías se realiza mediante esta API, que funge como punto común para escribir y leer datos del sistema. Cada tecnología utilizada debe exponer su información de lectura y escritura, mediante un servidor `OPC` alojado en el software `Ignition`, para posteriormente enviarla/recibirla mediante nodos `HTTPS` dentro de `NodeRed`, los cuales se conectan con la API en AWS. Además, la página web del proyecto (realizada con `React`) cuenta con un módulo para la utilización de la `API` (Application Programming Interface).

#### Características de la arquitectura

**Tecnologías utilizadas**
- *Siemens NX:* Implementación del gemelo digital de la planta.
- *Studio 5000:* Implementación de la lógica en lenguaje de programación Ladder.
- *RSLinx:* Emulador de PLC para ejecución del código en Ladder.
- *RobotStudio:* Implementación de la celda robotizada que forma parte de la planta (parte del gemelo digital).
- *Google Chrome:* Navegador web para el alojamiento de los dashboard SCADA y el sistema MES.
- *AWS - Api Gateway:* Servicio en la nube de AWS para la implementación de APIs públicas, es como un servidor HTTPS.
- *AWS - Lambda:*  Servicio en la nube de AWS para la implementación de funciones de código, se encarga de utilizar otros servicios para autenticar usuarios, leer y escribir en la base de datos y procesar las peticiones de la API.
- *AWS - DynamoDB:* Servicio en la nube de AWS para almacenamiento de datos en una base de datos NoSQL, donde se guardará un registro para la comunicación en tiempo real entre los nodos del sistema, y se almacenará una copia de dicho registro cada 5 segundos para tener un histórico.
- *AWS - Cognito:* Servicio en la nube de AWS para el registro y posterior autenticación de usuarios, donde se generan tokens `JWT` para autenticar y proteger las comunicaciones con la API.
- *React:* Framework de desarrollo de aplicaciones web, donde se utiliza la API para colocar el sistema MES.
- *Ignition:* Software que permite la comunicación de datos entre diferentes tecnologías y otros servicios de conexión a internet como NodeRed. También, permite la creación de Dashboards SCADA para el sistema.
- *Node Red:* Software de configuración de red sobre el cual se monta una lógica de lectura y escritura de datos entre Ignition y la API del sistema.

**Protocolos de comunicación:**
- *OPC (Open Platform Comunications)*: Permite la comunicación de información entre diferentes tecnologías.
- *Ignition Node:* Para comunicar la información disponible en el servidor OPC con la API en la nube, se requiere de un nodo dentro de Node Red llamado `node-red-contrib-ignition-nodes`.
- *HTTP (Hyper Text Transfer Protocol):* Protocolo de comunicación web para el envío de información. Al ser un protocolo no seguro (no va encriptado), solamente se utiliza para envío de información con servidores locales.
- *HTTPS (Hyper Text Transfer Protocol Secured):* Protocolo de comunicación web para el envío de información encriptada por internet, utilizado para la comunicación bidireccional con la API. Mencionar que la API se propone con funcionalidad `WebSocket` para una comunicación fluida y en tiempo real. Sin embargo, por costos reales de la utilización de la nube AWS, montamos la simulación sobre una `API` tipo `request - response` para que fuera menos costoso (lo cual generó delay entre las comunicaciones, pero lo ideal sería utilizar `WebSocket` para reducir el delay).
- *API AWS:* Conjunto de funciones/protocolos/reglas que AWS dispone para la utilización de sus servicios dentro de la nube AWS.

#### Nodos de la arquitectura y relación con la pirámide de automatización

La pirámide de automatización es un estándar que consta de 5 niveles:
- **Planta:** Sensores, Actuadores.
- **Control:** PLC, PAC, DCS
- **SCADA:** Supervisión, Operación, Adquisición de datos, Alarmas, Históricos.
- **MES:** Gestión de la producción.
- **ERP:** Gestión empresarial.

<img width="329" alt="Screenshot 2025-03-03 at 10 48 05 PM" src="https://github.com/user-attachments/assets/c7798407-5330-4b57-8db2-cfc99255ea09" />

*Pirámide de Automatización. [Fuente](https://www.seika.com.mx/5-niveles-de-la-automatizacion-industrial/)*

Esta perspectiva se basa en una comunicación vertical entre los niveles. Para la implementación de la `Industria 4.0` se busca horizontalizar la pirámide al permitir la comunicación de todas las etapas hacia un sistema centralizado (`nube`) que gestione y almacene los datos de cada nivel y los comunique a cualquiera de los otros niveles sin tener que pasar estrictamente por cada nivel intermedio.

En nuestra arquitectura se presenta cada uno de los niveles mediante cada uno de los 6 nodos del diagrama de arquitectura:
- **Planta:** Es el nodo del `Gemelo Digital` (Siemens NX) y el nodo de la `Celda Robotizada` (RobotStudio). Mediante `Ignition + Node Red`, envía valores de los sensores digitales y recibe acciones para los actuadores digitales, a través del sistema AWS para una arquitectura de Industria 4.0.
- **Control:** Es el nodo del `PLC` (RSLinx + Studio 5000). Mediante `Ignition + Node Red`, recibe valores de los sensores digitales y acciones del sistema SCADA; y envía acciones para los actuadores digitales, a través del sistema AWS para una arquitectura de Industria 4.0.
- **SCADA:** Es el nodo del `SCADA` (Ignition + Navegador Web). Mediante `Ignition + Node Red`, recibe valores de los sensores digitales y estados generales del sistema; y envía acciones para los actuadores digitales y variables globales de proceso, a través del sistema AWS para una arquitectura de Industria 4.0.
- **MES + ERP:** Es el nodo del `Sistema MES` (React + Navegador Web). Mediante `HTTPS`, recibe valores de producción y estados generales del sistema; y envía variables globales de proceso, a través del sistema AWS para una arquitectura de Industria 4.0.
- **Nube:** Es el nodo de `AWS` (API + Base de datos + Autenticación). Mediante `HTTPS`, recibe y envía valores de todos los otros nodos/niveles del sistema, siendo la pieza central para lograr una arquitectura de Industria 4.0.

La arquitectura propuesta es `ESCALABLE`. Al tener el sistema centralizado en `AWS`, se pueden interconectar nuevos servicios como `Análisis de datos`, `Inteligencia artificial`, `etc` y nuevas funciones de la `API` como `Registro de ventas`, `Registro de inventario`, `etc`. Y utilizar toda la información disponible para tomar decisiones más rápidas que interfieren directamente con el proceso real de la planta.

## Módulo 3: Planeación del Proyecto
### EDT
El EDT detallado se encuentra disponible [acá](Files/EDT.xlsx).
```mermaid
graph TD
  A[1 Realizar análisis del proceso educativo] --> B[1.1 Analizar gestión de proyecto]
  A --> C[1.2 Analizar trabajo colaborativo]
  A --> D[1.3 Analizar proceso de aprendizaje]
  A --> E[1.4 Dar recomendaciones]
```
```mermaid
graph TD
  A[2 Gestionar la producción y automatización] --> B[2.1 Analizar la simulación de la planta]
  A --> C[2.2 Diseñar la planta antes de automatizar]
  A --> D[2.3 Automatizar la planta]
  A --> E[2.4 Desarrollar sistema MES]
```
```mermaid
graph TD
  A[3 Implementar la Industria 4.0 en la automatización del proyecto] --> B[3.1 Realizar diagramas de instrumentación]
  A --> C[3.2 Diseñar arquitectura de control y comunicaciones]
  A --> D[3.3 Digitalizar líneas de producción]
```
```mermaid
graph TD
  A[4 Planear el proyecto] --> B[4.1 Realizar EDT del proyecto]
  A --> C[4.2 Realizar cronograma del proyecto]
```
```mermaid
graph TD
  A[5 Evaluar el proyecto económicamente] --> B[5.1 Determinar viabilidad económica del proyecto]
  A --> C[5.2 Presentar oferta al cliente]
```
```mermaid
graph TD
  A[6 Celda de manufactura robotizada] --> B[6.1 Análisis robot]
  A --> C[6.2 Diseño celda robotizada]
  A --> D[6.3 Modelado robot]
  A --> E[6.4 Análisis riesgos]
```
```mermaid
graph TD
  A[7 Digital Factory] --> B[7.1 Construir prototipo inicial de la fábrica en Siemens NX]
  A --> C[7.2 Integrar gemelo digital con otros sistemas]
  A --> D[7.3 Probar funcionamiento del gemelo digital]
```
```mermaid
graph TD
  A[8 Controladores industriales PLC] --> B[8.1 Diseñar lógica de programación del sistema completo]
  A --> C[8.2 Programar la lógica del sistema]
```
```mermaid
graph TD
  A[9 Desarrollar el sistema SCADA del proyecto] --> B[9.1 Diseñar la interfaz HMI]
  A --> C[9.2 Incorporar la interfaz en el sistema]
  A --> D[9.3 Mejorar la interfaz]
```

### Cronograma
El cronograma detallado se encuentra disponible [acá](Files/Cronograma.xlsx).
```mermaid
gantt
title Cronograma del Proyecto
dateFormat YYYY-MM-DD
    1.1 Gestionar proyecto :Felipe, 2024-10-28, 35d
    1.2 Organizar equipo y responsabilidades :Felipe, 2024-10-28, 31d
    1.3 Analizar resultados del equipo :Felipe, 2025-02-24, 14d
    1.4 Analizar curso :Felipe, 2025-03-03, 7d
    2.1 Definir parámetros de la planta :Sara, 2024-11-11, 70d
    2.2 Diseñar planta pre-automatización :Juan, 2024-11-11, 70d
    2.3 Automatizar la planta :Juan, 2025-01-13, 42d
    2.4 Desarrollar sistema MES :Felipe, 2025-01-13, 42d
    3.1 Diagramar la instrumentación :Manuel, 2025-01-06, 49d
    3.2 Diseñar arquitectura de la planta :Felipe, 2025-01-13, 14d
    3.3 Contruir el gemelo digital :Juan, 2025-01-13, 28d
    4.1 Planear actividades :Manuel, 2024-11-25, 21d
    4.2 Organizar actividades y tiempos :Felipe, 2025-01-06, 7d
    5.1 Calcular viabilidad económica :Felipe, 2025-02-10, 14d
    5.2 Crear oferta comercial :Felipe, 2025-02-24, 7d
    6.1 Analizar robotización :Manuel, 2025-01-06, 35d
    6.2 Diseñar celda robotizada :Manuel, 2024-12-02, 49d
    6.3 Modelar celda robotizada :Manuel, 2025-01-20, 21d
    6.4 Mitigar riesgos de la celda :Manuel, 2025-02-10, 14d
    7.1 Construir gemelo digital en NX :Juan, 2025-01-13, 28d
    7.2 Integrar gemelo digital con otros sistemas :Juan, 2025-02-03, 21d
    7.3 Probar funcionamiento del gemelo digital :Sara, 2025-02-10, 14d
    8.1 Diseñar lógica de programación :Felipe, 2025-01-06, 14d
    8.2 Realizar el programa en Ladder :Felipe, 2025-01-20, 14d
    9.1 Diseñar interfaz HMI para sistema SCADA :Sara, 2025-01-20, 14d
    9.2 Incorporar interfaz en el sistema :Sara, 2025-01-27, 14d
    9.3 Mejorar interfaz :Sara, 2025-02-10, 14d
    Crear página web :Felipe, 2024-11-25, 7d
    Definir marca :Sara, 2024-10-28, 14d
    Documentar trabajo :Felipe, 2024-11-11, 119d
    Elegir juguetes :Sara, 2024-10-28, 35d
    Modelar juguetes :Manuel, 2024-11-11, 21d
```
### Bitácoras

## Módulo 4: Evaluación Económica de Proyectos
### Economía del Proyecto
#### Presupuesto
#### Costos
#### Flujo de Caja
### Análisis rentabilidad
#### VPN
#### TIR
#### Payback
### Oferta comercial

## Módulo 5: Celda de Manufactura Robotizada
### Productos de entrada y salida de la celda

<div align="center">
   <img style="width: 60vw;" alt="Screenshot 2025-03-03 at 10 03 14" src="https://github.com/user-attachments/assets/4abcc6bb-56da-4795-be61-05ede2e75f9d" />
</div>

### Proceso de creación de la celda
<p align="justify"> 
La creación de la celda robotizada sigue una hoja de ruta estructurada que guía cada etapa del proceso, desde la orientación inicial hasta la validación final. Este diagrama de flujo detalla los pasos necesarios para analizar, diseñar, implementar y evaluar la celda, asegurando que cumpla con los objetivos del proyecto de manera eficiente y segura.
</p>

```mermaid
flowchart TD
    A[Inicio: Definir etapa del proceso] --> B[Identificación y selección de la aplicación del robot]
    B --> C[Analizar estado de entrada y salida de materiales]
    C --> D[Definir duty cycle y throughput time requerido]
    
    D --> E[Selección de Componentes]
    E --> E1[Elegir robots, herramientas y séptimos ejes]
    E --> E2[Seleccionar máquinas de proceso y sistemas de transporte]
    E --> E3[Incluir componentes de control de calidad]

    E1 & E2 & E3 --> F[Definir layout de la celda]
    F --> G[Dimensionar espacio y establecer entradas/salidas]
    
    G --> H[Gestión de Riesgos]
    H --> H1[Identificar al menos 10 peligros según ISO 10218-1]
    H --> H2[Calcular nivel de riesgo: daño y frecuencia]
    H --> H3[Definir medidas de mitigación y componentes de seguridad]
    
    H1 & H2 & H3 --> I[Evaluar cumplimiento de normas de seguridad]
    I --> J{¿Cumple requisitos mínimos?}
    J -- Sí --> K[Validación del diseño]
    J -- No --> L[Ajustar diseño y mitigar riesgos]

    K & L --> M[Simulación de la celda en RobotStudio]
    M --> N[Obtener indicadores y probar programación]
    N --> O[Generar video de simulación y documentación]
    O --> P[Entrega final en GitHub y página del proyecto]

    P --> Q[Fin]
```


### Justificación y valor agregado
<p align="justify"> La implementación de una celda robotizada para los procesos de empacado y paletizado se fundamenta en la necesidad de optimizar la eficiencia operativa, mejorar la calidad del producto final y garantizar la seguridad en las operaciones industriales. Este proyecto responde a diversos factores clave:

- **Incremento de la Productividad:** 
<p align="justify"> La automatización de estos procesos permite aumentar significativamente la capacidad de producción al reducir los tiempos de ciclo, eliminar interrupciones innecesarias y minimizar el desperdicio de material. Las celdas robotizadas trabajan de manera continua, maximizando la utilización del tiempo y los recursos.

- **Mejora en la Precisión y Consistencia:** 
<p align="justify"> Las tareas repetitivas como el empacado y el paletizado son propensas a errores cuando son realizadas manualmente. Con el uso de robots, se asegura una mayor precisión en la manipulación de productos y consistencia en la calidad del trabajo realizado.

- **Reducción de Costos Operativos:** 
<p align="justify"> Aunque la inversión inicial para la adquisición y configuración de la celda robotizada puede ser significativa, se compensa a mediano y largo plazo mediante la reducción de costos asociados a errores humanos, horas extras y posibles mermas en el material.

- **Adaptabilidad y Flexibilidad:** 
<p align="justify"> Las celdas robotizadas pueden ser programadas para manejar una amplia gama de productos y formatos, adaptándose a las necesidades cambiantes del mercado y permitiendo una rápida reconfiguración para nuevos procesos o productos.

- **Mejoras en la Seguridad Laboral:** 
<p align="justify"> Al automatizar procesos que involucran levantamiento de cargas pesadas, movimientos repetitivos o condiciones potencialmente peligrosas, se reduce significativamente el riesgo de accidentes laborales y se mejora el bienestar de los empleados. Además, se evitan problemas de salud derivados de tareas repetitivas, como lesiones musculoesqueléticas, garantizando una mejor calidad de vida para los trabajadores.

- **Competitividad en el Mercado:** 
<p align="justify"> La implementación de tecnologías avanzadas como la robótica industrial permite a la empresa mantenerse competitiva, respondiendo rápidamente a las demandas del mercado y cumpliendo con los estándares internacionales de calidad y eficiencia.

- **Sostenibilidad y Reducción del Impacto Ambiental:** 
<p align="justify"> La automatización contribuye a una gestión más eficiente de los recursos, disminuyendo el desperdicio de materiales y optimizando el consumo energético, lo que se traduce en una menor huella ambiental.
</p>

### Diseño
#### Relación con el proceso de manufactura
#### Funcionalidad del robot

**Criterios de selección de los robots**
Los criterios utilizados se basaron en las necesidades específicas del proceso productivo, considerando el peso promedio de los juguetes y las dimensiones de los pallets.

***Capacidad de carga (Pay Load):***
- **Peso promedio del juguete:** 1,2 kg.
- Se seleccionaron robots con capacidad suficiente para manejar las cargas sin comprometer la velocidad ni precisión.

***Área de trabajo:***
- **Tamaño de los pallets:** 0,8 m x 1,2 m.
- Se seleccionaron robots con áreas de alcance adecuadas para cubrir el movimiento requerido en el proceso.

***Aplicación específica:***
- **Empaque:** Requiere alta velocidad y precisión para manejar objetos ligeros, ideal para el IRB 360.
- **Paletizado:** Requiere fuerza y un alcance mayor para manejar cajas y pallets completos, ideal para el IRB 1520.

**Características técnicas de los robots seleccionados**

***IRB 360 (Robot Delta):***

- **Carga útil máxima (Payload):** Hasta 3 kg.
- **Área de trabajo (Radio):** Hasta 1,6 m.
- **Repetibilidad:** ±0,1 mm.
- **Velocidad máxima:** Alta velocidad para aplicaciones de empaquetado rápido.
- **Aplicaciones:** Ideal para empaquetado, pick and place, y tareas de alta precisión.

***IRB 1520 (Robot Antropomorfico):***

- **Carga útil máxima (Payload):** Hasta 4 kg.
- **Área de trabajo (Alcance):** Hasta 1,8 m.
- **Repetibilidad:** ±0,1 mm.
- **Velocidad:** Optimizado para paletizado con ciclos rápidos y eficientes.
- **Aplicaciones:** Perfecto para manejar cajas y pallets en tareas de paletizado industrial.

***IRB 360 (Empacado):***
 - **Función principal:** Realiza tareas de empaquetado de juguetes en las líneas de producción, manipulando objetos individuales con alta velocidad y precisión.
 - **Justificación:** Diseñado para manejar cargas ligeras, como juguetes de 1,2 kg, con precisión y alta velocidad, ideal para procesos de empaque rápido.

<div align="center">
  <img style="width: 31vw;" alt="Screenshot 2025-03-03 at 11 21 55" src="https://github.com/user-attachments/assets/6d456f17-4298-4f9e-a7f4-0cbe64723898" />
  <img style="width: 40vw;" alt="Screenshot 2025-03-03 at 11 23 07" src="https://github.com/user-attachments/assets/1716d25d-d8a1-4441-8738-1c1f5c198ea2" />
</div>

***IRB 1520 (Paletizado):***
- **Función principal:** Encargado de paletizar cajas o productos terminados (juguetes ya empaquetados) en pallets de tamaño estándar de 0,8 m x 1,2 m.
- **Justificación:** Su capacidad de carga y área de trabajo lo convierten en la elección ideal para manipular pallets y organizar grandes volúmenes de productos.

<div align="center">
  <img style="width: 31vw;" alt="Screenshot 2025-03-03 at 11 19 04" src="https://github.com/user-attachments/assets/2d9e2d25-5b5f-4757-bcdf-012071535c8d" />
   <img style="width: 40vw;" alt="Screenshot 2025-03-03 at 11 20 30" src="https://github.com/user-attachments/assets/41a1cd6c-7cb4-4064-86ab-c67b9bb173a0" />
</div>

#### Interacción con operarios
<p align="justify"> La celda robotizada ha sido diseñada para trabajar de manera conjunta con el personal humano, maximizando la eficiencia del proceso y aprovechando las fortalezas tanto de la automatización como de las capacidades humanas. La interacción entre los robots y los operarios se desarrolla en las siguientes etapas:
</p>

**Preparación de Materiales**
- <p align="justify"> Los operarios se encargan de cortar el plástico burbuja al tamaño adecuado, asegurando que cada juguete cuente con la protección necesaria antes de ser empacado.
- <p align="justify"> Preparan y ensamblan las cajas, colocándolas listas para su llenado en la banda transportadora.

**Colocación y Disposición**
- <p align="justify"> El personal dispone las cajas y el plástico burbuja sobre las bandas transportadoras para que los robots IRB 360 puedan proceder con la tarea de empacado.

**Supervisión de Operaciones**
- <p align="justify"> Los operarios supervisan el funcionamiento de los robots, garantizando que las operaciones de empacado y paletizado se desarrollen sin interrupciones.
- <p align="justify"> Pueden intervenir en caso de que surjan problemas, como obstrucciones en las bandas o fallos menores en el sistema.

**Sellado de Cajas**
- <p align="justify"> Una vez que los robots han completado el empacado, el personal humano sella las cajas, asegurando que estén listas para su transporte y distribución.

**Soporte y Mantenimiento**
- <p align="justify"> Los operarios están capacitados para realizar tareas básicas de mantenimiento preventivo en la celda, como limpieza, ajustes simples y monitoreo de los indicadores de desempeño de los robots.

**Colaboración en Seguridad**
- <p align="justify"> El personal trabaja en conjunto con el sistema de seguridad de la celda, cumpliendo con los protocolos establecidos y verificando el correcto funcionamiento de las barreras de seguridad y sensores.

#### Análisis y gestión de riesgos

<p align="justify"> En el desarrollo de la celda robotizada, es fundamental identificar y gestionar los posibles riesgos asociados a cada etapa del proceso. La siguiente tabla detalla las tareas principales, sub-tareas y los riesgos potenciales relacionados con el funcionamiento, mantenimiento y manejo de productos en la celda. Este análisis permite implementar medidas preventivas y protocolos de seguridad que garanticen un entorno de trabajo seguro y eficiente tanto para los operarios como para los equipos involucrados.
</p>



| **Tarea**                   | **Subtarea**                  | **Riesgo**                                                                                     | **ID** |
|-----------------------------|-------------------------------|------------------------------------------------------------------------------------------------|--------|
| **Funcionamiento**          | NA                            | Ingreso de personal en el área de los Robots.                                                     | R1     |
|                             | NA                            | Operarios interrumpiendo el camino de los Robots.                                                  | R2     |
|                             | NA                            | Los juguetes pueden caer por sujeción incorrecta del Robot.                                                | R3     |
|                             | Supervisión del proceso       | Fatiga visual o distracción del personal encargado de la monitorización de los procesos.                              | R4     |
|                             | Reabastecimiento de materiales | Contacto con partes móviles, riesgo de atrapamiento.                                           | R5    |
| **Mantenimiento**           | Ajuste o cambio del gripper   | Caída de objetos, puntos de atrapamiento, resbalones/tropiezos, superficies filosas.           | R6     |
|                             | Ajuste de rutina de robot     | Entrada a espacio confinado: equipo en movimiento, golpe por objetos, atrapamiento, aplastamiento. | R7     |
|                             | Cambio de batería de robot    | Contacto con electricidad, puntos de atrapamiento, superficies filosas.                       | R8     |
|                             | Limpieza de celda             | Puntos de atrapamiento, resbalones/tropiezos, superficies filosas, exposición a productos químicos. | R9     |
|                             | Verificación de sensores      | Contacto con partes móviles, riesgo de atrapamiento.                                          | R10    |
|                             | Inspección de piezas críticas | Lesiones por herramientas mal usadas o deterioradas, exposición a piezas filosas o cortantes. | R11    |
| **Entrada y salida del producto** | NA                     | Operarios interrumpiendo el espacio de trabajo de los Robots.                                                 | R12     |
|                             | Revisión de entrada/salida    | Desalineación de cajas o juguetes, riesgo de golpes o tropiezos.                              | R13    |
|                             | Manipulación manual           | Levantamiento inadecuado de cargas, riesgo de lesiones musculoesqueléticas.                   | R14    |
|                             | Control de flujo              | Atascos en bandas transportadoras, atrapamiento por correas.                                   | R15    |


<p align="justify"> Como parte del diseño de la celda robotizada, se elaboró una matriz de riesgos siguiendo los lineamientos establecidos en la norma <strong>IEC 62061</strong>, que proporciona un marco para evaluar y gestionar los riesgos en sistemas de control eléctricos relacionados con la seguridad. Este análisis permitió comparar los niveles de riesgo antes y después de implementar medidas de mitigación.
</p>
<p align="justify"> La matriz de riesgos se construyó identificando peligros potenciales, evaluando su probabilidad de ocurrencia y las posibles consecuencias, tanto en el estado inicial como tras aplicar las medidas de seguridad. Este enfoque sistemático asegura una reducción efectiva de los riesgos, priorizando la seguridad de los operarios y la funcionalidad confiable del sistema.
</p>

| **ID** | **Severidad (S)** | **Frecuencia (F)** | **Probabilidad (W)** | **Probabilidad de evitar o limitar daño (P)** | **Clase (K)** | **Clasificación de riesgo** |
|--------|--------------------|---------------------|-----------------------|-----------------------------------------------|---------------|-----------------------------|
| R1     | 4                  | 4                   | 4                     | 5                                             | 13            | SIL 3                       |
| R2     | 3                  | 5                   | 3                     | 5                                             | 13            | SIL 2                       |
| R3     | 4                  | 2                   | 3                     | 5                                             | 10            | SIL 2                       |
| R4     | 2                  | 2                   | 4                     | 4                                             | 10            | SIL 1                       |
| R5     | 4                  | 2                   | 3                     | 5                                             | 9             | SIL 1                       |
| R6     | 3                  | 1                   | 3                     | 5                                             | 9             | SIL 1                       |
| R7     | 4                  | 3                   | 3                     | 5                                             | 11            | SIL 3                       |
| R8     | 3                  | 5                   | 3                     | 5                                             | 13            | SIL 2                       |
| R9     | 4                  | 2                   | 3                     | 5                                             | 10            | SIL 2                       |
| R10    | 4                  | 3                   | 3                     | 5                                             | 11            | SIL 3                       |
| R11    | 4                  | 2                   | 3                     | 5                                             | 10            | SIL 2                       |
| R12    | 3                  | 5                   | 3                     | 5                                             | 13            | SIL 2                       |
| R13    | 3                  | 2                   | 3                     | 4                                             | 9             | SIL 1                       |
| R14    | 3                  | 2                   | 3                     | 4                                             | 9             | SIL 1                       |
| R15    | 4                  | 3                   | 3                     | 5                                             | 11            | SIL 3                       |

#### Seguridad
<p align="justify"> Con el objetivo de garantizar un entorno de trabajo seguro y eficiente en la operación de la celda robotizada, se han diseñado e implementado una serie de acciones específicas para mitigar los riesgos identificados. Estas medidas no solo buscan prevenir incidentes, sino también promover la continuidad operativa, proteger a los operarios y optimizar el desempeño de los equipos. Las acciones planificadas incluyen:
</p>

| **ID** | **Actividades de mitigación**                                                                                                                                                  |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R1     | Instalación de cortinas láser, instalación de mallas de celda, programación de la celda con interrupciones en las rutinas, botones de parada de emergencia, uso de EPP.        |
| R2     | Señalización del espacio de trabajo de cada uno de los robots, uso de EPP.                                                             |
| R3     | Uso de EPP, verificación continua de las condiciones del gripper.                                                                                                             |
| R4     | Creación de protocolos de seguridad para cambios de gripper, apagar todas las fuentes de energía de la celda durante el procedimiento, uso de EPP.                            |
| R5     | Verificación de las rutinas en simulación, no permitir el ingreso al área de trabajo durante la prueba de las rutinas, uso del teach pendant con dead man switch, uso de EPP. |
| R6     | Apagar todas las fuentes de energía del robot, uso de protecciones dieléctricas, uso de EPP.                                                                                  |
| R7     | Creación de protocolos de seguridad para limpieza de la celda, apagar todas las fuentes de energía de la celda durante el procedimiento, uso de EPP.                          |
| R8     | eñalización del espacio de trabajo de cada uno de los robots, uso de EPP.                                                             |
| R9     | Identificar y señalizar los puntos de atrapamiento, uso de guantes resistentes a químicos, protocolos para limpieza y manejo de productos químicos.                            |
| R10    | Apagar equipos antes de la verificación de sensores, uso de sistemas de bloqueo y etiquetado (LOTO), uso de EPP.                                                              |
| R11    | Inspección regular de herramientas, protocolos para el manejo seguro de piezas filosas, uso de guantes de protección.                                                         |
| R12    | Delimitar áreas de trabajo de robots, sistemas de monitoreo para detectar presencia humana, señalización adecuada, uso de EPP.                                                |
| R13    | Asegurar alineación de cajas o juguetes en bandas, protocolos para evitar tropiezos, mantenimiento preventivo de equipos.                                                     |
| R14    | Capacitación en levantamiento de cargas, uso de herramientas de asistencia ergonómica, pausas activas para evitar lesiones musculoesqueléticas.                                |
| R15    | Mantenimiento preventivo para evitar atascos, instalación de sistemas de parada automática en bandas transportadoras, señalización de zonas de riesgo.                        |

<p align="justify"> Después de implementar las medidas de mitigación correspondientes, se elaboró una nueva matriz de riesgos actualizada. Esta matriz refleja la reducción en la probabilidad y/o severidad de los riesgos previamente identificados, demostrando la efectividad de las acciones correctivas aplicadas.
</p>

| **ID** | **Severidad (S)** | **Frecuencia (F)** | **Probabilidad (W)** | **Probabilidad evitar o limitar daño (P)** | **Clase (K)** | **Clasificación de riesgo** |
|--------|--------------------|---------------------|-----------------------|-------------------------------------------|---------------|-----------------------------|
| R1     | 4                  | 3                   | 2                     | 2                                         | 7             | SIL2                       |
| R2     | 3                  | 2                   | 2                     | 1                                         | 5             | OM                         |
| R3     | 4                  | 2                   | 3                     | 1                                         | 6             | SIL1                       |
| R4     | 2                  | 2                   | 3                     | 3                                         | 7             | N/A                        |
| R5     | 4                  | 2                   | 2                     | 2                                         | 7             | SIL1                       |
| R6     | 3                  | 1                   | 2                     | 2                                         | 5             | OM                         |
| R7     | 4                  | 3                   | 2                     | 2                                         | 7             | SIL2                       |
| R8     | 3                  | 2                   | 2                     | 1                                         | 5             | OM                         |
| R9     | 4                  | 2                   | 3                     | 2                                         | 7             | SIL2                       |
| R10    | 4                  | 3                   | 2                     | 2                                         | 7             | SIL2                       |
| R11    | 3                  | 2                   | 3                     | 1                                         | 6             | SIL2                       |
| R12    | 3                  | 2                   | 2                     | 1                                         | 5             | OM                         |
| R13    | 3                  | 2                   | 2                     | 1                                         | 5             | OM                         |
| R14    | 3                  | 2                   | 2                     | 1                                         | 5             | OM                         |
| R15    | 4                  | 3                   | 2                     | 2                                         | 7             | SIL2                       |


<p align="justify"> Por último, se lleva a cabo una comparación detallada de las clasificaciones de riesgo antes y después de implementar las medidas de mitigación. Los resultados evidencian una disminución significativa en los niveles de riesgo identificados, lo que refleja la efectividad de las acciones correctivas y preventivas adoptadas. Este análisis no solo demuestra la mejora en la seguridad operativa, sino que también valida el enfoque estratégico utilizado para minimizar peligros, garantizando un entorno más seguro y eficiente para los operarios y el equipo.
</p>

| **ID** | **Clasificación de riesgo antes** | **Clasificación de riesgo después** |
|--------|-----------------------------------|-------------------------------------|
| R1     | SIL 3                             | SIL 2                               |
| R2     | SIL 2                             | OM                                  |
| R3     | SIL 2                             | SIL 1                               |
| R4     | SIL 1                             | N/A                                 |
| R5     | SIL 2                             | SIL 1                               |
| R6     | SIL 1                             | OM                                  |
| R7     | SIL 3                             | SIL 2                               |
| R8     | SIL 2                             | OM                                  |
| R9     | SIL 3                             | SIL 2                               |
| R10    | SIL 3                             | SIL 2                               |
| R11    | SIL 2                             | SIL 1                               |
| R12    | SIL 2                             | OM                                  |
| R13    | SIL 1                             | OM                                  |
| R14    | SIL 1                             | OM                                  |
| R15    | SIL 3                             | SIL 2                               |

#### Elementos de Seguridad

**Matriz de Riesgos (Basada en GUIDELINE for Safeguarding Machinery and Equipment)**

| **Tarea**  | **Riesgo** | **Estimación del riesgo** | **Nivel** | **Método de reducción de riesgo** | **Equipo necesario** | **Imágen** | **Mitigación con Manuales, Entrenamiento y EPP** |
|------------|-----------|---------------------------|-----------|------------------------------------|----------------------|-----------|-----------------------------------------------|
| **Funcionamiento del robot (Pick and Place y Paletizado)** | El robot podría moverse de manera inesperada y golpear a un operario. | - Seriedad: alta  <br> - Frecuencia: media <br> - Difícil de evitar | D | Instalación de **barreras láser** que detengan el robot al detectar presencia en la zona de trabajo. | **Barreras láser de seguridad** | ![Barreras láser](https://github.com/user-attachments/assets/c7691094-e3b0-4952-83b6-7540948cac47) | Capacitación en operación segura del robot y protocolos de seguridad. |
| **Movimiento de objetos en el transportador** | Posible caída de productos por un mal posicionamiento del robot en Pick and Place. | - Seriedad: media  <br> - Frecuencia: alta <br> - Fácil de evitar | C | Revisión continua del sistema de sujeción del robot y ajuste periódico de la presión del gripper. | **Sensores de presión en el gripper.** | ![Sensores de presión](https://github.com/user-attachments/assets/d186d5e4-8cbf-427d-83fa-a96e98d52559) | Manual de calibración y ajuste del gripper, entrenamiento en mantenimiento preventivo. |
| **Señalización de estado de la celda** | Falta de advertencias visuales sobre el estado del proceso puede provocar accidentes. | - Seriedad: media  <br> - Frecuencia: alta <br> - Difícil de evitar | C | Uso de **Industrial Tower Light** para indicar estados de peligro, alerta y operación normal. | **Industrial Tower Light.** | ![Industrial Tower Light](https://github.com/user-attachments/assets/46addf13-8356-4544-9901-6a032ee41ca6) | Manual de interpretación de señales luminosas y capacitación en protocolos de emergencia. |
| **Interacción con operarios en la estación manual de sellado** | Un operario podría ingresar accidentalmente al área de trabajo del robot. | - Seriedad: alta  <br> - Frecuencia: baja <br> - Difícil de evitar | D | Instalación de **barreras físicas** y delimitación del área de trabajo del robot. | **Barreras físicas de protección.** | ![Barreras físicas](https://github.com/user-attachments/assets/045e0f21-d486-4dac-a92c-c46178428f04) | Entrenamiento en procedimientos de acceso restringido y uso de señalización de seguridad. |
| **Emergencias en la celda** | En caso de fallo del sistema, el operario podría no tener una forma rápida de detener el proceso. | - Seriedad: alta  <br> - Frecuencia: baja <br> - Fácil de evitar | C | Implementación de **botones de parada de emergencia** en puntos estratégicos. | **Botón de parada de emergencia.** | ![Botón de parada](https://github.com/user-attachments/assets/3248f172-3a02-4b7e-8977-bd40547d1989) | Capacitación en protocolos de emergencia y simulacros periódicos. |
| **Zona de trabajo del operario** | Riesgo de tropiezos o resbalones en áreas críticas. | - Seriedad: media  <br> - Frecuencia: media <br> - Fácil de evitar | C | Instalación de **Safety Mats** que detengan el robot si alguien pisa la zona de riesgo. | **Safety Mats (alfombras de seguridad).** | ![Safety Mats](https://github.com/user-attachments/assets/2edcb1ee-79e9-4ee2-b930-156989c32070) | Uso obligatorio de calzado antideslizante y protocolos de orden y limpieza en la zona de trabajo. |









**Explicación de la Matriz de Riesgos**
**Barreras láser:** Previenen el acceso no autorizado a la zona del robot.  
**Sensores en el gripper:** Aseguran una correcta sujeción de los productos en el Pick and Place.  
**Industrial Tower Light:** Proporciona alertas visuales sobre el estado del sistema.  
**Barreras físicas:** Evitan el ingreso involuntario a zonas de riesgo.  
**Botones de parada de emergencia:** Permiten detener la celda rápidamente en caso de problemas.  
**Safety Mats:** Detectan la presencia de un operario en zonas peligrosas y detienen el robot automáticamente.  

Este análisis garantiza un entorno de trabajo **seguro y eficiente**, protegiendo a los operarios mientras se mantiene un flujo óptimo en la celda robotizada.

### RobotStudio
#### Descripción del Layout

**1. Entrada de Cajas**
- Las cajas ingresan a la línea de producción a través de una banda transportadora.
- El flujo está marcado con flechas rojas indicando la dirección del movimiento.

**2. Entrada de Juguetes y Papel Panal**
- Los juguetes y el papel panal llegan desde líneas verticales a puntos de intersección con la banda principal.
- Estos materiales son manipulados por robots en los puntos señalados con líneas azules diagonales.

**3. Proceso de Empacado**
- Se observa la interacción de robots en la integración de juguetes y papel panal dentro de las cajas.
- La presencia de estos robots mejora la precisión y la velocidad del empacado.

**4. Estación Manual de Sellado**
- Después del empacado, las cajas se dirigen a una estación de sellado manual, identificada con color rosa.
- Aquí, los operarios sellan las cajas antes de continuar al proceso de almacenamiento y paletizado.

**5. Almacén de Producto en Proceso**
- Se encuentra identificado en color verde.
- Sirve como un área temporal antes de la siguiente fase del proceso.

**6. Proceso de Paletizado**
- Un robot, representado nuevamente con líneas diagonales azules, se encarga de organizar las cajas en pallets.
- La salida de los pallets está claramente definida con una flecha roja descendente.

**Características y Ventajas del Diseño**
**Flujo optimizado:** El diseño minimiza desplazamientos innecesarios y permite una transición eficiente entre las etapas.  
**Automatización con robots:** La manipulación de juguetes y papel panal por robots reduce errores y mejora la velocidad de empacado.  
**Interacción humana y robótica:** Se mantiene un equilibrio entre estaciones automatizadas y tareas manuales, como el sellado.  
**Claridad en las zonas de trabajo:** Las diferentes secciones están bien identificadas, lo que facilita la supervisión y el mantenimiento.  

Este diseño contribuye a la eficiencia de la celda de manufactura, asegurando un flujo de producción fluido desde la llegada de materiales hasta la salida de pallets listos para distribución.

<div align="center">
<img style="width: 50vw;" alt="Screenshot 2025-03-03 at 11 53 56" src="https://github.com/user-attachments/assets/ada72fa8-d240-4114-b2d6-ebe24815fd15" />
</div>

**Diagrama de Flujo**
```mermaid
flowchart TD
    A[Inicio] --> B[Entrada de Cajas en Transportador]
    B --> C[Entrada de Juguetes]
    B --> D[Entrada de Papel Panal]
    
    C & D --> E[Robot Pick & Place posiciona juguetes y papel en cajas]
    E --> F[Transporte de cajas al área de sellado]
    
    F --> G[Estación Manual de Sellado]
    G --> H[Inspección de calidad]
    
    H --> I{¿Caja correcta?}
    I -- No --> J[Desechar o Retrabajar]
    I -- Sí --> K[Almacén Temporal de Producto]
    
    K --> L[Transporte de cajas hacia Robot de Paletizado]
    L --> M[Robot de Paletizado organiza las cajas en un pallet]
    M --> N[Salida de Pallet a Logística]
    
    N --> O[Fin]
```

**1. Inicio del Proceso**
- Se introducen **cajas, juguetes y papel panal** en la celda a través de transportadores.

**2. Proceso de Empacado**
- Un **robot Pick & Place** posiciona juguetes y papel panal dentro de cada caja.
- Las cajas son transportadas automáticamente hacia la **estación de sellado**.

**3. Estación de Sellado e Inspección de Calidad**
- **Los operarios sellan las cajas manualmente**.
- Se realiza una **inspección de calidad** para verificar que el producto esté correctamente empaquetado.

**4. Rama de Decisión: ¿Caja correcta?**
- **Si la caja no cumple los estándares**, se **rechaza o se retrabaja** antes de continuar.
- **Si la caja está en buenas condiciones**, se **almacena temporalmente** antes del paletizado.

**5. Proceso de Paletizado**
- **El transportador lleva las cajas al robot de paletizado**.
- **El robot organiza las cajas en pallets** para su almacenamiento y distribución.

**6. Salida del Pallet a Logística**
- **El pallet es transportado fuera de la celda robotizada**, concluyendo el proceso.

**7. Fin del Proceso**
- **El ciclo finaliza cuando las cajas ya están listas para su distribución**.

#### Modelado

<div align="center">
<img style="width: 50vw;" alt="Screenshot 2025-03-03 at 12 39 02" src="https://github.com/user-attachments/assets/e40f5c5b-d9a5-4bef-93ca-af1d11747067" />
</div>

**Partes de la Celda Robotizada**

**1. Sección de Empacado**
- **Robot IRB 360 (Empacado):** Realiza Pick & Place de juguetes y papel panal en las cajas.
- **Banda de Alimentación de Cajas:** Transporta cajas vacías hacia la zona de empaquetado.
- **Banda de Alimentación de Juguetes:** Suministra los juguetes a los robots IRB 360.
- **Banda de Alimentación de Papel Panal:** Proporciona material de protección para el empaquetado.

**2. Estación Manual**
- **Estación de Sellado Manual:** Los operarios sellan las cajas antes del paletizado.
- **Almacén de Producto en Proceso:** Área de almacenamiento temporal antes del paletizado.

**3. Sección de Paletizado**
- **Robot IRB 1520 (Paletizado):** Organiza las cajas en los pallets.
- **Pallet:** Base de almacenamiento antes del transporte fuera de la celda.

**4. Seguridad y Control**
- **Barreras Físicas:** Delimitan el área de los robots para evitar acceso no autorizado.
- **Cortina Láser de Seguridad:** Detecta presencia y detiene el sistema si es necesario.
- **Parada de Emergencia:** Botón para detener el sistema en caso de fallos.
- **Alfombra de Seguridad:** Detiene el sistema si alguien pisa la zona de peligro.
- **Torre de Iluminación de Proceso:** Indica el estado operativo de la celda.
- **Panel de Control Eléctrico:** Gestiona los robots y transportadores.
- **Controlador del Robot y Teach Pendant:** Permite programar y ajustar los robots.

<div align="center">
<img width="1344" alt="Screenshot 2025-03-03 at 23 10 19" src="https://github.com/user-attachments/assets/6538fa80-3906-4798-aeaa-7ec6f7568430" />
</div>

#### Rutinas de Movimiento de los Robots

**Robot 1: Pick & Place de Juguetes**
Este robot toma el juguete desde la **banda de alimentación de juguetes** y lo coloca dentro de la **caja de cartón** proveniente de la **banda de alimentación de cajas**.  

Su movimiento es **cíclico** y sigue una trayectoria predefinida para garantizar precisión y velocidad en el proceso.

<div align="center">
<img width="429" alt="Screenshot 2025-03-04 at 00 05 12" src="https://github.com/user-attachments/assets/e6a34b8e-5260-4582-a8cb-c1c9004ae680" />
</div>

- [Rutina del IRB 360 (Pick & Place de Juguetes)](RobotStudio/Module1_IRB360_1.mod)

**Robot 2: Posicionamiento de Papel Panal**
Encargado de tomar el **papel panal** y colocarlo sobre el juguete ya alojado en la caja.  
Este paso es esencial para **proteger el producto** durante su distribución.  

Su rutina de movimiento también es **cíclica**, asegurando una colocación uniforme del material de protección.

<div align="center">
<img width="433" alt="Screenshot 2025-03-04 at 00 04 48" src="https://github.com/user-attachments/assets/8f85d388-c12a-4cf3-9699-e48f2de5e371" />
</div>

- [Rutina del IRB 360 (Colocación de Papel Panal)](RobotStudio/Module1_IRB360_2.mod)

**Robot 3: Paletizado de Cajas**
Este robot organiza las cajas provenientes de la **estación de sellado manual** sobre un **pallet de madera**.  

La **banda de alimentación de cajas selladas** las posiciona con precisión antes de la manipulación.  
El proceso permite que un **montacargas** retire el pallet listo para su distribución.  
Su rutina de movimiento es **cíclica** y optimizada para maximizar la eficiencia del almacenamiento.

<div align="center">
<img width="388" alt="Screenshot 2025-03-04 at 00 04 27" src="https://github.com/user-attachments/assets/027945bb-0ff9-4101-838c-316e25fc8536" />
</div>

- [Rutina del IRB 1520 (Paletizado)](RobotStudio/Module1_IRB1520.mod)

**Programación Smart Components**



#### Simulación












## Módulo 6: Digital Factory
La implementación de una fábrica digital mediante el software NX de Siemens ha permitido modelar y simular procesos clave en la automatización de la planta de fabricación de juguetes de plástico. A través de esta herramienta, se han representado virtualmente los sistemas de producción, lo que permite analizar el desempeño de distintos componentes automatizados.
Dado los cambios sugeridos en la propuesta de automatización (compra de una máquina de pulido por vibración, instalación de una celda robotizada e instalación de un sistema de bandas transportadoras completamente automatizado), la fábrica digital desarrollada en Siemens NX incluye todas las etapas previas al inicio de la celda robotizada, ya que este proceso será simulado en RobotStudio. Para lograr una integración eficiente entre ambos softwares, se implementa la comunicación mediante un servidor OPC UA.
### Siemens NX
#### Entorno y modelamiento
Siguiendo el layout propuesto anteriormente en el software Tecnomatix, se implementaron las distintas estaciones que conforman el proceso de manufactura. Finalmente, la fábrica digital cuenta con las siguientes etapas y estaciones de producción:
- **Mezcla de plástico**  
- **Dosificación**  
- **Inyección**  
- **Desbarbado**  
- **Ensamble parcial**  
- **Ensamble final**  
- **Etapa de salida hacia la celda robótica**  

Además, se incluyen bandas transportadoras que funcionan como medio de transporte entre las distintas etapas.
#### Actuadores virtuales


* **Banda transportadora principal**  
  Se trata de una banda transportadora de 26 m de longitud y 0.6 m de ancho, encargada de conectar las bandas secundarias provenientes de cada una de las inyectoras y llevar las piezas hacia las estaciones de desbarbado. Se desplaza a una velocidad constante de 2 m/s y recibe una señal desde el PLC que permite encenderla o apagarla.
  ![Banda_verde](https://github.com/user-attachments/assets/52ab642e-344c-4a1c-9c50-74fd98346f56)


* **Bandas transportadoras secundarias**  
  Se implementaron un total de seis bandas transportadoras, divididas en dos grupos de tres. Cada una tiene dimensiones de 4.5 m de largo por 0.6 m de ancho. El primer grupo transporta las piezas desde las inyectoras hasta la banda principal, mientras que el segundo las traslada desde la banda principal hasta sus respectivas estaciones de desbarbado. Todas las bandas operan de manera continua a una velocidad de 2 m/s y reciben una señal del PLC que permite encenderlas o apagarlas.  
![Banda_verde](https://github.com/user-attachments/assets/68adfe79-2020-4123-9695-bcf7f40d143c)

* **Cilindros neumáticos**  
  Su función es empujar las piezas transportadas por la banda principal hacia las distintas bandas secundarias, que luego las conducen a sus respectivas estaciones de desbarbado. En la simulación, estos cilindros se representan como una articulación prismática que recibe un número entero desde el PLC. Este número corresponde a la posición (expresada en milímetros) a la que debe desplazarse el cilindro. Una vez que las piezas han sido redirigidas a sus respectivas bandas secundarias, el cilindro regresa a su posición de origen para permitir el paso de las demás piezas que se desplazan a lo largo de la banda transportadora principal.
  ![Cilindro](https://github.com/user-attachments/assets/5bcae37d-ebce-4b8a-b74e-837a53fd60f1)


* **Actuadores angulares**  
  Estos actuadores bloquean el paso hacia la banda principal cuando se detectan piezas de un tipo diferente, evitando que sean enviadas a una estación de desbarbado incorrecta. En la simulación, su funcionamiento se representa mediante un número entero enviado desde el PLC, el cual indica la posición (expresada en grados) a la que debe desplazarse el actuador.
  ![Actuador_angular](https://github.com/user-attachments/assets/56b31711-ad2b-43c8-8d1d-3f4334f3972f)

#### Sensores virtuales
* **Sensores infrarrojos**

   En simulación, se utilizan como sensores de colisión, permitiendo detectar si una pieza ha llegado a una posición determinada y, con base en ello, tomar una acción. En la fábrica digital, estos sensores permiten identificar si las piezas están próximas a ingresar a la banda principal o si se acercan a la banda secundaria, que las conducirá hacia la estación de desbarbado.
  ![Sensor](https://github.com/user-attachments/assets/a18ccaeb-7a47-477f-9c41-8aaf92930ad0)

#### Simulación
Para la simulación en la fábrica digital de Siemens NX, se implementa la rutina utilizada en el arreglo de bandas automatizadas. De esta manera, es posible validar que los sensores, actuadores y la lógica de programación se integren correctamente, permitiendo que las piezas provenientes de las inyectoras lleguen a sus respectivas estaciones de desbarbado. Una vez en este punto, se simula el paso de las piezas por las distintas estaciones de ensamble hasta obtener un juguete completo, el cual continúa su recorrido por una banda transportadora que lo dirige hacia la celda robotizada, cuya simulación se realizará en RobotStudio.
## Módulo 7: Controladores industriales (PLC)
- Marco de IndDX, I4.0
- Progrmación Ladder & Grafcet
- Modos de Arranque/Parada (GEMMA)

- Spare del 20-30%: $Spare = \frac{\#I/O\ no\ usados}{\#I/O\ usados}$
### Selección de controladores
### Desglose de la lógica
#### Etapas
#### Transiciones
#### Modos
### Programación
#### Grafcet
#### Ladder
### Studio 5000
#### Programación e integración
#### Simulación


## Módulo 8: SCADA


### Diseño de la HMI

La interfaz gráfica del SCADA se diseñó en el software Ignition de Inductive Automation, como se evidencia en la siguiente imagen, haciendo uso de botones, labels, displays, switches toogle, gráficas, tablas de alarmas y símbolos de sensores.

![image](https://github.com/user-attachments/assets/1417605a-6acb-4564-bca0-9ea2c4a55358)

La interfaz cuenta con 7 pestañas, que se pueden apreciar a continuación, las cuales permiten adquirir datos, supervisar, operar, historizar y alarmar las variables involucradas en el proceso.

- Pestaña principal "Home": Permite seleccionar qué tipo de juguetes se va a producir, visualizar el objetivo de juguetes a producir enviado desde el MES, iniciar y detener todas las estaciones controladas desde el SCADA (inyectoras, banda principal, desbarbado y celda) y visualizar la cantidad de juguetes empacados.

![Captura de pantalla 2025-03-04 014936](https://github.com/user-attachments/assets/220cbb15-499f-4e5a-8531-1cd79d516775)

- Pestaña "Inyectoras": Posibilita la visualización del estado de operación de cada una de las inyectoras, iniciar y detener cada una de las inyectoras, poner en mantenimiento cada una de las inyectoras y visualizar la cantidad de piezas inyectadas en cada inyectora.

![Captura de pantalla 2025-03-04 015253](https://github.com/user-attachments/assets/1d14812a-cbe0-4ecd-b99a-588efe4bb258)

- Pestaña "Banda principal": Permite la visualización del estado de la banda principal y poner en mantenimiento la banda.

![Captura de pantalla 2025-03-04 015302](https://github.com/user-attachments/assets/f9848c9e-b31f-46de-aa6a-959c216f6817)

- Pestaña "Desbarbado": Posibilita la visualización del estado de operación de cada una de las estaciones de desbarbado, iniciar y detener cada una de las estaciones, poner en mantenimiento cada una de las estaciones y visualizar la cantidad de juguetes ensamblados en cada estación.

![Captura de pantalla 2025-03-04 015313](https://github.com/user-attachments/assets/b15f0abb-ece8-44bd-b55b-115f30402e9c)

- Pestaña "Celda robotizada": Permite la visualización del estado de operación de la celda, iniciar y detener la celda, poner en mantenimiento la celda y visualizar la cantidad de juguetes empacados.

![Captura de pantalla 2025-03-04 015325](https://github.com/user-attachments/assets/959b2fd0-cfef-490e-bfa3-0c7d4358f41c)

- Pestana "Históricos": Posibilita la visualización de las variables historizadas para cada una de las estaciones. Las principales variables historizadas corresponden al tipo de juguete producido, al estado de las estaciones y a la cantidad de material procesado en cada estación.

![Captura de pantalla 2025-03-04 015349](https://github.com/user-attachments/assets/32d65b7b-9842-41f6-a3fe-50b6a6d0f225)

Pestaña "Alarmas": Permite la visualización de las alarmas que se generan durante el proceso. Cabe resaltar que, la única alarma de nivel "crítico" se presenta si se detecta una falla en cualquiera de las estaciones, las demás alarmas son de diagnótico y se activan cada vez que las estaciones cambian de estado.

![Captura de pantalla 2025-03-04 015551](https://github.com/user-attachments/assets/aebc56ba-77e8-4537-911a-cfac266efd81)

Adicionalmente, en la parte inferior de la interfaz, también se evidencia un panel de alarmas en todas las pestañas y, a la izquierda, se encuentra el código de colores de los estados de las estaciones. Asimismo, en la parte superior izquierda, se encuentra el logo del proyecto, el cual al ser seleccionado se redirecciona a la página web de éste.


#### Variables clave

Las principales variables que se tuvieron en cuenta para el SCADA corresponden a las cantidades procesadas en cada estación y al estado de operación de cada estación. Para esto fue necesario crear los tags localmente ...

![image](https://github.com/user-attachments/assets/c3b7ab5d-26f7-4d75-9802-15d23e565516)
![image](https://github.com/user-attachments/assets/716578e2-8fda-4d30-ae03-c0298e67373c)

#### Conexión
API

#### Validación
VIDEO


# Resultados
## Resultados de aprendizaje
### Grupal
El desarrollo de este proyecto nos permitió acercarnos de manera integral a distintos aspectos que estan presentes en proyectos de automatización industrial, proporcionándonos una visión clara sobre su alcance, desafíos y beneficios. Para alcanzar los objetivos del proyecto, cada integrante aplicó sus habilidades adquiridas y las puso al servicio del equipo. La división de tareas fue clave para optimizar el trabajo, asignando responsabilidades según las fortalezas de cada miembro. Además, la organización y el seguimiento de actividades permitieron mantener el rumbo y cumplir con los plazos establecidos. La comunicación constante facilitó la toma de decisiones y la resolución de problemas, asegurando una colaboración efectiva y un desarrollo fluido del proyecto.

Consideramos que participar en este proyecto fue una gran oportunidad para desarrollar habilidades de resolución de problemas en un entorno mas cercano a la industria, enfrentando situaciones reales que requirieron análisis crítico y adaptabilidad. Además, nos permitió explorar nuevas herramientas de gran utilidad las cuales podran ser usadas posteriormente para enfrentarnos a problemas de nuestra vida profesional.

En conclusión, este proyecto no solo nos permitió aplicar conocimientos adquiridos a lo largo de la carrera, sino que también nos enfrentó a nuevos retos que impulsaron nuestro aprendizaje. La combinación de experiencia, innovación y trabajo en equipo nos ha dejado valiosas lecciones que sin duda contribuirán a nuestro desarrollo profesional en el ámbito de la automatización industrial.
### Individual
Juan Andrés Barrera Rodríguez

El proyecto me permitió acercarme a distintos aspectos de lo que puede ser un proyecto de automatización a nivel industrial, dándome la oportunidad de conocer su alcance y los resultados que suelen esperarse en este tipo de iniciativas. Asimismo, considero que, si bien el desarrollo presentó desafíos en algunos aspectos técnicos, los resultados obtenidos fueron muy gratificantes. Esto se debe a que no son únicamente fruto del trabajo realizado durante el semestre, sino el resultado de varios años de aprendizaje de todos los integrantes del grupo, y no solo del mío.

Para el desarrollo del proyecto, la organización y el compromiso del equipo fueron fundamentales para alcanzar los resultados obtenidos. La adecuada distribución de tareas, la comunicación constante y la colaboración entre los integrantes permitieron superar los desafíos técnicos y cumplir con los objetivos planteados. Esta experiencia demuestra la importancia del trabajo en equipo en proyectos de automatización industrial, donde la integración de conocimientos y habilidades diversas es clave para lograr soluciones eficientes y funcionales.

El desarrollo de este proyecto me exigió poner en práctica muchas de las habilidades que he aprendido en los últimos años, además de enfrentarme a la necesidad de adquirir nuevos conocimientos para resolver los desafíos que surgieron en el proceso. Esta combinación de experiencia y aprendizaje continuo ha sido muy enriquecedora, y espero que las habilidades desarrolladas durante este proyecto me brinden un impulso y un valor diferencial en mi vida profesional, permitiéndome enfrentar con mayor confianza futuros retos en el ámbito de la automatización industrial.
## Resultados de ingeniería
### Resultados Módulo 1: Gestión de Producción y Automatización
El módulo de gestión de producción y automatización nos proporcionó una visión integral sobre los procesos productivos, destacando la importancia de medir su eficiencia y calidad mediante indicadores clave. A través del análisis de estos factores, comprendimos que la automatización no es solo una cuestión de implementar nuevas tecnologías, sino una estrategia para optimizar recursos, mejorar la trazabilidad y garantizar productos de mayor calidad. Además, se enfatizó la necesidad de considerar el impacto de la automatización en la organización, desde la reducción de costos hasta la flexibilidad en la producción.

Esta perspectiva permitió reflexionar más allá de la incorporación de herramientas tecnológicas, enfocándonos en el propósito de su implementación. La automatización debe responder a objetivos claros, como la mejora en la competitividad, la sostenibilidad y la seguridad en el entorno de trabajo. También se resaltó la importancia de una gestión adecuada del cambio, asegurando que la integración de nuevas tecnologías esté alineada con la capacitación del personal y las necesidades del mercado. 

### Resultados Módulo 2: Industria 4.0 en la Automatización
Este módulo nos ofreció una visión actualizada sobre las tecnologías emergentes en el contexto de la Industria 4.0, permitiéndonos comprender las herramientas y sistemas que están revolucionando los procesos productivos. Al conocer estas tecnologías, no solo nos mantenemos al día con las tendencias del sector, sino que también adquirimos una base sólida para identificar y desarrollar soluciones de automatización adaptadas a las necesidades de la industria moderna. 
En nuestro caso, implementamos el almacenamiento de datos en la nube como una solución clave para el control y monitoreo remoto de la planta, alineándonos con los principios de la Industria 4.0. Esta tecnología nos permite acceder en tiempo real a información crítica sobre el estado de los procesos, el rendimiento de los equipos y posibles fallas, facilitando una gestión más eficiente y reduciendo tiempos de respuesta ante cualquier incidente. Además, el uso de la nube garantiza una mayor escalabilidad y seguridad en la gestión de datos.
### Resultados Módulo 3: Planeación del Proyecto
El módulo nos proporcionó herramientas clave para organizar eficazmente el grupo de trabajo, permitiéndonos estructurar tareas, asignar responsabilidades y gestionar el tiempo de manera óptima para alcanzar los objetivos del proyecto. Al mismo tiempo, resaltó la importancia de estas metodologías en la resolución eficiente de los distintos requerimientos, fomentando la comunicación, la colaboración y la toma de decisiones estratégicas. Este enfoque no solo optimiza el desempeño del equipo, sino que también fortalece la capacidad de adaptarse a los desafíos del proyecto, asegurando una ejecución más ordenada y exitosa.
### Resultados Módulo 4: Evaluación Económica de Proyectos
El módulo nos llevó a cuestionarnos aspectos que antes no habíamos considerado en otros proyectos, especialmente en lo referente a la viabilidad económica. La ejecución de un proyecto real no solo implica el diseño y la implementación técnica, sino que también conlleva implicaciones financieras que pueden limitar o potenciar su desarrollo. Comprender estos factores es fundamental para una planificación efectiva, ya que permite evaluar costos, optimizar recursos y buscar estrategias de financiación que aseguren la sostenibilidad del proyecto. Este enfoque nos brindó una perspectiva más integral, resaltando la importancia de equilibrar la innovación con la gestión financiera para lograr soluciones viables y escalables.
### Resultados Módulo 5: Celda de Manufactura Robotizada
### Resultados Módulo 6: Digital Factory
Este módulo nos presentó Siemens NX, una herramienta que hasta ahora no había sido muy utilizada por ninguno de los miembros del grupo. Por ello, fue necesario aprender a usar este software en paralelo al desarrollo del proyecto, lo que impidió profundizar en todas las funcionalidades que ofrece NX. Sin embargo, se logró explorar la librería Mechatronics Concept Designer (MCD), que resultó de gran utilidad para la implementación de la fábrica digital. MCD permitió crear un entorno virtual en el que sensores y actuadores pueden comunicarse con un controlador (PLC) virtual, con el fin de realizar pruebas de funcionamiento de la solución propuesta y así determinar su viabilidad.

Como resultado de este módulo, se obtuvo un gemelo digital de la fábrica, enfocado en la simulación del arreglo de bandas transportadoras que van desde las inyectoras hasta las estaciones de desbardado. Para lograr esto, se emplearon distintos tipos de sensores y actuadores, como sensores de colisión, cilindros neumáticos (representados como articulaciones prismáticas), actuadores angulares (representados como articulaciones rotacionales) y bandas transportadoras. Todo este sistema se conecta a un PLC virtual mediante un servidor OPC, permitiendo una interacción realista entre los componentes y facilitando la validación del funcionamiento de la solución propuesta.

Esta herramienta puede ser de gran importancia para futuros proyectos en entornos académicos o profesionales, ya que permite realizar distintos tipos de pruebas, simulaciones y análisis de procesos sin la necesidad de disponer físicamente de todos los elementos involucrados. Esto brinda una gran versatilidad para explorar nuevas soluciones, optimizar diseños y validar conceptos antes de su implementación real, lo que puede traducirse en ahorro de recursos y una mayor eficiencia en el desarrollo de proyectos de automatización.

### Resultados Módulo 7: Controladores industriales (PLC)
Gracias al módulo de controladores industriales, pudimos entender cómo estos dispositivos gestionan y regulan distintos procesos dentro de la industria, garantizando su estabilidad y eficiencia. Además, exploramos diferentes enfoques para abordar problemas relacionados con la programación de rutinas en PLC, lo que nos permitió adquirir diversas perspectivas para enfrentarlos de manera más efectiva.
### Resultados Módulo 8: SCADA
