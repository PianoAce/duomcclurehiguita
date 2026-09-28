
## Rol y forma de trabajar

Vas a construir, de forma iterativa, el sitio web profesional de un dúo de música de cámara. Antes de escribir código:

1. Usa la skill **`design-taste-frontend`** para definir la dirección visual a partir del brief y las referencias reales que te doy abajo — no soltar un estilo genérico de plantilla. Quiero que la dirección de diseño (paleta, tipografía, ritmo de layout, tratamiento de imágenes) se derive explícitamente de esas referencias y del carácter del dúo, y que me la resumas antes de empezar a maquetar páginas.
2. Conecta el **MCP de Playwright** desde el arranque del proyecto. Después de cada cambio de layout importante (una página nueva, un cambio de sección, un ajuste responsive), toma una captura de pantalla y revisa los estilos computados antes de darlo por terminado — no avances a la siguiente pieza del sitio sin esa verificación visual.
3. Vamos a trabajar en **VS Code con la extensión de Claude Code**, así que asume un flujo de cambios incrementales que yo pueda ir revisando en el editor, no un solo volcado de todo el sitio de una vez.

## Stack técnico (fijo, no lo cambies)

- **Astro** como framework base.
- **Tailwind CSS** para estilos.
- **Content collections de Astro** para todo el contenido repetible (ver más abajo) — nada de contenido repetible hardcodeado directo en los `.astro`.
- Deploy pensado para un hosting estático simple (Vercel/Netlify — [completar cuál usarán]).

## Sobre el proyecto — quiénes son

Este sitio es para **Mac McClure (piano) y Juan Carlos Higuita (violín)**, un dúo de música de cámara con **15 años de trayectoria**, presentaciones en teatros de varios países y un repertorio académico amplio y versátil (desde Beethoven y Mozart hasta compositores vivos como Gabriela Ortiz). El objetivo del sitio es servir como **carta de presentación profesional**: que un programador de sala, un teatro o un festival entienda en segundos el nivel del dúo, vea su trayectoria y repertorio, y encuentre fácil contactarlos o comprar boletería a sus conciertos. Es el complemento "serio" y permanente de la presencia en redes sociales que ya estamos construyendo por separado.

**Nombre oficial del dúo para el sitio:** `McClure & Higuita`
**Dominio:** `no hay aún`

## Referencias visuales reales (para el design-taste-frontend)

Imagenes de Behance, dirección de diseño minimalista, tipografía cuidada y foco total en la fotografía del artista — esta es la liga visual a la que aspiramos, adaptada a ser dos personas en vez de una:

https://www.behance.net/gallery/87401545/Classic-Music-Website?utm_source=Pinterest&utm_medium=organic

**Nota:** Paleta de colores tierra. Puedes verla en @docs/paleta.jpg

## Content collections a modelar

Tres colecciones principales, con datos reales de ejemplo más abajo para poblarlas (no uses lorem ipsum):

### 1. `conciertos`
Cada entrada es una presentación.
- `titulo` (string) — ej. nombre del programa si lo tiene
- `fecha` (date)
- `ciudad` (string)
- `lugar` (string) — ej. "Teatro Mayor Julio Mario Santo Domingo"
- `pais` (string)
- `programa` (array de referencias a `repertorio`, o texto libre si alguna obra aún no está en la colección)
- `estado` (enum: `confirmado` | `por_confirmar`)
- `boleteria_url` (string, opcional)

### 2. `repertorio`
Cada entrada es una obra que el dúo interpreta.
- `titulo` (string)
- `compositor` (string)
- `anio_composicion` (string — a veces es un rango o aproximado)
- `duracion_aprox` (string, opcional)
- `nota_programa` (rich text / markdown) — reseña breve para programas de mano
- `curiosidad` (rich text / markdown, opcional) — dato destacado, reusable en redes

### 3. `discografia`
Cada entrada es un álbum.
- `titulo` (string)
- `anio_lanzamiento` (string)
- `portada` (image)
- `tracklist` (array de referencias a `repertorio` u obras en texto libre)
- `plataformas` (array de `{ nombre, url }`) — Spotify, Apple Music, etc.
- `estado` (enum: `lanzado` | `proximamente`)

Si durante el desarrollo ves que conviene una cuarta colección para prensa/reseñas de crítica, propónmela — no la modeles todavía por falta de contenido real.

## Contenido real para poblar las colecciones (borrador — ajustar antes de publicar)

**Conciertos confirmados o en agenda:**
- Septiembre 2026 — Ibagué y Pereira, Colombia (fechas por confirmar a fin de julio)
- 22 y 23 de octubre 2026 — Miami, EE. UU.
- 25 de octubre 2026 — North Carolina, EE. UU.
- 8 de noviembre 2026 — Teatro Mayor Julio Mario Santo Domingo, Bogotá
- 10 de diciembre 2026 — Compensar (Av. 68), Bogotá

**Repertorio conocido hasta ahora:**
Mozart (Sonata K380), Beethoven (Sonata Op. 30 n.º 2), Gabriela Ortiz (*De Cuerda y Madera*), Manuel de Falla (Suite de *El amor brujo*), Brahms (Scherzo), Amy Beach (Romanza), Eduard Toldrà (*Sonetí de la Rosada*), Leonardo Federico Hoyos (estreno, obra por confirmar), y obras nuevas de Gustavo Parra y Moisés Bertrán aún sin entregar por los compositores.

**Discografía:**
Dos álbumes grabados en junio de 2026, con lanzamiento previsto a **principios de 2027**:
- Álbum 1: música colombiana.
- Álbum 2: Mozart, Amy Beach y otras obras (programa aún por confirmar del todo).

## Estructura de páginas sugerida

- **Inicio** — foto/video hero de los dos, una línea de posicionamiento, próximo concierto destacado.
- **Biografía** — trayectoria de 15 años, individual de cada uno y como dúo.
- **Repertorio** — listado/filtro de la colección `repertorio`.
- **Conciertos** — calendario de la colección `conciertos`, separando próximos de pasados.
- **Discografía** — la colección `discografia`.
- **Prensa / Media** — espacio para reseñas y para el material que se vaya produciendo (fotos, reels destacados) — `[completar si quieren integrarlo con Instagram/YouTube directamente]`.
- **Contacto** — para programadores/teatros; formulario o correo directo `[completar correo de contacto]`.

## Cómo quiero que avances

1. Primero: definición de dirección visual con `design-taste-frontend` a partir de este brief y las referencias — preséntamela antes de tocar código.
2. Luego: scaffold del proyecto Astro + Tailwind, configuración de las tres content collections con sus schemas en `content.config.ts`.
3. Luego, página por página empezando por **Inicio**, con captura + revisión de estilos computados vía Playwright después de cada una antes de seguir con la siguiente.
4. Poblar cada colección con el contenido real de arriba (marcando claramente lo que sigue como placeholder, ej. fotos, para que yo las reemplace).

Antes de arrancar, dime si algo de este brief no queda claro o si necesitas que te confirme algún dato antes de tocar código.
