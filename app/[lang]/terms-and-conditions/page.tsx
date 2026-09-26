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
    title: 'Termos e Condições | Pocket Option',
    description: 'Leia os Termos e Condições da Pocket Option. Conheça as regras que regem o uso da plataforma de trading, contas, depósitos, saques e resolução de disputas.',
  },
  es: {
    title: 'Términos y Condiciones | Pocket Option',
    description: 'Lea los Términos y Condiciones de Pocket Option. Conozca las reglas que rigen el uso de la plataforma de trading, cuentas, depósitos, retiros y resolución de disputas.',
  },
  ru: {
    title: 'Условия использования | Pocket Option',
    description: 'Ознакомьтесь с Условиями использования Pocket Option. Правила, регулирующие использование торговой платформы, аккаунтов, депозитов, вывода средств и разрешения споров.',
  },
  id: {
    title: 'Syarat dan Ketentuan | Pocket Option',
    description: 'Baca Syarat dan Ketentuan Pocket Option. Pelajari aturan yang mengatur penggunaan platform trading, akun, setoran, penarikan, dan penyelesaian sengketa.',
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
    ...buildSeoMeta(lang, 'terms-and-conditions'),
  };
}

type LangContent = {
  title: string; home: string; page: string; updated: string; preamble: string;
  contentsLabel: string; definitionsTitle: string;
  companyNote: string;
  definitions: { term: string; def: string }[];
  sections: { num: string; title: string; items: string[] }[];
};

const CONTENT: Record<string, LangContent> = {
  pt: {
    title: 'Acordo de Oferta Pública', home: 'Início', page: 'Termos e Condições',
    updated: 'Última atualização: 17 de março de 2026',
    preamble: 'O Cliente afirma automaticamente a plena aceitação deste Acordo ao registar um Perfil de Cliente no website da Empresa. O Acordo permanece válido até ser rescindido por qualquer das partes, de acordo com as disposições aqui estabelecidas.',
    contentsLabel: 'Conteúdo', definitionsTitle: 'Termos e Definições',
    companyNote: 'Detalhes da empresa: Toda a atividade de corretagem neste website é fornecida pela FX Trading LLC, registada na República da Costa Rica. A FX Trading LLC não presta serviços a residentes dos países EEA, EUA, Israel, Reino Unido, Filipinas, Japão e Brasil.',
    definitions: [
      { term: 'Perfil do Cliente', def: 'Espaço de trabalho criado na interface web, utilizado pelo Cliente para Operações de Trading e Não-Trading e para inserção de dados pessoais.' },
      { term: 'Cliente', def: 'Qualquer pessoa com mais de 18 anos que utilize os serviços da Empresa em conformidade com este Acordo.' },
      { term: 'Empresa', def: 'Entidade jurídica denominada "Pocket Option", que presta, nos termos deste Acordo, serviços de arbitragem para compra e venda de contratos CFD.' },
      { term: 'Operação Não-Trading', def: 'Qualquer operação relacionada com o depósito de fundos na Conta de Trading do Cliente ou com o levantamento de fundos desta conta.' },
      { term: 'Dados do Cliente', def: 'Conjunto de dados pessoais sobre o Cliente, fornecidos pelo próprio durante o processo de registo e verificação no Perfil do Cliente.' },
      { term: 'Conta de Trading do Cliente', def: 'Conta especializada no servidor da Empresa que permite ao Cliente realizar Operações de Trading.' },
      { term: 'Operação de Trading', def: 'Operação de arbitragem para compra e venda de contratos de trading realizada pelo Cliente através do Terminal de Trading.' },
      { term: 'Servidor de Trading da Empresa', def: 'Servidor da Empresa com software especializado instalado, destinado à realização de Operações de Trading e Não-Trading e ao acompanhamento das suas estatísticas.' },
      { term: 'Terminal de Trading', def: 'Interface especializada localizada no Perfil do Cliente, conectada ao Servidor de Trading da Empresa e utilizada pelo Cliente para realizar Operações de Trading.' },
    ],
    sections: [
      {
        num: '1', title: 'Disposições Gerais',
        items: [
          'O serviço fornecido pela Empresa é um serviço de Internet que utiliza o website oficial da Empresa para realizar Operações de Trading. O uso do serviço implica a disponibilidade de uma ligação à Internet estável e de alta velocidade por parte do Cliente.',
          'A Empresa exige que o Cliente introduza corretamente os dados pessoais e reserva-se o direito de verificar a identidade do Cliente através dos seguintes métodos: envio de cópias digitalizadas de documentos para o Perfil do Cliente; chamada telefónica ao número indicado; ou outros meios necessários a critério da Empresa.',
          'Um Cliente, independentemente do estatuto jurídico, está proibido de ter mais de um Perfil de Cliente. A Empresa reserva-se o direito de rescindir este Acordo ou repor os resultados das Operações de Trading em caso de re-registo ou utilização de múltiplas Contas de Trading pelo mesmo Cliente.',
          'O Cliente é responsável pela segurança dos dados de autenticação recebidos da Empresa. Em caso de perda de acesso ao Perfil, o Cliente deve notificar imediatamente a Empresa para bloquear o acesso aos fundos na Conta de Trading.',
          'A Empresa realiza cotações utilizando as suas próprias fontes de cotações pagas. Cotações de outras empresas não podem ser tidas em conta na consideração de disputas.',
          'O Cliente está proibido de recorrer a qualquer tipo de atividade fraudulenta, incluindo especulação de bónus e trading abusivo. A Empresa reserva-se o direito de rescindir o Acordo ou repor os resultados das Operações de Trading.',
          'O Cliente deve garantir que as suas atividades estão em plena conformidade com a legislação do país onde são realizadas e aceita a responsabilidade pelo pagamento de todos os impostos e taxas resultantes das Operações de Trading.',
        ],
      },
      {
        num: '2', title: 'Operações Não-Trading',
        items: [
          'As Operações Não-Trading incluem operações realizadas pelo Cliente para depositar fundos na Conta de Trading e levantar fundos desta.',
          'As Operações Não-Trading são realizadas pelo Cliente com a ajuda da funcionalidade do Perfil do Cliente. A Empresa não realiza Operações Não-Trading solicitadas por meios de comunicação convencionais (email, chat ao vivo, etc.).',
          'Durante a realização de Operações Não-Trading, o Cliente só pode utilizar fundos pessoais detidos em contas de pagamento eletrónico ou bancárias que lhe pertencem.',
          'A Empresa estabelece os seguintes valores mínimos para Operações Não-Trading (salvo indicação em contrário): Depósito — 0,1 USD; Levantamento — 10 USD.',
          'O levantamento de fundos deve ser realizado utilizando o mesmo método de pagamento que foi anteriormente utilizado para o depósito, de forma a garantir a conformidade com as normas legislativas geralmente aceites.',
          'A Empresa não permite a utilização dos serviços prestados como meio de extrair lucros de Operações Não-Trading ou de qualquer forma diferente do objetivo pretendido.',
        ],
      },
      {
        num: '3', title: 'Operações de Trading',
        items: [
          'As Operações de Trading incluem operações de arbitragem para venda e compra de contratos de trading com os instrumentos fornecidos pela Empresa, executadas através do Terminal de Trading.',
          'A Empresa fornece cotações no Terminal de Trading utilizando a tecnologia de Execução de Mercado — o preço que existe no momento do processamento do pedido do Cliente na fila do Servidor de Trading da Empresa.',
          'O desvio máximo do preço indicado no Terminal de Trading do Cliente em relação ao preço existente no Servidor de Trading da Empresa não excede o valor de dois spreads médios para o instrumento de trading em questão.',
          'O Cliente tem a possibilidade de manter qualquer número de Operações de Trading abertas simultaneamente. O volume total de todas as novas Operações de Trading abertas não pode exceder o saldo da Conta de Trading do Cliente.',
          'Sob condições de mercado normais, um pedido do Cliente é tipicamente processado em 0–4 segundos. Sob condições de mercado anormais, o tempo de processamento pode aumentar.',
          'Para um contrato do tipo "Call": se o preço de encerramento exceder o preço de abertura, o contrato é considerado executado e o lucro é creditado. Se o preço de encerramento for inferior, o contrato não é executado e a margem é debitada.',
          'Para um contrato do tipo "Put": se o preço de encerramento for inferior ao preço de abertura, o contrato é considerado executado e o lucro é creditado. Se o preço de encerramento for superior, o contrato não é executado e a margem é debitada.',
          'Se o preço de encerramento de um contrato for igual ao preço de abertura, o contrato é considerado não executado e o valor da margem fixado anteriormente é devolvido à Conta de Trading do Cliente.',
        ],
      },
      {
        num: '4', title: 'Bónus e Promoções',
        items: [
          'A Empresa tem o direito de fornecer ao Cliente um bónus na Conta de Trading. O valor e as condições do bónus são determinados pela Empresa a seu exclusivo critério.',
          'O Cliente está proibido de levantar um bónus até que o volume de trading necessário seja atingido, conforme os termos da oferta de bónus específica comunicada ao Cliente.',
          'A Empresa reserva-se o direito de cancelar, modificar ou retirar qualquer bónus ou promoção a qualquer momento sem aviso prévio.',
          'O abuso de programas de bónus, incluindo a criação de múltiplas contas ou estratégias de cobertura para bloquear bónus, resultará na rescisão imediata do Acordo e na perda de todos os fundos.',
        ],
      },
      {
        num: '5', title: 'Resolução de Disputas',
        items: [
          'Uma disputa é qualquer desacordo entre a Empresa e o Cliente relacionado com a execução de uma Operação de Trading ou Não-Trading, ou com outras circunstâncias relacionadas com este Acordo.',
          'Para resolver uma disputa, o Cliente deve apresentar uma reclamação ao Suporte ao Cliente da Empresa no prazo de 5 dias úteis após o evento em disputa.',
          'Ao considerar uma disputa, a Empresa utiliza dados do Servidor de Trading da Empresa como fonte primária de informação.',
          'Se uma falha técnica do Servidor de Trading afetou o resultado de uma Operação de Trading, a Empresa tem o direito de cancelar os resultados da operação afetada e restaurar o valor da margem à Conta de Trading do Cliente.',
        ],
      },
      {
        num: '6', title: 'Confidencialidade',
        items: [
          'A Empresa garante a não divulgação dos dados pessoais do Cliente a terceiros, exceto nos casos em que a divulgação seja exigida pela lei aplicável.',
          'A Empresa recolhe, armazena e processa os Dados do Cliente com o objetivo de fornecer os serviços descritos neste Acordo, cumprir obrigações legais e prevenir fraudes e branqueamento de capitais.',
          'A Empresa utiliza medidas de segurança padrão da indústria para proteger os Dados do Cliente contra acesso, alteração, divulgação ou destruição não autorizados.',
        ],
      },
      {
        num: '7', title: 'Limitação de Responsabilidade e Divulgação de Risco',
        items: [
          'O trading em instrumentos financeiros envolve um risco significativo de perda. O Cliente reconhece que compreende plenamente os riscos associados ao trading e aceita a responsabilidade por quaisquer perdas financeiras incorridas.',
          'A Empresa não será responsável por perdas resultantes de: volatilidade do mercado; interrupções do sistema ou falhas técnicas; eventos de força maior fora do controlo razoável da Empresa; acesso não autorizado à conta do Cliente por terceiros.',
          'A responsabilidade total da Empresa perante o Cliente por qualquer reclamação não excederá o saldo da Conta de Trading do Cliente no momento em que a reclamação surgir.',
        ],
      },
      {
        num: '8', title: 'Países Restritos',
        items: [
          'A Empresa não presta serviços a residentes ou cidadãos dos seguintes países e territórios: Estados Unidos da América (EUA), Canadá, Austrália, Reino Unido (UK), estados membros do Espaço Económico Europeu (EEE), Israel, Japão, Brasil, Filipinas, e quaisquer outras jurisdições onde a prestação de tais serviços seja proibida por lei aplicável.',
          'O Cliente declara e garante que não é residente ou cidadão de nenhum dos países restritos acima mencionados.',
          'A utilização de VPNs, proxies ou outros meios para contornar as restrições geográficas é estritamente proibida e constitui uma violação deste Acordo.',
        ],
      },
    ],
  },

  es: {
    title: 'Acuerdo de Oferta Pública', home: 'Inicio', page: 'Términos y Condiciones',
    updated: 'Última actualización: 17 de marzo de 2026',
    preamble: 'El Cliente afirma automáticamente la plena aceptación de este Acuerdo al registrar un Perfil de Cliente en el sitio web de la Empresa. El Acuerdo permanece vigente hasta que sea rescindido por cualquiera de las partes, de conformidad con las disposiciones aquí establecidas.',
    contentsLabel: 'Contenido', definitionsTitle: 'Términos y Definiciones',
    companyNote: 'Datos de la empresa: Toda la actividad de corretaje en este sitio web es proporcionada por FX Trading LLC, registrada en la República de Costa Rica. FX Trading LLC no presta servicios a residentes de los países de la EEA, EE.UU., Israel, Reino Unido, Filipinas, Japón y Brasil.',
    definitions: [
      { term: 'Perfil del Cliente', def: 'Espacio de trabajo creado en la interfaz web, utilizado por el Cliente para Operaciones de Trading y No-Trading y para introducir información personal.' },
      { term: 'Cliente', def: 'Cualquier persona mayor de 18 años que utilice los servicios de la Empresa de conformidad con este Acuerdo.' },
      { term: 'Empresa', def: 'Entidad jurídica denominada "Pocket Option", que proporciona, conforme a este Acuerdo, la realización de operaciones de arbitraje para la compra y venta de contratos CFD.' },
      { term: 'Operación No-Trading', def: 'Cualquier operación relacionada con la recarga de la Cuenta de Trading del Cliente con los fondos necesarios o el retiro de fondos de dicha cuenta.' },
      { term: 'Datos del Cliente', def: 'Conjunto de datos personales sobre el Cliente, proporcionados por él mismo durante el proceso de registro y verificación en el Perfil del Cliente.' },
      { term: 'Cuenta de Trading del Cliente', def: 'Cuenta especializada en el servidor de la Empresa que permite al Cliente realizar Operaciones de Trading.' },
      { term: 'Operación de Trading', def: 'Operación de arbitraje para la compra y venta de contratos de trading realizada por el Cliente a través del Terminal de Trading.' },
      { term: 'Servidor de Trading de la Empresa', def: 'Servidor de la Empresa con software especializado instalado, destinado a la realización de Operaciones de Trading y No-Trading y al seguimiento de sus estadísticas.' },
      { term: 'Terminal de Trading', def: 'Interfaz especializada ubicada en el Perfil del Cliente, conectada al Servidor de Trading de la Empresa y utilizada por el Cliente para realizar Operaciones de Trading.' },
    ],
    sections: [
      {
        num: '1', title: 'Disposiciones Generales',
        items: [
          'El servicio proporcionado por la Empresa es un servicio de Internet que utiliza el sitio web oficial de la Empresa para realizar Operaciones de Trading. El uso del servicio implica la disponibilidad de una conexión a Internet estable y de alta velocidad por parte del Cliente.',
          'La Empresa requiere que el Cliente introduzca correctamente los datos personales y se reserva el derecho de verificar la identidad del Cliente mediante: carga de copias escaneadas de documentos al Perfil del Cliente; llamada telefónica al número indicado; u otros medios necesarios a discreción de la Empresa.',
          'Un Cliente, independientemente del estatus jurídico, está prohibido de tener más de un Perfil de Cliente. La Empresa se reserva el derecho de rescindir este Acuerdo o restablecer los resultados de las Operaciones de Trading en caso de re-registro o uso de múltiples Cuentas de Trading por el mismo Cliente.',
          'El Cliente es responsable de la seguridad de los datos de autenticación recibidos de la Empresa. En caso de pérdida de acceso al Perfil, el Cliente debe notificar inmediatamente a la Empresa.',
          'La Empresa realiza cotizaciones utilizando sus propias fuentes de cotizaciones de pago. Las cotizaciones de otras empresas no pueden tenerse en cuenta al considerar disputas.',
          'El Cliente está prohibido de recurrir a cualquier tipo de actividad fraudulenta, incluida la especulación con bonos y el trading abusivo. La Empresa se reserva el derecho de rescindir el Acuerdo o restablecer los resultados de las Operaciones de Trading.',
          'El Cliente debe garantizar que sus actividades cumplan plenamente con la legislación del país donde se realizan y acepta la responsabilidad del pago de todos los impuestos y tasas derivados de las Operaciones de Trading.',
        ],
      },
      {
        num: '2', title: 'Operaciones No-Trading',
        items: [
          'Las Operaciones No-Trading incluyen las operaciones realizadas por el Cliente para depositar fondos en la Cuenta de Trading del Cliente y retirar fondos de ella.',
          'Las Operaciones No-Trading son realizadas por el Cliente con la ayuda de la funcionalidad del Perfil del Cliente. La Empresa no realiza Operaciones No-Trading solicitadas mediante medios de comunicación convencionales (correo electrónico, chat en vivo, etc.).',
          'Al realizar Operaciones No-Trading, el Cliente solo puede utilizar fondos personales mantenidos en cuentas de pago electrónico o bancarias de su propiedad.',
          'La Empresa establece los siguientes importes mínimos para las Operaciones No-Trading (a menos que se especifique lo contrario): Depósito — 0,1 USD; Retiro — 10 USD.',
          'El retiro de fondos debe realizarse utilizando el mismo método de pago que se utilizó previamente para el depósito, a fin de garantizar el cumplimiento de los estándares legislativos generalmente aceptados.',
          'La Empresa no permite el uso de los servicios prestados como medio para extraer beneficios de Operaciones No-Trading o de cualquier forma distinta al propósito previsto.',
        ],
      },
      {
        num: '3', title: 'Operaciones de Trading',
        items: [
          'Las Operaciones de Trading incluyen operaciones de arbitraje para la venta y compra de contratos de trading con los instrumentos de trading proporcionados por la Empresa, ejecutadas a través del Terminal de Trading.',
          'La Empresa proporciona cotizaciones en el Terminal de Trading utilizando la tecnología de Ejecución de Mercado — el precio que existe en el momento del procesamiento de la solicitud del Cliente en la cola del Servidor de Trading de la Empresa.',
          'La desviación máxima del precio indicado en el Terminal de Trading del Cliente respecto al precio existente en el Servidor de Trading de la Empresa no supera el valor de dos spreads medios para el instrumento de trading en cuestión.',
          'El Cliente tiene la posibilidad de mantener cualquier número de Operaciones de Trading abiertas simultáneamente. El volumen total de todas las nuevas Operaciones de Trading abiertas no puede exceder el saldo de la Cuenta de Trading del Cliente.',
          'En condiciones normales de mercado, la solicitud de un Cliente se procesa típicamente en 0–4 segundos. En condiciones anormales de mercado, el tiempo de procesamiento puede aumentar.',
          'Para un contrato de tipo "Call": si el precio de cierre supera el precio de apertura, el contrato se considera ejecutado y se acredita el beneficio. Si el precio de cierre es inferior, el contrato no se ejecuta y se debita el margen.',
          'Para un contrato de tipo "Put": si el precio de cierre es inferior al precio de apertura, el contrato se considera ejecutado y se acredita el beneficio. Si el precio de cierre es superior, el contrato no se ejecuta y se debita el margen.',
        ],
      },
      {
        num: '4', title: 'Bonos y Promociones',
        items: [
          'La Empresa tiene el derecho de proporcionar al Cliente un bono en la Cuenta de Trading. El importe y las condiciones del bono son determinados por la Empresa a su exclusiva discreción.',
          'El Cliente está prohibido de retirar un bono hasta que se alcance el volumen de trading requerido, según los términos de la oferta de bono específica comunicada al Cliente.',
          'La Empresa se reserva el derecho de cancelar, modificar o retirar cualquier bono o promoción en cualquier momento sin previo aviso.',
          'El abuso de los programas de bonos, incluida la creación de múltiples cuentas o estrategias de cobertura para bloquear bonos, resultará en la rescisión inmediata del Acuerdo y la pérdida de todos los fondos.',
        ],
      },
      {
        num: '5', title: 'Resolución de Disputas',
        items: [
          'Una disputa es cualquier desacuerdo entre la Empresa y el Cliente relacionado con la ejecución de una Operación de Trading o No-Trading, o con otras circunstancias relacionadas con este Acuerdo.',
          'Para resolver una disputa, el Cliente debe presentar una reclamación al Soporte al Cliente de la Empresa dentro de los 5 días hábiles posteriores al evento en disputa.',
          'Al considerar una disputa, la Empresa utiliza datos del Servidor de Trading de la Empresa como fuente principal de información.',
          'Si un fallo técnico del Servidor de Trading afectó el resultado de una Operación de Trading, la Empresa tiene el derecho de cancelar los resultados de la operación afectada y restaurar el importe del margen a la Cuenta de Trading del Cliente.',
        ],
      },
      {
        num: '6', title: 'Confidencialidad',
        items: [
          'La Empresa garantiza la no divulgación de los datos personales del Cliente a terceros, excepto en los casos en que la divulgación sea requerida por la ley aplicable.',
          'La Empresa recopila, almacena y procesa los Datos del Cliente con el fin de prestar los servicios descritos en este Acuerdo, cumplir con las obligaciones legales y prevenir el fraude y el blanqueo de capitales.',
          'La Empresa emplea medidas de seguridad estándar de la industria para proteger los Datos del Cliente contra el acceso, alteración, divulgación o destrucción no autorizados.',
        ],
      },
      {
        num: '7', title: 'Limitación de Responsabilidad y Divulgación de Riesgos',
        items: [
          'El trading en instrumentos financieros implica un riesgo significativo de pérdida. El Cliente reconoce que comprende plenamente los riesgos asociados al trading y acepta la responsabilidad por cualquier pérdida financiera incurrida.',
          'La Empresa no será responsable de las pérdidas derivadas de: volatilidad del mercado; interrupciones del sistema o fallos técnicos; eventos de fuerza mayor fuera del control razonable de la Empresa; acceso no autorizado a la cuenta del Cliente por terceros.',
          'La responsabilidad total de la Empresa ante el Cliente por cualquier reclamación no superará el saldo de la Cuenta de Trading del Cliente en el momento en que surja la reclamación.',
        ],
      },
      {
        num: '8', title: 'Países Restringidos',
        items: [
          'La Empresa no presta servicios a residentes o ciudadanos de los siguientes países y territorios: Estados Unidos de América (EE.UU.), Canadá, Australia, Reino Unido (RU), estados miembros del Espacio Económico Europeo (EEE), Israel, Japón, Brasil, Filipinas, y cualquier otra jurisdicción donde la prestación de dichos servicios esté prohibida por la ley aplicable.',
          'El Cliente declara y garantiza que no es residente ni ciudadano de ninguno de los países restringidos mencionados anteriormente.',
          'El uso de VPNs, proxies u otros medios para eludir las restricciones geográficas está estrictamente prohibido y constituye un incumplimiento de este Acuerdo.',
        ],
      },
    ],
  },

  ru: {
    title: 'Договор публичной оферты', home: 'Главная', page: 'Условия использования',
    updated: 'Последнее обновление: 17 марта 2026 г.',
    preamble: 'Клиент автоматически подтверждает полное принятие настоящего Соглашения путём регистрации Профиля Клиента на официальном сайте Компании. Соглашение остаётся в силе до его расторжения любой из сторон в соответствии с положениями, изложенными в настоящем документе.',
    contentsLabel: 'Содержание', definitionsTitle: 'Термины и определения',
    companyNote: 'Реквизиты компании: Вся брокерская деятельность на этом сайте осуществляется компанией FX Trading LLC, зарегистрированной в Республике Коста-Рика. FX Trading LLC не оказывает услуги резидентам стран ЕЭЗ, США, Израиля, Великобритании, Филиппин, Японии и Бразилии.',
    definitions: [
      { term: 'Профиль Клиента', def: 'Рабочее пространство, созданное в веб-интерфейсе и используемое Клиентом для проведения Торговых и Неторговых Операций, а также для ввода персональных данных.' },
      { term: 'Клиент', def: 'Любое лицо старше 18 лет, пользующееся услугами Компании в соответствии с настоящим Соглашением.' },
      { term: 'Компания', def: 'Юридическое лицо, именуемое «Pocket Option», которое предоставляет в соответствии с настоящим Соглашением услуги по проведению арбитражных операций купли-продажи CFD-контрактов.' },
      { term: 'Неторговая Операция', def: 'Любая операция, связанная с пополнением Торгового Счёта Клиента необходимыми средствами или выводом средств с Торгового Счёта Клиента.' },
      { term: 'Данные Клиента', def: 'Совокупность персональных данных о Клиенте, предоставленных им самим в процессе регистрации и верификации в Профиле Клиента и хранящихся на сервере Компании.' },
      { term: 'Торговый Счёт Клиента', def: 'Специализированный счёт на сервере Компании, позволяющий Клиенту проводить Торговые Операции.' },
      { term: 'Торговая Операция', def: 'Арбитражная операция купли-продажи торговых контрактов, осуществляемая Клиентом через Торговый Терминал в Профиле Клиента.' },
      { term: 'Торговый Сервер Компании', def: 'Сервер Компании со специализированным программным обеспечением, предназначенный для проведения Торговых и Неторговых Операций и ведения статистики этих операций.' },
      { term: 'Торговый Терминал', def: 'Специализированный интерфейс в Профиле Клиента, подключённый к Торговому Серверу Компании и используемый Клиентом для проведения Торговых Операций.' },
    ],
    sections: [
      {
        num: '1', title: 'Общие положения',
        items: [
          'Услуга, предоставляемая Компанией, является интернет-сервисом, использующим официальный сайт Компании для проведения Торговых Операций. Использование сервиса подразумевает наличие у Клиента устойчивого высокоскоростного интернет-соединения.',
          'Компания требует от Клиента корректного ввода персональных данных и оставляет за собой право проверить личность Клиента следующими методами: загрузка сканированных копий документов в Профиль Клиента; телефонный звонок на указанный номер; иные необходимые средства по усмотрению Компании.',
          'Клиенту, независимо от правового статуса, запрещено иметь более одного Профиля Клиента. Компания оставляет за собой право расторгнуть настоящее Соглашение или сбросить результаты Торговых Операций в случае повторной регистрации или использования нескольких Торговых Счетов одним и тем же Клиентом.',
          'Клиент несёт ответственность за сохранность аутентификационных данных, полученных от Компании. В случае утраты доступа к Профилю Клиент обязан незамедлительно уведомить Компанию.',
          'Компания осуществляет котирование Клиента с использованием собственных платных источников котировок. Котировки других компаний не могут приниматься во внимание при рассмотрении споров.',
          'Клиенту запрещено прибегать к любому виду мошеннической деятельности, включая спекуляцию на бонусах и злоупотребление торговлей. Компания оставляет за собой право расторгнуть Соглашение или сбросить результаты Торговых Операций.',
          'Клиент обязан обеспечить полное соответствие своей деятельности законодательству страны, в которой она осуществляется, и принимает ответственность за уплату всех налогов и сборов, возникающих в результате проведения Торговых Операций.',
        ],
      },
      {
        num: '2', title: 'Порядок проведения Неторговых Операций',
        items: [
          'Неторговые Операции включают операции, совершаемые Клиентом для внесения средств на Торговый Счёт Клиента, а также для вывода средств с него.',
          'Неторговые Операции осуществляются Клиентом с помощью функциональности Профиля Клиента. Компания не проводит Неторговые Операции, запрошенные с использованием обычных средств коммуникации (электронная почта, live-чат и т.д.).',
          'При проведении Неторговых Операций Клиент вправе использовать только личные средства, хранящиеся в электронных и банковских платёжных счетах, принадлежащих Клиенту.',
          'Компания устанавливает следующие минимальные суммы для Неторговых Операций (если не указано иное): Депозит — 0,1 USD; Вывод — 10 USD.',
          'Вывод средств осуществляется с использованием того же платёжного метода, который ранее был использован для депозита, в целях обеспечения соответствия общепринятым законодательным стандартам.',
          'Компания не допускает использования предоставляемых услуг в качестве средства извлечения прибыли из Неторговых Операций или каким-либо иным способом, отличным от предусмотренного назначения.',
        ],
      },
      {
        num: '3', title: 'Порядок проведения Торговых Операций',
        items: [
          'Торговые Операции включают арбитражные операции купли-продажи торговых контрактов с торговыми инструментами, предоставляемыми Компанией. Эти операции исполняются через Торговый Терминал.',
          'Компания предоставляет котировки в Торговом Терминале с использованием технологии «Рыночное исполнение» — по цене, существующей в момент обработки запроса Клиента в очереди Торгового Сервера Компании.',
          'Максимальное отклонение цены, указанной в Торговом Терминале Клиента, от цены, существующей на Торговом Сервере Компании, не превышает значения двух средних спредов для данного торгового инструмента.',
          'Клиент вправе одновременно держать открытыми любое количество Торговых Операций. Общий объём всех вновь открываемых Торговых Операций не может превышать баланс Торгового Счёта Клиента.',
          'В нормальных рыночных условиях запрос Клиента обычно обрабатывается в течение 0–4 секунд. В ненормальных рыночных условиях время обработки может увеличиться.',
          'Для контракта типа «Call»: если цена закрытия превышает цену открытия, контракт считается исполненным и прибыль зачисляется на Торговый Счёт Клиента. Если цена закрытия ниже цены открытия, контракт считается неисполненным и сумма маржи списывается.',
          'Для контракта типа «Put»: если цена закрытия ниже цены открытия, контракт считается исполненным и прибыль зачисляется. Если цена закрытия выше цены открытия, контракт считается неисполненным и сумма маржи списывается.',
          'Если цена закрытия контракта равна цене его открытия, контракт считается неисполненным и ранее зафиксированная сумма маржи возвращается на Торговый Счёт Клиента.',
        ],
      },
      {
        num: '4', title: 'Бонусы и акции',
        items: [
          'Компания вправе предоставить Клиенту бонус на Торговый Счёт. Размер и условия бонуса определяются Компанией по её собственному усмотрению.',
          'Клиенту запрещено выводить бонус до достижения необходимого торгового оборота в соответствии с условиями конкретного бонусного предложения, доведённого до Клиента.',
          'Компания оставляет за собой право в любое время без предварительного уведомления отменить, изменить или отозвать любой бонус или акционное предложение.',
          'Злоупотребление бонусными программами, включая создание нескольких аккаунтов или применение стратегий хеджирования для фиксирования бонусов, повлечёт немедленное расторжение Соглашения и конфискацию всех средств.',
        ],
      },
      {
        num: '5', title: 'Урегулирование споров',
        items: [
          'Спор — любое разногласие между Компанией и Клиентом, возникшее в связи с исполнением Торговой или Неторговой Операции либо в связи с иными обстоятельствами, связанными с настоящим Соглашением.',
          'Для урегулирования спора Клиент должен подать жалобу в Службу поддержки Компании в течение 5 рабочих дней с момента возникновения спорного события.',
          'При рассмотрении спора Компания использует данные Торгового Сервера Компании как основной источник информации.',
          'Если технический сбой Торгового Сервера повлиял на результат Торговой Операции, Компания вправе отменить результаты затронутой операции и восстановить сумму маржи на Торговом Счёте Клиента.',
        ],
      },
      {
        num: '6', title: 'Конфиденциальность',
        items: [
          'Компания гарантирует неразглашение персональных данных Клиента третьим лицам, за исключением случаев, когда раскрытие требуется в соответствии с применимым законодательством.',
          'Компания собирает, хранит и обрабатывает Данные Клиента в целях предоставления услуг, описанных в настоящем Соглашении, исполнения юридических обязательств и предотвращения мошенничества и отмывания денег.',
          'Компания применяет отраслевые стандарты безопасности для защиты Данных Клиента от несанкционированного доступа, изменения, раскрытия или уничтожения.',
        ],
      },
      {
        num: '7', title: 'Ограничение ответственности и раскрытие рисков',
        items: [
          'Торговля финансовыми инструментами сопряжена со значительным риском убытков. Клиент подтверждает, что в полной мере осознаёт риски, связанные с торговлей, и принимает ответственность за любые понесённые финансовые потери.',
          'Компания не несёт ответственности за убытки, возникшие вследствие: рыночной волатильности; сбоев системы или технических неисправностей; форс-мажорных событий, не зависящих от Компании; несанкционированного доступа к аккаунту Клиента со стороны третьих лиц.',
          'Совокупная ответственность Компании перед Клиентом по любому требованию не превысит баланс Торгового Счёта Клиента на момент возникновения требования.',
        ],
      },
      {
        num: '8', title: 'Ограниченные страны',
        items: [
          'Компания не оказывает услуги резидентам или гражданам следующих стран и территорий: Соединённые Штаты Америки (США), Канада, Австралия, Великобритания (Великобритания), государства — члены Европейской экономической зоны (ЕЭЗ), Израиль, Япония, Бразилия, Филиппины и любые иные юрисдикции, в которых оказание таких услуг запрещено применимым законодательством.',
          'Клиент заявляет и гарантирует, что не является резидентом или гражданином ни одной из упомянутых выше ограниченных стран.',
          'Использование VPN, прокси или иных средств для обхода географических ограничений строго запрещено и является нарушением настоящего Соглашения.',
        ],
      },
    ],
  },

  id: {
    title: 'Perjanjian Penawaran Publik', home: 'Beranda', page: 'Syarat dan Ketentuan',
    updated: 'Terakhir diperbarui: 17 Maret 2026',
    preamble: 'Klien secara otomatis menyatakan penerimaan penuh atas Perjanjian ini dengan mendaftarkan Profil Klien di situs web Perusahaan. Perjanjian tetap berlaku hingga diakhiri oleh salah satu pihak sesuai dengan ketentuan yang diatur di sini.',
    contentsLabel: 'Daftar Isi', definitionsTitle: 'Istilah dan Definisi',
    companyNote: 'Detail perusahaan: Seluruh aktivitas pialang di situs web ini disediakan oleh FX Trading LLC, yang terdaftar di Republik Kosta Rika. FX Trading LLC tidak memberikan layanan kepada penduduk negara-negara EEA, AS, Israel, Inggris, Filipina, Jepang, dan Brasil.',
    definitions: [
      { term: 'Profil Klien', def: 'Ruang kerja yang dibuat di antarmuka web, digunakan oleh Klien untuk Operasi Trading dan Non-Trading serta untuk memasukkan informasi pribadi.' },
      { term: 'Klien', def: 'Setiap orang berusia di atas 18 tahun yang menggunakan layanan Perusahaan sesuai dengan Perjanjian ini.' },
      { term: 'Perusahaan', def: 'Badan hukum yang disebut "Pocket Option", yang menyediakan, sesuai dengan ketentuan Perjanjian ini, pelaksanaan operasi arbitrase untuk pembelian dan penjualan kontrak CFD.' },
      { term: 'Operasi Non-Trading', def: 'Operasi apa pun yang berkaitan dengan pengisian Rekening Trading Klien dengan dana yang diperlukan atau penarikan dana dari Rekening Trading Klien.' },
      { term: 'Data Klien', def: 'Kumpulan data pribadi tentang Klien, yang diberikan oleh Klien sendiri selama proses pendaftaran dan verifikasi dalam Profil Klien.' },
      { term: 'Rekening Trading Klien', def: 'Akun khusus di server Perusahaan yang memungkinkan Klien melakukan Operasi Trading.' },
      { term: 'Operasi Trading', def: 'Operasi arbitrase untuk pembelian dan penjualan kontrak trading yang dilakukan oleh Klien melalui Terminal Trading yang tersedia di Profil Klien.' },
      { term: 'Server Trading Perusahaan', def: 'Server milik Perusahaan dengan perangkat lunak khusus yang digunakan untuk melakukan Operasi Trading dan Non-Trading serta melacak statistik operasi tersebut.' },
      { term: 'Terminal Trading', def: 'Antarmuka khusus yang terletak di Profil Klien, terhubung ke Server Trading Perusahaan, dan digunakan oleh Klien untuk melakukan Operasi Trading.' },
    ],
    sections: [
      {
        num: '1', title: 'Ketentuan Umum',
        items: [
          'Layanan yang disediakan oleh Perusahaan adalah layanan Internet yang menggunakan situs web resmi Perusahaan untuk melakukan Operasi Trading. Penggunaan layanan mengimplikasikan ketersediaan koneksi Internet berkecepatan tinggi yang stabil di sisi Klien.',
          'Perusahaan mewajibkan Klien untuk memasukkan data pribadi dengan benar dan berhak memverifikasi identitas Klien melalui: mengunggah salinan pindaian dokumen ke Profil Klien; panggilan telepon ke nomor yang tercantum; atau cara lain yang diperlukan atas kebijaksanaan Perusahaan.',
          'Seorang Klien, tanpa memandang status hukum, dilarang memiliki lebih dari satu Profil Klien. Perusahaan berhak mengakhiri Perjanjian ini atau mengatur ulang hasil Operasi Trading jika terjadi pendaftaran ulang atau penggunaan beberapa Rekening Trading oleh Klien yang sama.',
          'Klien bertanggung jawab atas keamanan data autentikasi yang diterima dari Perusahaan. Jika kehilangan akses ke Profil, Klien harus segera memberitahu Perusahaan.',
          'Perusahaan melakukan penawaran harga menggunakan sumber harga berbayar miliknya sendiri. Kutipan dari perusahaan lain tidak dapat diperhitungkan dalam pertimbangan sengketa.',
          'Klien dilarang melakukan jenis aktivitas curang apa pun, termasuk spekulasi bonus dan trading yang melanggar aturan. Perusahaan berhak mengakhiri Perjanjian atau mengatur ulang hasil Operasi Trading.',
          'Klien harus memastikan bahwa kegiatannya sepenuhnya sesuai dengan peraturan perundang-undangan negara tempat kegiatan tersebut dilakukan dan menerima tanggung jawab atas pembayaran semua pajak dan biaya yang timbul dari Operasi Trading.',
        ],
      },
      {
        num: '2', title: 'Prosedur Operasi Non-Trading',
        items: [
          'Operasi Non-Trading mencakup operasi yang dilakukan oleh Klien untuk menyetorkan dana ke Rekening Trading Klien serta menarik dana darinya.',
          'Operasi Non-Trading dilakukan oleh Klien dengan bantuan fungsionalitas Profil Klien. Perusahaan tidak melakukan Operasi Non-Trading yang diminta melalui sarana komunikasi konvensional (email, live chat, dll.).',
          'Saat melakukan Operasi Non-Trading, Klien hanya diperbolehkan menggunakan dana pribadi yang disimpan di akun pembayaran elektronik atau bank yang dimiliki oleh Klien.',
          'Perusahaan menetapkan jumlah minimum berikut untuk Operasi Non-Trading (kecuali ditentukan lain): Setoran — 0,1 USD; Penarikan — 10 USD.',
          'Penarikan dana harus dilakukan menggunakan metode pembayaran yang sama yang sebelumnya digunakan untuk setoran, guna memastikan kepatuhan terhadap standar legislatif yang berlaku.',
          'Perusahaan tidak mengizinkan penggunaan layanan yang diberikan sebagai sarana untuk mengekstrak keuntungan dari Operasi Non-Trading atau dengan cara apa pun selain tujuan yang dimaksudkan.',
        ],
      },
      {
        num: '3', title: 'Prosedur Operasi Trading',
        items: [
          'Operasi Trading mencakup operasi arbitrase untuk penjualan dan pembelian kontrak trading dengan instrumen trading yang disediakan oleh Perusahaan, yang dieksekusi melalui Terminal Trading.',
          'Perusahaan menyediakan harga di Terminal Trading menggunakan teknologi Eksekusi Pasar — harga yang ada pada saat pemrosesan permintaan Klien dalam antrian Server Trading Perusahaan.',
          'Deviasi maksimum harga yang ditunjukkan di Terminal Trading Klien dari harga yang ada di Server Trading Perusahaan tidak melebihi nilai dua spread rata-rata untuk instrumen trading yang dimaksud.',
          'Klien dapat menyimpan sejumlah Operasi Trading yang terbuka secara bersamaan. Total volume semua Operasi Trading baru yang dibuka tidak boleh melebihi saldo Rekening Trading Klien.',
          'Dalam kondisi pasar normal, permintaan Klien biasanya diproses dalam 0–4 detik. Dalam kondisi pasar yang tidak normal, waktu pemrosesan dapat meningkat.',
          'Untuk kontrak tipe "Call": jika harga penutupan melebihi harga pembukaan, kontrak dianggap dieksekusi dan keuntungan dikreditkan ke Rekening Trading Klien. Jika harga penutupan lebih rendah, kontrak tidak dieksekusi dan margin didebit.',
          'Untuk kontrak tipe "Put": jika harga penutupan lebih rendah dari harga pembukaan, kontrak dianggap dieksekusi dan keuntungan dikreditkan. Jika harga penutupan lebih tinggi, kontrak tidak dieksekusi dan margin didebit.',
          'Jika harga penutupan kontrak sama dengan harga pembukaannya, kontrak dianggap tidak dieksekusi dan jumlah margin yang sebelumnya ditetapkan dikembalikan ke Rekening Trading Klien.',
        ],
      },
      {
        num: '4', title: 'Bonus dan Promosi',
        items: [
          'Perusahaan berhak memberikan bonus kepada Klien di Rekening Trading. Jumlah dan ketentuan bonus ditentukan oleh Perusahaan atas kebijakannya sendiri.',
          'Klien dilarang menarik bonus hingga tercapai volume trading yang diperlukan sesuai dengan syarat penawaran bonus tertentu yang dikomunikasikan kepada Klien.',
          'Perusahaan berhak membatalkan, mengubah, atau menarik bonus atau penawaran promosi kapan saja tanpa pemberitahuan sebelumnya.',
          'Penyalahgunaan program bonus, termasuk membuat beberapa akun atau strategi lindung nilai untuk mengunci bonus, akan mengakibatkan pengakhiran Perjanjian secara langsung dan penyitaan semua dana.',
        ],
      },
      {
        num: '5', title: 'Penyelesaian Sengketa',
        items: [
          'Sengketa adalah ketidaksetujuan apa pun antara Perusahaan dan Klien yang timbul sehubungan dengan pelaksanaan Operasi Trading atau Non-Trading, atau timbul dari keadaan lain yang berkaitan dengan Perjanjian ini.',
          'Untuk menyelesaikan sengketa, Klien harus mengajukan keluhan kepada Dukungan Pelanggan Perusahaan dalam 5 hari kerja setelah peristiwa yang disengketakan.',
          'Saat mempertimbangkan sengketa, Perusahaan menggunakan data dari Server Trading Perusahaan sebagai sumber informasi utama.',
          'Jika kegagalan teknis Server Trading mempengaruhi hasil Operasi Trading, Perusahaan berhak membatalkan hasil operasi yang terpengaruh dan memulihkan jumlah margin ke Rekening Trading Klien.',
        ],
      },
      {
        num: '6', title: 'Kerahasiaan',
        items: [
          'Perusahaan menjamin tidak mengungkapkan data pribadi Klien kepada pihak ketiga, kecuali dalam kasus di mana pengungkapan diperlukan oleh hukum yang berlaku.',
          'Perusahaan mengumpulkan, menyimpan, dan memproses Data Klien untuk tujuan menyediakan layanan yang dijelaskan dalam Perjanjian ini, memenuhi kewajiban hukum, dan mencegah penipuan serta pencucian uang.',
          'Perusahaan menggunakan langkah-langkah keamanan standar industri untuk melindungi Data Klien dari akses, perubahan, pengungkapan, atau penghancuran yang tidak sah.',
        ],
      },
      {
        num: '7', title: 'Pembatasan Tanggung Jawab dan Pengungkapan Risiko',
        items: [
          'Trading instrumen keuangan melibatkan risiko kerugian yang signifikan. Klien mengakui bahwa mereka sepenuhnya memahami risiko yang terkait dengan trading dan menerima tanggung jawab atas kerugian finansial yang timbul.',
          'Perusahaan tidak bertanggung jawab atas kerugian yang timbul dari: volatilitas pasar; gangguan sistem atau kegagalan teknis; peristiwa force majeure di luar kendali wajar Perusahaan; akses tidak sah ke akun Klien oleh pihak ketiga.',
          'Total tanggung jawab Perusahaan kepada Klien untuk klaim apa pun tidak akan melebihi saldo Rekening Trading Klien pada saat klaim timbul.',
        ],
      },
      {
        num: '8', title: 'Negara-negara yang Dibatasi',
        items: [
          'Perusahaan tidak memberikan layanan kepada penduduk atau warga negara dari negara dan wilayah berikut: Amerika Serikat (AS), Kanada, Australia, Inggris (Inggris Raya), negara-negara anggota Kawasan Ekonomi Eropa (KEE), Israel, Jepang, Brasil, Filipina, dan yurisdiksi lain mana pun di mana pemberian layanan tersebut dilarang oleh hukum yang berlaku.',
          'Klien menyatakan dan menjamin bahwa mereka bukan penduduk atau warga negara dari negara-negara yang dibatasi yang disebutkan di atas.',
          'Penggunaan VPN, proxy, atau cara lain untuk menghindari pembatasan geografis sangat dilarang dan merupakan pelanggaran Perjanjian ini.',
        ],
      },
    ],
  },
};

export default async function LangTermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = CONTENT[lang] ?? CONTENT.pt;

  return (
    <LegalShell
      lang={lang}
      breadcrumbHome={c.home}
      breadcrumbPage={c.page}
      title={c.title}
      updated={c.updated}
      contentsLabel={c.contentsLabel}
      tocItems={[
        { num: 'def', title: c.definitionsTitle, href: '#definitions' },
        ...c.sections.map(s => ({ num: s.num, title: s.title })),
      ]}
    >
      {/* Preamble */}
      <div className="legal-card">
        <div style={{ borderLeft: '4px solid #0099FA', paddingLeft: 24, color: '#4A5E78', fontSize: 17, lineHeight: 1.9 }}>{c.preamble}</div>
      </div>

      {/* Definitions */}
      <div id="definitions" className="legal-card">
        <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0D1B2A', marginBottom: 28, fontFamily: "'Montserrat', sans-serif" }}>{c.definitionsTitle}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {c.definitions.map((d, i) => (
            <div key={d.term} className="legal-def-row" style={{ borderBottom: i < c.definitions.length - 1 ? '1px solid #F0F4F8' : 'none' }}>
              <div style={{ fontWeight: 700, color: '#0D1B2A', fontSize: 16 }}>{d.term}</div>
              <div style={{ color: '#4A5E78', fontSize: 16, lineHeight: 1.85 }}>{d.def}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sections */}
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
