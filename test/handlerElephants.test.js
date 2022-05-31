const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para o argumento count deve retornar o número inteiro 4', () => {
    const expected = 4;

    expect(handlerElephants('count')).toEqual(expected);
  });

  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    const expected = 'Jefferson';

    expect(handlerElephants('names')).toContain(expected);
  });

  it('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
    const expected = 10.5;

    expect(handlerElephants('averageAge')).toBe(expected);
  });

  it('Para o argumento location deve retornar a string NW', () => {
    const expected = 'NW';

    expect(handlerElephants('location')).toBe(expected);
  });

  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Para o argumento availability deve retornar um array de dias da semana que não contém Monday', () => {
    const expected = 'Monday';

    expect(handlerElephants('availability')).not.toContain(expected);
  });

  it('Para o argumento popularity deve retornar um número igual ou maior a 5', () => {
    const expected = 4;

    expect(handlerElephants('popularity')).toBeGreaterThan(expected);
  });
});
