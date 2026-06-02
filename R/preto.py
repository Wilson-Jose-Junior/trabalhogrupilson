import random
import string

def gerar_senha(tamanho):
    if tamanho < 4:
        return "A senha deve ter pelo menos 4 caracteres."

    senha = [
        random.choice(string.ascii_lowercase),  # minúscula
        random.choice(string.ascii_uppercase),  # maiúscula
        random.choice(string.digits),           # número
        random.choice(string.punctuation)       # símbolo
    ]

    caracteres = string.ascii_letters + string.digits + string.punctuation

    for _ in range(tamanho - 4):
        senha.append(random.choice(caracteres))

    random.shuffle(senha)

    return "".join(senha)

try:
    tamanho = int(input("Digite o tamanho da senha: "))
    print("\nSenha gerada:")
    print(gerar_senha(tamanho))
except ValueError:
    print("Por favor, digite um número válido.")