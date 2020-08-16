import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import './styles.css';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(event: FormEvent) {
        event.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>

                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)}
                        options={[
                            { value: "Artes", label:"Artes" },
                            { value: "Informática", label:"Informática" },
                            { value: "Matemática", label:"Matemática" },
                            { value: "Biologia", label:"Biologia" },
                            { value: "Geografia", label:"Geografia" },
                        ]} 
                    />

                    <Select 
                        name="week_day" 
                        label="Dia da semana"
                        value={week_day}
                        onChange={(event) => setWeekDay(event.target.value)}
                        options={[
                            { value: "0", label:"Domingo" },
                            { value: "1", label:"Segunda-feira" },
                            { value: "2", label:"Terça-feira" },
                            { value: "3", label:"Quarta-feira" },
                            { value: "4", label:"Quinta-feira" },
                            { value: "5", label:"Sexta-feira" },
                            { value: "6", label:"Sábado" },
                        ]} 
                    />

                    <Input 
                        type="time" 
                        name="time" 
                        label="Hora"
                        value={time}
                        onChange={(event) => setTime(event.target.value)} 
                    />
                    
                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>    

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
                <TeacherItem key={6} teacher={{
                    "id": 6,
                    "subject": "Informática",
                    "cost": 50,
                    "name": "Bruna de Lima",
                    "avatar": "https://media-exp1.licdn.com/dms/image/C4D03AQGcJ3mvPZFyeg/profile-displayphoto-shrink_400_400/0?e=1602720000&v=beta&t=26lVWJ3k5BREOsi1QS3hg4zPcXwYDO630ukL31-rmbk",
                    "whatsapp": "21975638466",
                    "bio": "Apaixonada por novas tecnologias relacionada a Javascript. Nova tecnologia no mercado? Javascript? Ciênica de Dados? Opá é comigo mesmo! Uma estusiasta por criação de sistemas com javascript e C#, além de ter como um hobby (que futuramente deixará de ser hobby) estudo em machile learning, IA e banco de dados!"
                }} />
            </main>        
        </div>
    )
}

export default TeacherList;