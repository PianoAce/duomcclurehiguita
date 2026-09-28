export const languages = {
  es: "ES",
  en: "EN",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

export const ui = {
  es: {
    nav: {
      home: "Inicio",
      biography: "Biografía",
      concerts: "Conciertos",
      discography: "Discografía",
      contact: "Contacto",
      openMenu: "Abrir menú",
    },
    footer: {
      tagline: "Dúo de música de cámara — piano y violín. 15 años de trayectoria.",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
    },
    home: {
      metaTitle: "Inicio",
      heroDescription: "Dúo de piano y violín. Quince años haciendo música, de Mozart a compositores contemporáneos.",
      nextConcerts: "Próximos conciertos",
      viewFullSchedule: "Ver agenda completa",
      noConcerts: "Agenda en definición — vuelve pronto.",
    },
    biography: {
      metaTitle: "Biografía",
      heroDescription:
        "Quince años de trayectoria como dúo, con presentaciones en teatros de varios países y un repertorio académico que va de Beethoven y Mozart a compositores vivos como Gabriela Ortiz.",
      piano: "Piano",
      violin: "Violín",
      asADuo: "Como dúo",
      macBio: `Mac McClure es reconocido internacionalmente por sus por sus apasionados interpretaciones del repertorio Español y Latinoamericano.
          El compositor Xavier Montsalvatge dijo “Mac conoce mi música mejor que yo y sus interpretaciones de Albéniz, Granados y Mompou son de un sentido autenticidad”.
          El crítico Dan Stevens de la revista británica International Record Review dijo “McClure es un comunicador poderoso "envuelve a los oyentes en el mundo mágico que crea"
          <br><br>
          Nació en florida EEUU, es Licenciado en filología de la universidad de Carolina del Norte EEUU.
          Empezó sus estudios musicales con Consuelo Colomer, y continuó con Michael Zenge y Phyllis Rappeport.
          En 1984 se traslado a Barcelona para estudiar con Carlota Garriga en el prestigioso Academia Marshall, institución fundada en 1901 por Enrique Granados.
          A partir de 1991 trabajó con Alicia de Larrocha el repertorio español y clásico.
          Su amplio producto de cds (más de 40 títulos) se encuentran plataformas digitales como iTunes, Amazon o Spotify.
          <br><br>
          Como editor ha publicado trabajos sobre interpretación y ediciones críticas por la editorial Boileau in Barcelona
          <br><br>
          Desde 2010 es profesor asociado en la Universidad Nacional de Colombia.
          En 2011 fue nombrado director del Conservatorio Nacional de Colombia, cargo que desempeñó hasta julio de 2015.`,
      juanBio: `Además de ser un violinista colombiano de gran trayectoria nominado al Grammy Latino, Juan Carlos Higuita ocupa un lugar único en el mundo musical.
          Es un especialista muy peculiar: un instrumentista que ha apostado todo por la música latinoamericana contemporánea.
          <br><br>
          A lo largo de su excepcional carrera ha tocado como solista con las orquestas más importantes de Colombia y como concertino o músico invitado en Florilegium Musicum Wien,Orpheus Ensemble München,City of London Sinfonía y otras.
          <br><br>
          Con excelencia académica realizó estudios de pregrado en pedagogía instrumental en la Universidad de Música de Viena, y pregrado y maestría en violín concertista en el conservatorio de la misma ciudad.
          Su interés por la música de cámara lo ha llevado a participar en festivales como el Donaueschinger Musik Tage en Alemania, el Festival Internacional para Guitarra en Nürnberg, el Festival Internacional de Música de Cartagena, y otros.
          <br><br>
          Actualmente es profesor de violín y música de cámara de la Universidad Nacional de Colombia, la Pontificia Universidad Javeriana, la Universidad de los Andes; integrante de la Sociedad de Cámara de Bogotá, el Bogotá Piano Trío y el ensamble CG.`,
      duoBio: `Al ver que sus gustos por el helado, el vino y los donuts eran idénticos, era obvio que tenían que tocar juntos.
          <br><br>
          Juan Carlos Higuita y Mac McClure actuaron juntos por primera vez en 2011,
          durante la ceremonia en la que el Conservatorio de Música de la Universidad Nacional recibió una condecoración en el Congreso de la República (un pretexto tan bueno como cualquier otro para empezar una amistad musical de quince años).
          Después de ese primer concierto, Juan Carlos decidió abandonar su investigación sobre acordes de sexta alterada sobre pedal de dominante en la obra del compositor austro-ugandés Walter Bidet Streicholz. Nunca se arrepintió.
          <br><br>
          Desde entonces no han parado de colaborar en proyectos, grabaciones y recitales, siempre disfrutando y haciendo disfrutar al público que los acompaña.
          Hoy son reconocidos como el dúo de cámara profesional más longevo del momento en Colombia, con una trayectoria internacional siempre ascendente: Estados Unidos, Canadá, Inglaterra, Escocia, España, Francia y Serbia.
          <br><br>
          Tocan música de gente rara y vanguardista con la misma ilusión que tocan música de gente rara que lleva siglos enterrada.
          Y a lo largo de cuatro continentes, han comprobado con rigor casi científico la calidad y variedad del vino, el helado y los donuts.
          <br><br>
          Sus intereses individuales no siempre coinciden (a McClure le apasionan las rutas migratorias de los pingüinos fairy, algo que jamás ha interferido con sus intereses en común con Higuita por la música para piano y violín)
          pero se ayudan mutuamente donde más falta hace: Higuita hace un gran esfuerzo por ayudar a McClure a superar su alergia a Beethoven, y a cambio, McClure toca acordes de sexta alterada sobre pedal de dominante en distintas tonalidades.
          <br><br>
          Siguen estudiando porque ensayar es el momento perfecto para un donut, grabar termina siempre en helado, y un concierto no está completo sin su vino.`,
    },
    concerts: {
      metaTitle: "Conciertos",
      heroDescription: "Agenda de presentaciones del dúo.",
      upcoming: "Próximos",
      past: "Pasados",
      noConcerts: "Agenda en definición — vuelve pronto.",
    },
    concertRow: {
      dateTBD: "Fecha por confirmar",
      tickets: "Boletería",
      premiere: "estreno",
    },
    discography: {
      metaTitle: "Discografía",
      heroDescription: "Grabaciones disponibles del dúo.",
      availableNow: "Disponible ahora",
      comingSoon: "Próximamente",
      comingSoonDigital: "Próximamente disponible en plataformas digitales.",
      coverPending: "Portada — pendiente",
    },
    repertoire: {
      metaTitle: "Repertorio",
      heroDescription:
        "Un catálogo académico versátil — del clasicismo vienés a los estrenos y encargos que el dúo sigue construyendo con compositores vivos.",
    },
    contact: {
      metaTitle: "Contacto",
      heroDescription: "Para programación, contratación o consultas, escríbenos directamente.",
    },
  },
  en: {
    nav: {
      home: "Home",
      biography: "Biography",
      concerts: "Concerts",
      discography: "Discography",
      contact: "Contact",
      openMenu: "Open menu",
    },
    footer: {
      tagline: "Chamber music duo — piano and violin. 15 years of experience.",
      contact: "Contact",
      rights: "All rights reserved.",
    },
    home: {
      metaTitle: "Home",
      heroDescription: "Piano and violin duo. Fifteen years making music, from Mozart to contemporary composers.",
      nextConcerts: "Upcoming concerts",
      viewFullSchedule: "View full schedule",
      noConcerts: "Schedule in the works — check back soon.",
    },
    biography: {
      metaTitle: "Biography",
      heroDescription:
        "Fifteen years of experience as a duo, with performances in theaters across several countries and an academic repertoire spanning Beethoven and Mozart to living composers such as Gabriela Ortiz.",
      piano: "Piano",
      violin: "Violin",
      asADuo: "As a duo",
      macBio: `Mac McClure is internationally recognized for his passionate interpretations of the Spanish and Latin American repertoire.
          Composer Xavier Montsalvatge said, “Mac knows my music better than I do, and his interpretations of Albéniz, Granados, and Mompou have a genuine sense of authenticity.”
          Critic Dan Stevens of the British magazine International Record Review said, “McClure is a powerful communicator who envelops listeners in the magical world he creates.”
          <br><br>
          Born in Florida, USA, he holds a degree in Philology from the University of North Carolina, USA.
          He began his musical studies with Consuelo Colomer, and continued with Michael Zenge and Phyllis Rappeport.
          In 1984 he moved to Barcelona to study with Carlota Garriga at the prestigious Academia Marshall, an institution founded in 1901 by Enrique Granados.
          From 1991 he worked with Alicia de Larrocha on the Spanish and classical repertoire.
          His extensive discography (more than 40 titles) is available on digital platforms such as iTunes, Amazon, and Spotify.
          <br><br>
          As an editor, he has published work on performance practice and critical editions for the Boileau publishing house in Barcelona.
          <br><br>
          Since 2010 he has been an associate professor at the Universidad Nacional de Colombia.
          In 2011 he was appointed director of the Conservatorio Nacional de Colombia, a position he held until July 2015.`,
      juanBio: `In addition to being a Colombian violinist of great standing and a Latin Grammy nominee, Juan Carlos Higuita occupies a unique place in the musical world.
          He is a very particular kind of specialist: a performer who has staked everything on contemporary Latin American music.
          <br><br>
          Throughout his exceptional career he has performed as a soloist with Colombia's most important orchestras, and as concertmaster or guest musician with the Florilegium Musicum Wien, Orpheus Ensemble München, City of London Sinfonia, and others.
          <br><br>
          With outstanding academic credentials, he completed undergraduate studies in instrumental pedagogy at the University of Music in Vienna, along with a bachelor's and master's degree in solo violin performance at the same city's conservatory.
          His interest in chamber music has led him to take part in festivals such as the Donaueschinger Musiktage in Germany, the International Guitar Festival in Nuremberg, the Cartagena International Music Festival, and others.
          <br><br>
          He currently teaches violin and chamber music at the Universidad Nacional de Colombia, the Pontificia Universidad Javeriana, and the Universidad de los Andes, and is a member of the Bogotá Chamber Music Society, the Bogotá Piano Trio, and the CG ensemble.`,
      duoBio: `Once they realized their taste in ice cream, wine, and donuts was identical, it was obvious they had to play together.
          <br><br>
          Juan Carlos Higuita and Mac McClure performed together for the first time in 2011,
          during the ceremony in which the Music Conservatory of the Universidad Nacional received a commendation at Colombia's Congress (as good an excuse as any to start a fifteen-year musical friendship).
          After that first concert, Juan Carlos decided to abandon his research on altered sixth chords over a dominant pedal in the work of Austro-Ugandan composer Walter Bidet Streicholz. He never regretted it.
          <br><br>
          Since then they haven't stopped collaborating on projects, recordings, and recitals, always enjoying themselves and delighting the audiences who join them.
          Today they're recognized as the longest-running professional chamber duo in Colombia, with an ever-rising international career: the United States, Canada, England, Scotland, Spain, France, and Serbia.
          <br><br>
          They play music by strange, avant-garde people with the same enthusiasm as music by strange people who've been buried for centuries.
          And across four continents, they've verified with near-scientific rigor the quality and variety of the wine, ice cream, and donuts.
          <br><br>
          Their individual interests don't always align (McClure is passionate about the migratory routes of fairy penguins, something that has never interfered with his and Higuita's shared interest in music for piano and violin),
          but they help each other exactly where it's needed most: Higuita makes a great effort to help McClure get over his allergy to Beethoven, and in exchange, McClure plays altered sixth chords over a dominant pedal in various keys.
          <br><br>
          They keep on studying because rehearsal is the perfect moment for a donut, recording always ends in ice cream, and a concert isn't complete without their wine.`,
    },
    concerts: {
      metaTitle: "Concerts",
      heroDescription: "The duo's schedule of performances.",
      upcoming: "Upcoming",
      past: "Past",
      noConcerts: "Schedule in the works — check back soon.",
    },
    concertRow: {
      dateTBD: "Date to be confirmed",
      tickets: "Tickets",
      premiere: "premiere",
    },
    discography: {
      metaTitle: "Discography",
      heroDescription: "Recordings available from the duo.",
      availableNow: "Available now",
      comingSoon: "Coming soon",
      comingSoonDigital: "Coming soon to digital platforms.",
      coverPending: "Cover art — pending",
    },
    repertoire: {
      metaTitle: "Repertoire",
      heroDescription:
        "A versatile academic catalog — from Viennese classicism to the premieres and commissions the duo keeps building with living composers.",
    },
    contact: {
      metaTitle: "Contact",
      heroDescription: "For programming, booking, or inquiries, write to us directly.",
    },
  },
} as const;

export function useTranslations(lang: Lang) {
  return ui[lang];
}
