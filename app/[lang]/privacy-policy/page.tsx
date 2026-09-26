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
    title: 'Política de Privacidade | Pocket Option',
    description: 'Leia a Política de Privacidade da Pocket Option. Saiba como coletamos, usamos e protegemos seus dados pessoais ao usar nossa plataforma de trading.',
  },
  es: {
    title: 'Política de Privacidad | Pocket Option',
    description: 'Lea la Política de Privacidad de Pocket Option. Conozca cómo recopilamos, usamos y protegemos sus datos personales al utilizar nuestra plataforma de trading.',
  },
  ru: {
    title: 'Политика конфиденциальности | Pocket Option',
    description: 'Ознакомьтесь с Политикой конфиденциальности Pocket Option. Узнайте, как мы собираем, используем и защищаем ваши персональные данные.',
  },
  id: {
    title: 'Kebijakan Privasi | Pocket Option',
    description: 'Baca Kebijakan Privasi Pocket Option. Pelajari bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat menggunakan platform trading kami.',
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
    ...buildSeoMeta(lang, 'privacy-policy'),
  };
}

type Section = { num: string; title: string; paragraphs: string[] };
type LangContent = {
  pageTitle: string; home: string; page: string; updated: string;
  contentsLabel: string;
  sections: Section[];
};

const CONTENT: Record<string, LangContent> = {
  pt: {
    pageTitle: 'Política de Privacidade', home: 'Início', page: 'Política de Privacidade',
    updated: 'Última atualização: 17 de março de 2026',
    contentsLabel: 'Conteúdo',
    sections: [
      {
        num: '1', title: 'Introdução',
        paragraphs: [
          'Reconhecemos a importância de proteger as suas informações pessoais e respeitar a sua privacidade. Compreendemos que valoriza a discrição e espera que os seus dados sejam tratados com cuidado. É por isso que estamos totalmente comprometidos com a proteção da privacidade de cada utilizador dos nossos serviços.',
          'Esta Política de Privacidade descreve como recolhemos, utilizamos e divulgamos as suas informações pessoais quando acede ou interage com os nossos websites, aplicações e quaisquer outras plataformas digitais através das quais prestamos os nossos serviços (coletivamente denominados "Serviços").',
          'Esta Política faz parte integrante do nosso Acordo de Serviço. Ao utilizar os nossos Serviços, reconhece e concorda com os termos descritos nesta Política de Privacidade. O uso continuado dos Serviços após qualquer atualização constitui a aceitação da Política revista.',
        ],
      },
      {
        num: '2', title: 'Dados que Recolhemos e Como os Utilizamos',
        paragraphs: [
          'Podemos recolher, utilizar, armazenar e transferir diferentes tipos de dados pessoais sobre si e para diferentes fins. As principais categorias de dados que processamos incluem: dados de identidade (nome, data de nascimento, documento de identificação), dados de contacto (e-mail, telefone, morada), dados financeiros (detalhes de pagamento, histórico de transações, saldo da conta), dados técnicos (endereço IP, tipo de browser, identificadores do dispositivo) e dados de utilização (páginas visitadas, funcionalidades usadas, atividade de trading).',
          'Processamos estes dados em conformidade com a legislação aplicável para: fornecer e manter a plataforma de trading; processar transações e enviar confirmações; verificar a sua identidade e cumprir obrigações legais (KYC/AML); detetar e prevenir fraudes e riscos de segurança; analisar a utilização da plataforma e melhorar os nossos serviços; e comunicar atualizações importantes e alertas de segurança.',
          'Os dados pessoais são processados com base nas seguintes bases legais: execução de um contrato; cumprimento de obrigações legais; interesses comerciais legítimos; e, quando aplicável, o seu consentimento explícito. Note que a legislação aplicável pode exigir que retenhamos certos dados mesmo após o encerramento ou eliminação da conta.',
        ],
      },
      {
        num: '3', title: 'Classificação & Trading Social',
        paragraphs: [
          'Ao utilizar a plataforma, reconhece e concorda em participar no sistema de classificação (leaderboard) e partilhar as suas estratégias e resultados de trading. Concede-nos permissão para exibir os seus dados pessoais — incluindo o seu nome, pontos de experiência e estatísticas relacionadas — como parte do leaderboard disponível na plataforma.',
          'Autoriza-nos também a gerar sinais de trading com base nas suas atividades e a partilhar informações generalizadas derivadas das suas negociações. Os dados processados para este fim limitam-se estritamente a: nome de utilizador, métrica ROI (percentagem de negociações bem-sucedidas), nível de experiência e posição no ranking.',
          'Nota: O valor monetário real das suas negociações nunca é tornado público. Apenas a métrica ROI — que representa a percentagem de negociações bem-sucedidas em relação ao total — é utilizada para determinar a sua posição no leaderboard.',
        ],
      },
      {
        num: '4', title: 'Cookies & Tecnologias de Rastreamento',
        paragraphs: [
          'Nós e os nossos parceiros de confiança utilizamos cookies e tecnologias de rastreamento semelhantes em conexão com os nossos serviços. Um cookie é um pequeno ficheiro de dados colocado no seu dispositivo enquanto navega num website. Os cookies servem diversos fins úteis, como melhorar a experiência de navegação, ativar funcionalidades essenciais, lembrar as suas preferências e tornar a interação com os nossos Serviços mais rápida e fluida.',
          'O nosso website utiliza as seguintes categorias de cookies: estritamente necessários (indispensáveis para o funcionamento da plataforma); funcionais (memorizam as suas preferências e definições); analíticos (compreendem como os utilizadores interagem com os nossos Serviços); e publicitários (exibem anúncios relevantes). Embora os cookies não contenham informações que o identifiquem diretamente, podemos associar os dados recolhidos através de cookies às informações pessoais que armazenamos sobre si.',
          'Pode instruir o seu browser para recusar todos os cookies ou para indicar quando um cookie está a ser enviado. No entanto, se não aceitar cookies, algumas funcionalidades dos nossos Serviços podem não funcionar corretamente.',
        ],
      },
      {
        num: '5', title: 'Partilha & Divulgação de Informações',
        paragraphs: [
          'Não alugamos, vendemos nem partilhamos as suas informações pessoais ou corporativas com terceiros, exceto conforme especificamente descrito nesta Política de Privacidade. Podemos partilhar as suas informações com: subsidiárias ou entidades afiliadas; prestadores de serviços de terceiros de confiança (processadores de pagamentos, serviços de verificação de identidade, fornecedores de alojamento); e consultores profissionais, incluindo advogados e auditores.',
          'Podemos divulgar as suas informações pessoais se tivermos fundamentos razoáveis para acreditar que a divulgação é necessária para: cumprir a lei aplicável, regulamentação ou processo legal; fazer cumprir os nossos Termos e Condições; proteger os direitos, propriedade ou segurança da Pocket Option, dos nossos utilizadores ou do público; ou detetar, prevenir ou resolver problemas de fraude, segurança ou técnicos.',
          'Qualquer terceiro com quem partilhamos as suas informações é obrigado a manter padrões de proteção de dados equivalentes aos descritos nesta Política e está proibido de utilizar os seus dados para fins não autorizados.',
        ],
      },
      {
        num: '6', title: 'Links & Serviços de Terceiros',
        paragraphs: [
          'Esta Política de Privacidade aplica-se exclusivamente às informações que recolhemos e gerimos diretamente. Se optar por partilhar as suas informações com terceiros — por exemplo, clicando num link para outro website ou aplicação através dos nossos Serviços — saiba que podem aplicar-se práticas de privacidade diferentes.',
          'Websites, aplicações ou serviços de terceiros acedidos através da nossa plataforma podem ter as suas próprias políticas de privacidade e termos de utilização. Encorajamos fortemente a sua leitura cuidadosa antes de divulgar qualquer informação pessoal. A presença de um link para um recurso de terceiros não implica o nosso endosso ou recomendação.',
          'Isentamo-nos de qualquer responsabilidade pelo conteúdo, práticas de privacidade ou tratamento de dados de websites ou serviços externos. Esta Política de Privacidade não se estende às suas atividades nessas plataformas externas.',
        ],
      },
      {
        num: '7', title: 'Análise & Publicidade',
        paragraphs: [
          'Utilizamos o Google Analytics para compreender melhor como os utilizadores interagem com os nossos Serviços. O Google Analytics recolhe dados anonimizados, como a frequência com que os utilizadores visitam o nosso site e quais as páginas acedidas. Esta ferramenta recolhe o seu endereço IP na data da visita, mas não o seu nome nem qualquer informação de identificação pessoal. Não combinamos os dados do Google Analytics com informações que possam identificá-lo pessoalmente.',
          'Podemos utilizar tecnologias de publicidade para exibir anúncios — incluindo anúncios baseados em interesses e segmentados — quando acede ou utiliza os nossos Serviços. Podemos também envolver parceiros publicitários de terceiros e partilhar com eles informações não pessoais para medir o desempenho de campanhas publicitárias.',
          'Tem a opção de se recusar a participar em muitas redes de publicidade de terceiros. Note que a recusa não significa que deixará de ver anúncios — mas os anúncios que vir poderão ser menos relevantes para os seus interesses.',
        ],
      },
      {
        num: '8', title: 'Os Seus Direitos & Gestão de Dados',
        paragraphs: [
          'Tem o direito de solicitar a correção de dados pessoais imprecisos a qualquer momento. Pode também solicitar a eliminação dos seus dados pessoais, excluindo o histórico de transações e outras informações que somos legalmente obrigados a reter. Os pedidos devem incluir o seu nome completo e dados de contacto para um processamento mais rápido.',
          'Por defeito, eliminamos os dados pessoais quando já não são necessários para fins de processamento legítimos. Salvo indicação em contrário, retemos os dados recolhidos pelo tempo necessário para fornecer os nossos Serviços e cumprir obrigações legais (até 7 anos), resolver disputas e fazer cumprir os nossos acordos.',
          'Pode eliminar a sua conta através da interface da aplicação ou enviando um e-mail em branco com o assunto "delete account". Note que, mesmo após a eliminação, podemos reter certos dados (como registos de transações) conforme exigido por lei. Para solicitar o restauro da conta, envie um e-mail em branco com o assunto "restore account".',
        ],
      },
      {
        num: '9', title: 'Segurança de Dados',
        paragraphs: [
          'Implementamos medidas de segurança de padrão industrial para proteger a integridade e confidencialidade das suas informações. As nossas práticas de segurança incluem encriptação SSL/TLS para todos os dados em trânsito, armazenamento encriptado para dados sensíveis, autenticação de dois fatores opcional, auditorias de segurança regulares e controlos de acesso rigorosos.',
          'Embora nos esforcemos ao máximo para proteger os nossos Serviços, nenhum método de transmissão pela Internet ou armazenamento eletrónico é 100% seguro. Não podemos garantir proteção absoluta contra acesso não autorizado. Se acreditar que a sua privacidade foi comprometida, contacte-nos imediatamente.',
        ],
      },
      {
        num: '10', title: 'Comunicações de Marketing',
        paragraphs: [
          'Podemos utilizar as suas informações pessoais — como o seu nome, endereço de e-mail e número de telefone — para lhe fornecer materiais promocionais relacionados com os nossos Serviços. Pode optar por não receber comunicações de marketing a qualquer momento enviando um e-mail em branco com a palavra "remove" no assunto.',
          'Após receber o seu pedido, removeremos o seu contacto das nossas listas de distribuição. Note que pode precisar de cancelar a subscrição separadamente de quaisquer comunicações enviadas diretamente pelos nossos parceiros de marketing. Mesmo após cancelar a subscrição, poderá ainda receber notificações essenciais relacionadas com o serviço.',
        ],
      },
      {
        num: '11', title: 'Atualizações da Política',
        paragraphs: [
          'Podemos atualizar esta Política de Privacidade a nosso critério. Quando fizermos alterações materiais, notificá-lo-emos através da plataforma ou por e-mail. A versão mais recente estará sempre disponível no nosso website.',
          'Recomendamos que reveja esta Política regularmente para se manter informado sobre como os seus dados são geridos. O uso continuado dos nossos Serviços após quaisquer alterações a esta Política de Privacidade constitui a sua aceitação dos termos atualizados.',
        ],
      },
    ],
  },

  es: {
    pageTitle: 'Política de Privacidad', home: 'Inicio', page: 'Política de Privacidad',
    updated: 'Última actualización: 17 de marzo de 2026',
    contentsLabel: 'Contenido',
    sections: [
      {
        num: '1', title: 'Introducción',
        paragraphs: [
          'Reconocemos la importancia de salvaguardar su información personal y respetar su privacidad. Entendemos que valora la discreción y espera que sus datos sean manejados con cuidado. Es por eso que estamos totalmente comprometidos con la protección de la privacidad de cada usuario de nuestros servicios.',
          'Esta Política de Privacidad describe cómo recopilamos, usamos y divulgamos su información personal cuando accede o interactúa con nuestros sitios web, aplicaciones y cualquier otra plataforma digital a través de la cual prestamos nuestros servicios (denominados colectivamente "Servicios").',
          'Esta Política forma parte integral de nuestro Acuerdo de Servicio. Al usar nuestros Servicios, reconoce y acepta los términos descritos en esta Política de Privacidad. El uso continuado de los Servicios tras cualquier actualización constituye su aceptación de la Política revisada.',
        ],
      },
      {
        num: '2', title: 'Datos que Recopilamos y Cómo los Usamos',
        paragraphs: [
          'Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted y para diferentes fines. Las principales categorías de datos que procesamos incluyen: datos de identidad (nombre, fecha de nacimiento, documento de identidad), datos de contacto (correo electrónico, teléfono, dirección), datos financieros (detalles de pago, historial de transacciones, saldo de cuenta), datos técnicos (dirección IP, tipo de navegador, identificadores de dispositivo) y datos de uso (páginas visitadas, funciones usadas, actividad de trading).',
          'Procesamos estos datos en cumplimiento de las leyes aplicables para: proporcionar y mantener la plataforma de trading; procesar transacciones y enviar confirmaciones; verificar su identidad y cumplir obligaciones legales (KYC/AML); detectar y prevenir fraudes y riesgos de seguridad; analizar el uso de la plataforma y mejorar nuestros servicios; y comunicar actualizaciones importantes y alertas de seguridad.',
          'Los datos personales se procesan con base en las siguientes bases legales: ejecución de un contrato; cumplimiento de obligaciones legales; intereses comerciales legítimos; y, cuando corresponda, su consentimiento explícito. Tenga en cuenta que las leyes aplicables pueden requerir que retengamos ciertos datos incluso después de la terminación o eliminación de la cuenta.',
        ],
      },
      {
        num: '3', title: 'Clasificación & Trading Social',
        paragraphs: [
          'Al usar la plataforma, reconoce y acepta participar en el sistema de clasificación (leaderboard) y compartir sus estrategias y resultados de trading. Nos otorga permiso para mostrar sus datos personales — incluidos su nombre, puntos de experiencia y estadísticas relacionadas — como parte del leaderboard disponible en la plataforma.',
          'También nos autoriza a generar señales de trading basadas en sus actividades y a compartir información generalizada derivada de sus operaciones. Los datos procesados para este fin se limitan estrictamente a: nombre de usuario, métrica ROI (porcentaje de operaciones exitosas), nivel de experiencia y posición en el ranking.',
          'Nota: El monto monetario real de sus operaciones nunca se hace público. Solo la métrica ROI — que representa el porcentaje de operaciones exitosas en relación al total — se usa para determinar su posición en el leaderboard.',
        ],
      },
      {
        num: '4', title: 'Cookies & Tecnologías de Seguimiento',
        paragraphs: [
          'Nosotros y nuestros socios de confianza usamos cookies y tecnologías de seguimiento similares en conexión con nuestros servicios. Una cookie es un pequeño archivo de datos colocado en su dispositivo mientras navega por un sitio web. Las cookies sirven para varios fines útiles, como mejorar su experiencia de navegación, habilitar funciones clave, recordar sus preferencias y hacer su interacción con nuestros Servicios más rápida y fluida.',
          'Nuestro sitio web utiliza las siguientes categorías de cookies: estrictamente necesarias (imprescindibles para el funcionamiento de la plataforma); funcionales (recuerdan sus preferencias y configuraciones); analíticas (comprenden cómo los usuarios interactúan con nuestros Servicios); y publicitarias (muestran anuncios relevantes). Aunque las cookies no contienen información que lo identifique directamente, podemos vincular los datos recopilados a través de cookies con la información personal que almacenamos sobre usted.',
          'Puede instruir a su navegador para que rechace todas las cookies o para que indique cuándo se está enviando una cookie. Sin embargo, si no acepta cookies, algunas funciones de nuestros Servicios pueden no funcionar correctamente.',
        ],
      },
      {
        num: '5', title: 'Uso Compartido & Divulgación de Información',
        paragraphs: [
          'No alquilamos, vendemos ni compartimos su información personal o corporativa con terceros, excepto según se describe específicamente en esta Política de Privacidad. Podemos compartir su información con: subsidiarias o entidades afiliadas; proveedores de servicios de terceros de confianza (procesadores de pagos, servicios de verificación de identidad, proveedores de alojamiento); y asesores profesionales, incluidos abogados y auditores.',
          'Podemos divulgar su información personal si tenemos la creencia razonable de que la divulgación es necesaria para: cumplir con la ley aplicable, regulación o proceso legal; hacer cumplir nuestros Términos y Condiciones; proteger los derechos, propiedad o seguridad de Pocket Option, nuestros usuarios o el público; o detectar, prevenir o resolver problemas de fraude, seguridad o técnicos.',
          'Cualquier tercero con quien compartamos su información está obligado a mantener estándares de protección de datos equivalentes a los descritos en esta Política y tiene prohibido usar sus datos para fines no autorizados.',
        ],
      },
      {
        num: '6', title: 'Enlaces & Servicios de Terceros',
        paragraphs: [
          'Esta Política de Privacidad se aplica únicamente a la información que recopilamos y gestionamos directamente. Si elige compartir su información con terceros — por ejemplo, haciendo clic en un enlace a otro sitio web o aplicación a través de nuestros Servicios — tenga en cuenta que pueden aplicarse prácticas de privacidad diferentes.',
          'Los sitios web, aplicaciones o servicios de terceros a los que se accede a través de nuestra plataforma pueden tener sus propias políticas de privacidad y términos de uso. Le recomendamos encarecidamente revisarlos cuidadosamente antes de divulgar información personal. La presencia de un enlace a un recurso de terceros no implica nuestro respaldo o recomendación.',
          'Declinamos cualquier responsabilidad por el contenido, las prácticas de privacidad o el manejo de datos de sitios web o servicios externos. Esta Política de Privacidad no se extiende a sus actividades en dichas plataformas externas.',
        ],
      },
      {
        num: '7', title: 'Análisis & Publicidad',
        paragraphs: [
          'Usamos Google Analytics para entender mejor cómo los usuarios interactúan con nuestros Servicios. Google Analytics recopila datos anonimizados, como la frecuencia con la que los usuarios visitan nuestro sitio y qué páginas acceden. Esta herramienta recopila su dirección IP en la fecha de su visita, pero no su nombre ni ninguna información de identificación personal. No combinamos los datos de Google Analytics con información que pueda identificarle personalmente.',
          'Podemos emplear tecnologías de publicidad para mostrar anuncios — incluidos anuncios basados en intereses y dirigidos — cuando accede o usa nuestros Servicios. También podemos involucrar a socios publicitarios de terceros y compartir con ellos información no personal para medir el rendimiento de las campañas publicitarias.',
          'Tiene la opción de optar por no participar en muchas redes de publicidad de terceros. Tenga en cuenta que optar por no participar no significa que dejará de ver anuncios — pero los anuncios que vea pueden ser menos relevantes para sus intereses.',
        ],
      },
      {
        num: '8', title: 'Sus Derechos & Gestión de Datos',
        paragraphs: [
          'Tiene derecho a solicitar la corrección de datos personales inexactos en cualquier momento. También puede solicitar la eliminación de sus datos personales, excluyendo el historial de transacciones y otra información que estamos legalmente obligados a conservar. Las solicitudes deben incluir su nombre completo y datos de contacto para un procesamiento más rápido.',
          'Por defecto, eliminamos los datos personales cuando ya no son necesarios para fines de procesamiento legítimos. Salvo que se indique lo contrario, conservamos los datos recopilados durante el tiempo necesario para prestar nuestros Servicios y cumplir obligaciones legales (hasta 7 años), resolver disputas y hacer cumplir nuestros acuerdos.',
          'Puede eliminar su cuenta a través de la interfaz de la aplicación o enviando un correo electrónico en blanco con el asunto "delete account". Para solicitar la restauración de la cuenta, envíe un correo en blanco con el asunto "restore account". Tenga en cuenta que algunas cuentas pueden no ser restaurables dependiendo del motivo de eliminación o el tiempo transcurrido.',
        ],
      },
      {
        num: '9', title: 'Seguridad de Datos',
        paragraphs: [
          'Implementamos medidas de seguridad estándar de la industria para proteger la integridad y confidencialidad de su información. Nuestras prácticas de seguridad incluyen cifrado SSL/TLS para todos los datos en tránsito, almacenamiento cifrado para datos sensibles, autenticación de dos factores opcional, auditorías de seguridad regulares y controles de acceso estrictos.',
          'Aunque hacemos todo lo posible para asegurar nuestros Servicios, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro. No podemos garantizar una protección absoluta contra el acceso no autorizado. Si cree que su privacidad ha sido comprometida, contáctenos de inmediato.',
        ],
      },
      {
        num: '10', title: 'Comunicaciones de Marketing',
        paragraphs: [
          'Podemos usar su información personal — como su nombre, dirección de correo electrónico y número de teléfono — para proporcionarle materiales promocionales relacionados con nuestros Servicios. Puede optar por no recibir comunicaciones de marketing en cualquier momento enviando un correo electrónico en blanco con la palabra "remove" en el asunto.',
          'Tras recibir su solicitud, eliminaremos su contacto de nuestras listas de distribución. Tenga en cuenta que es posible que deba cancelar la suscripción por separado de cualquier comunicación enviada directamente por nuestros socios de marketing. Incluso después de cancelar la suscripción, puede seguir recibiendo notificaciones esenciales relacionadas con el servicio.',
        ],
      },
      {
        num: '11', title: 'Actualizaciones de la Política',
        paragraphs: [
          'Podemos actualizar esta Política de Privacidad a nuestra discreción. Cuando realicemos cambios materiales, le notificaremos a través de la plataforma o por correo electrónico. La versión más reciente siempre estará disponible en nuestro sitio web.',
          'Recomendamos revisar esta Política regularmente para mantenerse informado sobre cómo se gestionan sus datos. El uso continuado de nuestros Servicios tras cualquier cambio en esta Política de Privacidad constituye su aceptación de los términos actualizados.',
        ],
      },
    ],
  },

  ru: {
    pageTitle: 'Политика конфиденциальности', home: 'Главная', page: 'Политика конфиденциальности',
    updated: 'Последнее обновление: 17 марта 2026 г.',
    contentsLabel: 'Содержание',
    sections: [
      {
        num: '1', title: 'Введение',
        paragraphs: [
          'Мы признаём важность защиты ваших персональных данных и уважения вашей конфиденциальности. Мы понимаем, что вы цените осторожность в обращении с данными и ожидаете внимательного отношения к своей информации. Именно поэтому мы полностью привержены защите конфиденциальности каждого пользователя наших услуг.',
          'Настоящая Политика конфиденциальности описывает, как мы собираем, используем и раскрываем ваши персональные данные при доступе к нашим веб-сайтам, приложениям и иным цифровым платформам, через которые мы оказываем наши услуги (далее совместно именуемые «Услуги»).',
          'Настоящая Политика является неотъемлемой частью нашего Соглашения об оказании услуг. Используя наши Услуги, вы признаёте и соглашаетесь с условиями настоящей Политики конфиденциальности. Продолжение использования Услуг после любых обновлений означает принятие изменённой Политики.',
        ],
      },
      {
        num: '2', title: 'Данные, которые мы собираем, и их использование',
        paragraphs: [
          'Мы можем собирать, использовать, хранить и передавать различные виды персональных данных о вас и для различных целей. Основные категории обрабатываемых данных включают: данные об идентичности (имя, дата рождения, документ, удостоверяющий личность), контактные данные (e-mail, телефон, адрес), финансовые данные (платёжные реквизиты, история транзакций, баланс счёта), технические данные (IP-адрес, тип браузера, идентификаторы устройства) и данные об использовании (посещённые страницы, используемые функции, торговая активность).',
          'Мы обрабатываем эти данные в соответствии с применимым законодательством в целях: предоставления и поддержания торговой платформы; обработки транзакций и отправки подтверждений; верификации вашей личности и соблюдения правовых обязательств (KYC/AML); обнаружения и предотвращения мошенничества и рисков безопасности; анализа использования платформы и улучшения наших услуг; а также для информирования о важных обновлениях и предупреждениях безопасности.',
          'Персональные данные обрабатываются на основании следующих правовых оснований: исполнение договора; соблюдение правовых обязательств; законные деловые интересы; а там, где это применимо, ваше явное согласие. Обратите внимание, что применимое законодательство может требовать от нас хранения определённых данных даже после расторжения договора или удаления аккаунта.',
        ],
      },
      {
        num: '3', title: 'Рейтинговая таблица и социальный трейдинг',
        paragraphs: [
          'Используя платформу, вы признаёте и соглашаетесь на участие в системе рейтинговой таблицы (лидерборде) и на публикацию ваших торговых стратегий и результатов. Вы предоставляете нам разрешение отображать ваши персональные данные — включая имя, очки опыта и связанную статистику — в лидерборде, доступном на платформе.',
          'Вы также разрешаете нам генерировать торговые сигналы на основе вашей активности и делиться обобщёнными сведениями, основанными на ваших сделках. Данные, обрабатываемые для этой цели, строго ограничены: имя пользователя, показатель ROI (процент успешных сделок), уровень опыта и позиция в рейтинге.',
          'Примечание: реальный денежный объём ваших сделок никогда не публикуется. Только показатель ROI — представляющий процент успешных сделок от общего числа — используется для определения вашей позиции в лидерборде.',
        ],
      },
      {
        num: '4', title: 'Файлы cookie и технологии отслеживания',
        paragraphs: [
          'Мы и наши надёжные партнёры используем файлы cookie и аналогичные технологии отслеживания в связи с нашими услугами. Cookie — это небольшой файл данных, размещаемый на вашем устройстве во время просмотра веб-сайта. Cookie выполняют различные полезные функции: улучшают работу браузера, обеспечивают ключевые функции, запоминают ваши предпочтения и делают взаимодействие с нашими Услугами быстрее и удобнее.',
          'Наш сайт использует следующие категории файлов cookie: строго необходимые (обязательны для работы платформы); функциональные (запоминают ваши предпочтения и настройки); аналитические (помогают понять, как пользователи взаимодействуют с нашими Услугами); и рекламные (показывают релевантную рекламу). Хотя файлы cookie сами по себе не содержат информации, позволяющей идентифицировать вас, мы можем связывать собранные через них данные с вашими персональными данными.',
          'Вы можете настроить браузер на отклонение всех файлов cookie или на отображение предупреждения при их отправке. Однако отказ от файлов cookie может привести к ограничению функциональности наших Услуг.',
        ],
      },
      {
        num: '5', title: 'Передача и раскрытие информации',
        paragraphs: [
          'Мы не сдаём в аренду, не продаём и не передаём ваши персональные или корпоративные данные третьим лицам, за исключением случаев, конкретно описанных в настоящей Политике конфиденциальности. Мы можем передавать ваши данные: дочерним или аффилированным структурам; надёжным сторонним поставщикам услуг (платёжным процессорам, службам верификации личности, хостинг-провайдерам); а также профессиональным консультантам, включая юристов и аудиторов.',
          'Мы можем раскрыть ваши персональные данные, если у нас есть разумные основания полагать, что раскрытие необходимо для: соблюдения применимого закона, нормативного акта или судебного требования; исполнения наших Условий использования; защиты прав, собственности или безопасности Pocket Option, наших пользователей или общества; или для обнаружения, предотвращения и устранения проблем с мошенничеством, безопасностью или технических неисправностей.',
          'Любая третья сторона, которой мы передаём ваши данные, обязана соблюдать стандарты защиты данных, эквивалентные установленным в настоящей Политике, и не имеет права использовать ваши данные в неразрешённых целях.',
        ],
      },
      {
        num: '6', title: 'Сторонние ссылки и сервисы',
        paragraphs: [
          'Настоящая Политика конфиденциальности распространяется исключительно на информацию, которую мы собираем и обрабатываем самостоятельно. Если вы решите передать свои данные третьим лицам — например, перейдя по ссылке на другой сайт или приложение через наши Услуги — имейте в виду, что к этим данным могут применяться иные правила конфиденциальности.',
          'Сторонние веб-сайты, приложения или сервисы, доступные через нашу платформу, могут иметь собственные политики конфиденциальности и условия использования. Мы настоятельно рекомендуем внимательно ознакомиться с ними перед предоставлением персональных данных. Наличие ссылки на сторонний ресурс не означает нашей поддержки или рекомендации.',
          'Мы снимаем с себя ответственность за содержание, политику конфиденциальности и обработку данных внешними сайтами или сервисами. Настоящая Политика не распространяется на вашу деятельность на таких внешних платформах.',
        ],
      },
      {
        num: '7', title: 'Аналитика и реклама',
        paragraphs: [
          'Мы используем Google Analytics для лучшего понимания того, как пользователи взаимодействуют с нашими Услугами. Google Analytics собирает анонимизированные данные — например, как часто пользователи посещают наш сайт и какие страницы просматривают. Этот инструмент фиксирует ваш IP-адрес в дату посещения, но не ваше имя и не какие-либо персональные идентификаторы. Мы не совмещаем данные Google Analytics с информацией, позволяющей идентифицировать вас лично.',
          'Мы можем использовать рекламные технологии для показа объявлений — в том числе основанных на интересах и таргетированных — при использовании наших Услуг. Мы также можем привлекать сторонних рекламных партнёров и передавать им неличную информацию для оценки эффективности рекламных кампаний.',
          'Вы можете отказаться от участия во многих сторонних рекламных сетях. Обратите внимание: отказ не означает полного прекращения показа рекламы — объявления просто могут быть менее релевантными для вас.',
        ],
      },
      {
        num: '8', title: 'Ваши права и управление данными',
        paragraphs: [
          'Вы вправе в любое время запросить исправление неточных персональных данных. Вы также можете запросить удаление ваших персональных данных, за исключением истории транзакций и иных данных, хранение которых предписано законом. Запросы должны содержать ваше полное имя и контактные данные для более быстрой обработки.',
          'По умолчанию мы удаляем персональные данные, когда они больше не нужны для законных целей обработки. Если не указано иное, мы храним собранные данные столько, сколько необходимо для оказания Услуг и выполнения правовых обязательств (до 7 лет), урегулирования споров и исполнения наших соглашений.',
          'Вы можете удалить свой аккаунт через интерфейс приложения или отправив пустое письмо с темой «delete account». Для восстановления аккаунта отправьте пустое письмо с темой «restore account». Учтите, что некоторые аккаунты могут не подлежать восстановлению в зависимости от причины удаления или прошедшего времени.',
        ],
      },
      {
        num: '9', title: 'Безопасность данных',
        paragraphs: [
          'Мы применяем отраслевые стандарты безопасности для защиты целостности и конфиденциальности вашей информации. Наши меры безопасности включают: шифрование SSL/TLS для всех данных при передаче, зашифрованное хранилище для конфиденциальных данных, опциональную двухфакторную аутентификацию, регулярные аудиты безопасности и строгий контроль доступа.',
          'Несмотря на все наши усилия по обеспечению безопасности Услуг, ни один метод передачи данных через Интернет или электронного хранения не является на 100% защищённым. Мы не можем гарантировать абсолютную защиту от несанкционированного доступа. Если вы считаете, что ваша конфиденциальность была нарушена, немедленно свяжитесь с нами.',
        ],
      },
      {
        num: '10', title: 'Маркетинговые коммуникации',
        paragraphs: [
          'Мы можем использовать ваши персональные данные — такие как имя, адрес электронной почты и номер телефона — для предоставления вам рекламных материалов, связанных с нашими Услугами. Вы можете отказаться от получения маркетинговых сообщений в любое время, отправив пустое письмо со словом «remove» в теме.',
          'После получения вашего запроса мы удалим ваши контактные данные из наших рассылочных списков. Обратите внимание, что вам может потребоваться отдельно отписаться от коммуникаций, направляемых непосредственно нашими маркетинговыми партнёрами. Даже после отписки вы можете продолжать получать важные уведомления, связанные с обслуживанием.',
        ],
      },
      {
        num: '11', title: 'Обновления политики',
        paragraphs: [
          'Мы можем обновлять настоящую Политику конфиденциальности по нашему усмотрению. При внесении существенных изменений мы уведомим вас через платформу или по адресу электронной почты, привязанному к вашему аккаунту. Актуальная версия всегда будет доступна на нашем сайте.',
          'Рекомендуем регулярно просматривать настоящую Политику, чтобы быть в курсе того, как управляются ваши данные. Продолжение использования наших Услуг после любых изменений в настоящей Политике конфиденциальности означает ваше согласие с обновлёнными условиями.',
        ],
      },
    ],
  },

  id: {
    pageTitle: 'Kebijakan Privasi', home: 'Beranda', page: 'Kebijakan Privasi',
    updated: 'Terakhir diperbarui: 17 Maret 2026',
    contentsLabel: 'Daftar Isi',
    sections: [
      {
        num: '1', title: 'Pendahuluan',
        paragraphs: [
          'Kami menyadari pentingnya menjaga informasi pribadi Anda dan menghormati privasi Anda. Kami memahami bahwa Anda menghargai kerahasiaan dan mengharapkan data Anda ditangani dengan hati-hati. Itulah mengapa kami sepenuhnya berkomitmen untuk melindungi privasi setiap pengguna layanan kami.',
          'Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan mengungkapkan informasi pribadi Anda saat Anda mengakses atau berinteraksi dengan situs web, aplikasi, dan platform digital lainnya yang kami gunakan untuk memberikan layanan kami (secara kolektif disebut sebagai "Layanan").',
          'Kebijakan ini merupakan bagian integral dari Perjanjian Layanan kami. Dengan menggunakan Layanan kami, Anda mengakui dan menyetujui ketentuan yang diuraikan dalam Kebijakan Privasi ini. Penggunaan Layanan yang berkelanjutan setelah pembaruan apa pun merupakan penerimaan Anda terhadap Kebijakan yang direvisi.',
        ],
      },
      {
        num: '2', title: 'Data yang Kami Kumpulkan & Cara Penggunaannya',
        paragraphs: [
          'Kami dapat mengumpulkan, menggunakan, menyimpan, dan mentransfer berbagai jenis data pribadi tentang Anda dan untuk berbagai tujuan. Kategori utama data yang kami proses meliputi: data identitas (nama, tanggal lahir, dokumen identitas), data kontak (email, telepon, alamat), data keuangan (detail pembayaran, riwayat transaksi, saldo akun), data teknis (alamat IP, jenis browser, pengidentifikasi perangkat) dan data penggunaan (halaman yang dikunjungi, fitur yang digunakan, aktivitas trading).',
          'Kami memproses data ini sesuai dengan hukum yang berlaku untuk: menyediakan dan memelihara platform trading; memproses transaksi dan mengirim konfirmasi; memverifikasi identitas Anda dan mematuhi kewajiban hukum (KYC/AML); mendeteksi dan mencegah penipuan dan risiko keamanan; menganalisis penggunaan platform dan meningkatkan layanan kami; serta mengomunikasikan pembaruan penting dan peringatan keamanan.',
          'Data pribadi diproses berdasarkan dasar hukum berikut: pelaksanaan kontrak; kepatuhan terhadap kewajiban hukum; kepentingan bisnis yang sah; dan, jika berlaku, persetujuan eksplisit Anda. Perlu diperhatikan bahwa hukum yang berlaku mungkin mengharuskan kami menyimpan data tertentu bahkan setelah pemutusan atau penghapusan akun.',
        ],
      },
      {
        num: '3', title: 'Papan Peringkat & Trading Sosial',
        paragraphs: [
          'Dengan menggunakan platform, Anda mengakui dan menyetujui untuk berpartisipasi dalam sistem papan peringkat (leaderboard) dan berbagi strategi serta hasil trading Anda. Anda memberi kami izin untuk menampilkan data pribadi Anda — termasuk nama, poin pengalaman, dan statistik terkait — sebagai bagian dari leaderboard yang tersedia di platform.',
          'Anda juga mengizinkan kami untuk menghasilkan sinyal trading berdasarkan aktivitas Anda dan untuk berbagi informasi umum yang berasal dari perdagangan Anda. Data yang diproses untuk tujuan ini terbatas secara ketat pada: nama pengguna, metrik ROI (persentase perdagangan yang berhasil), tingkat pengalaman, dan posisi peringkat.',
          'Catatan: Jumlah uang aktual dari perdagangan Anda tidak pernah dipublikasikan. Hanya metrik ROI — yang mewakili persentase perdagangan yang berhasil dibandingkan total perdagangan — yang digunakan untuk menentukan posisi Anda di leaderboard.',
        ],
      },
      {
        num: '4', title: 'Cookie & Teknologi Pelacakan',
        paragraphs: [
          'Kami dan mitra terpercaya kami menggunakan cookie dan teknologi pelacakan serupa sehubungan dengan layanan kami. Cookie adalah file data kecil yang ditempatkan di perangkat Anda saat menjelajahi situs web. Cookie memiliki berbagai tujuan yang berguna, seperti meningkatkan pengalaman menjelajah, mengaktifkan fitur utama, mengingat preferensi Anda, dan membuat interaksi dengan Layanan kami lebih cepat dan lancar.',
          'Situs web kami menggunakan kategori cookie berikut: yang sangat diperlukan (diperlukan agar platform berfungsi); fungsional (mengingat preferensi dan pengaturan Anda); analitis (memahami cara pengguna berinteraksi dengan Layanan kami); dan periklanan (menampilkan iklan yang relevan). Meskipun cookie tidak berisi informasi yang secara langsung mengidentifikasi Anda, kami dapat menghubungkan data yang dikumpulkan melalui cookie dengan informasi pribadi yang kami simpan tentang Anda.',
          'Anda dapat menginstruksikan browser untuk menolak semua cookie atau untuk memberi tahu saat cookie dikirim. Namun, jika Anda tidak menerima cookie, beberapa fitur Layanan kami mungkin tidak berfungsi dengan benar.',
        ],
      },
      {
        num: '5', title: 'Berbagi & Pengungkapan Informasi',
        paragraphs: [
          'Kami tidak menyewakan, menjual, atau berbagi informasi pribadi atau perusahaan Anda dengan pihak ketiga, kecuali sebagaimana dijelaskan secara khusus dalam Kebijakan Privasi ini. Kami dapat berbagi informasi Anda dengan: anak perusahaan atau entitas afiliasi; penyedia layanan pihak ketiga yang terpercaya (pemroses pembayaran, layanan verifikasi identitas, penyedia hosting); dan penasihat profesional termasuk pengacara dan auditor.',
          'Kami dapat mengungkapkan informasi pribadi Anda jika kami memiliki keyakinan yang beralasan bahwa pengungkapan tersebut diperlukan untuk: mematuhi hukum, peraturan, atau proses hukum yang berlaku; menegakkan Syarat dan Ketentuan kami; melindungi hak, properti, atau keamanan Pocket Option, pengguna kami, atau publik; atau mendeteksi, mencegah, atau mengatasi masalah penipuan, keamanan, atau teknis.',
          'Setiap pihak ketiga yang kami bagikan informasi Anda berkewajiban untuk menjaga standar perlindungan data yang setara dengan yang diuraikan dalam Kebijakan ini dan dilarang menggunakan data Anda untuk tujuan yang tidak sah.',
        ],
      },
      {
        num: '6', title: 'Tautan & Layanan Pihak Ketiga',
        paragraphs: [
          'Kebijakan Privasi ini hanya berlaku untuk informasi yang kami kumpulkan dan kelola secara langsung. Jika Anda memilih untuk berbagi informasi dengan pihak ketiga — misalnya, dengan mengklik tautan ke situs web atau aplikasi lain melalui Layanan kami — harap perhatikan bahwa praktik privasi yang berbeda mungkin berlaku.',
          'Situs web, aplikasi, atau layanan pihak ketiga yang diakses melalui platform kami mungkin memiliki kebijakan privasi dan ketentuan penggunaan sendiri. Kami sangat menganjurkan Anda untuk membacanya dengan seksama sebelum mengungkapkan informasi pribadi apa pun. Adanya tautan ke sumber daya pihak ketiga tidak menyiratkan dukungan atau rekomendasi kami.',
          'Kami menyangkal tanggung jawab atas konten, praktik privasi, atau penanganan data situs web atau layanan eksternal. Kebijakan Privasi ini tidak berlaku untuk aktivitas Anda di platform eksternal tersebut.',
        ],
      },
      {
        num: '7', title: 'Analitik & Periklanan',
        paragraphs: [
          'Kami menggunakan Google Analytics untuk lebih memahami cara pengguna berinteraksi dengan Layanan kami. Google Analytics mengumpulkan data anonim seperti seberapa sering pengguna mengunjungi situs kami dan halaman mana yang mereka akses. Alat ini mengumpulkan alamat IP Anda pada tanggal kunjungan, tetapi bukan nama atau informasi yang dapat mengidentifikasi Anda secara pribadi.',
          'Kami dapat menggunakan teknologi periklanan untuk menayangkan iklan — termasuk iklan berbasis minat dan bertarget — saat Anda mengakses atau menggunakan Layanan kami. Kami juga dapat melibatkan mitra periklanan pihak ketiga dan berbagi informasi non-pribadi dengan mereka untuk membantu mengukur kinerja kampanye iklan.',
          'Anda memiliki opsi untuk memilih keluar dari banyak jaringan periklanan pihak ketiga. Perlu diperhatikan bahwa memilih keluar tidak berarti Anda tidak akan melihat iklan sama sekali — tetapi iklan yang Anda lihat mungkin kurang relevan dengan minat Anda.',
        ],
      },
      {
        num: '8', title: 'Hak Anda & Pengelolaan Data',
        paragraphs: [
          'Anda memiliki hak untuk meminta koreksi data pribadi yang tidak akurat kapan saja. Anda juga dapat meminta penghapusan data pribadi Anda, tidak termasuk riwayat transaksi dan informasi lain yang wajib kami simpan secara hukum. Permintaan harus menyertakan nama lengkap dan detail kontak Anda untuk pemrosesan yang lebih cepat.',
          'Secara default, kami menghapus data pribadi ketika tidak lagi diperlukan untuk tujuan pemrosesan yang sah. Kecuali diperintahkan sebaliknya, kami menyimpan data yang dikumpulkan selama diperlukan untuk menyediakan Layanan kami dan memenuhi kewajiban hukum (hingga 7 tahun), menyelesaikan perselisihan, dan menegakkan perjanjian kami.',
          'Anda dapat menghapus akun Anda melalui antarmuka aplikasi atau dengan mengirim email kosong dengan subjek "delete account". Untuk meminta pemulihan akun, kirim email kosong dengan subjek "restore account". Perhatikan bahwa beberapa akun mungkin tidak dapat dipulihkan tergantung pada alasan penghapusan atau waktu yang telah berlalu.',
        ],
      },
      {
        num: '9', title: 'Keamanan Data',
        paragraphs: [
          'Kami menerapkan langkah-langkah keamanan standar industri untuk melindungi integritas dan kerahasiaan informasi Anda. Praktik keamanan kami mencakup enkripsi SSL/TLS untuk semua data dalam perjalanan, penyimpanan terenkripsi untuk data sensitif, autentikasi dua faktor opsional, audit keamanan rutin, dan kontrol akses yang ketat.',
          'Meskipun kami berusaha semaksimal mungkin untuk mengamankan Layanan kami, tidak ada metode transmisi internet atau penyimpanan elektronik yang 100% aman. Kami tidak dapat menjamin perlindungan mutlak terhadap akses tidak sah. Jika Anda yakin privasi Anda telah dikompromikan, segera hubungi kami.',
        ],
      },
      {
        num: '10', title: 'Komunikasi Pemasaran',
        paragraphs: [
          'Kami dapat menggunakan informasi pribadi Anda — seperti nama, alamat email, dan nomor telepon — untuk memberikan materi promosi terkait Layanan kami. Anda dapat memilih untuk tidak menerima komunikasi pemasaran kapan saja dengan mengirim email kosong dengan kata "remove" di baris subjek.',
          'Setelah menerima permintaan Anda, kami akan menghapus kontak Anda dari daftar distribusi kami. Perhatikan bahwa Anda mungkin perlu berhenti berlangganan secara terpisah dari komunikasi yang dikirim langsung oleh mitra pemasaran kami. Bahkan setelah berhenti berlangganan, Anda masih dapat menerima pemberitahuan penting terkait layanan.',
        ],
      },
      {
        num: '11', title: 'Pembaruan Kebijakan',
        paragraphs: [
          'Kami dapat memperbarui Kebijakan Privasi ini atas kebijakan kami sendiri. Ketika kami membuat perubahan material, kami akan memberi tahu Anda melalui platform atau melalui alamat email yang terkait dengan akun Anda. Versi terbaru akan selalu tersedia di situs web kami.',
          'Kami menyarankan untuk meninjau Kebijakan ini secara berkala agar tetap mendapat informasi tentang cara data Anda dikelola. Penggunaan Layanan kami yang berkelanjutan setelah perubahan apa pun pada Kebijakan Privasi ini merupakan penerimaan Anda atas ketentuan yang diperbarui.',
        ],
      },
    ],
  },
};

export default async function LangPrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
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
          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0D1B2A', marginBottom: 24, fontFamily: "'Montserrat', sans-serif", display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: 10, background: 'linear-gradient(135deg, #0099FA, #0070e0)', color: '#fff', fontSize: 17, fontWeight: 800, flexShrink: 0 }}>{s.num}</span>
            {s.title}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {s.paragraphs.map((p, i) => (
              <p key={i} style={{ margin: 0, fontSize: 16, color: '#4A5E78', lineHeight: 1.9 }}>{p}</p>
            ))}
          </div>
        </div>
      ))}
    </LegalShell>
  );
}
