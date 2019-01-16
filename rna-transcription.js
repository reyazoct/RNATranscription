export function toRna(dna) {
    var rna = '';
    for (var i = 0; i < dna.length; i++) {
        if (dna[i] == 'C')
            rna += 'G';
        else if (dna[i] == 'G')
            rna += 'C';
        else if (dna[i] == 'A')
            rna += 'U';
        else if (dna[i] == 'T')
            rna += 'A';
        else
            throw 'Invalid input DNA.'
    }
    return rna
}
