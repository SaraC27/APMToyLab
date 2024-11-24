import React from 'react';
import logo from './Img/logo.webp'

interface InicioProps {
}

const Inicio: React.FC<InicioProps> = (props: InicioProps) => {
  return (
    <div className="inicio-container">
      <div className="inicio-content">
        <h1 className="componente-titulo">Inicio</h1>
        <img src={logo} alt="Logo" className="inicio-image" />
        <div className="inicio-description">
          <p>
            Bienvenidos a <strong>APM - ToyLab</strong>, donde la creatividad y la tecnología se encuentran para fabricar los juguetes del futuro. Somos una marca creada por ingenieros apasionados, específicamente para la materia <strong>Automatización de Procesos de Manufactura (APM)</strong> de la <strong>Universidad Nacional de Colombia</strong>. Este proyecto es parte del esfuerzo de los estudiantes de <strong>Ingeniería Mecatrónica</strong> por llevar la innovación y la automatización al siguiente nivel.
          </p>
          <p>
            En <strong>APM - ToyLab</strong> diseñamos juguetes que combinan diversión con tecnología avanzada, inspirados en los procesos industriales más eficientes y sostenibles. Cada juguete es el resultado del trabajo de jóvenes ingenieros que aplican sus conocimientos de automatización, diseño mecánico y manufactura inteligente para ofrecer productos llenos de creatividad, calidad y precisión.
          </p>
          <p>
            Nuestro propósito es despertar la imaginación de niños y niñas, mientras demostramos cómo la ingeniería moderna puede transformar ideas en realidades tangibles. Descubre cómo <strong>APM - ToyLab</strong> está revolucionando la fabricación de juguetes, llevando la magia del aprendizaje y la tecnología directamente a las manos de los más pequeños.
          </p>
          <p>
            <strong>APM - ToyLab: Donde la Ingeniería y la Imaginación se Unen para Crear Diversión sin Límites.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
