minValue = 10
maxValue = 1000

def start():
    print('=' * 40)
    print('{:^40}'.format('#CAIXA 24 HORAS#'))
    print('=' * 40)

def newOperation():
    print('=' * 40)
    print('{:^40}'.format("DESEJA REALIZAR UM NOVO SAQUE? [S/N]"))
    print('=' * 40)
    option()
   
def option ():
    yesOrNo = input('[S/N]?\n').upper()
    if yesOrNo == 'S':
        cashOut()
    elif yesOrNo == 'N':
        end()
    else:
        print("POR FAVOR, SELECIONE UMA OPÇÃO VÁLIDA!")
        option()
    
def end():
    print('=' * 40)
    print('{:^40}'.format('#OPERAÇÃO FINALIZADA#'))
    print('=' * 40)
               
def countBallots(inputValue):
    ballots = [200, 100, 50, 20, 10, 5]
    coins = [1, 0.50, 0.25, 0.10, 0.05, 0.01]
    for ballot in ballots:
        nOfBallots = int(inputValue / ballot)
        if nOfBallots > 0: 
          print(f'{nOfBallots} nota(s) de R${ballot:.2f}')
        inputValue = inputValue % ballot
    else:
        for coin in coins:
            nOfCoins = int(inputValue / coin)
            if nOfCoins > 0:
                print(f'{nOfCoins} moeda(s) de R${coin:.2f}')
            inputValue = inputValue % coin
    
def cashOut():
    start()
    while True:
        print("VALOR MÍNIMO PARA SAQUE: R$ {}\nVALOR MÁXIMO PARA SAQUE: R$ {}".format(minValue, maxValue))
        inputValue = float(input('Digite o valor do seu saque: R$ '))
        if inputValue < minValue or inputValue > maxValue:
            print('Valor inválido!')
            print('=' * 40)
        else:
            break
    countBallots(inputValue)
    end()
    newOperation()

cashOut()




