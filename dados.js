const tabela = document.querySelector('.tabela-js')
axios.get('https://apiaulas.enzobiason7.repl.co/funcionarios').then(function (resposta) {
    getData(resposta.data)
}).catch(function (error) {
    console.log(error)
})

function getData(dados) {
    dados.map((item) => {
        tabela.innerHTML += `
            <tr>
                <th scope="row">${item.id}</th>
                <td>${item.tarefa}</td>
                td>${item.editar/excluir}</td>
                
                <td> 
                <span class="material-symbols-outlined icon">
                    delete
                </span>
                <span class="material-symbols-outlined icon-2">
                edit
                </span> </td>
             </tr>
               
                `
    })
}
