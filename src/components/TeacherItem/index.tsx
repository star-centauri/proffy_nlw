import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGcJ3mvPZFyeg/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=XcSeI_3YYGWBRjS6W8intoItACluVy-pD69_oZB7Las" alt="foto do proffy, Bruna de Lima" />
                <div>
                    <strong>Bruna de Lima</strong>
                    <span>Informática</span>
                </div>
            </header>

            <p>
                Apaixonada por novas tecnologias relacionada a Javascript.
                <br/> <br/>
                Nova tecnologia no mercado? Javascript? Ciênica de Dados? Opá é comigo mesmo! 
                Uma estusiasta por criação de sistemas com javascript e C#, além de ter como um hobby (que futuramente deixará de ser hobby) estudo em machile learning, IA e banco de dados! 
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Entrar em contato por whatsapp" />
                    Entrat em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;