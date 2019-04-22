function obterUsuario(callback){
	setTimeout(function(){ 
		return callback(null, {
			id: 1,
			nome: 'Aladin',
			dataNascimento: new Date()
		})
	}, 1000)
}

function obterTelefone(idUsuario, callback){
	setTimeout(function(){
		return callback(null, {
			telefone: '999999999',
			ddd: 81
		})
	}, 2000)
}

function obterEndereco(idUsuario, callback){
	setTimeout(function(){
		return callback(null, {
			rua: 'Rua Poraque',
			numero: 0
		});
	}, 2000)
}

function resolverUsuario (erro, usuario){
	console.log('usuario: ', usuario);
}

obterUsuario(function resolverUsuario(error, usuario){
	if(error){
		console.error('Não temos usuário', error);
		return;
	}

	obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
		if(error1){
			console.error('Usuario nao possui telefone', error1);
			return;
		}

		obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
			if(error2){
				console.error('Usuario nao possui endereco', error2)
				return;
			}

			console.log(`
				Nome: ${usuario.nome},
				Endereco: ${endereco.rua}, numero ${endereco.numero},
				Telefone: ${telefone.ddd} - ${telefone.telefone}
			`)
		})
	})
})

// const usuario = obterUsuario();
// const telefone = obterTelefone(usuario.id);

// console.log('usuario: ', usuario);
// console.log('telefone: ', telefone);