const mongoose = require('mongoose');

const conectarAoMongoDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://matheusklein:Klein1012@cluster0.c2mb8jo.mongodb.net/sistema?retryWrites=true&w=majority', {            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado ao MongoDB com sucesso.');
    } catch (error) {
        console.error('Erro de conexão com o MongoDB:', error);
    }
};

conectarAoMongoDB();