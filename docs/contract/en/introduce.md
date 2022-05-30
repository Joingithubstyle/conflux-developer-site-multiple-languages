---
id: contract_introduction
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/contract/en/introduce.md
keywords:
  - contract introduction
---
# Введение в смарт-контракты 

## Что такое смарт-контракт? 

Концепция смарт-контрактов была впервые предложена Ником Сабо в 1995 году. Смарт-контракт — это компьютерный протокол, предназначенный для распространения, проверки или исполнения контрактов в информационной форме. Смарт-контракты позволяют выполнять транзакции без доверенной третьей стороны, а транзакции отслеживаются и необратимы. 

Его цель — предоставить безопасный метод, который превосходит традиционные контракты и снижает другие транзакционные издержки, связанные с контрактами. 

Для сети Conflux «умный контракт» — это простая программа, которая работает в цепочке Conflux. Каждый экземпляр смарт-контракта представляет собой набор кода и данных, которые находятся по определенному адресу в цепочке Conflux. Поскольку состояние в блокчейне полностью детерминировано, операции со смарт-контрактами гарантированно приведут к одинаковым результатам на всех узлах блокчейна. Кроме того, поскольку смарт-контракты работают на блокчейне, характеристики децентрализации и защиты от несанкционированного доступа обеспечивают надежность и безопасность работы контракта. Поэтому на основе смарт-контрактов создается широкий спектр децентрализованных приложений (DApps), включая игры, цифровые предметы коллекционирования, системы онлайн-голосования, финансовые продукты и т. д. 

В цепочке Conflux есть два типа учетных записей: учетные записи пользователей и учетные записи смарт-контрактов. После развертывания смарт-контракта создается соответствующая учетная запись смарт-контракта. Учетные записи смарт-контрактов имеют баланс CFX, и они также могут взаимодействовать с другими учетными записями. Однако они контролируются не пользователями, а программой, развернутой в сети. Учетные записи пользователей могут взаимодействовать со смарт-контрактами, отправляя транзакции, которые выполняют функции, определенные в смарт-контракте. Смарт-контракт позволяет нам определять правила так же, как и традиционные контракты, и автоматизирует выполнение с помощью кодов. 

Nick Szabo использовал пример торгового автомата, чтобы описать, как реальные контрактные обязательства могут быть запрограммированы в программные и аппаратные системы. Каждый человек просто кладет в автомат нужное количество монет и может рассчитывать на получение товара взамен. Точно так же в Conflux смарт-контракт может выполнять определенную задачу и получать определенный результат при определенных условиях. 

## Пример

Давайте рассмотрим одну из простейших реализаций смарт-контракта торгового автомата. 

```js
pragma solidity ^0.8.0;

contract VendingMachine {

    // Declare state variables of the contract
    address public owner;
    mapping (address => uint) public cupcakeBalances;

    // Declare event for record purchase event
    event Purchase(address customer, uint amount);

    // When 'VendingMachine' contract is deployed:
    // 1. set the deploying address as the owner of the contract
    // 2. set the deployed smart contract's cupcake balance to 100
    constructor() {
        owner = msg.sender;
        cupcakeBalances[address(this)] = 100;
    }

    // Get user's cupcake balance
    function balanceOf(address user) public view returns(uint) {
        return cupcakeBalances[user];
    }

    // Allow the owner to increase the smart contract's cupcake balance
    function refill(uint amount) public {
        require(msg.sender == owner, "Only the owner can refill.");
        cupcakeBalances[address(this)] += amount;
    }

    // Allow anyone to purchase cupcakes
    function purchase(uint amount) public payable {
        require(msg.value >= amount * 1 ether, "You must pay at least 1 CFX per cupcake");
        require(cupcakeBalances[address(this)] >= amount, "Not enough cupcakes in stock to complete this purchase");
        cupcakeBalances[address(this)] -= amount;
        cupcakeBalances[msg.sender] += amount;
        emit Purchase(msg.sender,amount);
    }
}
```

Этот контракт имеет две функции: метод  `refill` позволяет администраторам пополнять продукты; метод `purchase` позволяет клиентам приобретать продукты с использованием токенов CFX. Точно так же, как торговые автоматы устраняют потребность в продавцах, смарт-контракты могут устранить посредников во многих отраслях. 

Смарт-контракт представляет собой набор кода  (contract function) и данных (contract state variables). Для линии `mapping (address => uint) public cupcakeBalances;` , он объявляет переменную состояния с именем cupcakeBalances и типом  `mapping (address => uint)`.  Вы можете увидеть это как таблицу в базе данных. При этом контрактные методы  `refill` а также   `purchase`используются для чтения или изменения состояния данных в этой таблице базы данных. 

Этот контракт написан на `solidity`, синтаксис которого похож на  `javascript`. 
-  `pragma solidity ^0.8.0;` указывает, что этот контракт должен быть составлен с `>=0.8.0<0.9.0` компилятором. 
-  контракт `VendingMachine` присваивает имя контракта как  `VendingMachine` ;
-  `address public owner;` определяет общедоступную переменную состояния с именем `owner`и прописываем `address`; 
-  `event Purchase(address customer, uint amount);` определяет  `event` с именем `Purchase`. `event` аналогична функции регистрации в других языках. Его роль в основном заключается в записи важной информации при выполнении контракта. Например,  `Purchase` это событие, которое создает запись о покупке, когда покупатель покупает товар. 
-  Это `constructor` действие выполняется ровно один раз при развертывании контракта; 
- Это `balanceOf` функция (отмечена как `view`) — это функция только для чтения, которую нельзя использовать для изменения состояния контракта; 
- `refill` function — это обычная функция, которую можно вызвать, отправив транзакцию. Эта функция изменит состояние контракта; 
 - `require(msg.sender == owner,..);` указывает, что только при условии `msg.sender == owner` выполняется (т. е. вызывающая сторона является администратором), состояние переменной контракта`cupcakeBalances` можно модифицировать для пополнения продуктов; 
-  `purchase` функция включает `payable`, указывающее, что вы можете отправлять CFX одновременно с вызовом функции. Поскольку клиентам необходимо заплатить CFX за покупку, он помечен как  `payable`.
 - `require(msg.value >= amount * 1 ether,..)` указывает, что для завершения покупки необходимо заплатить полную сумму CFX. 
 - Количество продуктов в торговых автоматах уменьшается после успешной покупки и количество товаров, принадлежащих покупателям (обозначено `cupcakeBalances[msg.sender]`) увеличивается. 

После написания контракта вам нужно сначала скомпилировать контракт, а затем развернуть его в цепочке Conflux, отправив  [transaction](https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions).  Затем вы можете взаимодействовать с контрактом, вызвав его. 

Как только контракт развернут, любой может вызвать его. Однако состояние контракта будет изменено только при выполнении определенного условия. 

Дополнительные инструкции по языку Solidity смотрим на [the official Solidity Documentation](https://docs.soliditylang.org/en/v0.8.4/)

Далее мы представим процесс компиляции, развертывания, вызова и выполнения контракта. 

### Компиляция 

Компиляция контракта — это процесс создания элементов, необходимых при развертывании контракта, из кода контракта с помощью компилятора. Результат компиляции состоит из двух основных частей:  `abi` так же `bytecode`. 

- Байт-код: смарт-контракты выполняются на виртуальной машине Ethereum (EVM). Байт-код — это шестнадцатеричное значение, соответствующее контракту, который может распознать EVM. 

- ABI: ABI относится к бинарному интерфейсу приложения, который описывает имя функции, модификатор, видимость, имя параметра и его тип, возвращает имя значения и его тип, а также описание событий в открытом интерфейсе контракта (в формате JSON). Когда мы вызываем функцию контракта извне и кодируем ее определенным образом на основе описания функции в ABI, мы можем получить значение, которое EVM сможет распознать и отобразить в шестнадцатеричном формате. Это значение можно использовать для взаимодействия с контрактом. 

Вы можете использовать  `solc`, [conflux-truffle](https://github.com/Conflux-Chain/conflux-truffle) для компиляции смарт-контракта. 

Здесь мы берем solc в качестве примера 

Установить  solc

```sh
npm install -g solc
```

> Внимание: Версия компилятора должна совпадать с версией указанной в контракте, для скачивания версии v0.6.12 используйте `npm install -g solc@v0.6.12`

Компиляция

```
solcjs ./VendingMachine.sol --bin --abi
```

Генерация  `bytecode` файла  `__...VendingMachine.bin` and `abi` file `__...VendingMachine.abi`

`__...VendingMachine.bin`
```
60806040523480156100...bfea2646970667358221220761301cb41bc1e4c37cc823f17fd695c6c09521a3e09fe1e8a7c51f6e77181a464736f6c63430008000033
```

`__...VendingMachine.abi`
```json
[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "customer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Purchase",
      "type": "event"
    },
    ......
  ]
```


### Развертывание
Развертывание контракта — это создание экземпляра контракта в блокчейне Conflux путем отправки [transaction](https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions) с `data` в качестве  `bytecode` а так же  `to` оставляя пустым. 

> Если конструктор содержит параметры, `data`должно быть сочетание `bytecode` и кодировки ABI `constructor`.

Мы будем использовать `js-conflux-sdk` для демонстрации. 

```js
const { Conflux } = require("js-conflux-sdk");

(async function () {
    const cfx = await Conflux.create({ url: "https://test.confluxrpc.com" })
    const account = cfx.wallet.addPrivateKey("0x2139FB4C55CB9AF7F0086CD800962C2E9013E2292BAE77978A9209E3BEE71D49")

    // your bytecode
    let bytecode = "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffff......0008000033"

    let deployReceipt = await cfx.sendTransaction({
        from: account.address,
        data: bytecode
    }).executed()

    // or use contract instance
    // let vendingMachine = cfx.Contract({ bytecode })
    // let deployReceipt = await vendingMachine.constructor().sendTransaction({from:account.address}).executed()

    console.log("deploy tx receipt:", deployReceipt)
})()

```

Как показано в приведенном выше примере, контракт развертывается после отправки [transaction](https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions) с данными в виде байт-кода. Это `contractCreated` поле с `transaction receipt` и адрес контракта после развертывания. 

```js
deploy tx receipt: {
  blockHash: '0xe1b7f118447d3f945db4c2cf5752e592e542d4b9d24d0312b4ca5fce925c1ae5',
  contractCreated: 'CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0',
  epochNumber: 27675623,
  from: 'CFXTEST:TYPE.USER:AAP9KTHVCTUNVF030RBKK9K7ZBZYZ12DAJP1U3SP4G',
  gasCoveredBySponsor: false,
  gasFee: 646047n,
  gasUsed: 646047n,
  index: 1,
  logs: [],
  logsBloom: '0x...',
  outcomeStatus: 0,
  stateRoot: '0xd2ada6e3c04d6e8260446deaf1b8289d57ba84e2d82387155bbb397be93e2a30',
  storageCollateralized: 1664n,
  storageCoveredBySponsor: false,
  storageReleased: [],
  to: null,
  transactionHash: '0xe19d8a7527a7f655f0325374a5d483ed4459f465a2f7f9d3ac9a23a548eac5c4',
  txExecErrorMsg: null
}
```

Пример прямой отправки [transaction](https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions) для демонстрации. Если конструктор контракта содержит параметры, лучше использовать инструменты разработки контрактов, такие как [`js-conflux-sdk` `contract`](https://github.com/Conflux-Chain/js-conflux-sdk/blob/master/docs/interact_with_contract.md) а так же [`conflux-truffle`](https://github.com/Conflux-Chain/conflux-truffle) развертывания. 

### Вызов смарт-контрактов 

После развертывания контракта вы можете взаимодействовать с контрактом. Есть два способа: 

- Звонок через RPC  `cfx_call`: этот тип вызова контракта выполняется только в EVM, но фактически не меняет состояние. Обычно это используется для вызова функций контракта только для чтения или для имитации выполнения транзакции, чтобы увидеть, может ли она быть выполнена успешно. 

- Отправка  [transaction](https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions): этот тип вызова контракта изменит состояние контракта при выполнении. 

Данные, используемые при вызове контракта, генерируются  [ABI encoding](https://docs.soliditylang.org/en/develop/abi-spec.html) а основе функциональной информации, описанной ABI. Первые 4 байта — это селектор функции (первые 4 байта хэша Keccak (SHA-3) сигнатуры функции), а пятый байт начинается с параметра, закодированного в ABI. 

Мы будем использовать js-conflux-sdk для демонстрации. 

```js
const { Conflux } = require("js-conflux-sdk");

(async function () {
    const cfx = await Conflux.create({ url: "https://test.confluxrpc.com", logger: console })
    const me = cfx.wallet.addPrivateKey("0x2139FB4C55CB9AF7F0086CD800962C2E9013E2292BAE77978A9209E3BEE71D49")

    const abi = [...]
    const contract = cfx.Contract({ address: "CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0", abi })
    let myBalance = await contract.balanceOf(me.address)
    console.log("my cupcake balance :", myBalance)

    const receipt = await contract.purchase(2).sendTransaction({ from: me.address, value: 2e18 }).executed()
    console.log("purchase receipt", receipt)

    const event = contract.abi.decodeLog(receipt.logs[0])
    console.log("purchase event:", event)

    myBalance = await contract.balanceOf(me.address)
    console.log("after purchase, my cupcake balance :", myBalance)
})()
```
Из журнала мы видим, что соответствующая информация RPC `contract.cupcakeBalances(me.address)` состоит из следущего.

```js
{
  data: {
    jsonrpc: '2.0',
    id: '1794b9e755639b5164925a8e',
    method: 'cfx_call',
    params: [
      {
        to: 'CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0',
        data: '0xe18a7b9200000000000000000000000019f4bcf113e0b896d9b34294fd3da86b4adf0302'
      },
      undefined
    ]
  },
  result: '0x0000000000000000000000000000000000000000000000000000000000000000',
  duration: 33
}
```
метод rpc `cfx_call`, данные являются результатом  `function selector + ABI-encoded result of parameter list`. Первые 4 байта  `0xe18a7b92` это функция селектор функций `balanceOf`.  Вычисление принимает операцию keccak `keccak256("balanceOf(address)")` в попдиси  `balanceOf(address)` из `balanceOf` а затем берет первые 4 байта.  `00000000000000000000000019f4bcf113e0b896d9b34294fd3da86b4adf0302`ABI-кодированное значение параметра `0x19f4bcf113e0b896d9b34294fd3da86b4adf0302`

Возвращаемое значение `0x0000000000000000000000000000000000000000000000000000000000000000`, что является результатом ABI-кодированного значения `uint`этого типа.

Метод RPC для  `purchase` является `cfx_sendRawTransaction`,который отправляет [transaction](https://developer.confluxnetwork.org/introduction/en/conflux_basics#transactions). Это изменит состояние контракта. Метод кодирования данных транзакции также `function selector + ABI-encoded result of parameter list`.Вы можете проверить это через  getTransactionByHash 

```json
{
  "jsonrpc": "2.0",
  "result": {
    "data": "0xefef39a10000000000000000000000000000000000000000000000000000000000000002",
    "hash": "0x2c188c67247d7e2bf12fb96f17ced61da8ea4143447887a10a2cc597c1fa66e1",
    "to": "CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0",
    "value": "0x1bc16d674ec80000"
    ...
  },
  "id": 1
}
```

Мы видим запись из  `logs` поле`transaction receipt`. `logs` указать событие, которое произошло в транзакции

```js
purchase receipt {
  blockHash: '0x3d4111b299e65c279184aa83021e59f9d134baa9c78969dd6d94a92bfbd340df',
  contractCreated: null,
  epochNumber: 27677382,
  from: 'CFXTEST:TYPE.USER:AAP9KTHVCTUNVF030RBKK9K7ZBZYZ12DAJP1U3SP4G',
  ......
  logs: [
    {
      address: 'CFXTEST:TYPE.CONTRACT:ACCYSPEUUR469BCA0EXRFXKXMKX651W45JFW2RN5M0',
      data: '0x00000000000000000000000019f4bcf113e0b896d9b34294fd3da86b4adf03020000000000000000000000000000000000000000000000000000000000000002',
      topics: [Array]
    }
  ],
}
```

Результат анализа событий 

```js
purchase event: {
  name: 'Purchase',
  fullName: 'Purchase(address customer, uint256 amount)',
  type: 'Purchase(address,uint256)',
  signature: '0x2499a5330ab0979cc612135e7883ebc3cd5c9f7a8508f042540c34723348f632',
  array: [ 'cfxtest:aap9kthvctunvf030rbkk9k7zbzyz12dajp1u3sp4g', 2n ],
  object: {
    customer: 'cfxtest:aap9kthvctunvf030rbkk9k7zbzyz12dajp1u3sp4g',
    amount: 2n
  }
}
```
Это указывает на то, что один `Purchase`событие произошло, клиент  `cfxtest:aap9kthvctunvf030rbkk9k7zbzyz12dajp1u3sp4g`, количество 2. 

После  `purchase` завершено,  `cupcakeBalances[0x19f4bcf113e0b896d9b34294fd3da86b4adf0302]` изменился с 0 на 2. Состояние изменилось. 
```js
{
  data: {
    jsonrpc: '2.0',
    id: '179a19eb98ed23dda1d1d516',
    method: 'cfx_call',
    params: [ [Object], undefined ]
  },
  result: '0x0000000000000000000000000000000000000000000000000000000000000002',
  duration: 30
}
```

> Внимание: при развертывании или вызове контрактов в цепочке Conflux, если в контракте занято новое место для хранения, некоторые CFX будут обеспечены за занятое пространство; эта сумма будет возвращена после освобождения хранилища. Для получения дополнительной информации посетите [storage collateral mechanism of Conflux](https://juejin.cn/post/6855551378123653127). 


## Дополнительные ресурсы 

Помимо solidity, вы также можете использовать vyper для разработки смарт-контрактов.
- [Solidity](https://docs.soliditylang.org/en/v0.8.4/)
- [Vyper](https://vyper.readthedocs.io/en/stable/)

Conflux также предлагает более удобные и эффективные интеллектуальные инструменты разработки для разработчиков. 
- [Conflux-Truffle](https://github.com/Conflux-Chain/conflux-truffle)

Другие 
- [Introduction of Conflux basic concepts](https://developer.conflux-chain.org/introduction/en/conflux_basics)
- [Ethereum's introduction of smart contract](https://ethereum.org/zh/developers/docs/smart-contracts/)
