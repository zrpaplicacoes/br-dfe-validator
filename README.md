# Validador de Chaves de Acesso de DFes (Documentos Fiscais Eletrônicos)

Uma **Chave de Acesso** é um identificador único que referencia um DFe (Documento Fiscal Eletrônico), controlado pela SEFAZ (Secretaria da Fazenda, órgão do governo que gerencia os DFes). Esta biblioteca valida apenas o formato da chave de acesso. Não é possível recuperar a informação ou confirmar a existência da chave de acesso através desta biblioteca.

Esta biblioteca possui zero dependências.

## Disclaimer

A implantação dessa biblioteca foi fortemente baseada [nesse repositório](https://github.com/vmarchesin/br-validate-dfe-access-key/tree/master).

```js
  import validateAccessKey from '@zrpaplicacoes/br-dfe-validator';

  validateAccessKey('35120859597245000190550000000095831710040056'); //true
  validateAccessKey('35-12/08-59.597.245/0001-90-55-000-000.009.583-171.004.005-6'); //true
  validateAccessKey('42100484684182000157550010000000020108042108'); //false
```

## Instalação

Com npm:

```bash
npm i -S @zrpaplicacoes/br-dfe-validator
```

Com yarn:

```bash
yarn add @zrpaplicacoes/br-dfe-validator
```

## Validações individuais

Para que a validação da chave de acesso seja feita, é necessário fazer várias validações menores em cada campo. A chave só será válida se todos os campos forem válidos. Também é possível fazer validações diretamente nos campos de forma individual:

```js
import validateAccessKey, { validate } from '@zrpaplicacoes/br-dfe-validator';

validateAccessKey('42100484684182000157550010000000020108042108'); //false
validate.uf('42'); //true
validate.aamm('1004'); //true
validate.cnpj('84684182000157'); //true
validate.model('55'); //true
validate.series('001'); //true
validate.number('000000002'); //true
validate.type('0'); //false
validate.code('010804210'); //true
```


## Configuração

É possível passar opções como o segundo argumento do método de validação.

* `describe`: Retorna um objeto com as validações individuais ao invés de um booleano.
> Todo campo possui as propriedades `isValid` e `value`.
>
> Para validar a chave de acesso a partir da descrição use:
>
> ```js
> validateAccessKey(accessKey, { describe: true })
>   .every(field => field.isValid)
> ```


```js
validateAccessKey('42100484684182000157550010000000020108042108', {
  describe: true,
}); /* {
  uf: {
    isValid: true,
    translation: 'Santa Catarina',
    value: '42'
  },
  aamm: {
    isValid: true,
    value: '1004'
  },
  ...
} */

```

## Campos contidos em uma chave de acesso

As chaves de acesso são únicas para cada documento, mas todas seguem um padrão. O valor semântico dos campos é diferente para cada tipo de documento, mas a sua distribuição ao longo dos 44 caracteres é quase sempre a mesma.

| Campo | NFC-e | NF-e | CF-e |
| --- | --- | --- | --- |
| Modelo | 65 | 55 | 59 |
| UF | ✔️ | ✔️ | ✔️ |
| AAMM | ✔️ | ✔️ | ✔️ |
| CNPJ | ✔️ | ✔️ | ✔️ |
| Série | 3 dígitos | 3 dígitos | 9 dígitos |
| Número | 9 dígitos | 9 dígitos | 6 dígitos |
| Tipo | ✔️ | ✔️ | ✖️ |
| Código | ✔️ | ✔️ | ✖️ |
| Código numérico aleatório | ✖️ | ✖️ | ✔️ |
| DV | ✔️ | ✔️ | ✔️ |


## Validações de outros tipos de DFE's

Por enquanto essa biblioteca aceita e suporta `Cupom Fiscal Eletrônico - CF-e`, `Nota Fiscal Eletrônica - NF-e` e `Nota Fiscal Eletrônica para Consumidor Final`. Apesar do layout de todos os DFes ser o mesmo, o valor semântico de cada campo é importante para a validação da chave.
**Por exemplo:** em uma NFe o campo **tpEmis** assume valores entre 1 e 5, porém em um CTe os valores 7 e 8 são válidos, e possuem significados diferentes.

Visto que existem vários tipos de DFe, com vários valores semânticos diferentes, a implementação da validação completa de todos os DFes se dará pela demanda de tal validação. Caso queira a validação de um DFe específico, faça uma contribuição ou abra uma Issue.

## Contribuições

Contribuições serão aceitas desde que acompanhadas da respectiva [Nota Técnica](http://www.nfe.fazenda.gov.br/portal/listaConteudo.aspx?tipoConteudo=tW+YMyk/50s=) que define a regra de validação. Contribuições serão aceitas para todos os tipos de DFe.

Contribuições que não possuam uma alta cobertura de testes não serão aceitas.

## Licença

Esta biblioteca está publicada sob a licença MIT, o que significa que você é livre para modificar e/ou reusar o código gratuitamente ou para fins comerciais. Se você fizer alterações a partir do código original por favor faça referência ao autor.
