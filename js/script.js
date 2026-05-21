// Scroll suave para seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Manipular envio do formulário de contato
function handleContactForm(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    // Aqui você pode adicionar lógica para enviar para um servidor
    console.log('Formulário enviado:', { nome, email, mensagem });
    
    // Mostrar mensagem de sucesso
    alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
    
    // Limpar formulário
    event.target.reset();
}

// Teste de Autoavaliação
function openModal(modalId) {
    if (modalId === 'teste-modal') {
        alert('Teste de Autoavaliação:\n\n1. Como você se sente ultimamente?\n2. Tem dificuldade em dormir?\n3. Sente-se isolado?\n\nEste é um teste informativo. Para avaliação completa, consulte um profissional.');
    } else if (modalId === 'chat-modal') {
        alert('Chat de Apoio:\n\nVoluntários disponíveis para conversar de forma confidencial e empática. (Funcionalidade em desenvolvimento)');
    }
}

// Detectar scroll para efeitos
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Verificar se o navegador suporta Service Workers (para futura funcionalidade offline)
if ('serviceWorker' in navigator) {
    // Será implementado para modo offline
}

console.log('MenteSaudável - Site de Conscientização sobre Saúde Mental para Jovens');