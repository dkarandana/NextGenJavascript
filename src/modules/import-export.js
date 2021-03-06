console.info('import-export.js');

/* Default Module import */
import moduleA from './moduleA';
console.log( 'moduleA:', moduleA );

import moduleB from './moduleB';
console.log( 'moduleB:', moduleB );

/* Named module import */
import {Data} from './moduleB';
import {Data as moduleBData} from './moduleB';

console.log( 'data:', Data );
console.log( 'moduleBData:', moduleBData );


import { cube, foo, graph } from './moduleC';

/*  When importing named exports, you can also 
    import all named exports at once with the
    following syntax */
import * as bundled from './moduleC';

console.log( 'cube(3):', cube(3) );
console.log( 'graph.draw():', graph.draw() );

console.log( bundled.cube(3) );



