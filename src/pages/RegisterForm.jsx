import React from 'react';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', email: '', password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch('http://localhost:5432/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    render() {
        return (
            <div className="p-8 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mt-8 mb-8">
                <div className="flex-shrink-0 w-full">
                    <h2 className="text-center mb-4">Registrarse</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Nombre de usuario
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-300 text-white placeholder-white leading-tight focus:outline-none focus:shadow-outline" id="username" name="username" type="text" placeholder="Nombre de usuario" value={this.state.username} onChange={this.handleChange} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Correo electrónico
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-300 text-white placeholder-white leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Correo electrónico" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Contraseña
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-300 text-white placeholder-white mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="border-2 text-black px-4 py-1 rounded-lg border-gray-500 hover:text-white hover:bg-zinc-700" type="submit">
                                Registrarse
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegisterForm;