/**
 * @class ProductRepositoryMock
 * @description Used to Mock the actual ProductRepository
 */
class ProductRepositoryMock
{
    constructor( dbContext )
    {
        this._dbContext = dbContext;
    }

    /**
     * @method AddAsync
     * @param {object} productObject
     * @description
     * @todo
     */
    AddAsync( productObject )
    {
        var db = new this._dbContext();
        db.push( productObject );
        return new Promise( (resolve) =>{
            resolve( db.length )
        });
    }


    /**
     * @method DeleteAsync
     * @param {int} id
     * @description
     * @todo
     */
    async DeleteAsync( id )
    {
        await dbContext.QueryAsync(`
            DELETE FROM Product where productID = ${ id }`
        );
    }


    /**
     * @method UpdateAsync
     * @param {object} productObject
     * @description
     * @todo
     */
    async UpdateAsync( productObject )
    {
        await dbContext.QueryAsync(`UPDATE Product SET ${ productObject }`);
    }

    
    /**
     * @method GetAsync
     * @param {int} id 
     * @description Retrieve records from dbContext by id
     * @todo Transform Results into a Domain Object
     */
    async GetAsync( id )
    {
        await dbContext.QueryAsync(`
            SELECT * FROM Product WHERE productID = ${ id }`
        );  
    }


    /**
     * @method ListAsync
     * @description Retrieve All Records from dbContext
     * @returns Promise<ProductObject>
     * @todo Transform Results into a Domain Object
     */
    async ListAsync()
    {
        var result = await dbContext.QueryAsync(`
            Select * From Product
        `);
        return result;
    }

}