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
    title: 'Política AML e KYC | Pocket Option',
    description: 'Leia a Política AML e KYC da Pocket Option. Saiba como prevenimos crimes financeiros e verificamos a identidade dos clientes.',
  },
  es: {
    title: 'Política AML y KYC | Pocket Option',
    description: 'Lea la Política AML y KYC de Pocket Option. Conozca cómo prevenimos delitos financieros y verificamos la identidad de los clientes.',
  },
  ru: {
    title: 'Политика AML и KYC | Pocket Option',
    description: 'Ознакомьтесь с Политикой AML и KYC Pocket Option. Узнайте, как мы предотвращаем финансовые преступления и верифицируем личности клиентов.',
  },
  id: {
    title: 'Kebijakan AML & KYC | Pocket Option',
    description: 'Baca Kebijakan AML & KYC Pocket Option. Pelajari bagaimana kami mencegah kejahatan keuangan dan memverifikasi identitas klien.',
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
    ...buildSeoMeta(lang, 'aml-policy'),
  };
}

type Section = { num: string; title: string; paragraphs: string[]; bullets?: string[] };
type LangContent = {
  pageTitle: string; pageSubtitle: string; home: string; page: string;
  updated: string; contentsLabel: string; sections: Section[];
};

const CONTENT: Record<string, LangContent> = {
  pt: {
    pageTitle: 'Política Anti-Lavagem de Dinheiro (AML) e',
    pageSubtitle: 'Conheça o Seu Cliente (KYC)',
    home: 'Início', page: 'Política AML e KYC',
    updated: 'Última atualização: 17 de março de 2026', contentsLabel: 'Conteúdo',
    sections: [
      {
        num: '1', title: 'Declaração de Política',
        paragraphs: [
          'É política do pocketoption.com e das suas afiliadas (doravante "A Empresa") proibir e ativamente prevenir a lavagem de dinheiro e qualquer atividade que facilite a lavagem de dinheiro ou o financiamento de atividades terroristas ou criminosas.',
          'A Empresa exige que os seus dirigentes, colaboradores e afiliadas adiram a estes padrões para prevenir o uso dos seus produtos e serviços para fins de lavagem de dinheiro. O cumprimento desta política é obrigatório para todos os colaboradores em todas as funções e níveis da organização.',
        ],
      },
      {
        num: '2', title: 'Definição de Lavagem de Dinheiro',
        paragraphs: [
          'No âmbito desta Política, a lavagem de dinheiro é geralmente definida como a prática de atos destinados a ocultar ou disfarçar as verdadeiras origens de receitas derivadas de atividades criminosas, de modo a que os rendimentos ilícitos pareçam ter tido origem legítima ou constituam ativos legítimos.',
          'Geralmente, a lavagem de dinheiro ocorre em três fases: Na fase de "colocação", o dinheiro proveniente de atividades criminosas é convertido em instrumentos monetários — como ordens de pagamento ou cheques de viagem — ou depositado em contas em instituições financeiras. Na fase de "estratificação", os fundos são transferidos ou movidos para outras contas ou instituições financeiras para distanciar ainda mais o dinheiro da sua origem criminosa. Na fase de "integração", os fundos são reintroduzidos na economia e utilizados para adquirir ativos legítimos ou para financiar outras atividades criminosas ou empresas legítimas.',
          'O financiamento do terrorismo pode não envolver os rendimentos de conduta criminosa, mas sim uma tentativa de ocultar a origem ou o uso pretendido dos fundos, que serão posteriormente utilizados para fins criminosos.',
        ],
      },
      {
        num: '3', title: 'Responsabilidades dos Colaboradores',
        paragraphs: [
          'Espera-se que cada colaborador da Empresa cujas funções estejam associadas à prestação de produtos e serviços e que lide direta ou indiretamente com clientes conheça os requisitos das leis e regulamentos aplicáveis que afetam as suas responsabilidades profissionais.',
          'Constitui dever afirmativo de cada colaborador cumprir as suas responsabilidades em todo o momento de forma que obedeça aos requisitos das leis e regulamentos relevantes. A ignorância das leis e regulamentos aplicáveis não será aceite como justificação para o incumprimento.',
        ],
      },
      {
        num: '4', title: 'Leis e Regulamentos Aplicáveis',
        paragraphs: ['As leis e regulamentos aplicáveis incluem, sem carácter limitativo, os seguintes quadros e normas internacionais:'],
        bullets: [
          '"Diligência Devida do Cliente para Bancos" (2001) e "Guia Geral para Abertura de Conta e Identificação do Cliente" (2003) do Comité de Basileia de Supervisão Bancária',
          'As Quarenta + Nove Recomendações sobre Lavagem de Dinheiro do Grupo de Ação Financeira (GAFI/FATF)',
          'Lei PATRIOT dos EUA (2001)',
          'Lei de Prevenção e Supressão de Atividades de Lavagem de Dinheiro (1996)',
        ],
      },
      {
        num: '5', title: 'Conformidade das Afiliadas e Conservação de Registos',
        paragraphs: [
          'Cada uma das afiliadas da Empresa é obrigada a cumprir as políticas AML e KYC nas respetivas jurisdições. Todas as afiliadas devem implementar controlos internos e procedimentos adequados, consistentes com esta Política.',
          'Toda a documentação de identificação e os registos de serviços devem ser conservados pelo período mínimo exigido pela legislação local. Estes registos devem ser disponibilizados às autoridades reguladoras competentes mediante solicitação.',
        ],
      },
      {
        num: '6', title: 'Formação dos Colaboradores',
        paragraphs: [
          'Todos os novos colaboradores receberão formação em anti-lavagem de dinheiro como parte do programa obrigatório de formação inicial. Esta formação destina-se a garantir que todos os colaboradores compreendam as suas obrigações ao abrigo dos regulamentos AML e KYC aplicáveis.',
          'Todos os colaboradores aplicáveis são obrigados a completar a formação AML e KYC anualmente. A participação em programas de formação direcionada adicionais é obrigatória para todos os colaboradores com responsabilidades AML e KYC no dia a dia.',
        ],
      },
      {
        num: '7', title: 'Verificação de Clientes (KYC)',
        paragraphs: [
          'A Empresa tem o direito de solicitar ao Cliente a confirmação das informações de registo a seu critério e em qualquer momento. Para verificar os dados, a Empresa pode solicitar ao Cliente cópias autenticadas de: passaporte, carta de condução ou bilhete de identidade nacional; extratos de conta bancária ou faturas de serviços públicos para confirmar a morada de residência. Em alguns casos, a Empresa pode pedir ao Cliente que forneça uma fotografia segurando o documento de identificação próximo ao rosto.',
          'O procedimento de verificação não é obrigatório, exceto quando o Cliente recebeu tal pedido da Empresa. No entanto, o Cliente pode voluntariamente enviar uma cópia do seu passaporte ou outro documento de identidade ao serviço de apoio ao cliente da Empresa. O Cliente deve ter em conta que, ao depositar ou levantar fundos por transferência bancária, é necessária a verificação completa do nome e morada.',
        ],
      },
      {
        num: '8', title: 'Alterações de Dados e Autenticidade dos Documentos',
        paragraphs: [
          'Se qualquer dado de registo do Cliente — incluindo nome completo, morada ou número de telefone — tiver sido alterado, o Cliente é obrigado a notificar imediatamente o serviço de apoio ao cliente da Empresa dessas alterações e solicitar que os dados sejam atualizados, ou a efetuar as alterações diretamente no Perfil do Cliente.',
          'Para alterar o número de telefone no Perfil do Cliente, o Cliente deve fornecer um documento que confirme a titularidade do novo número de telefone (como um contrato com um operador de telecomunicações) juntamente com uma fotografia de um documento de identidade emitido pelo governo seguro próximo ao rosto do Cliente. Os dados pessoais do Cliente devem ser consistentes em ambos os documentos.',
          'O Cliente é responsável pela autenticidade de todos os documentos e cópias submetidos, e reconhece o direito da Empresa de contactar as autoridades emissoras competentes para validar a sua autenticidade.',
        ],
      },
    ],
  },

  es: {
    pageTitle: 'Política contra el Lavado de Dinero (AML) y',
    pageSubtitle: 'Conozca a su Cliente (KYC)',
    home: 'Inicio', page: 'Política AML y KYC',
    updated: 'Última actualización: 17 de marzo de 2026', contentsLabel: 'Contenido',
    sections: [
      {
        num: '1', title: 'Declaración de Política',
        paragraphs: [
          'Es política de pocketoption.com y sus afiliadas (en adelante "La Empresa") prohibir y perseguir activamente la prevención del lavado de dinero y cualquier actividad que facilite el lavado de dinero o la financiación de actividades terroristas o criminales.',
          'La Empresa exige que sus directivos, empleados y afiliadas cumplan estos estándares para prevenir el uso de sus productos y servicios con fines de lavado de dinero. El cumplimiento de esta política es obligatorio para todo el personal en todas las funciones y niveles de la organización.',
        ],
      },
      {
        num: '2', title: 'Definición de Lavado de Dinero',
        paragraphs: [
          'En el contexto de esta Política, el lavado de dinero se define generalmente como la participación en actos diseñados para ocultar o disfrazar los verdaderos orígenes de los fondos derivados criminalmente, de modo que los fondos ilícitos parezcan haber provenido de orígenes legítimos o constituyan activos legítimos.',
          'Generalmente, el lavado de dinero ocurre en tres etapas: En la etapa de "colocación", el efectivo generado por actividades criminales se convierte en instrumentos monetarios — como giros postales o cheques de viajero — o se deposita en cuentas en instituciones financieras. En la etapa de "estratificación", los fondos se transfieren o mueven a otras cuentas o instituciones financieras para distanciar aún más el dinero de su origen criminal. En la etapa de "integración", los fondos se reintroducen en la economía y se utilizan para adquirir activos legítimos o para financiar otras actividades criminales o negocios legítimos.',
          'La financiación del terrorismo puede no involucrar los fondos de conducta criminal, sino más bien un intento de ocultar el origen o el uso previsto de los fondos, que luego se utilizarán para fines criminales.',
        ],
      },
      {
        num: '3', title: 'Responsabilidades de los Empleados',
        paragraphs: [
          'Se espera que cada empleado de La Empresa cuyas funciones estén asociadas con la prestación de productos y servicios y que trate directa o indirectamente con clientes conozca los requisitos de las leyes y regulaciones aplicables que afectan sus responsabilidades laborales.',
          'Será deber afirmativo de cada empleado cumplir sus responsabilidades en todo momento de manera que cumpla con los requisitos de las leyes y regulaciones relevantes. La ignorancia de las leyes y regulaciones aplicables no será aceptada como justificación para el incumplimiento.',
        ],
      },
      {
        num: '4', title: 'Leyes y Regulaciones Aplicables',
        paragraphs: ['Las leyes y regulaciones aplicables incluyen, entre otras, los siguientes marcos y estándares internacionales:'],
        bullets: [
          '"Debida diligencia del cliente para bancos" (2001) y "Guía general para la apertura de cuentas e identificación del cliente" (2003) del Comité de Supervisión Bancaria de Basilea',
          'Las Cuarenta + Nueve Recomendaciones sobre Lavado de Dinero del Grupo de Acción Financiera Internacional (GAFI/FATF)',
          'Ley USA PATRIOT (2001)',
          'Ley de Prevención y Supresión de Actividades de Lavado de Dinero (1996)',
        ],
      },
      {
        num: '5', title: 'Cumplimiento de Afiliadas y Conservación de Registros',
        paragraphs: [
          'Cada una de las afiliadas de La Empresa está obligada a cumplir con las políticas AML y KYC en sus respectivas jurisdicciones. Todas las afiliadas deben implementar controles internos y procedimientos apropiados, consistentes con esta Política.',
          'Toda la documentación de identificación y los registros de servicios se mantendrán durante el período mínimo requerido por la ley local. Estos registros deben ponerse a disposición de las autoridades reguladoras pertinentes cuando se soliciten.',
        ],
      },
      {
        num: '6', title: 'Capacitación de Empleados',
        paragraphs: [
          'Todos los nuevos empleados recibirán capacitación en anti-lavado de dinero como parte del programa obligatorio de formación inicial. Esta capacitación está diseñada para garantizar que todo el personal comprenda sus obligaciones bajo las regulaciones AML y KYC aplicables.',
          'Todos los empleados aplicables están obligados a completar la capacitación AML y KYC anualmente. La participación en programas de capacitación específicos adicionales es obligatoria para todos los empleados con responsabilidades AML y KYC en el día a día.',
        ],
      },
      {
        num: '7', title: 'Verificación de Clientes (KYC)',
        paragraphs: [
          'La Empresa tiene derecho a solicitar al Cliente la confirmación de la información de registro a su discreción y en cualquier momento. Para verificar los datos, la Empresa puede solicitar al Cliente copias notariadas de: pasaporte, licencia de conducir o documento nacional de identidad; estados de cuenta bancarios o facturas de servicios públicos para confirmar el domicilio. En algunos casos, la Empresa puede pedir al Cliente que proporcione una fotografía sosteniendo el documento de identidad cerca de su rostro.',
          'El procedimiento de verificación no es obligatorio a menos que el Cliente haya recibido dicha solicitud de la Empresa. Sin embargo, el Cliente puede enviar voluntariamente una copia de su pasaporte u otro documento de identidad al departamento de atención al cliente de la Empresa. El Cliente debe tener en cuenta que al depositar o retirar fondos mediante transferencia bancaria, se requiere verificación completa de nombre y domicilio.',
        ],
      },
      {
        num: '8', title: 'Cambios de Datos y Autenticidad de Documentos',
        paragraphs: [
          'Si algún dato de registro del Cliente — incluido nombre completo, dirección o número de teléfono — ha cambiado, el Cliente está obligado a notificar inmediatamente al departamento de atención al cliente de la Empresa sobre estos cambios y solicitar que los datos sean actualizados, o realizarlos directamente en el Perfil del Cliente.',
          'Para cambiar el número de teléfono en un Perfil de Cliente, el Cliente debe proporcionar un documento que confirme la titularidad del nuevo número de teléfono (como un contrato con un proveedor de servicios móviles) junto con una foto de un documento de identidad oficial sostenido cerca del rostro del Cliente. Los datos personales del Cliente deben ser consistentes en ambos documentos.',
          'El Cliente es responsable de la autenticidad de todos los documentos y copias enviados, y reconoce el derecho de la Empresa a contactar a las autoridades emisoras correspondientes para validar su autenticidad.',
        ],
      },
    ],
  },

  ru: {
    pageTitle: 'Политика противодействия отмыванию денег (AML) и',
    pageSubtitle: 'Знай своего клиента (KYC)',
    home: 'Главная', page: 'Политика AML и KYC',
    updated: 'Последнее обновление: 17 марта 2026 г.', contentsLabel: 'Содержание',
    sections: [
      {
        num: '1', title: 'Положения политики',
        paragraphs: [
          'Политика pocketoption.com и его аффилированных лиц (далее — «Компания») состоит в запрете и активном противодействии отмыванию денег, а также любой деятельности, способствующей отмыванию денег или финансированию террористических или преступных операций.',
          'Компания требует от своих руководителей, сотрудников и аффилированных лиц соблюдения данных стандартов в целях предотвращения использования её продуктов и услуг для отмывания денег. Соблюдение настоящей политики является обязательным для всего персонала на всех уровнях и во всех подразделениях организации.',
        ],
      },
      {
        num: '2', title: 'Определение отмывания денег',
        paragraphs: [
          'В контексте настоящей Политики отмывание денег в целом определяется как совершение действий, направленных на сокрытие или маскировку истинного происхождения средств, полученных преступным путём, с тем чтобы незаконные доходы выглядели как полученные из законных источников или как законные активы.',
          'Как правило, отмывание денег происходит в три этапа: На этапе «размещения» денежные средства, полученные от преступной деятельности, конвертируются в денежные инструменты — такие как денежные переводы или дорожные чеки — или вносятся на счета в финансовых учреждениях. На этапе «расслоения» средства переводятся или перемещаются на другие счета или в другие финансовые учреждения для дальнейшего отдаления денег от их преступного происхождения. На этапе «интеграции» средства вновь вводятся в экономику и используются для приобретения легальных активов или финансирования иной преступной деятельности или законного бизнеса.',
          'Финансирование терроризма может не предполагать доходов от преступной деятельности, а представлять собой попытку скрыть происхождение или предполагаемое использование средств, которые впоследствии будут направлены на преступные цели.',
        ],
      },
      {
        num: '3', title: 'Обязанности сотрудников',
        paragraphs: [
          'Каждый сотрудник Компании, чьи обязанности связаны с предоставлением продуктов и услуг и кто прямо или косвенно работает с клиентами, обязан знать требования применимых законов и нормативных актов, затрагивающих его должностные обязанности.',
          'Каждый такой сотрудник несёт безусловную обязанность выполнять свои обязанности в любое время способом, соответствующим требованиям применимых законов и нормативных актов. Незнание применимых законов и нормативных актов не принимается в качестве обоснования несоблюдения требований.',
        ],
      },
      {
        num: '4', title: 'Применимые законы и нормативные акты',
        paragraphs: ['Применимые законы и нормативные акты включают, в частности, следующие международные механизмы и стандарты:'],
        bullets: [
          '«Надлежащая проверка клиентов для банков» (2001) и «Общее руководство по открытию счетов и идентификации клиентов» (2003) Базельского комитета по банковскому надзору',
          'Сорок + девять рекомендаций по противодействию отмыванию денег Группы разработки финансовых мер борьбы с отмыванием денег (ФАТФ/FATF)',
          'Закон США «О патриотизме» (USA PATRIOT Act) (2001)',
          'Закон о предотвращении и пресечении деятельности по отмыванию денег (1996)',
        ],
      },
      {
        num: '5', title: 'Соответствие аффилированных лиц и хранение записей',
        paragraphs: [
          'Каждое аффилированное лицо Компании обязано соблюдать политики AML и KYC в соответствующих юрисдикциях. Все аффилированные лица должны внедрять надлежащие внутренние контрольные механизмы и процедуры, соответствующие настоящей Политике.',
          'Вся документация по идентификации и записи об услугах должны храниться в течение минимального срока, установленного местным законодательством. Эти записи должны быть предоставлены соответствующим регуляторным органам по их запросу.',
        ],
      },
      {
        num: '6', title: 'Обучение сотрудников',
        paragraphs: [
          'Все новые сотрудники проходят обучение по противодействию отмыванию денег в рамках обязательной программы вводного инструктажа. Это обучение призвано обеспечить понимание всеми сотрудниками своих обязательств в соответствии с применимыми нормами AML и KYC.',
          'Все соответствующие сотрудники обязаны ежегодно проходить обучение по AML и KYC. Участие в дополнительных целевых программах обучения обязательно для всех сотрудников, непосредственно занимающихся вопросами AML и KYC.',
        ],
      },
      {
        num: '7', title: 'Верификация клиентов (KYC)',
        paragraphs: [
          'Компания вправе в любое время по своему усмотрению запросить у Клиента подтверждение регистрационной информации. Для проверки данных Компания вправе запросить у Клиента нотариально заверенные копии: паспорта, водительского удостоверения или национального удостоверения личности; банковских выписок или счетов за коммунальные услуги для подтверждения адреса проживания. В некоторых случаях Компания может попросить Клиента предоставить фотографию с документом, удостоверяющим личность, поднесённым близко к лицу.',
          'Процедура верификации не является обязательной, если Клиент не получил соответствующего запроса от Компании. Однако Клиент может добровольно направить копию паспорта или иного документа, удостоверяющего личность, в службу поддержки клиентов Компании. Клиент должен учитывать, что при пополнении или выводе средств посредством банковского перевода требуется полная верификация имени и адреса.',
        ],
      },
      {
        num: '8', title: 'Изменение данных и подлинность документов',
        paragraphs: [
          'В случае изменения любых регистрационных данных Клиента — включая полное имя, адрес или номер телефона — Клиент обязан незамедлительно уведомить службу поддержки клиентов Компании об этих изменениях и запросить обновление данных либо внести изменения самостоятельно в Профиле Клиента.',
          'Для изменения номера телефона в Профиле Клиента необходимо предоставить документ, подтверждающий право собственности на новый номер (например, договор с оператором мобильной связи), а также фотографию с государственным документом, удостоверяющим личность, поднесённым близко к лицу Клиента. Персональные данные Клиента должны совпадать в обоих документах.',
          'Клиент несёт ответственность за подлинность всех представленных документов и их копий и признаёт право Компании обращаться в соответствующие выдавшие их органы для проверки подлинности.',
        ],
      },
    ],
  },

  id: {
    pageTitle: 'Kebijakan Anti-Pencucian Uang (AML) dan',
    pageSubtitle: 'Kenali Pelanggan Anda (KYC)',
    home: 'Beranda', page: 'Kebijakan AML & KYC',
    updated: 'Terakhir diperbarui: 17 Maret 2026', contentsLabel: 'Daftar Isi',
    sections: [
      {
        num: '1', title: 'Pernyataan Kebijakan',
        paragraphs: [
          'Kebijakan pocketoption.com dan afiliasinya (selanjutnya disebut "Perusahaan") adalah melarang dan secara aktif mencegah pencucian uang serta aktivitas apa pun yang memfasilitasi pencucian uang atau pendanaan kegiatan teroris atau kriminal.',
          'Perusahaan mewajibkan para pejabat, karyawan, dan afiliasinya untuk mematuhi standar-standar ini dalam mencegah penggunaan produk dan layanannya untuk tujuan pencucian uang. Kepatuhan terhadap kebijakan ini bersifat wajib bagi semua personel di semua fungsi dan tingkatan organisasi.',
        ],
      },
      {
        num: '2', title: 'Definisi Pencucian Uang',
        paragraphs: [
          'Dalam Kebijakan ini, pencucian uang secara umum didefinisikan sebagai keterlibatan dalam tindakan yang dirancang untuk menyembunyikan atau menyamarkan asal-usul sebenarnya dari hasil kejahatan sehingga hasil yang melanggar hukum tersebut tampak berasal dari sumber yang sah atau merupakan aset yang sah.',
          'Umumnya, pencucian uang terjadi dalam tiga tahap: Pada tahap "penempatan", uang tunai yang dihasilkan dari kegiatan kriminal dikonversi menjadi instrumen moneter — seperti wesel atau cek perjalanan — atau disimpan dalam rekening di lembaga keuangan. Pada tahap "pelapisan", dana dipindahkan atau ditransfer ke rekening atau lembaga keuangan lain untuk lebih memisahkan uang dari asal kriminalnya. Pada tahap "integrasi", dana dimasukkan kembali ke dalam ekonomi dan digunakan untuk membeli aset yang sah atau mendanai kegiatan kriminal lainnya atau bisnis yang sah.',
          'Pendanaan terorisme mungkin tidak melibatkan hasil dari tindak kejahatan, melainkan upaya untuk menyembunyikan asal atau tujuan penggunaan dana yang nantinya akan digunakan untuk tujuan kriminal.',
        ],
      },
      {
        num: '3', title: 'Tanggung Jawab Karyawan',
        paragraphs: [
          'Setiap karyawan Perusahaan yang tugasnya berkaitan dengan penyediaan produk dan layanan serta yang secara langsung atau tidak langsung berhubungan dengan klien diharapkan mengetahui persyaratan hukum dan peraturan yang berlaku yang memengaruhi tanggung jawab pekerjaannya.',
          'Setiap karyawan tersebut memiliki kewajiban mutlak untuk menjalankan tanggung jawabnya setiap saat dengan cara yang mematuhi persyaratan hukum dan peraturan yang relevan. Ketidaktahuan terhadap hukum dan peraturan yang berlaku tidak akan diterima sebagai pembenaran atas ketidakpatuhan.',
        ],
      },
      {
        num: '4', title: 'Hukum & Peraturan yang Berlaku',
        paragraphs: ['Hukum dan peraturan yang berlaku mencakup, namun tidak terbatas pada, kerangka dan standar internasional berikut:'],
        bullets: [
          '"Uji Tuntas Nasabah untuk Bank" (2001) dan "Panduan Umum untuk Pembukaan Rekening dan Identifikasi Nasabah" (2003) dari Komite Pengawasan Perbankan Basel',
          'Empat Puluh + Sembilan Rekomendasi tentang Pencucian Uang dari Satuan Tugas Aksi Keuangan (FATF)',
          'USA PATRIOT Act (2001)',
          'Undang-Undang Pencegahan dan Penindasan Kegiatan Pencucian Uang (1996)',
        ],
      },
      {
        num: '5', title: 'Kepatuhan Afiliasi & Penyimpanan Catatan',
        paragraphs: [
          'Masing-masing afiliasi Perusahaan wajib mematuhi kebijakan AML dan KYC di yurisdiksi masing-masing. Semua afiliasi harus menerapkan kontrol internal dan prosedur yang sesuai, konsisten dengan Kebijakan ini.',
          'Semua dokumentasi identifikasi dan catatan layanan harus disimpan untuk jangka waktu minimum yang disyaratkan oleh hukum setempat. Catatan-catatan ini harus tersedia untuk otoritas regulasi yang relevan atas permintaan.',
        ],
      },
      {
        num: '6', title: 'Pelatihan Karyawan',
        paragraphs: [
          'Semua karyawan baru akan menerima pelatihan anti-pencucian uang sebagai bagian dari program pelatihan awal yang wajib. Pelatihan ini dirancang untuk memastikan semua staf memahami kewajiban mereka berdasarkan peraturan AML dan KYC yang berlaku.',
          'Semua karyawan yang relevan diwajibkan untuk menyelesaikan pelatihan AML dan KYC setiap tahun. Partisipasi dalam program pelatihan terarah tambahan diwajibkan bagi semua karyawan dengan tanggung jawab AML dan KYC sehari-hari.',
        ],
      },
      {
        num: '7', title: 'Verifikasi Klien (KYC)',
        paragraphs: [
          'Perusahaan berhak meminta konfirmasi informasi pendaftaran dari Klien atas kebijakannya sendiri dan kapan saja. Untuk memverifikasi data, Perusahaan dapat meminta kepada Klien salinan yang dinotariskan dari: paspor, SIM, atau kartu identitas nasional; rekening koran atau tagihan utilitas untuk mengonfirmasi alamat tempat tinggal. Dalam beberapa kasus, Perusahaan dapat meminta Klien untuk memberikan foto sambil memegang dokumen identitas dekat dengan wajahnya.',
          'Prosedur verifikasi tidak wajib kecuali Klien telah menerima permintaan tersebut dari Perusahaan. Namun, Klien dapat secara sukarela mengirimkan salinan paspor atau dokumen identitas lainnya ke departemen dukungan klien Perusahaan. Klien harus memperhatikan bahwa ketika menyetorkan atau menarik dana melalui transfer bank, verifikasi lengkap nama dan alamat diperlukan.',
        ],
      },
      {
        num: '8', title: 'Perubahan Data & Keaslian Dokumen',
        paragraphs: [
          'Jika data pendaftaran Klien mana pun — termasuk nama lengkap, alamat, atau nomor telepon — telah berubah, Klien wajib segera memberi tahu departemen dukungan klien Perusahaan tentang perubahan-perubahan ini dan meminta agar data diperbarui, atau melakukan perubahan langsung di Profil Klien.',
          'Untuk mengubah nomor telepon di Profil Klien, Klien harus memberikan dokumen yang mengonfirmasi kepemilikan nomor telepon baru (seperti perjanjian dengan penyedia layanan telepon seluler) bersama dengan foto KTP yang dipegang dekat dengan wajah Klien. Data pribadi Klien harus konsisten di kedua dokumen tersebut.',
          'Klien bertanggung jawab atas keaslian semua dokumen dan salinannya yang diserahkan, dan mengakui hak Perusahaan untuk menghubungi otoritas penerbit yang sesuai untuk memvalidasi keasliannya.',
        ],
      },
    ],
  },
};

export default async function LangAMLPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = CONTENT[lang] ?? CONTENT.pt;

  return (
    <LegalShell
      lang={lang}
      breadcrumbHome={c.home}
      breadcrumbPage={c.page}
      title={<>{c.pageTitle}<br />{c.pageSubtitle}</>}
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
            {s.bullets && (
              <ul style={{ margin: '4px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {s.bullets.map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: 14, fontSize: 16, color: '#4A5E78', lineHeight: 1.75 }}>
                    <span style={{ flexShrink: 0, width: 8, height: 8, borderRadius: '50%', background: 'linear-gradient(135deg, #0099FA, #0070e0)', marginTop: 10, display: 'block' }} />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </LegalShell>
  );
}
