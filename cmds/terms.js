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

A piacere                            the performer may use his own discretion with
                                     regard to tempo and rhythm; literally "at pleasure"
L'istesso tempo or Lo stesso tempo   at the same speed
Tempo comodo                         at a comfortable (normal) speed
Tempo di...                          the speed of a ...
                                     - Tempo di valse (speed of a waltz)
                                     - Tempo di marcia (speed of a march)
Tempo giusto                         at a consistent speed, at the 'right' speed, in strict tempo
Tempo semplice                       simple, regular speed, plainly
`
  console.log(terms)
}
