import { LegalShell } from '@/components/LegalShell';
import { locales } from '@/lib/i18n/config';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Locale } from '@/lib/i18n/config';
import type { Metadata } from 'next';

const NON_EN_LOCALES = locales.filter(l => l !== 'en');

export function generateStaticParams() {
  return NON_EN_LOCALES.map(lang => ({ lang }));
}

const META: Record<string, { title: string; description: string }> = {
  pt: {
    title: 'Política de Pagamento | Pocket Option',
    description: 'Leia a Política de Pagamento da Pocket Option. Saiba sobre depósitos, saques, prazos de processamento, verificação e pagamento com um clique.',
  },
  es: {
    title: 'Política de Pagos | Pocket Option',
    description: 'Lea la Política de Pagos de Pocket Option. Conozca los depósitos, retiros, tiempos de procesamiento, verificación y el servicio de pago con un clic.',
  },
  ru: {
    title: 'Политика платежей | Pocket Option',
    description: 'Ознакомьтесь с Политикой платежей Pocket Option. Узнайте о депозитах, выводах, сроках обработки, верификации и оплате в один клик.',
  },
  id: {
    title: 'Kebijakan Pembayaran | Pocket Option',
    description: 'Baca Kebijakan Pembayaran Pocket Option. Pelajari tentang setoran, penarikan, waktu pemrosesan, verifikasi, dan layanan pembayaran satu klik.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const m = META[lang] ?? META.pt;
  return {
    title: { absolute: m.title },
    description: m.description,
    openGraph: { title: m.title, description: m.description },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description },
    ...buildSeoMeta(lang, 'payment-policy'),
  };
}

type Section = { num: string; title: string; items: string[] };
type LangContent = {
  pageTitle: string; home: string; page: string; updated: string; contentsLabel: string;
  sections: Section[];
};

const CONTENT: Record<string, LangContent> = {
  pt: {
    pageTitle: 'Política de Pagamento', home: 'Início', page: 'Política de Pagamento',
    updated: 'Última atualização: 17 de março de 2026', contentsLabel: 'Conteúdo',
    sections: [
      {
        num: '1', title: 'Responsabilidade Financeira Geral',
        items: [
          'A Empresa é financeiramente responsável pelo saldo da conta do cliente em qualquer momento.',
          'A responsabilidade financeira da Empresa começa com o primeiro registo de depósito de um cliente e continua até ao levantamento total dos fundos.',
          'O cliente tem o direito de exigir da Empresa qualquer valor de fundos disponíveis na sua conta no momento do pedido.',
          'Os únicos métodos oficiais de depósito e levantamento são os métodos que aparecem no website oficial da Empresa. O cliente assume todos os riscos relacionados com o uso desses métodos de pagamento. A Empresa não é responsável por qualquer atraso ou cancelamento de uma transação causado pelo método de pagamento.',
          'A Empresa não assume qualquer responsabilidade pela atividade de prestadores de serviços de terceiros que o cliente possa usar para fazer um depósito ou levantamento. Em caso de deteção de fraude durante ou após uma transação financeira, a Empresa reserva-se o direito de cancelar tal transação e congelar a conta do cliente.',
          'Em caso de erros técnicos relacionados com transações financeiras, a Empresa reserva-se o direito de cancelar tais transações e os seus resultados.',
          'O cliente só pode ter uma conta registada no website da Empresa. Em caso de deteção de duplicação de contas, a Empresa reserva-se o direito de congelar as contas e os fundos do cliente sem direito a levantamento.',
        ],
      },
      {
        num: '2', title: 'Registo e Verificação de Clientes',
        items: [
          'O registo de clientes baseia-se em duas etapas principais: (1) Registo web do cliente, e (2) Verificação de identidade do cliente. Para concluir o registo, o cliente deve fornecer à Empresa os seus dados de identidade reais e detalhes de contacto, e aceitar os acordos da Empresa.',
          'A Empresa realiza um procedimento de verificação de identidade e dados para confirmar a correção e completude dos dados fornecidos pelo cliente durante o registo. Para este procedimento, o cliente é obrigado a fornecer uma digitalização ou fotografia digital do seu documento de identificação, incluindo uma cópia completa de todas as páginas do documento.',
          'A Empresa reserva-se o direito de solicitar ao cliente quaisquer outros documentos, como faturas de pagamento, confirmação bancária, digitalizações de cartão bancário ou qualquer outro documento necessário durante o processo de identificação. O processo de identificação deve ser concluído no prazo de 10 dias úteis a partir do pedido da Empresa, podendo ser alargado até 30 dias úteis.',
        ],
      },
      {
        num: '3', title: 'Depósitos',
        items: [
          'Para efetuar um depósito, o cliente deve submeter um pedido através do seu Gabinete Pessoal, escolhendo um dos métodos de pagamento disponíveis, preenchendo todos os detalhes necessários e procedendo ao pagamento.',
          'Todas as transações efetuadas pelo cliente devem ser realizadas através de uma fonte de pagamento pertencente exclusivamente ao cliente, que efetua o pagamento com os seus próprios fundos.',
          'A responsabilidade financeira da Empresa pelos fundos do cliente começa apenas quando os fundos foram carregados com sucesso para a conta bancária da Empresa ou qualquer outra conta relacionada com os métodos de pagamento listados no website da Empresa.',
        ],
      },
      {
        num: '4', title: 'Processamento de Levantamentos',
        items: [
          'O tempo de processamento de pedidos de levantamento depende do método de pagamento e pode variar de um método para outro. A Empresa não pode regular o tempo de processamento de fornecedores de pagamento de terceiros.',
          'No caso de utilização de métodos de pagamento eletrónico, o tempo de transação pode variar de segundos a dias. No caso de transferência bancária direta, o tempo de transação pode variar de 3 a 45 dias úteis.',
          'Os levantamentos, reembolsos, compensações e outros pagamentos realizados a partir da conta do cliente só podem ser feitos utilizando a mesma conta — bancária ou cartão de pagamento — que foi utilizada para depositar os fundos. O levantamento da conta só pode ser realizado na mesma moeda em que o depósito correspondente foi efetuado.',
          'A Empresa não é agente fiscal e não fornece informações financeiras dos clientes a terceiros. Esta informação só pode ser fornecida em caso de pedido oficial de agências governamentais.',
        ],
      },
      {
        num: '5', title: 'Regulamentos de Levantamento',
        items: [
          'Em qualquer momento, o cliente pode levantar parte ou todos os fundos da sua conta enviando à Empresa um Pedido de Levantamento. A Empresa executará a ordem de levantamento limitada pelo saldo restante da conta do cliente no momento da execução da ordem.',
          'A ordem do cliente para levantar dinheiro deve cumprir os requisitos e restrições estabelecidos pela legislação vigente e outras disposições aplicáveis na jurisdição onde tal transação é efetuada.',
          'Os fundos da conta do cliente devem ser levantados para o mesmo sistema de pagamento com o mesmo ID de carteira/conta que foi anteriormente utilizado pelo cliente para depositar fundos.',
          'Um Pedido de Levantamento é executado mediante a transferência dos fundos para a Conta Externa do cliente por um Agente autorizado pela Empresa.',
          'O cliente deve efetuar um Pedido de Levantamento na moeda do depósito. Se a moeda do depósito for diferente da moeda de transferência, a Empresa converterá o valor à taxa de câmbio estabelecida pela Empresa no momento em que os fundos são debitados da conta do cliente.',
          'A taxa de conversão, comissão e outras despesas relacionadas com cada método de levantamento são definidas pela Empresa e podem ser alteradas em qualquer momento a critério exclusivo da Empresa.',
          'A Empresa reserva-se o direito de definir valores mínimos e máximos de levantamento dependendo do método de levantamento. Estas restrições serão exibidas no Dashboard do cliente.',
          'Os fundos serão levantados da conta do cliente no prazo de cinco (5) dias úteis. Se os fundos não chegarem à Conta Externa do cliente após cinco (5) dias úteis, o cliente pode pedir à Empresa que investigue a transferência.',
          'Se o cliente cometeu um erro nas informações de pagamento ao elaborar um Pedido de Levantamento que resultou numa falha na transferência de dinheiro, o cliente será responsável por cobrir a comissão para resolver a situação.',
          'O lucro do cliente em excesso dos fundos depositados só pode ser transferido para a Conta Externa do cliente por um método acordado entre a Empresa e o cliente.',
        ],
      },
      {
        num: '6', title: 'Transferências Bancárias e Eletrónicas',
        items: [
          'Levantamentos por transferência bancária: O cliente pode enviar um Pedido de Levantamento por transferência bancária em qualquer momento, se a Empresa aceitar este método. O cliente só pode fazer um Pedido de Levantamento para uma conta bancária aberta em seu nome. A Empresa não aceitará nem executará ordens de transferência de dinheiro para uma conta bancária de terceiros. O cliente compreende e concorda que a Empresa não assume qualquer responsabilidade pelo tempo que uma transferência bancária demora.',
          'Transferências eletrónicas: O cliente pode enviar um Pedido de Levantamento por transferência eletrónica em qualquer momento, se a Empresa utilizar este método. O cliente só pode fazer um Pedido de Levantamento para a sua carteira pessoal do sistema de pagamento eletrónico. A Empresa deve enviar o dinheiro para a conta eletrónica do cliente de acordo com as informações no Pedido de Levantamento.',
          'O cliente compreende e reconhece que a Empresa não é responsável pelo tempo que uma transferência eletrónica demora ou por circunstâncias resultantes de uma falha técnica durante a transferência que não seja por culpa da Empresa. A Empresa pode, a seu critério, oferecer ao cliente outros métodos de levantamento de dinheiro, que serão publicados no Dashboard.',
        ],
      },
      {
        num: '7', title: 'Serviço de Pagamento com Um Clique',
        items: [
          'Ao preencher o formulário de pagamento com as informações do seu cartão bancário, selecionar a opção "Guardar o cartão" e clicar no botão de confirmação de pagamento, fornece o seu consentimento pleno às regras do serviço de Pagamento com Um Clique (pagamentos recorrentes). Autoriza o prestador de serviços de pagamento a debitar automaticamente fundos do seu cartão bancário para recarregar o saldo da sua conta.',
          'Reconhece e concorda que uma confirmação do seu uso do serviço de Pagamento com Um Clique será enviada para o seu e-mail no prazo de dois (2) dias úteis.',
          'Ao utilizar o serviço de Pagamento com Um Clique, concorda em cobrir todos os custos associados a este serviço, incluindo quaisquer despesas adicionais como impostos, taxas e outras tarifas.',
          'Ao utilizar o serviço de Pagamento com Um Clique, confirma que é o proprietário legítimo ou utilizador autorizado do cartão bancário utilizado para este serviço. Também concorda em não contestar quaisquer pagamentos efetuados do seu cartão bancário à Empresa para recarregar o saldo da sua conta.',
          'Assume total responsabilidade por todos os pagamentos efetuados para recarregar o saldo da sua conta com a Empresa. A Empresa e/ou o prestador de serviços de pagamento processará pagamentos apenas pelo valor especificado por si.',
          'Uma vez clicado o botão de confirmação de pagamento, o pagamento é considerado processado e irrevogável. Ao clicar no botão de confirmação de pagamento, concorda que não pode rescindir o pagamento nem solicitar um reembolso.',
          'Confirma que o serviço de Pagamento com Um Clique permanecerá ativo até que o cancele. Para desativar o serviço, pode fazê-lo acedendo ao Dashboard e removendo as informações do seu cartão bancário da lista de cartões guardados.',
          'O prestador de serviços de pagamento não é responsável por qualquer recusa ou incapacidade de processar as informações do seu cartão de pagamento, incluindo situações em que o banco emissor recusa a autorização.',
        ],
      },
    ],
  },

  es: {
    pageTitle: 'Política de Pagos', home: 'Inicio', page: 'Política de Pagos',
    updated: 'Última actualización: 17 de marzo de 2026', contentsLabel: 'Contenido',
    sections: [
      {
        num: '1', title: 'Responsabilidad Financiera General',
        items: [
          'La Empresa es financieramente responsable del saldo de la cuenta del cliente en cualquier momento.',
          'La responsabilidad financiera de la Empresa comienza con el primer registro de depósito de un cliente y continúa hasta el retiro total de los fondos.',
          'El cliente tiene derecho a exigir a la Empresa cualquier cantidad de fondos disponibles en su cuenta en el momento de la solicitud.',
          'Los únicos métodos oficiales de depósito y retiro son los métodos que aparecen en el sitio web oficial de la Empresa. El cliente asume todos los riesgos relacionados con el uso de estos métodos de pago. La Empresa no es responsable de ningún retraso o cancelación de una transacción causada por el método de pago.',
          'La Empresa no asume ninguna responsabilidad por la actividad de proveedores de servicios de terceros que el cliente pueda usar para realizar un depósito o retiro. En caso de detectarse fraude durante o después de una transacción financiera, la Empresa se reserva el derecho de cancelar dicha transacción y congelar la cuenta del cliente.',
          'En caso de errores técnicos relacionados con transacciones financieras, la Empresa se reserva el derecho de cancelar dichas transacciones y sus resultados.',
          'El cliente solo puede tener una cuenta registrada en el sitio web de la Empresa. En caso de que la Empresa detecte duplicación de cuentas, se reserva el derecho de congelar las cuentas y fondos del cliente sin derecho a retiro.',
        ],
      },
      {
        num: '2', title: 'Registro y Verificación de Clientes',
        items: [
          'El registro de clientes se basa en dos pasos principales: (1) Registro web del cliente, y (2) Verificación de identidad del cliente. Para completar el registro, el cliente debe proporcionar a la Empresa sus datos de identidad reales y detalles de contacto, y aceptar los acuerdos de la Empresa.',
          'La Empresa lleva a cabo un procedimiento de verificación de identidad y datos para confirmar la corrección y completitud de los datos especificados por el Cliente durante el registro. Para este procedimiento, el cliente está obligado a proporcionar un escáner o foto digital de su documento de identidad, incluyendo una copia completa de todas las páginas del documento.',
          'La Empresa se reserva el derecho de solicitar al cliente cualquier otro documento, como recibos de pago, confirmación bancaria, escáneres de tarjeta bancaria o cualquier otro documento necesario durante el proceso de identificación. El proceso de identificación debe completarse dentro de los 10 días hábiles desde la solicitud de la Empresa, pudiendo ampliarse hasta 30 días hábiles.',
        ],
      },
      {
        num: '3', title: 'Depósitos',
        items: [
          'Para realizar un depósito, el cliente debe enviar una solicitud a través de su Gabinete Personal, eligiendo uno de los métodos de pago disponibles, completando todos los detalles necesarios y procediendo con el pago.',
          'Todas las transacciones realizadas por el Cliente deben ejecutarse a través de una fuente de pago perteneciente exclusivamente al Cliente, quien realiza el pago con sus propios fondos.',
          'La responsabilidad financiera de la Empresa por los fondos del cliente comienza únicamente cuando los fondos se han cargado exitosamente a la cuenta bancaria de la Empresa o cualquier otra cuenta relacionada con los métodos de pago listados en el sitio web de la Empresa.',
        ],
      },
      {
        num: '4', title: 'Procesamiento de Retiros',
        items: [
          'El tiempo de procesamiento de las solicitudes de retiro depende del método de pago y puede variar de un método a otro. La Empresa no puede regular el tiempo de procesamiento de los proveedores de pago de terceros.',
          'En caso de usar métodos de pago electrónico, el tiempo de transacción puede variar de segundos a días. En caso de usar transferencia bancaria directa, el tiempo de transacción puede variar de 3 a 45 días hábiles.',
          'Los retiros, reembolsos, compensaciones y otros pagos realizados desde la cuenta del cliente solo pueden hacerse utilizando la misma cuenta — bancaria o tarjeta de pago — que se usó para depositar los fondos. El retiro de la cuenta solo puede realizarse en la misma moneda en que se realizó el depósito correspondiente.',
          'La Empresa no es agente fiscal y no proporciona información financiera de los clientes a terceros. Esta información solo puede proporcionarse en caso de solicitud oficial de agencias gubernamentales.',
        ],
      },
      {
        num: '5', title: 'Regulaciones de Retiro',
        items: [
          'En cualquier momento, un Cliente puede retirar parte o todos los fondos de su Cuenta enviando a la Empresa una Solicitud de Retiro. La Empresa ejecutará la orden de retiro limitada por el saldo restante de la Cuenta del Cliente al momento de la ejecución.',
          'La orden del cliente para retirar dinero debe cumplir con los requisitos y restricciones establecidos por la legislación vigente y otras disposiciones aplicables en la jurisdicción donde se realiza la transacción.',
          'Los fondos de la Cuenta del Cliente deben retirarse al mismo sistema de pago con el mismo ID de billetera/cuenta que fue utilizado previamente por el Cliente para depositar fondos.',
          'Una Solicitud de Retiro se ejecuta transfiriendo los fondos a la Cuenta Externa del Cliente por un Agente autorizado por la Empresa.',
          'El Cliente debe hacer una Solicitud de Retiro en la moneda del depósito. Si la moneda del depósito es diferente a la moneda de transferencia, la Empresa convertirá el monto de transferencia a la tasa de cambio establecida por la Empresa al momento en que los fondos son debitados de la Cuenta del Cliente.',
          'La tasa de conversión, comisión y otros gastos relacionados con cada método de retiro son establecidos por la Empresa y pueden cambiarse en cualquier momento a discreción exclusiva de la Empresa.',
          'La Empresa se reserva el derecho de establecer montos mínimos y máximos de retiro según el método de retiro. Estas restricciones se mostrarán en el Dashboard del Cliente.',
          'Los fondos se retirarán de la Cuenta del Cliente dentro de los cinco (5) días hábiles. Si los fondos no han llegado a la Cuenta Externa del Cliente después de cinco (5) días hábiles, el Cliente puede pedirle a la Empresa que investigue la transferencia.',
          'Si el Cliente cometió un error en la información de pago al elaborar una Solicitud de Retiro que resultó en un fallo al transferir el dinero, el Cliente pagará una comisión para resolver la situación.',
          'El beneficio del Cliente en exceso de los fondos depositados solo puede transferirse a la Cuenta Externa del Cliente mediante un método acordado entre la Empresa y el Cliente.',
        ],
      },
      {
        num: '6', title: 'Transferencias Bancarias y Electrónicas',
        items: [
          'Retiros por transferencia bancaria: El Cliente puede enviar una Solicitud de Retiro por transferencia bancaria en cualquier momento si la Empresa acepta este método. El Cliente solo puede hacer una Solicitud de Retiro a una cuenta bancaria abierta a su nombre. La Empresa no aceptará ni ejecutará órdenes de transferir dinero a una cuenta bancaria de terceros. El Cliente entiende y acepta que la Empresa no asume responsabilidad por el tiempo que tarda una transferencia bancaria.',
          'Transferencias electrónicas: El Cliente puede enviar una Solicitud de Retiro por transferencia electrónica en cualquier momento si la Empresa usa este método. El Cliente solo puede hacer una Solicitud de Retiro a su billetera personal del sistema de pago electrónico. La Empresa debe enviar el dinero a la cuenta electrónica del Cliente de acuerdo con la información en la Solicitud de Retiro.',
          'El Cliente entiende y reconoce que la Empresa no es responsable por el tiempo que tarda una transferencia electrónica ni por circunstancias que resulten en un fallo técnico durante la transferencia que no sea por culpa de la Empresa. La Empresa puede, a su discreción, ofrecer al Cliente otros métodos de retiro, que se publicarán en el Dashboard.',
        ],
      },
      {
        num: '7', title: 'Servicio de Pago con Un Clic',
        items: [
          'Al completar el formulario de pago con la información de su tarjeta bancaria, seleccionar la opción "Guardar la tarjeta" y hacer clic en el botón de confirmación de pago, usted otorga su consentimiento completo a las reglas del servicio de Pago con Un Clic (pagos recurrentes). Autoriza al proveedor de servicios de pago a debitar automáticamente fondos de su tarjeta bancaria para recargar el saldo de su cuenta.',
          'Reconoce y acepta que una confirmación de su uso del servicio de Pago con Un Clic se enviará a su correo electrónico dentro de dos (2) días hábiles.',
          'Al usar el servicio de Pago con Un Clic, acepta cubrir todos los costos asociados con este servicio, incluyendo cualquier gasto adicional como impuestos, aranceles y otras tarifas.',
          'Al usar el servicio de Pago con Un Clic, confirma que es el propietario legítimo o usuario autorizado de la tarjeta bancaria utilizada para este servicio. También acepta no disputar ningún pago realizado desde su tarjeta bancaria a la Empresa para recargar el saldo de su cuenta.',
          'Asume total responsabilidad por todos los pagos realizados para recargar el saldo de su cuenta con la Empresa. La Empresa y/o el proveedor de servicios de pago procesará pagos solo por el monto especificado por usted.',
          'Una vez que se hace clic en el botón de confirmación de pago, el pago se considera procesado e irrevocable. Al hacer clic en el botón de confirmación de pago, acepta que no puede rescindir el pago ni solicitar un reembolso.',
          'Confirma que el servicio de Pago con Un Clic permanecerá activo hasta que lo cancele. Para desactivar el servicio, puede hacerlo accediendo al Dashboard y eliminando la información de su tarjeta bancaria de la lista de tarjetas guardadas.',
          'El proveedor de servicios de pago no es responsable de ninguna negativa o incapacidad para procesar la información de su tarjeta de pago, incluidas situaciones en que el banco emisor decline la autorización.',
        ],
      },
    ],
  },

  ru: {
    pageTitle: 'Политика платежей', home: 'Главная', page: 'Политика платежей',
    updated: 'Последнее обновление: 17 марта 2026 г.', contentsLabel: 'Содержание',
    sections: [
      {
        num: '1', title: 'Общая финансовая ответственность',
        items: [
          'Компания несёт финансовую ответственность за баланс счёта клиента в любой конкретный момент.',
          'Финансовая ответственность Компании начинается с первой записи о депозите клиента и продолжается до полного вывода средств.',
          'Клиент имеет право потребовать от Компании любую сумму средств, доступных на его счёте на момент запроса.',
          'Единственными официальными методами пополнения и вывода являются методы, указанные на официальном сайте Компании. Клиент принимает все риски, связанные с использованием этих платёжных методов. Компания не несёт ответственности за задержку или отмену транзакции, вызванную платёжным методом.',
          'Компания не несёт ответственности за деятельность сторонних поставщиков услуг, которых клиент может использовать для пополнения или вывода средств. В случае обнаружения мошенничества во время или после финансовой транзакции Компания оставляет за собой право отменить такую транзакцию и заморозить счёт клиента.',
          'В случае любых технических ошибок, связанных с финансовыми транзакциями, Компания оставляет за собой право отменить такие транзакции и их результаты.',
          'Клиент может иметь только один зарегистрированный аккаунт на сайте Компании. В случае обнаружения дублирования аккаунтов Компания оставляет за собой право заморозить аккаунты и средства клиента без права вывода.',
        ],
      },
      {
        num: '2', title: 'Регистрация и верификация клиентов',
        items: [
          'Регистрация клиентов состоит из двух основных шагов: (1) Веб-регистрация клиента, и (2) Верификация личности клиента. Для завершения регистрации клиент должен предоставить Компании свои реальные данные личности и контактные сведения, а также принять соглашения Компании.',
          'Компания проводит процедуру верификации личности и данных для подтверждения правильности и полноты данных, указанных клиентом при регистрации. Для проведения этой процедуры клиент обязан предоставить скан или цифровое фото своего документа, удостоверяющего личность, включая полную копию всех страниц документа.',
          'Компания оставляет за собой право потребовать от клиента любые другие документы, такие как платёжные счета, банковское подтверждение, сканы банковских карт или любой другой документ, необходимый в процессе идентификации. Процесс идентификации должен быть завершён в течение 10 рабочих дней с момента запроса Компании, и может быть продлён до 30 рабочих дней.',
        ],
      },
      {
        num: '3', title: 'Пополнение счёта',
        items: [
          'Для пополнения счёта клиент должен подать заявку в своём Личном кабинете, выбрав один из доступных платёжных методов, заполнив все необходимые данные и перейдя к оплате.',
          'Все транзакции, совершаемые клиентом, должны проводиться через платёжный источник, принадлежащий исключительно клиенту, который осуществляет платёж собственными средствами.',
          'Финансовая ответственность Компании за средства клиента начинается только с момента успешного зачисления средств на банковский счёт Компании или любой другой счёт, связанный с платёжными методами, указанными на сайте Компании.',
        ],
      },
      {
        num: '4', title: 'Обработка выводов средств',
        items: [
          'Время обработки запросов на вывод зависит от платёжного метода и может различаться. Компания не может регулировать время обработки сторонних платёжных провайдеров.',
          'При использовании электронных платёжных методов время транзакции может варьироваться от нескольких секунд до нескольких дней. При использовании прямого банковского перевода время транзакции может составлять от 3 до 45 рабочих дней.',
          'Вывод, возврат, компенсация и другие платежи со счёта клиента могут осуществляться только с использованием того же счёта — банковского или платёжной карты — который использовался для внесения средств. Вывод со счёта может быть осуществлён только в той же валюте, в которой был сделан соответствующий депозит.',
          'Компания не является налоговым агентом и не предоставляет финансовую информацию клиентов третьим лицам. Эта информация может быть предоставлена только по официальному запросу государственных органов.',
        ],
      },
      {
        num: '5', title: 'Правила вывода средств',
        items: [
          'В любое время Клиент может вывести часть или все средства со своего Счёта, направив Компании Запрос на вывод. Компания исполнит приказ на вывод, ограниченный остатком средств на Счёте Клиента на момент исполнения приказа.',
          'Приказ Клиента на вывод денег должен соответствовать требованиям и ограничениям, установленным действующим законодательством и иными применимыми нормами в юрисдикции, где осуществляется такая транзакция.',
          'Средства со Счёта Клиента должны быть выведены в ту же платёжную систему с тем же идентификатором кошелька/счёта, который ранее использовался Клиентом для пополнения средств.',
          'Запрос на вывод исполняется путём перевода средств на Внешний Счёт Клиента Агентом, уполномоченным Компанией.',
          'Клиент должен оформить Запрос на вывод в валюте депозита. Если валюта депозита отличается от валюты перевода, Компания конвертирует сумму перевода по обменному курсу, установленному Компанией на момент списания средств со Счёта Клиента.',
          'Курс конвертации, комиссия и прочие расходы, связанные с каждым методом вывода, устанавливаются Компанией и могут быть изменены в любое время по её усмотрению.',
          'Компания оставляет за собой право устанавливать минимальные и максимальные суммы вывода в зависимости от метода вывода. Эти ограничения будут отображаться в Личном кабинете Клиента.',
          'Средства будут выведены со Счёта Клиента в течение пяти (5) рабочих дней. Если средства не поступили на Внешний Счёт Клиента по истечении пяти (5) рабочих дней, Клиент может попросить Компанию расследовать этот перевод.',
          'Если Клиент допустил ошибку в платёжных реквизитах при составлении Запроса на вывод, что привело к неудаче перевода, Клиент оплачивает комиссию за урегулирование ситуации.',
          'Прибыль Клиента, превышающая внесённые им средства, может быть переведена на Внешний Счёт Клиента только способом, согласованным Компанией и Клиентом.',
        ],
      },
      {
        num: '6', title: 'Банковские и электронные переводы',
        items: [
          'Вывод банковским переводом: Клиент может направить Запрос на вывод посредством банковского перевода в любое время, если Компания принимает этот метод. Клиент может оформить Запрос на вывод только на банковский счёт, открытый на его имя. Компания не будет принимать и исполнять приказы на перевод денег на банковский счёт третьего лица. Клиент понимает и соглашается, что Компания не несёт ответственности за время осуществления банковского перевода.',
          'Электронные переводы: Клиент может направить Запрос на вывод посредством электронного перевода в любое время, если Компания использует этот метод. Клиент может оформить Запрос на вывод только на свой личный электронный кошелёк. Компания должна отправить деньги на электронный счёт Клиента в соответствии с информацией, указанной в Запросе на вывод.',
          'Клиент понимает и признаёт, что Компания не несёт ответственности за время электронного перевода или за обстоятельства, повлёкшие технический сбой во время перевода, если они произошли не по вине Компании. Компания может по своему усмотрению предлагать Клиенту иные способы вывода средств, которые публикуются в Личном кабинете.',
        ],
      },
      {
        num: '7', title: 'Сервис оплаты в один клик',
        items: [
          'Заполняя платёжную форму данными своей банковской карты, выбирая опцию «Сохранить карту» и нажимая кнопку подтверждения платежа, вы даёте полное согласие на условия сервиса оплаты в один клик (рекуррентные платежи). Вы разрешаете платёжному поставщику автоматически списывать средства с вашей банковской карты для пополнения баланса вашего счёта.',
          'Вы признаёте и соглашаетесь с тем, что подтверждение использования вами сервиса оплаты в один клик будет отправлено на ваш e-mail в течение двух (2) рабочих дней.',
          'Используя сервис оплаты в один клик, вы соглашаетесь покрывать все расходы, связанные с этим сервисом, включая дополнительные расходы, такие как налоги, пошлины и иные сборы.',
          'Используя сервис оплаты в один клик, вы подтверждаете, что являетесь законным владельцем или авторизованным пользователем банковской карты, используемой для данного сервиса. Вы также соглашаетесь не оспаривать какие-либо платежи, совершённые с вашей банковской карты в пользу Компании для пополнения баланса вашего счёта.',
          'Вы принимаете полную ответственность за все платежи, совершённые для пополнения баланса вашего счёта у Компании. Компания и/или платёжный поставщик будет обрабатывать платежи только на сумму, указанную вами.',
          'После нажатия кнопки подтверждения платежа платёж считается обработанным и безотзывным. Нажимая кнопку подтверждения, вы соглашаетесь с тем, что не можете отозвать платёж или запросить возврат средств.',
          'Вы подтверждаете, что сервис оплаты в один клик будет оставаться активным до его отмены. Для отключения сервиса вы можете войти в Личный кабинет и удалить данные своей банковской карты из списка сохранённых карт.',
          'Платёжный поставщик не несёт ответственности за отказ или невозможность обработки данных вашей платёжной карты, в том числе в ситуациях, когда банк-эмитент отказывает в авторизации.',
        ],
      },
    ],
  },

  id: {
    pageTitle: 'Kebijakan Pembayaran', home: 'Beranda', page: 'Kebijakan Pembayaran',
    updated: 'Terakhir diperbarui: 17 Maret 2026', contentsLabel: 'Daftar Isi',
    sections: [
      {
        num: '1', title: 'Tanggung Jawab Keuangan Umum',
        items: [
          'Perusahaan bertanggung jawab secara finansial atas saldo akun klien pada setiap saat.',
          'Tanggung jawab keuangan Perusahaan dimulai dengan catatan pertama setoran klien dan berlanjut hingga penarikan penuh dana.',
          'Klien berhak menuntut dari Perusahaan jumlah dana apa pun yang tersedia di akunnya pada saat permintaan.',
          'Satu-satunya metode resmi setoran dan penarikan adalah metode yang muncul di situs web resmi Perusahaan. Klien menanggung semua risiko yang terkait dengan penggunaan metode pembayaran ini. Perusahaan tidak bertanggung jawab atas keterlambatan atau pembatalan transaksi yang disebabkan oleh metode pembayaran.',
          'Perusahaan tidak menanggung tanggung jawab atas aktivitas penyedia layanan pihak ketiga yang mungkin digunakan klien untuk melakukan setoran atau penarikan. Jika terdeteksi penipuan selama atau setelah transaksi keuangan, Perusahaan berhak membatalkan transaksi tersebut dan membekukan akun klien.',
          'Dalam hal kesalahan teknis yang terkait dengan transaksi keuangan, Perusahaan berhak membatalkan transaksi tersebut beserta hasilnya.',
          'Klien hanya dapat memiliki satu akun terdaftar di situs web Perusahaan. Jika Perusahaan mendeteksi duplikasi akun, Perusahaan berhak membekukan akun dan dana klien tanpa hak penarikan.',
        ],
      },
      {
        num: '2', title: 'Registrasi dan Verifikasi Klien',
        items: [
          'Registrasi klien didasarkan pada dua langkah utama: (1) Registrasi web klien, dan (2) Verifikasi identitas klien. Untuk menyelesaikan registrasi, klien harus memberikan kepada Perusahaan data identitas asli dan detail kontak mereka, serta menerima perjanjian Perusahaan.',
          'Perusahaan melakukan prosedur verifikasi identitas dan data untuk mengonfirmasi kebenaran dan kelengkapan data yang ditentukan oleh Klien selama registrasi. Untuk prosedur ini, klien wajib memberikan scan atau foto digital dokumen identifikasi mereka, termasuk salinan lengkap semua halaman dokumen.',
          'Perusahaan berhak meminta kepada klien dokumen lain apa pun, seperti tagihan pembayaran, konfirmasi bank, scan kartu bank, atau dokumen lain yang mungkin diperlukan selama proses identifikasi. Proses identifikasi harus diselesaikan dalam 10 hari kerja sejak permintaan Perusahaan, dan dapat diperpanjang hingga 30 hari kerja.',
        ],
      },
      {
        num: '3', title: 'Setoran',
        items: [
          'Untuk melakukan setoran, klien harus mengirimkan permintaan melalui Kabinet Pribadi mereka, memilih salah satu metode pembayaran yang tersedia, mengisi semua detail yang diperlukan, dan melanjutkan dengan pembayaran.',
          'Semua transaksi yang dilakukan oleh Klien harus dilaksanakan melalui sumber pembayaran yang dimiliki secara eksklusif oleh Klien, yang melakukan pembayaran dengan dananya sendiri.',
          'Tanggung jawab keuangan Perusahaan atas dana klien dimulai hanya ketika dana telah berhasil dimuat ke rekening bank Perusahaan atau rekening lain yang terkait dengan metode pembayaran yang tercantum di situs web Perusahaan.',
        ],
      },
      {
        num: '4', title: 'Pemrosesan Penarikan',
        items: [
          'Waktu pemrosesan permintaan penarikan bergantung pada metode pembayaran dan dapat bervariasi. Perusahaan tidak dapat mengatur waktu pemrosesan penyedia pembayaran pihak ketiga.',
          'Dalam hal menggunakan metode pembayaran elektronik, waktu transaksi dapat bervariasi dari detik hingga hari. Dalam hal menggunakan transfer bank langsung, waktu transaksi dapat berkisar dari 3 hingga 45 hari kerja.',
          'Penarikan, pengembalian dana, kompensasi, dan pembayaran lain dari akun klien hanya dapat dilakukan menggunakan akun yang sama — bank atau kartu pembayaran — yang digunakan untuk menyetorkan dana. Penarikan dari Akun hanya dapat dilakukan dalam mata uang yang sama di mana setoran terkait dilakukan.',
          'Perusahaan bukan agen pajak dan tidak memberikan informasi keuangan klien kepada pihak ketiga. Informasi ini hanya dapat diberikan jika ada permintaan resmi dari lembaga pemerintah.',
        ],
      },
      {
        num: '5', title: 'Peraturan Penarikan',
        items: [
          'Kapan saja Klien dapat menarik sebagian atau semua dana dari Akunnya dengan mengirimkan kepada Perusahaan Permintaan Penarikan. Perusahaan akan melaksanakan perintah penarikan yang dibatasi oleh saldo Akun Klien yang tersisa pada saat pelaksanaan.',
          'Perintah Klien untuk menarik uang dari Akun Klien harus sesuai dengan persyaratan dan pembatasan yang ditetapkan oleh undang-undang yang berlaku di yurisdiksi di mana transaksi tersebut dilakukan.',
          'Dana dari Akun Klien harus ditarik ke sistem pembayaran yang sama dengan ID dompet/akun yang sama yang sebelumnya digunakan oleh Klien untuk menyetorkan dana.',
          'Permintaan Penarikan dilaksanakan dengan mentransfer dana ke Akun Eksternal Klien oleh Agen yang diberi wewenang oleh Perusahaan.',
          'Klien harus membuat Permintaan Penarikan dalam mata uang setoran. Jika mata uang setoran berbeda dari mata uang transfer, Perusahaan akan mengkonversi jumlah transfer pada nilai tukar yang ditetapkan Perusahaan pada saat dana didebet dari Akun Klien.',
          'Nilai tukar, komisi, dan biaya lain yang terkait dengan setiap metode penarikan ditetapkan oleh Perusahaan dan dapat diubah kapan saja atas kebijakan tunggal Perusahaan.',
          'Perusahaan berhak menetapkan jumlah penarikan minimum dan maksimum tergantung pada metode penarikan. Pembatasan ini akan ditampilkan di Dashboard Klien.',
          'Dana akan ditarik dari akun Klien dalam lima (5) hari kerja. Jika dana belum tiba di Akun Eksternal Klien setelah lima (5) hari kerja, Klien dapat meminta Perusahaan untuk menyelidiki transfer ini.',
          'Jika Klien membuat kesalahan dalam informasi pembayaran saat menyusun Permintaan Penarikan yang mengakibatkan kegagalan transfer uang, Klien akan membayar komisi untuk menyelesaikan situasi tersebut.',
          'Keuntungan Klien melebihi dana yang disetor hanya dapat ditransfer ke Akun Eksternal Klien dengan metode yang disepakati oleh Perusahaan dan Klien.',
        ],
      },
      {
        num: '6', title: 'Transfer Bank dan Elektronik',
        items: [
          'Penarikan transfer bank: Klien dapat mengirim Permintaan Penarikan melalui transfer bank kapan saja jika Perusahaan menerima metode ini. Klien hanya dapat membuat Permintaan Penarikan ke rekening bank yang dibuka atas namanya. Perusahaan tidak akan menerima dan melaksanakan perintah untuk mentransfer uang ke rekening bank pihak ketiga. Klien memahami dan setuju bahwa Perusahaan tidak menanggung tanggung jawab atas waktu yang dibutuhkan transfer bank.',
          'Transfer elektronik: Klien dapat mengirim Permintaan Penarikan melalui transfer elektronik kapan saja jika Perusahaan menggunakan metode ini. Klien hanya dapat membuat Permintaan Penarikan ke dompet sistem pembayaran elektronik pribadi mereka. Perusahaan harus mengirim uang ke akun elektronik Klien sesuai dengan informasi dalam Permintaan Penarikan.',
          'Klien memahami dan mengakui bahwa Perusahaan tidak bertanggung jawab atas waktu yang dibutuhkan transfer elektronik atau keadaan yang mengakibatkan kegagalan teknis selama transfer jika hal tersebut terjadi bukan karena kesalahan Perusahaan. Perusahaan dapat, atas kebijakannya, menawarkan kepada Klien metode lain untuk menarik uang, yang akan diposting di Dashboard.',
        ],
      },
      {
        num: '7', title: 'Layanan Pembayaran Satu Klik',
        items: [
          'Dengan melengkapi formulir pembayaran dengan informasi kartu bank Anda, memilih opsi "Simpan kartu", dan mengklik tombol konfirmasi pembayaran, Anda memberikan persetujuan penuh atas aturan layanan Pembayaran Satu Klik (pembayaran berulang). Anda mengizinkan penyedia layanan pembayaran untuk secara otomatis mendebet dana dari kartu bank Anda untuk mengisi ulang saldo akun Anda.',
          'Anda mengakui dan menyetujui bahwa konfirmasi penggunaan layanan Pembayaran Satu Klik akan dikirim ke email Anda dalam dua (2) hari kerja.',
          'Dengan menggunakan layanan Pembayaran Satu Klik, Anda setuju untuk menanggung semua biaya yang terkait dengan layanan ini, termasuk pengeluaran tambahan seperti pajak, bea, dan biaya lainnya.',
          'Dengan menggunakan layanan Pembayaran Satu Klik, Anda mengonfirmasi bahwa Anda adalah pemilik sah atau pengguna yang berwenang dari kartu bank yang digunakan untuk layanan ini. Anda juga setuju untuk tidak memperdebatkan pembayaran apa pun yang dilakukan dari kartu bank Anda kepada Perusahaan untuk mengisi ulang saldo akun Anda.',
          'Anda menanggung tanggung jawab penuh atas semua pembayaran yang dilakukan untuk mengisi ulang saldo akun Anda dengan Perusahaan. Perusahaan dan/atau penyedia layanan pembayaran hanya akan memproses pembayaran untuk jumlah yang Anda tentukan.',
          'Setelah tombol konfirmasi pembayaran diklik, pembayaran dianggap diproses dan tidak dapat dibatalkan. Dengan mengklik tombol konfirmasi pembayaran, Anda setuju bahwa Anda tidak dapat membatalkan pembayaran atau meminta pengembalian dana.',
          'Anda mengonfirmasi bahwa layanan Pembayaran Satu Klik akan tetap aktif hingga Anda membatalkannya. Untuk menonaktifkan layanan, Anda dapat melakukannya dengan mengakses Dashboard dan menghapus informasi kartu bank Anda dari daftar kartu yang tersimpan.',
          'Penyedia layanan pembayaran tidak bertanggung jawab atas penolakan atau ketidakmampuan memproses informasi kartu pembayaran Anda, termasuk situasi di mana bank penerbit menolak otorisasi.',
        ],
      },
    ],
  },
};

export default async function LangPaymentPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = CONTENT[lang] ?? CONTENT.pt;

  return (
    <LegalShell
      lang={lang}
      breadcrumbHome={c.home}
      breadcrumbPage={c.page}
      title={c.pageTitle}
      updated={c.updated}
      contentsLabel={c.contentsLabel}
      tocItems={c.sections.map(s => ({ num: s.num, title: s.title }))}
    >
      {c.sections.map(s => (
        <div key={s.num} id={`section-${s.num}`} className="legal-card">
          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0D1B2A', marginBottom: 28, fontFamily: "'Montserrat', sans-serif", display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: 10, background: 'linear-gradient(135deg, #0099FA, #0070e0)', color: '#fff', fontSize: 17, fontWeight: 800, flexShrink: 0 }}>{s.num}</span>
            {s.title}
          </h2>
          <ol style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 18, listStyle: 'none' }}>
            {s.items.map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 16, fontSize: 16, color: '#4A5E78', lineHeight: 1.9 }}>
                <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: '#F0F7FF', border: '1px solid #CBE4FF', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#0099FA', marginTop: 2 }}>
                  {s.num}.{i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </LegalShell>
  );
}
