const connectWallet = async () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return accounts[0];
    } catch (error) {
      alert('Erro ao conectar carteira: ' + error.message);
      return null;
    }
  } else {
    alert('Por favor, instale o MetaMask!');
    return null;
  }
};

// Index
if (document.getElementById('connect-wallet')) {
  document.getElementById('connect-wallet').addEventListener('click', async () => {
    await connectWallet();
  });
}

// Cadastro de DAO
if (document.getElementById('dao-form')) {
  document.getElementById('connect-wallet').addEventListener('click', async () => {
    const account = await connectWallet();
    if (account) {
      document.getElementById('admin-address').value = account;
    }
  });

  document.getElementById('dao-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const feedback = document.getElementById('feedback');
    feedback.textContent = 'Aguardando confirmação na blockchain...';
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      feedback.textContent = 'DAO criada com sucesso!';
    } catch (error) {
      feedback.textContent = 'Erro ao criar DAO: ' + error.message;
    }
  });
}

// Cadastro de Usuário
if (document.getElementById('user-form')) {
  document.getElementById('connect-wallet').addEventListener('click', async () => {
    const account = await connectWallet();
    if (account) {
      document.getElementById('user-address').value = account;
    }
  });

  document.getElementById('user-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const feedback = document.getElementById('feedback');
    feedback.textContent = 'Aguardando assinatura...';
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      feedback.textContent = 'Cadastro confirmado!';
    } catch (error) {
      feedback.textContent = 'Erro ao cadastrar: ' + error.message;
    }
  });
}

// Criar Proposta
if (document.getElementById('proposal-form')) {
  document.getElementById('connect-wallet').addEventListener('click', connectWallet);

  document.getElementById('add-option').addEventListener('click', () => {
    const optionsDiv = document.getElementById('vote-options');
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = `Opção ${optionsDiv.children.length + 1}`;
    newInput.required = true;
    optionsDiv.insertBefore(newInput, document.getElementById('add-option'));
  });

  document.getElementById('proposal-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const feedback = document.getElementById('feedback');
    feedback.textContent = 'Aguardando confirmação na blockchain...';
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      feedback.textContent = 'Proposta criada com sucesso!';
    } catch (error) {
      feedback.textContent = 'Erro ao criar proposta: ' + error.message;
    }
  });
}

// Votação
if (document.getElementById('vote-form')) {
  document.getElementById('connect-wallet').addEventListener('click', connectWallet);

  document.getElementById('vote-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const feedback = document.getElementById('feedback');
    feedback.textContent = 'Aguardando confirmação na blockchain...';
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      feedback.textContent = 'Voto registrado com sucesso!';
    } catch (error) {
      feedback.textContent = 'Erro ao votar: ' + error.message;
    }
  });
}

// Gerenciar DAO, Resultados, Perfil
if (document.getElementById('connect-wallet')) {
  document.getElementById('connect-wallet').addEventListener('click', connectWallet);
}