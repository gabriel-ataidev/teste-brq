import {Table, Button} from 'antd'
import { useEffect, useState } from 'react';

const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
    },
    {
      title: 'CPF',
      dataIndex: 'cpf',
    },
    {
      title: 'Data de nascimento',
      dataIndex: 'data_nascimento',
    },
    {
      title: 'Endereço',
      dataIndex: 'endereço',
    },
  ];

function Consulta() {
    const [data, setData] = useState([]);

    const getLocalItems = () => {
        let list = localStorage.getItem('usuarios');
        if(list !== null){
            return JSON.parse(localStorage.getItem('usuarios'))
        }
        return [];
    }
  
    const getTableData = () => {
        let data = [];
        let response = getLocalItems();
        response.map(item => {
            let nome = item?.data?.dados_pessoais?.nome;
            let cpf = item?.data?.dados_pessoais?.cpf;
            let data_nascimento = item?.data?.dados_pessoais?.data_nascimento;
            let endereço = `${item?.data?.endereco?.endereco}, ${item?.data?.endereco?.numero}/${item?.data?.endereco?.complemento} - ${item?.data?.endereco?.cidade}/${item?.data?.endereco?.estado} - ${item?.data?.endereco?.cep}`;
            data.push({name: nome, cpf: cpf, data_nascimento: data_nascimento, endereço: endereço});
            setData(data);
        })
    }

    const deleteUsers = () => {
      localStorage.setItem('usuarios', JSON.stringify([]));
      setData([])
    }

    useEffect(() => {
        getTableData();
    }, [])

    return(
      <>
        <Table columns={columns} dataSource={data} pagination={false} style={{margin: '20px'}} />
        <Button danger onClick={deleteUsers} style={{marginBottom: '100px'}}>Excluir todos os usuários</Button>
      </>
    )
}

export default Consulta