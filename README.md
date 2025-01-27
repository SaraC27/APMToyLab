# Equipo: APM - ToyLab

- **Página web:** [APM ToyLab](https://apmtoylab.fcruzv.com/)
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
     - [Pre-Automatización](#pre-automatización)
       - [Indicadores](#indicadores)
       - [Tecnomatix](#tecnomatix)
       - [VSM](#vsm-pre)
     - [Post-Automatización](#post-automatización) 
       - [Indicadores](#indicadores-post)
       - [Tecnomatix](#tecnomatix-post)
       - [VSM](#vsm-post)
     - [Propuesta automatización](#propuesta-automatización)
     - [Análisis de Mercado](#análisis-de-mercado)
     - [Sistema MES](#sistema-mes)

   - [Módulo 2: Industria 4.0 en la Automatización](#módulo-2-industria-40-en-la-automatización)  
     - [Pre-Automatización](#pre-automatización-40)  
       - [Diagramas P&ID](#diagramas-pid)
       - [Diagrama Arquitectura](#diagrama-arquitectura)
       - [Tecnologías 4.0](#tecnologías-40)
     - [Post-Automatización](#post-automatización-40)  
       - [Diagramas P&ID](#diagramas-pid-post)
       - [Diagrama Arquitectura](#diagrama-arquitectura-post)
       - [Tecnologías 4.0](#tecnologías-40-post)

   - [Módulo 3: Planeación del Proyecto](#módulo-3-planeación-del-proyecto)  
     - [ERP](#erp)
     - [EDT](#edt)
     - [Cronograma](#cronograma)
     - [Bitácoras](#bitácoras)

   - [Módulo 4: Evaluación Económica de Proyectos](#módulo-4-evaluación-económica-de-proyectos)  
     - [Economía del Proyecto](#economía-del-proyecto)  
       - [Presupuesto](#presupuesto)  
       - [Costos](#costos)  
       - [Flujo de Caja](#flujo-de-caja)  
     - [Análisis rentabilidad](#análisis-rentabilidad)  
       - [VPN](#vpn)  
       - [TIR](#tir)  
       - [Payback](#payback)  
     - [Oferta comercial](#oferta-comercial)

   - [Módulo 5: Celda de Manufactura Robotizada](#módulo-5-celda-de-manufactura-robotizada)  
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

   - [Módulo 6: Digital Factory](#módulo-6-digital-factory)  
     - [Siemens NX](#siemens-nx)  
       - [Entorno y modelamiento](#entorno-y-modelamiento)
       - [Actuadores virtuales](#actuadores-virtuales)
       - [Sensores virtuales](#sensores-virtuales)
       - [Simulación](#simulación-digital-factory)  

   - [Módulo 7: Controladores industriales (PLC)](#módulo-7-controladores-industriales-plc)  
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

   - [Módulo 8: SCADA](#módulo-8-scada)  
     - [HMI](#hmi)  
       - [Variables clave](#variables-clave)  
       - [Diseño](#diseño-hmi)  
       - [Desarrollo](#desarrollo)  
       - [Validación](#validación)  
       - [Elementos de alto desempeño](#elementos-de-alto-desempeño)  
     - [Ignition](#ignition)  
       - [Integración control](#integración-control)  
       - [Integración supervisión](#integración-supervisión)  

2. [Resultados](#resultados)  
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
- **Work in Process (WIP)**
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
A partir de la planta previa a la automatizacion, se obtienen solo siguientes KPI. Para obtener informacion mas detallada sobre el calculo de los mismos, remitirse al siguiente [archivo](Files/Indicadores_Pre.xlsx).
| **KPI**                     | **Qué es?**                                                                             | **Cómo se determina?** | **Valor**                     |
|-----------------------------|-----------------------------------------------------------------------------------------|-------------------------|-------------------------------|
| **Work in Process (WIP)**   | Contempla el material que se encuentra entre estaciones y está en espera de ser procesado (Wi) o que está siendo procesado en las estaciones (WEi) | Cálculos                | $1.236.560,00                |
| **Takt Time (T)**           | Cadencia con la que se debe fabricar el producto para satisfacer la demanda             | Cálculos                | T = 276 seg / juguete         |
| **Tiempo de ciclo (Tc)**    | Tiempo de proceso de cada estación                                                      | VSM                     | Revisar VSM (cada estación es diferente) |
| **Tasa de producción (Rp)** | Número de partes producidas por hora                                                    | Simulación              | 13 juguetes / hora            |
| **Capacidad de producción (Pc)** | Máxima tasa de salida que una fábrica es capaz de producir                                | Calculado               | 2288 juguetes / mes           |
| **Tiempo total de manufactura (MLT)** | Tiempo desde la orden de producción hasta finalizar el lote                                   | Cálculos                | 514 minutos                   |
| **Disponibilidad (A)**      | Disponibilidad de las máquinas                                                          | Definido                | 70 %                          |
| **Eficiencia**              | Eficiencia de desempeño                                                                                        | Definido                | 75 %                          |
| **Calidad**                 | % de producto defectuoso                                                                | Definido                | 90 %                          |
| **Overall Equipment Effectiveness (OEE)** | Indicador general de desempeño                                                      | Cálculos                | 47 %                          |
| **Utilización (U)**         | % en el que trabaja la fábrica                                                          | Cálculos                | Variable según el mes (70% máximo) |


#### Tecnomatix

El diseño inicial de la planta pre-automatizada se llevó a cabo en el software de fabricación digital Tecnomatix Plant Simulation de Siemens (como se evidencia en la imagen a continuación), debido a que este software permitió la simulación de las diferentes etapas del proceso de manufactura incluyendo, asimismo, los tiempos de proceso de cada una de las máquinas. Esto último facilitó observar que en la estación de empaque con papel burbuja se presetó un cuello de botella.

De la misma manera, teniendo en cuenta los indicadores calculados, se configuró la cantidad de materia prima necesaria para la producción de un día de trabajo (8 horas), sin embargo, la simulación indicó que con dicha cantidad de materia prima la planta solo funcionaría 3 horas y media, razón por la cual los indicadores y la planta se siguen ajustando.

![image](https://github.com/user-attachments/assets/b09964cc-4bc6-4098-8eb5-5ade45d120eb)


#### VSM Pre
La informacion detallada del diagrama VSM de la planta antes de la automatización se puede encontrar en el siguiente [enlace](Files/VSM_Pre.pdf).

### Post-Automatización
#### Indicadores
Luego de implementar la propuesta de automatizacion se espera obtener los siguientes KPI. Para obtener informacion mas detallada sobre el calculo de los mismos, remitirse al siguiente [archivo](Files/Indicadores_Post.xlsx).
| **KPI**                     | **Qué es?**                                                                             | **Cómo se determina?** | **Valor**                     |
|-----------------------------|-----------------------------------------------------------------------------------------|-------------------------|-------------------------------|
| **Work in Process (WIP)**   | Contempla el material que se encuentra entre estaciones y está en espera de ser procesado (Wi) o que está siendo procesado en las estaciones (WEi) | Cálculos                | $1.249.964,00                |
| **Takt Time (T)**           | Cadencia con la que se debe fabricar el producto para satisfacer la demanda             | Cálculos                | T = 276 seg / juguete         |
| **Tiempo de ciclo (Tc)**    | Tiempo de proceso de cada estación                                                      | VSM                     | Revisar VSM (cada estación es diferente) |
| **Tasa de producción (Rp)** | Número de partes producidas por hora                                                    | Simulación              | 13 juguetes / hora            |
| **Capacidad de producción (Pc)** | Máxima tasa de salida que una fábrica es capaz de producir                                | Calculado               | 2288 juguetes / mes           |
| **Tiempo total de manufactura (MLT)** | Tiempo desde la orden de producción hasta finalizar el lote                                   | Cálculos                | 473 minutos                   |
| **Disponibilidad (A)**      | Disponibilidad de las máquinas                                                          | Definido                | 70 %                          |
| **Eficiencia**              | Eficiencia de desempeño                                                                                      | Definido                | 75 %                          |
| **Calidad**                 | % de producto defectuoso                                                                | Definido                | 90 %                          |
| **Overall Equipment Effectiveness (OEE)** | Indicador general de desempeño                                                      | Cálculos                | 47 %                          |
| **Utilización (U)**         | % en el que trabaja la fábrica                                                          | Cálculos                | Variable según el mes (70% max) |


#### Tecnomatix

Al igual que el diseño de la planta antes de la automatización, el modelado de la planta automatizada se desarrolló en Tecnomatix Plant Simulation, aprovechando las opciones que este software ofrece como, por ejemplo, robots de pick and place. Igualmente, se configuraron los tiempos correspondientes en las máquinas y se pudo evidenciar que el cuello de botella se superó con las automatizaciones propuestas. Sin embargo, como en la planta pre-automatizada, también se consideró la cantidad de materia prima necesaria para una jornada de 8 horas, según lo señalado por los indicadores, no obstante, el proceso tuvo una duración de 3 horas y media, por lo tanto, los indicadores y la simulación de la planta se siguen revisando y corrigiendo.

![image](https://github.com/user-attachments/assets/07043485-836e-46d8-9817-ae692a2e4691)


#### VSM Post
Luego de implementar la propuesta de automatizacion se espera obtener el siguiente [VSM](Files/VSM_Post.pdf).
### Propuesta automatización

Se propone implementar un plan de automatización en la planta, enfocado en optimizar tres zonas clave del proceso de producción. A continuación, se detalla la propuesta para cada una de estas áreas:

#### Transporte de piezas desde las inyectoras hasta las estaciones de rebaba:

Actualmente, las piezas que salen de las inyectoras son transportadas a través de un sistema de bandas transportadoras hasta un almacén intermedio. Desde allí, un operario las recoge manualmente y las lleva a sus respectivas estaciones de eliminación de rebaba. Este proceso toma un total de 28 segundos, distribuidos de la siguiente manera: 12 segundos en el sistema de bandas transportadoras y 16 segundos en el traslado manual realizado por el operario.

Para optimizar este flujo, se propone complementar el sistema existente de bandas transportadoras mediante la instalación de un nuevo conjunto de bandas. Este nuevo sistema permitirá que las piezas sean transportadas directamente desde las inyectoras hasta sus estaciones correspondientes de rebaba, eliminando la necesidad del almacenamiento intermedio y el transporte manual.

Con esta mejora, el tiempo total de transporte se reduciría a 21 segundos: 12 segundos en el sistema de bandas original y 9 segundos en el nuevo sistema. Además, esta automatización liberará al operario, quien podrá ser reubicado en otra estación donde sea más necesario, optimizando el uso de los recursos humanos.

#### Corte de la ejes de hierro:

Actualmente, los ejes de hierro que salen del proceso de corte láser son sometidos a un pulido manual. Este proceso requiere que un operario pula cada eje individualmente utilizando una esmeriladora de banco, con un tiempo promedio de 10 segundos por eje.

Para optimizar este procedimiento, se propone implementar una máquina de electropulido que permita procesar múltiples ejes de manera simultánea, eliminando la necesidad de realizar el pulido manual uno a uno.

Con esta mejora, el tiempo de pulido por eje se reduciría drásticamente a 3,75 segundos, lo que representa una optimización significativa del proceso. Además, el operario sería liberado de esta tarea repetitiva, pasando a desempeñar labores de supervisión de la máquina de electropulido, lo que incrementa la eficiencia general del área y mejora la ergonomía del trabajo.

#### Empacado y paletizado:

Actualmente, el proceso de empacado y paletizado de los juguetes se realiza de manera manual por operarios. En la etapa de empacado, que incluye envolver cada juguete en plástico burbuja y colocarlo dentro de una caja de cartón, el tiempo requerido por juguete es de 60 segundos. Por otro lado, el proceso de paletizado, también manual, toma 15 segundos adicionales por juguete.

Para optimizar este flujo, se propone la implementación de una celda robotizada que realice ambas tareas de manera automática, eliminando la necesidad de que los operarios las ejecuten manualmente uno por uno.

Con esta mejora, el tiempo necesario para el empacado se reduciría a 40 segundos por juguete, mientras que el tiempo de paletizado disminuiría a 10 segundos. Esto no solo incrementaría la eficiencia y productividad del proceso, sino que también liberaría a los operarios de estas tareas repetitivas, permitiéndoles asumir funciones de supervisión de la celda robotizada, mejorando así el aprovechamiento de los recursos humanos.


#### Comparación entre la planta PRE y POST Automatización:

<div align="center">
   <img style="width: 30vw;" alt="Planta PRE" src="https://github.com/user-attachments/assets/c10cb57f-d02b-4472-a99b-f110225ddf2d"/>
   <img style="width: 30vw;" alt="Planta PRE" src="https://github.com/user-attachments/assets/2ffb4910-22df-4652-8ce5-2d59a4df7857"/>
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

## Módulo 2: Industria 4.0 en la Automatización
### Pre-Automatización
#### Diagramas P&ID
#### Diagrama Arquitectura
#### Tecnologías 4.0
### Post-Automatización
#### Diagramas P&ID
#### Diagrama Arquitectura
#### Tecnologías 4.0
## Módulo 3: Planeación del Proyecto
### ERP
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
   <img style="width: 40vw;" alt="productos de Entrada y Salida" src="https://github.com/user-attachments/assets/339c7808-8252-4327-9eaa-f9f6e8b1ad23" />
</div>


### Proceso de creación de la celda
<p align="justify"> 
La creación de la celda robotizada sigue una hoja de ruta estructurada que guía cada etapa del proceso, desde la orientación inicial hasta la validación final. Este diagrama de flujo detalla los pasos necesarios para analizar, diseñar, implementar y evaluar la celda, asegurando que cumpla con los objetivos del proyecto de manera eficiente y segura.
</p>

```mermaid
flowchart TD
    A[Orientación del Proyecto] --> B[Definir objetivos, alcance, recursos y cronograma]
    B --> C[Identificación de Procesos]
    C --> D[Analizar operaciones, identificar mejoras y calcular indicadores actuales]
    D --> E[Definición del Diagrama de Flujo]
    E --> F[Elaborar un diagrama que incluya espacios, acciones, flujo de materiales y herramientas]
    F --> G[Análisis del Espacio]
    G --> H[Determinar necesidades de espacio y restricciones, considerando el robot]
    H --> I[Proponer Layout 1]
    H --> J[Proponer Layout N]
    I & J --> K{¿Layouts cumplen requisitos mínimos?}
    K -->|Sí| L[Seleccionar el mejor layout]
    K -->|No| M[Ajustar y mejorar los layouts]
    L & M --> N[Seguridad]
    N --> O[Identificar riesgos, definir protecciones y protocolos de emergencia]
    O --> P[Simulación]
    P --> Q[Simular la celda en RobotStudio para obtener indicadores y probar programación]
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
- **Tamaño de los pallets:** 1,2 m x 1,2 m.
- Se seleccionaron robots con áreas de alcance adecuadas para cubrir el movimiento requerido en el proceso.

***Aplicación específica:***
- **Empaque:** Requiere alta velocidad y precisión para manejar objetos ligeros, ideal para el IRB 360.
- **Paletizado:** Requiere fuerza y un alcance mayor para manejar cajas y pallets completos, ideal para el IRB 660.

**Características técnicas de los robots seleccionados**

***IRB 360 (Delta Robot):***

- **Carga útil máxima (Payload):** Hasta 3 kg.
- **Área de trabajo (Radio):** Hasta 1,6 m.
- **Repetibilidad:** ±0,1 mm.
- **Velocidad máxima:** Alta velocidad para aplicaciones de empaquetado rápido.
- **Aplicaciones:** Ideal para empaquetado, pick and place, y tareas de alta precisión.

***IRB 660 (Paletizado):***

- **Carga útil máxima (Payload):** Hasta 250 kg.
- **Área de trabajo (Alcance):** Hasta 3,15 m.
- **Repetibilidad:** ±0,1 mm.
- **Velocidad:** Optimizado para paletizado con ciclos rápidos y eficientes.
- **Aplicaciones:** Perfecto para manejar cajas y pallets en tareas de paletizado industrial.

***IRB 360 (Empacado):***
 - **Función principal:** Realiza tareas de empaquetado de juguetes en las líneas de producción, manipulando objetos individuales con alta velocidad y precisión.
 - **Justificación:** Diseñado para manejar cargas ligeras, como juguetes de 1,2 kg, con precisión y alta velocidad, ideal para procesos de empaque rápido.

<div align="center">
  <img style="width: 21vw;" alt="IRB 360-2" src="https://github.com/user-attachments/assets/33997a38-2937-438c-be1e-9ae0356c42d7" />
  <img style="width: 19vw;" alt="IRB 360-1" src="https://github.com/user-attachments/assets/dbe4080f-74bc-4d21-a0ac-b1f1475627ba" />
</div>

***IRB 660 (Paletizado):***
- **Función principal:** Encargado de paletizar cajas o productos terminados (juguetes ya empaquetados) en pallets de tamaño estándar de 1,2 m x 1,2 m.
- **Justificación:** Su capacidad de carga y área de trabajo lo convierten en la elección ideal para manipular pallets y organizar grandes volúmenes de productos.

<div align="center">
  <img style="width: 27vw;" alt="IRB 660-1" src="https://github.com/user-attachments/assets/d1385a1c-aeab-4a7e-b7bf-bc383fabb4b5" />
  <img style="width: 30vw;" alt="IRB 660-2" src="https://github.com/user-attachments/assets/1cb6cc29-fe77-4be1-ae99-bec89961eadc" />
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

### RobotStudio
#### Modelado
#### Programación
#### Simulación

## Módulo 6: Digital Factory
### Siemens NX
#### Entorno y modelamiento
#### Actuadores virtuales
#### Sensores virtuales
#### Simulación

## Módulo 7: Controladores industriales (PLC)
- Marco de IndDX, I4.0
- Progrmación Ladder & Grafcet
- Modos de Arranque/Parada (GEMMA)
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
### HMI
#### Variables clave
#### Diseño
#### Desarrollo
#### Validación
#### Elementos de alto desempeño
### Ignition
#### Integración control
#### Integración supervisión

# Resultados
## Resultados de aprendizaje
### Grupal
### Individual
## Resultados de ingeniería
### Resultados Módulo 1
### Resultados Módulo 2
### Resultados Módulo 3
### Resultados Módulo 4
### Resultados Módulo 5
### Resultados Módulo 6
### Resultados Módulo 7
### Resultados Módulo 8
