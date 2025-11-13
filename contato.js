document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------------
    // LÓGICA DO FORMULÁRIO DE CONTATO COM REDIRECIONAMENTO PARA WHATSAPP
    // ------------------------------------------
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const submitButton = document.querySelector('.submit-button');
    const whatsappNumber = '5511975849265'; // Número do WhatsApp (sem espaços e caracteres especiais)

    if (!form) return; // Garante que o script só execute se o formulário existir

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do navegador

        // Coleta os dados do formulário
        const formData = new FormData(form);
        const name = formData.get('name') || '';
        const email = formData.get('email') || '';
        const subject = formData.get('subject') || '';
        const message = formData.get('message') || '';

        // Valida se os campos obrigatórios estão preenchidos
        if (!name || !email || !subject || !message) {
            formMessage.textContent = 'Por favor, preencha todos os campos obrigatórios.';
            formMessage.classList.add('error');
            formMessage.classList.remove('hidden');
            return;
        }

        // Mapeia os assuntos para texto legível
        const subjectMap = {
            'orcamento': 'Solicitação de Orçamento',
            'parceria': 'Parceria Comercial',
            'duvidas': 'Dúvidas Gerais'
        };
        const subjectText = subjectMap[subject] || subject;

        // Formata a mensagem para o WhatsApp
        const whatsappMessage = `Olá! Gostaria de entrar em contato com a MRRT.

*Informações do Contato:*
👤 Nome: ${name}
📧 E-mail: ${email}
📋 Assunto: ${subjectText}

*Mensagem:*
${message}

---
Enviado através do site MRRT`;

        // Codifica a mensagem para URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // Limpa mensagens e desabilita o botão
        formMessage.classList.add('hidden');
        formMessage.classList.remove('success', 'error');
        submitButton.disabled = true;
        submitButton.textContent = 'Redirecionando...';

        // Mostra mensagem de sucesso brevemente antes de redirecionar
        setTimeout(() => {
            formMessage.textContent = 'Redirecionando para o WhatsApp...';
            formMessage.classList.add('success');
            formMessage.classList.remove('hidden');

            // Redireciona para o WhatsApp após 1 segundo
            setTimeout(() => {
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
                window.open(whatsappUrl, '_blank');
                
                // Reseta o formulário e o botão
                form.reset();
                submitButton.disabled = false;
                submitButton.textContent = 'Enviar Mensagem';
                
                // Esconde a mensagem após 2 segundos
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                }, 2000);
            }, 1000);
        }, 500);
    });
});