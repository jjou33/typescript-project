type Heroes1 = 'Hulk' | 'Capt' | 'Thor';

type HereoAges = { [K in Heroes1]: number };

const ages1: HereoAges = {
  Hulk: 33,
  Capt: 12,
  Thor: 34,
};
