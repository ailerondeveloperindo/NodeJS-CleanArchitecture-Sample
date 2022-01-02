const assert = require('')
const ProductService = require('../../src/application/services/ProductService');
const productTableMock = require('./mockModels/productTableMock');
const ProductRepositoryMock = require('./mockRepositories/productRepositoryMock');
const instanceofProductService = new ProductService( new ProductRepositoryMock( productTableMock ) );

describe('Product Service', function(){
    describe('CreateProduct Method', function() {
        it('Should Returns 2 if the operation succeeds', function() {
            
        });
    })
})