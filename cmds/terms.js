'use strict'

module.exports = (args) => {
  const terms = `
    Larghissimo       <=20     very, very slow
    Grave             20-40    slow and solemn
    Lento             40-60    slowly
    Largo             40–60    broadly
    Larghetto         60–66    rather broadly
    Adagio            66–76    slow and stately (literally, "at ease")
    Adagietto         70–80    rather slow
    Andante moderato           a bit slower than andante
    Andante           76–108   at a walking pace
    Andantino                  slightly faster than andante
    Moderato          108–120  moderately
    Allegretto                 moderately fast (but less so than allegro)
    Allegro moderato  112–124  moderately quick
    Allegro           120–168  fast, quickly and bright
    Vivace            ≈140     lively and fast (quicker than allegro)
    Vivacissimo                very fast and lively
    Allegrissimo               very fast
    Presto            168–200  very fast
    Prestissimo       >200     extremely fast

    Additional Terms:

    A piacere                           the performer may use his own discretion with
                                        regard to tempo and rhythm; literally "at pleasure"
    L'istesso tempo or Lo stesso tempo  at the same speed
    Tempo comodo                        at a comfortable (normal) speed
    Tempo di...                         the speed of a ...
                                        - Tempo di valse (speed of a waltz)
                                        - Tempo di marcia (speed of a march)
    Tempo giusto                        at a consistent speed, at the 'right' speed, in strict tempo
    Tempo semplice                      simple, regular speed, plainly

    Terms For Change In Tempo:

    Accelerando       speeding up (abbreviation: accel.)
    Allargando        growing broader; decreasing tempo, usually near the end of a piece
    Calando           going slower (and usually also softer)
    Doppio movimento  double speed
    Lentando          gradual slowing and softer
    Meno mosso        less movement or slower
    Mosso             movement, more lively, or quicker, much like più mosso, but not as extreme
    Più mosso         more movement or faster
    Precipitando      hurrying, going faster/forward
    Rallentando       gradual slowing down (abbreviation: rall.)
    Ritardando        less gradual slowing down (more sudden decrease in tempo than rallentando;
                      abbreviation: rit. or more specifically, ritard.)
    Ritenuto          slightly slower; temporarily holding back.
                      (Note that the abbreviation for ritenuto can also be rit.
                      Thus a more specific abbreviation is riten. Also, sometimes, ritenuto
                      does not reflect a tempo change but a character change instead.)
    Rubato            free adjustment of tempo for expressive purposes
    Stretto           in faster tempo, often near the conclusion of a section.
                      (Note that in fugal compositions, the term stretto refers to the
                      imitation of the subject in close succession, before the subject is
                      completed, and as such, suitable for the close of the fugue. Used in
                      this context, the term is not necessarily related to tempo.)
    Stringendo        pressing on faster (literally "tightening")
`
  console.log(terms)
}
