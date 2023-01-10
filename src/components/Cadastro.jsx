import { Button, Form, Input, message} from 'antd';
import {useEffect, useState} from 'react';

function Cadastro() {
    
    const getLocalItems = () => {
        let list = localStorage.getItem('usuarios');
        if(list !== null){
            return JSON.parse(localStorage.getItem('usuarios'))
        }
        return [];
    }
    
    const [form] = Form.useForm();
    const [listaUsuarios, setListaUsuarios] = useState(getLocalItems());
    const [messageApi, contextHolder] = message.useMessage();
    
    const success = () => {
        messageApi.open({
        type: 'success',
        content: 'Usuário cadastrado',
        });
    };
    const error = () => {
        messageApi.open({
        type: 'error',
        content: 'Preencha todos os campos do formulário',
        });
    };

    const onFinish = (values) => {
        let usuario = {
            "data": {
                "dados_pessoais" : {
                    "nome": values.nome,
                    "sobrenome": values.sobrenome,
                    "cpf": values.cpf,
                    "data_nascimento": values.data_nascimento
                },
                "endereco": {
                    "cep": values.cep,
                    "endereco": values.endereço,
                    "numero": values.numero,
                    "complemento": values.complemento,
                    "cidade": values.cidade,
                    "estado": values.estado
                }
            }
        }
        setListaUsuarios([...listaUsuarios, usuario])
        success();
        form.resetFields();
    };

    const onFinishFailed = (errorInfo) => {
        error();
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        localStorage.setItem('usuarios', JSON.stringify(listaUsuarios))
    }, [listaUsuarios])

    return(
        <>
        {contextHolder}
        <Form
            form={form}
            style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0 auto 90px', padding: '20px', maxWidth: '700px'}}
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 20 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
        <Form.Item
            label="Nome"
            name="nome"
            rules={[{ required: true, message: 'Coloque seu nome, por favor!' }]}
        >
            <Input />
        </Form.Item>
        
        <Form.Item
            label="Sobrenome"
            name="sobrenome"
            rules={[{ required: true, message: 'Coloque seu sobrenome, por favor!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="CPF"
            name="cpf"
            rules={[{ required: true, message: 'Coloque seu CPF, por favor!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Data de nascimento"
            name="data_nascimento"
            rules={[{ required: true, message: 'Coloque sua data de nascimento, por favor!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="CEP"
            name="cep"
            rules={[{ required: true, message: 'Coloque seu CEP, por favor!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Endereço"
            name="endereço"
            rules={[{ required: true, message: 'Coloque seu endereço, por favor!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Número"
            name="numero"
            rules={[{ required: true, message: 'Coloque seu número, por favor!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Complemento"
            name="complemento"
            rules={[{ required: true, message: 'Coloque seu complemento, por favor!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Cidade"
            name="cidade"
            rules={[{ required: true, message: 'Coloque sua Cidade, por favor!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Estado"
            name="estado"
            rules={[{ required: true, message: 'Coloque seu Estado, por favor!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item style={{margin: '0 0 0 auto'}}>
            <Button type="primary" htmlType="submit">
            Cadastrar
            </Button>
        </Form.Item>
        </Form>
        </>
    )
}

export default Cadastro