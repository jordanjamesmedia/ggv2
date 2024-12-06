export interface Location {
  id: string;
  name: string;
  postcode: string;
}

export const locations: Location[] = [
  // Northern Suburbs
  { id: 'helensburgh', name: 'Helensburgh', postcode: '2508' },
  { id: 'stanwell-park', name: 'Stanwell Park', postcode: '2508' },
  { id: 'coalcliff', name: 'Coalcliff', postcode: '2508' },
  { id: 'scarborough', name: 'Scarborough', postcode: '2515' },
  { id: 'wombarra', name: 'Wombarra', postcode: '2515' },
  { id: 'coledale', name: 'Coledale', postcode: '2515' },
  { id: 'austinmer', name: 'Austinmer', postcode: '2515' },
  { id: 'thirroul', name: 'Thirroul', postcode: '2515' },
  { id: 'bulli', name: 'Bulli', postcode: '2516' },
  { id: 'woonona', name: 'Woonona', postcode: '2517' },
  { id: 'russell-vale', name: 'Russell Vale', postcode: '2517' },
  { id: 'bellambi', name: 'Bellambi', postcode: '2518' },
  { id: 'corrimal', name: 'Corrimal', postcode: '2518' },
  { id: 'tarrawanna', name: 'Tarrawanna', postcode: '2518' },
  { id: 'towradgi', name: 'Towradgi', postcode: '2518' },
  { id: 'fairy-meadow', name: 'Fairy Meadow', postcode: '2519' },
  { id: 'balgownie', name: 'Balgownie', postcode: '2519' },
  { id: 'mount-ousley', name: 'Mount Ousley', postcode: '2519' },
  { id: 'mount-pleasant', name: 'Mount Pleasant', postcode: '2519' },
  
  // Wollongong & Surrounds
  { id: 'wollongong', name: 'Wollongong', postcode: '2500' },
  { id: 'north-wollongong', name: 'North Wollongong', postcode: '2500' },
  { id: 'keiraville', name: 'Keiraville', postcode: '2500' },
  { id: 'gwynneville', name: 'Gwynneville', postcode: '2500' },
  { id: 'mount-keira', name: 'Mount Keira', postcode: '2500' },
  { id: 'west-wollongong', name: 'West Wollongong', postcode: '2500' },
  { id: 'mangerton', name: 'Mangerton', postcode: '2500' },
  { id: 'coniston', name: 'Coniston', postcode: '2500' },
  { id: 'spring-hill', name: 'Spring Hill', postcode: '2500' },
  { id: 'mount-saint-thomas', name: 'Mount Saint Thomas', postcode: '2500' },
  
  // Southern Suburbs
  { id: 'cringila', name: 'Cringila', postcode: '2502' },
  { id: 'lake-heights', name: 'Lake Heights', postcode: '2502' },
  { id: 'warrawong', name: 'Warrawong', postcode: '2502' },
  { id: 'port-kembla', name: 'Port Kembla', postcode: '2505' },
  { id: 'berkeley', name: 'Berkeley', postcode: '2506' },
  { id: 'primbee', name: 'Primbee', postcode: '2502' },
  { id: 'windang', name: 'Windang', postcode: '2528' },
  
  // Western Suburbs
  { id: 'mount-kembla', name: 'Mount Kembla', postcode: '2526' },
  { id: 'unanderra', name: 'Unanderra', postcode: '2526' },
  { id: 'farmborough-heights', name: 'Farmborough Heights', postcode: '2526' },
  { id: 'cordeaux-heights', name: 'Cordeaux Heights', postcode: '2526' },
  { id: 'kembla-grange', name: 'Kembla Grange', postcode: '2526' },
  { id: 'kembla-heights', name: 'Kembla Heights', postcode: '2526' },
  { id: 'figtree', name: 'Figtree', postcode: '2525' },
  
  // Dapto & Surrounds
  { id: 'dapto', name: 'Dapto', postcode: '2530' },
  { id: 'horsley', name: 'Horsley', postcode: '2530' },
  { id: 'kanahooka', name: 'Kanahooka', postcode: '2530' },
  { id: 'koonawarra', name: 'Koonawarra', postcode: '2530' },
  { id: 'cleveland', name: 'Cleveland', postcode: '2530' },
  { id: 'brownsville', name: 'Brownsville', postcode: '2530' },
  { id: 'penrose', name: 'Penrose', postcode: '2530' },
  
  // Shellharbour Area
  { id: 'lake-illawarra', name: 'Lake Illawarra', postcode: '2528' },
  { id: 'oak-flats', name: 'Oak Flats', postcode: '2529' },
  { id: 'shellharbour', name: 'Shellharbour', postcode: '2529' },
  { id: 'shellharbour-city', name: 'Shellharbour City', postcode: '2529' },
  { id: 'barrack-heights', name: 'Barrack Heights', postcode: '2528' },
  { id: 'barrack-point', name: 'Barrack Point', postcode: '2528' },
  { id: 'blackbutt', name: 'Blackbutt', postcode: '2529' },
  { id: 'flinders', name: 'Flinders', postcode: '2529' },
  { id: 'shell-cove', name: 'Shell Cove', postcode: '2529' },
  
  // Albion Park Area
  { id: 'albion-park', name: 'Albion Park', postcode: '2527' },
  { id: 'albion-park-rail', name: 'Albion Park Rail', postcode: '2527' },
  { id: 'calderwood', name: 'Calderwood', postcode: '2527' },
  { id: 'yellow-rock', name: 'Yellow Rock', postcode: '2527' },
  
  // Kiama Area
  { id: 'kiama', name: 'Kiama', postcode: '2533' },
  { id: 'kiama-downs', name: 'Kiama Downs', postcode: '2533' },
  { id: 'minnamurra', name: 'Minnamurra', postcode: '2533' },
  { id: 'kiama-heights', name: 'Kiama Heights', postcode: '2533' },
  { id: 'jamberoo', name: 'Jamberoo', postcode: '2533' },
  { id: 'gerringong', name: 'Gerringong', postcode: '2534' },
  { id: 'gerroa', name: 'Gerroa', postcode: '2534' },
  
  // Shoalhaven Northern Suburbs
  { id: 'berry', name: 'Berry', postcode: '2535' },
  { id: 'shoalhaven-heads', name: 'Shoalhaven Heads', postcode: '2535' },
  { id: 'bomaderry', name: 'Bomaderry', postcode: '2541' },
  { id: 'nowra', name: 'Nowra', postcode: '2541' },
  { id: 'north-nowra', name: 'North Nowra', postcode: '2541' }
]; 