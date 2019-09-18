var getServices = function() {
    var services = [
        {
            id: 1,
            title: 'Serviço 1',
            img: 'servico1.jpg',
            description: 'Breve descrição do serviço 1',
            info: 'Descrição detalhada do serviço 1'
        },
        {
            id: 2,
            title: 'Serviço 2',
            img: 'servico2.jpg',
            description: 'Breve descrição do serviço 2',
            info: 'Descrição detalhada do serviço 2'
        },
        {
            id: 3,
            title: 'Serviço 3',
            img: 'servico3.jpg',
            description: 'Breve descrição do serviço 3',
            info: 'Descrição detalhada do serviço 3'
        },
        {
            id: 4,
            title: 'Serviço 4',
            img: 'servico4.jpg',
            description: 'Breve descrição do serviço 4',
            info: 'Descrição detalhada do serviço 4'
        },
        {
            id: 5,
            title: 'Serviço 5',
            img: 'servico5.jpg',
            description: 'Breve descrição do serviço 5',
            info: 'Descrição detalhada do serviço 5'
        },
    ];

    return services;

};

module.exports = { 
    getServices: getServices
}