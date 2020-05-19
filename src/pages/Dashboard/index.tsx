import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/2254731?s=460&u=391c32fec7b372199dff6650930b89563189b1c0&v=4"
            alt="Diego Fernandes"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição descritiva descrita</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/2254731?s=460&u=391c32fec7b372199dff6650930b89563189b1c0&v=4"
            alt="Diego Fernandes"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição descritiva descrita</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/2254731?s=460&u=391c32fec7b372199dff6650930b89563189b1c0&v=4"
            alt="Diego Fernandes"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição descritiva descrita</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
